import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import dns from "node:dns";


dns.setDefaultResultOrder("ipv4first");

const getOrigin = (url?: string) => {
  if (!url || url.includes("localhost")) return undefined;
  try {
    return new URL(url.startsWith("http") ? url : `https://${url}`).origin;
  } catch {
    return undefined;
  }
};

const fallbackBaseURL =
  getOrigin(process.env.BETTER_AUTH_URL) ||
  getOrigin(process.env.NEXT_PUBLIC_APP_URL) ||
  getOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
  getOrigin(process.env.VERCEL_URL) ||
  "http://localhost:3000";

const trustedOrigins = Array.from(
  new Set(
    [
      fallbackBaseURL,
      getOrigin(process.env.BETTER_AUTH_URL),
      getOrigin(process.env.NEXT_PUBLIC_APP_URL),
      getOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL),
      getOrigin(process.env.VERCEL_URL),
      "http://localhost:3000",
    ].filter(Boolean) as string[]
  )
);

const allowedHosts = Array.from(
  new Set(
    [
      "localhost:3000",
      "127.0.0.1:3000",
      "sun-mart.vercel.app",
      process.env.VERCEL_PROJECT_PRODUCTION_URL,
      process.env.VERCEL_URL,
    ]
      .filter(Boolean)
      .map((host) => host!.replace(/^https?:\/\//, ""))
  )
);

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://tayabunn_db:9HvLm0FhozYjgAty@ac-zbaixti-shard-00-00.x8nftsj.mongodb.net:27017,ac-zbaixti-shard-00-01.x8nftsj.mongodb.net:27017,ac-zbaixti-shard-00-02.x8nftsj.mongodb.net:27017/sun-mart?ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error(
    "Google sign-in is not configured. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your deployment environment."
  );
}

const client = new MongoClient(MONGODB_URI);
const db = client.db("sun-mart");

export const auth = betterAuth({
  baseURL: process.env.VERCEL
    ? {
        allowedHosts,
        fallback: fallbackBaseURL,
        protocol: "https",
      }
    : fallbackBaseURL,
  trustedOrigins,
  database: mongodbAdapter(db),
  experimental: { joins: true },
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders:{
    google:{
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    }
  },
  logger: {
    level: "debug",
    onLog: (level, message, error) => {
      if (error) console.error(`[BetterAuth Error]: ${message}`, error);
    }
  }
});

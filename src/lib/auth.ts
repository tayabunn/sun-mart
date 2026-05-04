import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import dns from "node:dns";

// Fix for Windows DNS issues
dns.setDefaultResultOrder("ipv4first");

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

const client = new MongoClient(MONGODB_URI);
const db = client.db("sun-mart");

export const auth = betterAuth({
  database: mongodbAdapter(db),
  experimental: { joins: true },
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders:{
    google:{
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }
  },
  logger: {
    level: "debug",
    onLog: (level, message, error) => {
      if (error) console.error(`[BetterAuth Error]: ${message}`, error);
    }
  }
});
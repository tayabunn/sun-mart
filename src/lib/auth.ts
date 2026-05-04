import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.error("❌ Google OAuth credentials missing from .env");
}

const client = new MongoClient(process.env.MONGODB_URI || "");
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
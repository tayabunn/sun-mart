import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import dns from "node:dns";


dns.setDefaultResultOrder("ipv4first");


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://tayabunn_db:9HvLm0FhozYjgAty@ac-zbaixti-shard-00-00.x8nftsj.mongodb.net:27017,ac-zbaixti-shard-00-01.x8nftsj.mongodb.net:27017,ac-zbaixti-shard-00-02.x8nftsj.mongodb.net:27017/sun-mart?ssl=true&authSource=admin&retryWrites=true&w=majority";

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
import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const GET = async (req: Request) => {
    try {
        return await toNextJsHandler(auth).GET(req);
    } catch (e) {
        console.error("Auth GET Error:", e);
        throw e;
    }
};

export const POST = async (req: Request) => {
    try {
        return await toNextJsHandler(auth).POST(req);
    } catch (e) {
        console.error("Auth POST Error:", e);
        throw e;
    }
};
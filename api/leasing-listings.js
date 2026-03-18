import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const rateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

function getClientIP(req) {
  return (
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const ip = getClientIP(req);

  const { success } = await rateLimit.limit(ip);

  if (success) {
    try {
      const { data, error } = await supabase
        .from("sublease_listings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
      }

      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  } else return res.status(429).json({ error: "Request timed out" });
}

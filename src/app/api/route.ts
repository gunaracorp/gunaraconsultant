import { NextResponse } from "next/server";
import { VERSI, NAMA_RILIS } from "@/lib/version";

export const dynamic = "force-dynamic";

/**
 * S6 — Rate limiter memori-dalam sederhana (fixed window).
 * Cukup untuk volume publik; untuk skala besar nanti diganti Redis.
 * Kunci berdasarkan IP dari header proxy standar.
 */
const WINDOW_MS = 60_000;
const MAX_REQ = 30;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimit(key: string): { ok: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.reset <= now) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return { ok: true, remaining: MAX_REQ - 1, reset: now + WINDOW_MS };
  }
  entry.count += 1;
  return {
    ok: entry.count <= MAX_REQ,
    remaining: Math.max(0, MAX_REQ - entry.count),
    reset: entry.reset,
  };
}

export async function GET(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local";
  const { ok, remaining, reset } = rateLimit(ip);

  if (!ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((reset - Date.now()) / 1000)),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  return NextResponse.json(
    {
      status: "ok",
      message: `GConsultant API — v${VERSI} "${NAMA_RILIS}". Status endpoint: /api/status`,
      version: VERSI,
    },
    { headers: { "X-RateLimit-Remaining": String(remaining) } }
  );
}

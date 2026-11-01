import { NextResponse } from "next/server";
import { VERSI, NAMA_RILIS, TANGGAL_RILIS } from "@/lib/version";
import { SERVICES, KATALOG_COUNT, ALL_COUNT } from "@/data/services";
import { UMEA_LEVELS, UMEA_FUNCTIONS, UMEA_DOC_TIERS } from "@/data/umea";

export const dynamic = "force-dynamic";

/**
 * S12 — Endpoint status resmi (observability + health check).
 * Dipakai monitoring eksternal, runbook, dan badge versi.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "gconsultant",
      version: VERSI,
      release: NAMA_RILIS,
      releasedAt: TANGGAL_RILIS,
      uptimeSince: new Date().toISOString(),
      modules: {
        services: SERVICES.length,
        catalogServices: KATALOG_COUNT,
        servicesTotal: ALL_COUNT,
        umeaLevels: UMEA_LEVELS.length,
        umeaFunctions: UMEA_FUNCTIONS.length,
        umeaDocTiers: UMEA_DOC_TIERS.length,
      },
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    }
  );
}

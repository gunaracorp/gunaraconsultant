import { NextRequest, NextResponse } from "next/server";
import {
  filterServices,
  paginateServices,
  categoryCounts,
  phaseCounts,
  CATEGORIES,
  PHASES,
  TOTAL_TARGET,
} from "@/data/services";

/**
 * GET /api/services
 * Query: q, category, phase (1-4), popular ("true"/"1"), page, perPage (max 48)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? undefined;
  const category = searchParams.get("category") ?? undefined;
  const phaseParam = searchParams.get("phase");
  const popularParam = searchParams.get("popular");
  const pageParam = parseInt(searchParams.get("page") ?? "1", 10);
  const perPageParam = parseInt(searchParams.get("perPage") ?? "12", 10);

  const phase =
    phaseParam && ["1", "2", "3", "4"].includes(phaseParam)
      ? (parseInt(phaseParam, 10) as 1 | 2 | 3 | 4)
      : null;
  const popular = popularParam === "true" || popularParam === "1" ? true : false;

  const filtered = filterServices({
    q,
    category,
    phase,
    popular,
  });

  const perPage = Math.min(Math.max(1, perPageParam), 48);
  const result = paginateServices(filtered, pageParam, perPage);

  const counts = categoryCounts();

  return NextResponse.json({
    ok: true,
    target: TOTAL_TARGET,
    ...result,
    categories: CATEGORIES.map((c) => ({
      ...c,
      count: counts[c.slug] ?? 0,
    })),
    phases: PHASES.map((p) => ({
      id: p.id,
      name: p.name,
      window: p.window,
      status: p.status,
      count: phaseCounts()[p.id],
    })),
  });
}

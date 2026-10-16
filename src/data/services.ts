/**
 * Agregator katalog layanan — single source untuk API & UI.
 */
import { SERVICES as RAW_SERVICES } from "./services-data";
import { SERVICES_EXTRA } from "./services-extra";
import {
  CATEGORIES,
  PHASES,
  CATEGORY_TARGETS,
  CATEGORY_TO_PHASE,
  CATEGORY_CODES,
  TOTAL_TARGET,
  type ServiceItem,
  type CategorySlug,
  type PhaseId,
} from "./services-types";

export {
  CATEGORIES,
  PHASES,
  CATEGORY_TARGETS,
  CATEGORY_TO_PHASE,
  CATEGORY_CODES,
  TOTAL_TARGET,
};

export type { ServiceItem, CategorySlug, PhaseId };

export const SERVICES: ServiceItem[] = [...RAW_SERVICES, ...SERVICES_EXTRA];

export interface ServiceQuery {
  q?: string;
  category?: string;
  phase?: number | null;
  popular?: boolean;
  page?: number;
  perPage?: number;
}

export interface PaginatedServices {
  items: ServiceItem[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export function filterServices({
  q,
  category,
  phase,
  popular,
}: Pick<ServiceQuery, "q" | "category" | "phase" | "popular">): ServiceItem[] {
  let items = SERVICES;
  if (category && category !== "semua") {
    items = items.filter((s) => s.category === category);
  }
  if (phase) {
    items = items.filter((s) => s.phase === phase);
  }
  if (popular) {
    items = items.filter((s) => s.popular);
  }
  if (q && q.trim().length > 0) {
    const needle = q.trim().toLowerCase();
    items = items.filter(
      (s) =>
        s.name.toLowerCase().includes(needle) ||
        s.desc.toLowerCase().includes(needle) ||
        s.code.toLowerCase().includes(needle) ||
        s.legalBasis.toLowerCase().includes(needle) ||
        s.category.toLowerCase().includes(needle)
    );
  }
  return items;
}

export function paginateServices(
  items: ServiceItem[],
  page = 1,
  perPage = 12
): PaginatedServices {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    total,
    page: safePage,
    perPage,
    totalPages,
  };
}

export function categoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const c of CATEGORIES) counts[c.slug] = 0;
  for (const s of SERVICES) counts[s.category] = (counts[s.category] ?? 0) + 1;
  return counts;
}

export function phaseCounts(): Record<PhaseId, number> {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0 } as Record<PhaseId, number>;
  for (const s of SERVICES) counts[s.phase] = (counts[s.phase] ?? 0) + 1;
  return counts;
}

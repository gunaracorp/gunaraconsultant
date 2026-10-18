import { CATEGORIES, type Service, type ServiceCategory } from "./services-types";
import { SERVICES_A } from "./services-a";
import { SERVICES_B } from "./services-b";

export type { Service, ServiceCategory, ServiceFaq } from "./services-types";
export { CATEGORIES } from "./services-types";

export const SERVICES: Service[] = [...SERVICES_A, ...SERVICES_B];

export const SERVICE_COUNT = SERVICES.length;
export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCategory(id: string): ServiceCategory | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function servicesByCategory(catId: string): Service[] {
  return SERVICES.filter((s) => s.cat === catId);
}

export function relatedServices(service: Service, limit = 4): Service[] {
  const same = SERVICES.filter((s) => s.cat === service.cat && s.slug !== service.slug);
  return same.slice(0, limit);
}

/** Valid: setiap service harus punya kategori & slug unik & konten lengkap */
export function validateServices(): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  for (const s of SERVICES) {
    if (seen.has(s.slug)) errors.push(`Duplicate slug: ${s.slug}`);
    seen.add(s.slug);
    if (!getCategory(s.cat)) errors.push(`Unknown category: ${s.slug} → ${s.cat}`);
    if (!s.keywords?.length) errors.push(`No keywords: ${s.slug}`);
    if (!s.faq?.length) errors.push(`No FAQ: ${s.slug}`);
  }
  return errors;
}

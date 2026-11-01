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

/* ============================================================
 * KATALOG LENGKAP — integrasi 500 layanan PusatPerizinan (v3.2.0)
 * Dua tier: SERVICES (46 unggulan, halaman detail penuh bilingual)
 * + KATALOG (500, harga resmi & diskon). Total 546 layanan aktif.
 * ============================================================ */
import { KATALOG, getCatalog, catalogBySub, KATALOG_COUNT, type CatalogItem } from "./katalog";
import { getCatalogSub, getCatalogKat, SUB_ALL, type CatalogSub, type CatalogKat } from "./katalog-meta";

export { KATALOG, getCatalog, catalogBySub, KATALOG_COUNT } from "./katalog";
export type { CatalogItem } from "./katalog";
export { getCatalogSub, getCatalogKat, SUB_ALL } from "./katalog-meta";
export type { CatalogSub, CatalogKat } from "./katalog-meta";

/** Total seluruh layanan aktif GConsultant (unggulan + katalog). */
export const ALL_COUNT = SERVICES.length + KATALOG_COUNT;

/** Format harga Rupiah: 3380000 → "Rp 3.380.000" */
export function formatRp(n: number): string {
  return "Rp " + n.toLocaleString("id-ID");
}

/**
 * Resolver union: cari slug di layanan unggulan dahulu, lalu katalog.
 * `kind` menentukan renderer halaman detail yang dipakai.
 */
export function resolveAnySlug(
  slug: string
): { kind: "featured"; service: Service } | { kind: "catalog"; item: CatalogItem } | undefined {
  const svc = getService(slug);
  if (svc) return { kind: "featured", service: svc };
  const item = getCatalog(slug);
  if (item) return { kind: "catalog", item };
  return undefined;
}

/** Semua slug aktif untuk sitemap & validasi (546). */
export function allSlugs(): string[] {
  return [...SERVICE_SLUGS, ...KATALOG.map((k) => k.slug)];
}

/** Validasi anti-bentrokan slug lintas tier + kelengkapan meta katalog. */
export function validateAllSlugs(): string[] {
  const errors = validateServices();
  const seen = new Set(SERVICE_SLUGS);
  for (const k of KATALOG) {
    if (seen.has(k.slug)) errors.push(`Slug bentrok featured/katalog: ${k.slug}`);
    seen.add(k.slug);
    if (!getCatalogSub(k.subCode)) errors.push(`Sub meta hilang: ${k.subCode} (${k.slug})`);
    if (!getCatalogKat(k.catCode)) errors.push(`Kategori meta hilang: ${k.catCode} (${k.slug})`);
  }
  return errors;
}

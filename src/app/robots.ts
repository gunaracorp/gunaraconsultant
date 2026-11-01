import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

/**
 * robots.txt dinamis (v3.3.0 — Google Search Optimization).
 * Sumber kebenaran tunggal: BRAND.siteUrl — referensi sitemap selalu
 * sinkron dengan domain produksi tanpa perlu diedit manual.
 *
 * Catatan dewan SEO:
 * - /api/ diblokir (tanpa nilai indeks, hemat crawl budget).
 * - Halaman 404 tidak butuh Disallow eksplisit — Google mengabaikannya.
 * - Semua halaman konten terbuka penuh untuk Googlebot & Googlebot-Image.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BRAND.siteUrl}/sitemap.xml`,
    host: BRAND.siteUrl,
  };
}

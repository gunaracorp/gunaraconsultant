import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";
import { SERVICES, KATALOG } from "@/data/services";
import { POSTS } from "@/data/blog";
import { KOTA_WILAYAH, PROVINSI_WILAYAH } from "@/data/wilayah";
import { LAYANAN_PROGRAMMATIC } from "@/data/layanan-programmatic";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BRAND.siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...[
      { path: "/layanan", priority: 0.9 },
      { path: "/kanal-pemerintah", priority: 0.9 },
      { path: "/sertifikasi-travel", priority: 0.9 },
      { path: "/sertifikasi-travel/ppiu", priority: 0.8 },
      { path: "/sertifikasi-travel/kota", priority: 0.7 },
      { path: "/metodologi", priority: 0.9 },
      { path: "/asesmen", priority: 0.9 },
      { path: "/tentang-kami", priority: 0.8 },
      { path: "/blog", priority: 0.8 },
      { path: "/keunggulan", priority: 0.8 },
      { path: "/proses", priority: 0.8 },
      { path: "/provinsi", priority: 0.8 },
      { path: "/pendiri", priority: 0.8 },
      { path: "/faq", priority: 0.8 },
      { path: "/kontak", priority: 0.8 },
      { path: "/kebijakan-privasi", priority: 0.3 },
      { path: "/syarat-ketentuan", priority: 0.3 },
    ].map((p) => ({
      url: `${BRAND.siteUrl}${p.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
  ];

  const blogPages: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${BRAND.siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BRAND.siteUrl}/layanan/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const catalogPages: MetadataRoute.Sitemap = KATALOG.map((k) => ({
    url: `${BRAND.siteUrl}/layanan/${k.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Halaman programmatic SEO v3.12.0: Izin PPIU & PIHK per kota/kabupaten (514)
  // dan per provinsi (38) — dua layanan = 1.104 halaman dinamis.
  const programmaticPages: MetadataRoute.Sitemap = (["ppiu", "pihk"] as const).flatMap((key) => {
    const s = LAYANAN_PROGRAMMATIC[key];
    return [
      ...KOTA_WILAYAH.map((k) => ({
        url: `${BRAND.siteUrl}${s.pathPrefix}/${k.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })),
      ...PROVINSI_WILAYAH.map((p) => ({
        url: `${BRAND.siteUrl}${s.pathPrefix}/provinsi/${p.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })),
    ];
  });

  return [...staticPages, ...blogPages, ...servicePages, ...catalogPages, ...programmaticPages];
}

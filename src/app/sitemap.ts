import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";
import { SERVICES } from "@/data/services";

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
      { path: "/keunggulan", priority: 0.8 },
      { path: "/proses", priority: 0.8 },
      { path: "/provinsi", priority: 0.8 },
      { path: "/pendiri", priority: 0.8 },
      { path: "/faq", priority: 0.8 },
      { path: "/kontak", priority: 0.8 },
    ].map((p) => ({
      url: `${BRAND.siteUrl}${p.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BRAND.siteUrl}/layanan/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}

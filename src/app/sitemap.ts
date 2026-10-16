import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

/**
 * Sitemap XML — semua bagian penting halaman utama terdaftar
 * agar Google mengindeks seluruh konten (500 layanan, fase, legasi, dll).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
      alternates: {
        languages: {
          "id-ID": SITE.url,
          "x-default": SITE.url,
        },
      },
    },
    {
      url: `${SITE.url}/#layanan`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/#katalog`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE.url}/#indeks-katalog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/#fase`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE.url}/#legasi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/#tentang`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/#keunggulan`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/#proses`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/#iso`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/#cakupan`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/#testimoni`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/#faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/#artikel`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/#kontak`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

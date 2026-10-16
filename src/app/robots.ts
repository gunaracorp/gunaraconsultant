import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

/**
 * robots.txt dinamis — memastikan Google/Bing/Yandex mengindeks
 * seluruh halaman, sitemap terdaftar, dan API tetap tertutup.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Mesin pencari utama — akses penuh
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "Googlebot-Video",
          "Bingbot",
          "DuckDuckBot",
          "YandexBot",
          "Baiduspider",
        ],
        allow: "/",
      },
      {
        // Pratinjau sosial (OG & Twitter card)
        userAgent: [
          "Twitterbot",
          "facebookexternalhit",
          "LinkedInBot",
          "WhatsApp",
          "TelegramBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

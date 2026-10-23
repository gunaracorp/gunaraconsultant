import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

/**
 * Mesin metadata "terlengkap" untuk semua halaman mandiri GConsultant.
 * Satu panggilan = title, description, keywords, canonical, hreflang,
 * OpenGraph penuh, Twitter Card penuh, dan aturan robots googleBot.
 */
export function pageMetadata(opts: {
  /** Judul unik halaman (tanpa suffix brand — template layout menambahkan "| GConsultant") */
  title: string;
  description: string;
  keywords: string[];
  /** Path kanonik, contoh: "/layanan" */
  path: string;
}): Metadata {
  const fullTitle = `${opts.title} | ${BRAND.name}`;
  const url = `${BRAND.siteUrl}${opts.path}`;
  const ogAlt = `${opts.title} — ${BRAND.taglineId}`;

  return {
    title: opts.title,
    description: opts.description,
    keywords: [...opts.keywords, "gunara consultant", "pusat perizinan terlengkap"],
    alternates: {
      canonical: opts.path,
      languages: {
        "id-ID": opts.path,
        "en": opts.path,
      },
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      alternateLocale: ["en_US"],
      url,
      siteName: BRAND.name,
      title: fullTitle,
      description: opts.description,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/** BreadcrumbList JSON-LD standar (Beranda › Halaman) */
export function breadcrumbJsonLd(path: string, label: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: BRAND.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${BRAND.siteUrl}${path}`,
      },
    ],
  };
}

/** WebPage JSON-LD standar — terhubung ke node #website dan #organization global */
export function webPageJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BRAND.siteUrl}${path}#webpage`,
    url: `${BRAND.siteUrl}${path}`,
    name,
    description,
    inLanguage: "id-ID",
    isPartOf: { "@id": `${BRAND.siteUrl}/#website` },
    about: { "@id": `${BRAND.siteUrl}/#organization` },
    publisher: { "@id": `${BRAND.siteUrl}/#organization` },
  };
}

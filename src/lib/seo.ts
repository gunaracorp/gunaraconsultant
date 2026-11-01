import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

/**
 * Clamp deskripsi ke batas tampilan Google (±155–160 karakter).
 * Potong pada batas kata agar tidak memenggal kata — tambah elipsis.
 */
export function clampDesc(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : max)}…`;
}

/**
 * Clamp judul halaman — template layout menambahkan " | GConsultant" (13c).
 * Batasi bagian unik ≤ 52 karakter agar SERP tidak terpotong (target ≤ 65).
 */
export function clampTitle(text: string, max = 52): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 30 ? lastSpace : max)}…`;
}

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
  const desc = clampDesc(opts.description);

  return {
    title: opts.title,
    description: desc,
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
      description: desc,
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
      description: desc,
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

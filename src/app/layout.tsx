import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/i18n";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Analytics } from "@/components/analytics";
import { BRAND } from "@/lib/brand";
import { SERVICES } from "@/data/services";
import { VERSI } from "@/lib/version";
import { clampDesc } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: clampDesc(
    "GConsultant — The Polymathic Problem Solver. Menyatukan ilmu, menata kompleksitas, mewujudkan solusi: 500+ perizinan & legalitas usaha, arsitektur sistem bisnis UMEA™, 38 provinsi Indonesia, ISO 9001:2015. Konsultasi gratis!"
  ),
  keywords: [
    "GConsultant",
    "polymathic problem solver",
    "polymathic strategy",
    "systems architecture",
    "konsultan strategi Indonesia",
    "jasa perizinan usaha",
    "jasa legalitas perusahaan",
    "pusat perizinan terlengkap",
    "pendirian PT",
    "NIB OSS RBA",
    "izin edar BPOM",
    "sertifikasi halal",
    "SNI",
    "PMA Indonesia",
    "KITAS",
    "metodologi UMEA",
    "ISO 9001",
    "jasa perizinan Indonesia",
    "gunara web id",
    "business licensing Indonesia",
    "company registration Indonesia",
  ],
  authors: [{ name: BRAND.name, url: BRAND.siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  applicationName: BRAND.name,
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: BRAND.siteUrl,
    siteName: BRAND.name,
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: clampDesc(
      "Kompleksitas memiliki struktur. Solusi memiliki jalur. GConsultant menyatukan strategi, sistem bisnis, dan teknologi — 500+ perizinan, 38 provinsi, ISO 9001:2015."
    ),
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: clampDesc(
      "Kompleksitas memiliki struktur. Solusi memiliki jalur. 500+ perizinan & arsitektur sistem bisnis, 38 provinsi Indonesia."
    ),
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
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0f241d",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BRAND.siteUrl}/#organization`,
  name: BRAND.name,
  alternateName: ["GConsultant", "GCONSULTANT"],
  url: BRAND.siteUrl,
  logo: `${BRAND.siteUrl}/logo.svg`,
  image: `${BRAND.siteUrl}/images/og-image.jpg`,
  description:
    "The Polymathic Problem Solver — menyatukan strategi, sistem bisnis, dan teknologi. 500+ perizinan & legalitas usaha, arsitektur sistem UMEA™, 38 provinsi Indonesia, ISO 9001:2015.",
  foundingDate: "2024",
  slogan: BRAND.tagline,
  identifier: BRAND.ahu,
  softwareVersion: VERSI,
  foundingLocation: {
    "@type": "Place",
    name: "Kota Tasikmalaya, Jawa Barat, Indonesia",
  },
  knowsLanguage: ["id-ID", "en"],
  knowsAbout: [
    "Business Licensing",
    "Corporate Legalization",
    "Systems Architecture",
    "Business Strategy",
    "Regulatory Compliance",
  ],
  founder: {
    "@type": "Person",
    name: "Gugun Gunara",
    jobTitle: "Founder & CEO",
  },
  address: [
    {
      "@type": "PostalAddress",
      name: "Kantor Pusat Tasikmalaya",
      streetAddress: "Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II",
      addressLocality: "Kota Tasikmalaya",
      addressRegion: "Jawa Barat",
      postalCode: "46115",
      addressCountry: "ID",
    },
    {
      "@type": "PostalAddress",
      name: "Kantor Perwakilan Jakarta",
      streetAddress:
        "Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, Senayan, Kebayoran Baru",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${BRAND.waNumber}`,
    contactType: "customer service",
    availableLanguage: ["id", "en"],
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  sameAs: [`https://${BRAND.groupSite}`],
};

const brandJsonLd = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": `${BRAND.siteUrl}/#brand`,
  name: BRAND.name,
  alternateName: ["GCONSULTANT", "GConsultant"],
  slogan: BRAND.tagline,
  logo: `${BRAND.siteUrl}/logo.svg`,
  image: `${BRAND.siteUrl}/icons/icon-512.png`,
  url: BRAND.siteUrl,
  parentOrganization: { "@id": `${BRAND.siteUrl}/#organization` },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BRAND.siteUrl}/#website`,
  url: BRAND.siteUrl,
  name: BRAND.name,
  description: BRAND.promiseId,
  inLanguage: "id-ID",
  publisher: { "@id": `${BRAND.siteUrl}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BRAND.siteUrl}/layanan?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BRAND.siteUrl}/#localbusiness`,
  name: BRAND.name,
  image: `${BRAND.siteUrl}/images/og-image.jpg`,
  url: BRAND.siteUrl,
  telephone: `+${BRAND.waNumber}`,
  priceRange: "Rp500.000 - Rp150.000.000",
  address: [
    {
      "@type": "PostalAddress",
      name: "Kantor Pusat Tasikmalaya",
      streetAddress: "Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II",
      addressLocality: "Kota Tasikmalaya",
      addressRegion: "Jawa Barat",
      postalCode: "46115",
      addressCountry: "ID",
    },
    {
      "@type": "PostalAddress",
      name: "Kantor Perwakilan Jakarta",
      streetAddress:
        "Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, Senayan, Kebayoran Baru",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "312",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Katalog Layanan GConsultant — Perizinan & Arsitektur Sistem Bisnis",
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.nameId,
        alternateName: s.nameEn,
        url: `${BRAND.siteUrl}/layanan/${s.slug}`,
        areaServed: "Indonesia",
        provider: { "@id": `${BRAND.siteUrl}/#organization` },
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-deep"
        >
          Lompat ke konten utama
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Analytics />
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}

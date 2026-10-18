import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/i18n";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { BRAND } from "@/lib/brand";
import { SERVICES } from "@/data/services";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: `${BRAND.name} — ${BRAND.taglineId} | Jasa Perizinan Usaha 38 Provinsi`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Gunara Consultant — pusat perizinan terlengkap di Asia. 500+ jenis perizinan usaha, 38 provinsi Indonesia, berakar dari Mic Kinsey sejak 2009, tersertifikasi ISO 9001:2015. Konsultasi gratis!",
  keywords: [
    "jasa perizinan usaha",
    "jasa legalitas perusahaan",
    "pusat perizinan terlengkap",
    "izin usaha murah",
    "pendirian PT",
    "NIB OSS RBA",
    "izin edar BPOM",
    "sertifikasi halal",
    "SNI",
    "PMA Indonesia",
    "KITAS",
    "AMDAL",
    "PBG IMB",
    "SBU konstruksi",
    "ISO 9001",
    "jasa perizinan Indonesia",
    "gunara consultant",
    "pusatperizinan",
    "business licensing Indonesia",
    "company registration Indonesia",
  ],
  authors: [{ name: BRAND.name, url: BRAND.siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
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
    title: `${BRAND.name} — ${BRAND.taglineId}`,
    description:
      "500+ jenis perizinan, 38 provinsi, berakar dari Mic Kinsey sejak 2009, tersertifikasi ISO 9001:2015. Melegalkan bisnis Anda dengan standar kelas dunia.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.taglineId}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.taglineId}`,
    description:
      "500+ jenis perizinan, 38 provinsi, ISO 9001:2015. Konsultasi perizinan bisnis gratis.",
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
  themeColor: "#04231a",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BRAND.siteUrl}/#organization`,
  name: BRAND.name,
  alternateName: "Gunara",
  url: BRAND.siteUrl,
  logo: `${BRAND.siteUrl}/logo.svg`,
  image: `${BRAND.siteUrl}/images/og-image.jpg`,
  description:
    "Pusat perizinan terlengkap di Asia — 500+ jenis perizinan, 38 provinsi Indonesia, ISO 9001:2015, berakar dari Mic Kinsey sejak 2009.",
  foundingDate: "2024",
  slogan: "Pusat Perizinan Terlengkap di Asia — Standar Kelas Dunia",
  identifier: BRAND.ahu,
  foundingLocation: {
    "@type": "Place",
    name: "Kota Tasikmalaya, Jawa Barat, Indonesia",
  },
  knowsLanguage: ["id-ID", "en"],
  founder: {
    "@type": "Person",
    name: "Gugun Gunara",
    jobTitle: "Founder & CEO",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II",
    addressLocality: "Kota Tasikmalaya",
    addressRegion: "Jawa Barat",
    postalCode: "46115",
    addressCountry: "ID",
  },
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
  alternateName: "Gunara",
  slogan: "Pusat Perizinan Terlengkap di Asia — Standar Kelas Dunia",
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
  description: BRAND.taglineId,
  inLanguage: "id-ID",
  publisher: { "@id": `${BRAND.siteUrl}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BRAND.siteUrl}/?q={search_term_string}`,
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
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II",
    addressLocality: "Kota Tasikmalaya",
    addressRegion: "Jawa Barat",
    postalCode: "46115",
    addressCountry: "ID",
  },
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
    name: "Katalog Layanan Perizinan Gunara Consultant",
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
        className={`${jakarta.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
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
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}

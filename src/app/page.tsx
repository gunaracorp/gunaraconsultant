import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { BrandStrip } from "@/components/sections/brand-strip";
import { About } from "@/components/sections/about";
import { Heritage } from "@/components/sections/heritage";
import { Services } from "@/components/sections/services";
import { ServicesExplorer } from "@/components/sections/services-explorer";
import { PhasesSection } from "@/components/sections/phases";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { IsoSection } from "@/components/sections/iso";
import { Coverage } from "@/components/sections/coverage";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Insights } from "@/components/sections/insights";
import { Contact } from "@/components/sections/contact";
import { CatalogIndex } from "@/components/sections/catalog-index";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/sections/whatsapp-float";
import { ScrollProgress, BackToTop } from "@/components/ui-custom/scroll-progress";
import { SITE, FAQS, TESTIMONIALS } from "@/lib/data";
import { SERVICES as CATALOG_SERVICES } from "@/data/services";
import { ARTICLES } from "@/data/articles";

/* ============ JSON-LD Structured Data (FULL SEO) ============ */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/favicon.svg`,
  image: `${SITE.url}/images/og-image.png`,
  description: SITE.description,
  foundingDate: SITE.founded,
  slogan: SITE.tagline,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "Rp 350.000 - Rp 12.000.000",
  currenciesAccepted: "IDR",
  paymentAccepted: "Bank Transfer, Virtual Account, QRIS",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.2247,
    longitude: 106.809,
  },
  areaServed: [
    { "@type": "Country", name: "Indonesia" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Singapore" },
  ],
  knowsAbout: [
    "Perizinan Usaha (NIB, OSS-RBA)",
    "Pendirian PT, CV, PT PMA",
    "Sertifikasi Halal BPJPH",
    "Izin BPOM dan PIRT",
    "PBG dan SLF",
    "Izin Lingkungan (AMDAL, UKL-UPL)",
    "Sertifikasi ISO 9001:2015",
    "KITAS dan KITAP",
    "Izin Ekspor Impor",
    "Mic Kinsey",
    "Katalog 600 Layanan Perizinan Terlengkap di Asia",
    "Perizinan Global & Internasional",
    "Pendirian Perusahaan Singapura Dubai Arab Saudi",
    "Perizinan UMKM",
  ],
  knowsLanguage: ["id", "en"],
  founder: {
    "@type": "Person",
    name: SITE.founder,
    jobTitle: "Founder",
  },
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "AHU Kemenkumham RI",
      value: SITE.ahucert,
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    email: SITE.email,
    availableLanguage: ["Indonesian", "English"],
    areaServed: "ID",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO 9001:2015 Quality Management System",
      recognizedBy: {
        "@type": "Organization",
        name: "International Accreditation Forum (IAF)",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "business registration",
      name: "Sertifikat Pendirian PT TOP KONSULTAN INTERNASIONAL — Nomor AHU-038293.AH.01.30.Tahun 2024",
      recognizedBy: {
        "@type": "Organization",
        name: "Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "2140",
    reviewCount: "1826",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Gunara Consultant Group",
    url: SITE.url,
  },
  sameAs: [
    SITE.social.linkedin,
    SITE.social.instagram,
    SITE.social.facebook,
    SITE.social.youtube,
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "id-ID",
  copyrightYear: new Date().getFullYear(),
  /* Sitelinks Search Box — kotak pencarian langsung di hasil pencarian Google */
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/?q={search_term_string}#katalog`,
    },
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: TESTIMONIALS.slice(0, 5).map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.content,
      itemReviewed: { "@id": `${SITE.url}/#organization` },
    },
  })),
};

/** ItemList layanan unggulan katalog (10 pertama yang popular; fallback 10 pertama) */
const featuredCatalogServices = (() => {
  const popular = CATALOG_SERVICES.filter((s) => s.popular);
  const source = popular.length >= 10 ? popular : CATALOG_SERVICES;
  return source.slice(0, 10);
})();

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Katalog 600+ Layanan Perizinan Terlengkap di Asia — Gunara Consultant",
  url: `${SITE.url}/#indeks-katalog`,
  inLanguage: "id-ID",
  numberOfItems: featuredCatalogServices.length,
  itemListElement: featuredCatalogServices.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      url: `${SITE.url}/#${s.code}`,
      serviceType: s.category,
      description: s.desc,
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: { "@type": "Country", name: "Indonesia" },
    },
  })),
};

/** JSON-LD per artikel (BlogPosting) — rich snippet artikel di Google */
const articlesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Artikel & Panduan Perizinan Usaha",
  url: `${SITE.url}/#artikel`,
  inLanguage: "id-ID",
  itemListElement: ARTICLES.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "BlogPosting",
      headline: a.title,
      description: a.excerpt,
      articleSection: a.category,
      keywords: a.keyword,
      datePublished: a.date,
      inLanguage: "id-ID",
      author: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
      },
      publisher: { "@id": `${SITE.url}/#organization` },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE.url}/#artikel-${a.slug}`,
      },
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Layanan", item: `${SITE.url}/#layanan` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Katalog 600+ Layanan",
      item: `${SITE.url}/#katalog`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: `Indeks Lengkap 600 Layanan`,
      item: `${SITE.url}/#indeks-katalog`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Fase Implementasi",
      item: `${SITE.url}/#fase`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Tentang",
      item: `${SITE.url}/#tentang`,
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Artikel & Panduan",
      item: `${SITE.url}/#artikel`,
    },
    { "@type": "ListItem", position: 8, name: "Kontak", item: `${SITE.url}/#kontak` },
  ],
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ============ Halaman ============ */

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={reviewsJsonLd} />
      <JsonLd data={catalogJsonLd} />
      <JsonLd data={articlesJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ScrollProgress />

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main>
          <Hero />
          <BrandStrip />
          <About />
          <Heritage />
          <Services />
          <ServicesExplorer />
          <PhasesSection />
          <WhyUs />
          <Process />
          <IsoSection />
          <Coverage />
          <Testimonials />
          <Faq />
          <Insights />
          <Contact />
          <CatalogIndex />
        </main>
        <Footer />
      </div>

      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}

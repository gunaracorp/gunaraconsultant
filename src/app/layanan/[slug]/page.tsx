import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServiceDetail, RelatedServices } from "@/components/service-detail";
import { BRAND } from "@/lib/brand";
import {
  CATEGORIES,
  SERVICES,
  getService,
  relatedServices,
} from "@/data/services";
import { PROVINCES } from "@/data/provinces";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.nameId} — Jasa Pengurusan Resmi, Cepat & Bergaransi`;
  const description = `${service.shortId} Dikelola GConsultant — pusat perizinan terlengkap di Asia, tersertifikasi ISO 9001:2015, melayani 38 provinsi Indonesia. Estimasi ${service.durationId}, biaya mulai ${service.priceFrom}.`;

  return {
    title: service.nameId,
    description,
    keywords: [
      ...service.keywords,
      "jasa perizinan",
      "gunara consultant",
      "pusat perizinan terlengkap",
      service.nameId,
      service.nameEn,
    ],
    alternates: {
      canonical: `/layanan/${service.slug}`,
      languages: {
        "id-ID": `/layanan/${service.slug}`,
        "en": `/layanan/${service.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BRAND.siteUrl}/layanan/${service.slug}`,
      siteName: BRAND.name,
      type: "article",
      locale: "id_ID",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${service.nameId} | ${BRAND.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const category = CATEGORIES.find((c) => c.id === service.cat);
  const related = relatedServices(service, 4);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BRAND.siteUrl}/layanan/${service.slug}#service`,
    name: service.nameId,
    alternateName: service.nameEn,
    description: service.descId,
    serviceType: service.nameId,
    url: `${BRAND.siteUrl}/layanan/${service.slug}`,
    image: `${BRAND.siteUrl}/images/og-image.jpg`,
    provider: { "@id": `${BRAND.siteUrl}/#organization` },
    areaServed: PROVINCES.map((p) => ({
      "@type": "AdministrativeArea",
      name: p.name,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: service.priceFrom.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
      url: `${BRAND.siteUrl}/layanan/${service.slug}`,
    },
    category: category?.nameId ?? service.cat,
  };

  const breadcrumbJsonLd = {
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
        name: "Layanan",
        item: `${BRAND.siteUrl}/#layanan`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.nameId,
        item: `${BRAND.siteUrl}/layanan/${service.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.qId,
      acceptedAnswer: { "@type": "Answer", text: f.aId },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Cara mengurus ${service.nameId} bersama ${BRAND.name}`,
    description: service.shortId,
    totalTime: service.durationId,
    step: service.stepsId.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Langkah ${i + 1}`,
      text: s,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ServiceDetail service={service} />
        <RelatedServices services={related} />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      </main>
      <Footer />
    </div>
  );
}

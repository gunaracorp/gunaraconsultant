import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServiceDetail, RelatedServices } from "@/components/service-detail";
import { CatalogDetail } from "@/components/catalog-detail";
import { BRAND } from "@/lib/brand";
import { clampTitle, clampDesc } from "@/lib/seo";
import {
  CATEGORIES,
  SERVICES,
  KATALOG,
  relatedServices,
  resolveAnySlug,
  getCatalogSub,
  getCatalogKat,
  catalogBySub,
  formatRp,
  type CatalogItem,
} from "@/data/services";
import { PROVINCES } from "@/data/provinces";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Prerender hanya 46 layanan unggulan; 500 halaman katalog dirender
 * on-demand (dynamicParams) agar build deploy tetap cepat.
 */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

function catalogMetadata(item: CatalogItem): Metadata {
  const sub = getCatalogSub(item.subCode);
  const title = `${item.nama} — Harga ${formatRp(item.hargaDiskon)}, Proses Resmi & Bergaransi`;
  const description = clampDesc(
    `${item.descId} Kode ${item.kode}. Dikelola GConsultant — tersertifikasi ISO 9001:2015, melayani 38 provinsi Indonesia.`
  );
  return {
    title: clampTitle(item.nama),
    description,
    keywords: [
      item.nama,
      item.kode,
      sub?.nameId ?? item.sub,
      "jasa pengurusan",
      "biaya" + item.nama.toLowerCase(),
      "gunara consultant",
      "pusat perizinan terlengkap",
    ],
    alternates: {
      canonical: `/layanan/${item.slug}`,
      languages: {
        "id-ID": `/layanan/${item.slug}`,
        "en": `/layanan/${item.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BRAND.siteUrl}/layanan/${item.slug}`,
      siteName: BRAND.name,
      type: "article",
      locale: "id_ID",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${item.nama} | ${BRAND.name}`,
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveAnySlug(slug);
  if (!resolved) return {};
  if (resolved.kind === "catalog") return catalogMetadata(resolved.item);

  const service = resolved.service;
  const title = `${service.nameId} — Jasa Pengurusan Resmi, Cepat & Bergaransi`;
  const description = clampDesc(
    `${service.shortId} Dikelola GConsultant — pusat perizinan terlengkap di Asia, tersertifikasi ISO 9001:2015, melayani 38 provinsi Indonesia. Estimasi ${service.durationId}, biaya mulai ${service.priceFrom}.`
  );

  return {
    title: clampTitle(service.nameId),
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

function catalogPage(item: CatalogItem) {
  const sub = getCatalogSub(item.subCode);
  const kat = getCatalogKat(item.catCode);
  const related = catalogBySub(item.subCode)
    .filter((k) => k.slug !== item.slug)
    .slice(0, 6)
    .map((k) => ({
      slug: k.slug,
      kode: k.kode,
      nama: k.nama,
      hargaDiskon: k.hargaDiskon,
      diskon: k.diskon,
    }));

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BRAND.siteUrl}/layanan/${item.slug}#service`,
    name: item.nama,
    description: item.descId,
    serviceType: sub?.nameId ?? item.sub,
    url: `${BRAND.siteUrl}/layanan/${item.slug}`,
    image: `${BRAND.siteUrl}/images/og-image.jpg`,
    provider: { "@id": `${BRAND.siteUrl}/#organization` },
    areaServed: PROVINCES.slice(0, 10).map((p) => ({
      "@type": "AdministrativeArea",
      name: p.name,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: item.hargaDiskon,
      availability: "https://schema.org/InStock",
      url: `${BRAND.siteUrl}/layanan/${item.slug}`,
    },
    category: kat?.nameId ?? item.catCode,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: BRAND.siteUrl },
      { "@type": "ListItem", position: 2, name: "Layanan", item: `${BRAND.siteUrl}/layanan` },
      {
        "@type": "ListItem",
        position: 3,
        name: item.nama,
        item: `${BRAND.siteUrl}/layanan/${item.slug}`,
      },
    ],
  };

  const faqJsonLd = sub && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sub.faq.map((f) => ({
      "@type": "Question",
      name: f.qId,
      acceptedAnswer: { "@type": "Answer", text: f.aId },
    })),
  };

  const howToJsonLd = sub && {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Cara mengurus ${item.nama} bersama ${BRAND.name}`,
    description: item.descId.slice(0, 200),
    step: sub.prosesId.map((s, i) => ({
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
        <CatalogDetail
          slug={item.slug}
          kode={item.kode}
          nama={item.nama}
          subCode={item.subCode}
          subNameId={sub?.nameId ?? item.sub}
          subNameEn={sub?.nameEn ?? item.sub}
          katNameId={kat?.nameId ?? item.catCode}
          katNameEn={kat?.nameEn ?? item.catCode}
          harga={item.harga}
          diskon={item.diskon}
          hargaDiskon={item.hargaDiskon}
          hemat={item.hemat}
          descId={item.descId}
          sub={sub ?? {
            kode: item.subCode,
            kat: item.catCode,
            nameId: item.sub,
            nameEn: item.sub,
            lingkupId: [],
            lingkupEn: [],
            prosesId: [],
            prosesEn: [],
            dokumenId: [],
            dokumenEn: [],
            faq: [],
          }}
          related={related}
        />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        {howToJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const resolved = resolveAnySlug(slug);
  if (!resolved) notFound();

  if (resolved.kind === "catalog") return catalogPage(resolved.item);

  const service = resolved.service;
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

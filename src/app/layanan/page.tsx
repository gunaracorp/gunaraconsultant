import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServicesCatalog } from "@/components/sections/services-catalog";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = pageMetadata({
  title: "Layanan Perizinan Usaha — 46 Jenis Legalitas Satu Pintu",
  description:
    "Katalog lengkap 46 layanan perizinan & legalitas usaha: NIB OSS RBA, pendirian PT/CV/PMA, izin BPOM, sertifikasi halal, SNI, AMDAL, PBG, KITAS. Estimasi biaya & waktu transparan, ISO 9001:2015.",
  keywords: [
    "jasa perizinan usaha",
    "katalog layanan perizinan",
    "46 layanan perizinan",
    "jasa legalitas perusahaan",
    "NIB OSS RBA",
    "pendirian PT",
    "izin edar BPOM",
    "sertifikasi halal",
    "AMDAL",
    "KITAS",
    "layanan perizinan indonesia",
  ],
  path: "/layanan",
});

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BRAND.siteUrl}/layanan#webpage`,
  url: `${BRAND.siteUrl}/layanan`,
  name: "Katalog 46 Layanan Perizinan & Legalitas Usaha",
  description:
    "Daftar lengkap layanan perizinan dan legalitas usaha GConsultant untuk seluruh Indonesia.",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BRAND.siteUrl}/#website` },
  about: { "@id": `${BRAND.siteUrl}/#organization` },
  publisher: { "@id": `${BRAND.siteUrl}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BRAND.siteUrl}/layanan/${s.slug}`,
      name: s.nameId,
    })),
  },
};

export default function LayananPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="navServices"
          kickerKey="pgLayananKicker"
          titleKey="pgLayananTitle"
          subKey="pgLayananSub"
        />
        <ServicesCatalog />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd("/layanan", "Layanan")
            ),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Provinces } from "@/components/sections/provinces";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";
import { PROVINCES } from "@/data/provinces";

export const metadata: Metadata = pageMetadata({
  title: "Cakupan 38 Provinsi — Jasa Perizinan Seluruh Indonesia",
  description:
    "GConsultant melayani pengurusan perizinan di seluruh 38 provinsi Indonesia — Aceh sampai Papua Pegunungan, termasuk 4 provinsi pemekaran Papua. Online atau pendampingan fisik tim ahli daerah.",
  keywords: [
    "jasa perizinan 38 provinsi",
    "perizinan usaha seluruh indonesia",
    "jasa perizinan jakarta",
    "jasa perizinan jawa barat",
    "konsultan perizinan se indonesia",
    "perizinan online OSS",
    "jasa perizinan papua",
    "konsultan izin usaha daerah",
  ],
  path: "/provinsi",
});

const name = "Jangkauan Layanan 38 Provinsi Indonesia";
const description =
  "Cakupan penuh jasa pengurusan perizinan GConsultant di 38 provinsi Indonesia, online maupun pendampingan fisik.";

const provinceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Area Layanan GConsultant — 38 Provinsi Indonesia",
  numberOfItems: PROVINCES.length,
  itemListElement: PROVINCES.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "AdministrativeArea",
      name: p.name,
    },
  })),
};

export default function ProvinsiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="navProvinces"
          kickerKey="pgProvKicker"
          titleKey="pgProvTitle"
          subKey="pgProvSub"
        />
        <Provinces />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(provinceListJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd("/provinsi", name, description)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd("/provinsi", "Provinsi")),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

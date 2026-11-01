import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CouncilBand } from "@/components/sections/council-band";
import { AboutContent } from "@/components/sections/about";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Tentang Kami — Profil Resmi GConsultant",
  description:
    "Profil resmi GConsultant: berakar dari Mic Kinsey sejak 2009, berbadan usaha 2024 (AHU-038293.AH.01.30.Tahun 2024), modal dasar Rp5 M, ISO 9001:2015, kantor Tasikmalaya & Jakarta, melayani 38 provinsi.",
  keywords: [
    "tentang gunara consultant",
    "profil gunara consultant",
    "sejarah gunara consultant",
    "konsultan perizinan tasikmalaya",
    "konsultan perizinan jakarta",
    "profil perusahaan perizinan",
    "konsultan legalitas indonesia",
    "AHU-038293",
    "konsultan berakar mic kinsey",
    "perusahaan perizinan iso 9001",
  ],
  path: "/tentang-kami",
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${BRAND.siteUrl}/tentang-kami#webpage`,
  url: `${BRAND.siteUrl}/tentang-kami`,
  name: "Tentang GConsultant — Profil Resmi Perusahaan",
  description:
    "Profil resmi GConsultant: akar Mic Kinsey sejak 2009, badan usaha resmi Kemenkumham RI 2024, ISO 9001:2015, melayani 38 provinsi Indonesia.",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BRAND.siteUrl}/#website` },
  about: { "@id": `${BRAND.siteUrl}/#organization` },
  publisher: { "@id": `${BRAND.siteUrl}/#organization` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${BRAND.siteUrl}/#organization`,
    name: BRAND.name,
    foundingDate: "2024-07-11",
    identifier: BRAND.ahu,
    slogan: BRAND.taglineId,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress:
          "Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II",
        addressLocality: "Kota Tasikmalaya",
        addressRegion: "Jawa Barat",
        postalCode: "46115",
        addressCountry: "ID",
      },
      {
        "@type": "PostalAddress",
        streetAddress:
          "Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, Senayan, Kebayoran Baru",
        addressLocality: "Jakarta Selatan",
        addressRegion: "DKI Jakarta",
        addressCountry: "ID",
      },
    ],
  },
};

export default function TentangKamiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="navAbout"
          kickerKey="pgAboutKicker"
          titleKey="pgAboutTitle"
          subKey="pgAboutSub"
        />
        <AboutContent />
        <CouncilBand />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd("/tentang-kami", "Tentang Kami")
            ),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

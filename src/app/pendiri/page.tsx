import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Founder } from "@/components/sections/founder";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Profil Gugun Gunara — Founder & CEO GConsultant",
  description:
    "Profil Gugun Gunara, Founder & CEO GConsultant: 15+ tahun pengalaman berakar dari perusahaan konsultan ternama dunia Mic Kinsey sejak 2009, memimpin pusat perizinan terlengkap di Asia.",
  keywords: [
    "gugun gunara",
    "founder gunara consultant",
    "ceo gunara consultant",
    "profil gugun gunara",
    "konsultan perizinan tasikmalaya",
    "konsultan legalitas indonesia",
  ],
  path: "/pendiri",
});

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BRAND.siteUrl}/pendiri#webpage`,
  url: `${BRAND.siteUrl}/pendiri`,
  name: "Profil Gugun Gunara — Founder & CEO GConsultant",
  description:
    "Profil resmi Gugun Gunara, pendiri GConsultant, pusat perizinan terlengkap di Asia.",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BRAND.siteUrl}/#website` },
  about: { "@id": `${BRAND.siteUrl}/#organization` },
  mainEntity: {
    "@type": "Person",
    "@id": `${BRAND.siteUrl}/#founder`,
    name: "Gugun Gunara",
    jobTitle: "Founder & CEO",
    image: `${BRAND.siteUrl}/images/founder.jpg`,
    worksFor: { "@id": `${BRAND.siteUrl}/#organization` },
    description:
      "Pendiri GConsultant dengan pengalaman 15+ tahun di bidang perizinan dan legalitas usaha, berakar dari praktik perusahaan konsultan ternama dunia Mic Kinsey sejak 2009.",
    knowsAbout: [
      "Perizinan Usaha",
      "Legalitas Perusahaan",
      "Pendirian PT",
      "OSS RBA",
      "Izin BPOM",
      "Sertifikasi Halal",
      "AMDAL",
    ],
  },
};

export default function PendiriPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="navFounder"
          kickerKey="pgFounderKicker"
          titleKey="pgFounderTitle"
          subKey="pgFounderSub"
        />
        <Founder />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd("/pendiri", "Pendiri")),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

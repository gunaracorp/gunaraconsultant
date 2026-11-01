import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/page-hero";
import { PrivacyContent } from "@/components/sections/privacy-content";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kebijakan Privasi — Pelindungan Data Pribadi (UU PDP)",
  description:
    "Kebijakan Privasi GConsultant: bagaimana kami mengumpulkan, menggunakan, menjaga, dan melindungi data pribadi Anda — selaras UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) dan siap GDPR.",
  keywords: [
    "kebijakan privasi gunara consultant",
    "kebijakan privasi perizinan",
    "UU PDP 27 2022",
    "pelindungan data pribadi",
    "privasi data klien",
    "GDPR ready",
    "perlindungan data konsultan",
  ],
  path: "/kebijakan-privasi",
});

const breadcrumb = breadcrumbJsonLd("/kebijakan-privasi", "Kebijakan Privasi");

const webPage = webPageJsonLd(
  "/kebijakan-privasi",
  "Kebijakan Privasi GConsultant",
  "Bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda — selaras UU PDP No. 27 Tahun 2022."
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
        />
        <PageHero
          crumbKey="footPrivacy"
          kickerKey="footPrivacy"
          titleKey="pgPrivTitle"
          subKey="pgPrivSub"
        />
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}

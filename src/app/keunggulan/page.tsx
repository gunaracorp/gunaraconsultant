import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { WhyUs } from "@/components/sections/why-us";
import { CouncilBand } from "@/components/sections/council-band";
import { Testimonials } from "@/components/sections/testimonials";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Keunggulan GConsultant — Garansi Tertulis & ISO 9001",
  description:
    "Mengapa bisnis memilih GConsultant: warisan praktik konsultan kelas dunia sejak 2009, 46 Dewan Pakar lintas bidang, garansi tertulis, proses transparan ISO 9001:2015.",
  keywords: [
    "keunggulan gunara consultant",
    "konsultan perizinan terbaik",
    "konsultan perizinan bergaransi",
    "jasa perizinan profesional",
    "konsultan bisnis terpercaya",
    "46 dewan pakar",
    "ISO 9001 perizinan",
    "konsultan legalitas berpengalaman",
  ],
  path: "/keunggulan",
});

const name = "Keunggulan GConsultant — Standar Kelas Dunia";
const description =
  "Keunggulan kompetitif GConsultant: garansi tertulis, 46 Dewan Pakar, transparansi penuh, ISO 9001:2015.";

export default function KeunggulanPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="navWhy"
          kickerKey="pgWhyKicker"
          titleKey="pgWhyTitle"
          subKey="pgWhySub"
        />
        <WhyUs />
        <CouncilBand />
        <Testimonials />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd("/keunggulan", name, description)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd("/keunggulan", "Keunggulan")),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

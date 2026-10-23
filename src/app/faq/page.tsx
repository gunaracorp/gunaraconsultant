import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { FAQS } from "@/data/faqs";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "FAQ Perizinan Usaha — Jawaban Lengkap & Jujur",
  description:
    "Jawaban 8 pertanyaan terpenting: apakah konsultasi gratis, legalitas GConsultant, rekening resmi BCA, lama pengurusan, keamanan dokumen, garansi jika ditolak, cakupan 38 provinsi, dan paket UMKM.",
  keywords: [
    "faq perizinan usaha",
    "pertanyaan jasa perizinan",
    "apakah konsultasi perizinan gratis",
    "lama pengurusan izin usaha",
    "rekening resmi gunara consultant",
    "garansi perizinan ditolak",
    "biaya perizinan umkm",
  ],
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BRAND.siteUrl}/faq#webpage`,
  url: `${BRAND.siteUrl}/faq`,
  name: "Pertanyaan yang Sering Diajukan — GConsultant",
  description:
    "Kumpulan jawaban atas pertanyaan paling sering diajukan tentang jasa perizinan GConsultant.",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BRAND.siteUrl}/#website` },
  about: { "@id": `${BRAND.siteUrl}/#organization` },
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="navFaq"
          kickerKey="pgFaqKicker"
          titleKey="pgFaqTitle"
          subKey="pgFaqSub"
        />
        <Faq />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd("/faq", "FAQ")),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

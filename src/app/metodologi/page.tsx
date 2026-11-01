import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/page-hero";
import { UmeaMethodology } from "@/components/sections/umea-methodology";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Metodologi UMEA™ — Hukum Minimum Usaha",
  description:
    "UMEA™ (Universal Minimum Enterprise Architecture) — metodologi milik GConsultant: 6 tingkat organisasi (UMEA-03 s.d. UMEA-21), 21 fungsi kritis, 5 tingkat dokumen (D-10 s.d. D-165), dan UMEA Maturity Index™ 0-100. Hukum Minimum Usaha™ yang melampaui standar konsultasi biasa.",
  keywords: [
    "hukum minimum usaha",
    "UMEA",
    "universal minimum enterprise architecture",
    "metodologi konsultan bisnis",
    "UMEA master matrix",
    "UMEA maturity index",
    "minimum viable organization",
    "struktur organisasi minimum",
    "berapa orang minimal untuk bisnis",
    "fungsi kritis organisasi",
    "7 fungsi organisasi",
    "21 fungsi kritis perusahaan",
    "paket dokumen bisnis",
    "39 dokumen bisnis",
    "165 dokumen institusional",
    "konsultan tata kelola indonesia",
    "standard operating procedure usaha",
    "governance framework indonesia",
  ],
  path: "/metodologi",
});

const breadcrumb = breadcrumbJsonLd("/metodologi", "Metodologi UMEA");

const webPage = {
  ...webPageJsonLd(
    "/metodologi",
    "Metodologi UMEA™ — Hukum Minimum Usaha & Master Matrix",
    "Metodologi milik GConsultant: 6 tingkat organisasi, 21 fungsi kritis, 5 tingkat dokumen, dan UMEA Maturity Index™."
  ),
  "@type": "Article",
  headline: "UMEA™ — Universal Minimum Enterprise Architecture: Hukum Minimum Usaha",
  articleSection: "Metodologi",
  author: { "@id": `${BRAND.siteUrl}/#organization` },
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa jumlah orang minimum untuk memulai bisnis yang tidak mudah runtuh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Menurut metodologi UMEA™, 3 orang adalah minimum untuk memulai (UMEA-03 Survival Cell) dengan 7 fungsi kritis dirangkap. 7 orang memberi kelengkapan fungsional (UMEA-07), 10 orang kelengkapan operasional (UMEA-10), dan 21 orang ketahanan institusional (UMEA-21) dengan backup di setiap fungsi kritis.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu Hukum Minimum Usaha™?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hukum Minimum Usaha™ adalah metodologi milik GConsultant yang menyatakan: jumlah orang boleh kecil, tetapi jumlah fungsi kritis tidak boleh hilang. Setiap fungsi kritis wajib memiliki penanggung jawab, fungsi yang saling bertentangan wajib dipisah, dan tidak ada fungsi kritis yang boleh bergantung permanen pada satu orang.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan paket dokumen D-10, D-39, dan D-165?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "D-10 (10 dokumen) untuk UMKM memulai usaha. D-21 (21 dokumen) menambah lapisan tata kelola profesional. D-39 (39 dokumen) untuk perusahaan scale-up dan investor-ready. D-75 (75 dokumen) untuk perusahaan besar multi-cabang. D-165 (165 dokumen dalam 20 domain) untuk holding, asosiasi, federasi, dan koperasi multipihak yang ingin bertahan seabad.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara mengukur kematangan organisasi menurut UMEA™?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Melalui UMEA Maturity Index™ (UMI) — skor 0-100 dari 12 dimensi yang memetakan 21 fungsi kritis. Skor 0-20 berarti Rapuh, 41-60 Fungsional, 76-85 Scalable, 86-92 Tangguh, dan 98+ Adaptif. Asesmen mandiri gratis tersedia di halaman /asesmen.",
      },
    },
  ],
};

export default function MetodologiPage() {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <PageHero
          crumbKey="navMetodologi"
          kickerKey="pgMetoKicker"
          titleKey="pgMetoTitle"
          subKey="pgMetoSub"
        />
        <UmeaMethodology />
      </main>
      <Footer />
    </>
  );
}

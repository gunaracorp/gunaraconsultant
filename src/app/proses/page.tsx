import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Process } from "@/components/sections/process";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Proses Pengurusan Perizinan — 5 Langkah ISO 9001:2015",
  description:
    "Alur baku pengurusan perizinan GConsultant: konsultasi gratis, analisis & penawaran transparan, kontrak & dokumen, pengurusan penuh ke instansi, penyerahan dengan garansi proses ulang.",
  keywords: [
    "proses pengurusan perizinan",
    "alur jasa perizinan",
    "cara mengurus izin usaha",
    "langkah pendirian PT",
    "tahapan legalitas usaha",
    "proses perizinan usaha indonesia",
    "konsultasi perizinan gratis",
  ],
  path: "/proses",
});

const name = "Proses Pengurusan Perizinan — 5 Langkah Tersertifikasi";
const description =
  "Proses baku ISO 9001:2015 GConsultant: dari konsultasi gratis hingga dokumen legal di tangan Anda dengan garansi tertulis.";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Alur Pengurusan Perizinan oleh GConsultant",
  description:
    "Lima langkah baku tersertifikasi ISO 9001:2015 — dari konsultasi gratis sampai penyerahan dokumen legal dengan garansi.",
  totalTime: "P14D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Konsultasi Gratis",
      text: "Ceritakan rencana bisnis Anda via WhatsApp. Tim kami memetakan perizinan yang wajib dan opsional.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Analisis & Penawaran",
      text: "Kami kirim analisis kebutuhan, rincian biaya transparan, dan estimasi waktu tanpa biaya tersembunyi.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Kontrak & Dokumen",
      text: "Setuju? Kontrak resmi ditandatangani, pembayaran ke rekening resmi, lalu kami mulai menyusun dokumen.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Pengurusan Penuh",
      text: "Tim kami mengurus seluruh proses ke instansi. Anda hanya perlu menandatangani saat diminta. Progres dilaporkan rutin.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Penyerahan & Garansi",
      text: "Dokumen legal diserahkan lengkap. Bila terjadi penolakan bukan karena kelalaian klien, kami proses ulang gratis.",
    },
  ],
};

export default function ProsesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="navProcess"
          kickerKey="pgProcKicker"
          titleKey="pgProcTitle"
          subKey="pgProcSub"
        />
        <Process />
        <CtaBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd("/proses", name, description)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd("/proses", "Proses")),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

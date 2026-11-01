import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/page-hero";
import { UmeaAssessment } from "@/components/sections/umea-assessment";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Asesmen UMI™ — Ukur Kematangan Usaha Gratis",
  description:
    "Asesmen mandiri gratis 12 pertanyaan (2 menit): dapatkan skor UMEA Maturity Index™ 0-100, tingkat UMEA Anda (UMEA-03 s.d. UMEA-21), 3 titik terlemah, dan rekomendasi paket dokumen D-10 s.d. D-165. Berjalan penuh di perangkat Anda — privat dan instan.",
  keywords: [
    "asesmen bisnis gratis",
    "umia maturity index",
    "umea maturity index",
    "tes kematangan usaha",
    "asesmen kesehatan bisnis",
    "skor kematangan organisasi",
    "diagnosa bisnis umkm",
    "konsultasi bisnis gratis",
    "asesmen tata kelola",
    "cek kesiapan usaha scale up",
  ],
  path: "/asesmen",
});

const breadcrumb = breadcrumbJsonLd("/asesmen", "Asesmen UMEA");

const webPage = webPageJsonLd(
  "/asesmen",
  "Asesmen UMEA Maturity Index™ — Ukur Kematangan Usaha Gratis",
  "Asesmen mandiri 12 pertanyaan untuk mengukur kematangan organisasi: skor UMI 0-100, tingkat UMEA, titik terlemah, dan rekomendasi paket dokumen."
);

export default function AsesmenPage() {
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
          crumbKey="navAsesmen"
          kickerKey="pgAsmKicker"
          titleKey="pgAsmTitle"
          subKey="pgAsmSub"
        />
        <UmeaAssessment />
      </main>
      <Footer />
    </>
  );
}

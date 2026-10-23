import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/page-hero";
import { TermsContent } from "@/components/sections/terms-content";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Syarat & Ketentuan Penggunaan Layanan",
  description:
    "Syarat & Ketentuan GConsultant: aturan penggunaan website dan layanan konsultansi perizinan, hak kekayaan intelektual metodologi UMEA™, kanal pembayaran resmi BCA, serta batasan tanggung jawab sesuai hukum Republik Indonesia.",
  keywords: [
    "syarat dan ketentuan",
    "terms and conditions gunara",
    "ketentuan layanan konsultan",
    "rekening resmi BCA gunara",
    "anti penipuan perizinan",
    "hak cipta UMEA",
    "hukum perikatan indonesia",
  ],
  path: "/syarat-ketentuan",
});

const breadcrumb = breadcrumbJsonLd("/syarat-ketentuan", "Syarat & Ketentuan");

const webPage = webPageJsonLd(
  "/syarat-ketentuan",
  "Syarat & Ketentuan GConsultant",
  "Aturan penggunaan website dan layanan GConsultant — termasuk kanal pembayaran resmi dan perlindungan metodologi UMEA™."
);

export default function TermsPage() {
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
          crumbKey="footTerms"
          kickerKey="footTerms"
          titleKey="pgTermsTitle"
          subKey="pgTermsSub"
        />
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}

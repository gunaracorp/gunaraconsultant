import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Contact } from "@/components/sections/contact";
import { OfficialAccount } from "@/components/sections/official-account";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Kontak & Kantor — Konsultasi Perizinan Gratis",
  description:
    "Hubungi GConsultant: WhatsApp resmi +62 813-1651-6524, email halo@gunara.web.id. Kantor pusat Tasikmalaya & perwakilan Jakarta di Indonesia Stock Exchange Tower 1. Aktif Senin–Sabtu 08.00–17.00 WIB.",
  keywords: [
    "kontak gunara consultant",
    "kantor gunara consultant",
    "alamat kantor perizinan jakarta",
    "konsultasi perizinan gratis",
    "whatsapp konsultan perizinan",
    "kantor perwakilan IDX sudirman",
    "kantor perizinan tasikmalaya",
  ],
  path: "/kontak",
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BRAND.siteUrl}/kontak#webpage`,
  url: `${BRAND.siteUrl}/kontak`,
  name: "Kontak & Kantor GConsultant",
  description:
    "Halaman kontak resmi GConsultant — WhatsApp, email, kantor pusat Tasikmalaya, dan kantor perwakilan Jakarta.",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BRAND.siteUrl}/#website` },
  about: { "@id": `${BRAND.siteUrl}/#organization` },
  mainEntity: { "@id": `${BRAND.siteUrl}/#organization` },
};

export default function KontakPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="navContact"
          kickerKey="pgContactKicker"
          titleKey="pgContactTitle"
          subKey="pgContactSub"
        />
        <Contact />
        <OfficialAccount />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd("/kontak", "Kontak")),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

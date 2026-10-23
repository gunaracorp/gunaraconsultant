import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { CouncilBand } from "@/components/sections/council-band";
import { WhyUs } from "@/components/sections/why-us";
import { ServicesCatalog } from "@/components/sections/services-catalog";
import { Process } from "@/components/sections/process";
import { Provinces } from "@/components/sections/provinces";
import { Founder } from "@/components/sections/founder";
import { OfficialAccount } from "@/components/sections/official-account";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { BRAND } from "@/lib/brand";
import { SERVICES } from "@/data/services";
import { PROVINCES } from "@/data/provinces";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah konsultasi awal GConsultant gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, konsultasi awal 100% gratis tanpa komitmen melalui WhatsApp resmi. Tim kami memetakan perizinan yang dibutuhkan beserta estimasi biaya dan waktu.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah GConsultant legal dan tepercaya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `GConsultant berbadan usaha resmi terdaftar di Kemenkumham RI (${BRAND.ahu}) dengan sistem mutu tersertifikasi ISO 9001:2015 dan berakar dari Mic Kinsey sejak 2009.`,
      },
    },
    {
      "@type": "Question",
      name: "Ke rekening mana pembayaran layanan harus ditransfer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Pembayaran hanya ke rekening resmi satu-satunya: ${BRAND.bank.name} ${BRAND.bank.account} a.n. ${BRAND.bank.holder}. GConsultant tidak memiliki rekening lain.`,
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses pengurusan perizinan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tergantung jenis perizinan: NIB 1–3 hari, pendirian PT 5–10 hari kerja, izin edar BPOM 1–4 bulan, AMDAL 3–12 bulan. Setiap halaman layanan mencantumkan estimasi waktu.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah GConsultant melayani seluruh Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, melayani seluruh 38 provinsi Indonesia — dari Aceh sampai Papua Pegunungan — baik proses online maupun pendampingan fisik oleh tim ahli daerah.",
      },
    },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Katalog Layanan Perizinan GConsultant",
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BRAND.siteUrl}/layanan/${s.slug}`,
    name: s.nameId,
  })),
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustMarquee />
        <CouncilBand />
        <WhyUs />
        <ServicesCatalog />
        <Process />
        <Provinces />
        <Founder />
        <OfficialAccount />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Contact />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        <span className="sr-only">
          GConsultant melayani {PROVINCES.length} provinsi dan {SERVICES.length}{" "}
          kategori layanan perizinan dengan halaman detail SEO penuh.
        </span>
      </main>
      <Footer />
    </div>
  );
}

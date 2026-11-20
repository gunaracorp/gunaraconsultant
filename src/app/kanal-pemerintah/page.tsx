import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/page-hero";
import { KanalActivation } from "@/components/sections/kanal-activation";
import { KanalDirectory, KanalAlur, KanalDisclaimer } from "@/components/sections/kanal-directory";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";
import { KANAL_PEMERINTAH, KANAL_COUNT } from "@/data/kanal-pemerintah";

export const metadata: Metadata = pageMetadata({
  title: "20 Kanal Resmi Pemerintah untuk Perizinan Usaha | GConsultant",
  description:
    "Direktori 20 kanal resmi pemerintah yang kami kerjakan setiap hari: OSS-RBA, AHU, DJP, BPJPH, BPOM, Kemenag, LPJK, PU dan lainnya — dengan panggung role activation 4 peran master dan 46 Dewan Pakar.",
  keywords: [
    "kanal resmi pemerintah",
    "daftar instansi perizinan usaha",
    "OSS RBA",
    "AHU online Kemenkumham",
    "portal resmi perizinan",
    "kanal pemerintah perizinan",
    "jasa pengurusan perizinan",
    "konsultan perizinan usaha",
  ],
  path: "/kanal-pemerintah",
});

/** FAQ — mengikuti pola halaman sertifikasi-travel (konten ID inline). */
const FAQS = [
  {
    q: "Apa itu halaman \u201c20 Kanal Resmi Pemerintah\u201d ini?",
    a: "Halaman ini adalah direktori 20 instansi dan portal resmi pemerintah yang menjadi medan kerja harian GConsultant — dari OSS-RBA untuk NIB, AHU Online untuk badan hukum, DJP untuk pajak, hingga BPJPH untuk sertifikat halal. Setiap kartu memuat nama instansi, domain resmi, dan fungsi perizinan yang ditangani di kanal tersebut, sehingga Anda tahu persis di mana setiap izin Anda dikerjakan.",
  },
  {
    q: "Apakah GConsultant berafiliasi atau bekerja atas nama instansi pemerintah?",
    a: "Tidak. GConsultant adalah konsultan independen dan tidak memiliki afiliasi, kemitraan resmi, maupun mandat dari instansi mana pun. Seluruh tautan di halaman ini mengarah langsung ke domain resmi pemerintah untuk informasi publik — kami hanya pendamping yang mengatur urutan kerja, dokumen, dan komunikasi teknis agar proses Anda berjalan benar dan cepat.",
  },
  {
    q: "Bisakah saya mengurus sendiri melalui kanal-kanal ini?",
    a: "Bisa. Semua kanal resmi terbuka untuk publik dan halaman ini justru kami susun agar Anda bisa menavigasinya sendiri. Nilai tambah GConsultant ada pada urutan kanal yang benar, kelengkapan dokumen sejak pengajuan pertama, penanganan pemberkasan yang memicu perbaikan berulang, serta koordinasi lintas instansi yang biasanya memakan waktu berbulan-bulan bila dijalankan sendiri.",
  },
  {
    q: "Apakah akun portal pemerintah klien dipegang oleh GConsultant?",
    a: "Tidak. Prinsip kami tegas: seluruh akun portal (OSS, Coretax, SIHALAL, dan lainnya) selalu didaftarkan atas nama dan kendali klien. Kami bekerja dengan kredensial yang Anda kelola penuh, sehingga setelah izin terbit Anda tidak tergantung pada konsultan mana pun untuk mengakses dan memelihara akun usaha Anda sendiri.",
  },
  {
    q: "Apakah ada biaya resmi pemerintah (PNBP) yang terpisah?",
    a: "Ada kemungkinannya, dan itu bagian transparansi kami: biaya pihak ketiga seperti PNBP, meterai, akta notaris, deposit bank, kepesertaan asosiasi, atau perjalanan dinas pengecekan lapangan selalu dihitung terpisah secara quotation dan dibayar langsung ke bendahara resmi instansi. Harga paket GConsultant mencakup jasa pendampingan, bukan menyembunyikan biaya resmi tersebut.",
  },
  {
    q: "Mengapa beberapa domain berbeda dari yang biasa saya kenal, misalnya BPOM menjadi pom.go.id?",
    a: "Karena kementerian dan lembaga dapat melakukan rebranding domain — contoh nyata yang kami temukan saat verifikasi November 2026: bpom.go.id kini pom.go.id, kemenkes.go.id kini kemkes.go.id, dan kemenkumham.go.id kini kemenham.go.id. Halaman ini kami periksa ulang secara berkala, dan setiap perubahan domain resmi akan kami catat di changelog situs.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BRAND.siteUrl}/kanal-pemerintah#webpage`,
  url: `${BRAND.siteUrl}/kanal-pemerintah`,
  name: `Direktori ${KANAL_COUNT} Kanal Resmi Pemerintah`,
  description:
    "Direktori kanal resmi pemerintah yang dikerjakan GConsultant setiap hari: badan hukum, pajak, halal, BPOM, Kemenag, konstruksi, hingga lingkungan hidup.",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BRAND.siteUrl}/#website` },
  about: { "@id": `${BRAND.siteUrl}/#organization` },
  publisher: { "@id": `${BRAND.siteUrl}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: KANAL_COUNT,
    itemListElement: KANAL_PEMERINTAH.map((k, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${k.nama} — ${k.badan}`,
      url: k.url,
    })),
  },
};

export default function KanalPemerintahPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd("/kanal-pemerintah", "20 Kanal Resmi Pemerintah", "Direktori kanal resmi pemerintah untuk perizinan usaha bersama GConsultant.")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/kanal-pemerintah", "Kanal Pemerintah")) }} />

      <Navbar />
      <main>
        <PageHero
          crumbKey="kanalCrumb"
          kickerKey="kanalKicker"
          titleKey="kanalTitle"
          subKey="kanalSub"
        />

        <KanalActivation />
        <KanalDirectory />

        <section className="relative overflow-hidden py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <KanalDisclaimer />
            <div className="mt-14 overflow-x-auto rounded-2xl border border-gold/20">
              <table className="w-full min-w-[640px] text-sm">
                <caption className="bg-muted/60 px-4 py-3 text-left font-display text-base font-bold">
                  Ringkasan 20 Kanal — nama instansi, domain resmi, dan medan kerja utama
                </caption>
                <thead className="bg-muted/60 text-left">
                  <tr>
                    <th className="px-4 py-3 font-bold">Kode</th>
                    <th className="px-4 py-3 font-bold">Kanal</th>
                    <th className="px-4 py-3 font-bold">Domain Resmi</th>
                    <th className="px-4 py-3 font-bold">Fungsi Utama</th>
                  </tr>
                </thead>
                <tbody>
                  {KANAL_PEMERINTAH.map((k) => (
                    <tr key={k.kode} className="border-t border-gold/10 transition-colors hover:bg-gold/5">
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{k.kode}</td>
                      <td className="px-4 py-3 font-bold">{k.nama}</td>
                      <td className="px-4 py-3">
                        <a
                          href={k.url}
                          target="_blank"
                          rel="noopener noreferrer external"
                          className="font-mono text-xs font-semibold text-gold underline-offset-4 hover:underline"
                        >
                          {k.domain}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{k.fungsi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <KanalAlur />

        <section className="relative overflow-hidden py-14 sm:py-16" aria-label="Pertanyaan Umum Kanal Pemerintah">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
              FAQ — Kanal Resmi Pemerintah
            </h2>
            <div className="mt-8 space-y-3">
              {FAQS.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-gold/20 bg-card transition-colors open:border-gold/50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-sm font-bold sm:text-base">
                    {f.q}
                    <span className="text-gold transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

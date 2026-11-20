import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Sertifikasi Travel Full All-In 2026 — BPW, PPIU & PIHK | GConsultant",
  description:
    "Tiga paket full all-in perizinan travel — BPW, Izin PPIU Umrah, Izin PIHK Haji Khusus — Promo Khusus 2026 Rp12 juta per paket (harga normal Rp25 juta): dari badan usaha hingga izin terbit, satu harga transparan.",
  keywords: [
    "sertifikasi travel full all-in",
    "paket izin BPW biro perjalanan wisata",
    "biaya izin PPIU umrah 2026",
    "izin PIHK haji khusus",
    "paket perizinan travel umrah",
    "jasa pengurusan izin PPIU PIHK BPW",
    "legalitas biro perjalanan wisata",
    "perizinan travel ibadah Kemenag",
  ],
  path: "/sertifikasi-travel",
});

const PACKAGES = [
  {
    slug: "tda-biro-perjalanan-wisata-bpw",
    nama: "Izin Biro Perjalanan Wisata (BPW)",
    namaPaket: "BPW — Full All-In",
    target: "Tour & travel umum: paket wisata domestik, tiket, MICE",
    harga: 25000000,
    hargaDiskon: 12000000,
    hemat: 13000000,
    berlaku: "Sesuai TDA/NIB — tanda daftar usaha pariwisata",
    ruang: [
      "Pendirian badan usaha (PT/CV) bila belum ada",
      "NIB, TDA pariwisata & kode KBLI travel",
      "Kepesertaan asosiasi pariwisata resmi",
      "Dokumen operasional & panduan pelaporan",
    ],
  },
  {
    slug: "izin-usaha-ppiu-umrah",
    nama: "Izin Usaha PPIU (Umrah)",
    namaPaket: "PPIU Umrah — Full All-In",
    target: "Travel ibadah umrah: jualan paket umrah dengan izin Kemenag",
    harga: 25000000,
    hargaDiskon: 12000000,
    hemat: 13000000,
    berlaku: "Izin PPIU berlaku 5 tahun (dapat diperpanjang)",
    ruang: [
      "Badan usaha PT, akta, SK Kemenkumham, NIB & KBLI",
      "Dokumen rekomendasi & pengurusan izin Kemenag",
      "Panduan deposit/dana talangan & pembimbing ibadah",
      "Pendampingan pelaporan keberangkatan pertama",
    ],
    unggulan: true,
  },
  {
    slug: "izin-usaha-ppihk-haji-khusus",
    nama: "Izin Usaha PPIHK (Haji Khusus)",
    namaPaket: "PIHK Haji Khusus — Full All-In",
    target: "Penyelenggara haji khusus: layanan ibadah eksklusif premium",
    harga: 25000000,
    hargaDiskon: 12000000,
    hemat: 13000000,
    berlaku: "Izin PIHK berlaku 3 tahun (dapat diperpanjang)",
    ruang: [
      "Pemetaan prasyarat & jalur naik kelas dari PPIU",
      "Badan hukum, dokumen & administrasi Kemenag",
      "Pengurusan izin PIHK berdasarkan UU 13/2008",
      "Konsultasi kemitraan & struktur layanan haji khusus",
    ],
  },
];

const FAQS = [
  {
    q: "Apa bedanya BPW, PPIU, dan PIHK?",
    a: "BPW adalah biro perjalanan wisata umum (paket wisata domestik/internasional). PPIU adalah perusahaan penyelenggara perjalanan ibadah umrah yang berizin Kemenag. PIHK (PPIHK) adalah penyelenggara perjalanan ibadah haji khusus — tingkat tertinggi, dan jalurnya melewati pengalaman PPIU terlebih dahulu.",
  },
  {
    q: "Apakah harga paket sudah termasuk pendirian badan usaha?",
    a: "Ya. Ketiga paket full all-in mencakup pembentukan badan usaha (PT/CV) beserta akta, SK Kemenkumham, NPWP, dan NIB bila perusahaan Anda belum berdiri. Bila badan usaha sudah ada, ruang lingkup dialihkan ke penyesuaian dokumen dan kode KBLI.",
  },
  {
    q: "Biaya apa saja yang tidak termasuk paket?",
    a: "Biaya pihak ketiga selalu quotation terpisah dan transparan: deposit/dana talangan di bank sesuai ketentuan Kemenag, kepesertaan & iuran asosiasi, biaya resmi instansi, notaris tambahan bila diperlukan, serta perjalanan dinas di luar cakupan layanan.",
  },
  {
    q: "Apakah travel di luar kota Anda bisa dilayani?",
    a: "Bisa. GConsultant melayani 38 provinsi Indonesia dengan koordinasi dokumen daring dan pendampingan WhatsApp — Anda tidak perlu datang ke kantor kecuali instansi mensyaratkan kehadiran langsung.",
  },
  {
    q: "Apakah izin dijamin terbit?",
    a: "Tidak ada konsultan jujur yang bisa menjamin persetujuan instansi. Yang kami jamin adalah garansi pengerjaan tertulis: dokumen lengkap sesuai ketentuan terkini, proses transparan berbasis ISO 9001:2015, dan pendampingan sampai izin terbit. Klaim afiliasi resmi terhadap Kemenag juga tidak kami buat.",
  },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export default function SertifikasiTravelPage() {
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
    "@type": "ItemList",
    name: "Paket Sertifikasi Travel Full All-In 2026 GConsultant",
    itemListElement: PACKAGES.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: `${p.nama} — Full All-In`,
        description: `${p.namaPaket}: ${p.ruang[0]}, ${p.ruang[1]}, dst. Harga paket ${fmt(p.hargaDiskon)}.`,
        provider: { "@type": "Organization", name: BRAND.name, url: BRAND.siteUrl },
        areaServed: "ID",
        offers: {
          "@type": "Offer",
          price: p.hargaDiskon,
          priceCurrency: "IDR",
          url: `${BRAND.siteUrl}/layanan/${p.slug}`,
        },
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="certHubCrumb"
          kickerKey="certHubKicker"
          titleKey="certHubTitle"
          subKey="certHubSub"
        />

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Tiga paket di bawah ini adalah jalur legalitas lengkap untuk bisnis perjalanan — dari biro perjalanan
            wisata umum, travel ibadah umrah berizin Kementerian Agama, hingga penyelenggara haji khusus. Setiap
            paket berstatus <strong>full all-in</strong>: satu harga untuk seluruh pekerjaan inti, tanpa biaya
            siluman, dengan garansi pengerjaan tertulis dan proses transparan berbasis ISO 9001:2015. Tim kami
            melayani 38 provinsi Indonesia.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-gold/45 bg-gold/10 px-5 py-4">
            <span className="rounded-full bg-gold px-3 py-1 font-display text-xs font-black tracking-wide text-deep">
              PROMO KHUSUS TAHUN 2026
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ketiga paket full all-in dibanderol{" "}
              <strong className="font-display text-gold">Rp12 juta</strong> per paket — diskon dari harga normal{" "}
              <span className="line-through">Rp25 juta</span> (hemat Rp13 juta). Berlaku untuk pendaftaran tahun
              2026. Jangkauan kota:{" "}
              <Link href="/sertifikasi-travel/kota" className="font-semibold text-gold underline underline-offset-4">
                direktori 514 kota/kabupaten
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <article
                key={p.slug}
                className={`relative flex flex-col rounded-3xl border p-6 shadow-xl ${
                  p.unggulan ? "border-gold/60 bg-card" : "border-gold/25 bg-card"
                }`}
              >
                {p.unggulan && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-black text-deep">
                    PALING DIPILIH
                  </span>
                )}
                <h2 className="font-display text-xl font-bold">{p.namaPaket}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.target}</p>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-3">
                  <span className="font-display text-3xl font-black text-gold">{fmt(p.hargaDiskon)}</span>
                  <span className="text-sm text-muted-foreground line-through">{fmt(p.harga)}</span>
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-xs font-bold text-sky-700 dark:text-sky-400">
                    Hemat {fmt(p.hemat)}
                  </span>
                  <span className="rounded-full bg-gold/15 px-2 py-0.5 text-xs font-black text-gold">
                    KHUSUS 2026
                  </span>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed">
                  {p.ruang.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">Masa berlaku: {p.berlaku}</p>
                <Link
                  href={`/layanan/${p.slug}`}
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-gold/40 px-5 py-2.5 text-sm font-bold text-gold transition-colors hover:bg-gold/10"
                >
                  Detail &amp; pesan paket
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold">Perbandingan Tiga Jalur Legalitas Travel</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[680px] text-sm">
              <thead className="bg-muted/60 text-left">
                <tr>
                  <th className="px-4 py-3 font-bold">Dimensi</th>
                  <th className="px-4 py-3 font-bold">BPW</th>
                  <th className="px-4 py-3 font-bold">PPIU (Umrah)</th>
                  <th className="px-4 py-3 font-bold">PIHK (Haji Khusus)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3 font-semibold">Produk yang boleh dijual</td>
                  <td className="px-4 py-3">Paket wisata umum, tiket, tour</td>
                  <td className="px-4 py-3">Paket perjalanan ibadah umrah</td>
                  <td className="px-4 py-3">Paket ibadah haji khusus</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Instansi utama</td>
                  <td className="px-4 py-3">OSS / Dinas Pariwisata</td>
                  <td className="px-4 py-3">Kementerian Agama</td>
                  <td className="px-4 py-3">Kementerian Agama</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Masa berlaku izin</td>
                  <td className="px-4 py-3">Mengikuti TDA/NIB</td>
                  <td className="px-4 py-3">5 tahun</td>
                  <td className="px-4 py-3">3 tahun</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Prasyarat pengalaman</td>
                  <td className="px-4 py-3">Tidak ada</td>
                  <td className="px-4 py-3">Badan usaha siap & dokumen lengkap</td>
                  <td className="px-4 py-3">Riwayat PPIU (naik kelas)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Harga paket all-in</td>
                  <td className="px-4 py-3 font-bold text-gold">{fmt(12000000)}</td>
                  <td className="px-4 py-3 font-bold text-gold">{fmt(12000000)}</td>
                  <td className="px-4 py-3 font-bold text-gold">{fmt(12000000)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Masa berlaku izin mengikuti ketentuan Kementerian Agama yang berlaku dan dapat diperbarui oleh
            regulasi terbaru — tim GConsultant memantau setiap perubahan agar paket Anda selalu sesuai.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold">Pertanyaan yang Paling Sering Diajukan</h2>
          <div className="mt-6 space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl border border-gold/20 bg-card p-5">
                <summary className="cursor-pointer font-bold">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <CtaBanner />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd("/sertifikasi-travel", "Sertifikasi Travel Full All-In — BPW, PPIU & PIHK", "Tiga paket full all-in perizinan travel: BPW, PPIU Umrah, dan PIHK Haji Khusus — Promo Khusus 2026 Rp12 juta per paket (harga normal Rp25 juta), harga transparan dan garansi pengerjaan tertulis.")),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/sertifikasi-travel", "Sertifikasi Travel")) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <Footer />
    </div>
  );
}

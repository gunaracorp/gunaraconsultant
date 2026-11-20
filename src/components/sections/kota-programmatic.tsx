import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Building2, ChevronRight, ClipboardList, ShieldCheck, Workflow } from "lucide-react";
import { KOTA_WILAYAH, KOTA_PER_PROVINSI, PROVINSI_WILAYAH, type KotaWilayah, type ProvinsiWilayah } from "@/data/wilayah";
import { PROMO_TRAVEL } from "@/data/promo-travel";
import type { LayananProgrammatic } from "@/data/layanan-programmatic";
import { BRAND, waLink } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

/**
 * Template halaman programmatic SEO (v3.12.0): satu halaman per kota/kabupaten
 * dan per provinsi untuk Izin PPIU & Izin PIHK. Server component murni — tanpa
 * hook i18n — dengan konten ID yang dirakit dari data wilayah + konfigurasi
 * layanan. Harga mengikuti PROMO_TRAVEL (satu sumber dengan katalog).
 */

const fmt = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const ALUR = [
  {
    icon: ClipboardList,
    judul: "Diagnosis & Peta Kewajiban",
    isi: "Kami memetakan kondisi usaha Anda dan menyusun daftar dokumen yang harus disiapkan — satu rencana kerja yang bisa Anda baca dan ukur.",
  },
  {
    icon: Building2,
    judul: "Badan Usaha & Dokumen",
    isi: "Pembentukan PT/CV bila belum berdiri: akta, SK Kemenkumham, NPWP, NIB, dan kode KBLI yang tepat untuk penyelenggaraan ibadah.",
  },
  {
    icon: Workflow,
    judul: "Pengurusan di Kanal Resmi",
    isi: "Rekomendasi hingga izin Kemenag dikerjakan di dalam portal resmi pemerintah — berurutan benar sejak pengajuan pertama.",
  },
  {
    icon: BadgeCheck,
    judul: "Verifikasi & Serah Terima",
    isi: "Setiap terbitan diverifikasi di kanal sumbernya, lalu paket legalitas lengkap diserahkan — akun portal selalu atas nama Anda.",
  },
];

function breadcrumbJsonld(service: LayananProgrammatic, leaf: string, leafPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: BRAND.siteUrl },
      { "@type": "ListItem", position: 2, name: "Sertifikasi Travel", item: `${BRAND.siteUrl}/sertifikasi-travel` },
      { "@type": "ListItem", position: 3, name: service.crumb, item: `${BRAND.siteUrl}${service.pathPrefix}` },
      { "@type": "ListItem", position: 4, name: leaf, item: `${BRAND.siteUrl}${leafPath}` },
    ],
  };
}

function faqJsonld(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ──────────────────────────── Halaman kota ──────────────────────────── */

function faqKota(service: LayananProgrammatic, kota: KotaWilayah) {
  return [
    {
      q: `Berapa biaya ${service.nama} di ${kota.nama}?`,
      a: `Paket full all-in ${service.nama} untuk usaha di ${kota.nama} adalah ${fmt(PROMO_TRAVEL.hargaDiskon)} — Promo Khusus tahun 2026, diskon dari harga normal ${fmt(PROMO_TRAVEL.harga)}. Paket mencakup pembentukan badan usaha bila belum ada, seluruh penyiapan dokumen, hingga ${service.izinText}. Biaya pihak ketiga seperti deposit bank dan kepesertaan asosiasi dihitung terpisah dan transparan.`,
    },
    {
      q: `Apakah travel di ${kota.nama} harus berbadan usaha PT?`,
      a: `PT adalah pilihan paling umum karena menampung investor dan memudahkan pengembangan, tetapi CV juga dapat diajukan. Jika Anda belum punya badan usaha, paket full all-in sudah mencakup pembentukan PT/CV beserta akta, SK Kemenkumham, NPWP, NIB, dan kode KBLI.`,
    },
    {
      q: `Berapa lama proses ${service.nama} untuk usaha di ${kota.provinsi}?`,
      a: `Estimasi durasi keseluruhan umumnya 4–8 minggu sejak dokumen lengkap, bergantung pada antrean instansi — angka ini estimasi jujur, bukan janji tanggal pasti. Dokumen yang lengkap sejak pengajuan pertama adalah penentu kecepatan terbesar.`,
    },
    {
      q: `Apakah GConsultant melayani ${kota.nama} langsung?`,
      a: `Ya. GConsultant melayani seluruh ${kota.provinsi} dan 38 provinsi Indonesia — koordinasi dokumen daring dan pendampingan WhatsApp, dengan kantor di Tasikmalaya dan Jakarta. Anda tidak perlu datang ke kantor kecuali instansi mensyaratkan kehadiran langsung.`,
    },
  ];
}

export function cityMetadata(service: LayananProgrammatic, slug: string): Metadata {
  const kota = KOTA_WILAYAH.find((k) => k.slug === slug);
  if (!kota) return {};
  const kawasan = PROVINSI_WILAYAH.find((p) => p.slug === kota.provinsiSlug)?.kawasan ?? "Indonesia";
  return pageMetadata({
    title: `${service.metaNama} ${kota.nama} — Rp12 Jt (2026)`,
    description: `Paket full all-in ${service.nama} di ${kota.nama}, ${kota.provinsi}: Rp12 juta Promo Khusus 2026 (normal Rp25 juta) — badan usaha, dokumen, hingga ${service.izinText}. Melayani ${kota.provinsi} & kawasan ${kawasan}.`,
    keywords: [
      `izin ppiu ${kota.nama.toLowerCase()}`,
      `biaya izin ppiu ${kota.nama.toLowerCase()}`,
      `jasa izin ppiu ${kota.provinsi.toLowerCase()}`,
      `travel umrah ${kota.nama.toLowerCase()}`,
      `paket izin umrah 2026`,
    ],
    path: `${service.pathPrefix}/${kota.slug}`,
  });
}

export function CityServiceContent({
  service,
  kota,
  provinsi,
}: {
  service: LayananProgrammatic;
  kota: KotaWilayah;
  provinsi: ProvinsiWilayah;
}) {
  const lawan = service.key === "ppiu" ? "pihk" : "ppiu";
  const faqs = faqKota(service, kota);
  const siblings = (KOTA_PER_PROVINSI[kota.provinsiSlug] ?? []).filter((k) => k.slug !== kota.slug).slice(0, 6);
  const waText = `${service.waGreeting} ${kota.nama}, ${kota.provinsi}. Mohon info paket full all-in Promo Khusus 2026.`;

  return (
    <>
      <JsonLd data={breadcrumbJsonld(service, kota.nama, `${service.pathPrefix}/${kota.slug}`)} />
      <JsonLd data={faqJsonld(faqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${service.namaPanjang} di ${kota.nama} — Paket Full All-In`,
          serviceType: service.namaPanjang,
          provider: { "@type": "Organization", name: BRAND.name, url: BRAND.siteUrl },
          areaServed: { "@type": "City", name: kota.nama },
          offers: {
            "@type": "Offer",
            price: PROMO_TRAVEL.hargaDiskon,
            priceCurrency: "IDR",
            url: `${BRAND.siteUrl}/layanan/${service.layananSlug}`,
          },
        }}
      />

      {/* Kepala halaman */}
      <section className="section-deep relative overflow-hidden">
        <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-14 sm:px-6 sm:pt-32 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-cream/55">
              <li><Link href="/" className="transition-colors hover:text-gold-soft">Beranda</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gold/50" /></li>
              <li><Link href="/sertifikasi-travel" className="transition-colors hover:text-gold-soft">Sertifikasi Travel</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gold/50" /></li>
              <li><Link href={service.pathPrefix} className="transition-colors hover:text-gold-soft">{service.crumb}</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gold/50" /></li>
              <li aria-current="page" className="text-gold-soft">{kota.nama}</li>
            </ol>
          </nav>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-gold-soft uppercase">
              PROMO KHUSUS 2026 — Rp12 JT
            </p>
            <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-cream sm:text-4xl">
              {service.nama} di {kota.nama} — Full All-In Rp12 Juta
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
              Paket perizinan lengkap untuk pelaku usaha di {kota.nama}, {kota.provinsi} ({provinsi.kawasan}) —
              dari badan usaha hingga {service.izinText}, satu harga transparan.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Kartu harga promo */}
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border border-gold/50 bg-card p-6 shadow-xl shadow-gold/5 lg:col-span-3">
            <span className="rounded-full bg-gold px-3 py-1 font-display text-xs font-black tracking-wide text-deep">
              PROMO KHUSUS TAHUN 2026
            </span>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-3">
              <span className="font-display text-4xl font-black text-gold">{fmt(PROMO_TRAVEL.hargaDiskon)}</span>
              <span className="text-sm text-muted-foreground line-through">{fmt(PROMO_TRAVEL.harga)}</span>
              <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-xs font-bold text-sky-700 dark:text-sky-400">
                Hemat {fmt(PROMO_TRAVEL.hemat)}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Satu harga untuk seluruh pekerjaan inti {service.namaPanjang}: {service.target.toLowerCase()} di{" "}
              {kota.nama} dan sekitarnya — tanpa biaya siluman, garansi pengerjaan tertulis, proses transparan
              berbasis ISO 9001:2015.
            </p>
            <a
              href={waLink(waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-black text-deep transition-transform hover:scale-[1.03]"
            >
              Konsultasi Gratis via WhatsApp
            </a>
            <p className="mt-3 text-xs text-muted-foreground">{service.berlaku}</p>
          </div>
          <div className="rounded-3xl border border-gold/25 bg-card p-6 lg:col-span-2">
            <h2 className="font-display text-lg font-bold">Data Penting</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-3 border-b border-gold/10 pb-2">
                <dt className="text-muted-foreground">Wilayah layanan</dt>
                <dd className="text-right font-semibold">{kota.nama}, {kota.provinsi}</dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-gold/10 pb-2">
                <dt className="text-muted-foreground">Kawasan</dt>
                <dd className="text-right font-semibold">{provinsi.kawasan}</dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-gold/10 pb-2">
                <dt className="text-muted-foreground">Dasar hukum</dt>
                <dd className="text-right font-semibold">{service.dasarHukum}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Masa berlaku izin</dt>
                <dd className="text-right font-semibold">{service.berlaku.replace(/^Izin [A-Z]+ berlaku /, "")}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Ruang lingkup */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold">Ruang Lingkup Paket Full All-In di {kota.nama}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.ruang.map((r) => (
              <li key={r} className="flex items-start gap-2 rounded-2xl border border-gold/15 bg-card p-4 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Biaya pihak ketiga — deposit/dana talangan di bank, iuran &amp; kepesertaan asosiasi, biaya resmi
            instansi — selalu quotation terpisah dan transparan. Untuk {service.nama}, prasyarat &amp; dokumen
            mengikuti {service.dasarHukum} dan ketentuan Kemenag terkini yang kami pantau terus.
          </p>
        </section>

        {/* Alur kerja */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold">Cara Kami Mengerjakan di {kota.nama}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ALUR.map((a, i) => (
              <div key={a.judul} className="rounded-3xl border border-gold/25 bg-card p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
                    <a.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-2xl font-black text-gold/20" aria-hidden="true">{i + 1}</span>
                </div>
                <h3 className="mt-3 font-display text-sm font-black">{a.judul}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{a.isi}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold">Pertanyaan Seputar {service.nama} di {kota.nama}</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-gold/20 bg-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-bold">
                  {f.q}
                  <span className="text-gold transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Navigasi terkait */}
        <section className="mt-12 rounded-3xl border border-gold/25 bg-gold/5 p-6">
          <h2 className="font-display text-lg font-bold">Lanjutkan Menavigasi</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <Link href={service.pathPrefix} className="rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition-colors hover:bg-gold/10">
              Panduan {service.crumb}
            </Link>
            <Link href={`${service.pathPrefix}/provinsi/${kota.provinsiSlug}`} className="rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition-colors hover:bg-gold/10">
              Layanan di {kota.provinsi}
            </Link>
            <Link href={`${LAYANAN_PASANGAN[lawan].pathPrefix}/${kota.slug}`} className="rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition-colors hover:bg-gold/10">
              {LAYANAN_PASANGAN[lawan].nama} di {kota.nama}
            </Link>
            <Link href="/sertifikasi-travel/kota" className="rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition-colors hover:bg-gold/10">
              Direktori 514 Kota/Kabupaten
            </Link>
            {siblings.map((s) => (
              <Link key={s.slug} href={`${service.pathPrefix}/${s.slug}`} className="rounded-full border border-gold/20 px-4 py-2 text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold">
                {s.nama}
              </Link>
            ))}
          </div>
        </section>

        {/* Batasan klaim */}
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          GConsultant adalah konsultan independen — tidak berafiliasi dengan Kementerian Agama maupun instansi
          mana pun, dan tidak ada jaminan persetujuan karena keputusan akhir selalu berada di tangan instansi
          penerbit. Yang kami jamin adalah kualitas pengerjaan, transparansi status, dan pendampingan sampai
          {" "}{service.izinText}.
        </p>
      </div>
    </>
  );
}

import { LAYANAN_PROGRAMMATIC } from "@/data/layanan-programmatic";
const LAYANAN_PASANGAN = LAYANAN_PROGRAMMATIC;

/* ─────────────────────────── Halaman provinsi ─────────────────────────── */

function faqProvinsi(service: LayananProgrammatic, provinsi: ProvinsiWilayah, jumlahKota: number) {
  return [
    {
      q: `Bagaimana urusan ${service.nama} untuk usaha di ${provinsi.nama}?`,
      a: `Alurnya sama untuk seluruh ${jumlahKota} kota/kabupaten di ${provinsi.nama}: badan usaha disiapkan terlebih dahulu, lalu rekomendasi dan ${service.izinText} dikerjakan di kanal resmi Kementerian Agama. Koordinasi dokumen berjalan daring dengan pendampingan WhatsApp, sehingga lokasi usaha di ${provinsi.nama} bukan penghalang.`,
    },
    {
      q: `Berapa harga paket ${service.nama}?`,
      a: `Paket full all-in ${fmt(PROMO_TRAVEL.hargaDiskon)} per paket — Promo Khusus tahun 2026, diskon dari harga normal ${fmt(PROMO_TRAVEL.harga)}. Biaya pihak ketiga (deposit bank, kepesertaan asosiasi, biaya resmi instansi) dihitung terpisah secara transparan.`,
    },
  ];
}

export function provinsiMetadata(service: LayananProgrammatic, slug: string): Metadata {
  const prov = PROVINSI_WILAYAH.find((p) => p.slug === slug);
  if (!prov) return {};
  const n = (KOTA_PER_PROVINSI[slug] ?? []).length;
  return pageMetadata({
    title: `${service.metaNama} ${prov.nama} — Promo Rp12 Jt 2026`,
    description: `Layanan ${service.nama} untuk seluruh ${n} kota/kabupaten di ${prov.nama} (${prov.kawasan}) — paket full all-in Rp12 juta Promo Khusus 2026, dari badan usaha hingga ${service.izinText}.`,
    keywords: [
      `izin ppiu ${prov.nama.toLowerCase()}`,
      `jasa perizinan ${prov.nama.toLowerCase()}`,
      `travel umrah ${prov.nama.toLowerCase()}`,
      `paket izin umrah ${prov.kawasan.toLowerCase()}`,
    ],
    path: `${service.pathPrefix}/provinsi/${prov.slug}`,
  });
}

export function ProvinsiServiceContent({
  service,
  provinsi,
}: {
  service: LayananProgrammatic;
  provinsi: ProvinsiWilayah;
}) {
  const kotaList = KOTA_PER_PROVINSI[provinsi.slug] ?? [];
  const lawan = service.key === "ppiu" ? "pihk" : "ppiu";
  const faqs = faqProvinsi(service, provinsi, kotaList.length);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonld(service, provinsi.nama, `${service.pathPrefix}/provinsi/${provinsi.slug}`)}
      />
      <JsonLd data={faqJsonld(faqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${service.namaPanjang} — Jangkauan Kota/Kabupaten di ${provinsi.nama}`,
          numberOfItems: kotaList.length,
          itemListElement: kotaList.map((k, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${service.nama} di ${k.nama}`,
            url: `${BRAND.siteUrl}${service.pathPrefix}/${k.slug}`,
          })),
        }}
      />

      <section className="section-deep relative overflow-hidden">
        <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-14 sm:px-6 sm:pt-32 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-cream/55">
              <li><Link href="/" className="transition-colors hover:text-gold-soft">Beranda</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gold/50" /></li>
              <li><Link href="/sertifikasi-travel" className="transition-colors hover:text-gold-soft">Sertifikasi Travel</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gold/50" /></li>
              <li><Link href={service.pathPrefix} className="transition-colors hover:text-gold-soft">{service.crumb}</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gold/50" /></li>
              <li aria-current="page" className="text-gold-soft">{provinsi.nama}</li>
            </ol>
          </nav>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-gold-soft uppercase">
              {kotaList.length} KOTA &amp; KABUPATEN — {provinsi.kawasan.toUpperCase()}
            </p>
            <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-cream sm:text-4xl">
              {service.nama} di {provinsi.nama}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
              Jangkauan penuh {service.namaPanjang} untuk pelaku usaha di seluruh {kotaList.length} kota/kabupaten
              di {provinsi.nama} — paket full all-in Rp12 juta Promo Khusus 2026, koordinasi dokumen daring.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold">Pilih Kota/Kabupaten di {provinsi.nama}</h2>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {kotaList.map((k) => (
                <Link
                  key={k.slug}
                  href={`${service.pathPrefix}/${k.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-2xl border border-gold/20 bg-card px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
                >
                  <span className="truncate">{k.nama}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-gold/40 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-gold/45 bg-gold/5 p-6">
            <span className="rounded-full bg-gold px-3 py-1 font-display text-xs font-black tracking-wide text-deep">
              PROMO KHUSUS 2026
            </span>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-3">
              <span className="font-display text-4xl font-black text-gold">{fmt(PROMO_TRAVEL.hargaDiskon)}</span>
              <span className="text-sm text-muted-foreground line-through">{fmt(PROMO_TRAVEL.harga)}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.nama} full all-in untuk usaha di {provinsi.nama} dan 38 provinsi lainnya.
            </p>
            <a
              href={waLink(`${service.waGreeting} ${provinsi.nama}. Mohon info paket full all-in Promo Khusus 2026.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-black text-deep transition-transform hover:scale-[1.03]"
            >
              Konsultasi Gratis
            </a>
            <p className="mt-3 text-xs text-muted-foreground">{service.berlaku}</p>
          </aside>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold">Pertanyaan Umum — {provinsi.nama}</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-gold/20 bg-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-bold">
                  {f.q}
                  <span className="text-gold transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-gold/25 bg-gold/5 p-6">
          <h2 className="font-display text-lg font-bold">Lanjutkan Menavigasi</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <Link href={service.pathPrefix} className="rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition-colors hover:bg-gold/10">
              Panduan {service.crumb}
            </Link>
            <Link href={`${LAYANAN_PASANGAN[lawan].pathPrefix}/provinsi/${provinsi.slug}`} className="rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition-colors hover:bg-gold/10">
              {LAYANAN_PASANGAN[lawan].nama} di {provinsi.nama}
            </Link>
            <Link href="/sertifikasi-travel" className="rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition-colors hover:bg-gold/10">
              Sertifikasi Travel Full All-In
            </Link>
            <Link href="/sertifikasi-travel/kota" className="rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition-colors hover:bg-gold/10">
              Direktori 514 Kota/Kabupaten
            </Link>
            <Link href="/kanal-pemerintah" className="rounded-full border border-gold/40 px-4 py-2 font-semibold text-gold transition-colors hover:bg-gold/10">
              20 Kanal Resmi Pemerintah
            </Link>
          </div>
        </section>

        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          GConsultant adalah konsultan independen — tidak berafiliasi dengan Kementerian Agama maupun instansi
          mana pun, dan tidak ada jaminan persetujuan karena keputusan akhir selalu berada di tangan instansi
          penerbit.
        </p>
      </div>
      <div className="flex items-start gap-3 text-xs text-muted-foreground" aria-hidden="false">
        <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
        <span>Akun portal pemerintah selalu didaftarkan atas nama klien — kendali penuh tetap di tangan Anda.</span>
      </div>
    </>
  );
}

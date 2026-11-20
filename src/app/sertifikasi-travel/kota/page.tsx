import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { pageMetadata } from "@/lib/seo";
import { KOTA_PER_PROVINSI, PROVINSI_WILAYAH } from "@/data/wilayah";
import { LAYANAN_PROGRAMMATIC } from "@/data/layanan-programmatic";
import { PROMO_TRAVEL } from "@/data/promo-travel";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Izin PPIU & PIHK per Kota — Direktori 514 Kota/Kabupaten",
  description:
    "Direktori programmatic SEO GConsultant: halaman Izin PPIU (Umrah) dan Izin PIHK (Haji Khusus) untuk seluruh 514 kota/kabupaten di 38 provinsi — paket full all-in Rp12 juta Promo Khusus 2026.",
  keywords: [
    "izin ppiu per kota",
    "izin ppiu provinsi",
    "izin ppihk per kota",
    "jasa izin umrah se indonesia",
    "direktori perizinan travel",
  ],
  path: "/sertifikasi-travel/kota",
});

const fmt = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const SERVICES = [LAYANAN_PROGRAMMATIC.ppiu, LAYANAN_PROGRAMMATIC.pihk];

export default function DirektoriKotaPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${BRAND.siteUrl}/sertifikasi-travel/kota`,
    name: "Direktori Izin PPIU & PIHK per Kota/Kabupaten",
    inLanguage: "id-ID",
    isPartOf: { "@id": `${BRAND.siteUrl}/#website` },
    publisher: { "@id": `${BRAND.siteUrl}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <Navbar />
      <main className="flex-1">
        <section className="section-deep relative overflow-hidden">
          <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-14 sm:px-6 sm:pt-32 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-cream/55">
                <li><Link href="/" className="transition-colors hover:text-gold-soft">Beranda</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gold/50" /></li>
                <li><Link href="/sertifikasi-travel" className="transition-colors hover:text-gold-soft">Sertifikasi Travel</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gold/50" /></li>
                <li aria-current="page" className="text-gold-soft">Direktori Kota</li>
              </ol>
            </nav>
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-gold-soft uppercase">
                514 KOTA/KABUPATEN · 38 PROVINSI · 2 LAYANAN
              </p>
              <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-cream sm:text-4xl">
                Direktori Izin PPIU &amp; PIHK per Kota
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
                Setiap kota/kabupaten di Indonesia memiliki halaman layanannya sendiri — paket full all-in{" "}
                {fmt(PROMO_TRAVEL.hargaDiskon)} per paket ({PROMO_TRAVEL.label}, normal{" "}
                {fmt(PROMO_TRAVEL.harga)}). Pilih provinsi, lalu pilih kota Anda.
              </p>
              <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {SERVICES.map((s) => (
            <section key={s.key} className="mt-10">
              <h2 className="font-display text-2xl font-bold">
                {s.namaPanjang} — per Provinsi
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {s.target}. Dasar hukum: {s.dasarHukum}. {s.berlaku}.
              </p>
              <div className="mt-6 space-y-3">
                {PROVINSI_WILAYAH.map((p) => {
                  const kotaList = KOTA_PER_PROVINSI[p.slug] ?? [];
                  return (
                    <details key={p.slug} className="group rounded-2xl border border-gold/20 bg-card">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 font-bold">
                        <span>
                          {p.nama}
                          <span className="ml-2 text-xs font-semibold text-muted-foreground">
                            ({kotaList.length} kota/kabupaten · kawasan {p.kawasan})
                          </span>
                        </span>
                        <span className="text-gold transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <div className="border-t border-gold/10 px-5 py-4">
                        <Link
                          href={`${s.pathPrefix}/provinsi/${p.slug}`}
                          className="inline-flex rounded-full border border-gold/40 px-4 py-1.5 text-xs font-bold text-gold transition-colors hover:bg-gold/10"
                        >
                          Ringkasan {s.metaNama} di {p.nama}
                        </Link>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {kotaList.map((k) => (
                            <Link
                              key={k.slug}
                              href={`${s.pathPrefix}/${k.slug}`}
                              className="rounded-full border border-gold/15 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-gold/45 hover:text-gold"
                            >
                              {k.nama}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

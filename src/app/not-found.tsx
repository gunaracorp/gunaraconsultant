import Link from "next/link";
import { BrandSeal } from "@/components/brand-seal";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "404 — Halaman Tidak Ditemukan",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-deep px-4 py-24 text-center">
      <div
        aria-hidden="true"
        className="pattern-dots absolute inset-0 opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative z-10 flex flex-col items-center">
        <BrandSeal
          idPrefix="gs-404"
          title="Logo GConsultant"
          className="h-20 w-20 drop-shadow-[0_0_18px_rgba(212,175,55,0.45)]"
        />
        <p
          aria-hidden="true"
          className="mt-8 font-display text-[92px] font-black leading-none tracking-tight text-gradient-gold sm:text-[128px]"
        >
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold text-cream sm:text-3xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
          Halaman yang Anda cari mungkin sudah dipindah, dihapus, atau
          alamatnya salah tulis. Silakan kembali ke beranda atau jelajahi 46
          layanan perizinan kami.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="btn-shine rounded-full bg-gold font-bold text-deep shadow-lg shadow-gold/30"
          >
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              Kembali ke Beranda
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-gold/40 bg-white/5 font-bold text-cream hover:bg-gold/15 hover:text-gold-soft"
          >
            <Link href="/layanan">
              <Search className="h-4 w-4" aria-hidden="true" />
              Lihat 46 Layanan
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

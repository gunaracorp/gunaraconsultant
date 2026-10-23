"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandSeal } from "@/components/brand-seal";
import { Menu, PhoneCall, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";

const LINKS = [
  { key: "navServices" as const, href: "/layanan" },
  { key: "navAbout" as const, href: "/tentang-kami" },
  { key: "navMetodologi" as const, href: "/metodologi" },
  { key: "navBlog" as const, href: "/blog" },
  { key: "navWhy" as const, href: "/keunggulan" },
  { key: "navProcess" as const, href: "/proses" },
  { key: "navProvinces" as const, href: "/provinsi", wideOnly: true },
  { key: "navFounder" as const, href: "/pendiri", wideOnly: true },
  { key: "navFaq" as const, href: "/faq" },
  { key: "navContact" as const, href: "/kontak" },
];

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-gold/25 bg-deep/95 shadow-lg shadow-deep/30 backdrop-blur-xl"
          : "bg-gradient-to-b from-deep/80 to-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="GConsultant — Beranda">
          <span className="relative h-11 w-11 shrink-0 transition-transform duration-500 group-hover:rotate-[8deg]">
            <BrandSeal
              idPrefix="gs-nav"
              title="Logo GConsultant"
              className="h-11 w-11 drop-shadow-[0_0_10px_rgba(198,161,91,0.35)]"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-[0.16em] text-cream">
              G<span className="text-gradient-gold">CONSULTANT</span>
            </span>
            <span className="block text-[9px] font-semibold tracking-[0.3em] text-gold-soft/90 uppercase">
              {t("navTagline")}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {LINKS.map((l) => (
            <li
              key={l.key}
              className={"wideOnly" in l && l.wideOnly ? "hidden 2xl:list-item" : undefined}
            >
              <a
                href={l.href}
                className="rounded-md px-2.5 py-2 text-[13px] font-semibold whitespace-nowrap text-cream/85 transition-colors hover:bg-gold/10 hover:text-gold-soft"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher dark />
          <Button
            asChild
            className="btn-shine hidden rounded-full bg-gold px-5 font-bold text-deep shadow-lg shadow-gold/30 transition-transform hover:scale-105 sm:inline-flex"
          >
            <a
              href={waLink(
                "Halo GConsultant, saya ingin konsultasi perizinan bisnis."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              {t("navCta")}
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="hidden rounded-full border-gold/40 bg-white/5 font-bold text-gold-soft hover:bg-gold/15 hover:text-gold-soft lg:inline-flex xl:hidden"
          >
            <Link href="/asesmen">{t("navAsesmen")}</Link>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="border-gold/40 bg-white/5 text-cream hover:bg-gold/15 hover:text-gold-soft xl:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu (custom, hydration-safe) */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-gold/20 bg-deep/98 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out xl:hidden ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {LINKS.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-cream/90 transition-colors hover:bg-gold/10 hover:text-gold-soft"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild className="w-full rounded-full bg-gold font-bold text-deep">
              <a
                href={waLink(`Halo ${BRAND.name}, saya ingin konsultasi perizinan bisnis.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                {t("navCta")}
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

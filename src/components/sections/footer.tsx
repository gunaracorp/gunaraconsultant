"use client";

import Link from "next/link";
import { BrandSeal } from "@/components/brand-seal";
import { BadgeCheck, Landmark, Mail, MapPin, PhoneCall, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { BRAND, waLink } from "@/lib/brand";
import { CATEGORIES, SERVICES } from "@/data/services";
import { PROVINCES } from "@/data/provinces";
import { VERSI } from "@/lib/version";

const POPULAR = [
  "nib-oss-rba",
  "pendirian-pt",
  "pendirian-pt-pma",
  "izin-edar-bpom",
  "sertifikasi-halal",
  "pbg",
  "kitas-kitap",
  "iso-9001",
];

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="section-deep border-t border-gold/20 text-cream" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="GConsultant">
              <BrandSeal
                idPrefix="gs-foot"
                title="Logo GConsultant"
                className="h-12 w-12"
              />
              <span className="font-display text-lg font-bold tracking-[0.16em]">
                G<span className="text-gradient-gold">CONSULTANT</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              {t("footDesc")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/35 bg-gold/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-gold-soft uppercase">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {BRAND.iso}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/35 bg-gold/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-gold-soft uppercase">
                {BRAND.heritage} • Since {BRAND.since}
              </span>
            </div>
            {/* Tautan cepat halaman mandiri */}
            <nav aria-label="Tautan cepat" className="mt-6">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold">
                {[
                  { k: "navAbout" as const, h: "/tentang-kami" },
                  { k: "navMetodologi" as const, h: "/metodologi" },
                  { k: "navAsesmen" as const, h: "/asesmen" },
                  { k: "navBlog" as const, h: "/blog" },
                  { k: "navWhy" as const, h: "/keunggulan" },
                  { k: "navProcess" as const, h: "/proses" },
                  { k: "navProvinces" as const, h: "/provinsi" },
                  { k: "navFounder" as const, h: "/pendiri" },
                  { k: "navFaq" as const, h: "/faq" },
                  { k: "navContact" as const, h: "/kontak" },
                  { k: "footPrivacy" as const, h: "/kebijakan-privasi" },
                  { k: "footTerms" as const, h: "/syarat-ketentuan" },
                ].map((l) => (
                  <li key={l.k}>
                    <Link
                      href={l.h}
                      className="text-cream/60 transition-colors hover:text-gold-soft"
                    >
                      {t(l.k)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Popular services */}
          <nav aria-label="Layanan populer">
            <h3 className="text-xs font-black tracking-[0.25em] text-gold uppercase">
              {t("footServices")}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {POPULAR.map((slug) => {
                const s = SERVICES.find((x) => x.slug === slug);
                if (!s) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/layanan/${slug}`}
                      className="text-sm text-cream/70 transition-colors hover:text-gold-soft"
                    >
                      {s.nameId}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Categories */}
          <nav aria-label="Kategori layanan">
            <h3 className="text-xs font-black tracking-[0.25em] text-gold uppercase">
              {t("footCategories")}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a
                    href="/layanan"
                    className="text-sm text-cream/70 transition-colors hover:text-gold-soft"
                  >
                    {c.nameId}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-black tracking-[0.25em] text-gold uppercase">
              {t("footContact")}
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <strong className="block text-[10px] font-bold tracking-[0.18em] text-gold-soft/90 uppercase">
                    {t("conAddrHq")}
                  </strong>
                  <span className="mt-1 block">{BRAND.address}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Landmark className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <strong className="block text-[10px] font-bold tracking-[0.18em] text-gold-soft/90 uppercase">
                    {t("conAddrJkt")}
                  </strong>
                  <span className="mt-1 block">{BRAND.addressJkt}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneCall className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={waLink("Halo GConsultant!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-soft"
                >
                  {BRAND.waDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="transition-colors hover:text-gold-soft"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Landmark className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {BRAND.bank.name} <strong className="text-gold-soft">{BRAND.bank.account}</strong> a.n.{" "}
                  {BRAND.bank.holder}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Province strip */}
        <div className="mt-12 border-t border-gold/15 pt-6">
          <p className="text-[11px] leading-relaxed text-cream/45">
            {PROVINCES.map((p) => p.name).join(" • ")} — 38 Provinsi Indonesia
          </p>
        </div>

        {/* Legal */}
        <div className="mt-6 flex flex-col items-center gap-2 border-t border-gold/15 pt-6 text-center">
          <p className="text-xs font-semibold text-cream/65">
            {t("footRights")}
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] text-cream/45">
            <Link href="/kebijakan-privasi" className="transition-colors hover:text-gold-soft">
              {t("footPrivacy")}
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/syarat-ketentuan" className="transition-colors hover:text-gold-soft">
              {t("footTerms")}
            </Link>
            <span aria-hidden="true">•</span>
            <span>
              {t("footLegal")} • {BRAND.siteUrl.replace("https://", "")} • {BRAND.groupSite}
            </span>
          </p>
          <p className="text-[11px] font-semibold text-gold-soft/80">
            {t("footDisclaimer")}
          </p>
          {/* S1 — Badge versi */}
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/8 px-3 py-1 text-[10px] font-bold tracking-wider text-gold-soft/90 uppercase">
            <ShieldCheck className="h-3 w-3" aria-hidden="true" />
            {t("footVersionLabel")} {VERSI} • UMEA™ Master Matrix
          </p>
        </div>
      </div>
    </footer>
  );
}

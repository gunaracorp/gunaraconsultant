"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Award,
  Building2,
  ShoppingCart,
  Clock3,
  Globe2,
  HardHat,
  HeartPulse,
  Leaf,
  Mountain,
  Pill,
  Plane,
  Search,
  Users,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { CATEGORIES, SERVICES } from "@/data/services";

const CAT_ICONS: Record<string, typeof Building2> = {
  "badan-hukum": Building2,
  lingkungan: Leaf,
  konstruksi: HardHat,
  perdagangan: ShoppingCart,
  "pangan-obat": Pill,
  kesehatan: HeartPulse,
  pariwisata: Plane,
  "tambang-energi": Mountain,
  pma: Globe2,
  ketenagakerjaan: Users,
  sertifikasi: Award,
};

export function ServicesCatalog() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState<string>("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const okCat = cat === "all" || s.cat === cat;
      if (!okCat) return false;
      if (!query) return true;
      const hay = [
        s.nameId,
        s.nameEn,
        s.shortId,
        s.shortEn,
        ...s.keywords,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [cat, q]);

  return (
    <section id="layanan" className="section-deep relative overflow-hidden py-20 sm:py-28" aria-label="Katalog layanan">
      <div className="pattern-dots absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          kicker={t("svcKicker")}
          title={t("svcTitle")}
          sub={t("svcSub")}
        />

        <Reveal delay={0.15} className="mt-10">
          <div className="relative mx-auto max-w-xl">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-gold"
              aria-hidden="true"
            />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("svcSearch")}
              aria-label={t("svcSearch")}
              className="h-13 rounded-full border-gold/30 bg-white/8 pl-11 text-cream placeholder:text-cream/45 focus-visible:ring-gold"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            <button
              type="button"
              onClick={() => setCat("all")}
              aria-pressed={cat === "all"}
              className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-all ${
                cat === "all"
                  ? "border-gold bg-gold text-deep shadow-lg shadow-gold/25"
                  : "border-cream/20 bg-white/5 text-cream/75 hover:border-gold/50 hover:text-gold-soft"
              }`}
            >
              {t("svcAll")} ({SERVICES.length})
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCat(c.id)}
                aria-pressed={cat === c.id}
                className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-all ${
                  cat === c.id
                    ? "border-gold bg-gold text-deep shadow-lg shadow-gold/25"
                    : "border-cream/20 bg-white/5 text-cream/75 hover:border-gold/50 hover:text-gold-soft"
                }`}
              >
                {lang === "id" ? c.nameId : c.nameEn} (
                {SERVICES.filter((s) => s.cat === c.id).length})
              </button>
            ))}
          </div>
        </Reveal>

        <Stagger key={`${cat}-${q}`} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => {
            const CatIcon = CAT_ICONS[s.cat] ?? Building2;
            const category = CATEGORIES.find((c) => c.id === s.cat);
            return (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/layanan/${s.slug}`}
                  className="card-lux group flex h-full flex-col rounded-3xl p-6"
                  aria-label={`${lang === "id" ? s.nameId : s.nameEn} — ${t("svcView")}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-gold-soft transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <CatIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary uppercase dark:text-gold-soft">
                      {category ? (lang === "id" ? category.nameId : category.nameEn) : ""}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-snug font-bold text-ink">
                    {lang === "id" ? s.nameId : s.nameEn}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {lang === "id" ? s.shortId : s.shortEn}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs">
                    <span className="flex items-center gap-1.5 font-semibold text-muted-foreground">
                      <Clock3 className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      {lang === "id" ? s.durationId : s.durationEn}
                    </span>
                    <span className="flex items-center gap-1.5 font-bold text-primary">
                      {t("svcFrom")} {s.priceFrom}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold tracking-wide text-gold transition-all group-hover:gap-2.5 group-hover:text-primary">
                    {t("svcView")}
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        {filtered.length === 0 ? (
          <Reveal className="mt-10 text-center">
            <p className="text-sm text-cream/70">{t("svcEmpty")}</p>
          </Reveal>
        ) : null}

        <Reveal delay={0.25} className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-bold tracking-[0.18em] text-gold-soft uppercase">
            {filtered.length} {t("svcCount")}
          </p>
          <div className="mt-6">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-gold/50 bg-transparent px-6 font-bold text-gold-soft hover:bg-gold/10"
            >
              <a href="/#kontak">{t("navCta")}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

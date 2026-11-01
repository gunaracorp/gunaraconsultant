"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Clock3, Newspaper } from "lucide-react";
import { Reveal } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import {
  BLOG_CATEGORIES,
  POSTS_NEWEST,
  blogCategory,
  type BlogPost,
} from "@/data/blog";

function formatDate(iso: string, lang: "id" | "en") {
  return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

function Card({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  const { t, lang } = useLang();
  const cat = blogCategory(post.cat);
  const title = lang === "en" ? post.titleEn : post.titleId;
  const excerpt = lang === "en" ? post.excerptEn : post.excerptId;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5"
      aria-label={title}
    >
      <span className="relative block aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#143528] to-[#0F241D]">
        <Image
          src={post.image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full border border-gold/50 bg-deep/85 px-3 py-1 text-[10px] font-bold tracking-wider text-gold-soft uppercase backdrop-blur">
          {lang === "en" ? cat.nameEn : cat.nameId}
        </span>
      </span>
      <span className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-semibold text-cream/55">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {formatDate(post.date, lang)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {post.minutes} {t("blogMinRead")}
          </span>
        </span>
        <span className="mt-3 font-display text-lg leading-snug font-bold text-cream transition-colors group-hover:text-gold-soft">
          {title}
        </span>
        <span className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-cream/65">
          {excerpt}
        </span>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold-soft">
          {t("blogReadMore")}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </span>
    </Link>
  );
}

export function BlogIndex() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState<string>("all");

  const featured = POSTS_NEWEST[0];
  const rest = useMemo(
    () => (cat === "all" ? POSTS_NEWEST.slice(1) : POSTS_NEWEST.filter((p) => p.cat === cat)),
    [cat]
  );

  return (
    <section className="section-deep relative overflow-hidden py-16 sm:py-20" aria-label="Indeks artikel blog">
      <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter kategori */}
        <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter kategori artikel">
          <button
            type="button"
            onClick={() => setCat("all")}
            aria-pressed={cat === "all"}
            className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-all ${
              cat === "all"
                ? "border-gold bg-gold text-deep shadow-lg shadow-gold/25"
                : "border-gold/30 bg-white/5 text-cream/75 hover:border-gold/60 hover:text-gold-soft"
            }`}
          >
            {t("blogAll")}
          </button>
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              aria-pressed={cat === c.id}
              className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-all ${
                cat === c.id
                  ? "border-gold bg-gold text-deep shadow-lg shadow-gold/25"
                  : "border-gold/30 bg-white/5 text-cream/75 hover:border-gold/60 hover:text-gold-soft"
              }`}
            >
              {lang === "en" ? c.nameEn : c.nameId}
            </button>
          ))}
        </div>

        {/* Featured (hanya saat filter = all) */}
        {cat === "all" && (
          <Reveal className="mt-10">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-gold/30 bg-white/[0.04] transition-all duration-300 hover:border-gold/60 hover:shadow-2xl hover:shadow-gold/10 lg:grid-cols-2"
              aria-label={lang === "en" ? featured.titleEn : featured.titleId}
            >
              <span className="relative block aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#143528] to-[#0F241D] lg:aspect-auto lg:min-h-[340px]">
                <Image
                  src={featured.image}
                  alt={lang === "en" ? featured.titleEn : featured.titleId}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <span className="flex flex-col justify-center p-7 sm:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] text-gold-soft uppercase">
                  <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("blogFeatured")}
                </span>
                <span className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-semibold text-cream/55">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    {formatDate(featured.date, lang)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    {featured.minutes} {t("blogMinRead")}
                  </span>
                </span>
                <span className="mt-3 font-display text-xl leading-snug font-bold text-cream transition-colors group-hover:text-gold-soft sm:text-2xl lg:text-3xl">
                  {lang === "en" ? featured.titleEn : featured.titleId}
                </span>
                <span className="mt-3 line-clamp-3 text-sm leading-relaxed text-cream/70 sm:text-base">
                  {lang === "en" ? featured.excerptEn : featured.excerptId}
                </span>
                <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-deep shadow-lg shadow-gold/30 transition-transform group-hover:scale-105">
                  {t("blogReadMore")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </Reveal>
        )}

        {/* Grid artikel */}
        {rest.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={0.05 * (i % 3)}>
                <Card post={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-sm text-cream/60">{t("blogEmpty")}</p>
        )}
      </div>
    </section>
  );
}

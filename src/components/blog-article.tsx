"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CalendarClock,
  Check,
  ChevronRight,
  Clock3,
  Link2,
  MessageCircle,
  Quote,
  Tag,
  UserRound,
} from "lucide-react";
import { Reveal } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { waLink } from "@/lib/brand";
import {
  POSTS_NEWEST,
  blogCategory,
  getPost,
  type BlogBlock,
} from "@/data/blog";

function formatDate(iso: string, lang: "id" | "en") {
  return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h2")
    return (
      <h2 className="mt-12 font-display text-xl leading-snug font-bold text-cream sm:text-2xl">
        {block.text}
      </h2>
    );
  if (block.type === "list")
    return (
      <ul className="mt-5 space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-cream/75 sm:text-base">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    );
  if (block.type === "quote")
    return (
      <figure className="mt-9 rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/[0.1] to-transparent p-7">
        <Quote className="h-7 w-7 text-gold" aria-hidden="true" />
        <blockquote className="mt-4 font-display text-lg leading-snug font-semibold text-gold-soft italic sm:text-xl">
          “{block.text}”
        </blockquote>
      </figure>
    );
  return (
    <p className="mt-5 text-[15px] leading-relaxed text-cream/80 sm:text-base">{block.text}</p>
  );
}

export function BlogArticle({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);
  const post = getPost(slug);
  if (!post) return null;

  const cat = blogCategory(post.cat);
  const title = lang === "en" ? post.titleEn : post.titleId;
  const blocks = lang === "en" ? post.bodyEn : post.bodyId;
  const related = POSTS_NEWEST.filter(
    (p) => p.slug !== post.slug && p.cat === post.cat
  )
    .concat(POSTS_NEWEST.filter((p) => p.slug !== post.slug && p.cat !== post.cat))
    .slice(0, 3);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard tidak tersedia */
    }
  };

  return (
    <article className="section-deep relative">
      {/* Header artikel */}
      <header className="relative overflow-hidden">
        <div className="pattern-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 pt-28 pb-12 sm:px-6 sm:pt-32 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-cream/55">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-soft">
                  {t("navHome")}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-gold/50" />
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-gold-soft">
                  {t("navBlog")}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-gold/50" />
              </li>
              <li aria-current="page" className="line-clamp-1 text-gold-soft">
                {title}
              </li>
            </ol>
          </nav>

          <Reveal className="mt-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-gold-soft uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              {lang === "en" ? cat.nameEn : cat.nameId}
            </p>
            <h1 className="mt-5 font-display text-2xl leading-tight font-bold text-cream sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-cream/60 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <UserRound className="h-4 w-4 text-gold" aria-hidden="true" />
                {t("artBy")} <strong className="text-cream/90">Gugun Gunara</strong>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-gold" aria-hidden="true" />
                {formatDate(post.date, lang)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4 text-gold" aria-hidden="true" />
                {post.minutes} {t("blogMinRead")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-gold/25 shadow-2xl shadow-black/30">
              <Image
                src={post.image}
                alt={title}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* Isi artikel */}
      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mt-2">
            {blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
        </Reveal>

        {/* Tag */}
        <div className="mt-12 flex flex-wrap items-center gap-2">
          <Tag className="h-4 w-4 text-gold" aria-hidden="true" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gold/30 bg-white/5 px-3 py-1 text-xs font-semibold text-cream/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Tanggal diperbarui + Bagikan */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gold/15 pt-6">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-cream/55">
            <CalendarClock className="h-4 w-4 text-gold" aria-hidden="true" />
            {t("artUpdated")}: {formatDate(post.dateModified, lang)}
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold tracking-wider text-gold-soft uppercase">
              {t("artShare")}:
            </span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${title} — ${typeof window !== "undefined" ? window.location.href : ""}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("artShare")} WhatsApp`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-gold transition-all hover:border-gold/60 hover:bg-gold/15"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={copyLink}
              aria-label={`${t("artShare")} — ${t("blogReadMore")}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-gold transition-all hover:border-gold/60 hover:bg-gold/15"
            >
              {copied ? (
                <Check className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Link2 className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Kotak penulis */}
        <Reveal>
          <aside className="mt-10 flex flex-col gap-5 rounded-2xl border border-gold/25 bg-white/[0.04] p-6 sm:flex-row sm:items-start sm:p-8">
            <span className="relative mx-auto h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-gold/50 sm:mx-0">
              <Image
                src="/images/founder.jpg"
                alt={t("fouPhotoAlt")}
                fill
                sizes="80px"
                className="object-cover"
              />
            </span>
            <div className="text-center sm:text-left">
              <p className="text-[10px] font-black tracking-[0.22em] text-gold uppercase">
                {t("artBy")} {BRAND_AUTHOR}
              </p>
              <p className="mt-1 font-display text-lg font-bold text-cream">{BRAND_AUTHOR}</p>
              <p className="text-xs font-semibold text-gold-soft/90">{t("fouRole")}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{t("artAuthorBio")}</p>
              <Link
                href="/pendiri"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-gold-soft hover:text-gold"
              >
                {t("aboutFounderLink")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </Reveal>

        {/* CTA khusus artikel */}
        <Reveal>
          <div className="mt-10 rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/[0.12] to-transparent p-7 text-center sm:p-10">
            <h2 className="font-display text-xl leading-snug font-bold text-cream sm:text-2xl">
              {t("artCtaTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
              {t("artCtaSub")}
            </p>
            <a
              href={waLink(
                `Halo GConsultant, saya membaca artikel "${title}" dan ingin konsultasi gratis.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-6 inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-deep shadow-xl shadow-gold/30 transition-transform hover:scale-105 sm:text-base"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {t("navCta")}
            </a>
          </div>
        </Reveal>

        {/* Artikel terkait */}
        <section className="mt-14" aria-labelledby="related-heading">
          <h2
            id="related-heading"
            className="font-display text-xl font-bold text-cream sm:text-2xl"
          >
            {t("blogRelated")}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-gold/20 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
              >
                <span className="relative block aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#143528] to-[#0F241D]">
                  <Image
                    src={p.image}
                    alt={lang === "en" ? p.titleEn : p.titleId}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </span>
                <span className="flex flex-1 flex-col p-4">
                  <span className="text-[10px] font-bold tracking-wider text-gold-soft uppercase">
                    {lang === "en"
                      ? blogCategory(p.cat).nameEn
                      : blogCategory(p.cat).nameId}
                  </span>
                  <span className="mt-1.5 line-clamp-3 flex-1 text-sm leading-snug font-semibold text-cream transition-colors group-hover:text-gold-soft">
                    {lang === "en" ? p.titleEn : p.titleId}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-gold-soft">
                    {t("blogReadMore")}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-6 py-3 text-sm font-bold text-gold-soft transition-all hover:border-gold/70 hover:bg-gold/10"
            >
              {t("blogBack")}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}

const BRAND_AUTHOR = "Gugun Gunara";

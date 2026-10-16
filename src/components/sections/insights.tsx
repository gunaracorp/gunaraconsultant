import { ChevronDown, Newspaper } from "lucide-react";
import { ARTICLES, type Article } from "@/data/articles";
import {
  InsightsHeading,
  InsightsEnNote,
  ArticleMeta,
  ArticleToggleLabels,
  ArticleCta,
  EditionHeader,
  InsightsFooter,
} from "@/components/sections/insights-ui";

function NewspaperIcon() {
  return <Newspaper className="h-5 w-5" aria-hidden="true" />;
}

/**
 * Section "Perpustakaan Perizinan — Edisi Bulanan" (Task 7-a).
 * 100% server component — seluruh konten artikel tersedia sebagai HTML
 * statis (crawlable) dengan <details> native, TANPA filter client-side.
 * Artikel dikelompokkan per edisi bulanan (editionKey), terbaru dulu.
 */

type EditionGroup = {
  key: string;
  label: string;
  articles: Article[];
};

/** Kelompokkan artikel berurutan berdasarkan editionKey (array sudah terbaru dulu). */
function groupByEdition(articles: Article[]): EditionGroup[] {
  const groups: EditionGroup[] = [];
  for (const article of articles) {
    const last = groups[groups.length - 1];
    if (last && last.key === article.editionKey) {
      last.articles.push(article);
    } else {
      groups.push({
        key: article.editionKey,
        label: article.edition,
        articles: [article],
      });
    }
  }
  return groups;
}

const EDITION_GROUPS = groupByEdition(ARTICLES);
/** Hanya artikel pertama dari edisi TERBARU yang terbuka secara default. */
const FIRST_OPEN_SLUG = EDITION_GROUPS[0]?.articles[0]?.slug ?? "";

function ArticleCard({ article, isOpen }: { article: Article; isOpen: boolean }) {
  return (
    <details
      open={isOpen}
      className="group scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-colors duration-300 open:border-primary/40 open:shadow-md open:shadow-primary/5"
    >
      <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-5 [&::-webkit-details-marker]:hidden hover:bg-secondary/40 sm:px-6">
        <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-open:bg-primary group-open:text-primary-foreground">
          <NewspaperIcon />
        </span>
        <span className="min-w-0 flex-1">
          <ArticleMeta article={article} />
          <h3 className="text-base font-extrabold leading-snug text-foreground sm:text-lg">
            {article.title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <ArticleToggleLabels />
        </span>
      </summary>

      <div className="border-t border-border/70 px-5 pb-6 pt-4 sm:px-6">
        <div className="prose-article max-w-none">
          {article.sections.map((sec, si) => (
            <div key={si} className={si > 0 ? "mt-6" : ""}>
              <h4 className="flex items-baseline gap-2 text-[15px] font-extrabold text-foreground">
                <span className="font-mono text-xs font-bold text-primary/70">
                  {String(si + 1).padStart(2, "0")}
                </span>
                {sec.h}
              </h4>
              {sec.p.map((para, pi) => (
                <p
                  key={pi}
                  className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground"
                >
                  {para}
                </p>
              ))}
              {sec.list && (
                <ul className="mt-3 space-y-2">
                  {sec.list.map((item, li) => (
                    <li
                      key={li}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <ArticleCta />
        </div>
      </div>
    </details>
  );
}

export function Insights() {
  return (
    <section
      id="artikel"
      aria-label="Artikel dan panduan perizinan usaha"
      className="relative overflow-hidden bg-secondary/40 py-24 sm:py-28"
    >
      <div
        className="absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <InsightsHeading />
        <InsightsEnNote />

        <div className="mt-10 flex flex-col gap-12">
          {EDITION_GROUPS.map((group) => (
            <div key={group.key} aria-label={`Edisi ${group.key}`}>
              <EditionHeader
                label={group.label}
                editionKey={group.key}
                count={group.articles.length}
              />
              <div
                className="mt-5 h-px w-full bg-gradient-to-r from-border via-border/70 to-transparent"
                aria-hidden="true"
              />
              <div className="mt-5 grid gap-4">
                {group.articles.map((a) => (
                  <ArticleCard
                    key={a.slug}
                    article={a}
                    isOpen={a.slug === FIRST_OPEN_SLUG}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <InsightsFooter count={ARTICLES.length} />
      </div>
    </section>
  );
}

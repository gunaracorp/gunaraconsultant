import { CheckCircle2, Clock3, Sparkles } from "lucide-react";
import { SectionHeading, Reveal, Stagger, StaggerItem } from "@/components/ui-custom/animated";
import {
  PHASES,
  CATEGORIES,
  phaseCounts,
  TOTAL_TARGET,
  type PhaseMeta,
} from "@/data/services";

/**
 * Section "Fase Implementasi" — peta jalan peluncuran katalog 600 layanan.
 * Server component; animasi via komponen client Reveal/Stagger.
 */

const STATUS_META: Record<
  PhaseMeta["status"],
  { label: string; cls: string; icon: typeof CheckCircle2 }
> = {
  live: {
    label: "Aktif",
    cls: "border-emerald-600/30 bg-emerald-600/10 text-emerald-700 dark:text-emerald-400",
    icon: CheckCircle2,
  },
  running: {
    label: "Sedang Berjalan",
    cls: "border-gold/45 bg-gold/10 text-gold-foreground dark:text-gold",
    icon: Clock3,
  },
  upcoming: {
    label: "Segera",
    cls: "border-border bg-muted text-muted-foreground",
    icon: Sparkles,
  },
};

export function PhasesSection() {
  const counts = phaseCounts();

  return (
    <section
      id="fase"
      className="relative overflow-hidden py-24 sm:py-28"
      aria-label="Fase implementasi katalog layanan"
    >
      <div
        className="absolute left-[-10%] bottom-20 h-96 w-96 rounded-full bg-gold/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Peta Jalan Implementasi"
          title="Satu Katalog, Empat Fase,"
          highlight="Nol Kebingungan"
          description="Kami membangun katalog 600 layanan — terlengkap di Asia — secara terukur: setiap fase diuji, setiap layanan diaudit mutu ISO 9001:2015 sebelum diluncurkan."
        />

        {/* Stepper penghubung (desktop) */}
        <div className="relative mt-16 hidden lg:block" aria-hidden="true">
          <svg className="absolute left-0 right-0 top-[26px] h-6 w-full">
            <line
              x1="10%"
              y1="12"
              x2="90%"
              y2="12"
              stroke="url(#phases-line)"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              className="animate-dash"
            />
            <defs>
              <linearGradient id="phases-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#108a5f" />
                <stop offset="50%" stopColor="#f5c94c" />
                <stop offset="100%" stopColor="#108a5f" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[-22px] xl:grid-cols-4">
          {PHASES.map((phase) => {
            const count = counts[phase.id];
            const pct = Math.min(100, Math.round((count / TOTAL_TARGET) * 100));
            const status = STATUS_META[phase.status];
            const StatusIcon = status.icon;

            return (
              <StaggerItem key={phase.id} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/15">
                  {/* Nomor fase raksasa dekoratif */}
                  <span
                    className="pointer-events-none absolute -right-3 -top-6 select-none text-[7rem] font-extrabold leading-none text-primary/[0.06] transition-colors duration-500 group-hover:text-gold/[0.09]"
                    aria-hidden="true"
                  >
                    {phase.id}
                  </span>

                  <div className="relative flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {phase.window}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${status.cls}`}
                    >
                      <StatusIcon className="h-3 w-3" aria-hidden="true" />
                      {status.label}
                    </span>
                  </div>

                  <h3 className="relative mt-3 text-lg font-extrabold leading-snug text-foreground">
                    {phase.name}
                  </h3>
                  <p className="relative mt-1.5 text-sm font-semibold italic text-gold-foreground dark:text-gold">
                    “{phase.tagline}”
                  </p>
                  <p className="relative mt-3 text-[13px] leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>

                  {/* Kategori dalam fase */}
                  <ul
                    className="relative mt-4 flex flex-wrap gap-1.5"
                    aria-label={`Kategori pada ${phase.name}`}
                  >
                    {phase.categories.map((slug) => {
                      const cat = CATEGORIES.find((c) => c.slug === slug);
                      if (!cat) return null;
                      return (
                        <li
                          key={slug}
                          className="rounded-full border border-border bg-secondary/70 px-2.5 py-1 text-[10px] font-bold text-foreground/70"
                        >
                          {cat.short}
                        </li>
                      );
                    })}
                  </ul>

                  {/* Progres katalog */}
                  <div className="relative mt-auto pt-6">
                    <div className="flex items-baseline justify-between">
                      <p className="text-sm font-extrabold text-foreground">
                        {count} layanan
                      </p>
                      <p className="text-[11px] font-bold text-muted-foreground">
                        {pct}% dari {TOTAL_TARGET}
                      </p>
                    </div>
                    <div
                      className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"
                      role="progressbar"
                      aria-valuenow={count}
                      aria-valuemin={0}
                      aria-valuemax={TOTAL_TARGET}
                      aria-label={`Progres katalog ${phase.name}`}
                    >
                      <div
                        className={`h-full rounded-full ${
                          phase.status === "live"
                            ? "bg-gradient-to-r from-primary to-emerald-400"
                            : phase.status === "running"
                              ? "bg-gradient-to-r from-gold to-amber-300"
                              : "bg-gradient-to-r from-muted-foreground/50 to-muted-foreground/30"
                        }`}
                        style={{ width: `${Math.max(pct, 3)}%` }}
                      />
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Catatan kaki fase */}
        <Reveal delay={0.15} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Total target katalog{" "}
            <span className="font-extrabold text-foreground">{TOTAL_TARGET} layanan</span>{" "}
            dalam <span className="font-extrabold text-foreground">26 kategori</span> —
            diluncurkan bertahap 2024–2026 dengan audit mutu ISO 9001:2015 di setiap
            fase.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

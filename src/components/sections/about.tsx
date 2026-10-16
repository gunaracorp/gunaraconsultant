"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, HeartHandshake, ArrowDown } from "lucide-react";
import { SectionHeading, Reveal, Stagger, StaggerItem } from "@/components/ui-custom/animated";
import { AnimatedCounter } from "@/components/ui-custom/counter";

const VALUES = [
  {
    icon: Target,
    title: "Misi",
    text: "Menyederhanakan legalitas bisnis Indonesia dengan layanan cepat, transparan, dan bergaransi — agar pelaku usaha fokus tumbuh.",
  },
  {
    icon: Eye,
    title: "Visi",
    text: "Menjadi pusat perizinan terlengkap di Asia — bahkan dunia — dengan standar mutu internasional ISO 9001:2015 yang paling terpercaya.",
  },
  {
    icon: HeartHandshake,
    title: "Nilai Kami",
    text: "Integritas tanpa kompromi, kecepatan tanpa mengorbankan ketelitian, dan empati pada setiap cerita bisnis klien.",
  },
] as const;

const TRUST_POINTS = [
  "Berakar sejak 2009 — 15+ tahun pengalaman konsultansi kelas dunia",
  "Resmi berbadan hukum 2024: PT TOP KONSULTAN INTERNASIONAL (AHU Kemenkumham RI)",
  "Katalog 600+ layanan — terlengkap di Asia, mencakup perizinan lintas negara",
  "Bagian dari Gunara Consultant Group bersama pusatperizinan.com",
  "Sistem manajemen mutu ISO 9001:2015 teraudit",
  "Tim bersertifikasi: hukum, perpajakan & lingkungan",
] as const;

export function About() {
  return (
    <section id="tentang" className="relative overflow-hidden py-24 sm:py-28" aria-label="Tentang Gunara Consultant">
      <div
        className="absolute right-[-10%] top-24 h-96 w-96 rounded-full bg-secondary blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Gambar + kartu pengalaman */}
          <div className="relative">
            <Reveal y={48} className="relative z-10">
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-primary/10">
                <Image
                  src="/images/about-team.png"
                  alt="Tim konsultan Gunara Consultant sedang meninjau dokumen perizinan di kantor Jakarta"
                  width={1344}
                  height={768}
                  className="h-auto w-full object-cover transition-transform duration-[2.5s] hover:scale-105"
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-transparent" />
              </div>
            </Reveal>

            {/* Kartu pengalaman melayang */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-8 -right-2 z-20 sm:-right-6"
            >
              <div className="glass rounded-3xl border border-gold/30 p-5 shadow-xl animate-floaty">
                <p className="text-4xl font-extrabold text-gradient-gold">
                  <AnimatedCounter value={16} suffix="+" />
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Tahun Pengalaman
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-2 top-6 z-20 sm:-left-6"
            >
              <div className="glass-gold rounded-2xl border border-gold/40 px-5 py-3 shadow-xl animate-floaty-slow">
                <p className="text-sm font-extrabold text-gold-foreground">
                  Grup PusatPerizinan.com
                </p>
              </div>
            </motion.div>
          </div>

          {/* Teks */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Tentang Kami"
              title="Konsultan Perizinan dengan Standar"
              highlight="Kelas Dunia"
              description="Gunara Consultant berakar pada pengalaman konsultansi sejak 2009 dan resmi berbadan hukum pada 2024 sebagai PT TOP KONSULTAN INTERNASIONAL — rumah layanan legalitas bersama pusatperizinan.com. Lebih dari 15 tahun, kami menjadi jembatan antara ambisi bisnis Anda dan kepastian hukum: dari warung kopi hingga korporasi lintas negara."
            />

            {/* Paragraf narasi legasi */}
            <Reveal delay={0.15} className="mt-6">
              <p className="rounded-2xl border-l-4 border-gold/60 bg-secondary/60 p-5 text-[15px] leading-relaxed text-foreground/85">
                Cerita kami dimulai di ruang kelas konsultansi dunia: sejak{" "}
                <strong className="text-foreground">2009</strong>, para pendiri kami
                menekuni ilmu konsultansi di bawah naungan{" "}
                <strong className="text-foreground">Mic Kinsey</strong> — menyerap
                disiplin mutu dan budaya solusi global. Puncaknya tercapai pada{" "}
                <strong className="text-foreground">11 Juli 2024</strong>, ketika
                Gunara Consultant resmi berbadan hukum sebagai{" "}
                <strong className="text-foreground">PT TOP KONSULTAN INTERNASIONAL</strong>
                {" "}— dan kini mengelola grup{" "}
                <strong className="text-foreground">pusatperizinan.com</strong> untuk
                seluruh Indonesia.
              </p>
              <a
                href="#legasi"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-4 py-2 text-sm font-bold text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Baca perjalanan kami di bagian Warisan dan Legalitas"
              >
                Baca Perjalanan Kami
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>

            <Stagger className="mt-8 space-y-3">
              {TRUST_POINTS.map((point) => (
                <StaggerItem key={point}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="text-[15px] font-medium text-foreground/80">{point}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={0.15 + i * 0.12}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <v.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3.5 text-base font-extrabold">{v.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {v.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

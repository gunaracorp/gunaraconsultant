"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "@/components/ui-custom/logo";
import { Reveal } from "@/components/ui-custom/animated";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/data";

const SOCIALS = [
  { icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn Gunara Consultant" },
  { icon: Instagram, href: SITE.social.instagram, label: "Instagram Gunara Consultant" },
  { icon: Facebook, href: SITE.social.facebook, label: "Facebook Gunara Consultant" },
  { icon: Youtube, href: SITE.social.youtube, label: "YouTube Gunara Consultant" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-deep text-white/70" role="contentinfo">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left">
          <Reveal>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">
              Siap melegalkan bisnis Anda{" "}
              <span className="text-gradient-gold">hari ini?</span>
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Konsultasi gratis, respons 15 menit, garansi 100%.
            </p>
          </Reveal>
          <motion.a
            href="#kontak"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-13 items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-extrabold text-gold-foreground shadow-xl shadow-gold/25 transition-shadow hover:shadow-gold/40"
          >
            Konsultasi Gratis
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        </div>
      </div>

      {/* Konten footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Konsultan perizinan &amp; legalitas usaha bersertifikasi ISO 9001:2015.
            Bagian dari Gunara Group bersama{" "}
            <a
              href="https://www.pusatperizinan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-white"
            >
              PusatPerizinan.com
            </a>
            . Berdiri sejak {SITE.founded}, dipercaya 12.500+ klien di 34 provinsi
            Indonesia dan 8 negara — pusat perizinan terlengkap di Asia.
          </p>
          <div className="mt-5 flex gap-2.5">
            {SOCIALS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.08 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-gold/50 hover:text-gold"
              >
                <s.icon className="h-4.5 w-4.5" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </div>

        <nav aria-label="Navigasi footer">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-gold"
                >
                  <span className="h-px w-3 bg-gold/50" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#indeks-katalog"
                className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-gold"
              >
                <span className="h-px w-3 bg-gold/50" aria-hidden="true" />
                Indeks Katalog 600 Layanan
              </a>
            </li>
            <li>
              <a
                href="#artikel"
                className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-gold"
              >
                <span className="h-px w-3 bg-gold/50" aria-hidden="true" />
                Artikel & Panduan Perizinan
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Layanan populer">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            Layanan Populer
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.title}>
                <a
                  href="#layanan"
                  className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-gold"
                >
                  <span className="h-px w-3 bg-gold/50" aria-hidden="true" />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            Kontak &amp; Sertifikasi
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {SITE.address.street}, {SITE.address.city},{" "}
                {SITE.address.region} {SITE.address.postalCode}
              </span>
            </li>
            <li>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {SITE.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 rounded-2xl border border-gold/25 bg-gold/10 p-4">
            <p className="flex items-center gap-2 text-xs font-extrabold text-gold">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              TERSERTIFIKASI ISO 9001:2015
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-white/55">
              Sistem Manajemen Mutu — diaudit tahunan oleh badan sertifikasi
              berakreditasi IAF.
            </p>
          </div>
        </div>
      </div>

      {/* Bawah */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-white/45 sm:px-6 md:flex-row">
          <p>
            © {year} {SITE.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span>Grup Gunara: {SITE.groupBrands.join(" • ")}</span>
            <span className="hidden md:inline text-white/25">|</span>
            <span>Dibuat dengan standar kelas dunia di Indonesia</span>
          </div>
        </div>
        {/* Baris verifikasi legalitas */}
        <div className="border-t border-white/5">
          <p className="mx-auto max-w-7xl px-4 py-4 text-center text-[11px] leading-relaxed text-white/40 sm:px-6">
            <span className="font-bold text-white/60">{SITE.legalName}</span>
            {" — "}Terverifikasi Kemenkumham RI No.{" "}
            <span className="font-mono font-bold text-gold/80">{SITE.ahucert}</span>
            {" • "}Sistem Manajemen Mutu ISO 9001:2015
            {" • "}Bagian dari Gunara Consultant Group (
            <a
              href="https://www.pusatperizinan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/30 underline-offset-2 transition-colors hover:text-gold"
            >
              pusatperizinan.com
            </a>
            )
          </p>
        </div>
      </div>
    </footer>
  );
}

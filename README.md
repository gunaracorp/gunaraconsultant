<div align="center">

<img src="public/logo-horizontal.svg" alt="GConsultant" width="420"/>

# GConsultant — Pusat Perizinan Terlengkap di Asia

**Official website production** • Next.js 16 • TypeScript • 66 URL full-SEO

`v2.0.0` — **GOD MODE TIER MAX — UMEA Edition**

[![Version](https://img.shields.io/badge/version-2.0.0-gold)](CHANGELOG.md)
[![Next.js](https://img.shields.io/badge/Next.js-16-000)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)](https://www.typescriptlang.org)
[![ISO 9001](https://img.shields.io/badge/ISO-9001:2015-0a4f38)](https://gunaraconsultant.com)
[![License](https://img.shields.io/badge/license-proprietary-d4af37)](#-hak-kekayaan-intelektual)

[Bahasa Indonesia](#-ringkasan) | [English](#-overview)

</div>

---

## 🇮🇩 Ringkasan

Website resmi **Gunara Consultant** — pusat perizinan usaha terlengkap di Asia, berakar dari Mic Kinsey sejak 2009, tersertifikasi ISO 9001:2015, melayani 38 provinsi Indonesia dengan 46 layanan dinamis.

### Arsitektur UMEA™ (flagship v2.0)

Situs ini menjual **metodologi**, bukan sekadar jasa:

| Modul | Route | Isi |
|---|---|---|
| **Metodologi UMEA™** | `/metodologi` | 3 Hukum Besar, 6 tingkat organisasi (UMEA-03→21), 21 fungsi kritis, 5 tingkat dokumen (D-10→D-165), UMI bands |
| **Asesmen UMI™** | `/asesmen` | Mesin asesmen 12 pertanyaan → skor 0–100 → tingkat UMEA → paket dokumen → CTA WhatsApp |
| 46 Layanan | `/layanan/[slug]` | Halaman dinamis full-SEO + 4 JSON-LD per halaman |
| Blog bilingual | `/blog`, `/blog/[slug]` | 6 artikel edukasi ID/EN |
| Legal (UU PDP) | `/kebijakan-privasi`, `/syarat-ketentuan` | Selaras UU No. 27/2022 |

### Struktur

```
src/
├── app/                 # 13 route statis + 46 route dinamis + api
│   ├── metodologi/      # Flagship: Hukum Minimum Usaha™
│   ├── asesmen/         # UMEA Maturity Index™ engine
│   ├── api/status/      # S12 — health & version endpoint
│   └── ...
├── components/
│   ├── sections/        # hero, umea-methodology, umea-assessment, ...
│   └── ui/              # shadcn/ui
├── data/                # Z2 — konten terpisah dari tampilan
│   ├── umea.ts          # Single source of truth metodologi
│   ├── services-a/b.ts  # 46 layanan (ID+EN)
│   └── legal.ts         # UU PDP & S&K bilingual
└── lib/
    ├── i18n.tsx         # 325+ key simetris ID/EN
    ├── seo.ts           # Mesin metadata satu-panggilan
    └── version.ts       # S1 — sumber versi tunggal
```

### Perintah

```bash
bun run dev        # development (port 3000)
bun run lint       # ESLint
bun run db:push    # sinkron schema Prisma
```

### PETA MODUL ABADI (FASE 3)

| Modul | Fungsi | Ketergantungan | Nilai Jangka Panjang | Status |
|---|---|---|---|---|
| Golden Seal identity | Logo inline SVG + favicon + PWA | — | Tinggi (brand asset) | 🟢 Tegak |
| i18n engine | 325+ key simetris, localStorage persist | React | Tinggi | 🟢 Tegak |
| Services catalog | 46 layanan × 11 kategori full-SEO | data/services | Tinggi | 🟢 Tegak |
| UMEA™ methodology | 3 hukum + 6 level + 21 fungsi + 5 tier | data/umea | Sangat tinggi (IP inti) | 🟢 Tegak |
| UMI™ assessment | Scoring engine + WA funnel | data/umea | Sangat tinggi (lead gen) | 🟢 Tegak |
| Legal compliance | UU PDP privacy + S&K | data/legal | Tinggi (wajib hukum) | 🟢 Tegak |
| Version system | SemVer + CHANGELOG + /api/status | lib/version | Sedang (ops) | 🟢 Tegak |
| Analytics wiring | GA4 + Clarity (env-gated) | env publik | Sedang (growth) | 🟢 Tegak |
| Blog engine | 6 artikel bilingual + JSON-LD | data/blog | Sedang | 🟢 Tegak |
| Katalog PDF | Download-gate brosur layanan | — | Sedang | 🟡 Rancangan |

---

## 🇬🇧 Overview

Official website of **Gunara Consultant** — Asia's most complete business licensing center, rooted in Mic Kinsey since 2009, ISO 9001:2015 certified, serving all 38 Indonesian provinces with 46 dynamic service pages.

The v2.0 release ships the **UMEA™ (Universal Minimum Enterprise Architecture)** flagship: a proprietary methodology that answers *how many critical functions must stay alive so an organization never collapses* — across 6 organization levels (UMEA-03 → UMEA-21), 21 critical functions, 5 documentation tiers (D-10 → D-165), and a live 12-question **UMEA Maturity Index™** assessment engine that converts visitors into WhatsApp leads.

Key engineering standards (Abadi-Standard 12): SemVer versioning with `/api/status` endpoint, bilingual class-world-class README, security headers + in-memory rate limiting, GA4/Clarity wiring behind environment flags, WCAG-compliant skip-links and focus states, custom 404, privacy policy aligned with Indonesia's PDP Law No. 27/2022, and an append-only worklog.

## 🔒 Hak Kekayaan Intelektual / Intellectual Property

UMEA™, Hukum Minimum Usaha™, UMEA Master Matrix™, UMEA Maturity Index™, D-10/D-21/D-39/D-75/D-165, dan The Golden Seal of Gunara adalah milik eksklusif Gunara Consultant — dilindungi sebagai merek, hak cipta, dan rahasia dagang. Pembobol weighting/threshold mesin asesmen tanpa izin tertulis akan ditindak hukum.

© 2025–2026 Gunara Consultant. Semua hak dilindungi.

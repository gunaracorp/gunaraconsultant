# Changelog — Gunara Consultant

Semua perubahan penting dicatat di sini (format: Keep a Changelog, SemVer).
Satu tugas = satu versi. Append-only (G1).

## [2.0.0] — 2026-10-23 — GOD MODE TIER MAX — UMEA Edition

### Added (Baru)
- **Flagship UMEA™ Master Matrix**: halaman `/metodologi` — 3 Hukum Besar, 6 tingkat organisasi (UMEA-03 s.d. UMEA-21), 21 fungsi kritis (function-first), 5 tingkat dokumen (D-10 s.d. D-165), 8 band UMEA Maturity Index™ — semua bilingual ID/EN dengan padanan "bahasa profesional" dan "bahasa sehari-hari".
- **Mesin asesmen interaktif** `/asesmen`: wizard 12 pertanyaan berbobot → skor UMI 0–100 → band kematangan → tingkat UMEA → 3 titik terlemah + kekuatan → paket dokumen rekomendasi → CTA WhatsApp dengan pesan hasil terisi otomatis (event konversi `begin_checkout`, `view_item`, `generate_lead`).
- `src/data/umea.ts` — single source of truth metodologi (Z2: konten terpisah tampilan) + mesin skor + validator integritas data.
- **Halaman legal (S11)**: `/kebijakan-privasi` (UU PDP No. 27/2022, GDPR-ready) + `/syarat-ketentuan` (IP, kanal pembayaran resmi BCA, hukum Indonesia) — bilingual, JSON-LD WebPage + breadcrumb.
- **Halaman 404 kustom** `not-found.tsx` — Golden Seal + CTA beranda/layanan, noindex.
- **S1 Sistem versi**: `src/lib/version.ts` (sumber tunggal), badge versi di footer, `softwareVersion` di JSON-LD Organization, sinkron package.json + CHANGELOG.
- **S3 README kelas dunia** — bilingual ID/EN, badge, struktur internasional, PETA MODUL ABADI.
- **S12 Resiliensi**: endpoint `/api/status` (versi + kesehatan modul), `docs/RUNBOOK.md`.
- **S7 Analitik**: wiring GA4 + Microsoft Clarity via env (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID`) — no-op tanpa ID, menghormati Do-Not-Track.
- **S10 Aksesibilitas**: skip-link "Lompat ke konten utama" global + `main#main-content` di semua halaman baru.
- **PIAGAM 2125** di `/tentang-kami` — narasi brand abadi (FASE 3).
- Sitemap 62 → 66 URL (metodologi, asesmen, kebijakan-privasi, syarat-ketentuan) + 75 kunci i18n baru simetris.

### Security (Keamanan)
- **S6**: security headers global (X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, HSTS) di next.config.ts; rate-limit memori 30 req/menit pada `/api` (429 + Retry-After); endpoint status no-store.

### Changed (Diubah)
- Navbar: + Metodologi (desktop), Asesmen (tombol outline khusus rentang lg–xl), 38 Provinsi & Pendiri disembunyikan di xl untuk mencegah overflow.
- Footer: tautan legal privasi & S&K + badge versi.
- `/api` stub "Hello world" → endpoint ter-rate-limit informatif.

### Verified (Bukti)
- `bun run lint` 0 error; semua route 200; JSON-LD tervalidasi; E2E browser desktop 1280 & mobile 375 — lihat worklog.md Task 21.

## [1.0.0] — 2026-10-18 (sebelumnya tanpa CHANGELOG — direkonstruksi dari worklog)

### Added
- Rebuild total pasca-reset (Task 14): 46 layanan, 38 provinsi, i18n ID/EN, tema Emerald Royal + Gold.
- WhatsApp resmi +62 813-1651-6524 + floating button (Task 14-b).
- Logo system "The Golden Seal of Gunara" + PWA manifest + JSON-LD OfferCatalog 46 layanan (Task 15).
- Kantor Perwakilan Jakarta (IDX Tower) + favicon.ico asli (Task 16–17).
- Logo header/footer inline SVG — kebal cache (Task 18).
- 7 halaman mandiri + mesin seo.ts (Task 19) — 54 URL.
- Blog 6 artikel bilingual + /tentang-kami (Task 20) — 62 URL.

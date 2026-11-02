# Changelog — GConsultant

Semua perubahan penting dicatat di sini (format: Keep a Changelog, SemVer).

## [3.5.0] — 2026-11-03 — Restu Ibu: Rebrand Biru × Gold (Royal Navy × Imperial Gold)

### Changed
- **Rebrand identitas menyeluruh atas masukan psikologi warna dari Ibu (pemilik):** hijau = keagamaan/daun layu → dikeluarkan dari brand usaha; palet baru **Royal Navy × Imperial Gold** — biru (langit, tinggi, laut → kepercayaan & ketinggian), gold (menang, jaya, kekayaan → kesuksesan klien), ivory (putih = bersih, suci, damai); kuning diserap keluarga gold.
- 17 token warna + 3 triplet rgba dipetakan ulang di `globals.css` (light + dark): `--deep` #0f241d→#0a1b3d, `--primary` #073b2e→#0d2e6b, `--gold` #c6a15b→#d4af37, `--gold-soft` #e5c97a→#eed88a, `--cream` #f6f1e4→#f7f5ee, `--clarity` #cfe3d4→#d6e4f7, ink/charcoal/muted/border/ring mengikuti — seluruh 101 halaman berubah otomatis via token semantik.
- Aset brand diregenerasi dari `src/app/icon.svg` baru: favicon.ico (16/24/32/48), apple-icon 180, icon-192/512, og-image.jpg 1200×630 (gradient Royal Navy + Imperial Gold), 4 logo SVG geometric-G kini Sovereign Navy × Imperial Gold.
- Meta `theme-color` (viewport layout) + manifest `background_color`/`theme_color` → #0a1b3d.
- 6 cover blog diremaphue hijau→Royal Navy (PIL+numpy, 50–96% piksel per cover); foto pendiri tidak disentuh.
- README v3.4.0 ikut disinkronkan warnanya: header/footer capsule-render (0a1b3d→16345f→d4af37), 3 classDef Mermaid + varian gelap, badge AHU/ISO/audit/rilis, QR WhatsApp.

### Removed
- Seluruh jejak hijau/emerald dari UI: badge "hemat" & diskon katalog kini Sky Blue, aksen kekuatan UMEA™ (trophy/shield/progress) kini Imperial Gold, gradient thumbnail blog kini navy. (Hijau #25d366 dipertahankan HANYA pada tombol WhatsApp — warna resmi platform, bukan warna brand.)

### Verified
- Zero-grep palet lama (0f241d/073b2e/c6a15b/emerald/…) di src + public + README = 0 hasil.
- `python3 scripts/readme-validate.py` → PASS (738 baris, 10 diagram Mermaid).

## [3.4.0] — 2026-11-01 — Hulu-Hilir Animated Documentation

### Added
- **Peta Besar "Dari Hulu ke Hilir"** — diagram induk Mermaid 5 lapis dengan subgraph + classDef warna brand: Instansi Penerbit → Knowledge Base → Mesin GConsultant → Perjalanan Klien → Hasil & Siklus Pertumbuhan (loop terbalik ke hulu), plus tabel peran-per-lapis.
- **Workflow Operasional 12 Tahap** (flowchart) — SOP layanan hulu-ke-hilir dengan 2 titik keputusan ISO 9001:2015.
- **Sequence diagram Alur WhatsApp** — interaksi Klien ↔ WhatsApp ↔ Tim ↔ Instansi (autonumber).
- **State diagram Siklus Hidup Izin** — Persiapan → Pengajuan (nested: Verifikasi/Perbaikan bergaransi) → Terbit → Berlaku → Perpanjangan/PerubahanData.
- **Pie chart komposisi katalog** (46 + 500 = 546) langsung dari `src/data`.
- **Pipeline teknis hulu-hilir** (flowchart): Repo → lint → build → audit 101/101 → deploy → headers → Googlebot → SERP → pengunjung → WhatsApp (loop klien baru).
- **Header & footer animasi** capsule-render (gradient brand 0f241d→0a4f38→d4af37, `animation=fadeIn`) + **typing SVG** 4 kalimat berputar.
- **Bagian "Arah Pengembangan"** — status mendesak/menyala/berjalan dengan rujukan worklog (deploy produksi, Search Console, telemetry).
- **Validator README permanen** `scripts/readme-validate.py` — 8 pemeriksaan (fence, 10 blok Mermaid bracket-balanced, 18 anchor internal, details/summary, https images, tautan relatif, placeholder, H1) — kini bagian dari verifikasi rilis.

### Changed
- Seluruh angka diverifikasi ulang langsung dari source code via `bun -e` import: 546=46+500, 11 kategori unggulan, 4 kelompok+38 sub-kelompok katalog, 38 provinsi, 3/6/21/5 UMEA™, 8 band UMI™, 6 artikel, 8 FAQ, 566 URL.
- README 535 → 738 baris; navigasi kilat diperluas 12 → 16 tautan (4 baris × 4).
- Bugfix: tautan kontak `halo@gunara.web.id` yang rusak sejak v3.3.1 kini diperbaiki.
- `DATABASE_URL` contoh developer diganti path relatif `file:./db/custom.db` (sebelumnya path absolut sandbox).

### Verified
- `python3 scripts/readme-validate.py` → PASS (738 baris; flowchart×5, mindmap×1, pie×1, sequence×1, state×1, timeline×1).

## [3.3.1] — 2026-10-24 — Living README

### Added
- **README generasi baru — *living documentation*** yang belum dimiliki konsultan mana pun di dunia:
  - **Live Telemetry**: badge yang membaca langsung `/api/status` produksi (versi/status/rilis) setiap kali README dimuat — menyala otomatis saat v3.3.0 dideploy.
  - **Pencari Izin dalam 30 Detik**: decision-tree Mermaid interaktif yang mengarahkan pembaca ke 5 kelompok layanan.
  - **Katalog 546 layanan interaktif**: 5 kelompok `<details>` collapsible berisi tabel layanan unggulan dengan tautan hidup ke halaman produksi + trik pencarian `?q=`.
  - **Peta otak UMEA™** (Mermaid mindmap) + tabel 6 level dengan nama resmi (Sel Survival → Organisasi Tangguh), paket dokumen D-10→D-165, dan 8 band UMI™ — semuanya divalidasi terhadap `src/data/umea.ts`.
  - **Timeline perjalanan klien 90 hari** (Mermaid timeline).
  - **Checklist kesiapan usaha 12 butir** — task list GitHub yang bisa dicentang pembaca sendiri.
  - **Dashboard kesehatan proyek**: 9 metrik + perintah verifikasi mandiri.
  - **QR WhatsApp bergaya brand** (deep green × gold) + 5 template pesan WhatsApp siap-klik per kebutuhan.
  - **Bagian Transparansi & Anti-Penipuan**: AHU, rekening resmi BCA, cara cek mandiri + peringatan penipuan.
  - Bilingual terstruktur (Cerita 30 Detik ID + The 30-Second Story EN), alert GitHub (`[!IMPORTANT]/[!TIP]/[!CAUTION]`), arsitektur & peta rute untuk developer.
- **Validator README otomatis**: keseimbangan code fence, 4 blok Mermaid (bracket-balanced), 18 anchor eksplisit — 0 tautan mati terverifikasi.

### Changed
- README lama (98 baris, data v2.0.0/outdated) diganti total; seluruh angka kini sinkron v3.3.x (546 layanan, 566 URL, 101/101 audit).

## [3.3.0] — 2026-10-24 — Google Search Optimization

### Added
- **robots.txt dinamis** (`src/app/robots.ts`): sumber kebenaran tunggal dari `BRAND.siteUrl` — referensi sitemap selalu sinkron dengan domain produksi; `public/robots.txt` statis yang outdated (berkomentar "46 halaman") dihapus. Aturan: `Allow: /`, `Disallow: /api/`, `Sitemap` + `Host` eksplisit.
- **Slot verifikasi Google Search Console**: set env `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` pada deploy → meta `google-site-verification` otomatis muncul di `<head>` tanpa edit kode.
- **Sitlinks Search Box hidup**: `WebSite` JSON-LD `SearchAction` kini mendarat ke `/layanan?q={search_term_string}`; komponen KatalogLengkap membaca parameter `q` (dan `cari`) saat mount, mengisi kotak pencarian instan 546 layanan, dan menggulir otomatis ke seksi katalog.
- **Audit engine SEO** (`scripts/seo-audit.py` v2): memindai robots.txt, sitemap.xml (validasi domain + jumlah URL), dan 100 halaman sampel terhadap 11 kriteria Google (title/description length, canonical, og:url, og:image reachable, h1 unik, JSON-LD parseable, OG/Twitter lengkap, hreflang, noindex). Terisolasi environment — sitemap produksi diarahkan ke BASE sandbox.

### Fixed
- **Clamp metadata ke batas tampilan Google**: `clampTitle` (≤52c unik + " | GConsultant" = ≤65c) dan `clampDesc` (≤158c, potong batas kata + elipsis) diterapkan pada mesin `pageMetadata`, `generateMetadata` blog & layanan (featured + katalog) — 10 judul >70c dan 50+ deskripsi >165c tidak akan terpotong Google lagi.
- **Judul hub dipendekkan**: Blog, Metodologi UMEA™, Asesmen UMI™ kini tampil utuh di SERP.
- `SearchAction` sebelumnya menunjuk `/?q=` yang tidak pernah ditangani halaman mana pun (integritas schema rusak) — diperbaiki total.

### Changed
- Layout metadata: `applicationName` ditambahkan.

### Verified (Bukti)
- Audit v2: 100 halaman sampel (14 statis + 6 blog + 80 layanan/katalog + landing `?q=`) — canonical 100% benar, 0 noindex, 0 JSON-LD rusak, og:image 200 semua.
- robots.txt dinamis dilayani Next.js; sitemap 566 URL semua domain `gunara.web.id`.

## [3.2.0] — 2026-10-24 — Full Catalog Integration

### Added
- **Integrasi penuh katalog PusatPerizinan (500 layanan)**: seluruh layanan dari gunaracorp/pusatperizinan (`layanan-500.json`) kini hidup di GConsultant sebagai halaman detail `/layanan/[slug]` — total 546 layanan aktif (46 unggulan + 500 katalog), sitemap 66 → 566 URL.
- **Harga transparan & diskon aktif**: setiap halaman katalog menampilkan harga resmi Rupiah, harga normal tercoret, badge diskon persen, dan estimasi hemat — aset diferensiasi yang selama ini hanya ada di pusatperizinan.com.
- **Taksonomi 4 kategori + 38 sub-kategori bilingual** (`katalog-meta.ts`): lingkup layanan, alur pengurusan, dokumen yang disiapkan, dan FAQ keluarga layanan — konsisten untuk seluruh anggota sub.
- **Seksi "Katalog Lengkap"** di hub `/layanan`: pencarian instan 546 layanan (nama/kode/slug), filter 4 kategori + chip sub-kategori, paginasi adaptif 24/halaman, kartu harga berdiskon.
- **Indeks klien ringan** (`katalog-lite.ts`): pencarian 500 item tanpa memuat deskripsi — bundle browser tetap ramping.
- **JSON-LD lengkap** untuk halaman katalog: Service + Offer (harga IDR diskon), BreadcrumbList, FAQPage, HowTo.
- **/api/status** kini melaporkan `catalogServices` (500) dan `servicesTotal` (546).

### Changed
- Metadata hub `/layanan`: "46 Jenis" → "546 Layanan"; klaim hero "500+ perizinan" kini terbukti oleh katalog nyata.
- Sitemap menambah 500 URL katalog (prioritas 0.8).

### Verified (Bukti)
- `validateAllSlugs()`: 0 error — 546 slug unik tanpa bentrokan lintas tier, 38 sub-meta & 4 kategori lengkap.
- Lint 0 error; 62 halaman katalog acak + sampel keempat kategori (BU/KP/LH/SK) semua HTTP 200; sitemap 566 URL.
- Agent-browser E2E: kartu harga/diskon/hemat ter-render; pencarian "halal" → 15 hasil; switch EN mengubah label keluarga layanan; mobile 375px tanpa scroll horizontal; dev.log tanpa error.

## [3.1.1] — 2026-10-24 — Preview Iframe Hardening

### Fixed
- **Preview sandbox "refused to connect" diberantas**: `X-Frame-Options: SAMEORIGIN` pada semua respons memblokir penyematan situs oleh UI chat via `<iframe>` lintas-origin — browser menampilkan error "refused to connect" padahal server merespons 200. Diganti kebijakan frame berlapis: header `Content-Security-Policy: frame-ancestors *` dikirim, `X-Frame-Options` tidak lagi dikirim pada mode preview.
- **Saklar produksi**: set env `FRAME_POLICY=sameorigin` saat deploy produksi sungguhan → CSP `frame-ancestors 'self'` + `X-Frame-Options: SAMEORIGIN` dikirim kembali (proteksi klikjacking terkunci), tanpa menyentuh kode.

### Changed
- Versi 3.1.0 → 3.1.1 (SemVer patch: perubahan header keamanan, tanpa perubahan UI/route).

### Verified (Bukti)
- `next.config.ts` dimuat ulang tanpa error sintaks (import uji via bun); kebijakan frame terverifikasi pada level konfigurasi; header lain (nosniff, Referrer-Policy, Permissions-Policy, HSTS) tidak berubah.

## [3.1.0] — 2026-10-24 — Lead UX Hardening

### Fixed
- **Form kontak `/kontak` — silent-fail diberantas**: validasi native HTML diganti validasi custom inline (`noValidate`) — pesan error di bawah setiap field (`role="alert"`, `aria-invalid`, `aria-describedby`), fokus otomatis ke field pertama yang salah, border merah real-time yang hilang saat dikoreksi.
- **Layanan pada form kini opsional** — friksi turun, konversi naik; pesan WhatsApp otomatis memakai "Konsultasi umum / General consultation" bila layanan belum dipilih. Label diberi tanda "(Opsional — boleh dipilih nanti)".
- **Konfirmasi pengiriman terlihat**: baris status `aria-live="polite"` di bawah tombol — "WhatsApp terbuka di tab baru — kami menanti pesan Anda!" (sebelumnya hanya teks tombol berubah 3,5 detik; kini 6 detik + status permanen).
- **Autocomplete & a11y**: `autoComplete="name"`/`"tel"` pada input, placeholder nomor telepon dinormalisasi.

### Changed
- Versi 3.0.0 → 3.1.0 (SemVer minor: perbaikan UX tanpa perubahan API/route).

### Verified (Bukti)
- Crawl penuh 66/66 URL sitemap → HTTP 200; lint 0 error; security headers 6/6; E2E agent-browser: alur submit form gagal-validasi menampilkan pesan inline, alur valid membuka wa.me dengan pesan terisi lengkap.

## [3.0.0] — 2026-10-23 — GCONSULTANT REBRAND — Polymathic Edition

### Changed (Rebrand Total — sesuai GConsultant Brand System v1.0)
- **Identitas baru "The Geometric G"**: logo perisai "Golden Seal" diganti mark G geometris kontinu (cincin konsentris + palang menuju inti) — tanpa perisai/mahkota/segel sesuai guideline. Inline SVG (brand-seal.tsx), logo.svg, logo-horizontal.svg, logo-stacked.svg (baru), logo-mono.svg.
- **Palet resmi token brand**: Sovereign Green #073B2E (primary), Deep Forest #0F241D (dark), Antique Gold #C6A15B (accent), Illuminated Gold #E5C97A, Legacy Cream #F6F1E4 (light), Ink #111815, Charcoal, Clarity Green — menggantikan palet Emerald Royal.
- **Tipografi resmi**: Cormorant Garamond (display serif, 500/600/700) + Inter (UI) menggantikan Playfair Display + Plus Jakarta Sans.
- **Hero beranda dibangun ulang sesuai preview resmi**: kicker POLYMATHIC STRATEGY & SYSTEMS ARCHITECTURE, headline serif "Kompleksitas memiliki struktur. Solusi memiliki jalur." / "Complexity has a structure. Solutions have a path.", CTA emas "Jelajahi Pendekatan Kami" → /metodologi, plus strip pendekatan DIAGNOSE / ARCHITECT / EXECUTE + band statistik (500+/38/15+/98%).
- **Brand name**: Gunara Consultant → GConsultant (wordmark GCONSULTANT); signature THE POLYMATHIC PROBLEM SOLVER; promise "Menyatukan ilmu. Menata kompleksitas. Mewujudkan solusi."
- **Domain resmi**: gunaraconsultant.com → gunara.web.id (metadataBase, canonical, hreflang, OG, sitemap 66 URL, robots, email halo@gunara.web.id, JSON-LD).
- favicon.ico di-rebuild byte-per-byte dari icon.svg baru (4 entri PNG 16/24/32/48, assembler murni); apple-icon.png, icon-192.png, icon-512.png diregenerasi.
- og-image.jpg 1200x630 komposisi baru (Deep Forest + Geometric G + wordmark + tagline + promise).
- hero kini CSS-only (hero-bg.png dihapus) — LCP lebih cepat, tanpa aset gambar hero.

### Fixed (Bug)
- **SVG gradient objectBoundingBox pada garis horizontal** (bbox tinggi-0) membuat palang G tidak dirender — palang kini memakai gradient userSpaceOnUse (brand-seal, icon.svg) / warna solid (OG image).

### Verified (Bukti)
- lint 0 error; favicon.ico 4 entri PNG-valid (round-trip parser); seluruh route 200; SSR memuat GCONSULTANT, THE POLYMATHIC PROBLEM SOLVER, gunara.web.id, DIAGNOSE/ARCHITECT/EXECUTE; nol referensi "Gunara Consultant"/domain lama di src.

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
- **S6**: security headers global (X-Frame-Options SAMEORIGIN, nosniff, Referrer-Policy, Permissions-Policy, HSTS) + rate-limit 30 req/menit/IP pada `/api` + cache rules aset immutable.

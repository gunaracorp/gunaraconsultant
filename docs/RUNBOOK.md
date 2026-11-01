# RUNBOOK — Operasi & Resiliensi Gunara Consultant
(S12 — Abadi-Standard 12 · satu dokumen, tiga fungsi: restart, rollback, pemulihan)

## 1. Identitas Layanan

| Item | Nilai |
|---|---|
| Aplikasi | gunara-consultant (Next.js 16 standalone) |
| Versi berjalan | cek `GET /api/status` → `version` |
| Port internal | 3000 |
| Database | SQLite (`db/custom.db`) via Prisma |
| Runtime | Bun 1.3+ / Node 24 |

## 2. Pemeriksaan Kesehatan (Health Check)

```bash
# Status aplikasi + versi + jumlah modul
curl -s http://localhost:3000/api/status | jq

# Harus mengembalikan:
# { "status": "ok", "version": "...", "modules": { "services": 46, ... } }
```

Kriteria SEHAT: HTTP 200, `status: "ok"`, `services: 46`, `umeaLevels: 6`.
Kriteria TIDAK SEHAT: timeout, 5xx, angka modul menyimpang.

## 3. Prosedur Restart

```bash
# Dev
bun run dev            # otomatis hot-reload; log di dev.log

# Production (standalone)
bun run build
bun run start          # server.js standalone; log di server.log
```

Gejala umum:
- **CSS basi setelah edit globals.css** → `rm -rf .next` lalu restart (cache Turbopack).
- **Prisma client hilang** → `bun run db:generate`.
- **5xx setelah ganti schema** → `bun run db:push` (hati-hati: `--accept-data-loss`).

## 4. Prosedur Rollback

1. Tentukan versi terakhir sehat: riwayat git tag/commit + CHANGELOG.md.
2. `git log --oneline -20` → pilih commit sehat.
3. `git checkout <commit>` → `bun install` → `bun run db:generate` → `bun run dev`.
4. Verifikasi `/api/status` mengembalikan versi yang diharapkan.
5. Catat kejadian + penyebab di worklog.md (append-only).

## 5. Backup & Pemulihan (3-2-1 minimal)

| Aset | Lokasi | Frekuensi | Cara pulihkan |
|---|---|---|---|
| Database | `db/custom.db` | Harian | Salin file + `bun run db:generate` |
| Kode | Git remote (GitHub) | Setiap commit | `git clone` + `bun install` |
| Aset publik | `public/` (dalam git) | Setiap commit | Git |
| Rahasia | `.env` (di luar git!) | Manual aman | Isi ulang manual |

Aturan: `.env` TIDAK PERNAH masuk git; kredensial pihak ketiga disimpan di password manager.

## 6. Monitoring & Log

- `dev.log` / `server.log` — log aplikasi (grep `Error`, `500`, `429`).
- `/api/status` — sumber kebenaran versi & modul.
- Search Console + Bing Webmaster — kesehatan indeks (66 URL).
- Rate limit `/api`: 30 req/menit/IP → respons 429; lonjakan 429 = indikasi abuse (cek `x-forwarded-for`).

## 7. Insiden Keamanan

1. Kunci akses: matikan kredensial yang ter kompromi (password manager).
2. Rotasi: ganti env rahasia, regenerasi kunci.
3. Assess: cek log akses asing, integritas db (ukuran file, perubahan data).
4. Pulihkan dari git bersih + db terakhir sehat.
5. Catat kronologi append-only di worklog.md.

## 8. Kontrak Level Layanan Internal

- `/` dan semua halaman publik < 3 detik first load (SSG/ISR).
- `/api/status` < 200 ms.
- Downtime terencana: lakukan di luar jam 08:00–17:00 WIB (jam operasional).

#!/usr/bin/env python3
"""Sisipkan bagian Garis Produk IATA ke README.md (setelah blok jasa khusus)."""
import re, pathlib

p = pathlib.Path("/home/z/my-project/README.md")
md = p.read_text(encoding="utf-8")

anchor = "**+ keluarga jasa khusus lain**"
assert anchor in md, "anchor jasa khusus tidak ketemu"
assert "Garis Produk IATA" not in md, "blok IATA sudah ada"

block = """
### 🛫 Garis Produk IATA 2026 — Konsultasi Akreditasi Travel Agent

Baru di v3.8.0: konsultasi & pendampingan akreditasi IATA untuk travel agent — [halaman pilar](https://www.gconsultant.web.id/layanan/konsultasi-akreditasi-iata) memetakan pemilihan model (GoLite / GoStandard / GoGlobal), review dokumen korporasi, dan penilaian kesiapan finansial sebelum aplikasi diajukan.

| Produk | Model Akreditasi | Katalog | **Promo Konsultasi 2026** |
|---|---|---|---|
| [IATA GoLite](https://www.gconsultant.web.id/layanan/iata-golite) | Standard tanpa Cash Facility | Rp19.500.000 | **Rp9.750.000** |
| [IATA GoStandard](https://www.gconsultant.web.id/layanan/iata-gostandard) | Standard dengan Cash Facility | Rp37.500.000 | **Rp18.750.000** |
| [IATA GoGlobal](https://www.gconsultant.web.id/layanan/iata-goglobal) | Multi-Country Accreditation | Rp75.000.000 | **Mulai Rp37.500.000** |

> Jasa konsultasi & pendampingan — bukan tarif resmi IATA. Application fee, annual fee, financial security, dan biaya resmi lainnya dinyatakan terpisah dalam quotation. IATA berwenang penuh atas evaluasi & keputusan akreditasi. Harga disajikan dari satu sumber: `src/data/iata.ts`.

"""

# sisip tepat setelah baris anchor (+1 baris berikutnya = akhir blok tabel jasa khusus)
lines = md.split("\n")
idx = next(i for i, l in enumerate(lines) if l.startswith(anchor))
# cari akhir blok: baris berikutnya yang tidak kosong setelah anchor
j = idx + 1
while j < len(lines) and not lines[j].startswith("**"):
    j += 1
lines.insert(j, block)
p.write_text("\n".join(lines), encoding="utf-8")
print(f"blok IATA disisipkan setelah baris {j} (anchor di {idx+1})")
print("judul baris j:", lines[j][:80])

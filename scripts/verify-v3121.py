#!/usr/bin/env python3
"""Verifikasi v3.12.1 — IATA GoLite Paket Lengkap (Rp25 jt → Rp12 jt) + regresi v3.12.0."""
from pathlib import Path
import re

ok = True

def check(label, cond, detail=""):
    global ok
    print(f"{'OK ' if cond else 'GAGAL'} | {label} {detail}")
    ok = ok and bool(cond)

src = Path("/home/z/my-project/src")
root = Path("/home/z/my-project")

# 1) Master pricing iata.ts
iata = (src / "data/iata.ts").read_text(encoding="utf-8")
seg = iata[iata.find('code: "golite"'):iata.find('code: "gostandard"')]
check("GoLite katalog Rp25.000.000", 'priceCatalog: "Rp25.000.000"' in seg)
check("GoLite promo Rp12.000.000", 'pricePromo: "Rp12.000.000"' in seg)
check("GoLite nameId Paket Lengkap", 'nameId: "IATA GoLite — Paket Lengkap"' in seg)
check("GoLite nameEn Complete Package", 'nameEn: "IATA GoLite — Complete Package"' in seg)
check("GoLite tanpa harga lama", not re.search(r"19\.500\.000|9\.750\.000", seg))
check("GoStandard tak berubah", 'priceCatalog: "Rp37.500.000"' in iata and 'pricePromo: "Rp18.750.000"' in iata)
check("GoGlobal tak berubah", 'priceCatalog: "Rp75.000.000"' in iata and 'pricePromo: "Mulai Rp37.500.000"' in iata)
check("label Promo Khusus 2026", 'id: "Promo Khusus 2026"' in iata and 'en: "2026 Special Promo"' in iata)
check("aritmetika 25-12=13 & label", 25000000 - 12000000 == 13000000)

# 2) services-iata.ts: sinkron + nol sisa lama
si = (src / "data/services-iata.ts").read_text(encoding="utf-8")
check("desc umum mulai Rp12.000.000", "mulai Rp12.000.000 (Promo Khusus 2026)" in si)
check("desc umum EN Rp12,000,000", "start at Rp12,000,000 (2026 Special Promo)" in si)
check("desc GoLite paket lengkap 25/12", "paket lengkap: katalog Rp25.000.000, Promo Khusus 2026 Rp12.000.000" in si)
check("desc GoLite EN complete 25/12", "complete package: catalog Rp25,000,000, 2026 Special Promo Rp12,000,000" in si)
check("FAQ GoLite ID 25/12", "Harga katalog Rp25.000.000; Promo Khusus 2026 Rp12.000.000" in si)
check("FAQ GoLite EN 25/12", "Catalog price Rp25,000,000; 2026 Special Promo Rp12,000,000" in si)
check("priceFrom golite via P", "priceFrom: P.golite.pricePromo" in si)
sisa = re.findall(r"19\.500\.000|9\.750\.000|9,750,000|19,500,000|Promo Konsultasi|Consultancy Promo", si)
check("services-iata nol sisa lama", len(sisa) == 0, f"= {sisa[:3]}")
gs = si[si.find('slug: "iata-gostandard"'):si.find('slug: "iata-goglobal"')]
check("GoStandard harga tetap di deskripsi", "Rp37.500.000" in gs and "Rp18.750.000" in gs)

# 3) README
rd = (root / "README.md").read_text(encoding="utf-8")
check("README baris GoLite Paket Lengkap 25/12", "| [IATA GoLite — Paket Lengkap](https://www.gconsultant.web.id/layanan/iata-golite) | Standard tanpa Cash Facility | Rp25.000.000 | **Rp12.000.000** |" in rd)
check("README GoStandard/GoGlobal tak berubah", "Rp37.500.000 | **Rp18.750.000**" in rd and "Rp75.000.000 | **Mulai Rp37.500.000**" in rd)
check("README nol harga IATA lama", not re.search(r"19\.500\.000|9\.750\.000", rd))

# 4) Regresi v3.12.0 (travel 12 jt tetap utuh)
promo = (src / "data/promo-travel.ts").read_text(encoding="utf-8")
check("regresi: PROMO_TRAVEL 12/25/13", all(x in promo for x in ["harga: 25000000", "hargaDiskon: 12000000", "hemat: 13000000"]))
kat = (src / "data/katalog.ts").read_text(encoding="utf-8")
check("regresi: katalog SK-PR 12jt x3", kat.count("hargaDiskon: 12000000") >= 3)
check("regresi: sitemap masih programmatic", "programmaticPages" in (src / "app/sitemap.ts").read_text(encoding="utf-8"))
wil = (src / "data/wilayah.ts").read_text(encoding="utf-8")
kota_n = len(re.findall(r'provinsiSlug: "[^"]+", tipe: "(kota|kabupaten)" \}', wil))
check("regresi: wilayah 514", kota_n == 514, f"= {kota_n}")

# 5) Versi 3.12.1
check("version.ts 3.12.1", 'VERSI = "3.12.1"' in (src / "lib/version.ts").read_text(encoding="utf-8"))
check("package.json 3.12.1", '"version": "3.12.1"' in (root / "package.json").read_text(encoding="utf-8"))
check("CHANGELOG 3.12.1", "## [3.12.1]" in (root / "CHANGELOG.md").read_text(encoding="utf-8"))
check("worklog Task 39", "Task ID: 39" in (root / "worklog.md").read_text(encoding="utf-8"))

print("\n" + ("SEMUA VERIFIKASI LOLOS" if ok else "ADA YANG GAGAL — perbaiki dulu"))
raise SystemExit(0 if ok else 1)

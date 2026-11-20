#!/usr/bin/env python3
"""Verifikasi v3.12.0 — Promo Khusus 2026 + Programmatic SEO lini ibadah."""
from pathlib import Path
import re

ok = True

def check(label, cond, detail=""):
    global ok
    print(f"{'OK ' if cond else 'GAGAL'} | {label} {detail}")
    ok = ok and bool(cond)

src = Path("/home/z/my-project/src")

# 1) PROMO_TRAVEL satu sumber
promo = (src / "data/promo-travel.ts").read_text(encoding="utf-8")
check("PROMO_TRAVEL hargaDiskon 12000000", "hargaDiskon: 12000000" in promo)
check("PROMO_TRAVEL harga 25000000", "harga: 25000000" in promo)
check("PROMO_TRAVEL hemat 13000000", "hemat: 13000000" in promo)
check("PROMO_TRAVEL label 2026", "Promo Khusus 2026" in promo)

# 2) Aritmetika 25jt - 12jt = 13jt (dihitung ulang, bukan dikopi)
check("aritmetika 25jt-12jt=13jt", 25000000 - 12000000 == 13000000)
check("persen diskon 52%", abs(12000000 / 25000000 - 0.48) < 1e-9 and abs(13000000 / 25000000 - 0.52) < 1e-9, "(diskon 52% dari normal)")

# 3) Katalog utama: 3 paket SK-PR harga baru
kat = (src / "data/katalog.ts").read_text(encoding="utf-8")
for kode in ["SK-PR-001", "SK-PR-002", "SK-PR-015"]:
    seg = kat[kat.find(f'kode: "{kode}"'):]
    seg = seg[:seg.find("},")]
    check(f"katalog {kode} harga 25jt", "harga: 25000000" in seg)
    check(f"katalog {kode} diskon 12jt", "hargaDiskon: 12000000" in seg)
    check(f"katalog {kode} hemat 13jt", "hemat: 13000000" in seg)
    check(f"katalog {kode} tak ada harga lama", not re.search(r"14900000|19500000|24900000|20000000,|26000000|33200000", seg))

# 4) Katalog lite: 3 baris
lite = (src / "data/katalog-lite.ts").read_text(encoding="utf-8")
n_baru = len(re.findall(r"kode: \"SK-PR-00[12]\".*harga: 25000000, diskon: 0\.52, hargaDiskon: 12000000", lite)) + \
         len(re.findall(r"kode: \"SK-PR-015\".*harga: 25000000, diskon: 0\.52, hargaDiskon: 12000000", lite))
check("katalog-lite 3 baris harga baru", n_baru == 3, f"= {n_baru}")

# 5) Halaman travel & pillar ppiu
travel = (src / "app/sertifikasi-travel/page.tsx").read_text(encoding="utf-8")
check("travel banner promo 2026", "PROMO KHUSUS TAHUN 2026" in travel)
check("travel chip KHUSUS 2026", "KHUSUS 2026" in travel)
check("travel harga paket 12jt x3", travel.count("hargaDiskon: 12000000") == 3)
check("travel tabel fmt(12000000) x3", travel.count("fmt(12000000)") == 3)
check("travel link direktori kota", "/sertifikasi-travel/kota" in travel)
check("travel tanpa harga lama", not re.search(r"14900000|19500000|24900000|Rp14,9|Rp19,5|Rp24,9", travel))

ppiu = (src / "app/sertifikasi-travel/ppiu/page.tsx").read_text(encoding="utf-8")
check("ppiu Service price 12jt", "price: 12000000" in ppiu)
check("ppiu heading promo", "Isi Paket Full All-In Rp12.000.000" in ppiu)
check("ppiu FAQ harga baru", "Rp12.000.000" in ppiu and "Rp25.000.000" in ppiu)
check("ppiu tanpa harga lama", not re.search(r"14900000|19500000|24900000|Rp19\.500\.000|Rp14,9|Rp19,5|Rp24,9", ppiu))
check("ppiu section 38 provinsi", "Layanan Izin PPIU per Kota" in ppiu and "PROVINSI_WILAYAH.map" in ppiu)

# 6) i18n ID/EN
i18n = (src / "lib/i18n.tsx").read_text(encoding="utf-8")
check("i18n certHubSub ID 12jt", i18n.count('certHubSub: "Tiga paket all-in — BPW, PPIU Umrah, PIHK Haji Khusus — masing-masing Rp12 jt') == 1)
check("i18n certHubSub EN 12jt", i18n.count("at IDR12M each under the 2026 Special Promo") == 1)
check("i18n certPpiuTitle ID promo", i18n.count("Full All-In Rp12 Juta (Promo 2026)") == 1)
check("i18n certPpiuTitle EN promo", i18n.count("All-In IDR12M (2026 Promo)") == 1)
check("i18n tanpa harga lama sertifikasi", not re.search(r"Rp14,9 jt|Rp19,5 jt|Rp24,9 jt|IDR14\.9M|IDR19\.5M|IDR24\.9M", i18n))

# 7) wilayah.ts: 38 provinsi + 514 kota
wil = (src / "data/wilayah.ts").read_text(encoding="utf-8")
prov_n = len(re.findall(r'\{ nama: "[^"]+", slug: "[^"]+", kawasan: "[^"]+" \}', wil))
kota_n = len(re.findall(r'provinsiSlug: "[^"]+", tipe: "(kota|kabupaten)" \}', wil))
check("wilayah 38 provinsi", prov_n == 38, f"= {prov_n}")
check("wilayah 514 kota", kota_n == 514, f"= {kota_n}")
kota_tipe = len(re.findall(r'tipe: "kota" \}', wil))
check("98 kota + 416 kabupaten", kota_tipe == 98 and kota_n - kota_tipe == 416, f"(kota={kota_tipe})")
check("wilayah pemekaran Papua", all(x in wil for x in ["Papua Tengah", "Papua Pegunungan", "Papua Selatan", "Papua Barat Daya"]))

# 8) Rute & template & konfigurasi
for f in [
    "app/sertifikasi-travel/ppiu/[kota]/page.tsx",
    "app/sertifikasi-travel/ppiu/provinsi/[provinsi]/page.tsx",
    "app/sertifikasi-travel/pihk/[kota]/page.tsx",
    "app/sertifikasi-travel/pihk/provinsi/[provinsi]/page.tsx",
    "app/sertifikasi-travel/kota/page.tsx",
    "components/sections/kota-programmatic.tsx",
    "data/layanan-programmatic.ts",
]:
    check(f"ada {f}", (src / f).exists())
tmpl = (src / "components/sections/kota-programmatic.tsx").read_text(encoding="utf-8")
check("template pakai PROMO_TRAVEL", "PROMO_TRAVEL.hargaDiskon" in tmpl)
check("template JSON-LD Service+Offer", '"@type": "Offer"' in tmpl and '"@type": "City"' in tmpl)
check("template FAQ & breadcrumb JSON-LD", "FAQPage" in tmpl and "BreadcrumbList" in tmpl)
check("provinsi JSON-LD ItemList", '"@type": "ItemList"' in tmpl)
check("metaNama dipakai utk title", "metaNama" in tmpl)
cfg = (src / "data/layanan-programmatic.ts").read_text(encoding="utf-8")
check("dasar hukum PPIU Permenag 15/2012", "Permenag No. 15 Tahun 2012" in cfg)
check("dasar hukum PIHK UU 13/2008", "UU No. 13 Tahun 2008" in cfg)
check("metaNama pendek PPIU/PPIHK", 'metaNama: "Izin PPIU"' in cfg and 'metaNama: "Izin PPIHK"' in cfg)

# 9) Sitemap & README
sm = (src / "app/sitemap.ts").read_text(encoding="utf-8")
check("sitemap programmaticPages", "programmaticPages" in sm and "KOTA_WILAYAH.map" in sm)
check("sitemap path direktori kota", "/sertifikasi-travel/kota" in sm)
svc_n = sum(len(re.findall(r"slug: \"", (src / f"data/{f}").read_text(encoding="utf-8")))
            for f in ["services-a.ts", "services-b.ts", "services-iata.ts"])
kat_n = len(re.findall(r'slug: "', (src / "data/katalog.ts").read_text(encoding="utf-8")))
blog_n = len(re.findall(r"slug: \"", (src / "data/blog.ts").read_text(encoding="utf-8")))
static_n = len(re.findall(r"path: \"", sm))
prog_n = 2 * (514 + 38)
total = svc_n + kat_n + blog_n + static_n + 1 + prog_n
check("sitemap total = 1680", total == 1680, f"= {total} (svc {svc_n} + kat {kat_n} + blog {blog_n} + static {static_n} + home 1 + prog {prog_n})")
rd = Path("/home/z/my-project/README.md").read_text(encoding="utf-8")
check("README badge 1680", "1680_URL_indexable" in rd)

# 10) Versi 3.12.0
check("version.ts 3.12.0", 'VERSI = "3.12.0"' in (src / "lib/version.ts").read_text(encoding="utf-8"))
check("package.json 3.12.0", '"version": "3.12.0"' in Path("/home/z/my-project/package.json").read_text(encoding="utf-8"))
check("CHANGELOG v3.12.0", "## [3.12.0]" in Path("/home/z/my-project/CHANGELOG.md").read_text(encoding="utf-8"))
check("worklog Task 38", "Task ID: 38" in Path("/home/z/my-project/worklog.md").read_text(encoding="utf-8"))

print("\n" + ("SEMUA VERIFIKASI LOLOS" if ok else "ADA YANG GAGAL — perbaiki dulu"))
raise SystemExit(0 if ok else 1)

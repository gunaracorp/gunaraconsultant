#!/usr/bin/env python3
"""Verifikasi v3.11.0 — Government Channels Directorate."""
from pathlib import Path
import re

ok = True

def check(label, cond, detail=""):
    global ok
    print(f"{'OK ' if cond else 'GAGAL'} | {label} {detail}")
    ok = ok and bool(cond)

src = Path("/home/z/my-project/src")

# 1) Data 20 kanal: kode unik, URL unik, semua https & domain pemerintah
data = (src / "data/kanal-pemerintah.ts").read_text(encoding="utf-8")
codes = re.findall(r'kode: "(KR-\d+)"', data)
urls = re.findall(r'url: "(https://[^"]+)"', data)
domains = re.findall(r'domain: "([^"]+)"', data)
check("jumlah kanal", len(codes) == 20, f"= {len(codes)}")
check("kode unik", len(set(codes)) == 20)
check("URL unik", len(set(urls)) == 20)
check("semua https://", all(u.startswith("https://") for u in urls))
check("semua domain pemerintah (.go.id)", all(d.endswith(".go.id") for d in domains), f"-> {domains}")
check("kontra-kode UR-XX salah ketik", "UR-" not in data)

# 2) Halaman & komponen ada, JSON-LD & FAQ terpasang
page = (src / "app/kanal-pemerintah/page.tsx").read_text(encoding="utf-8")
act = (src / "components/sections/kanal-activation.tsx").read_text(encoding="utf-8")
direc = (src / "components/sections/kanal-directory.tsx").read_text(encoding="utf-8")
check("halaman pakai KANAL_PEMERINTAH", "KANAL_PEMERINTAH" in page)
check("JSON-LD ItemList numberOfItems", "numberOfItems: KANAL_COUNT" in page)
check("JSON-LD FAQPage", '"@type": "FAQPage"' in page)
check("FAQ 6 butir", len(re.findall(r'q: "', page)) == 6)
for key in ["kanalRole1Name", "kanalRole2Name", "kanalRole3Name", "kanalRole4Name",
            "kanalGrp1", "kanalGrp7", "kanalLapis1", "kanalLapis7"]:
    check(f"kunci i18n {key} dipakai", key in act)

# 3) i18n: kunci baru ada di blok ID dan EN
i18n = (src / "lib/i18n.tsx").read_text(encoding="utf-8")
for key in ["navKanal", "kanalTitle", "kanalSub", "kanalDiscAccount", "kanalVisit",
            "kanalFlow4T", "kanalActive", "kanalStandby", "kanalLapisSub", "kanalCouncilSub"]:
    check(f"i18n {key} (ID+EN)", i18n.count(f"{key}:") >= 2, f"x{i18n.count(key + ':')}")

# 4) Navbar & sitemap
nav = (src / "components/navbar.tsx").read_text(encoding="utf-8")
sm = (src / "app/sitemap.ts").read_text(encoding="utf-8")
check("navbar menu kanal", '"navKanal"' in nav)
check("sitemap /kanal-pemerintah", "/kanal-pemerintah" in sm)

# 5) Versi 3.11.0 sinkron
ver = (src / "lib/version.ts").read_text(encoding="utf-8")
pkg = Path("/home/z/my-project/package.json").read_text(encoding="utf-8")
chlog = Path("/home/z/my-project/CHANGELOG.md").read_text(encoding="utf-8")
wl = Path("/home/z/my-project/worklog.md").read_text(encoding="utf-8")
rd = Path("/home/z/my-project/README.md").read_text(encoding="utf-8")
check("version.ts 3.11.0", 'VERSI = "3.11.0"' in ver)
check("package.json 3.11.0", '"version": "3.11.0"' in pkg)
check("CHANGELOG v3.11.0", "## [3.11.0]" in chlog)
check("worklog Task 37", "Task ID: 37" in wl)
check("README sitemap 575", "575_URL_indexable" in rd)

# 6) Sitemap total: hitung entri dinamis + statis dari source (tanpa build)
svc_n = sum(
    len(re.findall(r"slug: \"", (src / f"data/{f}").read_text(encoding="utf-8")))
    for f in ["services-a.ts", "services-b.ts", "services-iata.ts"]
)
kat = (src / "data/katalog.ts").read_text(encoding="utf-8")
blog = (src / "data/blog.ts").read_text(encoding="utf-8")
kat_n = len(re.findall(r'slug: "', kat))
blog_n = len(re.findall(r"slug: \"", blog))
static_n = len(re.findall(r"path: \"", sm))
total = svc_n + kat_n + blog_n + static_n + 1  # +1 homepage
check("sitemap total = 575", total == 575, f"= {total} (svc {svc_n} + kat {kat_n} + blog {blog_n} + static {static_n} + home 1)")

print("\n" + ("SEMUA VERIFIKASI LOLOS" if ok else "ADA YANG GAGAL — perbaiki dulu"))
raise SystemExit(0 if ok else 1)

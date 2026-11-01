#!/usr/bin/env python3
"""
GCONSULTANT SEO AUDIT ENGINE — v1
Memindai seluruh situs terhadap 12 kriteria Google Search Quality.
Usage: python scripts/seo-audit.py [--full] [--base http://localhost:3000]
"""
import concurrent.futures as cf
import html as htmllib
import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

BASE = "http://localhost:3000"
SITE = "https://gunara.web.id"
if "--full" in sys.argv:
    for i, a in enumerate(sys.argv):
        if a == "--base" and i + 1 < len(sys.argv):
            BASE = sys.argv[i + 1]

UA = {"User-Agent": "Mozilla/5.0 (compatible; GConsultantSEOAudit/1.0)"}
NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}

STATIC_PAGES = [
    "/", "/layanan", "/metodologi", "/asesmen", "/tentang-kami", "/blog",
    "/keunggulan", "/proses", "/provinsi", "/pendiri", "/faq", "/kontak",
    "/kebijakan-privasi", "/syarat-ketentuan",
]

results = []   # list of dict
issues = []    # list of (severity, url, message)


def fetch(url, timeout=20):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.status, dict(r.headers), r.read()


def check_page(url):
    """Audit satu halaman HTML terhadap kriteria Google."""
    path = url.replace(SITE, "").replace(BASE, "") or "/"
    bare = path.split("?")[0]          # canonical dibandingkan tanpa query string
    row = {"url": path, "status": 0, "title": 0, "desc": 0, "canonical": "-",
           "h1": 0, "jsonld": 0, "og": False, "tw": False, "lang": False,
           "noindex": False}
    try:
        status, headers, body = fetch(url)
        html = body.decode("utf-8", "ignore")
        row["status"] = status

        # 1. Title + panjang
        m = re.search(r"<title[^>]*>(.*?)</title>", html, re.S)
        if m:
            t = htmllib.unescape(m.group(1)).strip()
            row["title"] = len(t)
            if len(t) < 15:
                issues.append(("HIGH", path, f"title terlalu pendek ({len(t)}c): {t[:60]}"))
            elif len(t) > 70:
                issues.append(("MED", path, f"title terlalu panjang ({len(t)}c): {t[:70]}..."))
        else:
            issues.append(("HIGH", path, "TAG <title> HILANG"))

        # 2. Meta description
        m = re.search(r'<meta\s+name="description"\s+content="([^"]*)"', html)
        if m:
            row["desc"] = len(htmllib.unescape(m.group(1)))
            if row["desc"] < 70:
                issues.append(("MED", path, f"description pendek ({row['desc']}c)"))
            elif row["desc"] > 165:
                issues.append(("LOW", path, f"description panjang ({row['desc']}c)"))
        else:
            issues.append(("HIGH", path, "META DESCRIPTION HILANG"))

        # 3. Canonical — harus persis SITE + path (tanpa query)
        m = re.search(r'<link\s+rel="canonical"\s+href="([^"]*)"', html)
        if m:
            row["canonical"] = m.group(1)
            expect = f"{SITE}{bare}"
            # rstrip("/") — Next.js menormalkan root tanpa trailing slash
            if row["canonical"].rstrip("/") != expect.rstrip("/"):
                issues.append(("HIGH", path, f"canonical salah: {row['canonical']} != {expect}"))
        else:
            issues.append(("HIGH", path, "CANONICAL HILANG"))

        # 4. H1 unik
        row["h1"] = len(re.findall(r"<h1[\s>]", html))
        if row["h1"] == 0:
            issues.append(("HIGH", path, "H1 HILANG"))
        elif row["h1"] > 1:
            issues.append(("MED", path, f"H1 ganda ({row['h1']}x)"))

        # 5. JSON-LD parseable
        types = []
        for sm in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
            raw = sm.group(1).strip()
            try:
                data = json.loads(raw)
                g = data.get("@type", "?") if isinstance(data, dict) else "graph"
                types.append(g if isinstance(g, str) else ",".join(g))
            except json.JSONDecodeError as e:
                issues.append(("HIGH", path, f"JSON-LD tidak valid: {e}"))
        row["jsonld"] = len(types)

        # 6. OG + Twitter
        row["og"] = 'property="og:title"' in html and 'property="og:image"' in html
        row["tw"] = 'name="twitter:card"' in html
        if not row["og"]:
            issues.append(("MED", path, "OpenGraph (og:title/og:image) kurang"))
        if not row["tw"]:
            issues.append(("LOW", path, "twitter:card hilang"))

        # 7. lang attribute
        m = re.search(r"<html[^>]*lang=\"([^\"]+)\"", html)
        row["lang"] = bool(m)
        if not row["lang"]:
            issues.append(("MED", path, "atribut lang hilang"))

        # 8. noindex accidental
        row["noindex"] = 'name="robots" content="noindex' in html
        if row["noindex"]:
            issues.append(("HIGH", path, "NOINDEX terdeteksi!"))

        # 9. hreflang
        row["hreflang"] = 'hreflang="id-ID"' in html and 'hreflang="en"' in html

        # 10. og:image reachable (dukung relative & absolute)
        m = re.search(r'property="og:image"\s+content="([^"]*)"', html)
        if m:
            img = m.group(1)
            if img.startswith("/"):
                img = BASE + img
            try:
                st, _, _ = fetch(img, timeout=10)
                if st != 200:
                    issues.append(("HIGH", path, f"og:image HTTP {st}: {img}"))
            except Exception as e:
                issues.append(("HIGH", path, f"og:image gagal: {e}"))
        # 11. og:url harus SITE+path (tanpa query)
        m = re.search(r'property="og:url"\s+content="([^"]*)"', html)
        if m and m.group(1).rstrip("/") != f"{SITE}{bare}".rstrip("/"):
            issues.append(("MED", path, f"og:url tidak cocok: {m.group(1)}"))
    except Exception as e:
        issues.append(("HIGH", path, f"FETCH GAGAL: {e}"))
    return row


def main():
    # ---- 0. robots.txt ----
    print("== ROBOTS.TXT ==")
    try:
        st, _, body = fetch(f"{BASE}/robots.txt")
        rt = body.decode()
        has_sitemap = "Sitemap:" in rt
        print(f"  status={st} sitemap_ref={has_sitemap}")
        if not has_sitemap:
            issues.append(("HIGH", "/robots.txt", "Referensi Sitemap hilang"))
        print("  ---")
        for line in rt.strip().splitlines():
            print("  " + line)
    except Exception as e:
        issues.append(("HIGH", "/robots.txt", f"gagal fetch: {e}"))

    # ---- 1. sitemap.xml ----
    print("\n== SITEMAP.XML ==")
    sitemap_urls = []
    try:
        st, _, body = fetch(f"{BASE}/sitemap.xml")
        root = ET.fromstring(body)
        sitemap_urls = [u.text.strip() for u in root.findall(".//sm:loc", NS)]
        print(f"  status={st} urls={len(sitemap_urls)}")
        if len(sitemap_urls) < 500:
            issues.append(("MED", "/sitemap.xml", f"hanya {len(sitemap_urls)} URL (harusnya 566)"))
        # validasi semua loc harus domain kanonik (root tanpa slash juga sah)
        bad = [u for u in sitemap_urls if u != SITE and not u.startswith(f"{SITE}/")]
        if bad:
            issues.append(("HIGH", "/sitemap.xml", f"{len(bad)} URL non-canonical-domain: {bad[:3]}"))
        # ISOLASI ENVIRONMENT: audit selalu terhadap sandbox BASE, bukan produksi
        crawl = [u.replace(SITE, BASE) for u in sitemap_urls]
    except Exception as e:
        issues.append(("HIGH", "/sitemap.xml", f"gagal: {e}"))
        crawl = []

    # ---- 2. daftar halaman yang diaudit ----
    targets = [BASE + p for p in STATIC_PAGES]
    # blog posts + sampel layanan dari sitemap (semua diarahkan ke BASE)
    blog = [u for u in crawl if "/blog/" in u]
    svc = [u for u in crawl if "/layanan/" in u]
    targets += blog
    targets += svc[:40]                       # sampel 40 layanan featured/katalog
    import random
    random.seed(46)
    if len(svc) > 40:
        targets += random.sample(svc[40:], min(40, len(svc) - 40))
    # SearchAction landing: /layanan?q=... harus 200 & terindeks
    targets.append(f"{BASE}/layanan?q=pendirian+pt")
    targets = sorted(set(targets))

    print(f"\n== AUDIT {len(targets)} HALAMAN ==")
    with cf.ThreadPoolExecutor(max_workers=12) as ex:
        rows = list(ex.map(check_page, targets))

    ok = 0
    for r in rows:
        good = (r["status"] == 200 and r["title"] > 0 and r["desc"] > 0
                and r["h1"] == 1 and r["jsonld"] > 0 and r["og"] and r["tw"]
                and r["lang"] and not r["noindex"])
        ok += good
        flag = "OK " if good else "!! "
        print(f"  {flag}{r['url']:<52} {r['status']} t={r['title']:<3} d={r['desc']:<3} "
              f"h1={r['h1']} ld={r['jsonld']:<2} og={int(r['og'])} tw={int(r['tw'])} "
              f"lang={int(r['lang'])} hl={int(r.get('hreflang', False))}")
    print(f"\n  PERFECT: {ok}/{len(rows)}")

    # ---- 3. ringkasan isu ----
    print(f"\n== ISSUES ({len(issues)}) ==")
    sev_rank = {"HIGH": 0, "MED": 1, "LOW": 2}
    for sev, url, msg in sorted(issues, key=lambda x: (sev_rank.get(x[0], 9), x[1])):
        print(f"  [{sev}] {url} — {msg}")

    with open("/home/z/my-project/.zscripts/seo-audit-last.json", "w") as f:
        json.dump({"rows": rows, "issues": issues, "sitemap_count": len(sitemap_urls)}, f, indent=1)
    print("\nHasil disimpan: .zscripts/seo-audit-last.json")


if __name__ == "__main__":
    main()

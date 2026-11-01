#!/usr/bin/env python3
"""
Build katalog.ts dari layanan-500.json (pusatperizinan) → data layer GConsultant.
Validasi: slug unik (vs katalog & existing 46), harga konsisten (hemat ≈ harga×diskon),
deskripsi terisi. Output: src/data/katalog.ts dengan tipe CatalogItem + KATALOG + helper stats.
"""
import json
import re
import subprocess
from collections import Counter
from pathlib import Path

ROOT = Path("/home/z/my-project")
SRC_JSON = Path("/tmp/pusatperizinan/src/data/layanan-500.json")
OUT = ROOT / "src/data/katalog.ts"

data = json.loads(SRC_JSON.read_text(encoding="utf-8"))
assert len(data) == 500, f"Expected 500 items, got {len(data)}"

# --- slug existing (46 layanan unggulan) untuk anti-bentrokan ---
out = subprocess.run(
    ["grep", "-oh", 'slug: "[^"]*"',
     str(ROOT / "src/data/services-a.ts"), str(ROOT / "src/data/services-b.ts")],
    capture_output=True, text=True).stdout
existing_slugs = set(re.findall(r'slug: "([^"]+)"', out))

seen = set()
items, errors = [], []
for d in data:
    slug = d["tautan"].rstrip("/").split("/")[-1]
    if slug in seen:
        errors.append(f"duplikat slug katalog: {slug}")
        continue
    if slug in existing_slugs:
        errors.append(f"bentrokan slug existing: {slug}")
        continue
    seen.add(slug)
    harga, diskon, hd, hemat = d["harga"], d["diskon"], d["harga_diskon"], d["hemat"]
    # konsistensi harga: hemat ≈ harga - harga_diskon (toleransi 1%)
    if hemat and abs((harga - hd) - hemat) > max(1000, harga * 0.01):
        errors.append(f"harga tak konsisten {d['kode']}: {harga}-{hd} != {hemat}")
    if diskon and abs((harga * diskon) - hemat) > max(1000, harga * 0.02):
        errors.append(f"diskon tak konsisten {d['kode']}: {harga}*{diskon} != {hemat}")
    if not d["deskripsi"] or len(d["deskripsi"]) < 40:
        errors.append(f"deskripsi kurang: {d['kode']}")
    esc = lambda s: s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")
    items.append({
        "slug": slug, "kode": d["kode"], "nama": d["nama"],
        "catCode": d["kategori_kode"], "subCode": d["sub_kode"], "sub": d["sub"],
        "harga": harga, "diskon": diskon, "hargaDiskon": hd, "hemat": hemat,
        "descId": esc(d["deskripsi"]),
    })

if errors:
    print("VALIDASI GAGAL:")
    for e in errors[:20]:
        print(" -", e)
    raise SystemExit(1)

slug_counts = Counter(i["slug"] for i in items)
assert len(slug_counts) == 500, "slug unik tidak terpenuhi"

def fmt(i):
    return (
        '  {\n'
        f'    slug: "{i["slug"]}",\n'
        f'    kode: "{i["kode"]}",\n'
        f'    nama: "{i["nama"]}",\n'
        f'    catCode: "{i["catCode"]}",\n'
        f'    subCode: "{i["subCode"]}",\n'
        f'    sub: "{i["sub"]}",\n'
        f'    harga: {i["harga"]},\n'
        f'    diskon: {i["diskon"]},\n'
        f'    hargaDiskon: {i["hargaDiskon"]},\n'
        f'    hemat: {i["hemat"]},\n'
        f'    descId:\n      "{i["descId"]}",\n'
        '  },\n'
    )

body = "".join(fmt(i) for i in items)

ts = f'''/**
 * KATALOG LENGKAP — 500 layanan PusatPerizinan (gunaracorp) terintegrasi GConsultant.
 * Sumber: gunaracorp/pusatperizinan src/data/layanan-500.json (v3.2.0 "Full Catalog Integration").
 * Harga dalam Rupiah penuh; diskon & hemat mengikuti data resmi perusahaan.
 * Seluruh slug terverifikasi unik & tidak bentrok dengan 46 layanan unggulan (SERVICES).
 */
export interface CatalogItem {{
  slug: string;
  kode: string;
  nama: string;
  catCode: string;
  subCode: string;
  sub: string;
  harga: number;
  diskon: number;
  hargaDiskon: number;
  hemat: number;
  descId: string;
}}

export const KATALOG: CatalogItem[] = [
{body}];

export const KATALOG_COUNT = KATALOG.length;

export function getCatalog(slug: string): CatalogItem | undefined {{
  return KATALOG.find((k) => k.slug === slug);
}}

export function catalogBySub(subCode: string): CatalogItem[] {{
  return KATALOG.filter((k) => k.subCode === subCode);
}}

export const KAT_CODES = ["BU", "KP", "LH", "SK"] as const;
export type KatCode = (typeof KAT_CODES)[number];
'''

lite_items = ",\n".join(
    '    { slug: "%s", kode: "%s", nama: "%s", catCode: "%s", subCode: "%s", harga: %d, diskon: %s, hargaDiskon: %d }'
    % (i["slug"], i["kode"], i["nama"], i["catCode"], i["subCode"], i["harga"], i["diskon"], i["hargaDiskon"])
    for i in items
)

OUT2 = ROOT / "src/data/katalog-lite.ts"
OUT2.write_text(
    "/**\n"
    " * Indeks ringan komponen klien (search hub /layanan) — TANPA deskripsi\n"
    " * agar bundle browser tetap ramping. Dibangkitkan scripts/build-katalog.py.\n"
    " */\n"
    "export interface CatalogLite {\n"
    "  slug: string;\n"
    "  kode: string;\n"
    "  nama: string;\n"
    "  catCode: string;\n"
    "  subCode: string;\n"
    "  harga: number;\n"
    "  diskon: number;\n"
    "  hargaDiskon: number;\n"
    "}\n\n"
    "export const KATALOG_LITE: CatalogLite[] = [\n" + lite_items + ",\n];\n",
    encoding="utf-8",
)

OUT.write_text(ts, encoding="utf-8")
print(f"OK: {len(items)} item → {OUT} ({OUT.stat().st_size // 1024} KB)")
print(f"OK: lite → {OUT2} ({OUT2.stat().st_size // 1024} KB)")
kat = Counter(i["catCode"] for i in items)
print("Per kategori:", dict(kat))

#!/usr/bin/env python3
"""Generate src/data/wilayah.ts dari dataset IndoArea 19-04-2024 (hanifabd/wilayah-indonesia-area,
dihimpun dari BPS & Kemendagri). Validasi keras: 38 provinsi, 514 kabupaten/kota, spot-check
provinsi pemekaran Papua. Data mentah dibaca dari /tmp/wilayah-data (tak dijalankan dari dalamnya)."""
import json
import re
from pathlib import Path

SRC = Path("/tmp/wilayah-data")
OUT = Path("/home/z/my-project/src/data/wilayah.ts")

REGION = {
    "ACEH": "Sumatera", "SUMATERA UTARA": "Sumatera", "SUMATERA BARAT": "Sumatera",
    "RIAU": "Sumatera", "JAMBI": "Sumatera", "SUMATERA SELATAN": "Sumatera",
    "BENGKULU": "Sumatera", "LAMPUNG": "Sumatera",
    "KEPULAUAN BANGKA BELITUNG": "Sumatera", "KEPULAUAN RIAU": "Sumatera",
    "DKI JAKARTA": "Jawa", "JAWA BARAT": "Jawa", "JAWA TENGAH": "Jawa",
    "DI YOGYAKARTA": "Jawa", "JAWA TIMUR": "Jawa", "BANTEN": "Jawa",
    "BALI": "Bali & Nusa Tenggara", "NUSA TENGGARA BARAT": "Bali & Nusa Tenggara",
    "NUSA TENGGARA TIMUR": "Bali & Nusa Tenggara",
    "KALIMANTAN BARAT": "Kalimantan", "KALIMANTAN TENGAH": "Kalimantan",
    "KALIMANTAN SELATAN": "Kalimantan", "KALIMANTAN TIMUR": "Kalimantan",
    "KALIMANTAN UTARA": "Kalimantan",
    "SULAWESI UTARA": "Sulawesi", "SULAWESI TENGAH": "Sulawesi",
    "SULAWESI SELATAN": "Sulawesi", "SULAWESI TENGGARA": "Sulawesi",
    "GORONTALO": "Sulawesi", "SULAWESI BARAT": "Sulawesi",
    "MALUKU": "Maluku & Papua", "MALUKU UTARA": "Maluku & Papua",
    "PAPUA": "Maluku & Papua", "PAPUA BARAT": "Maluku & Papua",
    "PAPUA BARAT DAYA": "Maluku & Papua", "PAPUA SELATAN": "Maluku & Papua",
    "PAPUA TENGAH": "Maluku & Papua", "PAPUA PEGUNUNGAN": "Maluku & Papua",
}

def title_id(s: str) -> str:
    """Judul ala Indonesia; pertahankan garis hubung & singkatan resmi."""
    minor = {"dan", "di", "ke", "dari"}
    words = []
    for w in s.split():
        if w.lower() in minor and words:
            words.append(w.lower())
        else:
            words.append(w.capitalize())
    return " ".join(words)

def norm_kota(raw: str):
    """KAB. X -> (Kabupaten X, kabupaten); KOTA X -> (Kota X, kota); KOTA ADM. X -> (X, kota)."""
    s = raw.strip()
    up = s.upper()
    if up.startswith("KOTA ADM."):
        return title_id(s[9:].title().lower().replace("  ", " ")), "kota"
    if up.startswith("KOTA"):
        return "Kota " + title_id(s[4:].strip().lower()), "kota"
    if up.startswith("KAB."):
        body = s[4:].strip().lower()
        body = re.sub(r"^kep\.\s*", "kepulauan ", body)
        return "Kabupaten " + title_id(body), "kabupaten"
    # fallback
    return title_id(s.lower()), "kabupaten"

def slugify(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")

def main():
    prov_raw = json.loads((SRC / "provinsi/provinsi.json").read_text(encoding="utf-8"))
    assert isinstance(prov_raw, dict), "provinsi.json bukan dict"
    provinsi = []
    for kode, nama_up in sorted(prov_raw.items(), key=lambda kv: int(kv[0])):
        nama = title_id(nama_up.strip().lower())
        # penyesuaian nama resmi
        nama = {"Dki Jakarta": "DKI Jakarta", "Di Yogyakarta": "DI Yogyakarta"}.get(nama, nama)
        assert nama_up.strip() in REGION, f"Provinsi tak terpetakan: {nama_up}"
        provinsi.append({"kode": kode, "nama": nama, "slug": slugify(nama), "kawasan": REGION[nama_up.strip()]})

    kota = []
    for p in provinsi:
        f = SRC / f"kabupaten_kota/kab-{p['kode']}.json"
        reg = json.loads(f.read_text(encoding="utf-8"))
        for _kode, raw_nama in sorted(reg.items(), key=lambda kv: int(kv[0])):
            nama, tipe = norm_kota(raw_nama)
            kota.append({"nama": nama, "slug": slugify(nama), "provinsi": p["nama"],
                         "provinsiSlug": p["slug"], "tipe": tipe})

    # ── Validasi keras ──
    assert len(provinsi) == 38, f"provinsi = {len(provinsi)}"
    assert len(kota) == 514, f"kota = {len(kota)}"
    slugs = [k["slug"] for k in kota]
    assert len(set(slugs)) == len(slugs), "slug kota duplikat"
    pslugs = [p["slug"] for p in provinsi]
    assert len(set(pslugs)) == 38, "slug provinsi duplikat"

    def has(prov_kode, frag):
        f = (SRC / f"kabupaten_kota/kab-{prov_kode}.json").read_text(encoding="utf-8").upper()
        return frag in f

    assert has("96", "MIMIKA"), "Mimika bukan di Papua Tengah (96)"
    assert has("97", "JAYAWIJAYA"), "Jayawijaya bukan di Papua Pegunungan (97)"
    assert has("95", "MERAUKE"), "Merauke bukan di Papua Selatan (95)"
    assert has("92", "RAJA AMPAT"), "Raja Ampat bukan di Papua Barat Daya (92)"
    assert has("91", "MANOKWARI"), "Manokwari bukan di Papua Barat (91)"
    assert not (SRC / "kabupaten_kota/kab-93.json").exists(), "kode 93 seharusnya tak ada"
    n_kota_tipe = sum(1 for k in kota if k["tipe"] == "kota")
    n_kab_tipe = sum(1 for k in kota if k["tipe"] == "kabupaten")
    print(f"VALID ✓  provinsi=38, kota/kab=514 (kota={n_kota_tipe}, kabupaten={n_kab_tipe})")

    kota.sort(key=lambda k: (k["provinsi"], k["tipe"], k["nama"]))

    # ── Generate TypeScript ──
    lines = []
    lines.append("/**")
    lines.append(" * Data wilayah administratif Indonesia (38 provinsi, 514 kabupaten/kota).")
    lines.append(" * Sumber: dataset IndoArea 19-04-2024 — github.com/hanifabd/wilayah-indonesia-area")
    lines.append(" * (dihimpun dari BPS & Kemendagri); diverifikasi jumlah & spot-check provinsi")
    lines.append(" * pemekaran Papua saat generate. Digenerate oleh scripts/fetch-wilayah.py.")
    lines.append(" */")
    lines.append("")
    lines.append('export type TipeKota = "kota" | "kabupaten";')
    lines.append("")
    lines.append("export interface ProvinsiWilayah {")
    lines.append("  nama: string;")
    lines.append("  slug: string;")
    lines.append("  kawasan: string;")
    lines.append("}")
    lines.append("")
    lines.append("export interface KotaWilayah {")
    lines.append("  nama: string;")
    lines.append("  slug: string;")
    lines.append("  provinsi: string;")
    lines.append("  provinsiSlug: string;")
    lines.append("  tipe: TipeKota;")
    lines.append("}")
    lines.append("")
    lines.append("export const PROVINSI_WILAYAH: ProvinsiWilayah[] = [")
    for p in sorted(provinsi, key=lambda x: x["nama"]):
        lines.append(f'  {{ nama: "{p["nama"]}", slug: "{p["slug"]}", kawasan: "{p["kawasan"]}" }},')
    lines.append("];")
    lines.append("")
    lines.append("export const KOTA_WILAYAH: KotaWilayah[] = [")
    for k in kota:
        lines.append(
            f'  {{ nama: "{k["nama"]}", slug: "{k["slug"]}", provinsi: "{k["provinsi"]}", '
            f'provinsiSlug: "{k["provinsiSlug"]}", tipe: "{k["tipe"]}" }},'
        )
    lines.append("];")
    lines.append("")
    lines.append("export const KOTA_PER_PROVINSI: Record<string, KotaWilayah[]> = KOTA_WILAYAH.reduce(")
    lines.append("  (acc, k) => {")
    lines.append("    (acc[k.provinsiSlug] ??= []).push(k);")
    lines.append("    return acc;")
    lines.append("  },")
    lines.append("  {} as Record<string, KotaWilayah[]>,")
    lines.append(");")
    lines.append("")
    lines.append("export const PROVINSI_COUNT = PROVINSI_WILAYAH.length; // 38")
    lines.append("export const KOTA_COUNT = KOTA_WILAYAH.length; // 514")
    lines.append("")
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Tulis {OUT} ({OUT.stat().st_size} bytes)")

if __name__ == "__main__":
    main()

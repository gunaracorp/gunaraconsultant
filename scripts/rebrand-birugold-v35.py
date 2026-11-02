#!/usr/bin/env python3
"""
GConsultant v3.5.0 — RESTU IBU: Rebrand Sovereign Green → ROYAL NAVY × IMPERIAL GOLD.

Masukan psikologi warna dari Ibu (pemilik):
  hijau  = keagamaan / daun yang layu        → DIKELUARKAN dari identitas usaha
  biru   = langit, tinggi, laut              → Royal Navy (kepercayaan & ketinggian)
  kuning = smart, matahari, ceria            → diserap keluarga Imperial Gold
  gold   = menang, jaya, kekayaan            → Imperial Gold (kesuksesan klien)
  putih  = cahaya, bersih, suci, damai       → Sacred Ivory (kanvas)

Remap deterministik untuk file teks (CSS/TSX/SVG/MD). Aset biner ditangani
scripts/rebrand-assets-v35.js (sharp) dan scripts/recolor-blog-v35.py (PIL).
Hijau WhatsApp resmi #25d366 SENGAJA dipertahankan (warna platform, bukan brand).
"""
import re
from pathlib import Path

ROOT = Path("/home/z/my-project")

# ---------- Palet lama → baru (dengan '#') ----------
HEX = {
    "#0f241d": "#0a1b3d",  # Deep Forest        → Deep Royal Navy
    "#12352b": "#16345f",  # tile gradient atas → Royal Navy Tile
    "#143528": "#132c55",  # Deep Forest soft   → Royal Navy Soft
    "#073b2e": "#0d2e6b",  # Sovereign Green    → Sovereign Navy
    "#0f3527": "#102a52",  # dark secondary     → Navy Shadow
    "#0a4f38": "#16345f",  # capsule mid green  → Royal Mid
    "#c6a15b": "#d4af37",  # Antique Gold       → Imperial Gold
    "#e5c97a": "#eed88a",  # Illuminated Gold   → Illuminated Gold (terang)
    "#9a742f": "#a67c1e",  # Deep Gold          → Deep Gold (hangat)
    "#f6f1e4": "#f7f5ee",  # Legacy Cream       → Sacred Ivory
    "#f5f0e6": "#f7f5ee",  # cream README       → Sacred Ivory
    "#cfe3d4": "#d6e4f7",  # Clarity Green      → Clarity Sky
    "#ede7d6": "#eae9df",  # muted latar        → Pearl Muted
    "#4d5c52": "#4c5872",  # muted-fg hijau     → Navy Gray
    "#111815": "#101828",  # ink hijau          → Navy Ink
    "#26332d": "#24344d",  # charcoal hijau     → Navy Charcoal
    "#a9c0b0": "#a8bcd8",  # dark muted-fg      → Sky Gray
}

# ---------- rgba() triplet lama → baru (kanal warna saja, alpha dipertahankan) ----------
RGBA = [
    (r"rgba\(7,\s*59,\s*46", "rgba(13, 46, 107"),     # 073b2e → 0d2e6b
    (r"rgba\(198,\s*161,\s*91", "rgba(212, 175, 55"),  # c6a15b → d4af37
    (r"rgba\(15,\s*36,\s*29", "rgba(10, 27, 61"),      # 0f241d → 0a1b3d
]

# ---------- Istilah brand di komentar (hanya globals.css & icon.svg) ----------
WORDS = [
    ("Sovereign Green", "Sovereign Navy"),
    ("Antique Gold", "Imperial Gold"),
    ("Legacy Cream", "Sacred Ivory"),
    ("Deep Forest", "Deep Royal Navy"),
    ("Clarity Green", "Clarity Sky"),
    ("emerald-gold", "gold-navy"),
]

# Hex TANPA '#' (URL shields/capsule/QR di README) — dilindungi lookaround
BARE = [
    "0f241d", "143528", "073b2e", "0a4f38", "c6a15b",
    "e5c97a", "9a742f", "f6f1e4", "f5f0e6", "cfe3d4",
]

FILES = [
    "src/app/globals.css",
    "src/app/layout.tsx",
    "src/app/manifest.ts",
    "src/app/icon.svg",
    "public/logo.svg",
    "public/logo-stacked.svg",
    "public/logo-horizontal.svg",
    "public/logo-mono.svg",
    "src/components/blog-article.tsx",
    "src/components/sections/blog-index.tsx",
    "README.md",
]

def main() -> None:
    grand = 0
    for rel in FILES:
        p = ROOT / rel
        s = p.read_text(encoding="utf-8")
        log = []
        for old, new in HEX.items():
            s, c = re.subn(re.escape(old), new, s, flags=re.IGNORECASE)
            if c:
                log.append(f"{old}→{new}×{c}")
        for pat, rep in RGBA:
            s, c = re.subn(pat, rep, s)
            if c:
                log.append(f"{pat}→{rep}×{c}")
        if rel in ("src/app/globals.css", "src/app/icon.svg"):
            for old, new in WORDS:
                s, c = re.subn(re.escape(old), new, s)
                if c:
                    log.append(f"『{old}』→『{new}』×{c}")
        if rel == "README.md":
            for bare in BARE:
                new = HEX["#" + bare]
                pat = re.compile(rf"(?<![0-9a-fA-F]){bare}(?![0-9a-fA-F])", re.IGNORECASE)
                s, c = pat.subn(new, s)
                if c:
                    log.append(f"{bare}→{new}×{c}")
        if s != p.read_text(encoding="utf-8"):
            p.write_text(s, encoding="utf-8")
        n = len(log)
        grand += n
        print(f"[{'OK ' if n else '—'}] {rel}: {n} jenis penggantian")
        for item in log:
            print(f"      {item}")
    print(f"TOTAL: {grand} jenis penggantian diterapkan")

if __name__ == "__main__":
    main()

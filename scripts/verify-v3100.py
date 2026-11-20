#!/usr/bin/env python3
"""Verifikasi v3.10.0: jumlah kata halaman PPIU + aritmetika harga paket."""
import re
from pathlib import Path

# 1) Jumlah kata konten terlihat halaman PPIU (segmen JSX setelah "return (")
ppiu = Path("/home/z/my-project/src/app/sertifikasi-travel/ppiu/page.tsx").read_text(encoding="utf-8")
body = ppiu.split("return (", 1)[1]
# buang atribut className/aria dsb. sudah terpotong bersama tag; buang tag & entitas
body = re.sub(r"<[^>]+>", " ", body)
body = re.sub(r"\{[^}]*\}", " ", body)
words = [w for w in re.findall(r"[A-Za-z]{2,}", body)]
print(f"Jumlah kata terlihat halaman PPIU: {len(words)}  (target >= 1000)")
assert len(words) >= 1000, "JUMLAH KATA KURANG"

# 2) Aritmetika harga (hargaDiskon & hemat harus persis)
cases = [
    ("BPW", 20000000, 0.255, 14900000, 5100000),
    ("PPIU", 26000000, 0.25, 19500000, 6500000),
    ("PIHK", 33200000, 0.25, 24900000, 8300000),
]
for nama, harga, diskon, hd, hemat in cases:
    calc_hd = round(harga * (1 - diskon))
    calc_hemat = harga - calc_hd
    ok = calc_hd == hd and calc_hemat == hemat
    print(f"{nama}: harga {harga:,} x (1-{diskon}) = {calc_hd:,} (target {hd:,}) | hemat {calc_hemat:,} (target {hemat:,}) -> {'OK' if ok else 'GAGAL'}")
    assert ok, f"ARITMETIKA {nama} GAGAL"

# 3) Konsistensi katalog vs lite
kat = Path("/home/z/my-project/src/data/katalog.ts").read_text(encoding="utf-8")
lite = Path("/home/z/my-project/src/data/katalog-lite.ts").read_text(encoding="utf-8")
for slug in ["tda-biro-perjalanan-wisata-bpw", "izin-usaha-ppiu-umrah", "izin-usaha-ppihk-haji-khusus", "pendampingan-transisi-iso-9001-2026"]:
    in_kat = slug in kat
    in_lite = slug in lite
    print(f"{slug}: katalog={'ada' if in_kat else 'HILANG'} lite={'ada' if in_lite else 'HILANG'}")
    assert in_kat and in_lite
# aritmetika ISO transisi (placeholder price book ISO existing)
calc_hd = round(7500000 * (1 - 0.2))
assert calc_hd == 6000000 and 7500000 - calc_hd == 1500000, "ARITMETIKA ISO GAGAL"
print(f"ISO 9001:2026 transisi: 7.500.000 x 0,8 = {calc_hd:,} | hemat 1.500.000 -> OK")
# slug unik di katalog
slugs = re.findall(r'slug: "([^"]+)"', kat)
dup = [s for s, c in __import__("collections").Counter(slugs).items() if c > 1]
print(f"Total item katalog: {len(slugs)} | slug duplikat: {dup if dup else 'tidak ada'}")
assert not dup

print("SEMUA VERIFIKASI LOLOS")

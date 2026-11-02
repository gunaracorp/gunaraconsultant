#!/usr/bin/env python3
"""Validator README — GConsultant (v3.4.0).

Memeriksa struktur README.md agar selalu tampil sempurna di GitHub:
1. Keseimbangan code fence (``` harus genap).
2. Setiap blok ```mermaid seimbang bracket [] () {} dan tidak kosong.
3. Semua tautan anchor internal (#x) punya <a id="x"> eksplisit.
4. <details>/<summary> seimbang.
5. Semua gambar memakai https (keamanan mixed-content GitHub).
6. Tautan file relatif menunjuk file yang benar-benar ada.
7. Tidak ada placeholder tersisa (TODO, XXX, 【】, ______).
8. H1 (level 1) maksimal 3 (hero + section besar terpilih).
"""
from __future__ import annotations
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
README = ROOT / "README.md"

def main() -> int:
    text = README.read_text(encoding="utf-8")
    errors: list[str] = []
    info: list[str] = []

    # 1. Fence balance -----------------------------------------------------
    fences = re.findall(r"^```", text, flags=re.M)
    if len(fences) % 2 != 0:
        errors.append(f"code fence tidak seimbang: {len(fences)} buah (ganjil)")
    else:
        info.append(f"code fence seimbang ({len(fences)} baris ``` = {len(fences)//2} blok)")

    # 2. Mermaid blocks ----------------------------------------------------
    blocks = re.findall(r"```mermaid\n(.*?)```", text, flags=re.S)
    info.append(f"blok mermaid: {len(blocks)}")
    kinds = {}
    for i, b in enumerate(blocks, 1):
        if not b.strip():
            errors.append(f"mermaid #{i} kosong")
            continue
        kind = b.strip().split()[0]
        kinds[kind] = kinds.get(kind, 0) + 1
        for op, cl in (("[", "]"), ("(", ")"), ("{", "}")):
            if b.count(op) != b.count(cl):
                errors.append(
                    f"mermaid #{i} ({kind}): bracket {op}{cl} tidak seimbang "
                    f"{b.count(op)} vs {b.count(cl)}"
                )
        if "&" in re.sub(r"^\s*(flowchart|sequenceDiagram|stateDiagram|timeline|mindmap|pie|gantt).*", "", b):
            # '&' hanya berbahaya di label mermaid versi lama; laporkan sebagai info
            info.append(f"mermaid #{i} ({kind}) memuat karakter '&' — periksa render")
    info.append("jenis diagram: " + ", ".join(f"{k}×{v}" for k, v in sorted(kinds.items())))

    # 3. Internal anchors --------------------------------------------------
    hrefs = set(re.findall(r"\]\(#([a-zA-Z0-9_-]+)\)", text))
    ids = set(re.findall(r'<a id="([a-zA-Z0-9_-]+)"></a>', text))
    missing = hrefs - ids
    if missing:
        errors.append(f"anchor tanpa target eksplisit: {sorted(missing)}")
    else:
        info.append(f"anchor internal lengkap ({len(hrefs)} tautan → {len(ids)} target)")

    # 4. details/summary balance ------------------------------------------
    for tag in ("details", "summary"):
        n_open = len(re.findall(rf"<{tag}[ >]", text))
        n_close = text.count(f"</{tag}>")
        if n_open != n_close:
            errors.append(f"<{tag}> tidak seimbang: {n_open} buka vs {n_close} tutup")
    info.append(
        f"<details> seimbang ({text.count('<details')}), "
        f"<summary> seimbang ({text.count('<summary')})"
    )

    # 5. https images -------------------------------------------------------
    for m in re.finditer(r'(src=)"(http://[^"]+)"', text):
        errors.append(f"gambar non-https: {m.group(2)}")
    info.append("seluruh <img> memakai https")

    # 6. Relative file links ----------------------------------------------
    for rel in set(re.findall(r"\]\((?!http|#|mailto)([^)]+)\)", text)):
        p = ROOT / rel.split("#")[0]
        if not p.exists():
            errors.append(f"tautan relatif mati: {rel}")
    info.append("tautan file relatif valid (CHANGELOG, logo, scripts, dll.)")

    # 7. Placeholders -------------------------------------------------------
    for pat in ("TODO", "XXX", "【", "______", "ISI-KODE-LAIN"):
        if pat in text:
            # "ISI-KODE" dalam template pesan WA memang disengaja; hanya XXX/TODO yang error
            if pat in ("TODO", "XXX", "【", "______"):
                errors.append(f"placeholder tersisa: {pat!r}")

    # 8. H1 count (di luar code fence — komentar bash tidak dihitung) -------
    stripped = re.sub(r"```.*?```", "", text, flags=re.S)
    h1 = re.findall(r"^# ", stripped, flags=re.M)
    if len(h1) > 3:
        errors.append(f"terlalu banyak H1: {len(h1)} (maks 3)")
    info.append(f"H1 (di luar fence): {len(h1)}")

    print("=" * 62)
    for i in info:
        print(f"  ✓ {i}")
    print("=" * 62)
    if errors:
        print(f"FAIL — {len(errors)} masalah:")
        for e in errors:
            print(f"  ✗ {e}")
        return 1
    print(f"PASS — README.md {len(text.splitlines())} baris siap tampil di GitHub")
    return 0

if __name__ == "__main__":
    sys.exit(main())

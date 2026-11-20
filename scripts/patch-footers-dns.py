#!/usr/bin/env python3
"""Patch footer docx: instrText PAGE -> ROMAN/arabic per section + hapus pgNumType kosong (toc.md)."""
import re
import shutil
import sys
import zipfile
import tempfile
import os

DOCX = sys.argv[1] if len(sys.argv) > 1 else "/home/z/my-project/download/Panduan-Setup-Email-DNS-GConsultant.docx"

tmp = tempfile.mkdtemp()
with zipfile.ZipFile(DOCX) as z:
    z.extractall(tmp)

doc_path = os.path.join(tmp, "word", "document.xml")
rels_path = os.path.join(tmp, "word", "_rels", "document.xml.rels")
with open(doc_path, encoding="utf-8") as f:
    doc = f.read()
with open(rels_path, encoding="utf-8") as f:
    rels = f.read()

# 1. hapus pgNumType kosong (emisi docx-js, membingungkan WPS)
doc, n_removed = re.subn(r"<w:pgNumType/>", "", doc)

# 2. petakan footerReference -> footerN.xml sesuai urutan sectPr
rid_map = dict(re.findall(r'<Relationship[^>]*Id="([^"]+)"[^>]*Target="(footer\d+\.xml)"', rels))
refs = re.findall(r'<w:footerReference[^>]*w:type="default"[^>]*r:id="([^"]+)"', doc)
footer_files = [rid_map.get(rid) for rid in refs if rid in rid_map]
print("footerReference order:", footer_files)

def patch_footer(fname, fmt):
    p = os.path.join(tmp, "word", fname)
    with open(p, encoding="utf-8") as f:
        xml = f.read()
    xml2, n1 = re.subn(
        r"(<w:instrText[^>]*>)\s*PAGE\s*(</w:instrText>)",
        rf"\1 PAGE \\* {fmt} \\* MERGEFORMAT \2",
        xml,
    )
    xml2, n2 = re.subn(r'(<w:fldSimple[^>]*w:instr=")\s*PAGE\s*(")', rf"\1 PAGE \\* {fmt} \\* MERGEFORMAT \2", xml2)
    with open(p, "w", encoding="utf-8") as f:
        f.write(xml2)
    print(f"{fname}: fmt={fmt} instrText={n1} fldSimple={n2}")

if len(footer_files) >= 2:
    patch_footer(footer_files[0], "ROMAN")   # front matter (TOC)
    patch_footer(footer_files[-1], "arabic")  # body
elif len(footer_files) == 1:
    patch_footer(footer_files[0], "arabic")

with open(doc_path, "w", encoding="utf-8") as f:
    f.write(doc)
print("pgNumType kosong dihapus:", n_removed)

# 3. repack
out_tmp = DOCX + ".tmp"
with zipfile.ZipFile(out_tmp, "w", zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk(tmp):
        for fn in files:
            full = os.path.join(root, fn)
            z.write(full, os.path.relpath(full, tmp))
shutil.move(out_tmp, DOCX)
shutil.rmtree(tmp)
print("OK repacked:", DOCX)

#!/usr/bin/env python3
"""Hapus salinan teks entri #1 di dalam paragraf field TOC (duplikasi placeholder skill docx)."""
import os
import re
import shutil
import sys
import tempfile
import zipfile

DOCX = sys.argv[1] if len(sys.argv) > 1 else "/home/z/my-project/download/Panduan-Setup-Email-DNS-GConsultant.docx"

tmp = tempfile.mkdtemp()
with zipfile.ZipFile(DOCX) as z:
    z.extractall(tmp)

doc_path = os.path.join(tmp, "word", "document.xml")
with open(doc_path, encoding="utf-8") as f:
    xml = f.read()

paras = list(re.finditer(r"<w:p\b[^>]*>.*?</w:p>", xml, re.S))
field_para = None
for m in paras:
    if re.search(r"<w:instrText[^>]*>[^<]*TOC \\h", m.group(0)):
        field_para = m
        break
assert field_para, "paragraf field TOC tidak ditemukan"

g = field_para.group(0)
new_para, n_text = re.subn(r"<w:r>(?:(?!</w:r>).)*?<w:t[^>]*>[^<]*</w:t>(?:(?!</w:r>).)*?</w:r>", "", g, flags=re.S)
new_para, n_tab = re.subn(r"<w:r><w:tab/></w:r>", "", new_para)
assert "fldCharType=\"begin\"" in new_para and "fldCharType=\"separate\"" in new_para, "marker field hilang"
print(f"paragraf field TOC: {n_text} run teks + {n_tab} run tab dihapus; marker field utuh")

xml = xml[: field_para.start()] + new_para + xml[field_para.end():]
with open(doc_path, "w", encoding="utf-8") as f:
    f.write(xml)

out_tmp = DOCX + ".tmp"
with zipfile.ZipFile(out_tmp, "w", zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk(tmp):
        for fn in files:
            full = os.path.join(root, fn)
            z.write(full, os.path.relpath(full, tmp))
shutil.move(out_tmp, DOCX)
shutil.rmtree(tmp)
print("OK:", DOCX)

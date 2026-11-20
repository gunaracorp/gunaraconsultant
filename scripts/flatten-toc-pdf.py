#!/usr/bin/env python3
"""Buat varian TOC-statis (field di-flatten) khusus untuk PDF companion,
lalu konversi ke PDF. File docx utama TIDAK disentuh (field TOC tetap hidup untuk Word)."""
import os
import re
import shutil
import subprocess
import zipfile

SRC = "/home/z/my-project/download/Panduan-Setup-Email-DNS-GConsultant.docx"
VARIANT = "/tmp/panduan-flat.docx"
PDF_OUT = "/home/z/my-project/download/Panduan-Setup-Email-DNS-GConsultant.pdf"

shutil.copy(SRC, VARIANT)

tmp = VARIANT + "_x"
with zipfile.ZipFile(VARIANT) as z:
    z.extractall(tmp)

doc_path = os.path.join(tmp, "word", "document.xml")
with open(doc_path, encoding="utf-8") as f:
    xml = f.read()

runs = list(re.finditer(r"<w:r\b[^>]*>.*?</w:r>", xml, re.S))
toc_idx = next(i for i, m in enumerate(runs) if re.search(r"<w:instrText[^>]*>[^<]*\bTOC\b", m.group(0)))
begin_idx = toc_idx
for j in range(toc_idx - 1, -1, -1):
    if "fldCharType=\"begin\"" in runs[j].group(0):
        begin_idx = j
        break

depth, end_idx, sep_idx = 1, None, None  # depth=1: run begin TOC sudah dihitung
for j in range(begin_idx + 1, len(runs)):
    g = runs[j].group(0)
    # satu run bisa memuat beberapa fldChar (field PAGEREF merged docx-js)
    depth += g.count('fldCharType="begin"') - g.count('fldCharType="end"')
    if depth == 1 and sep_idx is None and 'fldCharType="separate"' in g:
        sep_idx = j
    if depth == 0:
        end_idx = j
        break

assert end_idx is not None and sep_idx is not None, "struktur field TOC tidak terbaca"
remove = sorted({begin_idx, toc_idx, sep_idx, end_idx}, reverse=True)
for i in remove:
    s, e = runs[i].span()
    print("hapus run:", runs[i].group(0)[:110].replace("\n", " "))
    xml = xml[:s] + xml[e:]

# hapus paragraf sisa field TOC yang tak punya teks berarti (PDF statis tidak boleh
# menampilkan baris yatim "1" / baris kosong penanda). Aman global: satu-satunya
# fldChar di document.xml ada di wilayah TOC.
def prune_leftovers(doc):
    n = 0
    out, pos = [], 0
    for m in re.finditer(r"<w:p\b[^>]*>.*?</w:p>", doc, re.S):
        g = m.group(0)
        texts = "".join(re.findall(r"<w:t[^>]*>([^<]*)</w:t>", g))
        style = re.search(r'w:pStyle w:val="(TOC\d)"', g)
        leftovers = ("PAGEREF" in g or "fldChar" in g) or (style and "<w:r>" not in g)
        if leftovers and len(texts.strip()) <= 2:
            out.append(doc[pos : m.start()])
            pos = m.end()
            n += 1
    out.append(doc[pos:])
    return "".join(out), n

xml, n_pruned = prune_leftovers(xml)
print("paragraf sisa field dihapus:", n_pruned)

with open(doc_path, "w", encoding="utf-8") as f:
    f.write(xml)

set_path = os.path.join(tmp, "word", "settings.xml")
with open(set_path, encoding="utf-8") as f:
    sx = f.read()
sx = sx.replace('<w:updateFields w:val="true"/>', "")
with open(set_path, "w", encoding="utf-8") as f:
    f.write(sx)

out_tmp = VARIANT + ".z"
with zipfile.ZipFile(out_tmp, "w", zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk(tmp):
        for fn in files:
            full = os.path.join(root, fn)
            z.write(full, os.path.relpath(full, tmp))
shutil.move(out_tmp, VARIANT)
shutil.rmtree(tmp)

subprocess.run(["soffice", "--headless", "--convert-to", "pdf", VARIANT, "--outdir", "/tmp"], check=True)
shutil.move("/tmp/panduan-flat.pdf", PDF_OUT)
print("OK PDF companion:", PDF_OUT, os.path.getsize(PDF_OUT) // 1024, "KB")

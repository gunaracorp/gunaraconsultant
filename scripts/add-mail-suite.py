#!/usr/bin/env python3
"""v3.9.0 Mail Suite: kunci i18n ID/EN + klausul email legal + tabel README."""
import pathlib

BASE = pathlib.Path("/home/z/my-project")

# ---------- 1. i18n.tsx: sisipkan kunci mail* setelah conEmail (ID & EN) ----------
i18n = BASE / "src/lib/i18n.tsx"
s = i18n.read_text(encoding="utf-8")
assert 'mailTitle: "Email Resmi per Departemen"' not in s, "kunci i18n mail* sudah ada"

id_block = '''  conEmail: "Email Resmi",
  mailTitle: "Email Resmi per Departemen",
  mailSub:
    "Enam kanal resmi di domain kami — pesanmu langsung jatuh ke meja yang tepat, tanpa tersangkut di antrean umum.",
  mailGenT: "Konsultasi & Penawaran",
  mailGenD: "Jalur utama konsultasi, penawaran harga, dan permulaan proyek.",
  mailInfoT: "Informasi & Kerja Sama",
  mailInfoD: "Pertanyaan umum, media, dan peluang kemitraan.",
  mailCsT: "Layanan Pelanggan",
  mailCsD: "Bantuan proses berjalan, status order, dan dokumen klien aktif.",
  mailFinT: "Pembayaran & Konfirmasi",
  mailFinD: "Invoice, bukti transfer, dan verifikasi pembayaran resmi.",
  mailAdmT: "Administrasi & Dokumen",
  mailAdmD: "Surat-menyurat resmi, pengesahan dokumen, dan urusan administratif.",
  mailFouT: "Kantor Pendiri",
  mailFouD: "Hal strategis, kemitraan besar, dan kesempatan eksekutif.",'''

en_block = '''  conEmail: "Official Email",
  mailTitle: "Official Department Emails",
  mailSub:
    "Six official channels on our own domain — your message lands on the right desk, never lost in a general queue.",
  mailGenT: "Consulting & Proposals",
  mailGenD: "Primary channel for consultations, price proposals, and project kick-off.",
  mailInfoT: "Information & Partnerships",
  mailInfoD: "General inquiries, media, and partnership opportunities.",
  mailCsT: "Customer Care",
  mailCsD: "Help for ongoing processes, order status, and active-client documents.",
  mailFinT: "Payments & Confirmation",
  mailFinD: "Invoices, transfer proofs, and official payment verification.",
  mailAdmT: "Administration & Documents",
  mailAdmD: "Official correspondence, document legalization, and administrative matters.",
  mailFouT: "Founder's Office",
  mailFouD: "Strategic matters, major partnerships, and executive opportunities.",'''

assert s.count('  conEmail: "Email Resmi",') == 1
assert s.count('  conEmail: "Official Email",') == 1
s = s.replace('  conEmail: "Email Resmi",', id_block)
s = s.replace('  conEmail: "Official Email",', en_block)
i18n.write_text(s, encoding="utf-8")
print("i18n: kunci mail* ID+EN tersisip (15 kunci x 2 bahasa)")

# ---------- 2. legal.ts: klausul finance@ di seksi anti-penipuan ----------
legal = BASE / "src/data/legal.ts"
s = legal.read_text(encoding="utf-8")
assert "finance@gconsultant.web.id" not in s, "klausul email legal sudah ada"

id_anchor = '"Waspadai penipuan yang mengatasnamakan kami. Verifikasi setiap penawaran melalui nomor WhatsApp resmi +62 813-1651-6524 atau kontak di halaman Kontak sebelum melakukan transfer apa pun.",'
id_add = '\n      "Konfirmasi pembayaran, invoice, dan verifikasi penawaran secara tertulis dilayani melalui email resmi finance@gconsultant.web.id. Seluruh alamat email resmi GConsultant hanya berakhiran @gconsultant.web.id — pesan dari domain lain yang mengatasnamakan kami bukan komunikasi resmi GConsultant.",'
assert s.count(id_anchor) == 1
s = s.replace(id_anchor, id_anchor + id_add)

en_anchor = '"Beware of fraud impersonating us. Verify every offer through the official WhatsApp number +62 813-1651-6524 or the contacts on the Contact page before transferring any funds.",'
en_add = '\n      "Written confirmation of payments, invoices, and offer verification is served via the official email finance@gconsultant.web.id. All official GConsultant email addresses end with @gconsultant.web.id only — messages from other domains impersonating us are not official GConsultant communication.",'
assert s.count(en_anchor) == 1
s = s.replace(en_anchor, en_anchor + en_add)
legal.write_text(s, encoding="utf-8")
print("legal: klausul finance@ ID+EN tersisip di seksi anti-penipuan")

# ---------- 3. README.md: ganti email + tabel 6 kanal ----------
readme = BASE / "README.md"
s = readme.read_text(encoding="utf-8")
assert "halo@gunara.web.id" in s
s = s.replace("halo@gunara.web.id", "halo@gconsultant.web.id")
assert "halo@gunara.web.id" not in s

table = """
**📧 Enam Kanal Email Resmi** — seluruhnya di domain `gconsultant.web.id`:

| Kanal | Untuk |
|---|---|
| [halo@gconsultant.web.id](mailto:halo@gconsultant.web.id) | Konsultasi & penawaran |
| [info@gconsultant.web.id](mailto:info@gconsultant.web.id) | Informasi & kerja sama |
| [cs@gconsultant.web.id](mailto:cs@gconsultant.web.id) | Layanan pelanggan & status order |
| [finance@gconsultant.web.id](mailto:finance@gconsultant.web.id) | Pembayaran, invoice & konfirmasi resmi |
| [admin@gconsultant.web.id](mailto:admin@gconsultant.web.id) | Administrasi & dokumen |
| [gunara@gconsultant.web.id](mailto:gunara@gconsultant.web.id) | Kantor pendiri (eksekutif) |
"""
lines = s.split("\n")
idx = next(i for i, l in enumerate(lines) if "(mailto:halo@gconsultant.web.id)" in l)
lines.insert(idx + 1, table)
readme.write_text("\n".join(lines), encoding="utf-8")
print(f"README: email diganti + tabel 6 kanal tersisip setelah baris {idx+1}")

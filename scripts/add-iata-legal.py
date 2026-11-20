#!/usr/bin/env python3
"""Tambah klausul batasan klaim IATA ke TERMS_BLOCKS di src/data/legal.ts (v3.8.0)."""
import pathlib

p = pathlib.Path("/home/z/my-project/src/data/legal.ts")
src = p.read_text(encoding="utf-8")

assert "Akreditasi IATA" not in src, "klausul IATA sudah ada"

section = '''  {
    h: "5. Layanan Konsultasi Akreditasi IATA — Batasan Klaim",
    hEn: "5. IATA Accreditation Consultancy Services — Claim Limitations",
    p: [
      "Layanan konsultasi akreditasi IATA (GoLite, GoStandard, GoGlobal) adalah jasa konsultansi independen dan pendampingan administrasi — bukan tarif resmi IATA dan bukan jaminan persetujuan. GConsultant bukan afiliasi, kantor cabang, maupun agen resmi IATA. IATA memegang kewenangan penuh atas evaluasi kelayakan, persyaratan, financial security, dan keputusan akreditasi; jumlah financial security ditetapkan oleh IATA sesuai profil pemohon.",
      "Seluruh biaya resmi IATA dan pihak ketiga — application fee, annual fee, financial security, audit, notaris, terjemahan tersumpah, biaya bank, dan pajak — berada di luar jasa konsultasi kami dan dinyatakan terpisah dalam quotation. Harga promo berlaku sesuai periode yang diumumkan dan dapat berubah dengan pemberitahuan.",
    ],
    pEn: [
      "The IATA accreditation consultancy services (GoLite, GoStandard, GoGlobal) are independent consultancy and administrative assistance services — not official IATA fees and not an approval guarantee. GConsultant is not an affiliate, branch office, or official agent of IATA. IATA retains full authority over eligibility evaluation, requirements, financial security, and accreditation decisions; the financial security amount is set by IATA according to the applicant profile.",
      "All official IATA and third-party fees — application fee, annual fee, financial security, audit, notary, sworn translation, bank charges, and taxes — are outside our consultancy fee and stated separately in the quotation. Promo prices apply for the announced period and may change with notice.",
    ],
  },
];
'''

# sisip sebelum penutup array TERMS_BLOCKS (]; terakhir di file)
assert src.rstrip().endswith("];")
idx = src.rstrip().rfind("];")
src = src[:idx] + section + src[idx + len("];"):]
p.write_text(src, encoding="utf-8")
print("klausul IATA ditambahkan; TERMS_BLOCKS sekarang 5 seksi")

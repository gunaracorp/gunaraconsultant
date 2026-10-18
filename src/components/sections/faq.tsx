"use client";

import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";
import { BRAND } from "@/lib/brand";

export function Faq() {
  const { t } = useLang();

  const faqs = [
    {
      q: "Apakah konsultasi awal benar-benar gratis?",
      a: "Ya, 100% gratis tanpa komitmen. Anda cukup menghubungi WhatsApp resmi kami, ceritakan rencana bisnis, dan tim kami memetakan perizinan yang Anda butuhkan beserta estimasi biaya dan waktunya. Baru setelah Anda setuju dengan penawaran, kontrak dibuat.",
    },
    {
      q: "Apakah Gunara Consultant legal dan tepercaya?",
      a: "Gunara Consultant berbadan usaha resmi terdaftar di Kemenkumham RI (AHU-038293.AH.01.30.Tahun 2024) dengan sistem mutu tersertifikasi ISO 9001:2015. Kami berakar dari perusahaan konsultan ternama dunia Mic Kinsey sejak 2009. Seluruh proses dilakukan melalui jalur resmi pemerintah — tanpa jalan pintas ilegal.",
    },
    {
      q: "Ke rekening mana pembayaran harus ditransfer?",
      a: `Pembayaran HANYA ke rekening resmi satu-satunya kami: ${BRAND.bank.name} ${BRAND.bank.account} a.n. ${BRAND.bank.holder}. Kami tidak pernah meminta transfer ke rekening lain. Bila ada pihak meminta pembayaran ke rekening berbeda, itu penipuan — laporkan segera ke kami.`,
    },
    {
      q: "Berapa lama proses pengurusan perizinan?",
      a: "Tergantung jenis perizinan: NIB 1–3 hari, pendirian PT 5–10 hari kerja, izin edar BPOM 1–4 bulan, hingga AMDAL 3–12 bulan. Setiap halaman layanan kami mencantumkan estimasi waktu yang jujur. Timeline terperinci diberikan sebelum kontrak.",
    },
    {
      q: "Apakah dokumen bisnis saya aman?",
      a: "Sangat aman. Seluruh dokumen klien disimpan dalam sistem arsip digital yang aksesnya terbatas pada tim penanganan, dikelola sesuai standar mutu ISO 9001:2015, dan dihancurkan atas permintaan klien setelah selesai.",
    },
    {
      q: "Bagaimana jika perizinan ditolak?",
      a: "Bila penolakan terjadi bukan karena kelalaian atau dokumen klien, kami memproses ulang TANPA biaya tambahan sesuai garansi kontrak. Selama 15+ tahun, tingkat keberhasilan kami 98% karena setiap berkas diperiksa dua kali sebelum masuk ke instansi.",
    },
    {
      q: "Apakah melayani di luar Tasikmalaya/Jawa Barat?",
      a: "Ya! Kami melayani seluruh 38 provinsi Indonesia — dari Aceh sampai Papua Pegunungan, termasuk provinsi pemekaran Papua. Banyak proses kini bisa online (OSS, SIMBG, e-Mol), dan untuk yang membutuhkan kehadiran fisik, tim ahli daerah kami yang turun tangan.",
    },
    {
      q: "Saya UMKM kecil, apakah cocok pakai jasa konsultan?",
      a: "Justru UMKM paling kami utamakan. Salah pilih KBLI atau izin bisa merugikan waktu dan biaya Anda jauh lebih besar. Kami punya paket khusus UMKM dengan harga ramah — mulai PIRT, sertifikat halal bersubsidi, hingga NIB gratis-konsultasi.",
    },
  ];

  return (
    <section id="faq" className="bg-muted/40 py-20 sm:py-28" aria-label="Pertanyaan yang sering diajukan">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("faqKicker")} title={t("faqTitle")} />

        <Reveal delay={0.15} className="mt-12">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="card-lux group rounded-2xl px-6"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[15px] font-bold text-ink transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

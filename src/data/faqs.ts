import { BRAND } from "@/lib/brand";

/**
 * Data FAQ utama — modul murni (tanpa "use client") agar bisa dipakai
 * baik oleh komponen client maupun server component untuk JSON-LD.
 */
export const FAQS = [
  {
    q: "Apakah konsultasi awal benar-benar gratis?",
    a: "Ya, 100% gratis tanpa komitmen. Anda cukup menghubungi WhatsApp resmi kami, ceritakan rencana bisnis, dan tim kami memetakan perizinan yang Anda butuhkan beserta estimasi biaya dan waktunya. Baru setelah Anda setuju dengan penawaran, kontrak dibuat.",
  },
  {
    q: "Apakah GConsultant legal dan tepercaya?",
    a: "GConsultant berbadan usaha resmi terdaftar di Kemenkumham RI (AHU-038293.AH.01.30.Tahun 2024) dengan sistem mutu tersertifikasi ISO 9001:2015. Kami berakar dari perusahaan konsultan ternama dunia Mic Kinsey sejak 2009. Seluruh proses dilakukan melalui jalur resmi pemerintah — tanpa jalan pintas ilegal.",
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

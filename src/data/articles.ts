/**
 * Artikel & Panduan SEO — konten mendalam server-rendered (Task 6).
 * Target kata kunci long-tail pencarian Google perizinan Indonesia.
 */

export interface ArticleSection {
  h: string;
  p: string[];
  list?: string[];
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  keyword: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "cara-mendirikan-pt-2025",
    title: "Cara Mendirikan PT 2025: Panduan Lengkap dari Akta Notaris hingga NIB",
    keyword: "cara mendirikan PT",
    excerpt:
      "Perseroan Terbatas adalah badan hukum paling dipercaya investor. Panduan langkah demi langkah: syarat pendiri, biaya realistis, timeline 1–3 hari, hingga NIB aktif di OSS-RBA.",
    date: "2026-01-15",
    readTime: "8 menit",
    category: "Badan Usaha",
    sections: [
      {
        h: "Mengapa PT menjadi pilihan utama?",
        p: [
          "Perseroan Terbatas (PT) adalah satu-satunya bentuk badan usaha yang sepenuhnya diakui pasar modal, perbankan, dan investor asing. Tanggung jawab pemegang saham terbatas pada modal disetor — aset pribadi terpisah dari aset perusahaan. Untuk tender pemerintah, ekspor-impor, hingga pendanaan venture capital, status PT hampir selalu menjadi syarat wajib.",
          "Sejak sistem AHU Online dan OSS-RBA berjalan, pendirian PT yang dulu memakan waktu berminggu-minggu kini bisa selesai 1–3 hari kerja — asal dokumen dan urutan prosesnya benar.",
        ],
      },
      {
        h: "Syarat dan dokumen yang harus disiapkan",
        p: [
          "Pendirian PT membutuhkan minimal dua pendiri (orang atau badan hukum), nama perseroan yang tersedia di sistem Kemenkumham, bidang usaha sesuai KBLI 2020, dan modal dasar sesuai kebutuhan bisnis. Dokumen intinya:",
        ],
        list: [
          "KTP & NPWP seluruh pendiri, direksi, dan komisaris",
          "Tempat & surat pernyataan kesediaan sebagai pemegang saham",
          "Daftar bidang usaha (KBLI) dan rencana modal dasar",
          "Alamat kantor: sewa, milik sendiri, atau virtual office terdaftar",
          "Nama PT: minimal 3 pilihan untuk reservasi nama",
        ],
      },
      {
        h: "Alur proses: dari reservasi nama hingga NIB",
        p: [
          "Alur standarnya lima tahap: reservasi nama perseroan di AHU Online, penyusunan akta pendirian oleh notaris (termasuk anggaran dasar dan KBLI), pengesahan SK Menkumham (umumnya 1 hari kerja), penerbitan NPWP badan, dan terakhir aktivitas NIB di OSS-RBA beserta perizinan berusaha sesuai tingkat risiko KBLI Anda.",
          "Perhatikan: PT dengan pemegang saham asing (PT PMA) mengikuti aturan tambahan — modal disetor minimal Rp10 miliar per KBLI dan daftar positif investasi. Struktur ini sebaiknya dirancang bersama konsultan sebelum akta dibuat, karena perubahan anggaran dasar setelah berdiri memakan waktu dan biaya lebih besar.",
        ],
      },
      {
        h: "Kesalahan yang paling sering terjadi",
        p: [
          "Tiga kesalahan terbanyak: memilih KBLI asal lengkap tanpa memahami tingkat risikonya (ada KBLI yang menuntut izin teknis tertentu), modal dasar terlalu besar sehingga kewajiban pajak dan legalisasi membengkak, dan alamat kantor tidak sesuai zonasi tata ruang sehingga NIB ditolak saat verifikasi. Semua ini bisa dihindari dengan pendampingan yang benar sejak awal — itulah mengapa tim Gunara Consultant selalu memulai dari pemetaan KBLI gratis sebelum akta dibuat.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "panduan-nib-oss-rba",
    title: "NIB & OSS-RBA: Memahami Perizinan Berusaha Berbasis Risiko",
    keyword: "NIB OSS-RBA",
    excerpt:
      "Sejak PP 5/2021, satu NIB menggantikan SIUP dan banyak izin lain. Pahami tingkat risiko rendah–tinggi, sertifikat standar, dan verifikasi kesesuaian agar usaha Anda legal sejak hari pertama.",
    date: "2026-01-20",
    readTime: "9 menit",
    category: "OSS-RBA",
    sections: [
      {
        h: "Apa itu NIB dan mengapa penting?",
        p: [
          "Nomor Induk Berusaha (NIB) adalah identitas resmi usaha yang diterbitkan melalui OSS-RBA (Risk-Based Approach) sejak Agustus 2021. NIB sekaligus berfungsi sebagai SIUP, izin impor identitas, registrasi kepabeanan, dan akses ke fasilitas pemerintah lainnya — satu nomor untuk banyak fungsi.",
          "NIB terbit gratis, tanpa PNBP, dan untuk usaha mikro-risiko rendah dapat terbit dalam hitungan jam setelah data diri dan KBLI lengkap.",
        ],
      },
      {
        h: "Empat tingkat risiko dan kewajibannya",
        p: [
          "PP 5/2021 mengklasifikasikan setiap KBLI ke dalam empat tingkat risiko. Kewajiban perizinan berbeda di tiap tingkat:",
        ],
        list: [
          "Risiko rendah: cukup NIB — bisnis langsung boleh beroperasi",
          "Risiko menengah rendah: NIB + Sertifikat Standar (self-declaration)",
          "Risiko menengah tinggi: NIB + Sertifikat Standar dengan verifikasi dokumen teknis",
          "Risiko tinggi: NIB + Izin (Persetujuan) dari kementerian teknis, biasanya dengan inspeksi lapangan",
        ],
      },
      {
        h: "Kesalahan umum dan konsekuensinya",
        p: [
          "Banyak pelaku usaha merasa 'selesai' setelah NIB terbit — padahal untuk KBLI menengah dan tinggi, izin berusaha belum sah tanpa sertifikat standar atau persetujuan teknis. Mengoperasikan usaha tanpa dokumen tersebut berisiko sanksi administratif berupa teguran, denda, hingga pembekuan kegiatan usaha.",
          "Jebakan kedua: memilih KBLI yang tidak sesuai aktivitas nyata. Saat audit, penyesuaian KBLI retroaktif jauh lebih menyulitkan daripada memetakan dengan benar sejak awal.",
        ],
      },
      {
        h: "Checklist sebelum mengurus NIB",
        p: [
          "Pastikan enam hal sebelum login OSS: profil pajak aktif, alamat sesuai zonasi, KBLI sudah dipetakan beserta tingkat risikonya, modal dan skala usaha ditentukan, dokumen pendukung (bila KBLI menengah/tinggi) tersedia, dan pemahaman kewajiban pasca-terbit seperti laporan kegiatan usaha (LKPM). Gunakan katalog 600+ layanan Gunara Consultant untuk mencari izin spesifik KBLI Anda — lengkap dengan dasar hukumnya.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "sertifikasi-halal-bpjph",
    title: "Sertifikasi Halal BPJPH: Syarat, Biaya, dan Alur Terbaru",
    keyword: "sertifikasi halal bpjph",
    excerpt:
      "Sertifikat halal kini kewajiban hukum bagi produk pangan, minuman, kosmetik, hingga obat. Kenali jalur reguler, seger, self-declare gratis, dan cara mempersiapkan audit halal yang lolos sekali jalan.",
    date: "2026-02-01",
    readTime: "7 menit",
    category: "Pangan & Halal",
    sections: [
      {
        h: "Kewajiban hukum sertifikasi halal",
        p: [
          "UU 33/2014 tentang Jaminan Produk Halal dan PP 39/2021 mewajibkan produk yang masuk, beredar, dan diperdagangkan di Indonesia bersertifikat halal — dimulai dari pangan-minuman, lalu berlanjut ke obat, kosmetik, dan bahan tambahan pangan. Batas waktu kewajiban berlaku bertahap; pelaku usaha yang menunda menghadapi risiko sanksi administratif sekaligus tertinggal dari pasar ritel modern yang menuntut label halal sebagai syarat masuk.",
        ],
      },
      {
        h: "Tiga jalur sertifikasi",
        p: [
          "BPJPH menyediakan tiga jalur: Reguler (untuk pelaku usaha besar, melalui Lembaga Pemeriksa Halal), Jalur Seger (pendirian sendiri untuk produsen berbadan usaha), dan Self-Declare (gratis, untuk UMKM mikro-kecil melalui pendamping P3H). Jalur yang tepat tergantung skala usaha, jumlah produk, dan kesiapan sistem jaminan produk halal (SJPH) Anda.",
        ],
        list: [
          "Reguler: audit oleh LPH resmi, cocok untuk industri skala besar",
          "Jalur Seger: sertifikasi sendiri terprodusen, lebih cepat dan hemat",
          "Self-Declare: gratis untuk UMKM via pendamping — sertifikat 6 bulan pertama",
        ],
      },
      {
        h: "Dokumen dan sistem yang harus disiapkan",
        p: [
          "Inti audit halal adalah memastikan seluruh rantai produksi terbebas dari bahan non-halal dan kontaminasi. Siapkan: daftar lengkap bahan beserta dokumen halal pemasok, diagram alur produksi, SOP pencucian peralatan, kondisi gudang, personel pengawas halal, dan manual SJPH. Sebagian besar penolakan atau audit ulang terjadi karena dokumen bahan tidak lengkap — bukan karena produknya memang non-halal.",
        ],
      },
      {
        h: "Berapa lama dan berapa biaya?",
        p: [
          "Alur umum: pendaftaran di SIHALAL, verifikasi kelengkapan (1–3 hari), penunjukan auditor, audit fasilitas, sidang Fatwa MUI (komisi audit), hingga penerbitan sertifikat. Total 14–30 hari untuk jalur cepat. Biaya bervariasi sesuai jumlah produk dan lokasi — namun UMKM mikro-kecil dapat GRATIS melalui self-declare bantuan pemerintah. Tim Gunara Consultant membantu memilih jalur termurah yang sah untuk kondisi usaha Anda.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "pbg-dan-slf-perbedaan",
    title: "PBG dan SLF: Perbedaan, Syarat, dan Cara Mengurusnya",
    keyword: "PBG dan SLF",
    excerpt:
      "PBG menjamin bangunan dibangun sesuai rencana; SLF menjamin bangunan layak difungsikan. Keduanya wajib — dan tanpa keduanya, aset Anda tidak bisa dipakai penuh, dijual, atau diaudit.",
    date: "2026-02-10",
    readTime: "6 menit",
    category: "Konstruksi & Properti",
    sections: [
      {
        h: "Dua dokumen, dua fungsi berbeda",
        p: [
          "PBG (Persetujuan Bangunan Gedung) — penerus IMB sejak UU Cipta Kerja — adalah izin untuk membangun/merenovasi bangunan, diterbitkan sebelum konstruksi. SLF (Sertifikat Laik Fungsi) diterbitkan setelah bangunan selesai, menegaskan bangunan layak digunakan sesuai fungsinya. Sederhananya: PBG untuk membangun, SLF untuk menggunakan.",
          "Tanpa SLF, bangunan tidak dapat memperoleh layanan tertentu: penerbitan perizinan usaha yang menuntut bukti bangunan laik fungsi, kepesertaan pembiayaan, audit kepatuhan korporat, hingga jual beli resmi.",
        ],
      },
      {
        h: "Syarat dan alur PBG via SIMBG",
        p: [
          "PBG diajukan online melalui SIMBG dengan dokumen: bukti hak atas tanah (SHM/HGB), gambar teknis arsitektur-struktur-MEP sesuai standar, gambar tapak pada peta zonasi tata ruang, serta rencana teknis keterbukaan ruang hijau dan parkir. Kesesuaian zonasi adalah titik gagal nomor satu — bangunan megah sekalipun tidak akan lolos bila zonasi lahan tidak sesuai fungsinya.",
        ],
      },
      {
        h: "SLF: dua jenis dan syaratnya",
        p: [
          "SLF terbagi dua: SLF Baru (untuk bangunan yang punya PBG dan telah selesai dibangun, diajukan paling lama satu tahun setelah selesai) dan SLF Eksisting (untuk bangunan tua tanpa PBG lengkap — dinilai melalui penilaian teknis kondisi bangunan saat ini oleh tim teknis daerah). Untuk gedung komersial, penilaian meliputi struktur, utilitas, aksesibilitas difabel, dan sistem penanggulangan kebakaran.",
        ],
      },
      {
        h: "Tips praktis agar tidak berputar-putar",
        p: [
          "Empat hal yang mempercepat proses: pastikan gambar dibuat tenaga ahli bersertifikat (SKA/SKT), cek zonasi melalui rencana tata ruang daerah sebelum membeli tanah, jangan mengubah desain saat konstruksi tanpa revisi PBG, dan siapkan berita acara serah terima pekerjaan serta dokumen komponen bangunan untuk SLF. Gunara Consultant menangani keduanya — termasuk kasus sulit seperti SLF purna untuk gedung eksisting tanpa dokumen.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "kitas-investor-asing",
    title: "KITAS Investor: Cara Investor Asing Tinggal & Berbisnis di Indonesia",
    keyword: "KITAS investor",
    excerpt:
      "Investor asing pemegang saham PT PMA berhak atas izin tinggal jangka panjang. Pahami indeks KITAS, syarat modal investasi, dan perbedaannya dengan KITAS kerja agar status hukum Anda aman.",
    date: "2026-02-18",
    readTime: "7 menit",
    category: "Imigrasi & Investasi",
    sections: [
      {
        h: "Kenapa KITAS Investor berbeda dari KITAS kerja?",
        p: [
          "KITAS (Kartu Izin Tinggal Terbatas) investor diberikan kepada warga negara asing yang menjadi pemegang saham atau direksi PT PMA — bukan kepada pekerja biasa. Keunggulannya: tidak memerlukan RPTKA (rencana penggunaan tenaga kerja asing) dan DPKK sebesar KITAS kerja, karena dasarnya adalah komitmen investasi, bukan pekerjaan teknis.",
          "Dasar hukumnya mengacu pada ketentuan keimigrasian dan kebijakan investasi: investor dengan investasi tercatat aktif di BKPM/OSS dapat mengajukan KITAS indeks investasi, dengan masa tinggal hingga dua tahun per periode dan dapat diperpanjang.",
        ],
      },
      {
        h: "Syarat inti dan dokumen yang diminta imigrasi",
        p: [
          "Syarat utamanya bukti status Anda dalam perseroan dan keberadaan investasi nyata:",
        ],
        list: [
          "Akta pendirian & SK Kemenkumham PT PMA a.n. sang investor",
          "NIB dan perizinan berusaha yang aktif di OSS-RBA",
          "Bukti penempatan/penyetoran modal sesuai perseroan (rekening korporat)",
          "Surat rekomendasi/penjamin dari perseroan",
          "Paspor sah, pas foto, dan alamat tinggal di Indonesia",
        ],
      },
      {
        h: "Jalur pengajuan dan ketentuan penting",
        p: [
          "Prosesnya: pengajuan izin tinggal (biasanya melalui e-visa indeks investasi untuk masuk), lapor ke kantor imigrasi setempat untuk penerbitan KITAS, lalu laporan domisili ke kepolisian. KITAS investor boleh bekerja dalam kapasitas kepengurusan perseroan — namun tidak boleh mengambil pekerjaan yang dilarang untuk WNA. Pelanggaran status (misalnya mengurus bisnis orang lain di luar perseroan) berisiko pengusiran.",
          "Untuk investor jangka panjang, tersedia KITAP investor setelah memenuhi masa tinggal dan ketentuan lebih lanjut. Perencanaan struktur — berapa saham, kapan pencairan modal, siapa direksi — sebaiknya disatukan dengan pendirian PMA agar izin tinggal tidak menggantung.",
        ],
      },
      {
        h: "Kesalahan yang berujung deportasi",
        p: [
          "Tiga pola pelanggaran yang paling sering: menggunakan visa turis/visa kunjungan untuk mengurus bisnis rutin, bekerja di luar perseroan yang mensponsori, dan tidak melakukan laporan berkala imigrasi. Semua ini bisa dicegah dengan perencanaan status yang benar sejak pendirian PMA — layanan Gunara Consultant menyatukan pendirian badan usaha, perizinan OSS, dan KITAS investor dalam satu alur.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "amdal-ukl-upl-persetujuan-lingkungan",
    title: "AMDAL, UKL-UPL & Persetujuan Lingkungan: Mana yang Wajib untuk Usaha Anda?",
    keyword: "amdal ukl upl perbedaan",
    excerpt:
      "Sebelum pabrik, tambang, hotel, atau RPP berdiri, dokumen lingkungan harus jadi. Pahami kapan usaha cukup UKL-UPL dan kapan wajib AMDAL — agar persetujuan lingkungan tidak jadi penghambat investasi.",
    date: "2026-03-01",
    readTime: "8 menit",
    category: "Lingkungan Hidup",
    sections: [
      {
        h: "Persetujuan Lingkungan: pintu masuk perizinan berusaha",
        p: [
          "Sejak PP 22/2021, dokumen lingkungan (AMDAL atau UKL-UPL) menjadi dasar penerbitan Persetujuan Lingkungan — prasyarat bagi sebagian besar perizinan berusaha risiko menengah-tinggi di OSS-RBA. Tanpa persetujuan ini, izin usaha pabrik, tambang, kesehatan, hingga pengembang properti tidak akan terbit.",
          "Jenis dokumen ditentukan oleh dampak usaha — bukan oleh keinginan. Kriteria resmi: keterlibatan proses produksi, luas lahan, jumlah tenaga kerja, dan potensi dampak terhadap lingkungan sekitar.",
        ],
      },
      {
        h: "UKL-UPL: untuk dampak yang tidak signifikan",
        p: [
          "UKL-UPL (Upaya Pengelolaan Lingkungan–Upaya Pemantauan Lingkungan) ditujukan bagi usaha yang dianggap tidak menghasilkan dampak penting — misalnya pabrik kecil, pergudangan, klinik, hotel skala menengah, dan usaha pertanian. Dokumennya lebih ringkas, dibuat dalam bentuk matriks, dan disetujui pada tingkat daerah (atau pusat untuk wilayah tertentu).",
        ],
        list: [
          "Format matriks: komponen dampak vs upaya kelola & pantau",
          "Umumnya disetujui tingkat kabupaten/kota/provinsi",
          "Proses lebih cepat: umumnya berminggu-minggu, bukan bulan",
          "Kewajiban lanjutan: laporan pelaksanaan UKL-UPL berkala",
        ],
      },
      {
        h: "AMDAL: untuk dampak penting",
        p: [
          "AMDAL wajib bagi kegiatan yang menghasilkan dampak penting — industri besar, pertambangan, PLTU, jalan tol, reklamasi, kawasan industri, dan usaha lintas kabupaten/provinsi tertentu. Prosesnya menyeluruh: kerangka acuan (KA-ANDAL), penyusunan ANDAL-RKL-RPL, pengumuman publik, konsultasi masyarakat, hingga sidang penilaian oleh tim ahli. Waktu penyusunan bisa berbulan-bulan — karenanya perencanaan awal sangat menentukan.",
          "Kesalahan klasik: memulai konstruksi sebelum Persetujuan Lingkungan terbit. Konsekuensinya berat — penghentian kegiatan, denda administratif, dan perizinan berusaha tertahan berbulan-bulan.",
        ],
      },
      {
        h: "Strategi praktis pemilik usaha",
        p: [
          "Langkah cerdas: sebelum membeli tanah atau merancang pabrik, jalankan pemetaan KBLI dan cek kriteria dampak — terkadang penyesuaian skala atau desain proses mengubah kewajiban dari AMDAL menjadi UKL-UPL, menghemat waktu berbulan-bulan. Setelah izin terbit, ingat kewajiban berkelanjutan: laporan RKL-RPL/UKL-UPL berkala, SPARING untuk limbah cair (bagi kategori tertentu), dan kepatuhan PROPER bagi perusahaan besar. Tim lingkungan Gunara Consultant menangani seluruh rantai ini — dari kajian awal hingga pelaporan tahunan.",
        ],
      },
    ],
  },
];

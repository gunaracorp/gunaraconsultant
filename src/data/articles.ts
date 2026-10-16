/**
 * Artikel & Panduan SEO — konten mendalam server-rendered (Task 6 + Task 7-a).
 * Target kata kunci long-tail pencarian Google perizinan Indonesia.
 * Tiap artikel membawa label edisi bulanan (edition/editionKey) dan array
 * ARTICLES diurutkan TERBARU DULU agar section #artikel menampilkan
 * edisi bulan terbaru di atas.
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
  /** Label edisi yang tampil di UI, mis. "Edisi Oktober 2026" */
  edition: string;
  /** Kunci edisi untuk pengelompokan, mis. "2026-10" */
  editionKey: string;
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    id: 12,
    slug: "checklist-legalitas-bisnis-baru-2026",
    title: "Checklist Legalitas Bisnis Baru 2026: Izin Wajib dari NIB hingga Sertifikasi",
    keyword: "izin usaha wajib",
    excerpt:
      "Baru memulai usaha di 2026? Ikuti urutan logis legalitas yang benar — badan usaha, NPWP, NIB, izin berusaha, izin teknis, hingga sertifikasi produk — lengkap dengan checklist per tahap dan timeline realistis.",
    date: "2026-10-15",
    readTime: "7 menit",
    category: "Legalitas Usaha",
    edition: "Edisi Oktober 2026",
    editionKey: "2026-10",
    sections: [
      {
        h: "Urutan logis legalitas usaha baru",
        p: [
          "Banyak pelaku usaha gagal bukan karena izinnya sulit, melainkan karena urutannya salah. NIB tidak bisa terbit tanpa profil pajak yang valid, izin berusaha menggantung di NIB, dan sertifikasi produk menuntut badan usaha yang sah. Urutan yang benar membuat seluruh proses ramping dalam hitungan minggu — bukan bulan.",
          "Aturan praktisnya: setiap tahap harus selesai penuh sebelum tahap berikutnya dimulai. Langkah yang dilompati biasanya berakhir pengajuan ditolak dan biaya diulang. Inilah rantai standar yang kami rekomendasikan untuk semua usaha baru di 2026:",
        ],
        list: [
          "Badan usaha: PT (atau perseorangan sesuai skala) — akta pendirian + SK Kemenkumham",
          "NPWP badan dan aktivasi profil pajak",
          "NIB melalui OSS-RBA",
          "Izin berusaha sesuai tingkat risiko KBLI",
          "Izin teknis/sektor: PBG & SLF, higiene sanitasi, BPOM/PIRT, dst.",
          "Sertifikasi produk: halal BPJPH, SNI bila diwajibkan, dan pendaftaran merek",
        ],
      },
      {
        h: "Checklist ringkas per tahap",
        p: [
          "Gunakan daftar ini sebelum menandatangani apa pun — termasuk kontrak sewa kantor. Kesalahan paling mahal bermula dari alamat: pastikan lokasi usaha sesuai zonasi rencana tata ruang sejak awal, karena penyesuaian belakangan memaksa revisi dokumen dari akta hingga NIB.",
          "Simpan seluruh dokumen dalam satu arsip digital terpusat. Saat audit, tender, atau pengajuan kredit bank, kemampuan menunjukkan dokumen berurutan dan lengkap adalah nilai plus yang sering dilupakan pemilik usaha.",
        ],
        list: [
          "Nama PT, KTP & NPWP pendiri, alamat usaha sesuai zonasi",
          "Akta pendirian + SK Kemenkumham (cetak di AHU Online)",
          "NPWP badan aktif sebelum login OSS",
          "NIB: KBLI 5 digit, skala usaha, dan pemilihan TPP di profil pajak",
          "Izin berusaha: Sertifikat Standar (menengah) atau Izin (tinggi)",
          "Izin teknis & sertifikasi: higiene, PBG/SLF, halal, SNI, merek",
        ],
      },
      {
        h: "Timeline realistis yang bisa Anda janjikan",
        p: [
          "Bila dokumen lengkap dan pengajuan tidak bolak-balik, legalitas usaha baru umumnya selesai dalam hitungan minggu — bukan bulan. Perkiraan ini bergeser bila pengajuan pertama tidak lengkap, alamat tidak sesuai zonasi, atau instansi meminta perbaikan dan Anda lambat merespons.",
        ],
        list: [
          "Hari 1–3: akta pendirian, SK Kemenkumham, NPWP, dan NIB aktif",
          "Minggu 1–2: izin berusaha (Sertifikat Standar) untuk KBLI menengah",
          "Minggu 2–6: izin teknis sektor — bergantung instansi dan lokasi",
          "Minggu 2–8: sertifikasi halal (umumnya 14–30 hari); BPOM/PIRT lebih lama",
        ],
      },
      {
        h: "Menghindari biaya siluman",
        p: [
          "Biaya besar sering muncul dari kesalahan kecil di awal: KBLI asal lengkap, modal dasar membengkak, atau alamat salah zonasi sehingga dokumen diganti dua kali. Pungutan juga membengkak bila Anda tidak membedakan biaya resmi dari jasa pendampingan.",
          "Waspadai 'jasa kilat' tanpa jejak hukum: dokumen yang sah selalu dapat diverifikasi di sistem resmi (AHU Online, OSS-RBA, SIHALAL). Bila pihak penengah menolak memberi akses verifikasi, mundurlah sebelum dana terlanjur lepas.",
        ],
        list: [
          "Minta rincian tertulis — pisahkan PNBP resmi dari jasa pendampingan",
          "Modal dasar secukupnya — sebagian pungutan mengikuti nilai modal dasar",
          "Manfaatkan jalur gratis yang sah: NIB tanpa PNBP, self-declare halal untuk UMKM",
          "Alamat sesuai zonasi sejak awal — hindari biaya revisi dan pindah alamat",
        ],
      },
      {
        h: "Konsultasi dulu, urus kemudian",
        p: [
          "Tiga puluh menit konsultasi di awal biasanya menghemat berminggu-minggu proses ulang. Tim hukum Gunara Consultant memulai setiap pendampingan dengan pemetaan KBLI dan risiko — gratis — agar Anda tahu persis izin mana yang wajib sekarang, dan mana yang perlu nanti.",
          "Mulai checklist Anda hari ini: hubungi kami untuk konsultasi gratis dengan tim bersertifikat ISO 9001:2015, atau telusuri katalog 600+ layanan perizinan Gunara Consultant lengkap dengan dasar hukumnya untuk menemukan kebutuhan usaha baru Anda.",
        ],
        list: [
          "Pemetaan KBLI dan tingkat risiko — gratis",
          "Checklist izin spesifik untuk bidang usaha Anda",
          "Estimasi biaya dan timeline yang transparan",
          "Pendampingan hingga izin terbit dan kewajiban pasca-terbit",
        ],
      },
    ],
  },
  {
    id: 11,
    slug: "misa-arab-saudi-ekspansi-gulf",
    title: "MISA Arab Saudi: Panduan Ekspansi Bisnis Indonesia ke Pasar Gulf",
    keyword: "misa arab saudi",
    excerpt:
      "MISA (Ministry of Investment) adalah pintu resmi investasi asing di Arab Saudi. Pahami investment license, commercial registration, sektor menjanjikan Vision 2030, kepatuhan Nitaqat–SABER–SFDA, dan kapan butuh partner lokal.",
    date: "2026-10-05",
    readTime: "8 menit",
    category: "Internasional",
    edition: "Edisi Oktober 2026",
    editionKey: "2026-10",
    sections: [
      {
        h: "Apa itu MISA dan perannya dalam Vision 2030",
        p: [
          "MISA (Ministry of Investment of Saudi Arabia, dahulu SAGIA) adalah kementerian yang mengeluarkan izin bagi investor asing di Arab Saudi — dokumen awal dari segala kegiatan investasi asing di kerajaan itu. Sejak Vision 2030 digulirkan, Arab Saudi membangun ekonomi non-migas dan membuka pintu lebar bagi modal asing.",
          "Bagi bisnis Indonesia, momentum ini nyata: kedua negara saling menjadi mitra strategis di sektor haji, pangan halal, energi, dan konstruksi. Menapaki pasar Saudi dengan entitas resmi — bukan sekadar mengekspor — membuka akses ke kontrak pemerintah, tender megaproyek, dan relung pasar yang tumbuh cepat, sementara kerja sama bilateral yang kian intens membuat jalur kepatuhan kini jauh lebih terpetakan dibanding lima tahun lalu.",
        ],
        list: [
          "NEOM — kota baru dan teknologi di Arab barat laut",
          "Qiddiya & Red Sea — destinasi hiburan dan pariwisata skala dunia",
          "Jaringan logistik hub antara Asia, Afrika, dan Eropa",
          "Target ekonomi non-migas dan wisatawan Vision 2030",
        ],
      },
      {
        h: "Investment License dan Commercial Registration",
        p: [
          "Dua dokumen inti yang wajib Anda pahami sebelum melangkah:",
          "Kabar baiknya: kepemilikan asing 100% kini diizinkan pada sebagian besar sektor tanpa wajib menyertakan mitra lokal — meski sektor tertentu masih membatasi kepemilikan atau menuntut kemitraan. Karena itu tentukan struktur sejak awal: entitas penuh, kantor perwakilan, atau kemitraan distribusi — agar tidak ada pembongkaran struktur di tengah jalan.",
        ],
        list: [
          "Investment License dari MISA — dasar hukum Anda berinvestasi dan mendirikan entitas asing",
          "Commercial Registration (CR) dari Ministry of Commerce — identitas resmi badan usaha di Saudi",
          "Artikel of association serta alamat kantor terdaftar (termasuk opsi kawasan ekonomi khusus)",
          "Modal minimum bervariasi per aktivitas — diverifikasi MISA saat pengajuan",
        ],
      },
      {
        h: "Sektor yang menjanjikan untuk bisnis Indonesia",
        p: [
          "Sektor yang dipilih menentukan seberapa cepat modal kembali. Permintaan Saudi berfokus pada kapasitas dan kualitas yang memang kekuatan banyak perusahaan Indonesia — lima bidang paling menjanjikan:",
        ],
        list: [
          "Konstruksi & material bangunan — menopang megaproyek NEOM, Qiddiya, Red Sea",
          "F&B dan produk pangan halal — kekuatan klasik ekspor Indonesia",
          "Logistik, pergudangan, dan jasa rantai pasok",
          "Teknologi informasi & layanan digital",
          "Pariwisata & hospitality — operator dan penyedia jasa sangat dicari",
        ],
      },
      {
        h: "Kepatuhan pasca-lisensi yang sering diremehkan",
        p: [
          "Mendapat lisensi bukan garis akhir — kewajiban justru mulai berjalan, dan inilah bagian yang paling sering diremehkan investor baru. Lalai pada empat area berikut adalah penyebab denda dan penahanan pengapalan yang paling umum:",
        ],
        list: [
          "Nitaqat (Saudization): rasio karyawan warga Saudi sesuai kategori aktivitas",
          "SABER/SASO: sertifikasi kesesuaian produk sebelum beredar di pasar Saudi",
          "SFDA: registrasi wajib untuk pangan, obat, dan alat kesehatan",
          "ZATCA: registrasi pajak (VAT 15%) dan e-invoicing (fatoora) untuk transaksi",
        ],
      },
      {
        h: "Alur pendirian, durasi, dan kapan butuh partner lokal",
        p: [
          "Lalai pada kepatuhan di atas berdampak nyata: kategori Nitaqat menurun sehingga kuota visa pekerja terpotong, pengapalan barang tertahan tanpa sertifikat SABER, hingga denda ZATCA. Anggarkan penanggung jawab kepatuhan sejak bulan pertama beroperasi — biayanya jauh lebih murah daripada sanksinya.",
          "Alur kira-kira: penyusunan dokumen (akta & legalitas PT Indonesia yang diapostille, paspor pemegang saham, rencana usaha) → investment license MISA (umumnya 1–2 minggu) → commercial registration (1–3 hari setelah lisensi) → registrasi pendukung (GOSI, ZATCA, kamar dagang). Total 2–4 minggu bila dokumen lengkap. Butuh partner lokal? Bila sektor Anda dibatasi kepemilikan, menuntut agen distribusi, atau memerlukan jejaring kontrak pemerintah — alternatifnya mulai dari distributor resmi sebelum mendirikan entitas penuh. Tim Saudi Desk Gunara Consultant membantu menilai rute terhemat untuk ekspansi Anda.",
        ],
      },
    ],
  },
  {
    id: 10,
    slug: "oss-rba-update-terbaru",
    title: "OSS-RBA Terbaru: Perubahan Aturan Perizinan yang Wajib Diketahui Pelaku Usaha",
    keyword: "oss rba terbaru",
    excerpt:
      "Dari PP 5/2021 hingga UU 6/2023, kerangka perizinan berbasis risiko terus disempurnakan. Cek poin yang berubah di OSS-RBA, kewajiban LKPM, sanksi administratif, dan praktik audit legalitas berkala.",
    date: "2026-09-18",
    readTime: "9 menit",
    category: "OSS-RBA",
    edition: "Edisi September 2026",
    editionKey: "2026-09",
    sections: [
      {
        h: "Evolusi regulasi: PP 5/2021 → Perppu 2/2022 → UU 6/2023",
        p: [
          "Perjalanan hukum Cipta Kerja terlihat berkelok, namun kerangka perizinan berusaha berbasis risiko yang berlaku lewat PP 5/2021 tidak berubah — tetap menjadi payung operasional OSS-RBA hingga hari ini. Bagi pelaku usaha artinya: meski nomor peraturan berganti, logika NIB–Sertifikat Standar–Izin tetap sama; yang bergerak adalah detail teknisnya. Kronologisnya:",
        ],
        list: [
          "UU 11/2020 Cipta Kerja: era awal perizinan berbasis risiko",
          "Keputusan MK 91/PUU-XVIII/2021: cacat formal — UU harus ditinjau ulang",
          "Perppu 2/2022: pemerintah memperbaiki dan menetapkan kembali",
          "UU 6/2023: Perppu disahkan — kerangka hukum final",
        ],
      },
      {
        h: "Poin yang berubah bagi pelaku usaha",
        p: [
          "Yang terus berubah justru lapisan teknisnya: profil risiko diperhalus, integrasi data antar-instansi diperkuat, dan verifikasi untuk KBLI tertentu diperketat. Bagi usaha yang NIB-nya terbit sejak tahun-tahun awal, ini bukan berarti NIB hangus — melainkan perlunya sinkronisasi data profil dengan kondisi terkini, karena sistem yang semakin terintegrasi membuat inkonsistensi makin mudah terlihat. Empat perubahan yang paling terasa di lapangan:",
        ],
        list: [
          "NIB eksplisit berlaku sebagai nomor pokok wajib pelaku usaha — dasar seluruh perizinan",
          "NIB hanya terbit setelah profil pajak valid dan data profil usaha lengkap",
          "Profil risiko lebih granular: satu KBLI bisa berbeda kewajiban menurut skala/aktivitas",
          "Verifikasi kesesuaian lebih ketat — dokumen teknis dan inspeksi diminta lebih awal",
        ],
      },
      {
        h: "Kewajiban LKPM: paling sering terlewat",
        p: [
          "Implikasinya sederhana namun penting: data lama yang tidak sinkron (KBLI, alamat, skala usaha, modal) akan tertangkap saat verifikasi. Perbarui profil OSS setiap kali kondisi nyata usaha berubah — bukan saat Anda membutuhkan fasilitas atau tender. Profil yang bersih hari ini adalah modal saat Anda butuh cepat.",
          "Laporan Kegiatan Penanaman Modal (LKPM) wajib disampaikan melalui OSS sesuai Peraturan BKPM 5/2021. LKPM adalah bukti investasi nyata yang dipakai BKPM menilai kesungguhan proyek Anda:",
        ],
        list: [
          "Triwulanan untuk investasi di atas Rp50 miliar — paling lambat 10 Juli, 10 Oktober, 10 Januari",
          "Semesteran untuk investasi di bawahnya — paling lambat 10 Juli dan 10 Januari",
          "Isi minimal: realisasi penempatan modal, tenaga kerja, dan perkembangan proyek",
          "Sampaikan kendala investasi — tersedia mekanisme penyelesaian masalah investasi",
        ],
      },
      {
        h: "Sanksi administratif bila lalai",
        p: [
          "Rekor LKPM yang bolong baru terasa saat Anda membutuhkannya: perpanjangan KITAS investor, fasilitas pajak, kemitraan dengan BUMN, hingga due diligence pendanaan. Menambal laporan lama jauh lebih menyulitkan daripada lapor tepat waktu — dan biaya pendampingan penambalan selalu lebih tinggi daripada biaya lapor rutin.",
          "PP 5/2021 menetapkan sanksi bertingkat — masing-masing dengan masa pemberesan; bila terlewati tanpa perbaikan, sanksi berikutnya berlaku:",
        ],
        list: [
          "Teguran tertulis dengan tenggat perbaikan",
          "Denda administratif",
          "Pembekuan kegiatan usaha",
          "Pencabutan NIB/perizinan berusaha",
        ],
      },
      {
        h: "Praktik aman: audit legalitas berkala",
        p: [
          "Dampak sanksi menyebar ke ranah lain: status pajak, keimigrasian pengurus asing, kelayakan tender, hingga audit bank. Penyesuaian sukarela selalu lebih murah daripada menunggu teguran pertama.",
          "Gunara Consultant menjalankan audit legalitas sebagai layanan tetap: memetakan temuan, memprioritaskan perbaikan, lalu mengeksekusi perizinannya sampai selesai. Untuk perusahaan yang menyiapkan pendanaan, akuisisi, atau ekspansi, audit ini kerap menjadi prasyarat due diligence. Hasilnya biasanya peta temuan — mana yang segera dibereskan, mana yang cukup dipantau; mulailah dari cek ringkas berikut:",
        ],
        list: [
          "NIB sesuai kondisi nyata: KBLI, alamat, skala usaha",
          "Izin teknis/sertifikat standar masih berlaku",
          "LKPM lengkap dan tidak ada yang bolong",
          "Dokumen pajak, lingkungan, dan ketenagakerjaan terbarui",
        ],
      },
    ],
  },
  {
    id: 9,
    slug: "sertifikasi-halal-ekspor-timur-tengah",
    title: "Sertifikasi Halal untuk Ekspor: Kunci Masuk Pasar Arab Saudi & Timur Tengah",
    keyword: "sertifikasi halal ekspor",
    excerpt:
      "Di pasar Gulf, sertifikat halal adalah syarat kontrak, bukan nilai tambah. Pahami peran BPJPH & SIHALAL, pengakuan bersama dengan otoritas Arab Saudi, serta alur gabungan halal + legalitas ekspor (API-U, HS code, COO).",
    date: "2026-09-05",
    readTime: "8 menit",
    category: "Pangan & Halal",
    edition: "Edisi September 2026",
    editionKey: "2026-09",
    sections: [
      {
        h: "Mengapa halal menjadi syarat masuk pasar Gulf",
        p: [
          "Arab Saudi dan negara GCC adalah pasar dengan penduduk mayoritas Muslim dan regulator yang menegakkan standar halal secara formal — untuk pangan, SFDA (Saudi Food and Drug Authority) menuntut jaminan kehalalan atas produk yang diimpor. Bagi importir di sana, sertifikat halal resmi adalah prasyarat kontrak, bukan sekadar poin pemasaran.",
          "Permintaannya melampaui pangan olahan, dan Indonesia membawa keunggulan ganda: reputasi otoritas halal yang dihormati dunia Islam serta kedekatan diplomatik kedua negara. Produk-produk yang paling dicari dari Indonesia:",
        ],
        list: [
          "Pangan olahan, snack, dan bumbu",
          "Bahan baku pangan dan bahan tambahan pangan",
          "Minuman dan produk penyegar",
          "Kosmetik dan perawatan tubuh halal",
        ],
      },
      {
        h: "Peran BPJPH dan SIHALAL",
        p: [
          "Di Indonesia, jaminan produk halal dikelola BPJPH (Badan Penyelenggara Jaminan Produk Halal, Kemenag RI) berdasarkan UU 33/2014 jo. PP 42/2024 (perubahan atas PP 39/2021). Seluruh alur berjalan satu pintu melalui sistem SIHALAL — empat tahap berikut berlaku untuk setiap pengajuan.",
          "Jangan menunggu masa berlaku habis: perencanakan perpanjangan bersama kalender ekspor agar tidak ada jeda dokumen di tengah kontrak tahunan dengan importir.",
        ],
        list: [
          "Pendaftaran pengajuan di SIHALAL",
          "Audit fasilitas oleh Lembaga Pemeriksa Halal (LPH)",
          "Sidang fatwa MUI berdasarkan hasil audit",
          "Penerbitan sertifikat — berlaku 4 tahun dan dapat diperbarui",
        ],
      },
      {
        h: "Sertifikasi domestik vs kebutuhan pasar ekspor",
        p: [
          "Satu sertifikat halal BPJPH punya dua fungsi: memenuhi kewajiban hukum untuk produk yang beredar di Indonesia, sekaligus menjadi dokumen fondasi untuk menawarkan produk ke pasar halal dunia. Namun sertifikat domestik mengikuti hukum Indonesia — negara tujuan punya otoritas dan persyaratan sendiri.",
          "Di sinilah pengakuan bersama (mutual recognition) berperan: BPJPH menjalin kerja sama pengakuan sertifikat halal dengan otoritas negara lain — termasuk kerja sama dengan otoritas Arab Saudi untuk pangan — sehingga dokumen BPJPH diperlakukan lebih cepat. Tetap verifikasi persyaratan terkini negara tujuan sebelum pengapalan; kelengkapan dokumen ganda sering menjadi pembeda antara kontrak yang jalan dan negosiasi yang berhenti di tahap dokumen:",
        ],
        list: [
          "Sertifikat halal BPJPH: fondasi sekaligus kewajiban domestik",
          "Registrasi produk di SFDA untuk pangan/obat yang masuk Arab Saudi",
          "Standar label & kemasan GSO/SASO sesuai kategori produk",
          "Legalitas ekspor: NIB (registrasi eksportir), HS code, dan COO",
        ],
      },
      {
        h: "Dokumen yang harus disiapkan eksportir",
        p: [
          "Dua kelompok dokumen berjalan paralel — hukum perusahaan dan teknis produk:",
        ],
        list: [
          "NIB & legalitas badan usaha; siapkan API-U bila Anda juga mengimpor bahan baku",
          "Sertifikat halal BPJPH: daftar bahan + dokumen halal pemasok, diajukan via SIHALAL",
          "Dokumentasi SJPH: personel pengawas halal, SOP produksi, pencegahan kontaminasi",
          "Daftar produk dengan HS code, label (Arab/Inggris), foto kemasan, dan spesifikasi",
          "COO (Certificate of Origin) dan invoice untuk kelancaran kepabeanan",
        ],
      },
      {
        h: "Alur gabungan: halal + legalitas ekspor",
        p: [
          "Catatan praktis: satu sertifikat halal mencakup produk dengan resep dan bahan identik yang diproduksi pada fasilitas yang sama. Bahan impor tanpa dokumen halal pemasok adalah penyebab penolakan paling umum — siapkan rantai dokumennya lebih dulu daripada produknya. Auditor halal dan importir sama-sama menanyakan silang data antara dokumen perusahaan dan dokumen produk, jadi siapkan kedua kelompok sekaligus — bukan bergantian.",
          "Alur yang kami jalankan untuk klien ekspor: pastikan sertifikat halal BPJPH terbit → pastikan legalitas ekspor (NIB sebagai registrasi eksportir, izin eksportir khusus untuk komoditas tertentu, HS code yang tepat) → daftarkan produk kepada importir/otoritas tujuan (mis. registrasi SFDA) → terbitkan COO melalui sistem kepabeanan saat pengapalan. Ekspor pangan-halal Indonesia ke Timur Tengah tumbuh konsisten dan menjadi salah satu tujuan utama produk halal Indonesia — tim halal & ekspor Gunara Consultant menangani seluruh rantai ini dalam satu alur.",
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "cara-memilih-kbli-tepat",
    title: "Cara Memilih KBLI yang Tepat: Kesalahan Umum dan Dampaknya bagi Usaha Anda",
    keyword: "kode kbli",
    excerpt:
      "KBLI menentukan tingkat risiko, izin teknis, zonasi, hingga tarif penghasilan usaha Anda. Pelajari cara memilih kode KBLI yang tepat, empat kesalahan paling umum, dan kapan harus menambah atau mengubahnya.",
    date: "2026-08-20",
    readTime: "7 menit",
    category: "Badan Usaha",
    edition: "Edisi Agustus 2026",
    editionKey: "2026-08",
    sections: [
      {
        h: "Fungsi KBLI: identitas resmi bidang usaha",
        p: [
          "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) 2020 adalah daftar resmi seluruh bidang usaha di Indonesia dengan kode lima digit. Kode inilah yang muncul di akta pendirian, NIB, izin berusaha, laporan pajak, hingga dokumen tender — KBLI adalah 'KTP aktivitas' badan usaha Anda.",
          "Karena menjadi acuan lintas instansi, satu pilihan KBLI menarik konsekuensi berlapis. Memilih KBLI bukan formalitas — melainkan keputusan strategis; mengubahnya di tengah jalan bisa dilakukan, namun selalu lebih mahal daripada memilih benar sejak awal. Beberapa hal yang ditentukannya:",
        ],
        list: [
          "Tingkat risiko perizinan di OSS-RBA (PP 5/2021)",
          "Izin teknis yang diminta kementerian/lembaga teknis",
          "Kesesuaian alamat usaha dengan zonasi tata ruang",
          "Tarif penghasilan di profil pajak dan fasilitas investasi",
        ],
      },
      {
        h: "Hubungan KBLI dengan tingkat risiko OSS-RBA",
        p: [
          "Sejak PP 5/2021, setiap KBLI dinilai menurut tingkat risiko, dan tingkat itulah yang menentukan kewajiban perizinan Anda. Penilaian ini bisa menyesuaikan mengikuti pembaruan profil risiko di OSS — cek ulang secara berkala:",
        ],
        list: [
          "Risiko rendah: cukup NIB — usaha boleh langsung beroperasi",
          "Risiko menengah rendah: NIB + Sertifikat Standar (self-declaration)",
          "Risiko menengah tinggi: NIB + Sertifikat Standar dengan verifikasi dokumen teknis",
          "Risiko tinggi: NIB + Izin (Persetujuan) dari kementerian/lembaga teknis",
        ],
      },
      {
        h: "Zonasi, pajak, dan fasilitas yang bergantung pada KBLI",
        p: [
          "Perhatikan pula KBLI yang menuntut izin teknis tambahan di luar perizinan berusaha — usaha pangan memerlukan sertifikat higiene dan/atau izin edar BPOM/PIRT, dan sebagian aktivitas tertentu menuntut persetujuan khusus. Dua KBLI yang terlihat mirip bisa berbeda kewajiban jauh — verifikasi sebelum memilih.",
          "Zonasi juga penentu: sebagian aktivitas hanya boleh beroperasi di zona tertentu, dan alamat yang tidak sesuai memblokir NIB serta izin lanjutan. Cek rencana tata ruang sebelum menyewa — bukan setelah pengajuan ditolak. Bagi PT PMA, KBLI berfungsi ganda sebagai penyaring investasi: kode yang dipilih harus terbuka untuk asing sesuai daftar positif investasi (Perpres 10/2021). Salah memilih pada PMA berarti membongkar struktur dari akta — bukan sekadar edit data. Gunakan cek zonasi resmi atau pendamping yang terbiasa membaca RTRW daerah — interpretasi peta tata ruang bukan pekerjaan coba-coba.",
        ],
      },
      {
        h: "Empat kesalahan umum memilih KBLI",
        p: [
          "Pola-pola ini kami temui hampir setiap minggu — dan dampaknya merembet ke pembiayaan (bank menilai konsistensi KBLI), tender (objek pekerjaan menuntut KBLI spesifik), dan audit pajak. Seluruhnya bermula dari satu pilihan kode:",
        ],
        list: [
          "KBLI asal lengkap ('biar nanti dipakai') — memicu kewajiban izin teknis berlapis dan profil usaha tak konsisten",
          "KBLI tidak sesuai aktivitas nyata — berbahaya saat audit; penyesuaian retroaktif jauh lebih mahal",
          "Lupa kewajiban izin teknis di balik KBLI — usaha jalan, legalitas menggantung, risiko sanksi",
          "Salah skala usaha (mikro/kecil/menengah/besar) — kehilangan fasilitas UMK atau data tidak konsisten",
        ],
      },
      {
        h: "Kapan harus menambah atau mengubah KBLI?",
        p: [
          "Penambahan dan perubahan KBLI dilakukan melalui OSS (perubahan data profil) — untuk PT pastikan selaras dengan anggaran dasar, dan beberapa KBLI meminta dokumen pendukung. Jangan menunggu audit menemukan selisihnya.",
          "Kebiasaan yang kami anjurkan: audit KBLI setahun sekali — cocokkan akta, NIB, dan aktivitas riil, lalu rapikan. Gunara Consultant memulai hampir semua pendampingan dari pemetaan KBLI gratis, karena hampir semua masalah perizinan berakar dari pilihan kode di awal. Empat tanda yang paling umum:",
        ],
        list: [
          "Membuka lini bisnis baru yang berbeda karakter aktivitas",
          "Aktivitas nyata bergeser dari yang tercatat di NIB/akta",
          "Mengikuti tender atau program yang menuntut kode tertentu",
          "Ada kode lama yang tak terpakai — sebaiknya dibersihkan",
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "pt-pma-panduan-investor-asing",
    title: "PT PMA 2026: Panduan Lengkap Pendirian Perusahaan untuk Investor Asing",
    keyword: "pt pma",
    excerpt:
      "Investor asing dapat memiliki 100% saham PT di sebagian besar sektor. Panduan lengkap PT PMA: modal disetor Rp10 miliar per KBLI, daftar positif investasi, alur akta hingga NIB, KITAS investor, dan LKPM.",
    date: "2026-08-05",
    readTime: "8 menit",
    category: "Investasi & Asing",
    edition: "Edisi Agustus 2026",
    editionKey: "2026-08",
    sections: [
      {
        h: "Apa itu PT PMA dan dasar hukumnya",
        p: [
          "PT PMA (Penanaman Modal Asing) adalah perseroan terbatas di Indonesia yang sahamnya dimiliki paling sedikit 10% oleh orang atau badan hukum asing. Berbeda dengan kantor perwakilan, PMA adalah badan usaha penuh: boleh menghasilkan pendapatan, mengikat kontrak komersial, mempekerjakan tenaga kerja, dan menjadi pemegang izin. Inilah bentuk yang benar bila niat Anda membangun bisnis jangka panjang di Indonesia.",
          "Dasar hukum utamanya:",
        ],
        list: [
          "UU 25/2007 tentang Penanaman Modal",
          "UU 40/2007 tentang Perseroan Terbatas jo. UU 6/2023 (Cipta Kerja)",
          "Perpres 10/2021 tentang Bidang Usaha Penanaman Modal (daftar positif)",
          "Ketentuan pelaksanaan terintegrasi di OSS-RBA",
        ],
      },
      {
        h: "Daftar positif investasi: sektor mana yang terbuka?",
        p: [
          "Perpres 10/2021 mengganti era Daftar Negatif Investasi dengan daftar positif yang logikanya dibalik: seluruh sektor terbuka untuk asing, kecuali dinyatakan khusus (disempurnakan Perpres 49/2021). Cek posisi KBLI Anda di salah satu kategori berikut:",
        ],
        list: [
          "Prioritas: dibuka penuh — plus fasilitas pajak dan kemudahan perizinan",
          "Kondisi tertentu: batas kepemilikan asing, modal minimum, lokasi, atau kemitraan",
          "Dipesan untuk koperasi & UMKM: tidak tersedia bagi investor asing",
          "Tidak dibuka: kategori yang dilarang bagi investasi (senjata, narkotika, dsb.)",
        ],
      },
      {
        h: "Alur pendirian: akta → SK Kemenkumham → NPWP → NIB OSS-RBA",
        p: [
          "Sebelum akta dibuat, pastikan KBLI pilihan Anda masuk kategori mana — menemukan KBLI yang ternyata dibatasi setelah NIB ditolak adalah pemborosan waktu paling mahal dalam pendirian PMA.",
          "Alur inti lima tahap: pemetaan KBLI & struktur saham, akta pendirian di depan notaris, pengesahan SK Kemenkumham (umumnya satu hari kerja), penerbitan NPWP badan, lalu aktivasi NIB dan perizinan berusaha di OSS-RBA. Kuncinya di modal: modal disetor minimal Rp10 miliar per KBLI 5 digit (di luar pinjaman), dengan penyetoran tunai minimal 25% dari rencana penempatan modal per proyek. Modal wajib benar-benar dicairkan ke rekening korporat atas nama PT — bukan sekadar angka di akta — karena bukti pencairan diminta saat verifikasi BKPM dan pengajuan KITAS investor.",
        ],
        list: [
          "Paspor & alamat investor asing",
          "Tiga pilihan nama PT + KBLI 5 digit",
          "Alamat kantor sesuai zonasi (surat sewa/milik sendiri)",
          "Rencana investasi & struktur saham",
        ],
      },
      {
        h: "KITAS investor dan kewajiban LKPM",
        p: [
          "Pemegang saham dan pengurus PMA berhak mengajukan KITAS indeks investor — izin tinggal terbatas berbasis komitmen investasi tercatat, tanpa proses RPTKA seperti KITAS kerja. Dokumen fondasinya sama dengan yang sudah Anda pegang: akta, SK Kemenkumham, NIB, dan bukti penempatan modal.",
          "Kewajiban rutin yang tak boleh bolong adalah LKPM (Laporan Kegiatan Penanaman Modal) melalui OSS sesuai Peraturan BKPM 5/2021. LKPM adalah bukti 'investasi nyata' — dasar penilaian BKPM dan prasyarat banyak fasilitas lanjutan. Perlakukan seperti laporan keuangan: rutin, tepat waktu, tanpa utang. Rinciannya:",
        ],
        list: [
          "Triwulanan bila investasi di atas Rp50 miliar",
          "Semesteran bila investasi Rp50 miliar atau di bawahnya",
          "Isi: realisasi penempatan modal, tenaga kerja, perkembangan proyek",
          "Sampaikan tepat jadwal (10 Juli/10 Oktober/10 Januari)",
        ],
      },
      {
        h: "Kesalahan umum yang menghambat investor",
        p: [
          "Tiga jebakan terbanyak: memilih KBLI yang ternyata tertutup atau dibatasi untuk asing (berhenti saat aktivasi NIB), modal yang tidak benar-benar dicairkan (berujung gagal verifikasi dan KITAS tersendat), dan alamat kantor yang tidak sesuai zonasi sehingga izin tertahan.",
          "Semuanya bisa dicegah sebelum akta dibuat — di situ perubahan masih murah. Tim Gunara Consultant menyatukan pendirian PMA, perizinan OSS, pencairan modal, dan KITAS investor dalam satu alur pendampingan, dengan pemetaan KBLI gratis sebagai langkah pembuka. Sebelum akta dibuat, pastikan empat hal ini sudah dicek:",
        ],
        list: [
          "KBLI terbuka untuk asing sesuai daftar positif investasi",
          "Alamat kantor sesuai zonasi tata ruang",
          "Struktur modal dan rencana pencairan yang realistis",
          "Rencana KITAS bagi investor yang akan tinggal di Indonesia",
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
    edition: "Edisi Maret 2026",
    editionKey: "2026-03",
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
    edition: "Edisi Februari 2026",
    editionKey: "2026-02",
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
    id: 4,
    slug: "pbg-dan-slf-perbedaan",
    title: "PBG dan SLF: Perbedaan, Syarat, dan Cara Mengurusnya",
    keyword: "PBG dan SLF",
    excerpt:
      "PBG menjamin bangunan dibangun sesuai rencana; SLF menjamin bangunan layak difungsikan. Keduanya wajib — dan tanpa keduanya, aset Anda tidak bisa dipakai penuh, dijual, atau diaudit.",
    date: "2026-02-10",
    readTime: "6 menit",
    category: "Konstruksi & Properti",
    edition: "Edisi Februari 2026",
    editionKey: "2026-02",
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
    id: 3,
    slug: "sertifikasi-halal-bpjph",
    title: "Sertifikasi Halal BPJPH: Syarat, Biaya, dan Alur Terbaru",
    keyword: "sertifikasi halal bpjph",
    excerpt:
      "Sertifikat halal kini kewajiban hukum bagi produk pangan, minuman, kosmetik, hingga obat. Kenali jalur reguler, seger, self-declare gratis, dan cara mempersiapkan audit halal yang lolos sekali jalan.",
    date: "2026-02-01",
    readTime: "7 menit",
    category: "Pangan & Halal",
    edition: "Edisi Februari 2026",
    editionKey: "2026-02",
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
    id: 2,
    slug: "panduan-nib-oss-rba",
    title: "NIB & OSS-RBA: Memahami Perizinan Berusaha Berbasis Risiko",
    keyword: "NIB OSS-RBA",
    excerpt:
      "Sejak PP 5/2021, satu NIB menggantikan SIUP dan banyak izin lain. Pahami tingkat risiko rendah–tinggi, sertifikat standar, dan verifikasi kesesuaian agar usaha Anda legal sejak hari pertama.",
    date: "2026-01-20",
    readTime: "9 menit",
    category: "OSS-RBA",
    edition: "Edisi Januari 2026",
    editionKey: "2026-01",
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
    id: 1,
    slug: "cara-mendirikan-pt-2025",
    title: "Cara Mendirikan PT 2025: Panduan Lengkap dari Akta Notaris hingga NIB",
    keyword: "cara mendirikan PT",
    excerpt:
      "Perseroan Terbatas adalah badan hukum paling dipercaya investor. Panduan langkah demi langkah: syarat pendiri, biaya realistis, timeline 1–3 hari, hingga NIB aktif di OSS-RBA.",
    date: "2026-01-15",
    readTime: "8 menit",
    category: "Badan Usaha",
    edition: "Edisi Januari 2026",
    editionKey: "2026-01",
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
];

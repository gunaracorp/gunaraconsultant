/**
 * S11 — Konten Legal (Z2: konten terpisah dari tampilan)
 * Kebijakan Privasi selaras UU No. 27 Tahun 2022 (UU PDP) + GDPR-ready.
 * Syarat & Ketentuan penggunaan website & layanan.
 * Bilingual ID/EN simetris.
 */

export const LEGAL_UPDATED = "2026-10-23";

export interface LegalBlock {
  h: string;
  hEn: string;
  p: string[];
  pEn: string[];
}

export const PRIVACY_BLOCKS: LegalBlock[] = [
  {
    h: "1. Data Pribadi yang Kami Kumpulkan",
    hEn: "1. Personal Data We Collect",
    p: [
      "Sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), kami mengumpulkan data pribadi yang Anda berikan secara sukarela saat menghubungi kami melalui WhatsApp, formulir kontak, telepon, atau email. Data yang umumnya kami terima meliputi: nama, nomor telepon/WhatsApp, nama usaha atau badan hukum, jenis layanan yang diminati, serta informasi dokumen legalitas yang Anda kirimkan untuk keperluan konsultasi dan pengurusan perizinan.",
      "Kami TIDAK mengumpulkan data pribadi melalui pelacakan otomatis di luar halaman ini. Asesmen UMEA™ berjalan sepenuhnya di perangkat Anda dan hasilnya tidak dikirim ke server kami kecuali Anda memilih mengirimkannya sendiri melalui WhatsApp. Data analitik situs (bila aktif) bersifat agregat dan tidak mengidentifikasi individu.",
    ],
    pEn: [
      "In accordance with Law No. 27 of 2022 on Personal Data Protection (PDP Law), we collect personal data you voluntarily provide when contacting us via WhatsApp, contact forms, phone, or email. Commonly received data includes: name, phone/WhatsApp number, business or legal entity name, the services you are interested in, and legality documents you send for consultation and licensing purposes.",
      "We do NOT collect personal data through automated tracking beyond this site. The UMEA™ assessment runs entirely on your device and its results are not sent to our server unless you choose to send them yourself via WhatsApp. Site analytics (when active) are aggregate and do not identify individuals.",
    ],
  },
  {
    h: "2. Dasar dan Tujuan Pemrosesan",
    hEn: "2. Basis and Purposes of Processing",
    p: [
      "Kami memproses data pribadi Anda berdasarkan persetujuan Anda dan/atau pelaksanaan kewajiban perjanjian layanan, dengan tujuan: (a) menjawab pertanyaan dan permintaan konsultasi; (b) menyusun rekomendasi perizinan dan metodologi UMEA™; (c) mengurus dokumen perizinan kepada instansi terkait atas nama dan atas persetujuan Anda; (d) komunikasi progres pekerjaan; (e) pemenuhan kewajiban hukum dan perpajakan yang berlaku di Republik Indonesia.",
      "Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak mana pun. Data hanya diproses oleh tim internal kami yang berwenang dan, sebatas yang diperlukan, oleh instansi pemerintah atau mitra kerja yang secara hukum menjadi jalur pengurusan perizinan Anda.",
    ],
    pEn: [
      "We process your personal data based on your consent and/or the performance of our service agreement, for the purposes of: (a) answering inquiries and consultation requests; (b) preparing licensing recommendations and UMEA™ methodology; (c) processing licensing documents with relevant authorities on your behalf and with your consent; (d) work-progress communication; (e) fulfilling legal and tax obligations under the laws of the Republic of Indonesia.",
      "We never sell, rent, or trade your personal data to anyone. Data is processed only by our authorized internal staff and, where necessary, by government agencies or working partners who are legally part of your licensing process.",
    ],
  },
  {
    h: "3. Retensi, Keamanan, dan Hak-Hak Anda",
    hEn: "3. Retention, Security, and Your Rights",
    p: [
      "Data disimpan selama diperlukan untuk memenuhi tujuan pemrosesan dan kewajiban hukum (umumnya selama hubungan layanan berjalan ditambah periode retensi dokumen legal yang dipersyaratkan). Kami menerapkan langkah pengamanan yang wajar: akses terbatas berbasis peran, penyimpanan kredensial terkelola, dan larangan menyebarkan dokumen klien tanpa persetujuan.",
      "Sesuai UU PDP, Anda berhak: mengakses dan memperbarui data pribadi Anda; mengakhiri pemrosesan; menghapus data dalam batas hukum; serta menarik persetujuan kapan saja. Permintaan dapat dikirim melalui kontak resmi kami dan akan kami tanggapi dalam jangka waktu wajar sesuai ketentuan yang berlaku.",
    ],
    pEn: [
      "Data is retained as long as needed for processing purposes and legal obligations (generally for the duration of the service relationship plus the legally required document retention period). We apply reasonable safeguards: role-based access control, managed credential storage, and a strict prohibition on sharing client documents without consent.",
      "Under the PDP Law you have the right to: access and update your personal data; end processing; request deletion within legal limits; and withdraw consent at any time. Requests may be sent through our official contacts and will be answered within a reasonable period under applicable rules.",
    ],
  },
  {
    h: "4. Cookie, Kontak, dan Pembaruan Kebijakan",
    hEn: "4. Cookies, Contact, and Policy Updates",
    p: [
      "Website ini menggunakan penyimpanan lokal (localStorage) minimal untuk menyimpan preferensi bahasa Anda, tanpa iklan pihak ketiga. Bila layanan analitik diaktifkan, cookie analitik akan dipasang sesuai persetujuan dan dapat Anda tolak melalui pengaturan browser.",
      "Kebijakan ini dapat diperbarui sewaktu-waktu; versi terbaru selalu tersedia di halaman ini dengan tanggal pembaruan tercantum. Pertanyaan tentang privasi dapat dikirim ke kanal resmi kami: WhatsApp +62 813-1651-6524 atau kantor kami di Tasikmalaya dan Jakarta (lihat halaman Kontak).",
    ],
    pEn: [
      "This website uses minimal local storage (localStorage) to remember your language preference, with no third-party advertising. When analytics services are enabled, analytics cookies will be set subject to consent and can be refused via your browser settings.",
      "This policy may be updated from time to time; the latest version is always available on this page with its update date. Privacy questions may be sent through our official channels: WhatsApp +62 813-1651-6524 or our offices in Tasikmalaya and Jakarta (see the Contact page).",
    ],
  },
];

export const TERMS_BLOCKS: LegalBlock[] = [
  {
    h: "1. Penerimaan dan Ruang Lingkup",
    hEn: "1. Acceptance and Scope",
    p: [
      "Dengan mengakses website gunara.web.id (\"Situs\") dan/atau menggunakan layanan GConsultant, Anda menyatakan telah membaca, memahami, dan menyetujui Syarat & Ketentuan ini. Jika Anda tidak menyetujui salah satu ketentuan, mohon hentikan penggunaan Situs. Layanan kami adalah jasa konsultansi dan pengurusan perizinan usaha di wilayah Republik Indonesia, termasuk metodologi UMEA™ (Universal Minimum Enterprise Architecture) yang bersifat milik eksklusif GConsultant.",
      "Informasi di Situs — termasuk estimasi biaya (priceFrom), estimasi waktu proses, dan artikel — bersifat informatif umum dan bukan nasihat hukum final untuk kasus spesifik Anda. Rekomendasi mengikat hanya diberikan melalui kanal konsultasi resmi setelah pemeriksaan kondisi nyata usaha Anda.",
    ],
    pEn: [
      "By accessing gunara.web.id (the \"Site\") and/or using GConsultant services, you declare that you have read, understood, and agreed to these Terms & Conditions. If you disagree with any provision, please stop using the Site. Our services are consulting and business-licensing processing services within the Republic of Indonesia, including the UMEA™ (Universal Minimum Enterprise Architecture) methodology exclusively owned by GConsultant.",
      "Information on the Site — including cost estimates (priceFrom), processing-time estimates, and articles — is general information, not final legal advice for your specific case. Binding recommendations are given only through official consultation channels after examining your business's actual condition.",
    ],
  },
  {
    h: "2. Hak Kekayaan Intelektual",
    hEn: "2. Intellectual Property",
    p: [
      "Seluruh konten Situs — logo \"The Geometric G of GConsultant\", nama GConsultant, istilah UMEA™, Hukum Minimum Usaha™, UMEA Master Matrix™, UMEA Maturity Index™, D-10/D-21/D-39/D-75/D-165, teks, grafik, struktur metodologi, dan tata letak — dilindungi undang-undang hak cipta, merek, dan rahasia dagang Republik Indonesia.",
      "Dilarang menyalin, mereproduksi, memodifikasi, mendistribusikan, atau mengklaim kepemilikan atas metodologi dan materi tersebut tanpa izin tertulis dari GConsultant. Pelanggaran akan ditindak sesuai ketentuan hukum yang berlaku, termasuk UU No. 28 Tahun 2014 tentang Hak Cipta dan UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis.",
    ],
    pEn: [
      "All Site content — the \"Geometric G of GConsultant\" logo, the GConsultant name, the terms UMEA™, Minimum Business Law™, UMEA Master Matrix™, UMEA Maturity Index™, D-10/D-21/D-39/D-75/D-165, texts, graphics, methodology structure, and layout — is protected under Indonesia's copyright, trademark, and trade secret laws.",
      "Copying, reproducing, modifying, distributing, or claiming ownership of the methodology and materials without GConsultant's written permission is prohibited. Violations will be prosecuted under applicable law, including Law No. 28/2014 on Copyright and Law No. 20/2016 on Trademarks and Geographical Indications.",
    ],
  },
  {
    h: "3. Pembayaran Resmi dan Peringatan Penipuan",
    hEn: "3. Official Payment and Fraud Warning",
    p: [
      "Pembayaran hanya sah jika dilakukan ke rekening resmi: BCA 0860742187 a.n. Gugun Gunara. Kami TIDAK pernah meminta pembayaran ke rekening pribadi lain, dompet digital yang tidak tercantum resmi, atau akun atas nama pihak ketiga. GConsultant tidak bertanggung jawab atas kerugian akibat pembayaran ke kanal non-resmi.",
      "Waspadai penipuan yang mengatasnamakan kami. Verifikasi setiap penawaran melalui nomor WhatsApp resmi +62 813-1651-6524 atau kontak di halaman Kontak sebelum melakukan transfer apa pun.",
    ],
    pEn: [
      "Payment is only valid when made to the official account: BCA 0860742187 under the name Gugun Gunara. We NEVER request payment to other personal accounts, unlisted digital wallets, or third-party accounts. GConsultant is not liable for losses from payments via unofficial channels.",
      "Beware of fraud impersonating us. Verify every offer through the official WhatsApp number +62 813-1651-6524 or the contacts on the Contact page before transferring any funds.",
    ],
  },
  {
    h: "4. Tanggung Jawab, Batasan, dan Hukum yang Berlaku",
    hEn: "4. Liability, Limitations, and Governing Law",
    p: [
      "GConsultant bekerja dengan itikad baik dan standar profesional tinggi; namun hasil akhir perizinan bergantung pula pada kelengkapan dokumen klien, kebijakan instansi pemerintah, dan proses regulasi di luar kendali kami. Estimasi waktu dapat berubah mengikuti antrean dan regulasi instansi. Kami tidak menjamin persetujuan perizinan yang oleh hukum memang tidak dapat dipenuhi oleh usaha Anda.",
      "Sejauh diizinkan hukum, tanggung jawab kami atas kerugian langsung dari penggunaan Situs dibatasi maksimal sebesar nilai layanan yang telah dibayar untuk transaksi terkait. Syarat & Ketentuan ini tunduk pada hukum Republik Indonesia; sengketa diselesaikan secara musyawarah dan, bila gagal, melalui Pengadilan Negeri yang wilayah hukumnya mencakup Kota Tasikmalaya.",
    ],
    pEn: [
      "GConsultant works in good faith with high professional standards; however, licensing outcomes also depend on client document completeness, government agency policies, and regulatory processes beyond our control. Time estimates may change according to agency queues and regulations. We do not guarantee approvals that the law itself makes impossible for your business.",
      "To the extent permitted by law, our liability for direct losses from Site use is capped at the service value paid for the related transaction. These Terms are governed by the laws of the Republic of Indonesia; disputes are resolved amicably and, failing that, through the District Court whose jurisdiction covers Tasikmalaya City.",
    ],
  },
];

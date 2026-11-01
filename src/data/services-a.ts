import type { Service } from "./services-types";

export const SERVICES_A: Service[] = [
  // ============ BADAN HUKUM ============
  {
    slug: "nib-oss-rba",
    cat: "badan-hukum",
    nameId: "NIB — Nomor Induk Berusaha (OSS RBA)",
    nameEn: "NIB — Business Identification Number (OSS RBA)",
    shortId:
      "Legalitas dasar wajib setiap pelaku usaha. NIB sekaligus berfungsi sebagai SIUP, izin impor, dan akses fasilitas pemerintah.",
    shortEn:
      "The mandatory basic legality for every business. NIB doubles as SIUP, import license, and access to government facilities.",
    descId:
      "Nomor Induk Berusaha (NIB) adalah identitas resmi pelaku usaha yang diterbitkan melalui sistem OSS-RBA (Online Single Submission Risk-Based Approach). Sejak UU Cipta Kerja, NIB berlaku sekaligus sebagai SIUP, API untuk impor tertentu, dan identitas berusaha di seluruh instansi. Tanpa NIB, usaha Anda tidak bisa membuka rekening korporat, mengikuti tender, atau mengakses fasilitas kredit KUR. Tim GConsultant menyiapkan seluruh data, KBLI yang tepat, dan memantau penerbitan hingga selesai.",
    descEn:
      "The Business Identification Number (NIB) is the official business identity issued through the OSS-RBA (Online Single Submission Risk-Based Approach) system. Since the Omnibus Law, NIB also serves as SIUP, API for certain imports, and business identity across all agencies. Without NIB, your business cannot open corporate bank accounts, join tenders, or access KUR credit facilities. GConsultant prepares all data, correct KBLI codes, and monitors issuance until completion.",
    benefitsId: [
      "Legalitas dasar yang diakui seluruh instansi pemerintah",
      "Sekali urus: berlaku sebagai SIUP dan akses impor",
      "Syarat wajib membuka rekening korporat dan mengikuti tender",
      "Gerbang ke perizinan lanjutan berbasis risiko di OSS",
    ],
    benefitsEn: [
      "Basic legality recognized by all government agencies",
      "One-time processing: doubles as SIUP and import access",
      "Mandatory for corporate bank accounts and tenders",
      "Gateway to risk-based further licensing on OSS",
    ],
    reqId: [
      "KTP & NPWP pendiri/penanggung jawab",
      "Alamat usaha yang jelas (bukti sewa/milik/kuasa)",
      "Data rencana usaha dan modal",
      "Nomor telepon & email aktif",
    ],
    reqEn: [
      "Founder's ID card (KTP) & taxpayer number (NPWP)",
      "Clear business address (lease/ownership/authorization proof)",
      "Business plan and capital data",
      "Active phone number & email",
    ],
    stepsId: [
      "Konsultasi penetapan KBLI sesuai bidang usaha",
      "Pembuatan akun & pengisian data di OSS RBA",
      "Verifikasi data dan deklarasi kesiapan",
      "NIB terbit & pendampingan pengundusan dokumen",
    ],
    stepsEn: [
      "Consultation to determine KBLI per business field",
      "Account creation & data entry on OSS RBA",
      "Data verification and readiness declaration",
      "NIB issued & document download assistance",
    ],
    durationId: "1–3 hari kerja",
    durationEn: "1–3 working days",
    priceFrom: "Rp500.000",
    keywords: [
      "buat NIB",
      "NIB OSS RBA",
      "Nomor Induk Berusaha",
      "legalitas usaha",
      "NIB perusahaan",
      "business identification number Indonesia",
      "OSS RBA registration",
      "SIUP elektronik",
    ],
    faq: [
      {
        qId: "Apakah NIB berlaku seumur hidup?",
        aId: "Ya, NIB berlaku selama pelaku usaha aktif menjalankan usahanya dan tidak diubah datanya. Namun bila ada perubahan modal, alamat, atau KBLI, wajib diperbarui di OSS.",
        qEn: "Is NIB valid for life?",
        aEn: "Yes, NIB remains valid as long as the business actively operates and its data is unchanged. However, changes in capital, address, or KBLI must be updated on OSS.",
      },
      {
        qId: "Apakah NIB bisa dibuat sendiri?",
        aId: "Bisa, tetapi banyak pemilik usaha gagal karena salah memilih KBLI yang berdampak pada risiko dan perizinan lanjutan. Kami memastikan KBLI tepat sejak awal agar Anda tidak rugi waktu dan biaya.",
        qEn: "Can I register NIB myself?",
        aId: "You can, but many business owners fail because of wrong KBLI selection, which impacts risk level and further licensing. We ensure correct KBLI from the start so you save time and money.",
      },
    ],
  },
  {
    slug: "pendirian-pt",
    cat: "badan-hukum",
    nameId: "Pendirian PT (Perseroan Terbatas)",
    nameEn: "PT (Limited Liability Company) Establishment",
    shortId:
      "Badan usaha paling kredibel untuk menarik investor dan mengikuti proyek besar. Termasuk akta notaris, SK Kemenkumham, hingga NPWP korporat.",
    shortEn:
      "The most credible entity to attract investors and join large projects. Includes notarial deed, Kemenkumham approval, and corporate NPWP.",
    descId:
      "Perseroan Terbatas (PT) adalah badan hukum dengan tanggung jawab terbatas atas saham — pilihan utama untuk bisnis yang menuntut kredibilitas tinggi, partisipasi tender, dan penggalangan modal. GConsultant mengurus seluruh rantai pendirian: pendapatuan nama, akta notaris, pengesahan Kemenkumham RI, NPWP korporat, hingga NIB dan perizinan kegiatan usaha di OSS. Anda cukup siapkan dokumen identitas dan rencana usaha.",
    descEn:
      "A Limited Liability Company (PT) is a legal entity with limited shareholder liability — the top choice for businesses demanding high credibility, tender participation, and capital raising. GConsultant manages the entire establishment chain: name clearance, notarial deed, Ministry of Law approval, corporate NPWP, up to NIB and OSS business licensing. You only prepare identity documents and a business plan.",
    benefitsId: [
      "Tanggung jawab pemilik terbatas pada modal disetor",
      "Kredibilitas tinggi untuk tender, bank, dan investor",
      "Bisa menerbitkan saham untuk penggalangan modal",
      "Kelangsungan usaha terjamin secara hukum",
    ],
    benefitsEn: [
      "Owners' liability limited to paid-up capital",
      "High credibility for tenders, banks, and investors",
      "Can issue shares for capital raising",
      "Business continuity legally secured",
    ],
    reqId: [
      "KTP & NPWP minimal 2 pemegang saham",
      "Nama PT (3 alternatif) & alamat kantor",
      "Rencana bidang usaha & modal dasar",
      "Susunan pengurus & pemegang saham",
    ],
    reqEn: [
      "ID & NPWP of at least 2 shareholders",
      "PT name (3 alternatives) & office address",
      "Planned business field & authorized capital",
      "Directors & shareholders structure",
    ],
    stepsId: [
      "Konsultasi struktur badan & KBLI",
      "Pendapatuan nama di AHU Kemenkumham",
      "Akta pendirian notaris & pengesahan SK Kemenkumham",
      "NPWP korporat, NIB, dan perizinan usaha di OSS",
    ],
    stepsEn: [
      "Consultation on entity structure & KBLI",
      "Name clearance at AHU Kemenkumham",
      "Notarial deed & Kemenkumham decree approval",
      "Corporate NPWP, NIB, and OSS business licensing",
    ],
    durationId: "5–10 hari kerja",
    durationEn: "5–10 working days",
    priceFrom: "Rp2.500.000",
    keywords: [
      "pendirian PT",
      "jasa buat PT",
      "akta pendirian perusahaan",
      "SK Kemenkumham PT",
      "jasa pendirian PT murah",
      "establish PT Indonesia",
      "limited company registration Indonesia",
      "NPWP korporat",
    ],
    faq: [
      {
        qId: "Berapa modal minimum mendirikan PT?",
        aId: "Untuk PT kecil/UMKM, modal dasar bisa disesuaikan kemampuan pemegang saham sesuai PP 8/2021. Untuk PT PMA ada aturan investasi minimal di atas Rp10 miliar per KBLI 5 digit. Kami bantu hitung sesuai rencana Anda.",
        qEn: "What is the minimum capital to establish a PT?",
        aEn: "For small PTs/SMEs, authorized capital can be set per shareholders' ability under GR 8/2021. For foreign PT PMA, minimum investment rules above Rp10 billion per 5-digit KBLI apply. We help calculate per your plan.",
      },
      {
        qId: "Apakah saya harus datang ke kantor notaris?",
        aId: "Tidak selalu. Untuk pendirian PT normal, kami memfasilitasi tanda tangan digital (elektronik) sehingga Anda bisa mendirikan PT tanpa perlu datang ke kota lain.",
        qEn: "Do I have to visit the notary?",
        aEn: "Not always. For standard PT establishment, we facilitate electronic signing so you can establish your PT without traveling to another city.",
      },
    ],
  },
  {
    slug: "pendirian-cv",
    cat: "badan-hukum",
    nameId: "Pendirian CV (Commanditaire Vennootschap)",
    nameEn: "CV (Limited Partnership) Establishment",
    shortId:
      "Pilihan tepat bisnis keluarga/kongsi dengan modal fleksibel. Proses lebih cepat dan biaya lebih ringan dibanding PT.",
    shortEn:
      "Ideal for family/partnership businesses with flexible capital. Faster process and lighter cost than a PT.",
    descId:
      "Commanditaire Vennootschap (CV) adalah persekutuan sederhana antara sekutu aktif yang mengurus dan sekutu pasif yang menanamkan modal. CV cocok untuk usaha dagang, kontraktor kecil-menengah, dan bisnis kongsi keluarga. Kami menangani akta notaris, legalitas ahli waris, NPWP, NIB OSS, dan surat domisili usaha — semuanya terkoordinasi satu pintu agar CV Anda siap beroperasi secepatnya.",
    descEn:
      "A Commanditaire Vennootschap (CV) is a simple partnership between active partners who manage and silent partners who contribute capital. CVs suit trading businesses, small-to-medium contractors, and family ventures. We handle the notarial deed, heir legality, NPWP, OSS NIB, and business domicile letters — fully coordinated one-door so your CV is ready to operate fast.",
    benefitsId: [
      "Biaya & waktu pendirian lebih ringan dari PT",
      "Struktur pengelolaan sederhana dan fleksibel",
      "Cocok untuk usaha dagang & kongsi keluarga",
      "Mudah diubah ke PT saat bisnis membesar",
    ],
    benefitsEn: [
      "Lighter cost & time than establishing a PT",
      "Simple, flexible management structure",
      "Perfect for trading & family partnerships",
      "Easy to convert to PT as the business grows",
    ],
    reqId: [
      "KTP & NPWP seluruh sekutu (min. 2 orang)",
      "Nama CV & alamat usaha",
      "Bidang usaha yang dijalankan",
      "Pembagian porsi modal sekutu",
    ],
    reqEn: [
      "ID & NPWP of all partners (min. 2 people)",
      "CV name & business address",
      "Business field to operate",
      "Capital share distribution among partners",
    ],
    stepsId: [
      "Konsultasi struktur sekutu & usaha",
      "Penyusunan & penandatanganan akta CV notaris",
      "Penerbitan NPWP CV",
      "NIB & izin usaha melalui OSS RBA",
    ],
    stepsEn: [
      "Consultation on partner & business structure",
      "Drafting & notarial signing of the CV deed",
      "CV NPWP issuance",
      "NIB & business licensing via OSS RBA",
    ],
    durationId: "3–7 hari kerja",
    durationEn: "3–7 working days",
    priceFrom: "Rp1.500.000",
    keywords: [
      "pendirian CV",
      "jasa buat CV",
      "akta CV notaris",
      "legalitas CV",
      "persekutuan komanditer",
      "establish CV Indonesia",
      "CV company registration",
      "jasa legalitas usaha",
    ],
    faq: [
      {
        qId: "Apakah CV bisa mengikuti tender pemerintah?",
        aId: "Bisa untuk banyak tender, namun beberapa pengadaan menuntut bentuk PT. Kami bantu menilai kebutuhan Anda sejak awal agar pilihan badan usaha tepat sasaran.",
        qEn: "Can a CV join government tenders?",
        aEn: "Yes for many tenders, though some procurements require a PT. We help assess your needs upfront so your entity choice hits the mark.",
      },
      {
        qId: "Berapa orang minimal untuk mendirikan CV?",
        aId: "Minimal dua orang: minimal satu sekutu aktif dan satu sekutu pasif (atau sekutu pasif korporasi). Rinciannya kami siapkan dalam akta.",
        qEn: "How many people are needed to establish a CV?",
        aEn: "Minimum two people: at least one active partner and one silent partner (or a corporate silent partner). Details are drafted in the deed.",
      },
    ],
  },
  {
    slug: "usaha-perseorangan",
    cat: "badan-hukum",
    nameId: "Badan Usaha Perseorangan (PO/UPTA)",
    nameEn: "Individual Business Entity (PO/UPTA)",
    shortId:
      "Legalitas resmi untuk usaha dikelola sendiri — tanpa notaris, cepat, dan memberi badan hukum bagi UMKM individu.",
    shortEn:
      "Official legality for self-managed businesses — no notary needed, fast, granting legal entity status for individual SMEs.",
    descId:
      "Badan Usaha Perseorangan berdasarkan UU Cipta Kerja memberikan status badan hukum bagi usaha yang dijalankan individu — tanpa perlu notaris dan tanpa modal minimum. Ini game-changer bagi UMKM: rekening korporat, kemudahan kredit, dan kredibilitas kontrak. GConsultant menyiapkan pernyataan pendirian, pendaftaran Kemenkumham, NIB, dan NPWP secara terpadu.",
    descEn:
      "An Individual Business Entity under the Omnibus Law grants legal entity status to individually-run businesses — no notary and no minimum capital. A game-changer for SMEs: corporate accounts, easier credit, and contract credibility. GConsultant prepares the establishment statement, Kemenkumham registration, NIB, and NPWP in an integrated package.",
    benefitsId: [
      "Status badan hukum tanpa notaris & tanpa modal minimum",
      "Rekening korporat & fasilitas kredit lebih mudah",
      "Proses tercepat di antara bentuk badan usaha",
      "Aman dikontrak karena ada badan hukumnya",
    ],
    benefitsEn: [
      "Legal entity status without notary & minimum capital",
      "Corporate accounts & easier credit facilities",
      "Fastest process among entity types",
      "Contract-safe with legal entity status",
    ],
    reqId: [
      "KTP & NPWP pemilik usaha",
      "Alamat usaha & rencana kegiatan",
      "KBLI bidang usaha",
      "Nomor telepon & email aktif",
    ],
    reqEn: [
      "Owner's ID & NPWP",
      "Business address & planned activities",
      "Business field KBLI",
      "Active phone & email",
    ],
    stepsId: [
      "Konsultasi KBLI & kelayakan perseorangan",
      "Penyusunan pernyataan pendirian",
      "Pendaftaran ke Kemenkumham RI",
      "Penerbitan NIB & NPWP",
    ],
    stepsEn: [
      "KBLI & eligibility consultation",
      "Establishment statement drafting",
      "Registration with Kemenkumham RI",
      "NIB & NPWP issuance",
    ],
    durationId: "2–4 hari kerja",
    durationEn: "2–4 working days",
    priceFrom: "Rp750.000",
    keywords: [
      "badan usaha perseorangan",
      "PT perorangan",
      "UPTA Kemenkumham",
      "legalitas UMKM",
      "usaha perseorangan badan hukum",
      "individual business entity Indonesia",
      "jasa PT perorangan",
      "UMKM badan hukum",
    ],
    faq: [
      {
        qId: "Apa bedanya dengan NIB biasa?",
        aId: "NIB biasa hanya identitas berusaha; badan usaha perseorangan adalah badan hukum tersendiri sehingga aset pribadi dan tanggung jawab usaha lebih terpisah, dan lebih dipercaya bank/mitra.",
        qEn: "How is it different from a regular NIB?",
        aEn: "A regular NIB is only a business identity; an individual business entity is a legal entity itself, better separating personal assets from business liability, and more trusted by banks/partners.",
      },
      {
        qId: "Bisakah nanti diubah menjadi PT?",
        aId: "Bisa. Kami menyediakan paket upgrade dari badan usaha perseorangan ke PT lengkap dengan pemutusan dan pembentukan dokumen baru.",
        qEn: "Can it be upgraded to a PT later?",
        aEn: "Yes. We provide an upgrade package from individual business entity to PT, complete with termination and new document formation.",
      },
    ],
  },
  {
    slug: "perubahan-akta-badan-usaha",
    cat: "badan-hukum",
    nameId: "Perubahan Data & Akta Badan Usaha",
    nameEn: "Business Data & Deed Amendments",
    shortId:
      "Ganti nama, alamat, pengurus, pemegang saham, modal, hingga KBLI — kami urus amandemen akta hingga update OSS.",
    shortEn:
      "Change name, address, management, shareholders, capital, to KBLI — we handle deed amendments through OSS updates.",
    descId:
      "Bisnis berkembang, dokumen legalitas harus mengikuti. Perubahan nama, alamat, komposisi pengurus/pemegang saham, modal dasar, hingga tambahan KBLI sering diabaikan hingga menimbulkan masalah saat audit, tender, atau kredit. GConsultant menangani amandemen akta notaris, pengesahan Kemenkumham, pembaruan NPWP, dan sinkronisasi OSS-RBA dalam satu paket rapi.",
    descEn:
      "As businesses grow, legality documents must follow. Name, address, management/shareholder composition, authorized capital, and added KBLI changes are often neglected until audits, tenders, or credit issues arise. GConsultant handles notarial deed amendments, Kemenkumham approval, NPWP updates, and OSS-RBA synchronization in one tidy package.",
    benefitsId: [
      "Data legalitas selalu sinkron dengan realita bisnis",
      "Aman saat audit pajak, tender, dan pengajuan kredit",
      "Satu paket: notaris, Kemenkumham, NPWP, OSS",
      "Cegah sanksi akibat data tidak sesuai",
    ],
    benefitsEn: [
      "Legality data always synchronized with business reality",
      "Safe during tax audits, tenders, and credit applications",
      "One package: notary, Kemenkumham, NPWP, OSS",
      "Prevents sanctions from mismatched data",
    ],
    reqId: [
      "Akta & SK pendirian terakhir",
      "KTP & NPWP pihak terkait perubahan",
      "Detail perubahan yang diinginkan",
      "NIB / akun OSS perusahaan",
    ],
    reqEn: [
      "Latest deed & establishment decree",
      "ID & NPWP of parties involved in the change",
      "Details of intended changes",
      "Company NIB / OSS account",
    ],
    stepsId: [
      "Konsultasi jenis perubahan & implikasinya",
      "Amandemen akta di notaris",
      "Pengesahan perubahan di Kemenkumham",
      "Update NPWP & sinkronisasi data OSS RBA",
    ],
    stepsEn: [
      "Consultation on change type & implications",
      "Deed amendment at the notary",
      "Approval of changes at Kemenkumham",
      "NPWP update & OSS RBA data sync",
    ],
    durationId: "5–8 hari kerja",
    durationEn: "5–8 working days",
    priceFrom: "Rp1.250.000",
    keywords: [
      "perubahan akta PT",
      "perubahan nama perusahaan",
      "ganti pengurus PT",
      "perubahan KBLI",
      "amandemen akta notaris",
      "deed amendment Indonesia",
      "update OSS RBA",
      "perubahan pemegang saham",
    ],
    faq: [
      {
        qId: "Perubahan apa saja yang wajib dilaporkan?",
        aId: "Hampir semua perubahan substansial: nama, alamat, pengurus, pemegang saham, modal, dan KBLI. Denda bukan tujuan kita — ketepatan data adalah tujuan Anda dan kami.",
        qEn: "Which changes must be reported?",
        aEn: "Almost all substantial changes: name, address, management, shareholders, capital, and KBLI. Fines aren't the goal — accurate data is your goal and ours.",
      },
    ],
  },

  // ============ LINGKUNGAN ============
  {
    slug: "amdal",
    cat: "lingkungan",
    nameId: "AMDAL — Analisis Mengenai Dampak Lingkungan",
    nameEn: "AMDAL — Environmental Impact Assessment",
    shortId:
      "Kewajiban untuk kegiatan usaha berisiko tinggi. Kami rangkai studi kelayakan hingga persetujuan lingkungan terbit.",
    shortEn:
      "Mandatory for high-risk business activities. We arrange from feasibility studies to environmental approval issuance.",
    descId:
      "AMDAL adalah kajian mendalam atas dampak lingkungan untuk kegiatan usaha berisiko tinggi (pabrik besar, pertambangan, infrastruktur). Prosesnya kompleks: kerangka acuan (KA-ANDAL), ANDAL-RKL-RPL, penyampaian informasi publik, hingga penilaian Tim Penilai di Ditjen PPKL/daerah. GConsultant memiliki jaringan penyusun bersertifikat dan konsultan ahli teknis agar AMDAL Anda lolos penilaian tanpa revisi berlarut.",
    descEn:
      "AMDAL is an in-depth environmental impact study for high-risk activities (large factories, mining, infrastructure). The process is complex: terms of reference (KA-ANDAL), ANDAL-RKL-RPL, public information disclosure, to Assessment Team review at Ditjen PPKL/regional level. GConsultant has certified preparers and technical expert networks so your AMDAL passes review without prolonged revisions.",
    benefitsId: [
      "Memenuhi syarat utama izin operasional proyek besar",
      "Risiko demo & keberatan masyarakat lebih terkendali",
      "Direksi bebas tanggung jawab pidana lingkungan",
      "Dokumen kredibel untuk investor & pemberi kredit",
    ],
    benefitsEn: [
      "Meets the key requirement for large-project operating permits",
      "Protests & community objections better managed",
      "Directors free from environmental criminal liability",
      "Credible documents for investors & lenders",
    ],
    reqId: [
      "Dokumen perizinan dasar usaha (NIB dll.)",
      "Rincian rencana kegiatan & lokasi",
      "Data peta & desain teknis proyek",
      "Izin lahan & bukti komunikasi awal masyarakat",
    ],
    reqEn: [
      "Basic business permits (NIB, etc.)",
      "Activity plan & location details",
      "Maps & project technical designs",
      "Land permits & early community communication proof",
    ],
    stepsId: [
      "Penetapan jenis AMDAL oleh instansi",
      "Penyusunan KA-ANDAL & persetujuan",
      "Penyusunan ANDAL-RKL-RPL oleh penyusun bersertifikat",
      "Penilaian tim penilai & persetujuan lingkungan",
    ],
    stepsEn: [
      "AMDAL type determination by authority",
      "KA-ANDAL drafting & approval",
      "ANDAL-RKL-RPL preparation by certified experts",
      "Assessment team review & environmental approval",
    ],
    durationId: "3–12 bulan",
    durationEn: "3–12 months",
    priceFrom: "Rp25.000.000",
    keywords: [
      "jasa AMDAL",
      "biaya AMDAL",
      "penyusun AMDAL bersertifikat",
      "ANDAL RKL RPL",
      "persetujuan lingkungan",
      "environmental impact assessment Indonesia",
      "AMDAL pabrik",
      "AMDAL tambang",
    ],
    faq: [
      {
        qId: "Kegiatan saya perlu AMDAL atau UKL-UPL?",
        aId: "Tergantung tingkat risiko per KBLI di OSS dan skala kegiatan. Kami lakukan penapisan awal gratis agar Anda tidak mengeluarkan biaya lebih untuk kajian yang tidak diperlukan.",
        qEn: "Does my activity need AMDAL or UKL-UPL?",
        aEn: "Depends on risk level per KBLI on OSS and activity scale. We do a free initial screening so you don't overspend on unnecessary studies.",
      },
    ],
  },
  {
    slug: "ukl-upl",
    cat: "lingkungan",
    nameId: "UKL-UPL — Upaya Pengelolaan & Pemantauan Lingkungan",
    nameEn: "UKL-UPL — Environmental Management & Monitoring Efforts",
    shortId:
      "Dokumen lingkungan untuk usaha menengah berisiko menengah. Lebih ringkas dari AMDAL, tetap sah sebagai persetujuan lingkungan.",
    shortEn:
      "Environmental document for medium-risk businesses. More concise than AMDAL, still valid as environmental approval.",
    descId:
      "UKL-UPL adalah dokumen pengelolaan dan pemantauan lingkungan untuk kegiatan berisiko menengah — pabrik kecil-menengah, hotel, tambak, gudang, dan sebagainya. Dokumen ini menjadi lampiran persetujuan lingkungan yang menempel pada perizinan OSS Anda. Kami menyusunnya sesuai formulir baku pemerintah, mengoordinasikan verifikasi lapangan, hingga terbit persetujuan.",
    descEn:
      "UKL-UPL is the environmental management and monitoring document for medium-risk activities — small-to-medium factories, hotels, ponds, warehouses, and more. It attaches to the environmental approval on your OSS license. We prepare it per standard government forms, coordinate field verification, until approval is issued.",
    benefitsId: [
      "Syamat persetujuan lingkungan untuk risiko menengah",
      "Biaya jauh lebih terjangkau dari AMDAL",
      "Mempercepat penerbitan perizinan berusaha",
      "Reduksi keluhan lingkungan dari warga sekitar",
    ],
    benefitsEn: [
      "Fulfills environmental approval for medium risk",
      "Far more affordable than AMDAL",
      "Speeds up business license issuance",
      "Reduces environmental complaints from neighbors",
    ],
    reqId: [
      "NIB & data kegiatan usaha",
      "Bukti ketersediaan lahan",
      "Deskripsi teknis kegiatan",
      "Denah lokasi & gambaran lingkungan sekitar",
    ],
    reqEn: [
      "NIB & business activity data",
      "Land availability proof",
      "Technical description of activities",
      "Site plan & surrounding environment description",
    ],
    stepsId: [
      "Penapisan risiko & penetapan UKL-UPL",
      "Penyusunan dokumen UKL-UPL baku",
      "Verifikasi teknis instansi lingkungan",
      "Persetujuan lingkungan terbit di OSS",
    ],
    stepsEn: [
      "Risk screening & UKL-UPL determination",
      "Standard UKL-UPL document drafting",
      "Technical verification by environmental agency",
      "Environmental approval issued on OSS",
    ],
    durationId: "2–6 minggu",
    durationEn: "2–6 weeks",
    priceFrom: "Rp3.500.000",
    keywords: [
      "jasa UKL UPL",
      "biaya UKL UPL",
      "persetujuan lingkungan",
      "UKL UPL pabrik",
      "izin lingkungan usaha",
      "UKL-UPL Indonesia",
      "environmental permit Indonesia",
      "dokumen lingkungan UMKM",
    ],
    faq: [
      {
        qId: "Apakah UKL-UPL harus diperbarui?",
        aId: "Bila kapasitas, teknologi, atau lokasi berubah signifikan, dokumen harus direvisi. Kami menyimpan arsip digital Anda dan mengingatkan saat perlu diperbarui.",
        qEn: "Does UKL-UPL need renewal?",
        aEn: "If capacity, technology, or location changes significantly, the document must be revised. We keep your digital archive and remind you when updates are needed.",
      },
    ],
  },
  {
    slug: "sppl",
    cat: "lingkungan",
    nameId: "SPPL — Surat Pernyataan Pengelolaan Lingkungan",
    nameEn: "SPPL — Environmental Management Statement Letter",
    shortId:
      "Pernyataan mandiri pengelolaan lingkungan untuk usaha kecil berisiko rendah. Cepat, murah, dan sah di mata hukum.",
    shortEn:
      "Self-declared environmental management statement for low-risk small businesses. Fast, affordable, and legally valid.",
    descId:
      "SPPL adalah pernyataan tertulis kemampuan pengelolaan lingkungan untuk kegiatan berisiko rendah — kios, bengkel kecil, usaha kuliner skala kecil, dan sejenisnya. Meski sederhana, SPPL tetap dokumen hukum yang menempel di OSS dan bisa jadi syarat izin daerah. Kami pastikan isinya benar dan tidak bermasalah saat pemeriksaan lapangan mendadak.",
    descEn:
      "SPPL is a written statement of environmental management capability for low-risk activities — kiosks, small workshops, small-scale culinary businesses, and the like. Though simple, SPPL remains a legal document attached to OSS and can be a regional permit requirement. We ensure its content is correct and inspection-proof.",
    benefitsId: [
      "Legalitas lingkungan tercepat untuk risiko rendah",
      "Biaya paling ringan di kelas perizinan lingkungan",
      "Aman dari pemeriksaan lingkungan mendadak",
      "Syarat pengajuan izin daerah tertentu",
    ],
    benefitsEn: [
      "Fastest environmental legality for low risk",
      "Most affordable in environmental licensing class",
      "Safe from sudden environmental inspections",
      "Requirement for certain regional permits",
    ],
    reqId: [
      "NIB / KTP pelaku usaha",
      "Deskripsi singkat kegiatan",
      "Alamat & foto lokasi usaha",
      "Pernyataan kesediaan pengelolaan lingkungan",
    ],
    reqEn: [
      "NIB / business owner's ID",
      "Brief activity description",
      "Business address & location photos",
      "Statement of environmental management willingness",
    ],
    stepsId: [
      "Penapisan bahwa usaha tergolong risiko rendah",
      "Penyusunan isi SPPL yang benar",
      "Pengunggahan/pendaftaran ke instansi",
      "SPPL terpin & tercatat di OSS",
    ],
    stepsEn: [
      "Screening that business is low-risk",
      "Drafting correct SPPL content",
      "Upload/registration to authority",
      "SPPL issued & recorded on OSS",
    ],
    durationId: "1–5 hari kerja",
    durationEn: "1–5 working days",
    priceFrom: "Rp750.000",
    keywords: [
      "SPPL",
      "surat pernyataan pengelolaan lingkungan",
      "SPPL online",
      "izin lingkungan risiko rendah",
      "jasa SPPL murah",
      "SPPL Indonesia",
      "environmental statement Indonesia",
      "SPPL UMKM",
    ],
    faq: [
      {
        qId: "SPPL berlaku selamanya?",
        aId: "SPPL tidak memiliki masa berlaku eksplisit, tetapi harus konsisten dengan kegiatan riil. Jika usaha berkembang ke risiko lebih tinggi, wajib naik ke UKL-UPL/AMDAL.",
        qEn: "Is SPPL valid forever?",
        aEn: "SPPL has no explicit expiry but must stay consistent with actual activities. If the business grows to higher risk, it must upgrade to UKL-UPL/AMDAL.",
      },
    ],
  },
  {
    slug: "persetujuan-lingkungan",
    cat: "lingkungan",
    nameId: "Persetujuan Lingkungan (PKL)",
    nameEn: "Environmental Approval (PKL)",
    shortId:
      "Dokumen resmi hasil AMDAL/UKL-UPL yang menempel pada perizinan berusaha Anda di OSS.",
    shortEn:
      "The official document resulting from AMDAL/UKL-UPL attached to your business license on OSS.",
    descId:
      "Persetujuan Lingkungan adalah dokumen yang mengikat hasil kajian lingkungan (AMDAL atau UKL-UPL) sebagai bagian perizinan berusaha. Tanpa PKL, perizinan berusaha berisiko dibatalkan. Kami memantau integrasi PKL di OSS, memastikan RKL-RPL terlaksana, dan mendampingi audit kepatuhan berkala.",
    descEn:
      "Environmental Approval binds the environmental study results (AMDAL or UKL-UPL) as part of the business license. Without PKL, business licenses risk cancellation. We monitor PKL integration on OSS, ensure RKL-RPL implementation, and assist periodic compliance audits.",
    benefitsId: [
      "Perizinan berusaha menjadi sah & tidak bisa digugurkan",
      "Kepatuhan RKL-RPL terpantau rapi",
      "Siap menghadapi audit lingkungan berkala",
      "Nilai plus untuk tender & kepercayaan mitra",
    ],
    benefitsEn: [
      "Business license valid & cannot be revoked easily",
      "RKL-RPL compliance neatly monitored",
      "Ready for periodic environmental audits",
      "Added value for tenders & partner trust",
    ],
    reqId: [
      "Dokumen AMDAL/UKL-UPL yang telah disetujui",
      "NIB perusahaan",
      "Laporan pemantauan lingkungan (bila ada)",
      "Data teknis kegiatan berjalan",
    ],
    reqEn: [
      "Approved AMDAL/UKL-UPL documents",
      "Company NIB",
      "Environmental monitoring reports (if any)",
      "Operational technical data",
    ],
    stepsId: [
      "Audit kesiapan dokumen lingkungan",
      "Perbaikan & penyempurnaan dokumen",
      "Pengajuan persetujuan lingkungan di OSS",
      "Pendampingan hingga PKL terbit",
    ],
    stepsEn: [
      "Environmental document readiness audit",
      "Document improvements & refinement",
      "Environmental approval submission on OSS",
      "Assistance until PKL issued",
    ],
    durationId: "2–8 minggu",
    durationEn: "2–8 weeks",
    priceFrom: "Rp2.500.000",
    keywords: [
      "persetujuan lingkungan",
      "PKL lingkungan",
      "persetujuan lingkungan OSS",
      "izin lingkungan berusaha",
      "environmental approval Indonesia",
      "PKL AMDAL",
      "RKL RPL",
      "izin berusaha lingkungan",
    ],
    faq: [
      {
        qId: "Apa risiko tanpa persetujuan lingkungan?",
        aId: "Perizinan berusaha bisa dicabut, operasional dihentikan, bahkan ada potensi pidana lingkungan. Kami memastikan Anda selalu di jalur aman.",
        qEn: "What is the risk without environmental approval?",
        aEn: "Business licenses can be revoked, operations halted, even environmental criminal liability. We keep you safely on track.",
      },
    ],
  },

  // ============ KONSTRUKSI ============
  {
    slug: "pbg",
    cat: "konstruksi",
    nameId: "PBG — Persetujuan Bangunan Gedung (eks-IMB)",
    nameEn: "PBG — Building Approval (ex-IMB)",
    shortId:
      "Izin wajib sebelum membangun/merenovasi gedung. Termasuk pengecekan gambar teknis hingga terbit di SIMBG.",
    shortEn:
      "Mandatory permit before constructing/renovating buildings. Includes technical drawing checks until issuance on SIMBG.",
    descId:
      "Persetujuan Bangunan Gedung (PBG) menggantikan IMB untuk seluruh bangunan baru, perubahan, perluasan, dan penurunan fungsi. Prosesnya menuntut gambar teknis, data tanah (PBB), dan penilaian kesesuaian tata ruang. Kesalahan kecil pada gambar atau klasifikasi bisa membuat berkas ditolak berulang. Tim teknis kami — didampingi perencana bersertifikat — merapikan seluruh dokumen hingga PBG terbit di SIMBG.",
    descEn:
      "The Building Approval (PBG) replaced IMB for all new buildings, changes, expansions, and function downgrades. The process demands technical drawings, land data (PBB), and spatial conformity assessment. Small drawing or classification errors cause repeated rejections. Our technical team — with certified planners — tidies all documents until PBG is issued on SIMBG.",
    benefitsId: [
      "Bangunan sah & bebas risiko pembongkaran",
      "Syarat wajib SLF dan pengajuan kredit bank",
      "Nilai aset bangunan naik & bisa disewakan legal",
      "Aman dari sanksi administratif denda",
    ],
    benefitsEn: [
      "Building legal & free from demolition risk",
      "Mandatory for SLF and bank credit applications",
      "Asset value rises & legally rentable",
      "Safe from administrative fines",
    ],
    reqId: [
      "Sertifikat/PBB tanah",
      "Gambar teknis arsitektur & struktur",
      "KTP & NPWP pemilik",
      "Kesesuaian tata ruang (KKPR)",
    ],
    reqEn: [
      "Land certificate/PBB",
      "Architectural & structural technical drawings",
      "Owner's ID & NPWP",
      "Spatial conformity (KKPR)",
    ],
    stepsId: [
      "Audit dokumen tanah & tata ruang",
      "Penyusunan gambar teknis standar SIMBG",
      "Pengajuan & perbaikan berkas di SIMBG",
      "PBG terbit & pendampingan cetak",
    ],
    stepsEn: [
      "Land & spatial document audit",
      "SIMBG-standard technical drawing preparation",
      "Submission & file fixes on SIMBG",
      "PBG issued & printing assistance",
    ],
    durationId: "2–8 minggu",
    durationEn: "2–8 weeks",
    priceFrom: "Rp2.000.000",
    keywords: [
      "PBG",
      "IMB baru",
      "persetujuan bangunan gedung",
      "jasa PBG murah",
      "izin bangunan SIMBG",
      "building permit Indonesia",
      "PBG online",
      "ganti IMB ke PBG",
    ],
    faq: [
      {
        qId: "Apakah IMB lama masih sah?",
        aId: "IMB lama tetap sah sesuai masa berlakunya, namun untuk renovasi/perluasan wajib PBG. Banyak bank kini juga meminta PBG/SLF baru — kami bantu migrasi.",
        qEn: "Are old IMBs still valid?",
        aEn: "Old IMBs remain valid per their terms, but renovations/expansions require PBG. Many banks now also request new PBG/SLF — we help migrate.",
      },
    ],
  },
  {
    slug: "slf",
    cat: "konstruksi",
    nameId: "SLF — Sertifikat Laik Fungsi",
    nameEn: "SLF — Certificate of Functional Feasibility",
    shortId:
      "Bukti bangunan layak digunakan — wajib untuk operasional kantor, hotel, pabrik, dan syarat kredit bank.",
    shortEn:
      "Proof the building is fit for use — mandatory for offices, hotels, factories, and bank credit requirements.",
    descId:
      "Sertifikat Laik Fungsi (SLF) diterbitkan setelah bangunan selesai dibangun dan dinyatakan memenuhi standar teknis: keselamatan struktur, keamanan kebakaran, sanitasi, dan aksesibilitas. Tanpa SLF, bangunan tidak boleh difungsikan dan sulit dijual/diasuransikan. Kami mengoordinasikan inspeksi teknis, menyempurnakan temuan, hingga SLF terbit — termasuk SLF gedung bertingkat yang kompleks.",
    descEn:
      "The Certificate of Functional Feasibility (SLF) is issued after construction completion when the building meets technical standards: structural safety, fire safety, sanitation, and accessibility. Without SLF, buildings cannot be used and are hard to sell/insure. We coordinate technical inspections, fix findings, until SLF is issued — including complex high-rise buildings.",
    benefitsId: [
      "Bangunan sah digunakan & dioperasikan",
      "Syarat wajib kredit bank & asuransi properti",
      "Melindungi penghuni dari risiko keselamatan",
      "Nilai jual/sewa properti meningkat",
    ],
    benefitsEn: [
      "Building legally usable & operable",
      "Mandatory for bank credit & property insurance",
      "Protects occupants from safety risks",
      "Property sale/rental value increases",
    ],
    reqId: [
      "PBG/IMB asli bangunan",
      "Dokumen kepemilikan tanah",
      "Gambar as-built & hasil uji teknis",
      "Data pengelola bangunan",
    ],
    reqEn: [
      "Original building PBG/IMB",
      "Land ownership documents",
      "As-built drawings & technical test results",
      "Building management data",
    ],
    stepsId: [
      "Penilaian awal kesiapan teknis gedung",
      "Perbaikan temuan pra-inspeksi",
      "Pengajuan & koordinasi inspeksi teknis",
      "SLF terbit & serah terima dokumen",
    ],
    stepsEn: [
      "Initial building technical readiness assessment",
      "Pre-inspection findings fixes",
      "Submission & technical inspection coordination",
      "SLF issued & document handover",
    ],
    durationId: "3–10 minggu",
    durationEn: "3–10 weeks",
    priceFrom: "Rp3.000.000",
    keywords: [
      "SLF",
      "sertifikat laik fungsi",
      "jasa SLF gedung",
      "SLF untuk kredit bank",
      "SLF pabrik",
      "certificate of feasibility Indonesia",
      "SLF hotel",
      "izin operasional gedung",
    ],
    faq: [
      {
        qId: "SLF harus diperbarui kapan?",
        aId: "SLF non-tunggal berlaku 5 tahun, tunggal 20 tahun. Kami mengingatkan dan menyiapkan perpanjangan jauh sebelum jatuh tempo.",
        qEn: "When must SLF be renewed?",
        aEn: "Non-single SLFs are valid 5 years, single ones 20 years. We remind and prepare renewals well before expiry.",
      },
    ],
  },
  {
    slug: "sbu-konstruksi",
    cat: "konstruksi",
    nameId: "SBU — Sertifikat Badan Usaha Konstruksi",
    nameEn: "SBU — Construction Business Entity Certificate",
    shortId:
      "Kualifikasi resmi kontraktor/penyedia jasa konstruksi untuk ikut tender dan proyek besar. Termasuk proses LPJK.",
    shortEn:
      "Official contractor qualification to join tenders and large projects. Includes LPJK processes.",
    descId:
      "Sertifikat Badan Usaha (SBU) membuktikan kualifikasi teknis perusahaan konstruksi: sub-bidang (bangunan gedung, sumber daya air, jalan, mekanikal-elektrikal), klasifikasi (M/K/B kecil hingga besar), dan kualifikasi (kualifikasi 1–3). SBU adalah syarat mutlak tenders LPJK dan proyek BUMN. Kami menyiapkan legalitas, tenaga teknis (SKA/SKT), pengalaman proyek, hingga SBU terbit.",
    descEn:
      "The Business Entity Certificate (SBU) proves a construction company's technical qualification: sub-field (buildings, water resources, roads, mechanical-electrical), classification (small to large), and qualification level (1–3). SBU is mandatory for LPJK tenders and BUMN projects. We prepare legality, technical staff (SKA/SKT), project experience, until SBU issuance.",
    benefitsId: [
      "Lolos syarat administrasi tender & proyek BUMN",
      "Klasifikasi & kualifikasi sesuai kemampuan riil",
      "Meningkatkan kepercayaan mitra proyek",
      "Dapat diperluas ke banyak sub-bidang",
    ],
    benefitsEn: [
      "Passes tender & BUMN project administration",
      "Classification & qualification matching real capacity",
      "Increases project partner trust",
      "Expandable to many sub-fields",
    ],
    reqId: [
      "Akta & NIB perusahaan",
      "Data tenaga teknis bersertifikat (SKA/SKT)",
      "Bukti pengalaman proyek",
      "NPWP & laporan keuangan sederhana",
    ],
    reqEn: [
      "Company deed & NIB",
      "Certified technical staff data (SKA/SKT)",
      "Project experience proof",
      "NPWP & simple financial statements",
    ],
    stepsId: [
      "Konsultasi sub-bidang & target kualifikasi",
      "Penyiapan tenaga teknis & dokumen pengalaman",
      "Pengajuan ke LPJK/lembaga sertifikasi",
      "SBU terbit & pendampingan cetak kartu",
    ],
    stepsEn: [
      "Consultation on sub-field & target qualification",
      "Technical staff & experience document prep",
      "Submission to LPJK/certification body",
      "SBU issued & card printing assistance",
    ],
    durationId: "3–8 minggu",
    durationEn: "3–8 weeks",
    priceFrom: "Rp5.000.000",
    keywords: [
      "SBU konstruksi",
      "jasa SBU",
      "sertifikat badan usaha LPJK",
      "SBU tender",
      "kualifikasi kontraktor",
      "construction business entity Indonesia",
      "SBU kualifikasi 1",
      "jasa tender konstruksi",
    ],
    faq: [
      {
        qId: "Berapa lama masa berlaku SBU?",
        aId: "SBU berlaku 3 tahun dan bisa diperpanjang. Kami mengingatkan sebelum jatuh tempo agar kualifikasi tender Anda tidak jeda.",
        qEn: "How long is SBU valid?",
        aEn: "SBU is valid 3 years and renewable. We remind you before expiry so your tender qualification never pauses.",
      },
    ],
  },
  {
    slug: "kkpr",
    cat: "konstruksi",
    nameId: "KKPR — Kesesuaian Kegiatan Pemanfaatan Ruang",
    nameEn: "KKPR — Spatial Utilization Activity Conformity",
    shortId:
      "Dokumen tata ruang dasar sebelum semua perizinan bangunan dan usaha di lahan tertentu.",
    shortEn:
      "The foundational spatial document before all building and business permits on specific land.",
    descId:
      "Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR) — dulu disebut pernyataan MK dan izin lokasi — memastikan rencana kegiatan Anda cocok dengan RTRW/RDTR dan tidak bertabrakan dengan zona terlarang (pertanian lindung, sempadan sungai, dst.). KKPR kini tersedia otomatis di OSS, namun banyak kasus perlu verifikasi manual oleh dinas. Kami menangani pengajuan manual, koreksi RDTR, hingga terbit.",
    descEn:
      "Spatial Utilization Activity Conformity (KKPR) — formerly MK statement and location permit — ensures your planned activity fits RTRW/RDTR and doesn't clash with restricted zones (protected farming, river setbacks, etc.). KKPR is now auto-generated on OSS, but many cases need manual agency verification. We handle manual submissions, RDTR corrections, until issuance.",
    benefitsId: [
      "Fondasi legal semua perizinan atas lahan",
      "Terhindar dari zona terlarang tata ruang",
      "Mempercepat PBG & perizinan berusaha",
      "Kepastian investasi jangka panjang",
    ],
    benefitsEn: [
      "Legal foundation of all land-based permits",
      "Avoids spatially restricted zones",
      "Speeds up PBG & business licensing",
      "Long-term investment certainty",
    ],
    reqId: [
      "Data tanah (Sertifikat/PBB) & koordinat",
      "Rencana penggunaan lahan",
      "KTP/NPWP pemohon",
      "Gambar denah rencana kegiatan",
    ],
    reqEn: [
      "Land data (Certificate/PBB) & coordinates",
      "Planned land use",
      "Applicant's ID/NPWP",
      "Activity plan site drawing",
    ],
    stepsId: [
      "Analisis tata ruang & risiko zona",
      "Penyiapan dokumen & peta koordinat",
      "Pengajuan KKPR otomatis/manual di OSS/dinas",
      "KKPR terbit & arsip digital",
    ],
    stepsEn: [
      "Spatial analysis & zone risk assessment",
      "Document & coordinate map preparation",
      "Automatic/manual KKPR submission on OSS/agency",
      "KKPR issued & digital archive",
    ],
    durationId: "1–4 minggu",
    durationEn: "1–4 weeks",
    priceFrom: "Rp1.500.000",
    keywords: [
      "KKPR",
      "izin lokasi",
      "kesesuaian tata ruang",
      "RTRW RDTR",
      "jasa KKPR",
      "spatial conformity Indonesia",
      "KKPR OSS",
      "pernyataan kesesuaian kegiatan",
    ],
    faq: [
      {
        qId: "Tanah saya zonasi pertanian, apakah bisa dipakai usaha?",
        aId: "Tergantung RDTR detail daerah dan mekanisme konversi/pencabutan zona. Kami analisis dulu tanpa biaya besar sebelum Anda berinvestasi lebih jauh.",
        qEn: "My land is zoned for farming — can I use it for business?",
        aEn: "Depends on regional RDTR details and conversion/reclassification mechanisms. We analyze first at minimal cost before you invest further.",
      },
    ],
  },

  // ============ PERDAGANGAN ============
  {
    slug: "api-u",
    cat: "perdagangan",
    nameId: "API-U — Angka Pengenal Impor Umum",
    nameEn: "API-U — General Import Identification Number",
    shortId:
      "Izin impor untuk keperluan sendiri (bukan dijual). Wajib bagi perusahaan yang mengimpor mesin, bahan, atau aset.",
    shortEn:
      "Import license for own use (not for resale). Mandatory for companies importing machinery, materials, or assets.",
    descId:
      "API-U diberikan kepada perusahaan yang mengimpor barang untuk kepentingan sendiri — mesin produksi, bahan baku internal, suku cadang, atau aset perusahaan. API-U terbit melalui OSS setelah NIB aktif, dengan batasan KBLI tertentu. Kesalahan memilih API (U/P) bisa membuat kontainer Anda tertahan di pelabuhan. Kami pastikan API yang tepat, dokumen PEB/PIB siap, dan pendampingan bea cukai.",
    descEn:
      "API-U is granted to companies importing goods for their own use — production machinery, internal materials, spare parts, or company assets. API-U is issued via OSS after an active NIB, with certain KBLI restrictions. Choosing the wrong API (U/P) can strand your containers at port. We ensure the right API, ready PEB/PIB documents, and customs assistance.",
    benefitsId: [
      "Impor mesin & barang untuk keperluan sendiri sah",
      "Integrasi langsung dengan sistem bea cukai",
      "Menghindari retensi kontainer di pelabuhan",
      "Fondasi perizinan impor lanjutan",
    ],
    benefitsEn: [
      "Legal import of machinery & own-use goods",
      "Direct integration with customs systems",
      "Avoids container retention at ports",
      "Foundation for further import licensing",
    ],
    reqId: [
      "NIB aktif & NPWP perusahaan",
      "KBLI sesuai kegiatan impor",
      "Data perusahaan & penanggung jawab",
      "Rencana barang yang diimpor",
    ],
    reqEn: [
      "Active NIB & company NPWP",
      "KBLI matching import activities",
      "Company & responsible person data",
      "Planned import goods list",
    ],
    stepsId: [
      "Audit KBLI & kebutuhan API",
      "Pengajuan API-U di OSS RBA",
      "Verifikasi & aktivasi API",
      "Pendampingan awal impor pertama",
    ],
    stepsEn: [
      "KBLI & API needs audit",
      "API-U submission on OSS RBA",
      "Verification & API activation",
      "Assistance for first import",
    ],
    durationId: "2–5 hari kerja",
    durationEn: "2–5 working days",
    priceFrom: "Rp1.500.000",
    keywords: [
      "API U",
      "angka pengenal impor umum",
      "izin impor barang",
      "jasa API-U",
      "API U OSS",
      "general import identification Indonesia",
      "izin impor mesin",
      "import license Indonesia",
    ],
    faq: [
      {
        qId: "Bedanya API-U dan API-P?",
        aId: "API-U untuk barang keperluan sendiri; API-P untuk barang yang dijual kembali (trader). Menggunakan API yang salah untuk transaksi bisa dianggap pelanggaran bea cukai.",
        qEn: "Difference between API-U and API-P?",
        aEn: "API-U is for own-use goods; API-P is for resale (traders). Using the wrong API for transactions may be a customs violation.",
      },
    ],
  },
  {
    slug: "api-p",
    cat: "perdagangan",
    nameId: "API-P — Angka Pengenal Impor Produsen",
    nameEn: "API-P — Producer Import Identification Number",
    shortId:
      "Untuk perusahaan dagang yang mengimpor barang untuk dijual kembali. Kuncinya KBLI perdagangan yang benar.",
    shortEn:
      "For trading companies importing goods for resale. The key is the correct trading KBLI.",
    descId:
      "API-P diberikan kepada perusahaan yang bergerak di bidang perdagangan (distributor, importir-reseller, e-commerce besar) dan mengimpor barang untuk diperdagangkan. API-P menuntut KBLI perdagangan besar/ritel yang sesuai jenis barang — elektronik, tekstil, makanan, dan seterusnya. Kami menyiapkan KBLI yang tepat, menyelesaikan API-P di OSS, dan menghubungkannya dengan perizinan barang tertentu bila diperlukan (mis. LPI, SNI impor).",
    descEn:
      "API-P is granted to trading companies (distributors, importer-resellers, large e-commerce) importing goods for trade. API-P requires trading KBLI (wholesale/retail) matching the goods — electronics, textiles, food, and so on. We prepare the right KBLI, complete API-P on OSS, and connect it with specific goods licensing when needed (e.g., LPI, import SNI).",
    benefitsId: [
      "Impor dagang legal & siap dijual kembali",
      "Terkait langsung dengan izin barang tertentu",
      "Bea cukai berjalan mulus tanpa hambatan",
      "Skalabel untuk e-commerce & distributor besar",
    ],
    benefitsEn: [
      "Legal trade imports ready for resale",
      "Directly linked to specific goods licenses",
      "Smooth customs without obstacles",
      "Scalable for e-commerce & large distributors",
    ],
    reqId: [
      "NIB aktif dengan KBLI perdagangan",
      "NPWP & data perusahaan",
      "Jenis barang yang akan diperdagangkan",
      "Rencana volume impor",
    ],
    reqEn: [
      "Active NIB with trading KBLI",
      "NPWP & company data",
      "Types of goods to trade",
      "Planned import volume",
    ],
    stepsId: [
      "Analisis jenis barang & KBLI yang dibutuhkan",
      "Penyesuaian KBLI di OSS bila perlu",
      "Pengajuan & aktivasi API-P",
      "Konsultasi perizinan barang tertentu lanjutan",
    ],
    stepsEn: [
      "Analysis of goods types & required KBLI",
      "KBLI adjustment on OSS if needed",
      "API-P submission & activation",
      "Further specific-goods licensing consultation",
    ],
    durationId: "2–5 hari kerja",
    durationEn: "2–5 working days",
    priceFrom: "Rp1.750.000",
    keywords: [
      "API P",
      "angka pengenal impor produsen",
      "izin impor dagang",
      "jasa API-P",
      "API P OSS",
      "producer import identification Indonesia",
      "izin impor e-commerce",
      "importir resmi",
    ],
    faq: [
      {
        qId: "Apakah API-P bisa untuk semua jenis barang?",
        aId: "API-P harus sesuai KBLI barang dagangan. Barang tertentu (makanan, kosmetik, elektronik, dll.) butuh izin tambahan seperti LPI/SNI/impor terikat. Kami petakan semuanya sejak awal.",
        qEn: "Can API-P cover all goods?",
        aEn: "API-P must match the goods KBLI. Certain goods (food, cosmetics, electronics, etc.) need additional licenses like LPI/SNI/restricted import. We map everything upfront.",
      },
    ],
  },
  {
    slug: "izin-barang-tertentu",
    cat: "perdagangan",
    nameId: "Izin Perdagangan Barang Tertentu",
    nameEn: "Specific Goods Trade License",
    shortId:
      "Izin tambahan untuk barang diatur khusus: LPG, gula, beras, elektronik, sampai barang prekurzor.",
    shortEn:
      "Additional license for specially regulated goods: LPG, sugar, rice, electronics, to precursor items.",
    descId:
      "Sejumlah barang diperdagangkan dengan izin khusus dari Kemendag: barang kebutuhan pokok, elektronik (TE), textile & textile products, barang berbahaya, hingga prekurzor farmasi. Izin ini berbentuk Persetujuan Impor (PI) atau Surat Keterangan terdaftar di Insw. Kesalahan dokumen menyebabkan PI ditolak dan barang tertahan. Kami menyiapkan seluruh kelengkapan hingga PI terbit dan terintegrasi portal Insw.",
    descEn:
      "Certain goods trade under special licenses from the Ministry of Trade: staple goods, electronics (TE), textiles, dangerous goods, to pharmaceutical precursors. These take the form of Import Approvals (PI) or registered letters on Insw. Document errors lead to rejected PIs and stuck goods. We prepare everything until PI is issued and integrated with the Insw portal.",
    benefitsId: [
      "Barang regulasi khusus dapat diperdagangkan sah",
      "Integrasi penuh dengan portal Insw Kemendag",
      "Barang tidak tertahan di pelabuhan",
      "Kepercayaan pemasok luar negeri meningkat",
    ],
    benefitsEn: [
      "Specially regulated goods legally tradable",
      "Full integration with Kemendag Insw portal",
      "Goods not stuck at ports",
      "Increased foreign supplier trust",
    ],
    reqId: [
      "NIB & API aktif",
      "NPWP perusahaan",
      "Detail barang (HS Code) & negara asal",
      "Dokumen kontrak/PO impor",
    ],
    reqEn: [
      "Active NIB & API",
      "Company NPWP",
      "Goods details (HS Code) & origin country",
      "Import contract/PO documents",
    ],
    stepsId: [
      "Pemetaan regulasi barang & jenis izin",
      "Penyiapan dokumen teknis barang",
      "Pengajuan izin/PI di portal Insw",
      "Pendampingan hingga izin terbit & dipakai",
    ],
    stepsEn: [
      "Goods regulation & license type mapping",
      "Technical goods document preparation",
      "License/PI submission on Insw portal",
      "Assistance until license issued & used",
    ],
    durationId: "1–4 minggu",
    durationEn: "1–4 weeks",
    priceFrom: "Rp2.500.000",
    keywords: [
      "izin barang tertentu",
      "PI impor",
      "LPI kemendag",
      "izin impor elektronik",
      "izin impor barang khusus",
      "specific goods import Indonesia",
      "Insw Kemendag",
      "izin TE textile",
    ],
    faq: [
      {
        qId: "Barang saya masuk kategori apa?",
        aId: "Kami periksa melalui HS Code dan daftar regulasi Kemendag terbaru. Screening ini gratis saat konsultasi awal.",
        qEn: "What category are my goods?",
        aEn: "We check via HS Code and the latest Kemendag regulations. This screening is free during initial consultation.",
      },
    ],
  },
  {
    slug: "izin-tps-gudang",
    cat: "perdagangan",
    nameId: "Izin TPS & Gudang (Tempat Penyimpanan)",
    nameEn: "TPS & Warehouse License (Storage Facilities)",
    shortId:
      "Izin tempat penimbunan sementara (TPS) dan gudang untuk kelancaran distribusi & bea cukai.",
    shortEn:
      "Temporary storage (TPS) and warehouse licenses for smooth distribution & customs.",
    descId:
      "Untuk perusahaan logistik, e-commerce, dan importir besar, izin Tempat Penyimpanan Sementara (TPS) dan gudang berikat/tersertifikasi adalah kunci efisiensi: barang bisa ditimbun sebelum PIB diselesaikan, distribusi lebih cepat, dan kewajiban bea cukai lebih fleksibel. Kami mengurus izin TPS/gudang dari sisi perizinan berusaha, bea cukai (BC), hingga kesesuaian bangunan dan keamanan.",
    descEn:
      "For logistics companies, e-commerce, and large importers, Temporary Storage (TPS) and bonded/certified warehouse licenses are efficiency keys: goods can be stored before PIB completion, faster distribution, and flexible customs obligations. We handle TPS/warehouse licenses from business licensing, customs (BC), to building conformity and security.",
    benefitsId: [
      "Efisiensi distribusi & arus barang impor",
      "Fleksibilitas pembayaran bea masuk",
      "Syarat kerja sama marketplace besar",
      "Kepatuhan penuh Kemenkeu/DJBC",
    ],
    benefitsEn: [
      "Distribution & import flow efficiency",
      "Import duty payment flexibility",
      "Requirement for major marketplace partnerships",
      "Full Kemenkeu/DJBC compliance",
    ],
    reqId: [
      "Legalitas perusahaan lengkap",
      "Data lokasi & bangunan gudang",
      "Kepemilikan/sewa lahan",
      "Rencana operasional penyimpanan",
    ],
    reqEn: [
      "Complete company legality",
      "Warehouse location & building data",
      "Land ownership/lease",
      "Storage operational plan",
    ],
    stepsId: [
      "Konsultasi jenis TPS/gudang yang dibutuhkan",
      "Penyiapan dokumen teknis & bangunan",
      "Pengajuan perizinan berusaha & DJBC",
      "Inspeksi & izin terbit",
    ],
    stepsEn: [
      "Consultation on required TPS/warehouse type",
      "Technical & building document prep",
      "Business licensing & DJBC submission",
      "Inspection & license issuance",
    ],
    durationId: "1–3 bulan",
    durationEn: "1–3 months",
    priceFrom: "Rp7.500.000",
    keywords: [
      "izin TPS",
      "tempat penimbunan sementara",
      "izin gudang berikat",
      "jasa izin gudang",
      "TPS bea cukai",
      "bonded warehouse Indonesia",
      "izin logistik",
      "gudang importir",
    ],
    faq: [
      {
        qId: "Bisakah gudang di kawasan perumahan?",
        aId: "Umumnya tidak — harus sesuai zonasi dan standar keamanan. Kami bantu audit lokasi lebih dulu agar investasi Anda tidak salah langkah.",
        qEn: "Can a warehouse be in a residential area?",
        aEn: "Generally no — it must fit zoning and security standards. We help audit the location first so your investment doesn't misstep.",
      },
    ],
  },

  // ============ PANGAN, OBAT & BPOM ============
  {
    slug: "izin-edar-bpom",
    cat: "pangan-obat",
    nameId: "Izin Edar BPOM (MD) Pangan Olahan",
    nameEn: "BPOM Distribution License (MD) for Processed Food",
    shortId:
      "Kunci masuk ritel modern & marketplace: nomor MD resmi BPOM untuk produk pangan olahan Anda.",
    shortEn:
      "The key to modern retail & marketplaces: official BPOM MD number for your processed food products.",
    descId:
      "Nomor MD dari BPOM adalah bukti bahwa pangan olahan Anda telah lolos evaluasi keamanan dan kelayakan — syarat wajib untuk masuk supermarket, minimarket, dan sebagian besar marketplace besar. Prosesnya menuntut pabrikasi yang memenuhi CPPOB, uji laboratorium, label sesuai, dan standar produk. GConsultant mendampingi dari audit pra-registrasi pabrik, pengaturan resep & label, uji lab mitra terakreditasi, hingga nomor MD terbit.",
    descEn:
      "The MD number from BPOM proves your processed food has passed safety and feasibility evaluation — mandatory for supermarkets, minimarkets, and most major marketplaces. The process demands CPPOB-compliant manufacturing, laboratory testing, proper labeling, and product standards. GConsultant assists from pre-registration factory audits, recipe & label setup, accredited lab testing, until the MD number is issued.",
    benefitsId: [
      "Produk sah dipasarkan nasional & ekspor",
      "Masuk ritel modern, HORECA, dan marketplace",
      "Kepercayaan konsumen meningkat drastis",
      "Perlindungan hukum dari UU Pangan",
    ],
    benefitsEn: [
      "Products legally marketed nationally & exported",
      "Access modern retail, HORECA, and marketplaces",
      "Consumer trust dramatically increases",
      "Legal protection under the Food Law",
    ],
    reqId: [
      "NIB & lokasi produksi memenuhi CPPOB",
      "Komposisi produk & proses produksi",
      "Mock-up label kemasan",
      "Hasil uji laboratorium terakreditasi",
    ],
    reqEn: [
      "NIB & production site meeting CPPOB",
      "Product composition & production process",
      "Packaging label mock-up",
      "Accredited laboratory test results",
    ],
    stepsId: [
      "Audit kesiapan pabrik & GMP",
      "Penyusunan berkas & label sesuai regulasi",
      "Uji laboratorium & pengajuan e-Registration",
      "Evaluasi BPOM & nomor MD terbit",
    ],
    stepsEn: [
      "Factory & GMP readiness audit",
      "File & label preparation per regulations",
      "Lab testing & e-Registration submission",
      "BPOM evaluation & MD number issued",
    ],
    durationId: "1–4 bulan",
    durationEn: "1–4 months",
    priceFrom: "Rp4.500.000",
    keywords: [
      "izin edar BPOM",
      "nomor MD",
      "jasa BPOM murah",
      "BPOM pangan olahan",
      "izin edar makanan",
      "BPOM registration Indonesia",
      "MD number food",
      "jasa izin edar produk",
    ],
    faq: [
      {
        qId: "Berapa lama nomor MD berlaku?",
        aId: "Nomor MD pangan olahan berlaku 3 tahun dan bisa diperpanjang. Sistem pengingat kami memastikan perpanjangan tidak terlambat sehingga penjualan tidak berhenti.",
        qEn: "How long is the MD number valid?",
        aEn: "Processed food MD numbers are valid 3 years and renewable. Our reminder system ensures timely renewal so sales never stop.",
      },
      {
        qId: "Produk home industry bisa dapat MD?",
        aId: "Home industry harus naik kelas ke fasilitas produksi memenuhi CPPOB dulu. Alternatifnya mulai dari PIRT. Kami bantu rancang jalur terbaik sesuai skala usaha Anda.",
        qEn: "Can home industry products get an MD?",
        aEn: "Home industries must first upgrade to CPPOB-compliant facilities. Alternatively start with PIRT. We help design the best path per your business scale.",
      },
    ],
  },
  {
    slug: "sertifikasi-halal",
    cat: "pangan-obat",
    nameId: "Sertifikasi Halal BPJPH (Label Halal Indonesia)",
    nameEn: "Halal Certification BPJPH (Indonesian Halal Label)",
    shortId:
      "Wajib hukum bagi produk pangan, minuman, dan jasa. Kami urus dari PPH hingga label halal resmi.",
    shortEn:
      "Legally mandatory for food, beverage, and services. We handle from PPH to official halal labels.",
    descId:
      "Berdasarkan UU 33/2014 dan penetapan pemerintah, produk pangan-minuman serta jasa tertentu WAJIB bersertifikat halal dengan tenggat yang terus berjalan. Sertifikasi halal melibatkan SIHALAL, pendamping PPH, pemeriksa (LPH), dan fatwa MUI/BPJPH. GConsultant menyiapkan dokumen produk, bahan baku, proses produksi, mengoordinasikan audit LPH, hingga sertifikat dan label halal resmi terbit — termasuk jalur bersubsidi UMKM bila memenuhi syarat.",
    descEn:
      "Under Law 33/2014 and government deadlines, food-beverage products and certain services MUST be halal certified. Halal certification involves SIHALAL, PPH assistants, inspectors (LPH), and MUI/BPJPH fatwa. GConsultant prepares product documents, raw materials, production processes, coordinates LPH audits, until certificates and official halal labels are issued — including subsidized SME routes when eligible.",
    benefitsId: [
      "Memenuhi kewajiban hukum halal Indonesia",
      "Pasaran muslim global terbuka lebih lebar",
      "Nilai jual produk naik di pasar domestik",
      "Siap ekspor ke negara-negara OIC",
    ],
    benefitsEn: [
      "Fulfills Indonesia's halal legal obligation",
      "Global Muslim markets open wider",
      "Product value rises in domestic markets",
      "Ready to export to OIC countries",
    ],
    reqId: [
      "NIB & data fasilitas produksi",
      "Daftar bahan baku & pemasok",
      "Alur proses produksi",
      "KTP & data pengelola",
    ],
    reqEn: [
      "NIB & production facility data",
      "Raw material & supplier list",
      "Production process flow",
      "ID & management data",
    ],
    stepsId: [
      "Pendampingan PPH & pembuatan akun SIHALAL",
      "Penyusunan dokumen produk & bahan",
      "Audit lapangan oleh LPH",
      "Fatwa & sertifikat halal terbit",
    ],
    stepsEn: [
      "PPH assistance & SIHALAL account setup",
      "Product & ingredient document prep",
      "On-site audit by LPH",
      "Fatwa & halal certificate issued",
    ],
    durationId: "1–4 bulan",
    durationEn: "1–4 months",
    priceFrom: "Rp2.750.000",
    keywords: [
      "sertifikasi halal",
      "jasa sertifikasi halal murah",
      "BPJPH SIHALAL",
      "label halal Indonesia",
      "sertifikat halal UMKM",
      "halal certification Indonesia",
      "audit halal LPH",
      "wajib halal 2024",
    ],
    faq: [
      {
        qId: "Apakah ada sertifikasi halal gratis?",
        aId: "Pemerintah menyediakan program self-declare bersubsidi untuk UMKM melalui PPH bersertifikat. Kami bantu daftar dan pastikan dokumen Anda diterima.",
        qEn: "Is there free halal certification?",
        aEn: "The government provides subsidized self-declare programs for SMEs via certified PPH. We help register and ensure your documents are accepted.",
      },
    ],
  },
  {
    slug: "sertifikasi-sni",
    cat: "pangan-obat",
    nameId: "Sertifikasi SNI / SPPT-SNI",
    nameEn: "SNI Certification / SPPT-SNI",
    shortId:
      "Standar Nasional Indonesia — wajib untuk banyak produk sekaligus penanda kualitas premium.",
    shortEn:
      "Indonesian National Standard — mandatory for many products and a premium quality marker.",
    descId:
      "SNI bersifat wajib untuk produk tertentu (sepatu anak, kabel, baja, sirup, instalasi listrik, dan puluhan lain) dan bersifat sukarela tapi bernilai jual tinggi untuk produk lain. Prosesnya: uji tipe di laboratorium terakreditasi KAN, audit sistem mutu di pabrik, hingga SPPT-SNI terbit dari BSN/LSPro. Kami mengoordinasikan seluruhnya termasuk penyiapan dokumentasi ISO-like dan pendampingan audit.",
    descEn:
      "SNI is mandatory for certain products (children's shoes, cables, steel, syrup, electrical installations, dozens more) and voluntary but high-value for others. The process: type testing at KAN-accredited labs, factory quality system audits, until SPPT-SNI issuance from BSN/LSPro. We coordinate everything including ISO-like documentation and audit assistance.",
    benefitsId: [
      "Produk sah dipasarkan (untuk SNI wajib)",
      "Syarat masuk proyek pemerintah & ritel besar",
      "Menjadi penanda mutu yang dipercaya pasar",
      "Memudahkan akses ekspor ke negara tertentu",
    ],
    benefitsEn: [
      "Products legally marketable (for mandatory SNI)",
      "Gateway to government projects & big retail",
      "Trusted quality marker for the market",
      "Eases export access to certain countries",
    ],
    reqId: [
      "NIB & data pabrik",
      "Spesifikasi produk & proses",
      "Sampel produk untuk uji tipe",
      "Dokumen mutu (bisa dibantu disusun)",
    ],
    reqEn: [
      "NIB & factory data",
      "Product specifications & process",
      "Product samples for type testing",
      "Quality documents (we help prepare)",
    ],
    stepsId: [
      "Pemetaan SNI yang berlaku untuk produk",
      "Uji tipe di laboratorium terakreditasi",
      "Penyusunan sistem mutu & berkas",
      "Audit LSPro & SPPT-SNI terbit",
    ],
    stepsEn: [
      "Applicable SNI mapping for the product",
      "Type testing at accredited laboratories",
      "Quality system & file preparation",
      "LSPro audit & SPPT-SNI issued",
    ],
    durationId: "2–4 bulan",
    durationEn: "2–4 months",
    priceFrom: "Rp8.500.000",
    keywords: [
      "sertifikasi SNI",
      "SPPT SNI",
      "jasa SNI murah",
      "SNI wajib produk",
      "LSPro SNI",
      "SNI certification Indonesia",
      "uji tipe SNI",
      "biaya SNI",
    ],
    faq: [
      {
        qId: "Produk saya wajib SNI atau tidak?",
        aId: "Kami cek daftar SNI wajib per HS Code/KBLI terbaru. Bila tidak wajib, kami beri rekomendasi apakah SNI sukarela bernilai investasi bagi Anda.",
        qEn: "Is my product subject to mandatory SNI?",
        aEn: "We check the latest mandatory SNI list per HS Code/KBLI. If not mandatory, we recommend whether voluntary SNI is a worthwhile investment for you.",
      },
    ],
  },
  {
    slug: "pirt",
    cat: "pangan-obat",
    nameId: "PIRT — Pangan Industri Rumah Tangga",
    nameEn: "PIRT — Home Industry Food Permit",
    shortId:
      "Jalur tercepat melegalkan produk pangan UMKM rumahan untuk dijual luas secara legal.",
    shortEn:
      "The fastest route to legalize home-based SME food products for wide legal sales.",
    descId:
      "PIRT adalah izin edar untuk pangan olahan skala rumah tangga dengan risiko rendah — keripik, sambal, abon, minuman kemasan, dan sejenisnya. Nomor PIRT berlaku 5 tahun dan menjadi syarat masuk toko, online shop resmi, dan pengajuan PNM/kredit usaha. Kami menyiapkan dokumen, mengoordinasikan pelatihan penjamah makanan, uji lab sesuai ketentuan, hingga kartu PIRT terbit dari dinas kesehatan.",
    descEn:
      "PIRT is a distribution permit for low-risk household-scale processed foods — chips, sambal, jerky, packaged drinks, and similar. PIRT numbers are valid 5 years and required for store entry, official online shops, and PNM/business credit applications. We prepare documents, coordinate food handler training, required lab tests, until the PIRT card is issued by the health office.",
    benefitsId: [
      "Produk rumahan legal dijual di seluruh Indonesia",
      "Syarat masuk toko & marketplace resmi",
      "Memperkuat pengajuan modal usaha (KUR/PNM)",
      "Proses tercepat di kelas izin pangan",
    ],
    benefitsEn: [
      "Home products legally sold across Indonesia",
      "Requirement for stores & official marketplaces",
      "Strengthens business capital applications (KUR/PNM)",
      "Fastest process in food licensing class",
    ],
    reqId: [
      "KTP & data usaha rumahan",
      "Resep & proses produksi",
      "Mock-up label produk",
      "Hasil uji laboratorium",
    ],
    reqEn: [
      "ID & home business data",
      "Recipe & production process",
      "Product label mock-up",
      "Laboratory test results",
    ],
    stepsId: [
      "Konsultasi kategori pangan & label",
      "Pelatihan penjamah makanan & dokumen",
      "Uji lab & pengajuan ke dinas kesehatan",
      "Kartu PIRT terbit",
    ],
    stepsEn: [
      "Food category & label consultation",
      "Food handler training & documents",
      "Lab tests & health office submission",
      "PIRT card issued",
    ],
    durationId: "2–4 minggu",
    durationEn: "2–4 weeks",
    priceFrom: "Rp950.000",
    keywords: [
      "PIRT",
      "jasa PIRT murah",
      "izin edar PIRT",
      "PIRT UMKM",
      "pangan industri rumah tangga",
      "PIRT online",
      "home industry permit Indonesia",
      "izin jual makanan rumahan",
    ],
    faq: [
      {
        qId: "PIRT bisa dipakai jual di marketplace?",
        aId: "Ya, sebagian besar marketplace menerima PIRT untuk produk pangan risiko rendah. Untuk pangan risiko tinggi (susuan, daging olahan tertentu) diperlukan MD BPOM.",
        qEn: "Can PIRT be used to sell on marketplaces?",
        aEn: "Yes, most marketplaces accept PIRT for low-risk foods. For high-risk foods (dairy, certain processed meats), BPOM MD is required.",
      },
    ],
  },
  {
    slug: "registrasi-suplemen-kosmetik",
    cat: "pangan-obat",
    nameId: "Registrasi BPOM Suplemen & Notifikasi Kosmetik",
    nameEn: "BPOM Registration for Supplements & Cosmetics Notification",
    shortId:
      "Legalitas produk kecantikan & kesehatan: notifikasi kosmetik dan registrasi suplemen di BPOM.",
    shortEn:
      "Beauty & health product legality: cosmetics notification and supplement registration at BPOM.",
    descId:
      "Kosmetik diatur melalui notifikasi (lebih cepat, berlaku 3 tahun), sedangkan suplemen kesehatan melalui registrasi dengan nomor BPOM penuh. Keduanya menuntut data formula, CDA (Certificate of Drug Analyst), uji laboratorium, dan fasilitas produksi memenuhi CPKB/CPOTB. Kami menangani jalur produksi sendiri maupun kontrak pihak ketiga, termasuk produk impor dengan apotek perusahaan impor tunggal.",
    descEn:
      "Cosmetics are governed through notification (faster, valid 3 years), while health supplements go through registration with a full BPOM number. Both demand formula data, CDA (Certificate of Drug Analyst), lab tests, and CPKB/CPOTB-compliant facilities. We handle both own-production and third-party contract routes, including imported products with single-importer pharmacies.",
    benefitsId: [
      "Produk kecantikan/kesehatan sah & terlindungi",
      "Bebas risiko sita & denda peredaran ilegal",
      "Bisa iklan resmi di media & marketplace besar",
      "Fondasi bangun brand kepercayaan konsumen",
    ],
    benefitsEn: [
      "Beauty/health products legal & protected",
      "Free from seizure & illegal distribution fines",
      "Eligible for official media & marketplace ads",
      "Foundation for consumer-trust branding",
    ],
    reqId: [
      "NIB & data fasilitas produksi",
      "Formula & daftar bahan aktif",
      "CDA & uji laboratorium",
      "Mock-up kemasan",
    ],
    reqEn: [
      "NIB & production facility data",
      "Formula & active ingredient list",
      "CDA & laboratory tests",
      "Packaging mock-up",
    ],
    stepsId: [
      "Klasifikasi produk (kosmetik/suplemen)",
      "Penyiapan CDA, uji lab & berkas",
      "Pengajuan notifikasi/registrasi e-BPOM",
      "Notifikasi/registrasi terbit",
    ],
    stepsEn: [
      "Product classification (cosmetic/supplement)",
      "CDA, lab tests & file preparation",
      "Notification/registration via e-BPOM",
      "Notification/registration issued",
    ],
    durationId: "2 minggu–3 bulan",
    durationEn: "2 weeks–3 months",
    priceFrom: "Rp3.000.000",
    keywords: [
      "notifikasi BPOM kosmetik",
      "registrasi suplemen BPOM",
      "jasa BPOM kosmetik",
      "izin jual skincare",
      "BPOM notification Indonesia",
      "izin edar suplemen",
      "CDA kosmetik",
      "jasa legalitas produk skincare",
    ],
    faq: [
      {
        qId: "Apa beda notifikasi dan registrasi?",
        aId: "Notifikasi untuk kosmetik — lebih cepat & murah. Registrasi untuk suplemen/obat — lebih ketat dengan evaluasi kesehatan. Kami tentukan jalur yang tepat dari awal.",
        qEn: "What's the difference between notification and registration?",
        aEn: "Notification is for cosmetics — faster & cheaper. Registration is for supplements/drugs — stricter with health evaluation. We determine the right path from the start.",
      },
    ],
  },
];

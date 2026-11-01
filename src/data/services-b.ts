import type { Service } from "./services-types";

export const SERVICES_B: Service[] = [
  // ============ KESEHATAN ============
  {
    slug: "sip-dokter",
    cat: "kesehatan",
    nameId: "SIP — Surat Izin Praktik Dokter",
    nameEn: "SIP — Medical Practice License",
    shortId:
      "Izin resmi dokter untuk praktik di klinik, rumah sakit, atau fasilitas kesehatan lainnya.",
    shortEn:
      "Official license for doctors to practice at clinics, hospitals, or other health facilities.",
    descId:
      "Surat Izin Praktik (SIP) wajib bagi setiap dokter/dokter gigi yang akan berpraktik di wilayah tertentu, diterbitkan dinas kesehatan kabupaten/kota berdasarkan STR dari KKI. Berlaku 5 tahun dan bisa diurus untuk multi-lokasi praktik. Kami menangani seluruh berkas — STR, rekomendasi OP, tempat praktik — hingga SIP terbit, termasuk perpanjangan dan SIP tanda registrasi (STR baru).",
    descEn:
      "The Practice License (SIP) is mandatory for every doctor/dentist practicing in a specific region, issued by the regency/city health office based on KKI's STR. Valid 5 years and can be processed for multiple practice locations. We handle the entire file — STR, OP recommendation, practice site — until SIP is issued, including renewals and new-registration SIP.",
    benefitsId: [
      "Praktik resmi & aman dari razia dinas",
      "Bisa bergabung dengan BPJS & asuransi",
      "Multi-lokasi praktik dengan izin yang sah",
      "Reputasi profesional terjaga",
    ],
    benefitsEn: [
      "Official practice & safe from agency raids",
      "Eligible to join BPJS & insurance",
      "Multi-location practice with valid licenses",
      "Professional reputation maintained",
    ],
    reqId: [
      "STR aktif dari KKI",
      "KTP, ijazah & foto terbaru",
      "Surat rekomendasi dari organisasi profesi (OP)",
      "Data tempat praktik",
    ],
    reqEn: [
      "Active STR from KKI",
      "ID, diploma & recent photos",
      "Professional organization (OP) recommendation letter",
      "Practice location data",
    ],
    stepsId: [
      "Konsultasi wilayah & jenis SIP",
      "Penyiapan STR, rekomendasi OP & dokumen",
      "Pengajuan ke dinas kesehatan daerah",
      "SIP terbit & serah terima",
    ],
    stepsEn: [
      "Consultation on region & SIP type",
      "STR, OP recommendation & document prep",
      "Submission to regional health office",
      "SIP issued & handover",
    ],
    durationId: "1–3 minggu",
    durationEn: "1–3 weeks",
    priceFrom: "Rp1.250.000",
    keywords: [
      "SIP dokter",
      "surat izin praktik",
      "jasa SIP murah",
      "SIP online dinas kesehatan",
      "perpanjangan SIP",
      "medical practice license Indonesia",
      "SIP dokter gigi",
      "izin praktik klinik",
    ],
    faq: [
      {
        qId: "SIP berlaku berapa lama?",
        aId: "SIP berlaku 5 tahun sesuai masa STR. Kami mengingatkan dan mengurus perpanjangan sebelum jatuh tempo agar praktik tidak terputus.",
        qEn: "How long is SIP valid?",
        aEn: "SIP is valid 5 years matching the STR term. We remind and process renewals before expiry so practice never stops.",
      },
    ],
  },
  {
    slug: "izin-klinik",
    cat: "kesehatan",
    nameId: "Izin Usaha Klinik",
    nameEn: "Clinic Business License",
    shortId:
      "Legalitas operasional klinik pratama/utama — dari perizinan berusaha hingga izin klinik dari dinas.",
    shortEn:
      "Operational legality for primary/main clinics — from business licensing to the health office clinic permit.",
    descId:
      "Klinik membutuhkan dua lapis legalitas: perizinan berusaha berbasis risiko di OSS dan izin klinik dari dinas kesehatan dengan standar minimal sarana, SDM (dokter penyelia, perawat), serta mutu layanan. Kami menyusun seluruh dokumen teknis (organisasi, SARAF, alur layanan), memastikan ruang memenuhi standar, dan mendampingi penilaian lapangan hingga izin terbit.",
    descEn:
      "Clinics need two legality layers: risk-based business licensing on OSS and the health office clinic permit with minimum facility standards, staff (supervising doctors, nurses), and service quality. We prepare all technical documents (organization, facility standards, service flows), ensure rooms meet standards, and assist field assessments until permits are issued.",
    benefitsId: [
      "Klinik resmi beroperasi & bebas sanksi",
      "Bisa melayani BPJS & asuransi komersial",
      "Standar sarana & SDM sesuai permenkes",
      "Kepatuhan penuh untuk pengembangan cabang",
    ],
    benefitsEn: [
      "Clinic officially operates & sanction-free",
      "Eligible to serve BPJS & commercial insurance",
      "Facility & staff standards per health regulations",
      "Full compliance for branch expansion",
    ],
    reqId: [
      "NIB & KBLI klinik",
      "Data dokter penyelia & SDM kesehatan",
      "Denah & kepemilikan tempat",
      "Rencana pelayanan klinik",
    ],
    reqEn: [
      "NIB & clinic KBLI",
      "Supervising doctor & health staff data",
      "Floor plan & premises ownership",
      "Clinic service plan",
    ],
    stepsId: [
      "Konsultasi tipe klinik & standar sarana",
      "Penyiapan dokumen teknis & SDM",
      "Perizinan berusaha di OSS",
      "Penilaian dinas & izin klinik terbit",
    ],
    stepsEn: [
      "Clinic type & facility standard consultation",
      "Technical & staff document prep",
      "Business licensing on OSS",
      "Agency assessment & clinic permit issued",
    ],
    durationId: "1–2 bulan",
    durationEn: "1–2 months",
    priceFrom: "Rp3.500.000",
    keywords: [
      "izin klinik",
      "jasa izin klinik murah",
      "izin klinik pratama",
      "legalitas klinik",
      "izin klinik OSS",
      "clinic license Indonesia",
      "izin operasional klinik",
      "klinik BPJS",
    ],
    faq: [
      {
        qId: "Klinik bisa di ruko?",
        aId: "Bisa asalkan memenuhi standar ruang, ventilasi, dan zonasi memungkinkan layanan kesehatan. Kami audit lokasi dulu sebelum Anda berinvestasi alat.",
        qEn: "Can a clinic be in a shop-house?",
        aEn: "Yes if it meets room standards, ventilation, and zoning allows health services. We audit the location first before you invest in equipment.",
      },
    ],
  },
  {
    slug: "izin-apotek",
    cat: "kesehatan",
    nameId: "Izin Apotek & Apotek Cabang",
    nameEn: "Pharmacy & Branch Pharmacy License",
    shortId:
      "Izin operasional apotek dengan apoteker penanggung jawab — termasuk SIA, SIPA, dan perizinan berusaha.",
    shortEn:
      "Operational pharmacy license with responsible pharmacist — including SIA, SIPA, and business licensing.",
    descId:
      "Apotek memerlukan Surat Izin Apotek (SIA) dari dinas, apoteker penanggung jawab dengan SIPA, sarana sesuai standar farmasi, serta perizinan berusaha di OSS. Untuk jaringan cabang, ada aturan khusus persediaan obat dan penguasaan apoteker. Kami menangani seluruh lapisan — termasuk pencarian/mitra apoteker bila diperlukan — hingga apotek Anda resmi buka.",
    descEn:
      "Pharmacies require a Pharmacy License (SIA) from the health office, a responsible pharmacist with SIPA, facilities per pharmaceutical standards, and OSS business licensing. Branch networks have special rules for drug stock and pharmacist coverage. We handle all layers — including pharmacist search/partnership when needed — until your pharmacy officially opens.",
    benefitsId: [
      "Apotek resmi & terhubung sistem farmasi",
      "Akses distributor PBF & obat bermerek lengkap",
      "Bisa menerima resep BPJS",
      "Siap ekspansi cabang secara legal",
    ],
    benefitsEn: [
      "Official pharmacy & connected to pharma systems",
      "Access PBF distributors & full brand drugs",
      "Eligible for BPJS prescriptions",
      "Ready for legal branch expansion",
    ],
    reqId: [
      "NIB & KBLI apotek",
      "Apoteker (SIPA) penanggung jawab",
      "Tempat memenuhi standar farmasi",
      "Data sarana & peralatan",
    ],
    reqEn: [
      "NIB & pharmacy KBLI",
      "Responsible pharmacist (SIPA)",
      "Premises meeting pharmaceutical standards",
      "Facility & equipment data",
    ],
    stepsId: [
      "Konsultasi lokasi & kesiapan sarana",
      "Penyiapan SDM apoteker & dokumen",
      "Perizinan berusaha & pengajuan SIA",
      "Penilaian dinas & SIA terbit",
    ],
    stepsEn: [
      "Location & facility readiness consultation",
      "Pharmacist staffing & document prep",
      "Business licensing & SIA submission",
      "Agency assessment & SIA issued",
    ],
    durationId: "1–2 bulan",
    durationEn: "1–2 months",
    priceFrom: "Rp3.000.000",
    keywords: [
      "izin apotek",
      "SIA apotek",
      "jasa buka apotek",
      "SIPA apoteker",
      "izin apotek cabang",
      "pharmacy license Indonesia",
      "legalitas apotek",
      "cara membuka apotek",
    ],
    faq: [
      {
        qId: "Bisakah apoteker dari luar kota?",
        aId: "Apoteker penanggung jawab harus tercatat SIP di wilayah apotek berada. Kami bantu proses SIPA lokal dan opsi apoteker full-time/part-time sesuai ketentuan.",
        qEn: "Can the pharmacist be from another city?",
        aEn: "The responsible pharmacist must hold an SIP registered where the pharmacy operates. We help with local SIPA processing and full-time/part-time pharmacist options per regulations.",
      },
    ],
  },
  {
    slug: "izin-alkes",
    cat: "kesehatan",
    nameId: "Izin Distribusi Alat Kesehatan (AKL/AKD)",
    nameEn: "Medical Device Distribution License (AKL/AKD)",
    shortId:
      "AKL untuk alat kesehatan, AKD untuk alat diagnostik in vitro — syarat jual alkes legal di Indonesia.",
    shortEn:
      "AKL for medical devices, AKD for in vitro diagnostics — required to legally sell medical devices in Indonesia.",
    descId:
      "Sebelum dipasarkan, setiap alat kesehatan harus terdaftar di Kemenkes: AKL (Alat Kesehatan) atau AKD (Alat Kesehatan Diagnostik In Vitro) dengan nomor edar KEMENKES. Distributornya wajib tersertifikasi CDAK/DAK. Kami menangani registrasi produk (lokal & impor), sertifikasi distribusi, hingga pendampingan audit fasilitas gudang — sehingga produk alkes Anda sah dipasarkan ke rumah sakit dan klinik.",
    descEn:
      "Before marketing, every medical device must be registered with the Ministry of Health: AKL (Medical Device) or AKD (In Vitro Diagnostic Device) with a KEMENKES distribution number. Distributors must hold CDAK/DAK certification. We handle product registration (local & imported), distribution certification, to warehouse facility audit assistance — so your medical devices can legally sell to hospitals and clinics.",
    benefitsId: [
      "Produk alkes sah dijual ke RS & klinik",
      "Nomor edar resmi Kemenkes pada kemasan",
      "Distributor tersertifikasi & tepercaya",
      "Siap ikut tender alkes pemerintah",
    ],
    benefitsEn: [
      "Medical devices legally sold to hospitals & clinics",
      "Official Kemenkes distribution number on packaging",
      "Certified & trusted distributor status",
      "Ready for government medical device tenders",
    ],
    reqId: [
      "NIB & KBLI distribusi alkes",
      "Data spesifikasi produk & ISO produsen",
      "Dokumen uji & mutu produk",
      "Gudang memenuhi standar CDAK",
    ],
    reqEn: [
      "NIB & medical device distribution KBLI",
      "Product specifications & manufacturer ISO",
      "Product testing & quality documents",
      "Warehouse meeting CDAK standards",
    ],
    stepsId: [
      "Klasifikasi alat (risiko A–D)",
      "Penyiapan dokumen teknis & uji",
      "Registrasi AKL/AKD via e-Katalog Kemenkes",
      "Sertifikasi distribusi & audit gudang",
    ],
    stepsEn: [
      "Device classification (risk A–D)",
      "Technical & test document prep",
      "AKL/AKD registration via Kemenkes e-Catalog",
      "Distribution certification & warehouse audit",
    ],
    durationId: "1–4 bulan",
    durationEn: "1–4 months",
    priceFrom: "Rp5.000.000",
    keywords: [
      "AKL kemenkes",
      "AKD alat kesehatan",
      "izin edar alkes",
      "CDAK distributor",
      "registrasi alat kesehatan",
      "medical device registration Indonesia",
      "izin jual alat kesehatan",
      "nomor edar kemenkes",
    ],
    faq: [
      {
        qId: "Alat kesehatan impor bisa didaftarkan?",
        aId: "Bisa, melalui apotek perusahaan impor tunggal atau produsen dengan perwakilan resmi. Kami petakan jalur terbaik sesuai struktur bisnis Anda.",
        qEn: "Can imported medical devices be registered?",
        aEn: "Yes, via single-importer companies or manufacturers with official representation. We map the best path per your business structure.",
      },
    ],
  },

  // ============ PARIWISATA ============
  {
    slug: "kartu-pramuwisata-hpi",
    cat: "pariwisata",
    nameId: "Kartu Identitas Pramuwisata (HPI)",
    nameEn: "Tour Guide Identity Card (HPI)",
    shortId:
      "Kartu resmi pramuwisata dari Himpunan Pramuwisata Indonesia — wajib membawa wisatawan di objek wisata.",
    shortEn:
      "Official tour guide card from the Indonesian Tour Guide Association — required to guide tourists at attractions.",
    descId:
      "Kartu Identitas Pramuwisata (KIP) diterbitkan HPI setelah mengikuti diklat pramuwisata dan ujian kompetensi. Kartu ini menjadi syarat resmi memandu wisatawan di objek wisata, terutama objek yang dikelola pemerintah (candi, taman nasional, museum). Kami mengoordinasikan diklat, ujian, pembuatan kartu berlaku nasional, hingga pendampingan bergabung HPI daerah.",
    descEn:
      "The Tour Guide Identity Card (KIP) is issued by HPI after training and competency exams. The card is the official requirement to guide tourists at attractions, especially government-managed ones (temples, national parks, museums). We coordinate training, exams, national card issuance, to regional HPI membership assistance.",
    benefitsId: [
      "Resmi memandu wisatawan di objek wisata",
      "Kepercayaan travel agent & hotel meningkat",
      "Jaringan profesional nasional via HPI",
      "Modal usaha jasa guiding mandiri",
    ],
    benefitsEn: [
      "Officially guide tourists at attractions",
      "Increased travel agent & hotel trust",
      "National professional network via HPI",
      "Foundation for independent guiding business",
    ],
    reqId: [
      "KTP, ijazah terakhir & foto",
      "Surat kesehatan",
      "Mengikuti diklat pramuwisata",
      "Lulus ujian kompetensi",
    ],
    reqEn: [
      "ID, latest diploma & photos",
      "Health certificate",
      "Attend tour guide training",
      "Pass competency exam",
    ],
    stepsId: [
      "Pendaftaran & penjadwalan diklat",
      "Diklat pramuwisata bersertifikat",
      "Ujian kompetensi",
      "Kartu pramuwisata terbit",
    ],
    stepsEn: [
      "Registration & training scheduling",
      "Certified tour guide training",
      "Competency exam",
      "Tour guide card issued",
    ],
    durationId: "2–6 minggu",
    durationEn: "2–6 weeks",
    priceFrom: "Rp2.500.000",
    keywords: [
      "kartu pramuwisata",
      "HPI pramuwisata",
      "jasa kartu HPI",
      "diklat pramuwisata",
      "izin pramuwisata",
      "tour guide license Indonesia",
      "KIP pramuwisata",
      "kursus pramuwisata",
    ],
    faq: [
      {
        qId: "Kartu HPI berlaku di seluruh Indonesia?",
        aId: "Ya, kartu berlaku nasional. Namun keanggotaan HPI terdaftar di pengurus daerah tempat Anda terdaftar — kami bantu pilih daerah yang paling menguntungkan karier Anda.",
        qEn: "Is the HPI card valid across Indonesia?",
        aEn: "Yes, the card is nationally valid. However, HPI membership registers at your regional board — we help choose the region most beneficial for your career.",
      },
    ],
  },
  {
    slug: "izin-biro-perjalanan-wisata",
    cat: "pariwisata",
    nameId: "Izin Biro Perjalanan Wisata",
    nameEn: "Travel Agency License",
    shortId:
      "Laporan usaha biro perjalanan (PUPU/BP) agar agen perjalanan Anda legal mengemas & menjual tour.",
    shortEn:
      "Travel business reporting (PUPU/BP) so your travel agency legally packages & sells tours.",
    descId:
      "Usaha biro perjalanan wisata wajib menyampaikan Laporan Usaha Perjalanan Wisata (PUPU) dan terdaftar di Kemenpar/Dinas Pariwisata — inilah yang membuat bisnis tour Anda legal, bisa mengeluarkan invoice resmi, bekerja sama dengan maskapai dan hotel, serta mengatur perjalanan ibadah (Umrah/Haji Khusus butuh jalur Kemenag tersendiri yang juga kami dampingi).",
    descEn:
      "Travel agencies must submit a Travel Business Report (PUPU) and register with Kemenpar/Tourism Office — this makes your tour business legal, able to issue official invoices, partner with airlines and hotels, and arrange religious travel (Umrah/Special Hajj needs a separate Kemenag route we also assist).",
    benefitsId: [
      "Bisnis tour legal & bisa kontrak B2B",
      "Akses kerja sama maskapai & hotel rantai besar",
      "Kredibel untuk penjualan paket domestik/luar",
      "Fondasi sertifikasi IATA bila berkembang",
    ],
    benefitsEn: [
      "Legal tour business & B2B contracts",
      "Access to airline & major hotel partnerships",
      "Credible for domestic/international package sales",
      "Foundation for IATA certification as you grow",
    ],
    reqId: [
      "NIB & KBLI biro perjalanan",
      "Data pengelola & SDM",
      "Kantor usaha yang memadai",
      "Rencana paket perjalanan",
    ],
    reqEn: [
      "NIB & travel agency KBLI",
      "Management & staff data",
      "Adequate business office",
      "Planned travel packages",
    ],
    stepsId: [
      "Konsultasi struktur usaha & paket",
      "Perizinan berusaha di OSS",
      "Penyusunan laporan usaha (PUPU)",
      "Pendaftaran Kemenpar/Dinas Par & laporan aktif",
    ],
    stepsEn: [
      "Business structure & package consultation",
      "Business licensing on OSS",
      "Business report (PUPU) drafting",
      "Kemenpar/Tourism Office registration & active reporting",
    ],
    durationId: "2–4 minggu",
    durationEn: "2–4 weeks",
    priceFrom: "Rp2.000.000",
    keywords: [
      "izin biro perjalanan",
      "PUPU biro perjalanan",
      "jasa izin travel",
      "izin usaha tour",
      "travel agency license Indonesia",
      "legalitas biro perjalanan",
      "izin Haji Khusus",
      "biro perjalanan umrah",
    ],
    faq: [
      {
        qId: "Agen saya juga jual tiket, ada izin tambahan?",
        aId: "Untuk menjadi agen tiket maskapai resmi (Agen IATA/PCS), ada sertifikasi tersendiri yang kami siapkan setelah legalitas dasar beres.",
        qEn: "My agency also sells tickets — any extra license?",
        aEn: "Becoming an official airline ticket agent (IATA/PCS agent) requires separate certification that we prepare after basic legality is done.",
      },
    ],
  },
  {
    slug: "shr-hotel-resto",
    cat: "pariwisata",
    nameId: "SHR — Pengesahan Hotel & Restoran",
    nameEn: "SHR — Hotel & Restaurant Endorsement",
    shortId:
      "Sertifikat resmi kelayakan hotel/resto dari Kemenpar — syarat ikut BCF, OTA besar, dan MICE.",
    shortEn:
      "Official hotel/restaurant endorsement from Kemenpar — required for BCF, major OTAs, and MICE.",
    descId:
      "Sertifikat Pengesahan Hotel (SHP) dan Pengesahan Restoran (SHR) adalah penilaian resmi kelayakan fasilitas dan layanan berdasarkan bintang/standar Kemenpar. Sertifikat ini membuka akses ke Bursa Candidate Facility (BCF) untuk perdagangan dewan rantai, OTA besar (Agoda, Booking), dan event MICE. Kami menyiapkan dokumen, mengoordinasikan penilaian penilai, dan mendampingi perbaikan temuan hingga sertifikat terbit.",
    descEn:
      "Hotel Endorsement (SHP) and Restaurant Endorsement (SHR) are official assessments of facility and service feasibility per Kemenpar star standards. These certificates open access to the Bursa Candidate Facility (BCF) for chain trade, major OTAs (Agoda, Booking), and MICE events. We prepare documents, coordinate assessor visits, and assist finding fixes until certificates are issued.",
    benefitsId: [
      "Akses OTA besar & jaringan distribusi global",
      "Syarat mengikuti BCF & MICE",
      "Kelas bintang resmi menaikkan tarif jual",
      "Standar layanan naik otomatis",
    ],
    benefitsEn: [
      "Access to major OTAs & global distribution",
      "Requirement to join BCF & MICE",
      "Official star class raises selling rates",
      "Service standards automatically improve",
    ],
    reqId: [
      "NIB & perizinan berusaha usaha pariwisata",
      "Data fasilitas & kamar/meja",
      "Dokumen SLF/PBG bangunan",
      "SDM & standar layanan",
    ],
    reqEn: [
      "NIB & tourism business licensing",
      "Facility & rooms/tables data",
      "Building SLF/PBG documents",
      "Staff & service standards",
    ],
    stepsId: [
      "Audit kesiapan fasilitas",
      "Penyiapan dokumen & klasifikasi bintang",
      "Pengajuan ke Kemenpar/penilai daerah",
      "Penilaian lapangan & sertifikat terbit",
    ],
    stepsEn: [
      "Facility readiness audit",
      "Document & star classification prep",
      "Submission to Kemenpar/regional assessors",
      "Field assessment & certificate issued",
    ],
    durationId: "1–3 bulan",
    durationEn: "1–3 months",
    priceFrom: "Rp4.000.000",
    keywords: [
      "SHR resto",
      "SHP hotel",
      "pengesahan hotel",
      "jasa SHR",
      "BCF hotel",
      "hotel endorsement Indonesia",
      "restoran bintang",
      "izin hotel",
    ],
    faq: [
      {
        qId: "Homestay/villa kecil perlu SHR?",
        aId: "Tidak wajib, tetapi sangat membantu akses OTA & kepercayaan tamu. Kami punya paket khusus akomodasi kecil dengan biaya terjangkau.",
        qEn: "Do small homestays/villas need SHR?",
        aEn: "Not mandatory, but it greatly helps OTA access & guest trust. We have special affordable packages for small accommodations.",
      },
    ],
  },
  {
    slug: "izin-wisata-alam",
    cat: "pariwisata",
    nameId: "Izin Usaha Wisata Alam (TWA/PPA)",
    nameEn: "Nature Tourism Business License (TWA/PPA)",
    shortId:
      "Izin mengoperasikan wisata di kawasan konservasi (Taman Wisata Alam) dari KLHK.",
    shortEn:
      "License to operate tourism in conservation areas (Nature Recreation Parks) from KLHK.",
    descId:
      "Membuka usaha wisata di kawasan hutan konservasi — Taman Wisata Alam, Taman Nasional, atau Taman Wisata Perkemahan — memerlukan Izin Pemanfaatan/Pengusahaan Pariwisata Alam (PPA/IJU) dari Ditjen KSDAE KLHK. Prosesnya menuntut dokumen kelola (RPL), kesepakatan masyarakat lokal, dan rencana pembangunan yang ramah lingkungan. Kami mendampingi dari konsultasi lokasi hingga izin terbit dan perjanjian kemitraan.",
    descEn:
      "Opening tourism in conservation forests — Nature Recreation Parks, National Parks, or Camping Tourism Parks — requires a Nature Tourism Utilization/Business License (PPA/IJU) from KLHK's KSDAE directorate. The process demands management documents (RPL), local community agreements, and environmentally friendly development plans. We assist from location consultation until licenses and partnership agreements are issued.",
    benefitsId: [
      "Usaha wisata alam sah & terlindungi hukum",
      "Akses kemitraan dengan KLHK/pelembagaan",
      "Menghindari sanksi penebangan/pembangunan ilegal",
      "Peluang CSR & dukungan pemerintah",
    ],
    benefitsEn: [
      "Nature tourism legally protected",
      "KLHK partnership & institutional access",
      "Avoids illegal logging/construction sanctions",
      "CSR opportunities & government support",
    ],
    reqId: [
      "NIB & badan usaha",
      "Data lokasi & batas kawasan",
      "Rencana pembangunan ramah lingkungan",
      "Dokumen masyarakat lokal",
    ],
    reqEn: [
      "NIB & business entity",
      "Location & boundary data",
      "Environmentally friendly development plan",
      "Local community documents",
    ],
    stepsId: [
      "Konsultasi lokasi & kawasan",
      "Penyusunan dokumen kelola (RPL)",
      "Pengajuan ke Ditjen KSDAE KLHK",
      "Penilaian & izin pemanfaatan terbit",
    ],
    stepsEn: [
      "Location & area consultation",
      "Management document (RPL) drafting",
      "Submission to KLHK KSDAE",
      "Assessment & utilization license issued",
    ],
    durationId: "3–9 bulan",
    durationEn: "3–9 months",
    priceFrom: "Rp15.000.000",
    keywords: [
      "izin wisata alam",
      "IJU PPA",
      "izin TWA",
      "wisata konservasi KLHK",
      "taman nasional izin usaha",
      "nature tourism license Indonesia",
      "izin taman wisata",
      "ekowisata legal",
    ],
    faq: [
      {
        qId: "Bisakah membangun villa di kawasan konservasi?",
        aId: "Pembangunan terbatas dan harus sesuai rencana kelola yang disetujui KLHK. Kami bantu rancang model bisnis yang sah dan menguntungkan.",
        qEn: "Can villas be built in conservation areas?",
        aEn: "Construction is limited and must follow KLHK-approved management plans. We help design legal and profitable business models.",
      },
    ],
  },

  // ============ PERTAMBANGAN & ENERGI ============
  {
    slug: "iup",
    cat: "tambang-energi",
    nameId: "IUP — Izin Usaha Pertambangan",
    nameEn: "IUP — Mining Business License",
    shortId:
      "Izin utama eksplorasi/operasi produksi mineral & batubara dari pemerintah daerah/provinsi.",
    shortEn:
      "The primary exploration/production mining license for minerals & coal from regional/provincial government.",
    descId:
      "Izin Usaha Pertambangan (IUP) diberikan pemerintah daerah/provinsi untuk eksplorasi atau operasi produksi mineral dan batubara. Prosesnya menuntut wilayah izin yang tersedia (dari peta kawasan), dokumen kelayakan, perizinan lingkungan, dan kesanggupan rencana kerja. GConsultant memetakan ketersediaan wilayah, menyusun dokumen kelayakan lengkap, dan mendampingi negosiasi hingga IUP terbit.",
    descEn:
      "Mining Business Licenses (IUP) are granted by regional/provincial governments for mineral and coal exploration or production. The process demands available permit areas (from regional maps), feasibility documents, environmental licensing, and work plan commitments. GConsultant maps area availability, prepares complete feasibility documents, and assists negotiations until IUP is issued.",
    benefitsId: [
      "Hak mengelola sumber daya mineral secara sah",
      "Kepatuhan penuh regulasi ESDM & daerah",
      "Dapat dipindahtangankan dengan prosedur benar",
      "Kredibilitas untuk pendanaan proyek",
    ],
    benefitsEn: [
      "Legal rights to manage mineral resources",
      "Full ESDM & regional compliance",
      "Transferable with correct procedures",
      "Credibility for project funding",
    ],
    reqId: [
      "Badan usaha & NIB bidang pertambangan",
      "Data wilayah & peta kawasan",
      "Rencana kerja & anggaran",
      "Modal & kemampuan teknis",
    ],
    reqEn: [
      "Business entity & mining NIB",
      "Area & regional map data",
      "Work plan & budget",
      "Capital & technical capability",
    ],
    stepsId: [
      "Pemetaan wilayah izin tersedia",
      "Penyusunan dokumen kelayakan",
      "Pengajuan ke pemda/provinsi",
      "Penilaian & IUP terbit",
    ],
    stepsEn: [
      "Available permit area mapping",
      "Feasibility document preparation",
      "Submission to regional government",
      "Assessment & IUP issued",
    ],
    durationId: "6–18 bulan",
    durationEn: "6–18 months",
    priceFrom: "Rp50.000.000",
    keywords: [
      "IUP tambang",
      "izin usaha pertambangan",
      "jasa IUP",
      "IUP eksplorasi",
      "IUP operasi produksi",
      "mining license Indonesia",
      "izin batubara",
      "IUP mineral",
    ],
    faq: [
      {
        qId: "Bisakah IUP dipindahtangankan?",
        aId: "Bisa melalui persetujuan menteri sesuai peraturan ESDM dengan syarat yang ketat. Kami menangani proses pemindahtanganan lengkap.",
        qEn: "Can IUPs be transferred?",
        aEn: "Yes, through ministerial approval per ESDM regulations with strict requirements. We handle the complete transfer process.",
      },
    ],
  },
  {
    slug: "iupk",
    cat: "tambang-energi",
    nameId: "IUPK — Izin Usaha Pertambangan Khusus",
    nameEn: "IUPK — Special Mining Business License",
    shortId:
      "Izin tambang skala besar/khusus yang diterbitkan Kementerian ESDM pusat.",
    shortEn:
      "Large-scale/special mining license issued by the central Ministry of Energy.",
    descId:
      "IUPK adalah izin pertambangan khusus untuk wilayah luas, investasi besar, atau wilayah yang tidak tersedia IUP biasa — diterbitkan langsung oleh Ditjen Minerba ESDM. Dokumennya kompleks: kajian teknis, ekonomi ( feasibilitas), lingkungan, hingga rencana pembangunan wilayah. Tim kami terdiri dari ahli teknis tambang dan ekonomi yang berpengalaman menangani IUPK dan kelanjutan operasi (IUPK OP).",
    descEn:
      "IUPK is a special mining license for large areas, large investments, or areas without regular IUP availability — issued directly by ESDM's Mineral & Coal directorate. Documents are complex: technical studies, economic feasibility, environment, to regional development plans. Our team comprises experienced mining technical and economic experts handling IUPK and operation continuance (IUPK OP).",
    benefitsId: [
      "Akses wilayah tambang skala besar",
      "Kepatuhan langsung dengan pusat ESDM",
      "Fondasi smelter & hilirisasi",
      "Struktur pajak & kewajiban jelas",
    ],
    benefitsEn: [
      "Access to large-scale mining areas",
      "Direct central ESDM compliance",
      "Foundation for smelters & downstreaming",
      "Clear tax & obligation structure",
    ],
    reqId: [
      "Badan usaha kuat & berpengalaman",
      "Kajian teknis & ekonomi (feasibility study)",
      "Dokumen lingkungan",
      "Rencana pembangunan smelter/hilirisasi",
    ],
    reqEn: [
      "Strong, experienced business entity",
      "Technical & economic studies (feasibility)",
      "Environmental documents",
      "Smelter/downstreaming development plan",
    ],
    stepsId: [
      "Konsultasi & penapisan wilayah",
      "Penyusunan kajian teknis-ekonomi-lingkungan",
      "Pengajuan ke Ditjen Minerba ESDM",
      "Penilaian tim teknis & IUPK terbit",
    ],
    stepsEn: [
      "Consultation & area screening",
      "Technical-economic-environmental study prep",
      "Submission to ESDM Minerba directorate",
      "Technical team assessment & IUPK issued",
    ],
    durationId: "12–36 bulan",
    durationEn: "12–36 months",
    priceFrom: "Rp150.000.000",
    keywords: [
      "IUPK",
      "izin usaha pertambangan khusus",
      "jasa IUPK",
      "IUPK operasi produksi",
      "IUPK ESDM",
      "special mining business license Indonesia",
      "izin tambang besar",
      "hilirisasi mineral",
    ],
    faq: [
      {
        qId: "Apa bedanya IUP dan IUPK?",
        aId: "IUP diterbitkan daerah untuk wilayah reguler; IUPK pusat untuk wilayah khusus/skala besar dengan kewajiban hilirisasi lebih tinggi. Pilihannya bergantung skala rencana Anda.",
        qEn: "What's the difference between IUP and IUPK?",
        aEn: "IUP is regionally issued for regular areas; IUPK is central for special/large-scale areas with higher downstreaming obligations. The choice depends on your plan's scale.",
      },
    ],
  },
  {
    slug: "iujp-penunjang",
    cat: "tambang-energi",
    nameId: "IUJP — Izin Usaha Jasa Penunjang Pertambangan",
    nameEn: "IUJP — Mining Support Services License",
    shortId:
      "Izin untuk usaha jasa penunjang: kontraktor tambang, hauling, drilling, survey, hingga pengujian.",
    shortEn:
      "License for support services: mining contractors, hauling, drilling, survey, to testing.",
    descId:
      "Perusahaan jasa yang melayangan kegiatan penunjang tambang — kontraktor penambangan, pengangkutan, pengeboran eksplorasi, survey, analisis laboratorium, penyelamatan tambang — wajib memiliki IUJP dari ESDM. Klasifikasinya mengikuti jenis jasa dan kemampuan teknis. Kami menyusun dokumen kelayakan, referensi proyek, dan personalia teknis hingga IUJP terbit.",
    descEn:
      "Companies providing mining support services — mining contractors, hauling, exploration drilling, surveys, laboratory analysis, mine rescue — must hold an IUJP from ESDM. Classification follows service type and technical capability. We prepare feasibility documents, project references, and technical personnel until IUJP is issued.",
    benefitsId: [
      "Sah menerima kontrak dari holder IUP/IUPK",
      "Klasifikasi jasa sesuai kemampuan",
      "Kredibilitas tender jasa tambang",
      "Fondasi pertumbuhan menjadi kontraktor besar",
    ],
    benefitsEn: [
      "Legally receive contracts from IUP/IUPK holders",
      "Service classification per capability",
      "Credibility in mining service tenders",
      "Foundation to grow into major contractors",
    ],
    reqId: [
      "NIB & badan usaha bidang jasa tambang",
      "Personalia teknis bersertifikat (POP/POU)",
      "Referensi pengalaman proyek",
      "Daftar peralatan utama",
    ],
    reqEn: [
      "NIB & mining services business entity",
      "Certified technical personnel (POP/POU)",
      "Project experience references",
      "Main equipment list",
    ],
    stepsId: [
      "Konsultasi jenis jasa & klasifikasi",
      "Penyiapan personalia & referensi",
      "Pengajuan ke ESDM",
      "Verifikasi & IUJP terbit",
    ],
    stepsEn: [
      "Service type & classification consultation",
      "Personnel & reference prep",
      "Submission to ESDM",
      "Verification & IUJP issued",
    ],
    durationId: "2–4 bulan",
    durationEn: "2–4 months",
    priceFrom: "Rp12.000.000",
    keywords: [
      "IUJP",
      "izin usaha jasa penunjang",
      "kontraktor tambang",
      "jasa IUJP",
      "IUJP ESDM",
      "mining support services Indonesia",
      "izin hauling tambang",
      "IUJP drilling",
    ],
    faq: [
      {
        qId: "Peralatan saya masih disewa, apakah bisa?",
        aId: "Untuk kualifikasi awal bisa menggunakan bukti ketersediaan (sewa/jaminan). Namun untuk kualifikasi lebih tinggi diperlukan bukti kepemilikan. Kami bantu strategi sesuai modal Anda.",
        qEn: "My equipment is rented — is that okay?",
        aEn: "For initial qualification, availability proof (lease/guarantee) can work. Higher qualifications need ownership proof. We help strategize per your capital.",
      },
    ],
  },
  {
    slug: "izin-ebt-plts",
    cat: "tambang-energi",
    nameId: "Izin EBT & PLTS (IUPTLU Terbarukan)",
    nameEn: "Renewable Energy & Solar License (IUPTLU)",
    shortId:
      "Perizinan usaha pembangkit/listrik terbarukan: PLTS, PLTMH, biomassa, hingga energi baru.",
    shortEn:
      "Renewable power generation licensing: solar, hydro, biomass, to new energy.",
    descId:
      "Investasi energi terbarukan memerlukan IUPTLU (Izin Usaha Penyediaan Tenaga Listrik untuk Kepentingan Umum) sesuai jenis sumber daya — PLTS, PLTMH, PLT Biomassa, dst. — dengan skema IPP atau PLN. Terdapat pula perizinan untuk penggunaan sendiri (atap, captive) yang kini lebih sederhana. Kami menangani struktur usaha, kesesuaian tata ruang, perizinan lingkungan, hingga IUPTLU/PPA terbit.",
    descEn:
      "Renewable energy investment requires IUPTLU (Public Electricity Supply Business License) per resource type — solar, hydro, biomass — under IPP or PLN schemes. There are also self-use licenses (rooftop, captive) now simpler. We handle business structure, spatial conformity, environmental licensing, until IUPTLU/PPA is issued.",
    benefitsId: [
      "Bisnis energi terbarukan sah & investable",
      "Akses skema PPA & pendanaan hijau",
      "Kepatuhan penuh ESDM & PLN",
      "Fondasi karbon credit & ESG reporting",
    ],
    benefitsEn: [
      "Renewable business legal & investable",
      "Access to PPA schemes & green funding",
      "Full ESDM & PLN compliance",
      "Foundation for carbon credits & ESG reporting",
    ],
    reqId: [
      "Badan usaha & NIB bidang kelistrikan",
      "Data sumber daya & lokasi",
      "Kajian teknis pembangkit",
      "Kesesuaian tata ruang & lingkungan",
    ],
    reqEn: [
      "Business entity & electricity NIB",
      "Resource & location data",
      "Plant technical study",
      "Spatial & environmental conformity",
    ],
    stepsId: [
      "Konsultasi skema usaha (IPP/captive)",
      "Penyusunan kajian & dokumen teknis",
      "Pengajuan ke Ditjen Ketenagalistrikan",
      "IUPTLU terbit & pendampingan PPA",
    ],
    stepsEn: [
      "Business scheme consultation (IPP/captive)",
      "Study & technical document prep",
      "Submission to Electricity directorate",
      "IUPTLU issued & PPA assistance",
    ],
    durationId: "4–12 bulan",
    durationEn: "4–12 months",
    priceFrom: "Rp25.000.000",
    keywords: [
      "izin PLTS",
      "IUPTLU",
      "izin usaha listrik",
      "PLTS atap izin",
      "energi terbarukan perizinan",
      "renewable energy license Indonesia",
      "izin pembangkit listrik",
      "PPA PLN",
    ],
    faq: [
      {
        qId: "PLTS atap rumah tangga butuh izin?",
        aId: "Untuk skala kecil pemakaian sendiri cukup terdaftar di PLN. Untuk kapasitas besar/komersial, perizinan berusaha berlaku. Kami bantu tentukan jalur Anda.",
        qEn: "Do household rooftop solar systems need licenses?",
        aEn: "Small self-use scales just need PLN registration. Larger/commercial capacities require business licensing. We help determine your path.",
      },
    ],
  },

  // ============ PMA & INVESTASI ASING ============
  {
    slug: "pendirian-pt-pma",
    cat: "pma",
    nameId: "Pendirian PT PMA (Investasi Asing)",
    nameEn: "PT PMA Establishment (Foreign Investment)",
    shortId:
      "Badan hukum resmi untuk investor asing beroperasi di Indonesia — dari akta hingga perizinan berusaha OSS.",
    shortEn:
      "The official legal entity for foreign investors to operate in Indonesia — from deed to OSS business licensing.",
    descId:
      "PT PMA (Perseroan Terbatas Penanaman Modal Asing) adalah satu-satunya bentuk legal bagi investor asing untuk berbisnis sungguhan di Indonesia. Ketentuannya khusus: investasi di atas Rp10 miliar per KBLI 5-digit, saham asing mengikuti Daftar Negatif Investasi/positif, dan persetujuan BKPM. GConsultant menangani seluruhnya: struktur saham, akta notaris, SK Kemenkumham, NIB, perizinan berusaha berbasis risiko, sampai LKPM bulanan pertama.",
    descEn:
      "PT PMA (Foreign Investment Limited Company) is the only legal form for foreign investors to seriously do business in Indonesia. Special rules apply: investment above Rp10 billion per 5-digit KBLI, foreign shareholding per the investment lists, and BKPM approval. GConsultant handles everything: share structure, notarial deed, Kemenkumham decree, NIB, risk-based business licensing, to the first monthly LKPM report.",
    benefitsId: [
      "Hak penuh beroperasi & menguntungkan di Indonesia",
      "Bisa mengurus KITAS pekerja asing & repatriasi laba",
      "Akses insentif pajak & fasilitas BKPM",
      "Struktur legal untuk pendanaan global",
    ],
    benefitsEn: [
      "Full rights to operate & profit in Indonesia",
      "Eligible for foreign worker KITAS & profit repatriation",
      "Access to tax incentives & BKPM facilities",
      "Legal structure for global funding",
    ],
    reqId: [
      "Paspor & alamat investor asing",
      "Rencana investasi (min. > Rp10 miliar)",
      "KBLI bidang usaha & struktur saham",
      "Alamat kantor di Indonesia",
    ],
    reqEn: [
      "Foreign investor's passport & address",
      "Investment plan (min. > Rp10 billion)",
      "Business KBLI & share structure",
      "Office address in Indonesia",
    ],
    stepsId: [
      "Konsultasi KBLI & struktur investasi",
      "Pendapatuan nama & akta notaris",
      "SK Kemenkumham & NPWP korporat",
      "NIB, perizinan berusaha & LKPM pertama",
    ],
    stepsEn: [
      "KBLI & investment structure consultation",
      "Name clearance & notarial deed",
      "Kemenkumham decree & corporate NPWP",
      "NIB, business licensing & first LKPM",
    ],
    durationId: "2–4 minggu",
    durationEn: "2–4 weeks",
    priceFrom: "Rp7.500.000",
    keywords: [
      "pendirian PMA",
      "PT PMA Indonesia",
      "jasa PMA murah",
      "investasi asing Indonesia",
      "foreign investment company Indonesia",
      "PT PMA establishment",
      "BKPM persetujuan investasi",
      "izin usaha asing",
    ],
    faq: [
      {
        qId: "Berapa minimal investasi PMA?",
        aId: "Rp10 miliar per KBLI 5-digit di luar tanah & bangunan (bisa bertahap sesuai rencana kerja). Kami bantu menyusun rencana investasi yang realistis dan disetujui BKPM.",
        qEn: "What is the minimum PMA investment?",
        aEn: "Rp10 billion per 5-digit KBLI excluding land & buildings (can be phased per work plan). We help draft realistic investment plans approved by BKPM.",
      },
      {
        qId: "Investor asing harus datang ke Indonesia?",
        aId: "Tidak harus untuk pendirian — proses bisa full-power of attorney. Kehadiran diperlukan saat perjanjian bank atau penandatanganan tertentu, yang kami jadwalkan efisien.",
        qEn: "Must foreign investors come to Indonesia?",
        aEn: "Not for establishment — the process can be full-power of attorney. Presence is needed for certain bank or signing matters, which we schedule efficiently.",
      },
    ],
  },
  {
    slug: "kitas-kitap",
    cat: "pma",
    nameId: "KITAS & KITAP (Izin Tinggal Indonesia)",
    nameEn: "KITAS & KITAP (Indonesian Stay Permits)",
    shortId:
      "Izin tinggal terbatas & tetap untuk investor, pekerja asing, dan pasangan warga Indonesia.",
    shortEn:
      "Limited & permanent stay permits for investors, foreign workers, and Indonesian spouses.",
    descId:
      "KITAS (izin tinggal terbatas 6–24 bulan) dan KITAP (tinggal tetap 5 tahun) mengatur legalitas kehadiran asing di Indonesia — untuk bekerja, investasi, keluarga, atau pensiun. Setiap jalur punya dasar izin berbeda: RPTKA perusahaan, akta pendirian PMA, perkawinan, atau dana pensiun. Kami menangani seluruh proses ke Imigrasi, dari VITAS di kedutaan hingga kartu terbit, termasuk MERP dan izin kerja terkait.",
    descEn:
      "KITAS (limited stay 6–24 months) and KITAP (permanent stay 5 years) govern foreigners' legal presence in Indonesia — for work, investment, family, or retirement. Each route has different base permits: company RPTKA, PMA deed, marriage, or retirement funds. We handle all Immigration processes, from embassy VITAS to card issuance, including MERP and related work permits.",
    benefitsId: [
      "Tinggal & bekerja legal di Indonesia",
      "Bebas keluar-masuk sesuai MERP",
      "Akses rekening bank, SIM & kontrak sewa",
      "Jalur menuju KITAP permanen",
    ],
    benefitsEn: [
      "Legal stay & work in Indonesia",
      "Free in-out travel per MERP",
      "Access to bank accounts, driver's licenses & leases",
      "Path to permanent KITAP",
    ],
    reqId: [
      "Paspor asing minimal 18 bulan masa berlaku",
      "Dasar izin (PMA/kerja/keluarga/pensiun)",
      "Foto & dokumen pribadi",
      "Alamat tinggal di Indonesia",
    ],
    reqEn: [
      "Foreign passport with 18+ months validity",
      "Permit basis (PMA/work/family/retirement)",
      "Photos & personal documents",
      "Residential address in Indonesia",
    ],
    stepsId: [
      "Konsultasi jalur KITAS yang tepat",
      "Pengajuan telex/VITAS ke Imigrasi",
      "Kedatangan & konversi menjadi KITAS",
      "Kartu & buku tinggal terbit",
    ],
    stepsEn: [
      "Consultation on the right KITAS route",
      "Telex/VITAS submission to Immigration",
      "Arrival & conversion to KITAS",
      "Card & stay book issued",
    ],
    durationId: "2–6 minggu",
    durationEn: "2–6 weeks",
    priceFrom: "Rp4.500.000",
    keywords: [
      "KITAS",
      "KITAP",
      "jasa KITAS murah",
      "izin tinggal asing",
      "VITAS Indonesia",
      "stay permit Indonesia",
      "KITAS investor",
      "KITAS kerja",
    ],
    faq: [
      {
        qId: "Bisakah KITAS diurus tanpa keluar Indonesia?",
        aId: "Untuk banyak jalur, ya — konversi onshore dimungkinkan dengan ketentuan tertentu. Kami evaluasi status imigrasi Anda dan pilih jalur paling efisien.",
        qEn: "Can KITAS be processed without leaving Indonesia?",
        aEn: "For many routes, yes — onshore conversion is possible under certain conditions. We assess your immigration status and choose the most efficient path.",
      },
    ],
  },
  {
    slug: "persetujuan-bkpm",
    cat: "pma",
    nameId: "Persetujuan Investasi BKPM",
    nameEn: "BKPM Investment Approval",
    shortId:
      "Persetujuan investasi berbasis risiko di OSS-BKPM — pintu utama seluruh perizinan investasi.",
    shortEn:
      "Risk-based investment approval on OSS-BKPM — the main gateway for all investment licensing.",
    descId:
      "Semenjak OSS RBA, seluruh perizinan investasi diproses lewat sistem OSS-BKPM: penetapan profil risiko KBLI, perizinan berusaha (NIB dan izin turunannya), fasilitas insentif pajak (tax holiday/allowance), hingga pelaporan LKPM berkala. Kesalahan input bisa berujung penyesuaian risiko yang salah dan perizinan macet. Kami menangani seluruh alur OSS-BKPM secara akurat — termasuk konsultasi insentif fiskal.",
    descEn:
      "Since OSS RBA, all investment licensing is processed through the OSS-BKPM system: KBLI risk profile determination, business licensing (NIB and derivatives), fiscal incentive facilities (tax holiday/allowance), to periodic LKPM reporting. Input errors can result in wrong risk adjustments and stuck licensing. We handle the entire OSS-BKPM flow accurately — including fiscal incentive consultation.",
    benefitsId: [
      "Perizinan investasi akurat & berlapis",
      "Akses tax holiday/allowance bila memenuhi syarat",
      "LKPM terlapor tepat & konsisten",
      "Aman saat audit kepatuhan BKPM",
    ],
    benefitsEn: [
      "Accurate, layered investment licensing",
      "Tax holiday/allowance access when eligible",
      "Timely, consistent LKPM reporting",
      "Safe during BKPM compliance audits",
    ],
    reqId: [
      "NIB & legalitas badan usaha",
      "Rencana investasi & KBLI",
      "Data penanggung jawab",
      "Dokumen pendukung proyek",
    ],
    reqEn: [
      "NIB & business entity legality",
      "Investment plan & KBLI",
      "Responsible person data",
      "Project supporting documents",
    ],
    stepsId: [
      "Analisis profil risiko & KBLI",
      "Input & pengajuan di OSS-BKPM",
      "Perizinan berusaha terbit bertahap",
      "Pendampingan LKPM & insentif",
    ],
    stepsEn: [
      "Risk profile & KBLI analysis",
      "Input & submission on OSS-BKPM",
      "Business licensing issued in stages",
      "LKPM & incentive assistance",
    ],
    durationId: "1–3 minggu",
    durationEn: "1–3 weeks",
    priceFrom: "Rp3.500.000",
    keywords: [
      "BKPM",
      "OSS BKPM",
      "perizinan investasi",
      "LKPM BKPM",
      "tax holiday Indonesia",
      "investment approval Indonesia",
      "OSS RBA BKPM",
      "izin berusaha berbasis risiko",
    ],
    faq: [
      {
        qId: "Apa konsekuensi lupa lapor LKPM?",
        aId: "Dapat sanksi administratif dan perizinan bisa dibekukan. Kami menyediakan layanan compliance berkala agar seluruh kewajiban lapor Anda aman.",
        qEn: "What happens if LKPM reporting is missed?",
        aEn: "Administrative sanctions apply and licensing can be frozen. We provide periodic compliance services so all reporting obligations stay safe.",
      },
    ],
  },
  {
    slug: "kantor-perwakilan-kppa",
    cat: "pma",
    nameId: "Kantor Perwakilan Asing (KPPA)",
    nameEn: "Foreign Representative Office (KPPA)",
    shortId:
      "Menjajakan pasar & koordinasi tanpa badan hukum — izin dari KemenInvest/BKPM.",
    shortEn:
      "Market exploration & coordination without a legal entity — licensed by KemenInvest/BKPM.",
    descId:
      "Kantor Perwakilan Perusahaan Asing (KPPA) memungkinkan perusahaan luar negeri hadir di Indonesia untuk kegiatan pasar, riset, dan koordinasi — tanpa melakukan transaksi komersial langsung. Izinnya diterbitkan KemenInvest/BKPM dengan tiga bulan terakhir laporan keuangan perusahaan induk. Kami menyiapkan seluruh dokumen induk (apostille/legalisasi), pengajuan BKPM, hingga KITAS kepala perwakilan.",
    descEn:
      "A Foreign Company Representative Office (KPPA) lets foreign companies be present in Indonesia for market, research, and coordination activities — without direct commercial transactions. The license is issued by KemenInvest/BKPM with the parent's latest three-month financial reports. We prepare all parent documents (apostille/legalization), BKPM submission, to the chief representative's KITAS.",
    benefitsId: [
      "Kehadiran resmi di Indonesia tanpa PMA penuh",
      "Biaya awal jauh lebih ringan dari PMA",
      "Pangkalan riset pasar & jaringan distribusi",
      "Upgrade mulus ke PMA saat siap investasi",
    ],
    benefitsEn: [
      "Official presence in Indonesia without full PMA",
      "Much lighter initial cost than PMA",
      "Base for market research & distribution networks",
      "Smooth upgrade to PMA when ready to invest",
    ],
    reqId: [
      "Surat keputusan perusahaan induk",
      "Laporan keuangan induk 3 bulan terakhir",
      "Dokumen apostille/legalisasi",
      "Data kepala perwakilan",
    ],
    reqEn: [
      "Parent company appointment letter",
      "Parent's last 3-month financial reports",
      "Apostille/legalization documents",
      "Chief representative data",
    ],
    stepsId: [
      "Konsultasi struktur & rencana kegiatan",
      "Legalisi dokumen induk",
      "Pengajuan izin ke BKPM",
      "Kartu izin & KITAS kepala perwakilan",
    ],
    stepsEn: [
      "Structure & activity plan consultation",
      "Parent document legalization",
      "License submission to BKPM",
      "License card & chief representative KITAS",
    ],
    durationId: "2–4 minggu",
    durationEn: "2–4 weeks",
    priceFrom: "Rp5.000.000",
    keywords: [
      "kantor perwakilan asing",
      "KPPA BKPM",
      "representative office Indonesia",
      "izin perwakilan",
      "jasa KPPA",
      "foreign representative office",
      "buka kantor perwakilan",
      "izin trading house",
    ],
    faq: [
      {
        qId: "Kantor perwakilan bisa menjual?",
        aId: "Tidak boleh melakukan transaksi komersial langsung — hanya promosi, riset, dan koordinasi. Untuk berjualan resmi, jalur PMA adalah jawabannya; kami siapkan transisinya.",
        qEn: "Can a representative office sell?",
        aEn: "It cannot conduct direct commercial transactions — only promotion, research, and coordination. For official sales, the PMA route is the answer; we prepare the transition.",
      },
    ],
  },
  {
    slug: "rptka-imta",
    cat: "pma",
    nameId: "RPTKA & Izin Kerja Asing (IMTA)",
    nameEn: "RPTKA & Foreign Worker Work Permit (IMTA)",
    shortId:
      "Legalitas merekrut tenaga kerja asing: dari rencana penggunaan hingga izin kerja terbit.",
    shortEn:
      "Legality to hire foreign workers: from usage plans to work permit issuance.",
    descId:
      "Perusahaan yang mempekerjakan Warga Negara Asing wajib memiliki RPTKA (Rencana Penggunaan Tenaga Kerja Asing) yang disetujui Kemenaker, posisi yang tidak terlarang (Director of Personnel & sejenisnya terlarang), rasio tenaga kerja lokal (keterangan 1:10), DKP-TKA US$100/bulan, dan IMTA untuk setiap TKA. Kami menangani seluruh rantai: RPTKA, notifikasi, IMTA, VITAS kerja, dan komitmen penggantian SDM lokal.",
    descEn:
      "Companies employing foreign nationals must hold RPTKA (Foreign Manpower Utilization Plan) approved by the Manpower Ministry, non-prohibited positions (Personnel Director etc. are prohibited), local workforce ratio (1:10 statement), DPKK US$100/month, and IMTA for each foreigner. We handle the entire chain: RPTKA, notification, IMTA, work VITAS, and local replacement commitments.",
    benefitsId: [
      "Rekrutmen TKA 100% legal & aman razia",
      "Posisi & rasio sesuai ketentuan Kemenaker",
      "Proses berulang untuk TKA tambahan lebih cepat",
      "Kepatuhan DKP-TKA & SDM lokal terdokumentasi",
    ],
    benefitsEn: [
      "100% legal foreign hiring & raid-safe",
      "Positions & ratios per Manpower Ministry rules",
      "Faster repeat processes for additional foreigners",
      "DPKK & local workforce compliance documented",
    ],
    reqId: [
      "Legalitas perusahaan lengkap",
      "Struktur organisasi & posisi TKA",
      "Data pribadi & ijazah TKA",
      "Bukti rasio SDM lokal",
    ],
    reqEn: [
      "Complete company legality",
      "Organization structure & foreigner positions",
      "Foreigner's personal data & diplomas",
      "Local workforce ratio proof",
    ],
    stepsId: [
      "Konsultasi posisi & rasio tenaga kerja",
      "Pengajuan RPTKA ke Kemenaker",
      "Notifikasi & pembayaran DKP-TKA",
      "IMTA & VITAS kerja terbit",
    ],
    stepsEn: [
      "Position & workforce ratio consultation",
      "RPTKA submission to Manpower Ministry",
      "Notification & DPKK payment",
      "IMTA & work VITAS issued",
    ],
    durationId: "2–6 minggu",
    durationEn: "2–6 weeks",
    priceFrom: "Rp5.000.000",
    keywords: [
      "RPTKA",
      "IMTA",
      "izin kerja asing",
      "TKA Kemenaker",
      "DKP TKA",
      "foreign worker permit Indonesia",
      "jasa RPTKA",
      "work permit expat",
    ],
    faq: [
      {
        qId: "Posisi apa saja yang dilarang untuk TKA?",
        aId: "Antara lain Personalia/HRD Direktur, Industrial Relations Supervisor, dan sebagian posisi di bidang kerah biru tertentu. Kami beri daftar terkini saat konsultasi.",
        qEn: "Which positions are prohibited for foreigners?",
        aEn: "Including Personnel/HRD Director, Industrial Relations Supervisor, and certain blue-collar positions. We provide the latest list during consultation.",
      },
    ],
  },

  // ============ KETENAGAKERJAAN ============
  {
    slug: "wajib-lapor-perusahaan",
    cat: "ketenagakerjaan",
    nameId: "Wajib Lapor Perusahaan (Kemenaker)",
    nameEn: "Mandatory Company Reporting (Manpower Ministry)",
    shortId:
      "Kewajiban hukum setiap perusahaan mempekerjakan pekerja — syarat izin kerja asing & penempatan kerja.",
    shortEn:
      "Legal obligation for every employer — required for foreign work permits & job placements.",
    descId:
      "Wajib Lapor Perusahaan (WLP) diterbitkan dinas ketenagakerjaan setempat sebagai bukti perusahaan telah terdaftar di sistem ketenagakerjaan. Dokumen ini sering diminta saat pengajuan RPTKA, perekrutan melalui disnaker, dan audit ketenagakerjaan. Meski terlihat sederhana, kegagalan lapor dapat berujung denda. Kami urus cepat — termasuk perubahan data dan perpanjangan.",
    descEn:
      "The Mandatory Company Report (WLP) is issued by the local manpower office proving the company is registered in the employment system. This document is often requested for RPTKA applications, hiring through manpower offices, and labor audits. Though simple, failure to report can lead to fines. We process it fast — including data changes and renewals.",
    benefitsId: [
      "Patuh hukum ketenagakerjaan",
      "Syarat dokumen RPTKA & rekrutmen formal",
      "Terhindar dari denda lapor",
      "Fondasi hubungan industrial sehat",
    ],
    benefitsEn: [
      "Compliant with employment law",
      "RPTKA & formal hiring document requirement",
      "Avoids reporting fines",
      "Foundation for healthy industrial relations",
    ],
    reqId: [
      "NIB & akta pendirian",
      "NPWP perusahaan",
      "Data penanggung jawab",
      "Alamat & telepon kantor",
    ],
    reqEn: [
      "NIB & establishment deed",
      "Company NPWP",
      "Responsible person data",
      "Office address & phone",
    ],
    stepsId: [
      "Konsultasi & penyiapan dokumen",
      "Pengajuan ke dinas ketenagakerjaan",
      "Verifikasi data",
      "Surat WLP terbit",
    ],
    stepsEn: [
      "Consultation & document prep",
      "Submission to manpower office",
      "Data verification",
      "WLP letter issued",
    ],
    durationId: "2–5 hari kerja",
    durationEn: "2–5 working days",
    priceFrom: "Rp750.000",
    keywords: [
      "wajib lapor perusahaan",
      "WLP Kemenaker",
      "jasa wajib lapor",
      "lapor disnaker",
      "company registration manpower Indonesia",
      "wajib lapor online",
      "syarat RPTKA",
      "legalitas ketenagakerjaan",
    ],
    faq: [
      {
        qId: "Kapan wajib lapor harus diperbarui?",
        aId: "Bila ada perubahan nama, alamat, atau bentuk badan usaha. Perpanjangan rutin juga diatur daerah — sistem kami mengingatkan Anda otomatis.",
        qEn: "When must company reporting be updated?",
        aEn: "When name, address, or entity form changes. Routine renewals are also regionally regulated — our system reminds you automatically.",
      },
    ],
  },
  {
    slug: "pendaftaran-bpjs",
    cat: "ketenagakerjaan",
    nameId: "Pendaftaran BPJS Ketenagakerjaan & Kesehatan",
    nameEn: "BPJS Employment & Health Registration",
    shortId:
      "Kewajiban JKK-JKM-JHT dan jaminan kesehatan seluruh pekerja — lengkap dengan hitung premi & pembayaran.",
    shortEn:
      "JKK-JKM-JHT obligations and health insurance for all workers — complete with premium calculation & payment.",
    descId:
      "Pendaftaran BPJS Ketenagakerjaan (JKK, JKM, JHT, JP, JPY) dan BPJS Kesehatan adalah kewajiban hukum setiap pemberi kerja, sekaligus nilai jual perusahaan untuk menarik talenta. Kami menangani registrasi perusahaan dan pekerja, hitung premi yang benar (termasuk pekerja dengan gaji variabel), aktifkan dashboard, dan edukasi karyawan agar program berjalan mulus.",
    descEn:
      "BPJS Employment (JKK, JKM, JHT, JP, JPY) and BPJS Health registration are legal obligations for every employer and a selling point to attract talent. We handle company & worker registration, correct premium calculations (including variable-salary workers), dashboard activation, and employee education for smooth program operation.",
    benefitsId: [
      "Patuh hukum & bebas sanksi tenaga kerja",
      "Daya tarik merekrut talenta lebih kuat",
      "Proteksi kecelakaan & pensiun pekerja",
      "Dashboard & tagihan rapi tiap bulan",
    ],
    benefitsEn: [
      "Legally compliant & free from labor sanctions",
      "Stronger talent recruitment appeal",
      "Worker accident & retirement protection",
      "Tidy dashboard & monthly billing",
    ],
    reqId: [
      "NIB & NPWP perusahaan",
      "Data karyawan & upah",
      "Struktur gaji",
      "Data bank perusahaan",
    ],
    reqEn: [
      "Company NIB & NPWP",
      "Employee & salary data",
      "Salary structure",
      "Company bank data",
    ],
    stepsId: [
      "Konsultasi program & struktur premi",
      "Pendaftaran perusahaan & pekerja",
      "Aktivasi akun & dashboard",
      "Edukasi karyawan & tagihan pertama",
    ],
    stepsEn: [
      "Program & premium structure consultation",
      "Company & worker registration",
      "Account & dashboard activation",
      "Employee education & first billing",
    ],
    durationId: "1–2 minggu",
    durationEn: "1–2 weeks",
    priceFrom: "Rp850.000",
    keywords: [
      "daftar BPJS perusahaan",
      "BPJS Ketenagakerjaan",
      "jasa BPJS",
      "BPJS karyawan",
      "employment insurance Indonesia",
      "pendaftaran BPJS TK",
      "BPJS kesehatan perusahaan",
      "JKK JKM JHT",
    ],
    faq: [
      {
        qId: "Karyawan harian juga harus didaftarkan?",
        aId: "Ya, pekerja harian/harian lepas tetap wajib didaftarkan (paling tidak JKK & JKM). Kami bantu strukturkan agar premi tetap efisien.",
        qEn: "Must daily workers be registered?",
        aEn: "Yes, daily/casual workers must be registered (at least JKK & JKM). We help structure it so premiums stay efficient.",
      },
    ],
  },
  {
    slug: "sertifikasi-smk3",
    cat: "ketenagakerjaan",
    nameId: "Sertifikasi SMK3 (K3)",
    nameEn: "SMK3 Certification (OHS)",
    shortId:
      "Sistem Manajemen Keselamatan & Kesehatan Kerja — wajib bagi perusahaan berisiko tinggi, nilai plus tender.",
    shortEn:
      "Occupational Safety & Health Management System — mandatory for high-risk companies, tender plus point.",
    descId:
      "SMK3 adalah sistem manajemen K3 yang wajib bagi perusahaan dengan tingkat risiko tinggi (per PP 50/2012) dan menjadi nilai kompetitif di tender besar. Sertifikat diterbitkan lewat audit LNSM/Kemenaker dengan pernyataan audit pihak pertama-kedua-ketiga. Kami menyiapkan dokumen sistem, melatih tim, mengoordinasikan audit hingga sertifikat terbit — termasuk peremajaan berkala.",
    descEn:
      "SMK3 is an OHS management system mandatory for high-risk companies (per GR 50/2012) and a competitive plus in major tenders. Certificates are issued via LNSM/Manpower Ministry audits with first-second-third party audit statements. We prepare system documents, train teams, coordinate audits until certificates are issued — including periodic renewals.",
    benefitsId: [
      "Memenuhi kewajiban hukum K3 berisiko tinggi",
      "Menambah nilai dalam tender & kontrak besar",
      "Mengurangi angka kecelakaan kerja",
      "Premi asuransi & BPJS lebih menguntungkan",
    ],
    benefitsEn: [
      "Fulfills legal OHS obligations for high risk",
      "Adds value in tenders & major contracts",
      "Reduces workplace accident numbers",
      "More favorable insurance & BPJS premiums",
    ],
    reqId: [
      "NIB & profil perusahaan",
      "Struktur organisasi & tim K3",
      "Dokumen risiko kegiatan (HIRADC)",
      "Bukti pelatihan karyawan",
    ],
    reqEn: [
      "NIB & company profile",
      "Organization structure & OHS team",
      "Activity risk documents (HIRADC)",
      "Employee training proof",
    ],
    stepsId: [
      "Gap analysis sistem K3 berjalan",
      "Penyusunan dokumen & pelatihan tim",
      "Audit internal (pihak pertama-kedua)",
      "Audit pihak ketiga & sertifikat terbit",
    ],
    stepsEn: [
      "Gap analysis of running OHS system",
      "Document prep & team training",
      "Internal audits (first-second party)",
      "Third-party audit & certificate issued",
    ],
    durationId: "1–3 bulan",
    durationEn: "1–3 months",
    priceFrom: "Rp7.500.000",
    keywords: [
      "SMK3",
      "sertifikasi SMK3",
      "jasa SMK3 murah",
      "audit SMK3",
      "K3 perusahaan",
      "OHS certification Indonesia",
      "PP 50 2012 SMK3",
      "sertifikat K3 konstruksi",
    ],
    faq: [
      {
        qId: "Apakah perusahaan saya wajib SMK3?",
        aId: "Perusahaan dengan risiko tinggi (konstruksi, manufaktur berat, tambang, dll.) wajib. Risiko menengah dianjurkan. Kami lakukan penapisan risiko gratis.",
        qEn: "Is my company required to have SMK3?",
        aEn: "High-risk companies (construction, heavy manufacturing, mining, etc.) are mandatory. Medium risk is recommended. We do free risk screening.",
      },
    ],
  },

  // ============ SERTIFIKASI & HKI ============
  {
    slug: "iso-9001",
    cat: "sertifikasi",
    nameId: "Sertifikasi ISO 9001:2015 (Manajemen Mutu)",
    nameEn: "ISO 9001:2015 Certification (Quality Management)",
    shortId:
      "Standar manajemen mutu global — menaikkan kredibilitas, syarat tender, dan efisiensi internal.",
    shortEn:
      "The global quality management standard — raises credibility, tender requirements, and internal efficiency.",
    descId:
      "ISO 9001:2015 adalah sertifikasi sistem manajemen mutu yang diakui dunia. Bagi perusahaan Indonesia, ISO 9001 membuka pintu tender (terutama BUMN/pemerintah), meningkatkan kepercayaan mitra asing, dan menyistemkan proses internal. GConsultant sendiri bersertifikasi ISO 9001:2015 — kami mengajar dari pengalaman nyata: gap analysis, penyusunan dokumen (manual, prosedur, SOP), internal audit, hingga audit sertifikasi oleh badan sertifikasi terakreditasi.",
    descEn:
      "ISO 9001:2015 is the globally recognized quality management system certification. For Indonesian companies, ISO 9001 opens tender doors (especially SOE/government), raises foreign partner trust, and systematizes internal processes. GConsultant itself is ISO 9001:2015 certified — we teach from real experience: gap analysis, document preparation (manuals, procedures, SOPs), internal audits, to certification audits by accredited certification bodies.",
    benefitsId: [
      "Lolos syarat tender & kontrak besar",
      "Proses internal lebih efisien & terukur",
      "Kepercayaan mitra & pelanggan naik",
      "Fondasi ISO lain (14001, 45001, 27001)",
    ],
    benefitsEn: [
      "Passes tender & major contract requirements",
      "More efficient, measurable internal processes",
      "Partner & customer trust rises",
      "Foundation for other ISOs (14001, 45001, 27001)",
    ],
    reqId: [
      "Legalitas perusahaan",
      "Pemetaan proses bisnis",
      "Komitmen manajemen puncak",
      "Tim mutu internal",
    ],
    reqEn: [
      "Company legality",
      "Business process mapping",
      "Top management commitment",
      "Internal quality team",
    ],
    stepsId: [
      "Gap analysis & perencanaan sistem",
      "Penyusunan dokumen mutu & SOP",
      "Implementasi & internal audit",
      "Audit sertifikasi & sertifikat terbit",
    ],
    stepsEn: [
      "Gap analysis & system planning",
      "Quality documents & SOP drafting",
      "Implementation & internal audit",
      "Certification audit & certificate issued",
    ],
    durationId: "2–5 bulan",
    durationEn: "2–5 months",
    priceFrom: "Rp12.000.000",
    keywords: [
      "sertifikasi ISO 9001",
      "jasa ISO 9001",
      "biaya ISO 9001",
      "konsultan ISO",
      "ISO 9001:2015 Indonesia",
      "quality management certification",
      "ISO tender",
      "lembaga sertifikasi ISO",
    ],
    faq: [
      {
        qId: "Berapa lama sertifikat ISO 9001 berlaku?",
        aId: "3 tahun dengan audit pengawasan tahunan. Kami mengingatkan dan mendampingi surveilans agar sertifikat tidak dicabut.",
        qEn: "How long is ISO 9001 valid?",
        aEn: "3 years with annual surveillance audits. We remind and assist surveillance so certificates are never revoked.",
      },
    ],
  },
  {
    slug: "iso-14001-45001-27001",
    cat: "sertifikasi",
    nameId: "ISO 14001 / 45001 / 27001 (Lingkungan, K3, Keamanan Informasi)",
    nameEn: "ISO 14001 / 45001 / 27001 (Environment, OHS, Information Security)",
    shortId:
      "Keluarga ISO lanjutan untuk keunggulan kompetitif: lingkungan, keselamatan kerja, dan keamanan data.",
    shortEn:
      "Advanced ISO family for competitive edge: environment, workplace safety, and information security.",
    descId:
      "Selain ISO 9001, perusahaan modern menuntut ISO 14001 (manajemen lingkungan — penting untuk ESG dan investasi hijau), ISO 45001 (keselamatan & kesehatan kerja — melengkapi SMK3), dan ISO 27001 (keamanan informasi — syarat kerja sama teknologi & keuangan). Kami integrasikan sistem yang saling terkait (Integrated Management System) agar biaya audit dan beban dokumen lebih efisien.",
    descEn:
      "Beyond ISO 9001, modern companies demand ISO 14001 (environmental management — key for ESG and green investment), ISO 45001 (occupational health & safety — complementing SMK3), and ISO 27001 (information security — required for tech & finance partnerships). We integrate interrelated systems (Integrated Management System) so audit costs and document loads are more efficient.",
    benefitsId: [
      "Keunggulan ESG & akses investasi hijau",
      "Perlindungan data sesuai UU PDP",
      "Integrasi sistem hemat biaya audit",
      "Kredibilitas dengan mitra global",
    ],
    benefitsEn: [
      "ESG edge & green investment access",
      "Data protection per Indonesian PDP Law",
      "Integrated systems save audit costs",
      "Credibility with global partners",
    ],
    reqId: [
      "Legalitas perusahaan",
      "Peta proses & data risiko",
      "Komitmen manajemen",
      "Tim sistem mutu",
    ],
    reqEn: [
      "Company legality",
      "Process map & risk data",
      "Management commitment",
      "Quality system team",
    ],
    stepsId: [
      "Gap analysis spesifik standar",
      "Penyusunan sistem & dokumentasi",
      "Implementasi, pelatihan & audit internal",
      "Audit sertifikasi & sertifikat terbit",
    ],
    stepsEn: [
      "Standard-specific gap analysis",
      "System & documentation drafting",
      "Implementation, training & internal audit",
      "Certification audit & certificate issued",
    ],
    durationId: "3–6 bulan",
    durationEn: "3–6 months",
    priceFrom: "Rp15.000.000",
    keywords: [
      "ISO 14001",
      "ISO 45001",
      "ISO 27001",
      "konsultan ISO Indonesia",
      "environmental certification Indonesia",
      "information security ISO",
      "IMS integrated management",
      "sertifikasi lingkungan",
    ],
    faq: [
      {
        qId: "Bisa ambil beberapa ISO sekaligus?",
        aId: "Ya, dengan Integrated Management System Anda audit sekali untuk beberapa standar — hemat biaya 30–40% dibanding terpisah. Kami spesialis pendekatan ini.",
        qEn: "Can I get several ISOs at once?",
        aEn: "Yes, with an Integrated Management System you audit once for multiple standards — saving 30–40% versus separate audits. We specialize in this approach.",
      },
    ],
  },
  {
    slug: "hki-merek-paten",
    cat: "sertifikasi",
    nameId: "HKI — Merek, Hak Cipta & Paten (DJKI)",
    nameEn: "IP — Trademark, Copyright & Patent (DJKI)",
    shortId:
      "Lindungi brand, karya, dan inovasi Anda: pendaftaran merek, ciptaan, desain industri, dan paten di DJKI.",
    shortEn:
      "Protect your brand, works, and innovations: trademark, copyright, industrial design, and patent registration at DJKI.",
    descId:
      "Setiap hari merek dan produk ditiru. Pendaftaran Merek di DJKI Kemenkumham memberi hak eksklusif 10 tahun (dapat diperpanjang), Hak Cipta melindungi karya otomatis tapi pendaftaran memperkuat pembuktian, Desain Industri dan Paten melindungi inovasi produk. Kami menangani penelusuran awal ( kesamaan merek), klasifikasi Nice, pengajuan, hingga menghadapi keberatan pihak ketiga — sehingga aset immaterial Anda terlindungi penuh.",
    descEn:
      "Brands and products get copied every day. Trademark registration at DJKI Kemenkumham grants 10-year exclusive rights (renewable); copyright is automatic but registration strengthens proof; industrial designs and patents protect product innovations. We handle initial searches (brand similarity), Nice classification, submissions, to facing third-party objections — so your intangible assets are fully protected.",
    benefitsId: [
      "Hak eksklusif atas merek & karya",
      "Bisa menuntut pembajakan secara hukum",
      "Aset immaterial bernilai untuk investasi",
      "Mencegah pendaftaran merek oleh pihak lain",
    ],
    benefitsEn: [
      "Exclusive rights over brands & works",
      "Legal power to sue counterfeiters",
      "Valuable intangible assets for investment",
      "Prevents others registering your brand",
    ],
    reqId: [
      "KTP/NPWP (perorangan) atau NIB (badan)",
      "Logo/nama merek & klasifikasi barang/jasa",
      "Deskripsi karya/inovasi",
      "Prioritas pendaftaran (bila ada)",
    ],
    reqEn: [
      "ID/NPWP (individual) or NIB (entity)",
      "Logo/name & goods/services classification",
      "Work/innovation description",
      "Filing priority (if any)",
    ],
    stepsId: [
      "Penelusuran kesamaan merek",
      "Penentuan klasifikasi Nice",
      "Pengajuan online ke DJKI",
      "Pemantauan hingga sertifikat terbit",
    ],
    stepsEn: [
      "Brand similarity search",
      "Nice classification determination",
      "Online submission to DJKI",
      "Monitoring until certificate issued",
    ],
    durationId: "2–9 bulan",
    durationEn: "2–9 months",
    priceFrom: "Rp1.800.000",
    keywords: [
      "daftar merek",
      "pendaftaran merek DJKI",
      "hak cipta",
      "paten",
      "jasa HKI",
      "trademark registration Indonesia",
      "merek dagang",
      "brand protection Indonesia",
    ],
    faq: [
      {
        qId: "Merek saya sudah dipakai orang lain, apa yang bisa dilakukan?",
        aId: "Tersedia jalur keberatan, gugatan pembatalan, atau negosiasi lisensi. Kami analisis posisi hukum Anda dan rekomendasikan jalur paling efektif.",
        qEn: "Someone else is using my brand — what can be done?",
        aEn: "Objection, cancellation suit, or license negotiation routes exist. We analyze your legal position and recommend the most effective path.",
      },
    ],
  },
  {
    slug: "sertifikasi-kompetensi-bnsp",
    cat: "sertifikasi",
    nameId: "Sertifikasi Kompetensi BNSP",
    nameEn: "BNSP Competency Certification",
    shortId:
      "Sertifikat kompetensi resmi untuk SDM & tenaga teknis — syarat SBU, SMK3, dan kredibilitas profesional.",
    shortEn:
      "Official competency certificates for staff & technicians — required for SBU, SMK3, and professional credibility.",
    descId:
      "Sertifikat Kompetensi dari BNSP (lewat LSP) membuktikan keahlian personalia: operator, ahli K3, teknisi, manajer, hingga pekerja lepas. Sertifikat ini sering menjadi syarat dokumen SBU konstruksi, SMK3, operator alat berat, dan tender. Kami mengoordinasikan asesi, pelatihan persiapan (bila perlu), uji kompetensi, hingga sertifikat terbit untuk individu maupun tim perusahaan Anda.",
    descEn:
      "BNSP Competency Certificates (via LSPs) prove personnel expertise: operators, OHS experts, technicians, managers, to freelancers. Certificates are often required for construction SBU, SMK3, heavy equipment operators, and tenders. We coordinate assessors, preparation training (when needed), competency tests, until certificates are issued for individuals or your company teams.",
    benefitsId: [
      "SDM bersertifikat untuk syarat SBU/SMK3",
      "Kredibilitas profesional & peluang karier naik",
      "Nilai plus dalam tender jasa",
      "Tim siap audit ketenagakerjaan",
    ],
    benefitsEn: [
      "Certified staff for SBU/SMK3 requirements",
      "Professional credibility & career growth",
      "Plus points in service tenders",
      "Team ready for labor audits",
    ],
    reqId: [
      "KTP & ijazah/riwayat pelatihan",
      "Bukti pengalaman kerja",
      "Portofolio kompetensi",
      "Data unit kompetensi target",
    ],
    reqEn: [
      "ID & diploma/training records",
      "Work experience proof",
      "Competency portfolio",
      "Target competency unit data",
    ],
    stepsId: [
      "Penentuan skema & unit kompetensi",
      "Persiapan portofolio & pelatihan",
      "Uji kompetensi oleh asesor BNSP",
      "Sertifikat kompetensi terbit",
    ],
    stepsEn: [
      "Scheme & competency unit determination",
      "Portfolio & training preparation",
      "Competency test by BNSP assessor",
      "Competency certificate issued",
    ],
    durationId: "2–6 minggu",
    durationEn: "2–6 weeks",
    priceFrom: "Rp1.500.000",
    keywords: [
      "sertifikasi BNSP",
      "sertifikat kompetensi",
      "LSP BNSP",
      "uji kompetensi",
      "jasa BNSP",
      "competency certification Indonesia",
      "SBU tenaga teknis",
      "SKK konstruksi",
    ],
    faq: [
      {
        qId: "Berapa lama sertifikat BNSP berlaku?",
        aId: "Umumnya 3 tahun (tergantung skema). Kami mengingatkan re-sertifikasi sebelum kadaluarsa agar SDM Anda selalu siap tender.",
        qEn: "How long are BNSP certificates valid?",
        aEn: "Generally 3 years (per scheme). We remind re-certifications before expiry so your staff stay tender-ready.",
      },
    ],
  },
];

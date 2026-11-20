import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Izin Usaha PPIU Umrah — Syarat, Biaya & Paket Full All-In Rp19,5 Jt | GConsultant",
  description:
    "Panduan lengkap izin PPIU 2026: pengertian, dasar hukum UU 13/2008, syarat Kemenag, alur 6 tahap, ruang lingkup paket full all-in Rp19,5 juta, dan FAQ — didampingi tim bersertifikasi ISO 9001:2015 di 38 provinsi.",
  keywords: [
    "izin PPIU",
    "biaya izin PPIU 2026",
    "syarat izin PPIU Kemenag",
    "cara mengurus izin umrah",
    "harga izin PPIU full all-in",
    "jasa pengurusan izin PPIU",
    "perizinan travel umrah resmi",
    "izin penyelenggara perjalanan ibadah umrah",
    "SKPPU",
    "legalitas travel umrah",
  ],
  path: "/sertifikasi-travel/ppiu",
});

const FAQS = [
  {
    q: "Berapa biaya izin PPIU 2026 di GConsultant?",
    a: "Paket full all-in kami Rp19.500.000 (harga normal Rp26.000.000). Paket mencakup pembentukan badan usaha bila belum ada, seluruh penyiapan dokumen, pengurusan rekomendasi hingga izin Kemenag terbit, serta pendampingan pelaporan pertama. Biaya pihak ketiga seperti deposit bank dan kepesertaan asosiasi dihitung terpisah dan transparan.",
  },
  {
    q: "Berapa lama proses pengurusan izin PPIU?",
    a: "Estimasi umum 4–8 minggu sejak dokumen lengkap, bergantung kelengkapan berkas dan antrean instansi. Kami tidak bisa dan tidak akan menjanjikan durasi pasti karena jadwal penerbitan ada di kewenangan Kementerian Agama; yang kami jamin adalah dokumen benar sejak awal agar tidak bolak-balik.",
  },
  {
    q: "Apakah harus berbentuk PT?",
    a: "Praktik yang disyaratkan penyelenggaraan umrah adalah badan hukum perseroan terbatas (PT) dengan pemilik dan pengurus Warga Negara Indonesia. Jika usaha Anda masih CV atau usaha perorangan, paket all-in kami sudah mencakup konversi/pendirian PT terlebih dahulu.",
  },
  {
    q: "Apa bedanya izin pendirian PPIU dengan SKPPU?",
    a: "Izin pendirian PPIU adalah pintu masuk legal: Kemenag mengizinkan perusahaan Anda menyelenggarakan umrah. Setelah itu keberangkatan jamaah mengikuti mekanisme pelaporan dan pendaftaran per-keberangkatan yang di Kemenag umum dikenal dengan SKPPU (surat keterangan pendaftaran umrah). Tim kami mendampingi Anda memahami alur ini sampai keberangkatan pertama.",
  },
  {
    q: "Berapa masa berlaku izin PPIU dan bagaimana perpanjangannya?",
    a: "Izin PPIU berlaku 5 tahun dan dapat diperpanjang selama perusahaan patuh melapor dan memenuhi ketentuan penyelenggaraan. Kami mencatat tanggal kedaluwarsa Anda dan mengingatkan persiapan perpanjangan jauh sebelum jatuh tempo.",
  },
  {
    q: "Apakah travel pemula bisa langsung menjadi PIHK (haji khusus)?",
    a: "Tidak. Jalur resmi adalah menjadi PPIU terlebih dahulu, lalu naik kelas ke PIHK setelah memenuhi prasyarat pengalaman operasional dan modal — ketentuan terkini menuntut operasional minimal 3 tahun atau 1.000 jamaah dengan modal setor minimal Rp1,25 miliar. Paket PIHK kami menyertakan peta jalur naik kelas ini.",
  },
  {
    q: "Saya di luar Jawa, apakah bisa dilayani?",
    a: "Bisa. Kami melayani 38 provinsi Indonesia: koordinasi dokumen daring, notaris mitra di kota Anda bila diperlukan, dan pendampingan WhatsApp. Kehadiran fisik hanya bila instansi secara spesifik mensyaratkan.",
  },
  {
    q: "Bagaimana skema pembayaran dan garansinya?",
    a: "Pembayaran bertahap mengikuti kemajuan pekerjaan dengan kwitansi resmi dan kontrak tertulis. Garansi kami adalah garansi pengerjaan: dokumen lengkap dan benar sesuai ketentuan, transparansi status berkala, serta pendampingan sampai izin terbit — bukan jaminan persetujuan instansi, karena keputusan akhir selalu ada pada Kemenag.",
  },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export default function PpiuPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Izin Usaha PPIU (Umrah) — Paket Full All-In",
    serviceType: "Perizinan penyelenggara perjalanan ibadah umrah (PPIU)",
    description:
      "Jasa pengurusan lengkap izin usaha PPIU di Kementerian Agama: pembentukan badan usaha, penyiapan dokumen, rekomendasi, hingga izin terbit dengan pendampingan pelaporan pertama.",
    provider: { "@type": "Organization", name: BRAND.name, url: BRAND.siteUrl },
    areaServed: { "@type": "Country", name: "Indonesia" },
    offers: {
      "@type": "Offer",
      name: "Paket Full All-In PPIU 2026",
      price: 19500000,
      priceCurrency: "IDR",
      url: `${BRAND.siteUrl}/sertifikasi-travel/ppiu`,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          crumbKey="certPpiuCrumb"
          kickerKey="certPpiuKicker"
          titleKey="certPpiuTitle"
          subKey="certPpiuSub"
        />

        <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            Bismillah — Anda sedang menatap pasar yang paling ramai di musim liburan: jutaan calon jamaah umrah
            mencari travel yang <strong>legal dan amanah</strong> setiap tahunnya. Namun satu hal memisahkan travel
            yang tumbuh besar dengan yang berhenti di Facebook marketplace:{" "}
            <strong>izin usaha PPIU yang terbit dari Kementerian Agama</strong>. Halaman ini adalah panduan paling
            lengkap yang kami tahu cara membuatnya — pengertian, dasar hukum, syarat, alur pengerjaan, sampai
            rincian paket full all-in kami — ditulis agar pemula sekalipun bisa mengambil keputusan hari ini.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold">Apa Itu Izin Usaha PPIU?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              <strong>PPIU (Perusahaan Perjalanan Ibadah Umrah)</strong> adalah biro perjalanan wisata yang
              memiliki izin dari Menteri Agama untuk menyelenggarakan perjalanan ibadah umrah. Dalam ketentuan
              penyelenggaraan, PPIU wajib menyediakan pembimbing ibadah bagi jamaahnya dan melaporkan
              kegiatan penyelenggaraannya kepada Kementerian Agama. Izin ini memiliki masa berlaku 5 tahun dan
              dapat diperpanjang selama perusahaan patuh melapor.
            </p>
            <p>
              Bagi jamaah, memilih travel ber-PPIU bukan sekadar formalitas: izin itu bukti bahwa perusahaan
              diawasi negara, punya struktur pengurus yang jelas, dan terikat pada standar pelayanan ibadah.
              Bagi pemilik usaha, izin PPIU adalah tiket untuk membuka cabang, bekerja sama dengan mitra hotel
              dan maskapai di Tanah Suci, serta menampilkan logo kepercayaan yang membuat calon jamaah berani
              menyetor ratusan juta rupiah. Tanpa izin, Anda berjualan di zona abu-abu — risikonya bukan hanya
              sanksi administratif, tetapi hilangnya kepercayaan yang jauh lebih mahal daripada biaya izin.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold">Dasar Hukum Izin PPIU</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Kerangka hukum penyelenggaraan travel ibadah di Indonesia berdiri di atas beberapa lapis peraturan.
              Lapis pertama adalah <strong>Undang-Undang Nomor 13 Tahun 2008 tentang Penyelenggaraan Ibadah
              Haji</strong> yang menaungi penyelenggaraan perjalanan ibadah ke Tanah Suci, termasuk umrah dan haji
              khusus. Lapis kedua adalah peraturan turunan Kementerian Agama — antara lain Peraturan Menteri
              Agama Nomor 15 Tahun 2012 yang mengatur penetapan izin penyelenggara haji khusus (PIHK), serta
              ketentuan menteri tentang penyelenggaraan perjalanan ibadah umrah yang terus diperbarui dari waktu
              ke waktu.
            </p>
            <p>
              Penting dipahami: regulasi travel ibadah adalah regulasi yang <em>bergerak</em>. Ketentuan mengenai
              kode KBLI, deposit, dan mekanisme keberangkatan dapat bergeser mengikuti kebijakan pemerintah yang
              sedang berlaku. Karena itu tim GConsultant memantau pembaruan regulasi sebagai bagian dari layanan —
              Anda tidak perlu mengikuti berita peraturan satu per satu; kami yang memastikan berkas Anda selalu
              sesuai versi terbaru.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold">Siapa yang Wajib Mengurus Izin PPIU?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Setiap perusahaan yang menjual, memasarkan, atau memfasilitasi paket perjalanan ibadah umrah
              kepada masyarakat perlu berstatus PPIU — termasuk travel yang saat ini berjualan sebagai reseller
              paket, travel daerah yang bekerja sama dengan travel besar, dan usaha baru yang ingin langsung
              bersih. Sebaliknya, biro perjalanan wisata yang hanya menjual paket wisata umum (bukan ibadah)
              cukup dengan legalitas BPW. Bila rencana Anda adalah menjual keduanya, jalur yang benar adalah
              membangun BPW sekaligus menyiapkan PPIU — dan itu justru yang paling sering kami kerjakan untuk
              klien pemula.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold">Syarat Mengurus Izin PPIU</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Daftar berikut adalah ringkasan umum persyaratan yang kami hadapi di lapangan. Daftar final selalu
            mengikuti ketentuan Kementerian Agama yang berlaku saat pengajuan — dan di situlah nilai pendampingan
            kami:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Badan hukum perseroan terbatas (PT) dengan akta notaris pendirian atau perubahannya.</li>
            <li>SK Kemenkumham sebagai bukti pengesahan badan hukum.</li>
            <li>Pemilik dan pengurus perusahaan berstatus Warga Negara Indonesia.</li>
            <li>NPWP badan, NIB (OSS), dan kode KBLI untuk perjalanan ibadah umrah.</li>
            <li>Struktur organisasi dan akta pengurus yang sesuai ketentuan penyelenggaraan.</li>
            <li>Dokumen permohonan dan rekomendasi izin pendirian PPIU kepada Kemenag.</li>
            <li>Kesiapan dana deposit/dana talangan sesuai ketentuan yang berlaku.</li>
            <li>Kesiapan menyediakan pembimbing ibadah dan standar pelayanan jamaah.</li>
            <li>Dokumen pendukung operasional: kantor, kontak resmi, dan perjanjian layanan.</li>
          </ol>

          <h2 className="mt-12 font-display text-2xl font-bold">Alur Pengerjaan di GConsultant: 6 Tahap</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Kami mengonversi proses yang rumit menjadi enam tahap yang bisa Anda pantau. Setiap tahap berpindah
              hanya setelah tahap sebelumnya selesai dan Anda menerima laporan statusnya:
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Konsultasi &amp; pemetaan kesiapan</strong> — kami menilai kondisi usaha Anda: sudah ada
                badan usaha atau belum, dokumen apa yang tersisa, dan target keberangkatan Anda.
              </li>
              <li>
                <strong>Pembentukan badan usaha</strong> — pendirian PT lengkap (akta, SK Kemenkumham, NPWP,
                NIB, KBLI) atau penyesuaian dokumen PT yang sudah ada.
              </li>
              <li>
                <strong>Penyiapan berkas permohonan</strong> — seluruh dokumen disusun, direview silang, dan
                dibuat persis dalam format yang diminta Kemenag.
              </li>
              <li>
                <strong>Pengurusan rekomendasi &amp; permohonan izin</strong> — kami melayani pengajuan ke
                instansi terkait dan memantau progresnya.
              </li>
              <li>
                <strong>Izin terbit &amp; serah terima</strong> — Anda menerima izin asli beserta arsip digital
                dan panduan kewajiban berkelanjutan.
              </li>
              <li>
                <strong>Pendampingan pasca-izin</strong> — panduan deposit, kesiapan pembimbing ibadah, dan
                pendampingan pelaporan menuju keberangkatan jamaah pertama Anda.
              </li>
            </ol>
            <p>
              Estimasi durasi keseluruhan umumnya <strong>4–8 minggu sejak dokumen lengkap</strong>, bergantung
              pada antrean instansi — angka ini estimasi jujur, bukan janji tanggal pasti.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold">
            Isi Paket Full All-In Rp19.500.000
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[560px] text-sm">
              <thead className="bg-muted/60 text-left">
                <tr>
                  <th className="px-4 py-3 font-bold">Komponen</th>
                  <th className="px-4 py-3 font-bold">Status di paket</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">Pendirian PT (akta, SK, NPWP, NIB, KBLI)</td>
                  <td className="px-4 py-3 font-semibold text-gold">Termasuk</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Penyiapan seluruh berkas permohonan</td>
                  <td className="px-4 py-3 font-semibold text-gold">Termasuk</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Pengurusan rekomendasi hingga izin Kemenag terbit</td>
                  <td className="px-4 py-3 font-semibold text-gold">Termasuk</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Konsultasi regulasi terkini selama proses</td>
                  <td className="px-4 py-3 font-semibold text-gold">Termasuk</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Panduan deposit, pembimbing ibadah &amp; pelaporan pertama</td>
                  <td className="px-4 py-3 font-semibold text-gold">Termasuk</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Deposit/dana talangan di bank, iuran &amp; kepesertaan asosiasi</td>
                  <td className="px-4 py-3">Quotation terpisah (transparan)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Perjalanan dinas luar cakupan &amp; biaya pihak ketiga lain</td>
                  <td className="px-4 py-3">Quotation terpisah (transparan)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Untuk menjaga kejujuran komersial, kami menyatakan batasan dengan tegas: GConsultant adalah konsultan
            independen — tidak berafiliasi dan tidak mengaku diwakili oleh Kementerian Agama maupun instansi
            mana pun, dan <strong>tidak ada jaminan persetujuan</strong> karena keputusan akhir selalu berada di
            tangan instansi. Yang kami jamin adalah kualitas pengerjaan, transparansi status, dan pendampingan
            sampai izin terbit. Model batasan yang sama kami terapkan pada seluruh layanan, termasuk garis
            produk konsultansi akreditasi IATA kami.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold">
            PPIU, PPIU Plus, atau PIHK: Mana Jalur Anda?
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              <strong>PPIU</strong> adalah izin inti untuk menjual umrah. <strong>PPIU Plus (umrah plus)</strong>{" "}
              adalah perluasan agar paket Anda boleh menggabungkan ibadah dengan wisata ke tujuan lain.{" "}
              <strong>PIHK (penyelenggara perjalanan ibadah haji khusus)</strong> adalah tingkat tertinggi — izin
              berdasarkan UU 13/2008 dengan masa berlaku 3 tahun — yang jalurnya dikejar dari pengalaman PPIU:
              ketentuan terkini menuntut operasional minimal 3 tahun atau 1.000 jamaah dengan modal setor
              minimal Rp1,25 miliar. Kabar baiknya, paket PIHK full all-in kami sudah termasuk pemetaan jalur
              naik kelas ini sehingga Anda tahu persis target yang harus dicapai tahun demi tahun.
            </p>
            <p>
              Rekomendasi dewan kami sederhana: mulai dari PPIU hari ini, jalankan keberangkatan pertama dengan
              rapi, dan rencanakan naik kelas sejak awal. Tiga paket full all-in —{" "}
              <Link href="/layanan/tda-biro-perjalanan-wisata-bpw" className="font-semibold text-gold underline underline-offset-4">
                BPW Rp14,9 juta
              </Link>
              ,{" "}
              <Link href="/layanan/izin-usaha-ppiu-umrah" className="font-semibold text-gold underline underline-offset-4">
                PPIU Rp19,5 juta
              </Link>
              , dan{" "}
              <Link href="/layanan/izin-usaha-ppihk-haji-khusus" className="font-semibold text-gold underline underline-offset-4">
                PIHK Rp24,9 juta
              </Link>
              {" "}— tersedia dalam satu halaman{" "}
              <Link href="/sertifikasi-travel" className="font-semibold text-gold underline underline-offset-4">
                Sertifikasi Travel Full All-In
              </Link>
              {" "}agar mudah dibandingkan.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold">Pertanyaan Seputar Izin PPIU</h2>
          <div className="mt-6 space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl border border-gold/20 bg-card p-5">
                <summary className="cursor-pointer font-bold">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-12 leading-relaxed text-muted-foreground">
            Musim keberangkatan tidak menunggu. Semakin awal berkas Anda masuk, semakin awal travel Anda berhak
            membawa jamaah — dan semakin cepat brand Anda muncul di pencarian jamaah yang setiap hari mengetik
            &ldquo;travel umrah terpercaya&rdquo;. Terima kasih telah membaca panduan ini sampai akhir; tim kami
            siap memulai dari tahap pertama kapan pun Anda siap.
          </p>
        </article>

        <CtaBanner />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd("/sertifikasi-travel/ppiu", "Izin Usaha PPIU Umrah — Syarat, Biaya & Paket Full All-In", "Panduan lengkap izin PPIU 2026: dasar hukum, syarat Kemenag, alur 6 tahap, paket full all-in Rp19,5 juta, dan FAQ.")),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("/sertifikasi-travel/ppiu", "Izin PPIU Umrah")) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <Footer />
    </div>
  );
}

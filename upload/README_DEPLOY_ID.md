# GConsultant - paket website pilot (Bahasa Indonesia)

Paket ini adalah homepage statis tanpa backend atau layanan pihak ketiga, cocok untuk preview/staging sebelum digabungkan ke situs produksi.

## Cara uji lokal
1. Ekstrak folder `07_WEB_PILOT`.
2. Buka `index.html` di browser modern. Untuk pengujian yang lebih dekat dengan hosting, jalankan local web server.
3. Periksa tampilan desktop dan ponsel, link navigasi, logo, dan favicon.

## Cara upload ke hosting
1. Upload isi folder ini ke direktori staging, misalnya `public_html/gconsultant-preview/`, bukan langsung menimpa situs aktif.
2. Pastikan folder `assets/` ikut ter-upload bersama `index.html` dan `site.css`.
3. Jika nanti dijadikan halaman utama `gunara.web.id`, pindahkan melalui proses deploy terkontrol dan merge dengan `.htaccess`, CMS, `index.php` atau sistem yang sudah ada; jangan menimpa berkas produksi tanpa backup.
4. Perbarui `canonical`, `og:image`, dan jalur asset di `index.html` serta manifest bila lokasi deploy berbeda.
5. Tambahkan kanal kontak bisnis yang benar (email/form/WhatsApp resmi), lalu test mobile, navigasi keyboard, kontras, favicon, metadata sharing, dan performa.

## Konten yang sengaja belum diada-adakan
Paket ini tidak memasukkan nomor telepon, alamat kantor, testimonial, daftar klien, angka capaian, sertifikasi, atau klaim merek terdaftar karena data tersebut belum diberikan/diverifikasi.

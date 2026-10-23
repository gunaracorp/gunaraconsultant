"use client";

import { Quote, Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem, SectionHeading } from "@/components/animations";
import { useLang } from "@/lib/i18n";

const TESTIMONIALS = [
  {
    nameId: "Budi Santoso",
    role: "Owner Restoran — Bandung",
    textId:
      "Dari NIB sampai sertifikat halal, semua dikerjakan rapi dan cepat. Yang paling saya suka: progresnya selalu dilaporkan tanpa saya tanya duluan. Profesional kelas dunia memang beda.",
    textEn:
      "From NIB to halal certificate, everything was done neatly and fast. What I like most: progress is always reported without me asking first. Truly world-class professionalism.",
  },
  {
    nameId: "Sari Wijaya",
    role: "Founder Brand Skincare — Jakarta",
    textId:
      "Produk saya sempat bermasalah notifikasi BPOM. Tim GConsultant menyelamatkan seluruh lini produk dalam waktu yang saya kira mustahil. Sekarang bisa masuk ritel modern dengan percaya diri.",
    textEn:
      "My products had BPOM notification problems. GConsultant's team saved the entire product line in a time I thought was impossible. Now we enter modern retail with confidence.",
  },
  {
    nameId: "Ahmad Fauzi",
    role: "Direktur PT Konstruksi — Balikpapan",
    textId:
      "SBU dan SMK3 selesai sebelum deadline tender. Pendampingannya detail sampai ke dokumen tenaga teknis. Hasilnya: kami menang kontrak BUMN pertama tahun lalu.",
    textEn:
      "SBU and SMK3 finished before the tender deadline. Their assistance was detailed down to technical staff documents. Result: we won our first SOE contract last year.",
  },
  {
    nameId: "Maria Marpaung",
    role: "Owner Villa — Ubud, Bali",
    textId:
      "PBG dan SLF villa saya bermasalah karena dokumen lama tidak lengkap. GConsultant bereskan semuanya tanpa saya repot. Sekarang bisa kerja sama OTA besar.",
    textEn:
      "My villa's PBG and SLF were problematic due to incomplete old documents. GConsultant settled everything without hassle. Now we partner with major OTAs.",
  },
  {
    nameId: "David Chen",
    role: "CEO PT PMA — Surabaya",
    textId:
      "Sebagai investor asing, saya butuh kejelasan. GConsultant menjelaskan setiap langkah dalam bahasa yang mudah dipahami, dari PMA hingga KITAS. Worth every rupiah.",
    textEn:
      "As a foreign investor, I needed clarity. GConsultant explained every step in easy language, from PMA to KITAS. Worth every rupiah.",
  },
  {
    nameId: "Rina Halim",
    role: "Owner Klinik — Semarang",
    textId:
      "Izin klinik dan apotek yang selama setahun saya coba sendiri, dalam 6 minggu selesai lewat GConsultant. Standards mereka sangat tinggi. Sangat direkomendasikan.",
    textEn:
      "Clinic and pharmacy permits I struggled with for a year were done in 6 weeks through GConsultant. Their standards are extremely high. Highly recommended.",
  },
];

export function Testimonials() {
  const { t, lang } = useLang();

  return (
    <section className="bg-background py-20 sm:py-28" aria-label="Testimoni klien">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t("tesKicker")} title={t("tesTitle")} />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((ts) => (
            <StaggerItem key={ts.nameId}>
              <figure className="card-lux flex h-full flex-col rounded-3xl p-7">
                <Quote className="h-8 w-8 text-gold/70" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{lang === "id" ? ts.textId : ts.textEn}”
                </blockquote>
                <div className="mt-5 flex items-center gap-1" aria-label="5 dari 5 bintang">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <p className="font-display text-base font-bold text-ink">
                    {ts.nameId}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-primary/80">
                    {ts.role}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            ⭐ 4.9/5.0 — rata-rata kepuasan klien GConsultant
          </p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading, Stagger, StaggerItem } from "@/components/ui-custom/animated";
import { SITE, CONTACT_SERVICES } from "@/lib/data";

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: "Respons < 15 menit (jam kerja)",
  },
  {
    icon: Mail,
    title: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Balasan maksimal 1x24 jam",
  },
  {
    icon: MapPin,
    title: "Kantor Pusat",
    value: `${SITE.address.street}, ${SITE.address.city}`,
    href: "#kontak",
    note: "Senin–Sabtu, 08.00–20.00 WIB",
  },
] as const;

export function Contact() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Form belum lengkap",
        description: "Mohon isi nama, email, dan pesan Anda.",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Gagal mengirim pesan");
      toast({
        title: "Pesan terkirim!",
        description:
          "Terima kasih! Tim Gunara Consultant akan menghubungi Anda maksimal 15 menit di jam kerja.",
      });
      setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      toast({
        title: "Gagal mengirim",
        description:
          err instanceof Error ? err.message : "Silakan coba lagi atau hubungi WhatsApp kami.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-deep py-24 sm:py-28 noise-overlay"
      aria-label="Hubungi Gunara Consultant"
    >
      <div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-[130px] animate-orb"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-gold/20 blur-[120px] animate-orb-alt"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Hubungi Kami"
          title="Mulai dengan"
          highlight="Konsultasi Gratis"
          description="Ceritakan kebutuhan perizinan Anda — tanpa biaya, tanpa komitmen. Tim ahli kami merespons maksimal 15 menit pada jam kerja."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info kontak */}
          <div>
            <Stagger className="space-y-4">
              {CONTACT_CARDS.map((card) => (
                <StaggerItem key={card.title}>
                  <motion.a
                    href={card.href}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-gold/40 hover:bg-white/10"
                  >
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gold/15 p-3.5 transition-transform duration-300 group-hover:scale-110">
                      <card.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                        {card.title}
                      </p>
                      <p className="truncate text-[15px] font-extrabold text-white">
                        {card.value}
                      </p>
                      <p className="mt-0.5 text-xs text-white/50">{card.note}</p>
                    </div>
                  </motion.a>
                </StaggerItem>
              ))}
            </Stagger>

            <motion.a
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-4 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-5 backdrop-blur transition-all hover:bg-emerald-400/20"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/20">
                <MessageCircle className="h-6 w-6 text-emerald-300" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[15px] font-extrabold text-white">
                  Chat Langsung via WhatsApp
                </p>
                <p className="text-xs text-white/60">
                  Fast track konsultasi — dibalas dalam hitungan menit
                </p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="mt-6 flex items-center gap-3 rounded-2xl border border-gold/25 bg-gold/10 p-4"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <p className="text-[13px] font-medium leading-snug text-white/80">
                Data Anda aman &amp; dijaga kerahasiaannya sesuai standar mutu ISO
                9001:2015 dan UU Perlindungan Data Pribadi.
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl sm:p-8"
            noValidate={false}
          >
            <h3 className="text-xl font-extrabold text-white">Form Konsultasi Gratis</h3>
            <p className="mt-1 text-sm text-white/60">
              Isi form di bawah — kami yang menghubungi Anda.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/80">
                  Nama Lengkap *
                </Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => set("name")(e.target.value)}
                  placeholder="Nama Anda"
                  className="h-11 rounded-xl border-white/15 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white/80">
                  Nama Usaha
                </Label>
                <Input
                  id="company"
                  value={form.company}
                  onChange={(e) => set("company")(e.target.value)}
                  placeholder="Opsional"
                  className="h-11 rounded-xl border-white/15 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  placeholder="nama@email.com"
                  className="h-11 rounded-xl border-white/15 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/80">
                  No. WhatsApp / Telepon
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone")(e.target.value)}
                  placeholder="+62 8xx-xxxx-xxxx"
                  className="h-11 rounded-xl border-white/15 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-gold"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="service" className="text-white/80">
                  Layanan yang Dibutuhkan
                </Label>
                <Select value={form.service} onValueChange={set("service")}>
                  <SelectTrigger
                    id="service"
                    className="h-11 w-full rounded-xl border-white/15 bg-white/10 text-white data-[placeholder]:text-white/40"
                  >
                    <SelectValue placeholder="Pilih layanan perizinan" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72 rounded-xl border-border bg-card">
                    {CONTACT_SERVICES.map((s) => (
                      <SelectItem key={s} value={s} className="font-medium">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message" className="text-white/80">
                  Ceritakan Kebutuhan Anda *
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  placeholder="Contoh: Saya ingin mendirikan PT bidang kuliner di Bandung dan perlu izin halal untuk 5 produk..."
                  className="resize-none rounded-xl border-white/15 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-gold"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={sending}
              className="mt-6 h-13 w-full rounded-2xl bg-gold py-4 text-base font-extrabold text-gold-foreground shadow-xl shadow-gold/25 transition-all hover:-translate-y-0.5 hover:shadow-gold/40 disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Mengirim Pesan...
                </>
              ) : (
                <>
                  Kirim &amp; Dapatkan Konsultasi Gratis
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            <p className="mt-3.5 flex items-center justify-center gap-1.5 text-center text-xs text-white/50">
              <Clock className="h-3.5 w-3.5" />
              Respons maksimal 15 menit (Senin–Sabtu, 08.00–20.00 WIB)
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

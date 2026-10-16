import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Email tidak valid").max(180),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Pesan minimal 5 karakter").max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Data tidak valid";
      return NextResponse.json(
        { ok: false, error: firstError },
        { status: 400 }
      );
    }

    const { name, company, email, phone, service, message } = parsed.data;

    const submission = await db.contactSubmission.create({
      data: {
        name,
        company: company || null,
        email,
        phone: phone || null,
        service: service || null,
        message,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        id: submission.id,
        message:
          "Terima kasih! Konsultan kami akan menghubungi Anda maksimal 15 menit di jam kerja.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}

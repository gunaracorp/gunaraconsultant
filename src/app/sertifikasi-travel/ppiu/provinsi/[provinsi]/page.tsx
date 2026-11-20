import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ProvinsiServiceContent, provinsiMetadata } from "@/components/sections/kota-programmatic";
import { PROVINSI_WILAYAH } from "@/data/wilayah";
import { LAYANAN_PROGRAMMATIC } from "@/data/layanan-programmatic";

const SERVICE = LAYANAN_PROGRAMMATIC.ppiu;

type Props = { params: Promise<{ provinsi: string }> };

export function generateStaticParams() {
  return PROVINSI_WILAYAH.map((p) => ({ provinsi: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { provinsi: slug } = await params;
  return provinsiMetadata(SERVICE, slug);
}

export default async function ProvinsiPpiuPage({ params }: Props) {
  const { provinsi: slug } = await params;
  const provinsi = PROVINSI_WILAYAH.find((p) => p.slug === slug);
  if (!provinsi) notFound();
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProvinsiServiceContent service={SERVICE} provinsi={provinsi} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

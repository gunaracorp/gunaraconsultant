import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CityServiceContent, cityMetadata } from "@/components/sections/kota-programmatic";
import { KOTA_WILAYAH, PROVINSI_WILAYAH } from "@/data/wilayah";
import { LAYANAN_PROGRAMMATIC } from "@/data/layanan-programmatic";

const SERVICE = LAYANAN_PROGRAMMATIC.pihk;

type Props = { params: Promise<{ kota: string }> };

export function generateStaticParams() {
  return KOTA_WILAYAH.map((k) => ({ kota: k.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kota: slug } = await params;
  return cityMetadata(SERVICE, slug);
}

export default async function KotaPihkPage({ params }: Props) {
  const { kota: slug } = await params;
  const kota = KOTA_WILAYAH.find((k) => k.slug === slug);
  if (!kota) notFound();
  const provinsi = PROVINSI_WILAYAH.find((p) => p.slug === kota.provinsiSlug);
  if (!provinsi) notFound();
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <CityServiceContent service={SERVICE} kota={kota} provinsi={provinsi} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

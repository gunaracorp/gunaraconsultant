import { PHASES, phaseCounts, TOTAL_TARGET } from "@/data/services";
import { PhasesView } from "@/components/sections/phases-view";

/**
 * Section "Fase Implementasi" — wrapper SERVER component.
 * Menghitung jumlah layanan per fase dari katalog 600 (tetap di server,
 * tidak masuk bundle client), lalu meneruskan props ringan ke PhasesView
 * (client) yang menangani bilingual ID ⇄ EN via LanguageProvider.
 */
export function PhasesSection() {
  const counts = phaseCounts();

  return <PhasesView phases={PHASES} counts={counts} total={TOTAL_TARGET} />;
}

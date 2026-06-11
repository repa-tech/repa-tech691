import type { Metadata } from "next";
import { PhoneContactLayout } from "@/components/phone-contact-layout";

export const metadata: Metadata = {
  title: "Devis batterie trottinette — Répatech Saint-Fons",
  description:
    "Devis batterie trottinette électrique sur mesure. Appelez Répatech au 06 61 92 97 61 — remplacement et reconditionnement à Saint-Fons.",
};

const INFO_POINTS = [
  "Indiquez la marque et le modèle de votre trottinette",
  "Précisez la capacité ou les symptômes (autonomie, charge, etc.)",
  "Devis gratuit par téléphone selon votre configuration",
] as const;

export default function BatterieTrottinettePage() {
  return (
    <PhoneContactLayout
      badge="Sur devis"
      badgeIcon="battery_charging_full"
      decorIcon="battery_charging_full"
      title={
        <>
          Batterie{" "}
          <span className="text-secondary-container">trottinette</span>
        </>
      }
      description="Remplacement ou reconditionnement de batterie pour retrouver l'autonomie d'origine. Le tarif dépend du modèle et de la capacité — contactez-nous par téléphone pour obtenir un devis personnalisé."
      infoPoints={INFO_POINTS}
      backHref="/prestations"
      backLabel="Retour aux prestations"
      secondaryLink={{
        href: "/rendez-vous",
        label: "Prendre rendez-vous en boutique",
      }}
    />
  );
}

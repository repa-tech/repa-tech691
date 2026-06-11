import type { Metadata } from "next";
import { PhoneContactLayout } from "@/components/phone-contact-layout";

export const metadata: Metadata = {
  title: "Nous contacter — Répatech Saint-Fons",
  description:
    "Contactez Répatech par téléphone au 06 61 92 97 61. Devis, questions et réparations à Saint-Fons.",
};

const INFO_POINTS = [
  "Devis gratuit pour toute réparation non listée dans nos tarifs",
  "Diagnostic trottinette électrique ou smartphone par téléphone",
  "Réponse rapide aux horaires d'ouverture de l'atelier",
] as const;

export default function NousContacterPage() {
  return (
    <PhoneContactLayout
      badge="Contact direct"
      title={
        <>
          Nous{" "}
          <span className="text-secondary-container">contacter</span>
        </>
      }
      description="Une question, un devis ou une réparation spécifique ? Appelez directement l'atelier : nos techniciens vous répondent et planifient votre intervention."
      infoPoints={INFO_POINTS}
      backHref="/"
      backLabel="Retour à l'accueil"
      secondaryLink={{
        href: "/rendez-vous",
        label: "Prendre rendez-vous en boutique",
      }}
    />
  );
}

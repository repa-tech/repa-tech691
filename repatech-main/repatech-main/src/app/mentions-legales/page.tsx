import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { ADDRESS, EMAIL, PHONE_DISPLAY } from "@/lib/images";

export const metadata: Metadata = {
  title: "Mentions légales — Répatech Saint-Fons",
  description: "Mentions légales du site Répatech, réparation trottinettes et smartphones à Saint-Fons.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout title="Mentions légales">
      <p>
        <strong>Éditeur du site :</strong> Répatech — AKM Auto Service 69
      </p>
      <p>
        <strong>Adresse :</strong> {ADDRESS}
      </p>
      <p>
        <strong>Téléphone :</strong> {PHONE_DISPLAY}
      </p>
      <p>
        <strong>Email :</strong> {EMAIL}
      </p>
      <p>
        <strong>Activité :</strong> Réparation de trottinettes électriques et
        smartphones, vente de pièces et prestations associées.
      </p>
      <p>
        <strong>Hébergement :</strong> Netlify, Inc. — 2325 3rd Street, Suite
        296, San Francisco, California 94107, États-Unis.
      </p>
      <p>
        Le contenu de ce site (textes, images, logo) est protégé. Toute
        reproduction sans autorisation est interdite.
      </p>
    </LegalPageLayout>
  );
}

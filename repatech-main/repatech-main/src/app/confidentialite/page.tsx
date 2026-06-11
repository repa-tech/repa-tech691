import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { EMAIL } from "@/lib/images";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Répatech Saint-Fons",
  description:
    "Politique de confidentialité et traitement des données personnelles — Répatech Saint-Fons.",
};

export default function ConfidentialitePage() {
  return (
    <LegalPageLayout title="Politique de confidentialité">
      <p>
        Répatech s&apos;engage à protéger vos données personnelles conformément
        au Règlement général sur la protection des données (RGPD).
      </p>
      <p>
        <strong>Données collectées :</strong> nom, téléphone, email et message
        lorsque vous utilisez le formulaire de contact, la prise de rendez-vous
        ou nous contactez par email / téléphone.
      </p>
      <p>
        <strong>Finalité :</strong> répondre à vos demandes, organiser vos
        rendez-vous et assurer le suivi de vos réparations.
      </p>
      <p>
        <strong>Conservation :</strong> le temps nécessaire au traitement de
        votre demande et aux obligations légales applicables.
      </p>
      <p>
        <strong>Vos droits :</strong> accès, rectification, suppression et
        opposition. Pour les exercer, contactez-nous à{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="font-label-bold text-primary underline-offset-2 hover:underline"
        >
          {EMAIL}
        </a>
        .
      </p>
      <p>
        Pour en savoir plus sur vos droits, consultez la{" "}
        <Link
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-bold text-primary underline-offset-2 hover:underline"
        >
          CNIL
        </Link>
        .
      </p>
    </LegalPageLayout>
  );
}

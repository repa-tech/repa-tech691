import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal-page-layout";

export const metadata: Metadata = {
  title: "Plan du site — Répatech Saint-Fons",
  description: "Plan du site Répatech : toutes les pages du site.",
};

const SITE_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations trottinette & smartphone" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/rendez-vous", label: "Prendre rendez-vous" },
  { href: "/contact", label: "Contact" },
  { href: "/nous-contacter", label: "Nous contacter (téléphone)" },
  { href: "/batterie-trottinette", label: "Devis batterie trottinette" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
] as const;

export default function PlanDuSitePage() {
  return (
    <LegalPageLayout title="Plan du site">
      <p>Retrouvez toutes les pages du site Répatech :</p>
      <ul className="space-y-sm">
        {SITE_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-label-bold text-primary underline-offset-2 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </LegalPageLayout>
  );
}

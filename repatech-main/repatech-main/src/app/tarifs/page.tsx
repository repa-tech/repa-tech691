import type { Metadata } from "next";
import Link from "next/link";
import { DiagnosticBanner } from "@/components/diagnostic-banner";
import { MaterialIcon } from "@/components/material-icon";
import { PriceList } from "@/components/price-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ADDRESS, PHONE, PHONE_DISPLAY } from "@/lib/images";
import {
  IPHONE_SCREEN_TARIFS,
  SAMSUNG_SCREEN_TARIFS,
  SCOOTER_TARIFS,
} from "@/lib/tarifs";

export const metadata: Metadata = {
  title:
    "Tarifs Répatech - Réparation Trottinettes & Smartphones Saint-Fons",
  description:
    "Tarifs transparents Répatech : pneus, freins, diagnostic trottinettes et réparation écrans iPhone et Samsung à Saint-Fons. Main d'œuvre incluse.",
};

const TRUST_ITEMS = [
  {
    icon: "speed",
    title: "Express",
    text: "Intervention rapide sur rendez-vous pour minimiser votre attente.",
  },
  {
    icon: "verified_user",
    title: "Garanti",
    text: "6 mois sur les trottinettes, 3 mois sur les téléphones — sous certaines conditions.",
  },
  {
    icon: "location_on",
    title: "Saint-Fons",
    text: `Atelier de proximité au ${ADDRESS}, facilement accessible.`,
  },
] as const;

export default function TarifsPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto mt-20 max-w-7xl space-y-xl px-margin-mobile pb-xl pt-xl md:px-margin-desktop">
        <section className="relative overflow-hidden rounded-xl bg-primary px-md py-lg text-white md:px-xl">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-sm font-label-bold text-label-bold tracking-widest text-secondary-container uppercase">
              Repa Tech — Saint-Fons
            </p>
            <h1 className="mb-md font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl">
              Tarifs{" "}
              <span className="text-secondary-container">transparents</span>
            </h1>
            <p className="font-body-lg text-body-lg text-primary-fixed">
              Service rapide — Travail professionnel — Prix affichés. Main
              d&apos;œuvre incluse sur les prestations trottinettes.
            </p>
          </div>
          <MaterialIcon
            name="electric_scooter"
            filled
            size={280}
            className="pointer-events-none absolute top-[-5%] right-[-5%] opacity-10 text-white"
          />
        </section>

        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-2">
          <PriceList
            title="Tarifs Services Trottinettes"
            subtitle="Réparation trottinettes — Saint-Fons · Main d'œuvre incluse"
            items={SCOOTER_TARIFS}
            footer="REPA TECH — Réparation sur place · Pièces de qualité · Intervention rapide"
          />

          <div className="space-y-md">
            <PriceList
              title="Tarifs Réparation Écrans iPhone"
              subtitle="Montage inclus dans tous les prix"
              items={IPHONE_SCREEN_TARIFS}
            />

            <PriceList
              title="Tarifs Réparation Écrans Samsung"
              subtitle="Montage inclus dans tous les prix"
              items={SAMSUNG_SCREEN_TARIFS}
              footer={
                <>
                  Pour toute autre réparation :{" "}
                  <Link
                    href="/nous-contacter"
                    className="font-label-bold text-primary underline-offset-2 hover:underline"
                  >
                    nous contacter
                  </Link>
                </>
              }
            />

            <div className="space-y-sm rounded-xl bg-primary p-md text-center text-white hard-shadow">
              <p className="font-label-bold text-secondary-container">
                Devis ou question ?
              </p>
              <p className="text-body-md opacity-90">
                Appelez-nous pour un devis ou une question — réponse rapide.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="block w-full rounded-lg border-2 border-transparent bg-white py-sm font-label-bold text-primary transition-all hover:border-secondary-container"
              >
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/rendez-vous"
                className="block w-full rounded-lg border-2 border-white/30 py-sm font-label-bold text-white transition-all hover:bg-white/10"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>

        <DiagnosticBanner />

        <section className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-xl border border-outline-variant bg-white p-md text-center"
            >
              <MaterialIcon
                name={item.icon}
                size={48}
                className="mb-sm text-primary"
              />
              <h4 className="font-headline-md text-primary">{item.title}</h4>
              <p className="text-body-md">{item.text}</p>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

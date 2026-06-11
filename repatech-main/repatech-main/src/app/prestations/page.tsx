import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DiagnosticBanner } from "@/components/diagnostic-banner";
import { MaterialIcon } from "@/components/material-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Prestations - Répatech Saint-Fons | Réparation High-Tech & Mobilité",
  description:
    "Prestations Répatech : réparation trottinettes électriques et smartphones toutes marques à Saint-Fons. Diagnostic, pneus, freins et batteries.",
};

const SERVICE_CARDS = [
  {
    icon: "electric_scooter",
    title: "Trottinettes Élec.",
    description:
      "Crevaisons, freins, électronique et batteries — toutes marques de trottinettes électriques.",
    badge: "Dès 40 €",
    featured: true,
    href: "/tarifs",
    cta: "Voir les tarifs",
    filled: true,
  },
  {
    icon: "smartphone",
    title: "Smartphones",
    description:
      "Écrans, batteries et connecteurs de charge — iPhone, Samsung et toutes marques.",
    badge: "Dès 25 €",
    featured: false,
    href: "/tarifs",
    cta: "Voir les tarifs",
    filled: false,
  },
  {
    icon: "battery_charging_full",
    title: "Batteries Trottinette",
    description:
      "Reconditionnement ou remplacement de batterie pour retrouver l'autonomie d'origine.",
    badge: "Sur devis",
    featured: false,
    href: "/batterie-trottinette",
    cta: "Nous contacter",
    filled: false,
  },
] as const;

const TRUST_ITEMS = [
  { icon: "verified", label: "Techniciens mobilité" },
  { icon: "timer", label: "Service express" },
  { icon: "security", label: "Garantie 6 mois / 3 mois" },
  { icon: "eco", label: "Éco-responsable" },
] as const;

export default function PrestationsPage() {
  return (
    <>
      <SiteHeader />

      <main className="lightning-pattern pt-20">
        <div className="mx-auto max-w-7xl space-y-lg px-margin-mobile py-lg md:space-y-xl md:px-margin-desktop md:py-xl">
          {/* Hero */}
          <section className="flex flex-col items-stretch gap-gutter lg:flex-row lg:items-center">
            <div className="flex w-full flex-col gap-base lg:w-[52%] lg:shrink-0">
              <div className="inline-flex w-fit items-center gap-xs rounded-full bg-primary px-base py-xs text-white">
                <MaterialIcon
                  name="electric_scooter"
                  size={20}
                  filled
                  className="text-secondary-container"
                />
                <span className="font-label-bold text-label-sm tracking-wider uppercase">
                  Spécialiste Mobilité
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl-mobile leading-tight text-primary md:text-headline-xl">
                Nos prestations de{" "}
                <span className="text-secondary-container">
                  trottinette électrique
                </span>{" "}
                et smartphone à Saint-Fons
              </h1>
              <p className="text-pretty font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                Pneus, freins, batteries, électronique et diagnostic
                approfondi — toutes marques. Garantie 6 mois sur les
                trottinettes et 3 mois sur les téléphones, sous certaines
                conditions.
              </p>
              <Link
                href="/tarifs"
                className="btn-press w-fit rounded-lg bg-primary px-xl py-base font-label-bold text-label-bold text-white hard-shadow transition-all hover:bg-primary-container"
              >
                Voir nos tarifs
              </Link>
            </div>

            <div className="relative w-full lg:w-[48%]">
              <Image
                src={IMAGES.prestationsHero}
                alt="Trottinette électrique Dualtron Ultra II"
                width={800}
                height={500}
                className="h-auto max-h-[420px] w-full rounded-xl border-4 border-white bg-white object-contain p-sm hard-shadow"
                priority
              />
            </div>
          </section>

          {/* Services grid */}
          <section>
            <div className="mb-lg text-center">
              <h2 className="mb-sm font-headline-lg text-headline-lg text-primary">
                Nos solutions de réparation
              </h2>
              <p className="mx-auto max-w-2xl text-body-md text-on-surface-variant">
                Trottinettes électriques et smartphones — un seul atelier à
                Saint-Fons.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              {SERVICE_CARDS.map((service) => (
                <div
                  key={service.title}
                  className={`flex flex-col rounded-xl border-2 bg-white p-md transition-all hover:border-primary ${
                    service.featured
                      ? "border-primary hard-shadow"
                      : "border-primary-fixed"
                  }`}
                >
                  <div className="mb-sm flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <MaterialIcon name={service.icon} />
                  </div>
                  <h3 className="mb-xs font-headline-md text-headline-md text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-sm flex-grow text-body-md text-on-surface-variant">
                    {service.description}
                  </p>
                  <div className="mb-sm w-fit rounded bg-secondary-container px-base py-1 font-label-bold text-label-bold">
                    {service.badge}
                  </div>
                  <Link
                    href={service.href}
                    className={`btn-press w-full rounded-lg py-xs text-center font-label-bold transition-all ${
                      service.filled
                        ? "bg-primary text-white hover:bg-primary-container"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {service.cta}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <DiagnosticBanner />

          {/* Trust */}
          <section className="text-center">
            <div className="grid grid-cols-2 gap-gutter sm:grid-cols-4">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-xs"
                >
                  <MaterialIcon
                    name={item.icon}
                    size={32}
                    className="text-primary"
                  />
                  <span className="text-sm text-on-surface-variant">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-lg max-w-2xl text-body-md text-on-surface-variant">
              Basés à Saint-Fons, nous sommes votre partenaire pour toutes vos
              réparations de trottinettes électriques sur le sud lyonnais.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />

      <Link
        href="/rendez-vous"
        className="fixed right-margin-mobile bottom-margin-mobile z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-secondary-container text-on-secondary-container shadow-2xl md:hidden"
        aria-label="Prendre rendez-vous"
      >
        <MaterialIcon name="calendar_month" size={24} />
      </Link>
    </>
  );
}

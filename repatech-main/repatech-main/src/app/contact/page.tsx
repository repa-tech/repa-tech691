import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { MaterialIcon } from "@/components/material-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SnapchatFollow } from "@/components/snapchat-follow";
import { ADDRESS, EMAIL, GPS_URL, MAP_EMBED_URL, PHONE, PHONE_DISPLAY } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Répatech - Réparation Saint-Fons & Lyon",
  description:
    "Contactez Répatech à Saint-Fons : réparation trottinettes électriques et smartphones. 06 61 92 97 61 — 8 rue Carnot, 69190 Saint-Fons.",
};

const TRUST_ITEMS = [
  { icon: "verified", label: "Techniciens certifiés" },
  { icon: "rocket_launch", label: "Réparation rapide" },
  { icon: "shield", label: "Garantie 6 mois / 3 mois" },
  { icon: "payments", label: "Tarifs transparents" },
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="relative overflow-hidden pt-20">
        <MaterialIcon
          name="bolt"
          size={280}
          className="pointer-events-none absolute top-24 -left-16 -rotate-12 text-primary opacity-5"
        />
        <MaterialIcon
          name="bolt"
          size={360}
          className="pointer-events-none absolute -right-20 bottom-0 rotate-12 text-primary opacity-5"
        />

        <div className="relative z-10 mx-auto max-w-7xl space-y-xl px-margin-mobile py-lg md:px-margin-desktop md:py-xl">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl text-headline-xl-mobile leading-tight text-primary md:text-headline-xl">
              Contactez{" "}
              <span className="text-secondary-container">l&apos;expert</span>
            </h1>
            <p className="mt-base border-l-4 border-secondary-container pl-base text-pretty font-body-lg text-body-lg text-on-surface-variant">
              Réparation express de trottinettes électriques et smartphones à
              Saint-Fons. Une urgence ? Appelez-nous ou{" "}
              <Link
                href="/rendez-vous"
                className="font-label-bold text-primary underline-offset-2 hover:underline"
              >
                réservez un créneau en ligne
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12 lg:gap-xl">
            <div className="relative border-2 border-outline-variant bg-white p-md hard-shadow lg:col-span-7 lg:p-lg">
              <div className="absolute -top-6 -right-4 flex h-20 w-20 rotate-12 flex-col items-center justify-center border-2 border-secondary-container bg-primary text-white md:-right-6 md:h-24 md:w-24">
                <span className="text-[10px] font-label-bold">RÉPONSE</span>
                <span className="font-headline-md leading-none">RAPIDE</span>
              </div>

              <h2 className="mb-lg flex items-center gap-sm font-headline-lg text-headline-lg text-primary">
                <MaterialIcon
                  name="mail"
                  filled
                  className="text-secondary-container"
                />
                Envoyez un message
              </h2>

              <ContactForm />
            </div>

            <div className="space-y-md lg:col-span-5">
              <div className="border-l-8 border-secondary-container bg-primary p-md text-white hard-shadow lg:p-lg">
                <h3 className="mb-md flex items-center gap-sm font-headline-md text-headline-md">
                  <MaterialIcon name="location_on" filled />
                  Nous trouver
                </h3>
                <p className="font-body-lg">{ADDRESS}</p>

                <div className="mt-lg border-t border-white/20 pt-lg">
                  <h3 className="mb-md flex items-center gap-sm font-headline-md text-headline-md">
                    <MaterialIcon name="schedule" />
                    Horaires
                  </h3>
                  <div className="space-y-xs font-body-md opacity-90">
                    <div className="flex justify-between gap-md">
                      <span>Lundi - Samedi</span>
                      <span className="font-label-bold">10h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between gap-md text-secondary-container">
                      <span>Dimanche</span>
                      <span className="font-label-bold">Fermé</span>
                    </div>
                  </div>
                </div>

                <div className="mt-lg border-t border-white/20 pt-lg">
                  <p className="mb-xs font-label-bold text-secondary-container">
                    Accès TCL
                  </p>
                  <p className="text-sm opacity-90">
                    Bus C12, 60, 93 — Arrêts « Saint-Fons Mairie » et « Saint-Fons
                    Albert Thomas »
                  </p>
                </div>

                <div className="mt-lg border-t border-white/20 pt-lg">
                  <a
                    href={`tel:${PHONE}`}
                    className="group flex items-center gap-md"
                  >
                    <div className="rounded-full bg-secondary-container p-base text-on-secondary-container transition-transform group-hover:scale-110">
                      <MaterialIcon name="call" />
                    </div>
                    <div>
                      <p className="font-label-bold text-secondary-container">
                        Ligne directe
                      </p>
                      <p className="font-headline-md">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-lg border-t border-white/20 pt-lg">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-center gap-md"
                  >
                    <div className="rounded-full bg-secondary-container p-base text-on-secondary-container transition-transform group-hover:scale-110">
                      <MaterialIcon name="mail" />
                    </div>
                    <div>
                      <p className="font-label-bold text-secondary-container">
                        Email
                      </p>
                      <p className="break-all font-headline-md text-base md:text-headline-md">
                        {EMAIL}
                      </p>
                    </div>
                  </a>
                </div>

                <SnapchatFollow variant="sidebar" />
              </div>

              <div className="relative h-64 overflow-hidden border-2 border-primary hard-shadow md:h-80">
                <iframe
                  title={`Localisation Répatech — ${ADDRESS}`}
                  src={MAP_EMBED_URL}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={GPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-base left-base flex items-center gap-xs border border-primary bg-white px-base py-xs font-label-bold text-primary"
                >
                  <MaterialIcon name="bolt" size={16} />
                  Itinéraire
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="border-y-2 border-primary bg-surface-container-highest py-lg">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-md px-margin-mobile text-center md:grid-cols-4 md:px-margin-desktop">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-xs">
                <MaterialIcon name={item.icon} size={40} className="text-primary" />
                <span className="text-sm font-label-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

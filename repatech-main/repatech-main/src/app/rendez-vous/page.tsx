import type { Metadata } from "next";
import Link from "next/link";
import { AppointmentBooking } from "@/components/appointment-booking";
import { MaterialIcon } from "@/components/material-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SHOP_HOURS } from "@/lib/appointments";
import { ADDRESS, PHONE, PHONE_DISPLAY } from "@/lib/images";

export const metadata: Metadata = {
  title: "Prendre rendez-vous — Répatech Saint-Fons",
  description:
    "Réservez un créneau chez Répatech à Saint-Fons : réparation trottinette électrique ou smartphone. Créneaux Lun–Sam 10h–19h.",
};

const INFO_ITEMS = [
  {
    icon: "timer",
    title: "Créneaux de 30 min",
    text: "Interventions planifiées pour limiter l'attente en boutique.",
  },
  {
    icon: "verified",
    title: "Confirmation rapide",
    text: "Votre demande est transmise par WhatsApp ; nous validons par retour.",
  },
  {
    icon: "location_on",
    title: "Atelier Saint-Fons",
    text: ADDRESS,
  },
] as const;

export default function RendezVousPage() {
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
          name="calendar_month"
          size={220}
          className="pointer-events-none absolute top-40 -right-12 rotate-12 text-primary opacity-5"
        />

        <div className="relative z-10 mx-auto max-w-7xl space-y-xl px-margin-mobile py-lg md:px-margin-desktop md:py-xl">
          <div className="max-w-3xl">
            <h1 className="font-headline-xl text-headline-xl-mobile leading-tight text-primary md:text-headline-xl">
              Prendre{" "}
              <span className="text-secondary-container">rendez-vous</span>
            </h1>
            <p className="mt-base border-l-4 border-secondary-container pl-base text-pretty font-body-lg text-body-lg text-on-surface-variant">
              Choisissez votre prestation et réservez un créneau en ligne.
              Horaires boutique : lun.–sam. {SHOP_HOURS.openHour}h–
              {SHOP_HOURS.closeHour}h.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12 lg:gap-xl">
            <div className="relative border-2 border-outline-variant bg-white p-md hard-shadow lg:col-span-8 lg:p-lg">
              <div className="absolute -top-6 -right-4 flex h-20 w-20 rotate-12 flex-col items-center justify-center border-2 border-secondary-container bg-primary text-white md:-right-6 md:h-24 md:w-24">
                <MaterialIcon name="schedule" size={28} />
                <span className="text-[10px] font-label-bold">SANS</span>
                <span className="font-headline-md leading-none">ATTENTE</span>
              </div>

              <h2 className="mb-lg flex items-center gap-sm font-headline-lg text-headline-lg text-primary">
                <MaterialIcon
                  name="calendar_today"
                  filled
                  className="text-secondary-container"
                />
                Réservation de créneau
              </h2>

              <AppointmentBooking />
            </div>

            <aside className="space-y-md lg:col-span-4">
              {INFO_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="border-l-4 border-secondary-container bg-surface-container-low p-md"
                >
                  <h3 className="mb-xs flex items-center gap-sm font-label-bold text-primary">
                    <MaterialIcon name={item.icon} size={20} />
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">{item.text}</p>
                </div>
              ))}

              <div className="border-2 border-primary bg-primary p-md text-white hard-shadow">
                <p className="font-label-bold text-secondary-container">
                  Besoin urgent ?
                </p>
                <p className="mt-xs text-sm opacity-90">
                  Appelez directement l&apos;atelier sans passer par la
                  réservation en ligne.
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-md inline-flex items-center gap-sm font-headline-md"
                >
                  <MaterialIcon name="call" />
                  {PHONE_DISPLAY}
                </a>
              </div>

              <p className="text-sm text-on-surface-variant">
                Une question sans rendez-vous ?{" "}
                <Link
                  href="/contact"
                  className="font-label-bold text-primary underline-offset-2 hover:underline"
                >
                  Page contact
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

import Link from "next/link";
import { MaterialIcon } from "@/components/material-icon";

export function DiagnosticBanner() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-secondary-container p-md md:flex md:items-center md:justify-between md:gap-gutter md:p-lg">
      <MaterialIcon
        name="search"
        size={160}
        className="pointer-events-none absolute -right-4 -bottom-4 text-on-secondary-container opacity-10"
      />

      <div className="relative z-10 mb-md md:mb-0">
        <h2 className="font-headline-lg text-headline-lg text-on-secondary-container">
          Diagnostic Approfondi
        </h2>
        <p className="mt-xs max-w-[32rem] text-balance font-body-lg leading-snug text-on-secondary-container/90">
          Expertise complète de votre véhicule électrique
        </p>
        <Link
          href="/rendez-vous"
          className="btn-press mt-md inline-flex items-center gap-xs rounded-lg border-2 border-primary bg-white px-md py-xs font-label-bold text-primary hard-shadow"
        >
          Prendre rendez-vous
          <MaterialIcon name="arrow_forward" size={18} />
        </Link>
      </div>

      <div className="relative z-10 shrink-0 rounded-xl border-2 border-primary bg-white px-lg py-md text-center hard-shadow">
        <p className="font-headline-xl text-headline-xl-mobile text-primary">
          30€
        </p>
        <p className="mt-xs max-w-[14rem] text-sm leading-snug text-primary">
          (déduit si les travaux sont réalisés chez Repatech)
        </p>
      </div>
    </section>
  );
}

import { BrandLogo } from "@/components/brand-logo";
import { MaterialIcon } from "@/components/material-icon";
import Link from "next/link";
import { ADDRESS, EMAIL, GPS_URL, PHONE, PHONE_DISPLAY, SNAPCHAT_URL } from "@/lib/images";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-xl border-t-8 border-secondary-container bg-tertiary py-xl text-on-tertiary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-2 lg:grid-cols-[minmax(18rem,1.25fr)_repeat(3,minmax(10rem,1fr))] md:px-margin-desktop">
        <div className="w-full md:col-span-2 lg:col-span-1">
          <div className="mb-base">
            <BrandLogo variant="footer" />
          </div>
          <p className="w-full max-w-prose text-pretty text-sm leading-relaxed opacity-80">
            Expertise et rapidité pour la réparation de vos trottinettes
            électriques et solutions de mobilité urbaine à Saint-Fons.
          </p>
        </div>

        <div>
          <h4 className="mb-md font-label-bold text-xs tracking-widest text-white uppercase">
            Prestations
          </h4>
          <ul className="space-y-xs text-sm">
            <li>
              <Link
                href="/prestations"
                className="opacity-80 transition-all hover:text-secondary-container"
              >
                Trottinettes — toutes marques
              </Link>
            </li>
            <li>
              <Link
                href="/tarifs"
                className="opacity-80 transition-all hover:text-secondary-container"
              >
                Smartphones — toutes marques
              </Link>
            </li>
            <li>
              <Link
                href="/batterie-trottinette"
                className="opacity-80 transition-all hover:text-secondary-container"
              >
                Batteries trottinette
              </Link>
            </li>
            <li>
              <Link
                href="/nous-contacter"
                className="opacity-80 transition-all hover:text-secondary-container"
              >
                Soudure &amp; Carte Mère
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-md font-label-bold text-xs tracking-widest text-white uppercase">
            Informations
          </h4>
          <ul className="space-y-xs text-sm">
            <li>
              <a
                href={GPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-all hover:text-secondary-container"
              >
                {ADDRESS}
              </a>
            </li>
            <li>
              <Link
                href="/mentions-legales"
                className="opacity-80 transition-all hover:text-secondary-container"
              >
                Mentions Légales
              </Link>
            </li>
            <li>
              <Link
                href="/confidentialite"
                className="opacity-80 transition-all hover:text-secondary-container"
              >
                Confidentialité
              </Link>
            </li>
            <li>
              <Link
                href="/plan-du-site"
                className="opacity-80 transition-all hover:text-secondary-container"
              >
                Plan du site
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-md font-label-bold text-xs tracking-widest text-white uppercase">
            Contact Direct
          </h4>
          <a
            href={`tel:${PHONE}`}
            className="mb-xs block font-headline-md text-secondary-container"
          >
            {PHONE_DISPLAY}
          </a>
          <div className="mt-md flex gap-base">
            <a
              href={SNAPCHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFFC00] text-black transition-opacity hover:opacity-90"
              aria-label="Ajouter RepaTech691 sur Snapchat"
            >
              <MaterialIcon name="snapchat" size={22} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 transition-colors hover:bg-white/10"
              aria-label="Envoyer un email à Répatech"
            >
              <MaterialIcon name="mail" className="text-[20px]" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-xl max-w-7xl border-t border-white/10 px-margin-mobile pt-lg text-center md:px-margin-desktop md:text-left">
        <p className="font-label-sm text-label-sm opacity-60">
          © {year} Répatech Saint-Fons. Mobilité • Qualité • Garantie
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { MaterialIcon } from "@/components/material-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ADDRESS, PHONE, PHONE_DISPLAY } from "@/lib/images";

type PhoneContactLayoutProps = {
  badge?: string;
  badgeIcon?: string;
  title: React.ReactNode;
  description: string;
  infoPoints: readonly string[];
  backHref?: string;
  backLabel?: string;
  secondaryLink?: { href: string; label: string };
  decorIcon?: string;
};

export function PhoneContactLayout({
  badge,
  badgeIcon = "call",
  title,
  description,
  infoPoints,
  backHref = "/",
  backLabel = "Retour à l'accueil",
  secondaryLink,
  decorIcon = "bolt",
}: PhoneContactLayoutProps) {
  return (
    <>
      <SiteHeader />

      <main className="lightning-pattern relative overflow-hidden pt-20">
        <MaterialIcon
          name={decorIcon}
          size={220}
          className="pointer-events-none absolute top-32 -right-10 rotate-12 text-primary opacity-5"
        />

        <div className="relative z-10 mx-auto w-full max-w-[42rem] px-margin-mobile py-lg md:px-margin-desktop md:py-xl">
          <div className="mb-xl">
            {badge && (
              <div className="mb-base inline-flex items-center gap-xs rounded-full bg-primary px-base py-xs text-white">
                <MaterialIcon
                  name={badgeIcon}
                  size={20}
                  className="text-secondary-container"
                />
                <span className="font-label-bold text-label-sm tracking-wider uppercase">
                  {badge}
                </span>
              </div>
            )}
            <h1 className="font-headline-xl text-headline-xl-mobile leading-tight text-primary md:text-headline-xl">
              {title}
            </h1>
            <p className="mt-base w-full font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              {description}
            </p>
          </div>

          <div className="border-2 border-outline-variant bg-white p-md text-center hard-shadow md:p-lg">
            <MaterialIcon
              name="call"
              size={48}
              className="mx-auto mb-md text-primary"
            />
            <p className="mb-xs font-label-bold text-primary">
              Appelez l&apos;atelier
            </p>
            <a
              href={`tel:${PHONE}`}
              className="btn-press inline-block font-headline-xl text-headline-xl-mobile text-primary transition-colors hover:text-secondary md:text-headline-xl"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-md text-sm leading-relaxed text-on-surface-variant">
              Lun.–Sam. 10h–19h
              <br />
              {ADDRESS}
            </p>
          </div>

          <ul className="mt-lg space-y-sm">
            {infoPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-sm text-body-md leading-relaxed text-on-surface-variant"
              >
                <MaterialIcon
                  name="check_circle"
                  size={20}
                  className="mt-0.5 shrink-0 text-primary"
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-xl flex flex-col items-start gap-sm sm:flex-row sm:items-center">
            <Link
              href={backHref}
              className="font-label-bold text-primary underline-offset-2 hover:underline"
            >
              ← {backLabel}
            </Link>
            {secondaryLink && (
              <>
                <span className="hidden text-on-surface-variant sm:inline">
                  ·
                </span>
                <Link
                  href={secondaryLink.href}
                  className="font-label-bold text-primary underline-offset-2 hover:underline"
                >
                  {secondaryLink.label}
                </Link>
              </>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

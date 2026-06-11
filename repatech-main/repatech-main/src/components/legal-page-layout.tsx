import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <div className="mx-auto max-w-3xl px-margin-mobile py-lg md:px-margin-desktop md:py-xl">
          <Link
            href="/"
            className="mb-lg inline-block font-label-bold text-primary hover:text-secondary"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="mb-lg font-headline-xl text-headline-xl-mobile text-primary md:text-headline-xl">
            {title}
          </h1>
          <div className="space-y-md font-body-md text-on-surface-variant">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

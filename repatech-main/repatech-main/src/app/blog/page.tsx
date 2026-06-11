import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogListing } from "@/components/blog-listing";
import { MaterialIcon } from "@/components/material-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ADDRESS, IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog Répatech - Expert Réparation Saint-Fons & Lyon",
  description:
    "Conseils et guides Répatech : réparation smartphones, trottinettes électriques et entretien batterie à Saint-Fons et dans le Rhône.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-20">
        <div className="mx-auto max-w-7xl space-y-lg px-margin-mobile py-lg md:space-y-xl md:px-margin-desktop md:py-xl">
          {/* Hero */}
          <section className="flex flex-col items-stretch gap-gutter lg:flex-row lg:items-center">
            <div className="flex w-full min-w-0 flex-col gap-base lg:w-[52%] lg:shrink-0">
              <span className="inline-flex w-fit bg-primary px-sm py-1 font-label-bold text-label-sm text-white">
                Magazine technique
              </span>
              <h1 className="font-headline-xl text-headline-xl-mobile leading-tight text-primary md:text-headline-xl">
                Le blog de la{" "}
                <span className="text-secondary-container">réparation</span>
              </h1>
              <p className="w-full max-w-prose text-pretty font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                Conseils d&apos;experts à Saint-Fons et dans la métropole
                lyonnaise pour entretenir et réparer vos trottinettes
                électriques et smartphones.
              </p>
              <div className="flex items-center gap-xs font-label-bold text-primary">
                <MaterialIcon name="location_on" size={20} />
                <span>{ADDRESS}</span>
              </div>
            </div>

            <div className="relative w-full min-w-0 lg:w-[48%]">
              <div className="absolute -top-base -left-base z-0 h-full w-full translate-x-1 translate-y-1 border-2 border-primary" />
              <Image
                src={IMAGES.blogHero}
                alt="Atelier Répatech"
                width={800}
                height={400}
                className="relative z-10 h-[320px] w-full border-2 border-primary object-cover grayscale-[20%] md:h-[400px]"
                priority
              />
            </div>
          </section>

          <BlogListing />

          {/* CTA */}
          <section className="relative overflow-hidden rounded-xl bg-primary p-md md:p-xl">
            <MaterialIcon
              name="bolt"
              filled
              size={280}
              className="pointer-events-none absolute -right-16 -bottom-16 rotate-12 text-white opacity-5"
            />
            <div className="relative z-10 max-w-2xl">
              <h2 className="mb-md font-headline-lg text-headline-lg text-white">
                Votre appareil est en panne ?
              </h2>
              <p className="mb-lg text-body-lg text-primary-fixed">
                Passez nous voir à Saint-Fons ou prenez rendez-vous pour une
                réparation express. Trottinettes et smartphones — toutes
                marques.
              </p>
              <div className="flex flex-col gap-md sm:flex-row">
                <Link
                  href="/tarifs"
                  className="btn-press rounded-lg bg-secondary-container px-lg py-md text-center font-label-bold text-on-secondary-container hard-shadow"
                >
                  Voir nos tarifs
                </Link>
                <Link
                  href="/nous-contacter"
                  className="rounded-lg border-2 border-white px-lg py-md text-center font-label-bold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

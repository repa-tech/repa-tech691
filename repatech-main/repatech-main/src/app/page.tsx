import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/material-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SnapchatFollow } from "@/components/snapchat-follow";
import { BLOG_POSTS as ALL_BLOG_POSTS } from "@/lib/blog-posts";
import { ADDRESS, IMAGES, MAP_EMBED_URL } from "@/lib/images";

const FEATURED_BLOG_POSTS = ALL_BLOG_POSTS.slice(0, 3);

const SERVICES = [
  {
    icon: "electric_scooter",
    title: "Trottinettes Élec.",
    description:
      "Crevaisons, freins et électronique — toutes marques de trottinettes électriques.",
    price: "Dès 40€",
    href: "/prestations",
  },
  {
    icon: "smartphone",
    title: "Smartphone Express",
    description:
      "Écrans, haut-parleurs et connecteurs de charge — toutes marques de smartphones.",
    price: "Dès 25€",
    href: "/tarifs",
  },
  {
    icon: "battery_charging_full",
    title: "Changement Batterie",
    description:
      "Retrouvez l'autonomie d'origine de votre smartphone — toutes marques, batteries certifiées.",
    price: "Sur devis",
    href: "/nous-contacter",
  },
] as const;

const WORKSHOPS = [
  {
    icon: "electric_scooter",
    title: "Atelier trottinette",
    description:
      "Pneus, freins, batteries et électronique — espace dédié aux trottinettes électriques, toutes marques.",
    link: "/prestations",
    linkLabel: "Prestations trottinette",
  },
  {
    icon: "smartphone",
    title: "Atelier smartphone",
    description:
      "Écrans, batteries et connecteurs — espace dédié aux téléphones, iPhone, Samsung et toutes marques.",
    link: "/tarifs",
    linkLabel: "Tarifs smartphone",
  },
] as const;

const WHY_US = [
  {
    num: "1",
    title: "Réparation Express",
    text: "La plupart des pannes sont résolues en moins de 45 minutes.",
  },
  {
    num: "2",
    title: "Deux ateliers spécialisés",
    text: "Un atelier trottinette et un atelier smartphone — chaque équipe expert dans son domaine.",
  },
  {
    num: "3",
    title: "Garanties",
    text: "6 mois sur les trottinettes, 3 mois sur les téléphones — pièces et main d'œuvre, sous certaines conditions.",
  },
  {
    num: "4",
    title: "Ultra-Local",
    text: "Au cœur de Saint-Fons, accessible facilement en TCL ou voiture.",
  },
] as const;

const FAQ = [
  {
    question: "Réparez-vous les trottinettes électriques de toutes marques ?",
    answer:
      "Oui, nous réparons toutes les marques de trottinettes électriques : crevaisons, freins, batteries et électronique. Xiaomi, Ninebot, Kukirin, Dualtron et bien d'autres.",
  },
  {
    question: "Réparez-vous tous les smartphones ?",
    answer:
      "Oui, nous intervenons sur toutes marques de smartphones : iPhone, Samsung, Xiaomi, Huawei, etc. Un changement d'écran prend environ 30 à 45 minutes. Nous vous recommandons de prendre rendez-vous.",
  },
  {
    question: "Proposez-vous une garantie ?",
    answer:
      "Oui. Garantie de 6 mois sur les réparations de trottinettes et de 3 mois sur les réparations de téléphones (pièces et main d'œuvre), sous certaines conditions.",
  },
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative flex min-h-[80vh] items-center overflow-hidden px-margin-mobile py-xl md:px-margin-desktop">
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-stretch gap-xl lg:flex-row lg:items-center lg:gap-gutter">
            <div className="flex w-full flex-col gap-md lg:w-[52%] lg:shrink-0 lg:grow-0">
              <div className="inline-flex w-fit flex-row flex-nowrap items-center gap-xs rounded-full bg-primary px-base py-xs text-white">
                <MaterialIcon
                  name="electric_scooter"
                  size={20}
                  filled
                  className="text-secondary-container"
                />
                <span className="whitespace-nowrap font-label-bold text-label-sm tracking-wider uppercase">
                  2 ateliers à Saint-Fons
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl-mobile leading-tight text-primary md:text-headline-xl">
                Réparation{" "}
                <span className="text-secondary-container">trottinette</span>{" "}
                et{" "}
                <span className="text-secondary-container">smartphone</span>{" "}
                — Rapide &amp; Professionnel
              </h1>
              <p className="w-full font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                Deux ateliers distincts à Saint-Fons : l&apos;un pour vos
                trottinettes électriques, l&apos;autre pour vos smartphones.
                Chaque espace est équipé pour intervenir vite, toutes marques.
              </p>
              <div className="flex flex-wrap gap-base pt-base">
                <Link
                  href="/tarifs"
                  className="btn-press rounded-lg bg-primary px-xl py-base text-center font-label-bold text-label-bold text-white hard-shadow transition-all hover:bg-primary-container"
                >
                  Voir nos tarifs
                </Link>
                <Link
                  href="/nous-contacter"
                  className="btn-press rounded-lg bg-secondary-container px-xl py-base text-center font-label-bold text-label-bold text-on-secondary-container hard-shadow transition-all hover:bg-secondary-fixed"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            <div className="relative w-full min-w-0 lg:w-[48%] lg:flex-1">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-secondary-container opacity-20 blur-3xl" />
              <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-primary opacity-10 blur-3xl" />
              <Image
                src={IMAGES.hero}
                alt="Trottinette électrique Kukirin G2 Master"
                width={800}
                height={500}
                className="mx-auto h-auto max-h-[500px] w-full rounded-xl border-4 border-white object-contain hard-shadow lg:object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Deux ateliers */}
        <section className="border-y-2 border-primary bg-surface-container-low px-margin-mobile py-lg md:px-margin-desktop">
          <div className="mx-auto max-w-7xl">
            <div className="mb-lg text-center">
              <h2 className="mb-sm font-headline-lg text-headline-lg text-primary">
                Deux ateliers, deux expertises
              </h2>
              <p className="mx-auto max-w-[42rem] font-body-md text-on-surface-variant">
                Chez Répatech, la réparation trottinette et la réparation
                téléphone se font dans des espaces séparés, avec des techniciens
                spécialisés pour chaque activité.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              {WORKSHOPS.map((workshop) => (
                <div
                  key={workshop.title}
                  className="flex flex-col rounded-xl border-2 border-primary bg-white p-md hard-shadow"
                >
                  <div className="mb-md flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white">
                    <MaterialIcon name={workshop.icon} size={28} />
                  </div>
                  <h3 className="mb-sm font-headline-md text-headline-md text-primary">
                    {workshop.title}
                  </h3>
                  <p className="mb-md flex-grow text-body-md text-on-surface-variant">
                    {workshop.description}
                  </p>
                  <Link
                    href={workshop.link}
                    className="inline-flex items-center gap-xs font-label-bold text-primary hover:text-secondary"
                  >
                    {workshop.linkLabel}
                    <MaterialIcon name="arrow_forward" size={18} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SnapchatFollow />

        {/* Services */}
        <section
          id="prestations"
          className="scroll-mt-24 bg-surface-container px-margin-mobile py-xl md:px-margin-desktop"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-xl text-center">
              <h2 className="mb-base font-headline-lg text-headline-lg text-primary">
                Nos Solutions de Réparation
              </h2>
              <p className="mx-auto max-w-[42rem] font-body-md text-body-md text-on-surface-variant">
                Deux ateliers à Saint-Fons : mobilité électrique et réparation
                mobile, chacun avec son équipe et son matériel dédié.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col justify-between rounded-xl border-2 border-primary-fixed bg-white p-md transition-all hover:border-primary hard-shadow"
                >
                  <div>
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                      <MaterialIcon name={service.icon} />
                    </div>
                    <h3 className="mb-base font-headline-md text-headline-md text-primary">
                      {service.title}
                    </h3>
                    <p className="mb-md text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-secondary-container px-base py-1 font-label-bold text-label-bold">
                      {service.price}
                    </span>
                    <MaterialIcon
                      name="arrow_forward"
                      className="text-primary transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="overflow-hidden px-margin-mobile py-xl md:px-margin-desktop">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-lg font-headline-lg text-headline-lg text-primary">
              Pourquoi choisir{" "}
              <span className="text-secondary-container">Répatech</span> ?
            </h2>
            <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:max-w-4xl">
              {WHY_US.map((item) => (
                <div key={item.num} className="flex gap-base">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container font-black text-on-secondary-container">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="font-headline-md text-[18px] text-primary">
                      {item.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section
          id="blog"
          className="scroll-mt-24 bg-surface-container-low px-margin-mobile py-xl md:px-margin-desktop"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-lg flex items-end justify-between">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Le Blog Mobilité &amp; Tech
                </h2>
                <p className="text-on-surface-variant">
                  Conseils et astuces pour faire durer vos appareils.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden font-label-bold text-primary underline md:block"
              >
                Voir tous les articles
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              {FEATURED_BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-xl bg-white hard-shadow"
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={400}
                    height={192}
                    className={`h-48 w-full transition-transform duration-300 group-hover:scale-105 ${
                      post.imageContain
                        ? "bg-surface-container-low object-contain p-sm"
                        : "object-cover"
                    }`}
                  />
                  <div className="p-md">
                    <span className="rounded bg-primary-fixed px-base py-1 font-label-bold text-[10px] tracking-widest text-primary uppercase">
                      {post.tag}
                    </span>
                    <h3 className="my-base font-headline-md text-[20px] text-primary">
                      {post.title}
                    </h3>
                    <p className="mb-base line-clamp-3 text-sm text-on-surface-variant">
                      {post.excerpt}
                    </p>
                    <span className="flex items-center gap-xs font-label-bold text-sm text-primary">
                      Lire l&apos;article{" "}
                      <MaterialIcon name="arrow_forward" className="text-sm" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-margin-mobile py-xl md:px-margin-desktop">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-xl text-center font-headline-lg text-headline-lg text-primary">
              Questions Fréquentes
            </h2>
            <div className="space-y-base">
              {FAQ.map((item) => (
                <div
                  key={item.question}
                  className="border-b border-outline-variant py-md"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-headline-md text-[18px] text-primary">
                      {item.question}
                      <MaterialIcon
                        name="expand_more"
                        className="transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-base text-on-surface-variant">
                      {item.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 bg-surface-container-highest px-margin-mobile py-xl md:px-margin-desktop"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-xl md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-md">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Nos ateliers à Saint-Fons
              </h2>
              <p className="font-body-lg text-on-surface-variant">
                Deux espaces de réparation au {ADDRESS} : un atelier trottinette
                électrique et un atelier smartphone, à deux pas de la Mairie.
              </p>
              <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
                <div className="rounded-xl border-2 border-primary-fixed bg-white p-md">
                  <div className="mb-sm flex items-center gap-sm">
                    <MaterialIcon
                      name="electric_scooter"
                      className="text-primary"
                    />
                    <p className="font-label-bold text-primary">
                      Atelier trottinette
                    </p>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    Crevaisons, freins, batteries, diagnostic électronique.
                  </p>
                </div>
                <div className="rounded-xl border-2 border-primary-fixed bg-white p-md">
                  <div className="mb-sm flex items-center gap-sm">
                    <MaterialIcon name="smartphone" className="text-primary" />
                    <p className="font-label-bold text-primary">
                      Atelier smartphone
                    </p>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    Écrans, batteries, connecteurs — toutes marques.
                  </p>
                </div>
              </div>
              <div className="space-y-base">
                <div className="flex items-center gap-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                    <MaterialIcon name="location_on" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold">Adresse</p>
                    <p className="text-on-surface-variant">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                    <MaterialIcon name="directions_bus" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold">Accès TCL</p>
                    <p className="text-on-surface-variant">
                      Bus C12, 60, 93 — Arrêts « Saint-Fons Mairie » et «
                      Saint-Fons Albert Thomas »
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                    <MaterialIcon name="schedule" />
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold">Horaires</p>
                    <p className="text-on-surface-variant">
                      Lundi - Samedi : 10h00 - 19h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-[400px] overflow-hidden rounded-xl hard-shadow">
              <iframe
                title={`Localisation Répatech — ${ADDRESS}`}
                src={MAP_EMBED_URL}
                className="h-full min-h-[400px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

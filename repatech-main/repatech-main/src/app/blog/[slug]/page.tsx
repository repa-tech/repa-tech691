import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MaterialIcon } from "@/components/material-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog-posts";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article — Répatech" };

  return {
    title: `${post.title} — Blog Répatech`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />

      <main className="pt-20">
        <article className="mx-auto max-w-3xl px-margin-mobile py-lg md:px-margin-desktop md:py-xl">
          <Link
            href="/blog"
            className="mb-lg inline-flex items-center gap-xs font-label-bold text-primary hover:text-secondary"
          >
            <MaterialIcon name="chevron_left" size={20} />
            Retour au blog
          </Link>

          <div className="mb-md flex flex-wrap items-center gap-sm">
            <span className="rounded bg-secondary-container px-sm py-xs font-label-bold text-label-sm text-on-secondary-container">
              {post.tag}
            </span>
            <span className="flex items-center gap-xs text-label-sm text-on-surface-variant">
              <MaterialIcon name="calendar_today" size={16} />
              {post.date}
            </span>
            <span className="text-label-sm text-on-surface-variant">
              • {post.readTime}
            </span>
          </div>

          <h1 className="mb-lg font-headline-xl text-headline-xl-mobile leading-tight text-primary md:text-headline-xl">
            {post.title}
          </h1>

          <div className="relative mb-xl overflow-hidden rounded-xl border-2 border-outline-variant">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={900}
              height={480}
              className={`h-64 w-full md:h-80 ${
                post.imageContain
                  ? "bg-surface-container-low object-contain p-md"
                  : "object-cover"
              }`}
              priority
            />
          </div>

          <p className="mb-lg border-l-4 border-secondary-container pl-base font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            {post.excerpt}
          </p>

          <div className="space-y-md">
            {post.content.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body-md text-body-md leading-relaxed text-on-surface"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-xl rounded-xl bg-primary p-md text-white md:p-lg">
            <h2 className="mb-sm font-headline-md text-headline-md">
              Besoin d&apos;une intervention ?
            </h2>
            <p className="mb-md text-primary-fixed">
              L&apos;équipe Répatech à Saint-Fons peut diagnostiquer et réparer
              votre trottinette ou smartphone — toutes marques.
            </p>
            <div className="flex flex-col gap-sm sm:flex-row">
              <Link
                href="/rendez-vous"
                className="btn-press rounded-lg bg-secondary-container px-lg py-sm text-center font-label-bold text-on-secondary-container hard-shadow"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/nous-contacter"
                className="rounded-lg border-2 border-white/40 px-lg py-sm text-center font-label-bold text-white transition-colors hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}

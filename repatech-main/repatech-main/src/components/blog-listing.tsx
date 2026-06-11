"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { MaterialIcon } from "@/components/material-icon";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogCategory,
} from "@/lib/blog-posts";

export function BlogListing() {
  const [category, setCategory] = useState<BlogCategory>("tous");
  const [query, setQuery] = useState("");

  const posts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        category === "tous" || post.category === category;
      const matchesQuery =
        !normalized ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.tag.toLowerCase().includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <section className="mb-lg">
        <div className="flex flex-wrap items-center justify-between gap-md border-b-2 border-primary bg-surface-container p-md">
          <div className="flex flex-wrap gap-sm">
            {BLOG_CATEGORIES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={`rounded px-md py-xs font-label-bold transition-colors ${
                  category === item.id
                    ? "bg-primary text-white"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher un guide..."
              className="w-full border-2 border-primary bg-white px-md py-xs pr-10 focus:outline-none"
            />
            <MaterialIcon
              name="search"
              size={20}
              className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-primary"
            />
          </div>
        </div>
      </section>

      <section>
        {posts.length === 0 ? (
          <p className="py-xl text-center text-on-surface-variant">
            Aucun article ne correspond à votre recherche.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border-2 border-outline-variant bg-surface transition-all hover:border-primary hard-shadow"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={400}
                    height={240}
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                      post.imageContain
                        ? "bg-surface-container-low object-contain p-sm"
                        : "object-cover"
                    }`}
                  />
                  <div className="absolute top-base left-base bg-secondary-container px-sm py-xs font-label-bold text-label-sm text-on-secondary-container">
                    {post.tag}
                  </div>
                </div>

                <div className="flex flex-grow flex-col p-md">
                  <div className="mb-sm flex items-center gap-xs text-label-sm text-on-surface-variant">
                    <MaterialIcon name="calendar_today" size={16} />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mb-sm font-headline-md text-headline-md text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-md line-clamp-3 text-body-md text-on-surface-variant">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-outline-variant pt-md">
                    <span className="flex items-center gap-xs font-label-bold text-primary">
                      Lire l&apos;article
                      <MaterialIcon name="arrow_forward" size={18} />
                    </span>
                    <span className="rounded bg-surface-container-high px-xs py-1 text-label-sm text-primary">
                      {post.location}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

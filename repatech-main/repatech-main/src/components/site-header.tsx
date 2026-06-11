"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { MaterialIcon } from "@/components/material-icon";
import { PHONE, PHONE_DISPLAY } from "@/lib/images";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/tarifs") return pathname === "/tarifs";
  if (href === "/prestations") return pathname === "/prestations";
  if (href === "/blog") return pathname === "/blog";
  if (href === "/contact") return pathname === "/contact";
  if (href === "/") return pathname === "/";
  return false;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-primary bg-surface shadow-[4px_4px_0px_0px_rgba(0,22,134,0.2)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link href="/" className="inline-flex items-center">
          <BrandLogo variant="header" />
        </Link>

        <nav className="hidden gap-gutter md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={
                isActive(pathname, href)
                  ? "border-b-2 border-secondary-container font-label-bold text-label-bold font-bold text-primary transition-colors hover:text-secondary"
                  : "font-label-bold text-label-bold font-medium text-on-surface transition-colors hover:text-secondary"
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-base lg:flex">
          <a
            href={`tel:${PHONE}`}
            className="font-label-bold text-label-bold text-primary transition-colors hover:text-secondary"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/rendez-vous"
            className="btn-press rounded-lg border-2 border-black bg-secondary-container px-md py-xs font-label-bold text-label-bold text-on-secondary-container hard-shadow transition-transform hover:translate-y-0.5"
          >
            Prendre rendez-vous
          </Link>
        </div>

        <button
          type="button"
          className="text-primary md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MaterialIcon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-outline-variant bg-surface px-margin-mobile py-md md:hidden">
          <ul className="flex flex-col gap-base">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-label-bold text-label-bold text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:${PHONE}`}
                className="font-label-bold text-label-bold text-primary"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <Link
                href="/rendez-vous"
                className="inline-block rounded-lg bg-secondary-container px-md py-xs font-label-bold text-label-bold text-on-secondary-container"
                onClick={() => setMenuOpen(false)}
              >
                Prendre rendez-vous
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

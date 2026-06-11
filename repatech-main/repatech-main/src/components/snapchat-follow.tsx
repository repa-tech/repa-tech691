import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/material-icon";
import { SNAP_IMAGE, SNAPCHAT_URL } from "@/lib/images";

type SnapchatFollowProps = {
  variant?: "section" | "sidebar";
};

function SnapchatQrPhoto({ size = "large" }: { size?: "large" | "compact" }) {
  const boxClass =
    size === "large"
      ? "h-[340px] w-[255px] md:h-[400px] md:w-[300px]"
      : "h-[220px] w-[165px]";

  return (
    <div
      className={`relative shrink-0 overflow-hidden bg-secondary-container ${boxClass}`}
    >
      <Image
        src={SNAP_IMAGE}
        alt="Snapcode RepaTech691 — scannez pour nous ajouter sur Snapchat"
        fill
        sizes={size === "large" ? "300px" : "165px"}
        className="object-contain object-center"
        priority={size === "large"}
      />
    </div>
  );
}

export function SnapchatFollow({ variant = "section" }: SnapchatFollowProps) {
  if (variant === "sidebar") {
    return (
      <div className="mt-lg border-t border-white/20 pt-lg text-center">
        <p className="mb-md font-label-bold text-secondary-container">
          Suivez-nous sur Snapchat
        </p>
        <a
          href={SNAPCHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block transition-transform hover:scale-[1.02]"
          aria-label="Ajouter RepaTech691 sur Snapchat"
        >
          <SnapchatQrPhoto size="compact" />
        </a>
      </div>
    );
  }

  return (
    <section className="px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter overflow-hidden rounded-xl border-2 border-black bg-secondary-container hard-shadow lg:grid-cols-2">
        <a
          href={SNAPCHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-secondary-container p-0 transition-opacity hover:opacity-95 lg:p-0"
          aria-label="Ajouter RepaTech691 sur Snapchat"
        >
          <SnapchatQrPhoto size="large" />
        </a>
        <div className="space-y-md p-md lg:p-xl">
          <div className="inline-flex items-center gap-xs rounded-full bg-black px-base py-xs font-label-bold text-label-sm text-secondary-container">
            Snapchat
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-secondary-container">
            Suivez-nous sur Snapchat
          </h2>
          <p className="text-body-md text-on-secondary-container/90">
            Scannez le Snapcode pour nous ajouter : photos de réparations,
            conseils et actu de nos ateliers à Saint-Fons.
          </p>
          <a
            href={SNAPCHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-hover inline-flex items-center gap-xs rounded-lg border-2 border-black bg-white px-xl py-base font-label-bold text-primary transition-all"
          >
            Ajouter sur Snapchat
            <MaterialIcon name="open_in_new" className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}

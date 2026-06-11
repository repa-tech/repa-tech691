import type { PriceLine } from "@/lib/tarifs";
import Link from "next/link";
import type { ReactNode } from "react";

type PriceListProps = {
  title: string;
  subtitle: string;
  items: PriceLine[];
  footer?: ReactNode;
};

export function PriceList({ title, subtitle, items, footer }: PriceListProps) {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-outline-variant bg-white hard-shadow">
      <div className="border-b-2 border-primary bg-primary px-md py-base text-white">
        <h2 className="font-headline-md text-headline-md">{title}</h2>
        <p className="mt-1 text-sm text-primary-fixed">{subtitle}</p>
      </div>
      <ul className="divide-y divide-outline-variant">
        {items.map((item) => (
          <li
            key={item.service}
            className="flex items-start justify-between gap-md px-md py-sm"
          >
            <span className="text-body-md">{item.service}</span>
            <span className="shrink-0 font-label-bold text-primary">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
      {footer && (
        <p className="border-t border-outline-variant bg-surface-container-low px-md py-sm text-center text-label-sm text-on-surface-variant">
          {footer}
        </p>
      )}
    </div>
  );
}

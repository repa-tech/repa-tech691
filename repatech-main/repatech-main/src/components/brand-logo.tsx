import { MaterialIcon } from "@/components/material-icon";

type BrandLogoProps = {
  variant?: "header" | "footer";
  iconSize?: number;
  className?: string;
};

export function BrandLogo({
  variant = "header",
  iconSize,
  className = "",
}: BrandLogoProps) {
  const size = iconSize ?? (variant === "footer" ? 28 : 32);
  const textClass =
    variant === "footer"
      ? "font-headline-md text-headline-md font-black text-secondary-container"
      : "font-headline-lg text-headline-lg font-black text-primary";

  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      <span className={textClass}>Repa</span>
      <MaterialIcon
        name="bolt"
        filled
        size={size}
        className="shrink-0 text-secondary-container"
      />
      <span className={textClass}>tech</span>
    </span>
  );
}

import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Répatech | Réparation trottinette électrique et téléphone à Saint-Fons",
  description:
    "Répatech Saint-Fons : Réparation trottinettes électriques et smartphones toutes marques. Service rapide, pièces d'origine — garantie 6 mois trottinettes, 3 mois téléphones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} light`}>
      <body className="lightning-pattern min-h-full">{children}</body>
    </html>
  );
}

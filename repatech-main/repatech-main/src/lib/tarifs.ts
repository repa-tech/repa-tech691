export type PriceLine = { service: string; price: string };

export const SCOOTER_TARIFS: PriceLine[] = [
  { service: "Pneu jusqu'à 9 pouces", price: "À partir de 40 €" },
  { service: "Pneu 10 pouces", price: "À partir de 50 €" },
  { service: "Pneu 11 pouces", price: "À partir de 60 €" },
  {
    service: "Changement plaquettes de frein (pièce incluse)",
    price: "À partir de 20 €",
  },
  { service: "Plaquettes frein marque NUTT", price: "30 €" },
  { service: "Changement disque frein 140 mm", price: "À partir de 20 €" },
  { service: "Changement disque frein 160 mm", price: "À partir de 25 €" },
  { service: "Changement câble de frein", price: "À partir de 15 €" },
  { service: "Purge de frein", price: "À partir de 25 €" },
  { service: "Diagnostic approfondi", price: "À partir de 30 €" },
];

export const IPHONE_SCREEN_TARIFS: PriceLine[] = [
  { service: "iPhone 7", price: "25 €" },
  { service: "iPhone 7+ / 8", price: "30 €" },
  { service: "iPhone 8+", price: "45 €" },
  { service: "iPhone X / XS", price: "40 €" },
  { service: "iPhone XS Max / XR / 11 / 11 Pro", price: "45 €" },
  { service: "iPhone 11 Pro Max", price: "50 €" },
  { service: "iPhone 12 / 12 Pro / 12 Mini", price: "50 €" },
  { service: "iPhone 12 Pro Max", price: "55 €" },
  { service: "iPhone 13 / 13 Mini", price: "55 €" },
  { service: "iPhone 13 Pro", price: "60 €" },
  { service: "iPhone 13 Pro Max", price: "70 €" },
  { service: "iPhone 14", price: "70 €" },
  { service: "iPhone 14 Plus / Pro", price: "75 €" },
  { service: "iPhone 14 Pro Max", price: "80 €" },
  { service: "iPhone 15", price: "70 €" },
  { service: "iPhone 15 Plus / Pro", price: "75 €" },
  { service: "iPhone 15 Pro Max", price: "80 €" },
  { service: "iPhone 16", price: "80 €" },
];

export const SAMSUNG_SCREEN_TARIFS: PriceLine[] = [
  {
    service: "Galaxy A (A1 à la dernière génération)",
    price: "À partir de 45 €",
  },
  {
    service: "Galaxy S (S5 à la dernière génération)",
    price: "À partir de 45 €",
  },
];

export const OTHER_REPAIR_NOTE =
  "Pour toute autre réparation : nous contacter";

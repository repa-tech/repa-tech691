import { IMAGES } from "@/lib/images";
import { BLOG_CONTENT } from "@/lib/blog-content";

export type BlogCategory =
  | "tous"
  | "smartphones"
  | "trottinettes"
  | "conseils";

export type BlogPost = {
  slug: string;
  category: Exclude<BlogCategory, "tous">;
  tag: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageContain?: boolean;
  location: string;
};

export function getBlogPostBySlug(slug: string): (BlogPost & { content: string[] }) | undefined {
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return undefined;
  const content = BLOG_CONTENT[slug];
  if (!content) return undefined;
  return { ...post, content };
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

export const BLOG_CATEGORIES: { id: BlogCategory; label: string }[] = [
  { id: "tous", label: "Tous" },
  { id: "smartphones", label: "Smartphones" },
  { id: "trottinettes", label: "Trottinettes" },
  { id: "conseils", label: "Conseils" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dualtron-freins-nutt-purge",
    category: "trottinettes",
    tag: "DUALTRON",
    date: "28 Mai 2024",
    readTime: "6 min de lecture",
    title: "Dualtron : entretien freins NUTT et purge",
    excerpt:
      "Thunder, Ultra, Spider… Les Dualtron demandent des freins réglés. Nos astuces pour plaquettes, disques et purge — et quand passer par l'atelier Répatech à Saint-Fons.",
    image: IMAGES.blogDualtronUltra,
    imageAlt: "Trottinette électrique Dualtron Ultra II",
    imageContain: true,
    location: "DUALTRON",
  },
  {
    slug: "kukirin-g4-entretien-pneus",
    category: "trottinettes",
    tag: "KUKIRIN",
    date: "24 Mai 2024",
    readTime: "5 min de lecture",
    title: "Kukirin G2 / G4 : pneus, crevaisons et pression",
    excerpt:
      "Pneu 10 ou 11 pouces, chambre à air, bande anti-crevaison ou tubeless : le guide pour rouler sereinement avec votre Kukirin G2 / G4.",
    image: IMAGES.blogScooter,
    imageAlt: "Trottinette électrique Kukirin G4",
    imageContain: true,
    location: "KUKIRIN",
  },
  {
    slug: "xiaomi-m365-crevaison-reparation",
    category: "trottinettes",
    tag: "XIAOMI",
    date: "20 Mai 2024",
    readTime: "5 min de lecture",
    title: "Xiaomi M365 / Pro / Essential : crevaisons et bons réflexes",
    excerpt:
      "Pression, bordures de trottoir, fuites lentes… Les vraies astuces pour votre Xiaomi avant de passer à l'atelier trottinette Répatech.",
    image: IMAGES.blogXiaomiM365,
    imageAlt: "Trottinette électrique Xiaomi M365",
    imageContain: true,
    location: "XIAOMI",
  },
  {
    slug: "trottinette-ne-demarre-plus",
    category: "trottinettes",
    tag: "MOBILITÉ",
    date: "12 Mai 2024",
    readTime: "7 min de lecture",
    title: "Trottinette qui ne démarre plus : causes fréquentes",
    excerpt:
      "Batterie, contrôleur, connecteur ou frein bloqué ? Kukirin, Xiaomi, Dualtron — les pannes qu'on voit chaque jour à l'atelier et comment les diagnostiquer.",
    image: IMAGES.blogKukirinG3Pro,
    imageAlt: "Trottinette électrique Kukirin G3 Pro",
    imageContain: true,
    location: "RHÔNE 69",
  },
  {
    slug: "dualtron-batterie-ne-charge-plus",
    category: "trottinettes",
    tag: "DUALTRON",
    date: "10 Mai 2024",
    readTime: "4 min de lecture",
    title: "Dualtron ne charge plus : chargeur, BMS ou batterie ?",
    excerpt:
      "Voyant rouge, charge qui s'arrête à 50 % ou prise qui chauffe : les vérifications simples avant un diagnostic approfondi en atelier.",
    image: IMAGES.blogBattery,
    imageAlt: "Batterie trottinette électrique",
    location: "ASTUCE",
  },
  {
    slug: "xiaomi-codes-erreur-diagnostic",
    category: "trottinettes",
    tag: "XIAOMI",
    date: "06 Mai 2024",
    readTime: "5 min de lecture",
    title: "Xiaomi : codes erreur et diagnostic rapide",
    excerpt:
      "Clignotements, bip ou appli Mi Home en alerte ? Décryptez les signaux les plus courants sur M365 et Pro 2 avant de démonter quoi que ce soit.",
    image: IMAGES.blogXiaomiM365,
    imageAlt: "Xiaomi M365 — diagnostic",
    imageContain: true,
    location: "XIAOMI",
  },
  {
    slug: "kukirin-batterie-hiver",
    category: "conseils",
    tag: "KUKIRIN",
    date: "02 Mai 2024",
    readTime: "4 min de lecture",
    title: "Astuce Kukirin : protéger sa batterie en hiver",
    excerpt:
      "Le froid réduit l'autonomie. Où stocker, comment charger et à quelle température rouler pour préserver les cellules de votre G2 ou G4.",
    image: IMAGES.hero,
    imageAlt: "Kukirin G2 — entretien batterie hiver",
    imageContain: true,
    location: "ASTUCE",
  },
  {
    slug: "gonflage-pneus-trottinette",
    category: "conseils",
    tag: "ASTUCE",
    date: "28 Avril 2024",
    readTime: "3 min de lecture",
    title: "Astuce : la bonne pression de vos pneus trottinette",
    excerpt:
      "Sous-gonflé = crevaisons et usure. Sur-gonflé = confort zero. La pression recommandée pour 8, 10 et 11 pouces, toutes marques confondues.",
    image: IMAGES.blogKukirinG4Action,
    imageAlt: "Kukirin G4 en action — pression des pneus",
    imageContain: true,
    location: "ASTUCE",
  },
  {
    slug: "verifier-freins-avant-rouler",
    category: "conseils",
    tag: "ASTUCE",
    date: "22 Avril 2024",
    readTime: "3 min de lecture",
    title: "Astuce : check-list freins avant chaque sortie",
    excerpt:
      "30 secondes suffisent : plaquettes, câble, levier et disque. Un réflexe simple pour Dualtron, Kukirin et Xiaomi — surtout après la pluie.",
    image: IMAGES.blogDualtronThunder,
    imageAlt: "Dualtron Thunder — contrôle des freins",
    imageContain: true,
    location: "SÉCURITÉ",
  },
  {
    slug: "prolonger-duree-vie-batterie",
    category: "conseils",
    tag: "MAINTENANCE",
    date: "08 Mai 2024",
    readTime: "4 min de lecture",
    title: "Comment prolonger la durée de vie de sa batterie",
    excerpt:
      "Cycles de charge, stockage longue durée, chargeur d'origine : nos conseils pour trottinettes et smartphones afin d'éviter une panne coûteuse.",
    image: IMAGES.blogBattery,
    imageAlt: "Batterie lithium-ion",
    location: "TECH",
  },
  {
    slug: "pieces-detachees-origine-compatibles",
    category: "conseils",
    tag: "QUALITÉ",
    date: "01 Mai 2024",
    readTime: "6 min de lecture",
    title: "Pièces d'origine vs compatibles : que choisir ?",
    excerpt:
      "Pneus, freins NUTT, écrans iPhone ou cellules batterie — pourquoi la qualité des pièces change tout sur la durée de vie de votre engin.",
    image: IMAGES.blogParts,
    imageAlt: "Pièces détachées électroniques",
    location: "LYON",
  },
  {
    slug: "dualtron-checklist-entretien",
    category: "conseils",
    tag: "DUALTRON",
    date: "18 Avril 2024",
    readTime: "5 min de lecture",
    title: "Check-list entretien Dualtron (Thunder, Ultra, Mini)",
    excerpt:
      "Serrages, jeu de direction, graissage et contrôle électrique : l'entretien régulier qui évite la grosse réparation — avec ou sans passage à l'atelier.",
    image: IMAGES.blogDualtronVictor,
    imageAlt: "Dualtron Victor — entretien régulier",
    imageContain: true,
    location: "DUALTRON",
  },
  {
    slug: "ecran-fissure-reparer-ou-racheter",
    category: "smartphones",
    tag: "MOBILE",
    date: "15 Mai 2024",
    readTime: "5 min de lecture",
    title: "Écran fissuré : réparer ou racheter son téléphone ?",
    excerpt:
      "iPhone, Samsung, Xiaomi… À Saint-Fons, la réparation d'écran coûte souvent moins qu'un neuf. Impact écologique, garantie 3 mois et verre trempé offert.",
    image: IMAGES.blogCrackedScreen,
    imageAlt: "Smartphone avec écran fissuré",
    location: "LYON 69",
  },
  {
    slug: "reparation-iphone-saint-fons",
    category: "smartphones",
    tag: "IPHONE",
    date: "05 Mai 2024",
    readTime: "4 min de lecture",
    title: "Réparation iPhone près de Lyon : pourquoi le local ?",
    excerpt:
      "Délais, prix transparents et SAV de proximité. Pourquoi faire réparer votre iPhone à Saint-Fons plutôt qu'en centre commercial ou par envoi postal.",
    image: IMAGES.blogSmartphone,
    imageAlt: "Réparation iPhone en atelier",
    location: "SAINT-FONS",
  },
  {
    slug: "verre-trempe-ecran-reparation",
    category: "conseils",
    tag: "ASTUCE",
    date: "12 Avril 2024",
    readTime: "2 min de lecture",
    title: "Astuce : verre trempé après changement d'écran",
    excerpt:
      "Chez Répatech, un verre trempé est offert à chaque réparation d'écran iPhone. Pourquoi le poser tout de suite et comment bien le faire tenir.",
    image: IMAGES.blogCrackedScreen,
    imageAlt: "Protection écran smartphone",
    location: "MOBILE",
  },
  {
    slug: "reparer-plutot-racheter",
    category: "conseils",
    tag: "ÉCOLOGIE",
    date: "01 Avril 2024",
    readTime: "5 min de lecture",
    title: "Réparer plutôt que racheter : le bon geste",
    excerpt:
      "Trottinette ou smartphone, allonger la durée de vie de vos appareils, c'est économiser et limiter les déchets. Le reconditionné expliqué simplement.",
    image: IMAGES.blogEcology,
    imageAlt: "Réparation durable",
    location: "ÉCO",
  },
];

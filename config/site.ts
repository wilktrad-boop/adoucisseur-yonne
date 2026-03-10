import { departementConfig } from "./departement";
import type { FAQItem } from "@/data/faq";

export const siteConfig = {
  name: departementConfig.siteName,
  domain: departementConfig.domain,
  description:
    "Installation et entretien d'adoucisseurs d'eau dans le département de l'Yonne. Devis gratuit pour Auxerre, Sens, Joigny, Avallon et tout le 89.",
  contact: departementConfig.contact,
  departement: departementConfig,
};

export interface Ville {
  slug: string;
  nom: string;
  codePostal: string;
  zone?: string; // Ex: "Agglo auxerroise", "Nord du département"
  metaDescription?: string;
  quartiers?: string[]; // Quartiers desservis dans la ville
  caracteristiquesEau?: string; // Caractéristiques spécifiques de l'eau locale
  referencesLocales?: string[]; // Références ou points d'intérêt locaux
  dureteEau?: string; // Dureté de l'eau en TH (Titre Hydrotimétrique)
  image?: string; // Chemin vers l'image de la ville
  faq?: FAQItem[]; // FAQ spécifique à la ville
}

export const villes: Ville[] = [
  {
    slug: "auxerre",
    nom: "Auxerre",
    codePostal: "89000",
    zone: "Centre Yonne",
    image: "/technicien_hero.png",
    metaDescription:
      "Adoucisseur d'eau à Auxerre (89000) — eau calcaire 25-35 TH et alerte PFAS. Installation, entretien et dépannage. Devis gratuit sous 24h.",
    quartiers: [
      "Centre-ville",
      "Les Conches",
      "Saint-Siméon",
      "Les Brichères",
      "Rive droite",
      "Les Clairions",
      "Saint-Amatre",
      "Sainte-Geneviève",
    ],
    caracteristiquesEau:
      "L'eau distribuée à Auxerre présente une double problématique : une dureté élevée de 25 à 35 TH due aux sols calcaires du bassin de l'Yonne, et une contamination aux PFAS (substances perfluoroalkylées) détectée par les autorités sanitaires. Auxerre figure parmi les villes françaises les plus touchées, avec 9 PFAS identifiés dont 2 classés cancérigènes probables. Sur le plan calcaire, le réseau d'Auxerre est alimenté par des captages souterrains dans les alluvions de l'Yonne et des nappes crayeuses, naturellement chargées en calcium et magnésium. À 25-35 TH, le tartre se dépose rapidement dans les chauffe-eaux, lave-linges et robinetteries.",
    dureteEau: "25-35 TH",
    referencesLocales: [
      "Installations réalisées dans le quartier des Brichères et Saint-Amatre",
      "Entretien récurrent pour des maisons individuelles à Rive droite",
      "Accompagnement de copropriétés proches du centre-ville",
      "Pose d'osmoseurs après l'alerte PFAS pour des familles de Sainte-Geneviève",
    ],
    faq: [
      {
        question: "L'eau du robinet est-elle sûre à Auxerre ?",
        answer:
          "L'eau d'Auxerre est techniquement potable selon les normes en vigueur, mais 9 PFAS (polluants éternels) ont été détectés, dont 2 classés cancérigènes probables. Les autorités sanitaires suivent la situation. Pour une protection maximale contre ces contaminants, un osmoseur à osmose inverse est recommandé — contrairement à l'adoucisseur, qui traite uniquement le calcaire et ne filtre pas les PFAS. Consultez notre page dédiée aux PFAS et pesticides à Auxerre pour en savoir plus.",
      },
      {
        question: "Quelle est la dureté de l'eau à Auxerre ?",
        answer:
          "La dureté de l'eau à Auxerre oscille entre 25 et 35 TH (Titre Hydrotimétrique) selon les quartiers et la saison. C'est une eau considérée comme dure à très dure (seuil à 15 TH). Les quartiers alimentés par les nappes crayeuses (Rive droite, Les Brichères) affichent les valeurs les plus élevées. Un adoucisseur bien dimensionné élimine ce calcaire et protège vos équipements.",
      },
      {
        question: "Adoucisseur ou osmoseur à Auxerre : lequel choisir ?",
        answer:
          "Ces deux appareils répondent à des besoins différents. L'adoucisseur traite le calcaire (dureté 25-35 TH) pour protéger vos canalisations et appareils ménagers. L'osmoseur filtre les contaminants chimiques (PFAS, pesticides, nitrates) pour produire une eau de boisson de qualité. Face à la situation d'Auxerre, de nombreux foyers optent pour la combinaison des deux solutions. Nous proposons des devis gratuits pour les deux types d'installation.",
      },
    ],
  },
  {
    slug: "sens",
    nom: "Sens",
    codePostal: "89100",
    zone: "Nord Yonne",
    image: "/technicien_hero.png",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Sens. Prenez rendez-vous avec un expert local dans l'Yonne.",
    quartiers: [
      "Centre historique",
      "Champbertrand",
      "Moulin à Tan",
      "Les Champs-Plaisants",
      "Les Sablons",
      "Maillot",
    ],
    caracteristiquesEau:
      "Sens est alimentée par des ressources souterraines particulièrement calcaires, ce qui nécessite un traitement de l'eau pour protéger les installations.",
    dureteEau: "28-38 TH",
    referencesLocales: [
      "Installations d'adoucisseurs dans les pavillons des Champs-Plaisants",
      "Dépannages fréquents sur Maillot et Paron",
      "Contrats d'entretien pour des logements du centre historique",
    ],
  },
  {
    slug: "joigny",
    nom: "Joigny",
    codePostal: "89300",
    zone: "Val de l'Yonne",
    image: "/technicien_hero.png",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Joigny et dans les communes voisines de la vallée de l'Yonne.",
    quartiers: [
      "Saint-Jacques",
      "Saint-André",
      "Les Champs",
      "Les Basses Veuves",
      "La Madeleine",
      "Les Boutards",
    ],
    caracteristiquesEau:
      "Les réseaux de Joigny présentent une dureté marquée liée aux sols calcaires. Un adoucisseur évite le tartre dans les chaudières et robinetteries.",
    dureteEau: "26-36 TH",
    referencesLocales: [
      "Installations dans le quartier Saint-Jacques",
      "Entretien d'adoucisseurs pour des maisons le long de la RN6",
      "Assistance technique pour des artisans locaux",
    ],
  },
  {
    slug: "avallon",
    nom: "Avallon",
    codePostal: "89200",
    zone: "Sud Yonne",
    image: "/technicien_hero.png",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Avallon. Intervention rapide dans tout le sud de l'Yonne.",
    quartiers: [
      "Centre-ville",
      "La Morlande",
      "La Vaueline",
      "Les Chaumes",
      "Les Georgeots",
      "Côte Blanche",
    ],
    caracteristiquesEau:
      "Avallon bénéficie d'un réseau alimenté par des nappes calcaires. La dureté de l'eau demande un suivi pour limiter les dépôts dans les installations.",
    dureteEau: "24-34 TH",
    referencesLocales: [
      "Installations dans les quartiers pavillonnaires de La Morlande",
      "Dépannages pour des maisons secondaires dans l'Avallonnais",
      "Accompagnement de gîtes touristiques autour de Vézelay",
    ],
  },
  {
    slug: "migennes",
    nom: "Migennes",
    codePostal: "89400",
    zone: "Vallée de l'Yonne",
    image: "/technicien_hero.png",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Migennes. Devis gratuit pour les particuliers et professionnels du 89.",
    quartiers: [
      "Centre-ville",
      "Laroche",
      "Les Concessions",
      "Les Pesches",
      "Bercy",
    ],
    caracteristiquesEau:
      "Migennes et ses environs disposent d'une eau très minéralisée qui accélère l'entartrage des canalisations. L'adoucisseur prolonge la durée de vie des équipements.",
    dureteEau: "27-37 TH",
    referencesLocales: [
      "Installations dans les lotissements proches de Laroche-Migennes",
      "Maintenance d'adoucisseurs pour des locaux professionnels",
    ],
  },
  {
    slug: "tonnerre",
    nom: "Tonnerre",
    codePostal: "89700",
    zone: "Tonnerrois",
    image: "/technicien_hero.png",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Tonnerre et dans le Tonnerrois.",
    quartiers: [
      "Centre historique",
      "Le Pâtis",
      "Zone de la gare",
      "Les Lices",
      "Chevalier d'Éon",
    ],
    caracteristiquesEau:
      "La présence de craie et de calcaire dans les sols du Tonnerrois entraîne une eau dure qui favorise les dépôts. L'adoucisseur limite le tartre sur les équipements.",
    dureteEau: "25-35 TH",
    referencesLocales: [
      "Installations d'adoucisseurs chez des vignerons du Tonnerrois",
      "Entretien pour des maisons de ville proches de la Fosse Dionne",
    ],
  },
  {
    slug: "moneteau",
    nom: "Monéteau",
    codePostal: "89470",
    zone: "Agglo d'Auxerre",
    image: "/technicien_hero.png",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Monéteau, au nord d'Auxerre.",
    quartiers: [
      "Centre-bourg",
      "Sully",
      "Les Hautes Roches",
      "Les Varennes",
      "Les Grands Champs",
    ],
    caracteristiquesEau:
      "Monéteau partage les mêmes problématiques de calcaire que l'agglomération d'Auxerre. L'adoucisseur évite les dépôts dans les chaudières et robinets.",
    dureteEau: "25-34 TH",
    referencesLocales: [
      "Installations dans les zones pavillonnaires récentes",
      "Maintenance d'équipements dans les zones artisanales",
    ],
  },
  {
    slug: "villeneuve-sur-yonne",
    nom: "Villeneuve-sur-Yonne",
    codePostal: "89500",
    zone: "Nord Yonne",
    image: "/technicien_hero.png",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Villeneuve-sur-Yonne. Service réactif dans tout le nord du département.",
    quartiers: [
      "Centre-ville",
      "Les Clairions",
      "La Côte Saint-Jacques",
      "Les Sables Rouges",
      "Les Prés",
    ],
    caracteristiquesEau:
      "Villeneuve-sur-Yonne est alimentée par des nappes où la dureté dépasse régulièrement 30 TH. Un adoucisseur limite l'entartrage des installations domestiques.",
    dureteEau: "28-38 TH",
    referencesLocales: [
      "Installations dans les lotissements proches de la RN6",
      "Entretien pour des résidences secondaires le long de l'Yonne",
    ],
  },
];

export const getVilleBySlug = (slug: string): Ville | undefined => {
  return villes.find((v) => v.slug === slug);
};












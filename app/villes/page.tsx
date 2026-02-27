import { Metadata } from "next";
import VillesPageClient from "@/components/VillesPageClient";
import { siteConfig, villes } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: `Villes desservies dans l'${departementConfig.departementName} (${departementConfig.departementNumber}) — Adoucisseur d'eau`,
  description: `Découvrez les ${villes.length} villes de l'${departementConfig.departementName} où nous installons, entretenons et dépannons les adoucisseurs d'eau. Auxerre, Sens, Joigny, Avallon et plus.`,
  alternates: {
    canonical: "/villes",
  },
  openGraph: {
    title: `Villes desservies dans l'${departementConfig.departementName} (${departementConfig.departementNumber}) — Adoucisseur d'eau`,
    description: `Découvrez les ${villes.length} villes de l'${departementConfig.departementName} où nous installons, entretenons et dépannons les adoucisseurs d'eau.`,
    url: `${siteConfig.domain}/villes`,
  },
};

export default function VillesPage() {
  return <VillesPageClient />;
}

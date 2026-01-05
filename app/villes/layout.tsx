import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Villes desservies dans l'Yonne - Installation adoucisseur d'eau",
  description:
    "Liste des villes desservies pour l'installation et l'entretien d'adoucisseurs d'eau dans l'Yonne : Auxerre, Sens, Joigny, Avallon et de nombreuses autres communes.",
  alternates: {
    canonical: "/villes",
  },
  openGraph: {
    title: "Villes desservies dans l'Yonne - Installation adoucisseur d'eau",
    description:
      "Liste des villes desservies pour l'installation et l'entretien d'adoucisseurs d'eau dans l'Yonne.",
    url: `${siteConfig.domain}/villes`,
  },
};

export default function VillesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


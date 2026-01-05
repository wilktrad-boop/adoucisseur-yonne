import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { guides } from "@/data/guides";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Guides et conseils sur l'adoucisseur d'eau",
  description:
    "Guides pratiques et conseils sur l'adoucisseur d'eau : choix, entretien, économies. Tout ce qu'il faut savoir pour bien choisir et entretenir son adoucisseur dans l'Yonne.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Guides et conseils sur l'adoucisseur d'eau",
    description:
      "Guides pratiques et conseils sur l'adoucisseur d'eau : choix, entretien, économies.",
    url: `${siteConfig.domain}/guides`,
  },
};

export default function GuidesPage() {
  return (
    <Section className="py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
        Guides et conseils
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
        Découvrez nos guides pratiques pour tout savoir sur l'adoucisseur d'eau : comment le
        choisir, l'entretenir, réaliser des économies, et bien plus encore.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 border border-gray-200 hover:border-primary-500"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {guide.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {guide.description}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{new Date(guide.date).toLocaleDateString("fr-FR")}</span>
              <span className="text-primary-600 font-semibold">Lire la suite →</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}














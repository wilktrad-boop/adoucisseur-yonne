import Link from "next/link";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">
        Page non trouvée
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
      >
        Retour à l'accueil
      </Link>
    </Section>
  );
}














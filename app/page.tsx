import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import CityList from "@/components/CityList";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { faqHome } from "@/data/faq";

export const metadata: Metadata = {
  title: siteConfig.departement.seo.homeTitle,
  description: siteConfig.departement.seo.homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.departement.seo.homeTitle,
    description: siteConfig.departement.seo.homeDescription,
    url: siteConfig.domain,
    images: [
      {
        url: `${siteConfig.domain}/technicien_hero.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.departement.seo.ogImageAlt,
      },
    ],
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.domain,
  description: siteConfig.description,
};

export default function Home() {
  const highlightedCities = siteConfig.departement.mainCities.slice(0, 4).join(", ");

  return (
    <>
      <JsonLd data={homepageSchema} />

      {/* Hero Section */}
      <Section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Image de fond optimisée */}
        <div className="absolute inset-0">
          <Image
            src="/technicien_hero.png"
            alt="Technicien professionnel installant un adoucisseur d'eau dans l'Yonne"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>
        {/* Overlay sombre avec opacité forte */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/85 to-primary-900/85" />
        {/* Contenu */}
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Adoucisseur d'eau dans l'Yonne (89)
                <br />
                <span className="text-primary-200">Protégez votre installation</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                Installation, entretien et dépannage d'adoucisseurs d'eau dans tout le département
                de l'{siteConfig.departement.departementName}. Devis gratuit et intervention rapide à{" "}
                {highlightedCities} et partout dans le 89.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Devis gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Intervention rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Professionnels certifiés</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Demandez votre devis gratuit
              </h2>
              <p className="text-gray-600 mb-6">
                Remplissez le formulaire et recevez un devis personnalisé sous 24h.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Avantages Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Pourquoi installer un adoucisseur d'eau ?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            L'eau de l'{siteConfig.departement.departementName} est souvent calcaire. Un adoucisseur
            d'eau vous apporte de nombreux avantages au quotidien.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Protection de vos appareils
              </h3>
              <p className="text-gray-600">
                Réduisez l'usure de vos appareils électroménagers (lave-linge, lave-vaisselle,
                chauffe-eau) et prolongez leur durée de vie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Économies d'énergie</h3>
              <p className="text-gray-600">
                Moins de calcaire = moins de consommation d'énergie. Vos appareils fonctionnent plus
                efficacement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Confort au quotidien</h3>
              <p className="text-gray-600">
                Eau plus douce pour la peau et les cheveux, lessive plus efficace, vaisselle plus
                brillante.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Moins de produits d'entretien</h3>
              <p className="text-gray-600">
                Réduisez votre consommation de produits lessiviels et d'entretien jusqu'à 50%.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation professionnelle</h3>
              <p className="text-gray-600">
                Installation rapide (2-4h) par nos professionnels certifiés. Mise en service
                immédiate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entretien et SAV</h3>
              <p className="text-gray-600">
                Service après-vente disponible. Contrats d'entretien pour garantir le bon
                fonctionnement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Nos services
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins en adoucisseur d'eau
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/adoucisseur"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Installation
              </h3>
              <p className="text-gray-600 mb-4">
                Installation complète d'adoucisseur d'eau adapté à votre logement dans l'Yonne
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                En savoir plus →
              </span>
            </Link>

            <Link
              href="/entretien-adoucisseur"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Entretien
              </h3>
              <p className="text-gray-600 mb-4">
                Maintenance régulière pour garantir le bon fonctionnement de votre adoucisseur dans le 89
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                En savoir plus →
              </span>
            </Link>

            <Link
              href="/depannage-adoucisseur"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Dépannage
              </h3>
              <p className="text-gray-600 mb-4">
                Intervention rapide dans le département pour réparer votre adoucisseur
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                En savoir plus →
              </span>
            </Link>

            <Link
              href="/prix-adoucisseur"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Devis gratuit
              </h3>
              <p className="text-gray-600 mb-4">
                Obtenez un devis personnalisé sans engagement pour votre projet dans l'Yonne
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                En savoir plus →
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Section Qualité de l'eau */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Qualité de l'eau dans l'Yonne
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            L'eau de l'Yonne est naturellement calcaire et certaines communes sont touchées par des polluants. Informez-vous et protégez votre foyer.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/qualite-eau-yonne"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Dureté de l'eau par commune
              </h3>
              <p className="text-gray-600 mb-4">
                23 à 38 TH selon les zones. Découvrez la dureté de l'eau dans votre commune de l'Yonne.
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                Consulter la carte →
              </span>
            </Link>

            <Link
              href="/pfas-pesticides-eau-auxerre"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-red-500 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition">
                Alerte PFAS à Auxerre
              </h3>
              <p className="text-gray-600 mb-4">
                9 PFAS détectés dont 2 cancérigènes. Découvrez les solutions de filtration adaptées.
              </p>
              <span className="text-red-600 font-medium group-hover:underline">
                En savoir plus →
              </span>
            </Link>

            <Link
              href="/osmoseur-yonne"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Osmoseur et filtration
              </h3>
              <p className="text-gray-600 mb-4">
                Filtrez PFAS, pesticides et nitrates. Osmose inverse pour une eau pure à domicile.
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                Découvrir les solutions →
              </span>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/guides"
              className="text-primary-600 font-medium hover:underline text-lg"
            >
              Consulter tous nos guides et conseils →
            </Link>
          </div>
        </div>
      </Section>

      {/* Villes Section */}
      <Section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Nous intervenons dans tout l'{siteConfig.departement.departementName}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Installation et entretien d'adoucisseurs d'eau dans les principales villes du
            département : {highlightedCities} et les communes voisines.
          </p>
          <CityList />
          <div className="text-center mt-8">
            <Link
              href="/villes"
              className="text-primary-600 font-medium hover:underline text-lg"
            >
              Voir toutes les villes desservies →
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Tout ce que vous devez savoir sur l'adoucisseur d'eau dans l'
            {siteConfig.departement.departementName}
          </p>
          <FAQ items={faqHome} />
        </div>
      </Section>

      {/* CTA Final Section */}
      <Section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à installer votre adoucisseur d'eau ?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Obtenez un devis gratuit et personnalisé en quelques minutes
          </p>
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig, getVilleBySlug, villes } from "@/config/site";
import { departementConfig } from "@/config/departement";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return villes.map((ville) => ({
    slug: ville.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ville = getVilleBySlug(slug);

  if (!ville) {
    return {};
  }

  const title = `Installation et entretien d'adoucisseurs d'eau à ${ville.nom}`;
  const description =
    ville.metaDescription ||
    `Installation et entretien d'adoucisseurs d'eau à ${ville.nom} (${ville.codePostal}). Devis gratuit pour votre adoucisseur d'eau dans l'${departementConfig.departementName}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/villes/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.domain}/villes/${slug}`,
    },
  };
}

export default async function VillePage({ params }: PageProps) {
  const { slug } = await params;
  const ville = getVilleBySlug(slug);

  if (!ville) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: `Installation et entretien d'adoucisseurs d'eau à ${ville.nom}, ${departementConfig.departementName}.`,
    url: `${siteConfig.domain}/villes/${ville.slug}`,
    telephone: departementConfig.contact.phone,
    email: departementConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: ville.nom,
      postalCode: ville.codePostal,
      addressRegion: departementConfig.departementName,
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "City",
      name: ville.nom,
      postalCode: ville.codePostal,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services adoucisseur d'eau",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation d'adoucisseur d'eau" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien d'adoucisseur d'eau" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage adoucisseur d'eau" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remplacement adoucisseur d'eau" } },
      ],
    },
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <Section className="relative bg-gradient-to-br from-primary-50 to-white py-12 overflow-hidden">
        {/* Image de fond avec opacité */}
        {ville.image && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${ville.image})`,
              }}
            />
            <div className="absolute inset-0 bg-white/70" />
          </>
        )}

        {/* Contenu au-dessus du fond */}
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Villes", href: "/villes" },
              { label: ville.nom },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Installation et entretien d'adoucisseurs d'eau à {ville.nom}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Vous habitez à {ville.nom} ({ville.codePostal}) et vous souhaitez installer ou entretenir
            un adoucisseur d'eau ? Nous mettons en relation les habitants de {ville.nom} et de tout
            le département avec des professionnels qualifiés pour l'installation, l'entretien et le
            dépannage d'adoucisseurs d'eau.
          </p>
          {ville.zone && (
            <p className="text-gray-600 mt-2">
              Zone : {ville.zone}
            </p>
          )}
          {ville.dureteEau && (
            <p className="text-gray-600 mt-2">
              Dureté de l'eau : {ville.dureteEau}
            </p>
          )}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {ville.quartiers && ville.quartiers.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quartiers desservis à {ville.nom}
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nous intervenons dans tous les quartiers de {ville.nom} pour l'installation et
                  l'entretien d'adoucisseurs d'eau :
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  {ville.quartiers.map((quartier, index) => (
                    <div
                      key={index}
                      className="bg-primary-50 px-4 py-2 rounded-lg text-gray-800 font-medium"
                    >
                      {quartier}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Vous habitez dans un autre quartier ? Contactez-nous, nous intervenons dans toute
                  la commune de {ville.nom}.
                </p>
              </div>
            </section>
          )}

          {ville.caracteristiquesEau && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Caractéristiques de l'eau à {ville.nom}
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>{ville.caracteristiquesEau}</p>
                {ville.dureteEau && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-semibold text-blue-900 mb-2">Dureté de l'eau mesurée</p>
                    <p className="text-blue-800">
                      La dureté de l'eau à {ville.nom} est de <strong>{ville.dureteEau}</strong>{" "}
                      (Titre Hydrotimétrique). Une eau est considérée comme dure à partir de 15 TH.
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi installer un adoucisseur à {ville.nom} ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                L'eau distribuée à {ville.nom} et dans l'
                {departementConfig.departementName} présente souvent une dureté élevée, ce qui peut
                causer plusieurs problèmes au quotidien :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dépôts de calcaire dans vos canalisations et appareils électroménagers</li>
                <li>Usure prématurée de vos équipements (lave-linge, lave-vaisselle, chauffe-eau)</li>
                <li>Eau désagréable pour la peau et les cheveux</li>
                <li>Consommation accrue de produits d'entretien et de lessive</li>
                <li>Coûts de réparation et de remplacement d'équipements</li>
              </ul>
              <p>
                Installer un adoucisseur d'eau à {ville.nom} permet de réduire la dureté de l'eau
                et de protéger votre installation tout en améliorant votre confort quotidien.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos services à {ville.nom}
            </h2>
            <p className="text-gray-700 mb-6">
              Nous proposons une gamme complète de services pour votre adoucisseur d'eau à{" "}
              {ville.nom} :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/adoucisseur",
                  title: "Installation d'adoucisseur",
                  description: "Installation complète d'un adoucisseur adapté à vos besoins et à votre logement.",
                  icon: "🔧",
                },
                {
                  href: "/entretien-adoucisseur",
                  title: "Entretien régulier",
                  description: "Maintenance et vérification pour garantir le bon fonctionnement de votre appareil.",
                  icon: "🛠️",
                },
                {
                  href: "/depannage-adoucisseur",
                  title: "Dépannage & réparation",
                  description: "Intervention rapide en cas de panne ou de dysfonctionnement.",
                  icon: "⚡",
                },
                {
                  href: "/prix-adoucisseur",
                  title: "Remplacement",
                  description: "Remplacement d'un ancien adoucisseur par un modèle plus performant.",
                  icon: "♻️",
                },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-2" aria-hidden="true">{service.icon}</div>
                  <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-1">
                    {service.title}
                  </p>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Intervention rapide à {ville.nom}
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Nos professionnels partenaires interviennent rapidement à {ville.nom} et dans tout
                le département pour répondre à vos besoins :
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <ul className="list-disc list-inside space-y-2">
                  <li>Devis gratuit et personnalisé sous 24-48h</li>
                  <li>Installation planifiée selon vos disponibilités</li>
                  <li>Intervention d'urgence disponible pour les pannes critiques</li>
                  <li>Service client disponible pour répondre à vos questions</li>
                </ul>
              </div>
            </div>
          </section>

          {ville.referencesLocales && ville.referencesLocales.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nos références à {ville.nom}
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nous avons déjà réalisé de nombreuses installations et interventions à {ville.nom} :
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <ul className="space-y-3">
                    {ville.referencesLocales.map((reference, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{reference}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Ces références témoignent de notre expérience et de notre connaissance du terrain
                  à {ville.nom}.
                </p>
              </div>
            </section>
          )}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Demander un devis pour un adoucisseur à {ville.nom}
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Remplissez le formulaire ci-dessous pour recevoir un devis gratuit et personnalisé
            pour votre adoucisseur d'eau à {ville.nom}. Nous vous contacterons rapidement.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm villePreselectionnee={ville.nom} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Link
            href="/villes"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            ← Retour à la liste des villes
          </Link>
        </div>
      </Section>
    </>
  );
}












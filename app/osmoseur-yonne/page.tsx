import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: "Osmoseur et filtration de l'eau dans l'Yonne (89) — Devis gratuit",
  description:
    "Installation d'osmoseurs et systèmes de filtration complète dans l'Yonne. Filtre PFAS, pesticides, nitrates et calcaire. Solution recommandée après l'alerte eau d'Auxerre. Devis gratuit.",
  alternates: {
    canonical: "/osmoseur-yonne",
  },
  openGraph: {
    title: "Osmoseur et filtration de l'eau dans l'Yonne — Devis gratuit",
    description:
      "Osmoseur à osmose inverse dans l'Yonne : filtre PFAS, pesticides, nitrates. Combinaison osmoseur + adoucisseur disponible.",
    url: `${siteConfig.domain}/osmoseur-yonne`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description:
    "Installation et entretien d'osmoseurs et systèmes de filtration d'eau dans l'Yonne. Intervention à Auxerre, Sens, Joigny, Avallon et tout le 89.",
  url: `${siteConfig.domain}/osmoseur-yonne`,
  telephone: departementConfig.contact.phone,
  email: departementConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressRegion: departementConfig.departementName,
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: `${departementConfig.departementName} (${departementConfig.departementNumber})`,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services filtration et osmose",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation osmoseur sous-évier" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation filtre à charbon actif" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien et remplacement de membranes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Combinaison osmoseur + adoucisseur" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle est la différence entre un osmoseur et un adoucisseur d'eau ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un adoucisseur d'eau traite uniquement le calcaire (ions calcium et magnésium) par échange ionique. Un osmoseur à osmose inverse filtre jusqu'à 99% des contaminants : PFAS, pesticides, nitrates, métaux lourds, bactéries, virus. L'osmoseur ne traite pas le calcaire. Dans l'Yonne, combiner les deux est la solution la plus complète.",
      },
    },
    {
      "@type": "Question",
      name: "Un osmoseur filtre-t-il vraiment les PFAS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. La membrane semi-perméable d'un osmoseur à osmose inverse filtre jusqu'à 99% des PFAS (substances per- et polyfluoroalkylées). C'est la technologie recommandée par les associations de consommateurs pour les zones contaminées comme Auxerre.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il un osmoseur ET un adoucisseur dans l'Yonne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les deux systèmes sont complémentaires. L'osmoseur traite l'eau de boisson et cuisine (filtre PFAS, pesticides). L'adoucisseur protège toute l'installation (lave-linge, chauffe-eau, canalisations) contre le calcaire. Sur Auxerre et ses environs, où l'eau est à la fois calcaire (23–35 TH) et contaminée aux PFAS, la combinaison est fortement recommandée.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix d'un osmoseur dans l'Yonne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un osmoseur sous-évier coûte entre 300€ et 800€ selon le modèle et les étapes de filtration (3 à 7 étapes). L'installation est facturée entre 150€ et 300€. L'entretien annuel (remplacement des cartouches et membrane) représente environ 80 à 150€ par an. Demandez un devis gratuit pour une estimation précise.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure l'installation d'un osmoseur ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'installation d'un osmoseur sous-évier prend en général 1 à 2 heures. Le technicien raccorde l'osmoseur sur l'arrivée d'eau froide sous l'évier, pose un robinet dédié et raccorde l'évacuation. Aucun travaux importants ne sont nécessaires.",
      },
    },
  ],
};

const comparaison = [
  {
    critere: "Filtre le calcaire",
    osmoseur: false,
    adoucisseur: true,
    combine: true,
  },
  {
    critere: "Filtre les PFAS",
    osmoseur: true,
    adoucisseur: false,
    combine: true,
  },
  {
    critere: "Filtre les pesticides",
    osmoseur: true,
    adoucisseur: false,
    combine: true,
  },
  {
    critere: "Filtre les nitrates",
    osmoseur: true,
    adoucisseur: false,
    combine: true,
  },
  {
    critere: "Filtre les métaux lourds",
    osmoseur: true,
    adoucisseur: false,
    combine: true,
  },
  {
    critere: "Protège l'installation",
    osmoseur: false,
    adoucisseur: true,
    combine: true,
  },
  {
    critere: "Eau de boisson pure",
    osmoseur: true,
    adoucisseur: false,
    combine: true,
  },
  {
    critere: "Traite toute l'installation",
    osmoseur: false,
    adoucisseur: true,
    combine: true,
  },
];

export default function OsmoseurYonnePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-600 via-blue-700 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[{ label: "Osmoseur et filtration dans l'Yonne" }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Osmoseur et filtration de l&apos;eau dans l&apos;Yonne (89)
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Après les alertes PFAS et pesticides à Auxerre, de plus en plus de ménages de
            l&apos;Yonne optent pour l&apos;osmoseur. Filtration jusqu&apos;à 99% des polluants chimiques —
            complémentaire à l&apos;adoucisseur pour une eau complètement traitée.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#devis"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/pfas-pesticides-eau-auxerre"
              className="border border-white/50 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Alerte PFAS Auxerre →
            </Link>
          </div>
        </div>
      </Section>

      {/* Qu'est-ce qu'un osmoseur */}
      <Section className="py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Qu&apos;est-ce qu&apos;un osmoseur à osmose inverse ?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-gray-700 mb-4">
                Un osmoseur utilise le principe de l&apos;osmose inverse : l&apos;eau est forcée à travers
                une membrane semi-perméable dont les pores sont si fins qu&apos;ils ne laissent passer
                que les molécules d&apos;eau pure.
              </p>
              <p className="text-gray-700">
                Cette membrane arrête les PFAS, pesticides, nitrates, métaux lourds, bactéries et
                la grande majorité des contaminants chimiques. Le résidu concentré est évacué, et
                l&apos;eau filtrée est stockée dans un réservoir sous l&apos;évier.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <p className="font-semibold text-blue-900 mb-3">Ce que filtre l&apos;osmoseur</p>
              <ul className="space-y-1.5 text-sm text-blue-800">
                {[
                  "PFAS / polluants éternels : jusqu'à 99%",
                  "Pesticides et herbicides : 95–99%",
                  "Nitrates : 85–95%",
                  "Métaux lourds (plomb, arsenic) : 95–99%",
                  "Chlore et chloramines : 99%",
                  "Bactéries et virus : 99%+",
                  "Microplastiques : 99%",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="font-semibold text-amber-900 mb-2">Important</p>
            <p className="text-amber-800 text-sm">
              Un osmoseur seul ne traite <strong>pas</strong> le calcaire. Il produit de l&apos;eau
              très pure pour la boisson et la cuisine (quelques litres par jour), mais ne protège
              pas les canalisations, le chauffe-eau ou le lave-linge. C&apos;est pourquoi la
              combinaison osmoseur + adoucisseur est recommandée dans l&apos;Yonne, où l&apos;eau est à la
              fois calcaire (23–38 TH) et potentiellement contaminée.
            </p>
          </div>
        </div>
      </Section>

      {/* Tableau comparatif */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Osmoseur vs adoucisseur : lequel choisir ?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700 w-1/3"></th>
                  <th className="text-center p-4 font-semibold text-blue-700">Osmoseur seul</th>
                  <th className="text-center p-4 font-semibold text-primary-700">
                    Adoucisseur seul
                  </th>
                  <th className="text-center p-4 font-bold text-green-700 bg-green-50">
                    Osmoseur + Adoucisseur
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparaison.map((row) => (
                  <tr key={row.critere}>
                    <td className="p-4 font-medium text-gray-700">{row.critere}</td>
                    <td className="p-4 text-center">
                      {row.osmoseur ? (
                        <span className="text-green-600 font-bold text-base">✓</span>
                      ) : (
                        <span className="text-red-400 text-base">✗</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.adoucisseur ? (
                        <span className="text-green-600 font-bold text-base">✓</span>
                      ) : (
                        <span className="text-red-400 text-base">✗</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-green-50">
                      {row.combine ? (
                        <span className="text-green-600 font-bold text-base">✓</span>
                      ) : (
                        <span className="text-red-400 text-base">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Recommandé pour Auxerre et environs suite aux alertes PFAS/pesticides 2024–2025.
          </p>
        </div>
      </Section>

      {/* Nos prestations */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nos prestations dans l&apos;{departementConfig.departementName}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "💧",
                titre: "Installation osmoseur sous-évier",
                desc: "Pose d'un osmoseur 5 à 7 étapes avec robinet dédié. Eau de boisson filtrée à 99%. Durée : 1 à 2 heures.",
                detail: "À partir de 300€ (équipement) + pose",
              },
              {
                icon: "🔬",
                titre: "Filtre à charbon actif sous-évier",
                desc: "Solution intermédiaire efficace contre chlore, pesticides et une partie des PFAS. Installation rapide.",
                detail: "À partir de 150€ (équipement) + pose",
              },
              {
                icon: "🔄",
                titre: "Entretien et remplacement des filtres",
                desc: "Remplacement annuel des cartouches de pré-filtration et membrane semi-perméable pour maintenir l'efficacité.",
                detail: "80–150€/an selon le modèle",
              },
              {
                icon: "✨",
                titre: "Solution combinée osmoseur + adoucisseur",
                desc: "Installation des deux systèmes pour une eau complètement traitée. Recommandé à Auxerre, Sens et Joigny.",
                detail: "Devis sur mesure",
              },
            ].map((item) => (
              <div
                key={item.titre}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-md transition"
              >
                <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                <p className="font-semibold text-gray-900 mb-1">{item.titre}</p>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <p className="text-xs font-medium text-primary-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pourquoi dans l'Yonne */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pourquoi l&apos;osmoseur est particulièrement pertinent dans l&apos;Yonne
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                titre: "PFAS à Auxerre",
                texte:
                  "Auxerre figure parmi les 5 villes les plus touchées de France avec 9 PFAS détectés dont 2 cancérigènes. Un osmoseur filtre jusqu'à 99% des PFAS.",
                lien: "/pfas-pesticides-eau-auxerre",
                label: "En savoir plus →",
              },
              {
                titre: "Eau calcaire + contaminée",
                texte:
                  "Double problématique dans l'Yonne : calcaire élevé (23–38 TH) ET contaminants chimiques. L'osmoseur complète l'adoucisseur.",
                lien: "/qualite-eau-yonne",
                label: "Carte TH par zone →",
              },
              {
                titre: "Pesticide détecté en 2025",
                texte:
                  "En avril 2025, un pesticide cancérigène interdit a été trouvé à 20× la limite légale à Auxerre. Seul l'osmoseur le filtre efficacement.",
                lien: "/pfas-pesticides-eau-auxerre",
                label: "Lire l'alerte →",
              },
            ].map((item) => (
              <div
                key={item.titre}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <p className="font-semibold text-gray-900 mb-2">{item.titre}</p>
                <p className="text-sm text-gray-600 mb-3">{item.texte}</p>
                <Link
                  href={item.lien}
                  className="text-xs font-medium text-primary-600 hover:text-primary-700"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
          <div className="space-y-3">
            {[
              {
                q: "Quelle est la différence entre un osmoseur et un adoucisseur d'eau ?",
                r: "Un adoucisseur traite uniquement le calcaire. Un osmoseur filtre jusqu'à 99% des contaminants chimiques (PFAS, pesticides, nitrates, métaux lourds). Les deux sont complémentaires : l'osmoseur pour l'eau de boisson, l'adoucisseur pour protéger l'installation.",
              },
              {
                q: "Un osmoseur filtre-t-il vraiment les PFAS ?",
                r: "Oui. La membrane d'osmose inverse filtre jusqu'à 99% des PFAS. C'est la technologie recommandée par les associations de consommateurs pour les zones contaminées comme Auxerre.",
              },
              {
                q: "Faut-il un osmoseur ET un adoucisseur dans l'Yonne ?",
                r: "Les deux sont complémentaires. L'osmoseur traite l'eau de boisson (filtre PFAS, pesticides). L'adoucisseur protège toute l'installation contre le calcaire (23–38 TH dans l'Yonne). Sur Auxerre et environs, la combinaison est fortement recommandée.",
              },
              {
                q: "Quel est le prix d'un osmoseur dans l'Yonne ?",
                r: "Un osmoseur sous-évier coûte entre 300€ et 800€ selon le modèle, plus 150€ à 300€ d'installation. L'entretien annuel représente 80 à 150€. Contactez-nous pour un devis gratuit.",
              },
              {
                q: "Combien de temps dure l'installation ?",
                r: "L'installation d'un osmoseur sous-évier prend 1 à 2 heures. Le technicien raccorde l'osmoseur sur l'arrivée d'eau froide, pose un robinet dédié et raccorde l'évacuation. Aucun gros travaux.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-medium text-gray-900 list-none">
                  {item.q}
                  <span className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm">{item.r}</div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Devis */}
      <div id="devis">
        <Section className="bg-gradient-to-r from-blue-50 to-primary-50 py-14">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
              Devis gratuit pour votre osmoseur dans l&apos;Yonne
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Osmoseur seul, adoucisseur seul ou combinaison des deux — nous vous conseillons la
              solution adaptée à votre eau et votre logement. Réponse sous 24h.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <LeadForm />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

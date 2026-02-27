import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: "PFAS et pesticides dans l'eau d'Auxerre — Solutions de filtration",
  description:
    "Auxerre figure parmi les villes les plus touchées par les PFAS en France. 9 polluants éternels détectés dont 2 cancérigènes. Découvrez les solutions de filtration adaptées : osmoseur, filtre, adoucisseur.",
  alternates: {
    canonical: "/pfas-pesticides-eau-auxerre",
  },
  openGraph: {
    title: "PFAS et pesticides dans l'eau d'Auxerre — Solutions de filtration",
    description:
      "9 PFAS détectés dans l'eau d'Auxerre dont 2 cancérigènes. Découvrez les solutions concrètes pour protéger votre foyer.",
    url: `${siteConfig.domain}/pfas-pesticides-eau-auxerre`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description:
    "Installation d'osmoseurs et adoucisseurs d'eau à Auxerre et dans l'Yonne. Solutions contre les PFAS et le calcaire.",
  url: `${siteConfig.domain}/pfas-pesticides-eau-auxerre`,
  telephone: departementConfig.contact.phone,
  email: departementConfig.contact.email,
  areaServed: {
    "@type": "City",
    name: "Auxerre",
    postalCode: "89000",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "L'eau du robinet d'Auxerre est-elle potable malgré les PFAS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'ARS (Agence Régionale de Santé) maintient que l'eau d'Auxerre reste potable selon les normes actuelles. Cependant, Auxerre figure parmi les 5 villes les plus touchées de France avec 9 PFAS détectés dont 2 classés cancérigènes. Un osmoseur à membrane permet de filtrer jusqu'à 99% des PFAS pour une protection maximale.",
      },
    },
    {
      "@type": "Question",
      name: "Un adoucisseur d'eau filtre-t-il les PFAS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Un adoucisseur d'eau traite uniquement le calcaire (ions calcium et magnésium) par échange ionique. Il ne filtre pas les PFAS, pesticides, nitrates ou métaux lourds. Pour éliminer les PFAS, il faut un osmoseur à osmose inverse ou un filtre à charbon actif haute performance.",
      },
    },
    {
      "@type": "Question",
      name: "Comment filtrer les PFAS de l'eau du robinet à Auxerre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La solution la plus efficace est l'osmoseur à osmose inverse, qui filtre jusqu'à 99% des PFAS grâce à une membrane semi-perméable. Les filtres à charbon actif sous-évier offrent une alternative intermédiaire. Dans l'Yonne, il est recommandé de combiner osmoseur (PFAS/pesticides) et adoucisseur (calcaire) pour une eau complètement traitée.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix d'un osmoseur à Auxerre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un osmoseur sous-évier coûte généralement entre 300€ et 800€ à l'achat, avec une installation de 150€ à 300€. L'entretien annuel (remplacement des filtres et membrane) représente environ 80€ à 150€ par an. Contactez-nous pour un devis gratuit adapté à votre logement.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-il arrivé avec les pesticides dans l'eau d'Auxerre en 2025 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En avril 2025, France 3 Bourgogne a révélé la présence d'un pesticide cancérigène interdit par l'Union européenne dans l'eau d'Auxerre, à un taux 20 fois supérieur à la valeur limite autorisée. L'ARS a maintenu l'eau potable mais la Communauté de l'Auxerrois a annoncé la construction de deux nouvelles unités de traitement.",
      },
    },
  ],
};

export default function PfasPesticidesEauAuxerrePage() {
  const faitsLocaux = [
    {
      date: "Septembre 2024",
      source: "France Bleu / Radio France",
      fait: "9 PFAS détectés dans l'eau d'Auxerre, dont 2 classés cancérigènes. Auxerre classée parmi les 5 villes les plus touchées de France.",
    },
    {
      date: "Avril 2025",
      source: "France 3 Bourgogne-Franche-Comté",
      fait: "Un pesticide cancérigène interdit par l'UE découvert dans l'eau d'Auxerre à un taux 20× supérieur à la limite légale.",
    },
    {
      date: "En cours",
      source: "Communauté de l'Auxerrois",
      fait: "Deux nouvelles unités de traitement de l'eau annoncées. Délais de construction : plusieurs années.",
    },
  ];

  const solutions = [
    {
      titre: "Osmoseur à osmose inverse",
      efficacite: "99%",
      cible: "PFAS, pesticides, nitrates, métaux lourds, bactéries",
      limites: "Ne traite pas le calcaire",
      ideal: "Eau de boisson et cuisine",
      couleur: "green",
    },
    {
      titre: "Filtre à charbon actif sous-évier",
      efficacite: "70–90%",
      cible: "PFAS, chlore, pesticides",
      limites: "Efficacité variable selon les PFAS",
      ideal: "Solution intermédiaire",
      couleur: "blue",
    },
    {
      titre: "Adoucisseur d'eau",
      efficacite: "0%",
      cible: "Calcaire uniquement",
      limites: "Ne filtre pas les PFAS ni pesticides",
      ideal: "Protection des équipements",
      couleur: "orange",
    },
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <Section className="bg-red-50 border-b border-red-100 py-14">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[{ label: "PFAS et pesticides — Eau d'Auxerre" }]}
          />
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Alerte qualité eau — Auxerre (89000)
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            PFAS et pesticides dans l&apos;eau d&apos;Auxerre : que faire ?
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Depuis 2024, l&apos;eau du robinet d&apos;Auxerre fait l&apos;objet d&apos;alertes
            répétées : polluants éternels (PFAS), pesticides cancérigènes...{" "}
            <strong>L&apos;ARS maintient l&apos;eau potable, mais de nombreux Auxerrois cherchent
            une solution complémentaire.</strong> Voici ce qu&apos;il faut savoir et ce qu&apos;on peut faire.
          </p>
          <Link
            href="#devis"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold shadow-md"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </Section>

      {/* Faits locaux */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            La situation à Auxerre : les faits
          </h2>
          <div className="space-y-4">
            {faitsLocaux.map((fait, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
              >
                <div className="shrink-0 w-28 text-sm font-semibold text-red-700 pt-0.5">
                  {fait.date}
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">{fait.source}</p>
                  <p className="text-gray-800">{fait.fait}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="font-semibold text-amber-900 mb-2">
              Ce que dit l&apos;ARS Bourgogne-Franche-Comté
            </p>
            <p className="text-amber-800 text-sm">
              L&apos;Agence Régionale de Santé maintient que l&apos;eau distribuée à Auxerre est
              potable au regard des normes réglementaires actuelles. Toutefois, les normes
              européennes sur les PFAS sont en cours de révision à la baisse, et plusieurs
              associations de consommateurs recommandent l&apos;usage de filtres complémentaires
              pour les enfants, femmes enceintes et personnes vulnérables.
            </p>
          </div>
        </div>
      </Section>

      {/* Qu'est-ce que les PFAS */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Qu&apos;est-ce que les PFAS (polluants éternels) ?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                titre: "Des molécules persistantes",
                texte:
                  "Les PFAS (substances per- et polyfluoroalkylées) sont des composés chimiques de synthèse utilisés depuis les années 1950 dans les revêtements antiadhésifs, textiles imperméables, mousses anti-incendie. Ils ne se dégradent pas dans l'environnement.",
              },
              {
                titre: "Présents dans l'eau potable",
                texte:
                  "Ils contaminent les nappes phréatiques et donc l'eau du robinet. Selon l'enquête France Bleu de septembre 2024, 43% des échantillons prélevés en France contiennent des PFAS. Auxerre figure parmi les cas les plus préoccupants.",
              },
              {
                titre: "Risques pour la santé",
                texte:
                  "Certains PFAS sont classés cancérigènes (rein, testicule). D'autres sont suspectés de perturber le système hormonal, immunitaire et reproductif. Les enfants et femmes enceintes sont les plus vulnérables.",
              },
              {
                titre: "Pas de norme contraignante en France",
                texte:
                  "La réglementation française impose une limite globale de 100 ng/L pour la somme des 20 principaux PFAS. L'Union européenne va abaisser ce seuil. D'ici là, la filtration individuelle reste la protection la plus efficace.",
              },
            ].map((item) => (
              <div
                key={item.titre}
                className="bg-white rounded-xl p-5 border border-gray-200"
              >
                <p className="font-semibold text-gray-900 mb-2">{item.titre}</p>
                <p className="text-sm text-gray-600">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Comparatif solutions */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quelles solutions filtrent vraiment les PFAS ?
          </h2>
          <p className="text-gray-700 mb-8">
            Toutes les solutions de traitement d&apos;eau ne se valent pas face aux PFAS. Voici une
            comparaison honnête :
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">Solution</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Filtre PFAS</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Filtre calcaire</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-green-50">
                  <td className="p-4 font-medium text-gray-900">Osmoseur à osmose inverse</td>
                  <td className="p-4 text-green-700 font-semibold">✓ Jusqu&apos;à 99%</td>
                  <td className="p-4 text-red-600">✗ Non</td>
                  <td className="p-4 text-gray-600">Boisson et cuisine</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">Filtre charbon actif sous-évier</td>
                  <td className="p-4 text-amber-700 font-semibold">~ 70–90%</td>
                  <td className="p-4 text-red-600">✗ Non</td>
                  <td className="p-4 text-gray-600">Boisson et cuisine</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="p-4 font-medium text-gray-900">Adoucisseur d&apos;eau</td>
                  <td className="p-4 text-red-600">✗ Non</td>
                  <td className="p-4 text-green-700 font-semibold">✓ Oui</td>
                  <td className="p-4 text-gray-600">Toute l&apos;installation</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-4 font-semibold text-primary-700">
                    Osmoseur + Adoucisseur (recommandé)
                  </td>
                  <td className="p-4 text-green-700 font-semibold">✓ Jusqu&apos;à 99%</td>
                  <td className="p-4 text-green-700 font-semibold">✓ Oui</td>
                  <td className="p-4 text-primary-700 font-medium">Solution complète</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-primary-50 border border-primary-200 rounded-xl p-5">
            <p className="font-semibold text-primary-900 mb-2">
              Notre recommandation pour Auxerre
            </p>
            <p className="text-primary-800 text-sm">
              Face à la double problématique d&apos;Auxerre — PFAS/pesticides <em>et</em> eau très calcaire
              (23–35 TH) — la combinaison osmoseur + adoucisseur offre la protection la plus
              complète. L&apos;osmoseur filtre les contaminants chimiques pour l&apos;eau de boisson,
              l&apos;adoucisseur protège vos équipements du calcaire sur l&apos;ensemble de l&apos;installation.
            </p>
          </div>
        </div>
      </Section>

      {/* Nos services */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nos services à Auxerre et dans l&apos;Yonne
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                titre: "Installation osmoseur",
                desc: "Pose d'un osmoseur sous-évier avec robinet dédié. Eau de boisson filtrée à 99%.",
                href: "/contact",
              },
              {
                titre: "Installation adoucisseur",
                desc: "Protection de toute votre installation contre le calcaire (23–35 TH à Auxerre).",
                href: "/adoucisseur",
              },
              {
                titre: "Entretien & filtres",
                desc: "Remplacement annuel des membranes et cartouches pour maintenir l'efficacité.",
                href: "/entretien-adoucisseur",
              },
            ].map((s) => (
              <Link
                key={s.titre}
                href={s.href}
                className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-2">
                  {s.titre}
                </p>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "L'eau du robinet d'Auxerre est-elle potable malgré les PFAS ?",
                r: "L'ARS maintient que l'eau reste potable selon les normes françaises actuelles. Cependant, Auxerre figure parmi les 5 villes les plus contaminées de France. Un osmoseur offre une protection complémentaire recommandée pour les populations sensibles.",
              },
              {
                q: "Un adoucisseur filtre-t-il les PFAS ?",
                r: "Non. Un adoucisseur traite uniquement le calcaire par échange ionique. Il ne filtre pas les PFAS, pesticides, nitrates ou métaux lourds. Pour les PFAS, il faut un osmoseur à osmose inverse.",
              },
              {
                q: "Comment filtrer les PFAS de l'eau du robinet à Auxerre ?",
                r: "L'osmoseur à osmose inverse est la solution la plus efficace (jusqu'à 99% de filtration). Les filtres à charbon actif sous-évier filtrent 70 à 90% des PFAS selon les modèles. Ces systèmes traitent uniquement l'eau de boisson et cuisine.",
              },
              {
                q: "Quel est le prix d'un osmoseur à Auxerre ?",
                r: "Un osmoseur sous-évier coûte entre 300€ et 800€ selon le modèle, plus 150€ à 300€ d'installation. L'entretien annuel (filtres + membrane) représente 80 à 150€. Contactez-nous pour un devis gratuit.",
              },
              {
                q: "Qu'est-il arrivé avec les pesticides dans l'eau d'Auxerre en 2025 ?",
                r: "En avril 2025, France 3 a révélé la présence d'un pesticide cancérigène interdit par l'UE à un taux 20 fois supérieur à la limite légale. La Communauté de l'Auxerrois a annoncé la construction de deux nouvelles unités de traitement, dont les délais restent incertains.",
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
        <Section className="bg-gray-50 py-14">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
              Protégez votre eau à Auxerre
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Devis gratuit pour l&apos;installation d&apos;un osmoseur, d&apos;un adoucisseur ou d&apos;une
              solution combinée. Réponse sous 24h.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <LeadForm villePreselectionnee="Auxerre" />
            </div>
          </div>
        </Section>
      </div>

      {/* Liens connexes */}
      <Section className="py-10">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/osmoseur-yonne"
            className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 text-sm"
          >
            Osmoseur et filtration dans l&apos;Yonne →
          </Link>
          <Link
            href="/qualite-eau-yonne"
            className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 text-sm"
          >
            Qualité et dureté de l&apos;eau dans l&apos;Yonne →
          </Link>
          <Link
            href="/villes/auxerre"
            className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 text-sm"
          >
            Adoucisseur à Auxerre →
          </Link>
        </div>
      </Section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig, villes } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: "Qualité et dureté de l'eau dans l'Yonne (89) — Carte TH par zone",
  description:
    "L'eau de l'Yonne est calcaire : 23 à 38 TH selon les zones. Découvrez la dureté de l'eau par commune, les effets du calcaire et les solutions adaptées. Alerte PFAS à Auxerre.",
  alternates: {
    canonical: "/qualite-eau-yonne",
  },
  openGraph: {
    title: "Qualité et dureté de l'eau dans l'Yonne (89) — Carte TH par zone",
    description:
      "Dureté de l'eau par zone dans l'Yonne, effets du calcaire et solutions de traitement. PFAS à Auxerre.",
    url: `${siteConfig.domain}/qualite-eau-yonne`,
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Qualité et dureté de l'eau dans l'Yonne",
  description:
    "Guide complet sur la dureté et la qualité de l'eau dans l'Yonne : TH par zone, effets du calcaire, PFAS, solutions de traitement.",
  url: `${siteConfig.domain}/qualite-eau-yonne`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle est la dureté de l'eau dans l'Yonne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dureté de l'eau dans l'Yonne varie entre 23 et 38 TH (titre hydrotimétrique) selon les zones. Le nord du département (Sens, Villeneuve-sur-Yonne) présente l'eau la plus dure, entre 28 et 38 TH. Le centre (Auxerre, Monéteau) affiche 23 à 35 TH. Une eau est considérée dure au-delà de 15 TH.",
      },
    },
    {
      "@type": "Question",
      name: "L'eau de l'Yonne est-elle calcaire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. L'eau de l'Yonne est naturellement calcaire en raison des terrains sédimentaires calcaires typiques de la Bourgogne. Pratiquement toutes les communes du département affichent une dureté supérieure à 15 TH, ce qui nécessite un traitement pour protéger les équipements ménagers.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi installer un adoucisseur dans l'Yonne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avec une dureté entre 23 et 38 TH, l'eau de l'Yonne est dure à très dure. Le calcaire endommage les chauffe-eaux, lave-linges et canalisations, réduit l'efficacité énergétique des résistances et nécessite plus de lessive et de produits d'entretien. Un adoucisseur prolonge la durée de vie des équipements de 30 à 50%.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il des PFAS dans l'eau de l'Yonne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Des PFAS ont été détectés à Auxerre, classée parmi les 5 villes les plus touchées de France (9 PFAS dont 2 cancérigènes, selon France Bleu en septembre 2024). Un pesticide cancérigène interdit a également été trouvé à 20 fois la limite légale en avril 2025. L'ARS maintient l'eau potable. Pour filtrer les PFAS, un osmoseur à osmose inverse est recommandé.",
      },
    },
    {
      "@type": "Question",
      name: "Comment connaître la dureté de l'eau de ma commune dans l'Yonne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dureté de l'eau est disponible sur le site du gouvernement (eaufrance.fr) et sur des services comme toutsurmoneau.fr. Dans l'Yonne, les valeurs typiques sont : Auxerre 23-35 TH, Sens 28-38 TH, Joigny 26-36 TH, Avallon 24-34 TH, Tonnerre 25-35 TH. Nos techniciens peuvent réaliser un test de dureté gratuit lors d'un devis.",
      },
    },
  ],
};

const zones = [
  {
    nom: "Nord Yonne",
    villes: ["Sens", "Villeneuve-sur-Yonne"],
    th: "28–38 TH",
    niveau: "Très dure",
    couleur: "red",
    description:
      "Zone la plus calcaire du département. Sols crétacés au contact du bassin parisien. Entartrage rapide des équipements.",
  },
  {
    nom: "Vallée de l'Yonne",
    villes: ["Joigny", "Migennes"],
    th: "26–37 TH",
    niveau: "Dure à très dure",
    couleur: "orange",
    description:
      "Eau très minéralisée liée aux terrains sédimentaires. Dépôts importants dans chaudières et robinetteries.",
  },
  {
    nom: "Centre Yonne",
    villes: ["Auxerre", "Monéteau"],
    th: "23–35 TH",
    niveau: "Dure",
    couleur: "amber",
    description:
      "Eau calcaire avec alerte PFAS spécifique à Auxerre depuis 2024. Double problématique : calcaire + polluants.",
  },
  {
    nom: "Tonnerrois",
    villes: ["Tonnerre"],
    th: "25–35 TH",
    niveau: "Dure",
    couleur: "amber",
    description:
      "Sols crayeux typiques du Tonnerrois. Dureté stable tout au long de l'année. Calcaire visible sur robinetterie.",
  },
  {
    nom: "Sud Yonne",
    villes: ["Avallon"],
    th: "24–34 TH",
    niveau: "Dure",
    couleur: "yellow",
    description:
      "Eau moins dure que le nord mais toujours au-dessus de 15 TH. Traitement recommandé pour les chauffe-eaux.",
  },
];

const colorMap: Record<string, { bg: string; border: string; badge: string; text: string }> = {
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-800",
    text: "text-red-700",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-800",
    text: "text-orange-700",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-800",
    text: "text-amber-700",
  },
  yellow: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-800",
    text: "text-yellow-700",
  },
};

export default function QualiteEauYonnePage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[{ label: "Qualité de l'eau dans l'Yonne" }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dureté et qualité de l&apos;eau dans l&apos;Yonne (89)
          </h1>
          <p className="text-xl text-primary-100 mb-10">
            L&apos;eau de l&apos;Yonne traverse des terrains calcaires de Bourgogne : de 23 à 38 TH
            selon les zones. Découvrez la carte de la dureté par commune et les solutions adaptées.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "23–38 TH", label: "Dureté dans l'Yonne" },
              { val: "15 TH", label: "Seuil d'eau dure" },
              { val: "100%", label: "Communes concernées" },
              { val: "8 villes", label: "Desservies par nos équipes" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center"
              >
                <div className="text-2xl font-bold mb-1">{s.val}</div>
                <div className="text-primary-100 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Carte TH par zone */}
      <Section className="py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Dureté de l&apos;eau par zone dans l&apos;Yonne
          </h2>
          <p className="text-gray-600 mb-8">
            Titre Hydrotimétrique (TH) mesuré par les services ARS. Valeurs indicatives — peut
            varier selon le réseau de distribution et la saison.
          </p>

          <div className="space-y-4">
            {zones.map((zone) => {
              const c = colorMap[zone.couleur];
              return (
                <div
                  key={zone.nom}
                  className={`${c.bg} ${c.border} border rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-4`}
                >
                  <div className="shrink-0 sm:w-44">
                    <p className="font-semibold text-gray-900">{zone.nom}</p>
                    <div className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                      {zone.niveau}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className={`text-2xl font-bold mb-1 ${c.text}`}>{zone.th}</p>
                    <p className="text-sm text-gray-600 mb-2">{zone.description}</p>
                    <p className="text-xs text-gray-500">
                      {zone.villes.join(", ")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Légende TH */}
          <div className="mt-8 bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Échelle TH de référence</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              {[
                { label: "Douce", th: "< 15 TH", color: "bg-green-100 text-green-800" },
                { label: "Moyennement dure", th: "15–25 TH", color: "bg-yellow-100 text-yellow-800" },
                { label: "Dure", th: "25–32 TH", color: "bg-orange-100 text-orange-800" },
                { label: "Très dure", th: "> 32 TH", color: "bg-red-100 text-red-800" },
              ].map((item) => (
                <div key={item.label} className={`${item.color} rounded-lg px-3 py-2`}>
                  <p className="font-semibold">{item.label}</p>
                  <p>{item.th}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Effets du calcaire */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Les effets du calcaire sur votre quotidien
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                icon: "🔥",
                titre: "Chauffe-eau & chaudière",
                texte: "1 mm de calcaire = +10% de consommation d'énergie. Durée de vie réduite de 30 à 50%.",
              },
              {
                icon: "🧺",
                titre: "Lave-linge & lave-vaisselle",
                texte: "Résistances encrassées, pannes prématurées. Surconsommation de lessive pouvant atteindre 50%.",
              },
              {
                icon: "🚿",
                titre: "Peau & cheveux",
                texte: "Eau calcaire assèche la peau, terne les cheveux et favorise le développement de l'eczéma.",
              },
              {
                icon: "🪛",
                titre: "Robinetterie & joints",
                texte: "Dépôts blancs sur robinets, joints qui s'abîment, pression réduite dans les canalisations.",
              },
              {
                icon: "☕",
                titre: "Eau de boisson & cafetières",
                texte: "Goût altéré, détartrage régulier nécessaire. Durée de vie des cafetières réduite.",
              },
              {
                icon: "💶",
                titre: "Budget annuel impacté",
                texte: "Produits d'entretien, énergie, réparations : le calcaire coûte en moyenne 300 à 600€/an.",
              },
            ].map((item) => (
              <div
                key={item.titre}
                className="bg-white rounded-xl p-5 border border-gray-200"
              >
                <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                <p className="font-semibold text-gray-900 mb-1">{item.titre}</p>
                <p className="text-sm text-gray-600">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Alerte PFAS Auxerre */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0" aria-hidden="true">⚠️</div>
              <div>
                <p className="font-bold text-red-900 text-lg mb-2">
                  Alerte spécifique — Auxerre : PFAS et pesticides dans l&apos;eau
                </p>
                <p className="text-red-800 text-sm mb-4">
                  Depuis septembre 2024, Auxerre figure parmi les 5 villes les plus touchées de
                  France par les PFAS (polluants éternels). 9 PFAS ont été détectés dont 2
                  cancérigènes. En avril 2025, un pesticide interdit par l&apos;UE a été trouvé à
                  20 fois la limite légale. L&apos;ARS maintient l&apos;eau potable, mais la
                  filtration par osmoseur est fortement recommandée.
                </p>
                <Link
                  href="/pfas-pesticides-eau-auxerre"
                  className="inline-block bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-800 transition"
                >
                  En savoir plus sur les PFAS à Auxerre →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Solutions */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Les solutions pour traiter l&apos;eau dans l&apos;Yonne
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                titre: "Adoucisseur d'eau",
                pour: "Calcaire uniquement",
                desc: "Élimine les ions calcium et magnésium responsables du tartre. Protège l'ensemble de votre installation.",
                href: "/adoucisseur",
                principal: true,
              },
              {
                titre: "Osmoseur",
                pour: "PFAS, pesticides, nitrates",
                desc: "Filtre jusqu'à 99% des contaminants chimiques. Indispensable à Auxerre suite aux alertes PFAS.",
                href: "/osmoseur-yonne",
                principal: false,
              },
              {
                titre: "Combinaison des deux",
                pour: "Solution complète",
                desc: "Osmoseur (eau de boisson) + adoucisseur (installation). Recommandé sur Auxerre et environs.",
                href: "/contact",
                principal: false,
              },
            ].map((s) => (
              <Link
                key={s.titre}
                href={s.href}
                className={`group block rounded-xl p-5 border transition hover:shadow-md ${
                  s.principal
                    ? "bg-primary-600 border-primary-700 text-white hover:bg-primary-700"
                    : "bg-white border-gray-200 hover:border-primary-400"
                }`}
              >
                <p className={`font-semibold mb-1 ${s.principal ? "text-white" : "text-gray-900 group-hover:text-primary-600 transition"}`}>
                  {s.titre}
                </p>
                <p className={`text-xs font-medium mb-2 ${s.principal ? "text-primary-200" : "text-primary-600"}`}>
                  {s.pour}
                </p>
                <p className={`text-sm ${s.principal ? "text-primary-100" : "text-gray-600"}`}>
                  {s.desc}
                </p>
              </Link>
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
                q: "Quelle est la dureté de l'eau dans l'Yonne ?",
                r: "La dureté varie entre 23 et 38 TH selon les zones. Le nord (Sens, Villeneuve-sur-Yonne) est le plus calcaire (28–38 TH), le centre (Auxerre) affiche 23–35 TH. La totalité du département dépasse le seuil d'eau dure de 15 TH.",
              },
              {
                q: "L'eau de l'Yonne est-elle calcaire ?",
                r: "Oui. Les terrains sédimentaires calcaires de Bourgogne traversés par les réseaux d'alimentation génèrent une eau naturellement dure dans tout le département, ce qui nécessite un traitement pour préserver les équipements.",
              },
              {
                q: "Pourquoi installer un adoucisseur dans l'Yonne ?",
                r: "Avec 23 à 38 TH, l'eau de l'Yonne est dure à très dure. Le calcaire endommage les équipements, augmente la consommation d'énergie et de lessive. Un adoucisseur prolonge la durée de vie des appareils de 30 à 50% et génère des économies annuelles estimées à 300–600€.",
              },
              {
                q: "Y a-t-il des PFAS dans l'eau de l'Yonne ?",
                r: "Des PFAS ont été détectés à Auxerre (classée parmi les 5 villes les plus touchées de France). Un adoucisseur ne filtre pas les PFAS. Pour les éliminer, un osmoseur à osmose inverse est nécessaire.",
              },
              {
                q: "Comment connaître la dureté de l'eau de ma commune dans l'Yonne ?",
                r: "Nos techniciens réalisent gratuitement un test de dureté lors de leur visite. Vous pouvez aussi consulter toutsurmoneau.fr ou eaufrance.fr avec votre code commune.",
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

      {/* Villes desservies */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nos interventions dans l&apos;{departementConfig.departementName}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {villes.map((ville) => (
              <Link
                key={ville.slug}
                href={`/villes/${ville.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-primary-400 hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition text-sm">
                  {ville.nom}
                </p>
                <p className="text-xs text-gray-500 mt-1">{ville.codePostal}</p>
                {ville.dureteEau && (
                  <p className="text-xs text-primary-600 mt-1 font-medium">{ville.dureteEau}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Testez la dureté de votre eau gratuitement
          </h2>
          <p className="text-gray-600 mb-6">
            Nos techniciens se déplacent dans tout l&apos;{departementConfig.departementName} pour
            analyser votre eau et vous proposer la solution adaptée.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-md"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </Section>
    </>
  );
}

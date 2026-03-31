import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Adoucisseur d'eau dans l'Yonne (89) — Installation, devis gratuit",
  description:
    "Installez un adoucisseur d'eau dans l'Yonne : eau dure 23-38 TH à Auxerre, Sens, Joigny, Avallon. Devis gratuit sous 24h, intervention dans tout le département 89.",
  alternates: {
    canonical: "/adoucisseur",
  },
  openGraph: {
    title: "Adoucisseur d'eau dans l'Yonne (89) — Installation, devis gratuit",
    description:
      "Installation d'adoucisseur dans l'Yonne : eau dure 23-38 TH. Auxerre, Sens, Joigny, Avallon. Devis gratuit sous 24h.",
    url: `${siteConfig.domain}/adoucisseur`,
  },
};

const faqItems = [
  {
    question: "Pourquoi l'eau est-elle calcaire dans l'Yonne ?",
    answer:
      "L'eau dans l'Yonne est calcaire en raison de la géologie bourguignonne. Les nappes souterraines traversent des formations calcaires et crayeuses typiques du bassin parisien et du Morvan qui enrichissent l'eau en calcium et magnésium. La dureté varie de 23 à 38 TH selon les communes : plus élevée dans le Nord Yonne (Sens, 28-38 TH), plus modérée en Sud Yonne (Avallon, 24-34 TH).",
  },
  {
    question: "Combien coûte un adoucisseur d'eau dans l'Yonne ?",
    answer:
      "Le prix d'un adoucisseur installé dans l'Yonne varie entre 900 € et 2 500 € fourni et posé selon la capacité de l'appareil, le nombre d'occupants et la dureté locale de l'eau. Nous établissons un devis gratuit et personnalisé sous 24h. Pour Auxerre et sa double problématique (calcaire + PFAS), la combinaison adoucisseur + osmoseur représente la solution la plus complète.",
  },
  {
    question: "L'eau d'Auxerre est-elle particulièrement dure ?",
    answer:
      "L'eau d'Auxerre présente une dureté de 23 à 35 TH, classée dans la catégorie 'dure'. En plus du calcaire, Auxerre figure parmi les 5 villes de France les plus touchées par les PFAS (9 polluants détectés dont 2 cancérigènes). Pour Auxerre, nous recommandons une solution combinée : adoucisseur pour le calcaire + osmoseur pour filtrer les PFAS et pesticides.",
  },
  {
    question: "Peut-on installer un adoucisseur à Sens ou Joigny ?",
    answer:
      "Oui, nous intervenons dans toutes les communes de l'Yonne. Le Nord Yonne (Sens 28-38 TH, Joigny 26-37 TH) présente l'eau la plus dure du département. À ces niveaux, un adoucisseur est fortement recommandé pour protéger vos équipements électroménagers, canalisations et chauffe-eau. Devis gratuit sous 24h.",
  },
  {
    question: "Peut-on installer un adoucisseur en appartement dans l'Yonne ?",
    answer:
      "Oui, l'installation est possible en appartement dès lors qu'on accède à l'arrivée d'eau froide du logement. Nos techniciens interviennent régulièrement dans les immeubles d'Auxerre, Sens et des communes de l'Yonne. Dans certaines copropriétés, une solution centralisée peut être envisagée avec l'accord du syndic.",
  },
  {
    question: "Quelle dureté d'eau recommandez-vous en sortie d'adoucisseur ?",
    answer:
      "Un adoucisseur bien réglé produit une eau entre 8 et 15 TH. En dessous de 8 TH, l'eau peut être légèrement agressive pour les canalisations en cuivre. Nos techniciens règlent l'appareil précisément selon la dureté initiale mesurée chez vous et vos préférences d'utilisation.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Installation d'adoucisseur d'eau",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    telephone: siteConfig.contact.phone,
    url: siteConfig.domain,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Yonne",
  },
  description:
    "Installation d'adoucisseurs d'eau dans le département de l'Yonne. Devis gratuit et personnalisé.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function AdoucisseurPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <Section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span>Installation adoucisseur d'eau dans l'Yonne</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Adoucisseur d'eau dans l'Yonne (89)
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          L'eau de l'Yonne est calcaire (23 à 38 TH selon les zones), ce qui peut poser des
          problèmes au quotidien. Un adoucisseur d'eau permet de réduire la dureté de l'eau,
          protégeant ainsi votre installation et améliorant votre confort. Découvrez tout ce
          qu'il faut savoir sur l'adoucisseur d'eau et comment choisir le modèle adapté à vos besoins.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi installer un adoucisseur d'eau dans l'Yonne ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                L'eau distribuée dans l'
                {siteConfig.departement.departementName} présente souvent une dureté élevée,
                mesurée en degrés français (°fH). Cette dureté varie selon les communes, mais elle
                dépasse fréquemment 25°fH, ce qui classe l'eau comme "dure" à "très dure".
              </p>
              <p>
                Cette eau calcaire peut causer plusieurs problèmes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dépôts de calcaire dans les canalisations et les appareils</li>
                <li>Usure prématurée des appareils électroménagers (lave-linge, lave-vaisselle, chauffe-eau)</li>
                <li>Eau désagréable pour la peau et les cheveux</li>
                <li>Consommation accrue de produits lessiviels et d'entretien</li>
                <li>Coûts de réparation et de remplacement d'équipements</li>
              </ul>
              <p>
                Installer un adoucisseur d'eau dans l'
                {siteConfig.departement.departementName} permet de résoudre ces problèmes en réduisant
                la dureté de l'eau, généralement à un niveau optimal entre 8 et 12°fH. Pour maintenir
                votre adoucisseur en bon état, découvrez notre{" "}
                <Link href="/entretien-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  service d'entretien d'adoucisseur dans l'Yonne
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment fonctionne un adoucisseur d'eau ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Un adoucisseur d'eau fonctionne selon le principe de l'échange d'ions. L'eau
                traverse une résine échangeuse d'ions chargée en sodium. Les ions calcium et
                magnésium (responsables de la dureté) sont échangés contre des ions sodium,
                adoucissant ainsi l'eau.
              </p>
              <p>
                Le processus se déroule en plusieurs étapes :
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Adoucissement :</strong> L'eau dure traverse la résine, qui retient les
                  ions calcium et magnésium.
                </li>
                <li>
                  <strong>Régénération :</strong> Lorsque la résine est saturée, l'adoucisseur se
                  régénère automatiquement en utilisant une solution de saumure (eau salée).
                </li>
                <li>
                  <strong>Rinçage :</strong> L'eau de rinçage est évacuée, et l'adoucisseur est
                  prêt pour un nouveau cycle.
                </li>
              </ol>
              <p>
                La régénération se fait généralement la nuit, lorsque la consommation d'eau est
                faible, et dure environ 1 à 2 heures.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quel type d'adoucisseur choisir ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Il existe plusieurs types d'adoucisseurs d'eau, chacun adapté à des besoins
                spécifiques :
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Adoucisseur à résine échangeuse d'ions
                </h3>
                <p>
                  C'est le type le plus courant. Il nécessite du sel pour la régénération et
                  convient à la plupart des foyers. Il existe des modèles manuels, semi-automatiques
                  et automatiques (recommandés).
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Adoucisseur au CO2
                </h3>
                <p>
                  Alternative écologique qui n'utilise pas de sel. Le CO2 transforme le calcaire
                  en bicarbonate, qui reste soluble dans l'eau. Plus respectueux de
                  l'environnement, mais généralement plus coûteux à l'achat.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Adoucisseur magnétique ou électronique
                </h3>
                <p>
                  Ces systèmes modifient la structure du calcaire sans le supprimer. Moins efficace
                  que les adoucisseurs à résine, ils conviennent pour des besoins moins importants.
                </p>
              </div>

              <p>
                Pour choisir le bon adoucisseur, il est essentiel de prendre en compte :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Le nombre de personnes dans le foyer</li>
                <li>La consommation d'eau quotidienne</li>
                <li>La dureté de l'eau dans votre commune</li>
                <li>L'espace disponible pour l'installation</li>
                <li>Votre budget</li>
              </ul>
              <p>
                Pour connaître les tarifs détaillés, consultez notre page sur les{" "}
                <Link href="/prix-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  prix d'un adoucisseur d'eau dans l'Yonne
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes sur l'adoucisseur dans l'Yonne
            </h2>
            <FAQ items={faqItems} />
          </section>

          <section>
            <RelatedServices currentService="adoucisseur" />
          </section>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Demandez un devis pour votre adoucisseur d'eau
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Obtenez un devis gratuit et personnalisé pour l'installation d'un adoucisseur d'eau
            adapté à vos besoins dans l'Yonne.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}














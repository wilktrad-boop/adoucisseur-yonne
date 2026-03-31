import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import { siteConfig, villes } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: "Détartrage et traitement anti-calcaire dans l'Yonne (89)",
  description:
    "Détartrage professionnel de chauffe-eau, canalisations et robinetterie dans l'Yonne. Traitement curatif du calcaire à Auxerre, Sens, Joigny. Prévention avec adoucisseur d'eau. Devis gratuit.",
  alternates: {
    canonical: "/detartrage-yonne",
  },
  openGraph: {
    title: "Détartrage et traitement anti-calcaire dans l'Yonne",
    description:
      "Détartrage professionnel et solutions anti-calcaire durables dans l'Yonne. Intervention rapide et devis gratuit.",
    url: `${siteConfig.domain}/detartrage-yonne`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Détartrage et traitement anti-calcaire",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    url: siteConfig.domain,
    telephone: departementConfig.contact.phone,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: `${departementConfig.departementName} (${departementConfig.departementNumber})`,
  },
  description:
    "Détartrage professionnel de chauffe-eau, canalisations et robinetterie dans l'Yonne. Installation d'adoucisseur pour prévenir le calcaire.",
};

const faqItems = [
  {
    question: "Combien coûte un détartrage de chauffe-eau dans l'Yonne ?",
    answer:
      "Un détartrage de chauffe-eau coûte entre 150 et 300€ dans l'Yonne, selon la capacité du ballon et l'épaisseur des dépôts. Pour un chauffe-eau très entartré (>5 ans sans entretien dans l'Yonne), le coût peut atteindre 400€. Un adoucisseur (800–2 000€) évite ce détartrage récurrent et protège tous vos équipements.",
  },
  {
    question: "À quelle fréquence faut-il détartrer dans l'Yonne ?",
    answer:
      "Avec une eau à 25–38 TH dans l'Yonne, le détartrage est nécessaire tous les 2 à 3 ans pour un chauffe-eau, et tous les 1 à 2 ans pour les robinets et pommeaux de douche. Sans adoucisseur, le tartre s'accumule rapidement et peut réduire la durée de vie de vos équipements de 30 à 50%.",
  },
  {
    question: "Comment savoir si mes canalisations sont entartrées ?",
    answer:
      "Plusieurs signes indiquent un entartrage : baisse de pression d'eau, chauffe-eau qui met plus de temps à chauffer, traces blanches sur la robinetterie, bruit dans les canalisations, consommation d'énergie en hausse. Si vous constatez un ou plusieurs de ces signes, contactez-nous pour un diagnostic gratuit.",
  },
  {
    question: "Un adoucisseur évite-t-il le détartrage ?",
    answer:
      "Oui. Un adoucisseur réduit la dureté de l'eau à 0–5 TH, ce qui élimine la formation de tartre. Après l'installation d'un adoucisseur, plus besoin de détartrer régulièrement. C'est la solution préventive la plus efficace et la plus économique sur le long terme dans l'Yonne.",
  },
  {
    question: "Peut-on détartrer soi-même son chauffe-eau ?",
    answer:
      "Le détartrage d'un chauffe-eau nécessite de vidanger le ballon, retirer la résistance et gratter le tartre accumulé. C'est faisable pour un bricoleur averti, mais risqué : un mauvais remontage peut provoquer des fuites. Nous recommandons de faire appel à un professionnel, surtout pour les ballons de plus de 100L.",
  },
  {
    question: "Le détartrage améliore-t-il la qualité de l'eau ?",
    answer:
      "Le détartrage améliore la pression et le débit d'eau, mais ne change pas sa composition chimique. L'eau reste calcaire après un détartrage. Pour réellement améliorer la qualité de l'eau (réduire le calcaire), un adoucisseur est nécessaire. Pour filtrer les polluants (PFAS, pesticides), un osmoseur est recommandé.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const signes = [
  {
    titre: "Baisse de pression d'eau",
    desc: "Le calcaire obstrue progressivement les canalisations et réduit le débit.",
    icon: "&#x1F6BF;",
  },
  {
    titre: "Chauffe-eau moins performant",
    desc: "Le tartre sur la résistance augmente le temps de chauffe et la consommation d'énergie.",
    icon: "&#x1F321;",
  },
  {
    titre: "Traces blanches sur la robinetterie",
    desc: "Dépôts visibles de calcaire sur les robinets, pommeaux de douche et parois.",
    icon: "&#x1F6B0;",
  },
  {
    titre: "Bruits dans les canalisations",
    desc: "Le rétrécissement des tuyaux par le calcaire peut provoquer des sifflements.",
    icon: "&#x1F50A;",
  },
  {
    titre: "Facture d'énergie en hausse",
    desc: "Un chauffe-eau entartré consomme jusqu'à 15% d'énergie en plus.",
    icon: "&#x1F4B8;",
  },
  {
    titre: "Appareils qui tombent en panne",
    desc: "Lave-linge, lave-vaisselle : le calcaire use prématurément les résistances.",
    icon: "&#x26A0;",
  },
];

const prestations = [
  {
    titre: "Détartrage chauffe-eau",
    desc: "Vidange, nettoyage de la résistance et de la cuve, vérification de l'anode. Durée : 1 à 2h.",
    prix: "150–300€",
  },
  {
    titre: "Détartrage canalisations",
    desc: "Traitement chimique ou mécanique des canalisations entartrées pour rétablir le débit normal.",
    prix: "200–500€",
  },
  {
    titre: "Détartrage robinetterie",
    desc: "Nettoyage des robinets, pommeaux de douche, aérateurs. Remplacement si nécessaire.",
    prix: "50–150€",
  },
  {
    titre: "Diagnostic + adoucisseur",
    desc: "Diagnostic complet de l'entartrage + installation d'un adoucisseur pour prévenir la récidive.",
    prix: "Sur devis",
  },
];

export default function DetartragePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <Section className="bg-gradient-to-br from-orange-600 via-orange-700 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Détartrage dans l'Yonne" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Détartrage et traitement anti-calcaire dans l&apos;Yonne
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Chauffe-eau entartré, pression en baisse, traces blanches ? L&apos;eau de l&apos;Yonne
            (23 à 38 TH) est l&apos;une des plus calcaires de Bourgogne. Intervention rapide
            pour détartrer vos équipements et solutions durables avec un adoucisseur.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#devis"
              className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/adoucisseur"
              className="border border-white/50 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Prévenir avec un adoucisseur →
            </Link>
          </div>
        </div>
      </Section>

      {/* Signes */}
      <Section className="py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Les signes d&apos;un problème de calcaire
          </h2>
          <p className="text-gray-600 mb-8">
            Avec une dureté de 23 à 38 TH dans l&apos;Yonne, le tartre s&apos;accumule rapidement.
            Voici les signes qui doivent vous alerter :
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {signes.map((signe) => (
              <div
                key={signe.titre}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <div
                  className="text-2xl mb-2"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: signe.icon }}
                />
                <p className="font-semibold text-gray-900 mb-1">{signe.titre}</p>
                <p className="text-sm text-gray-600">{signe.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Détartrage vs prévention */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Détartrage curatif ou adoucisseur préventif ?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-4">
                Détartrage (curatif)
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">&#8594;</span>
                  Traite le tartre déjà accumulé
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">&#8594;</span>
                  Nécessaire tous les 2–3 ans dans l&apos;Yonne
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">&#8594;</span>
                  150–500€ par intervention
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">&#8594;</span>
                  Ne protège pas contre le futur calcaire
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Coût sur 10 ans : 750–2 500€ (détartrages répétés)
              </p>
            </div>
            <div className="bg-white border-2 border-green-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Adoucisseur (préventif)
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold shrink-0">&#10003;</span>
                  Élimine le calcaire en continu
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold shrink-0">&#10003;</span>
                  Plus besoin de détartrer
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold shrink-0">&#10003;</span>
                  800–2 000€ une seule fois + entretien
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold shrink-0">&#10003;</span>
                  Protège tous les équipements
                </li>
              </ul>
              <p className="mt-4 text-xs text-green-700 font-medium">
                Coût sur 10 ans : 1 500–3 000€ (achat + entretien). Économie nette.
              </p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 text-sm">
            Notre recommandation : un détartrage initial suivi de l&apos;installation d&apos;un
            adoucisseur pour éviter la récidive.
          </p>
        </div>
      </Section>

      {/* Prestations */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nos prestations de détartrage dans l&apos;Yonne
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {prestations.map((item) => (
              <div
                key={item.titre}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-900 mb-1">{item.titre}</p>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm font-medium text-primary-600">{item.prix}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Zones d'intervention */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Zones d&apos;intervention dans l&apos;Yonne
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

      {/* FAQ */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* Services liés */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos autres services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/adoucisseur", title: "Installation adoucisseur", desc: "Prévenir le calcaire durablement" },
              { href: "/adoucisseur-ecologique-yonne", title: "Adoucisseur écologique", desc: "Solutions sans sel (CO2, magnétique)" },
              { href: "/entretien-adoucisseur", title: "Entretien", desc: "Maintenance et révision régulière" },
              { href: "/osmoseur-yonne", title: "Osmoseur et filtration", desc: "Filtre PFAS, pesticides, nitrates" },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block bg-white border border-gray-200 rounded-xl p-4 hover:border-primary-400 hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-1 text-sm">
                  {service.title}
                </p>
                <p className="text-xs text-gray-600">{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link href="/qualite-eau-yonne" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 text-sm">
              Qualité de l&apos;eau dans l&apos;Yonne →
            </Link>
            <Link href="/guides" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 text-sm">
              Guides et conseils →
            </Link>
            <Link href="/prix-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 text-sm">
              Prix et devis →
            </Link>
          </div>
        </div>
      </Section>

      {/* Devis */}
      <div id="devis">
        <Section className="py-14">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
              Devis gratuit pour votre détartrage
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Détartrage ponctuel ou installation d&apos;un adoucisseur pour une solution
              durable — nous vous conseillons selon votre situation. Réponse sous 24h.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <LeadForm />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

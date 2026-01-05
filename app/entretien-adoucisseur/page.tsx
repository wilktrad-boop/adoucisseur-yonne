import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Entretien adoucisseur d'eau dans l'Yonne - Maintenance et révision",
  description:
    "Entretien régulier de votre adoucisseur d'eau dans l'Yonne. Fréquence, signes d'alerte, coûts. Service d'entretien professionnel à Auxerre, Sens, Joigny et dans tout le 89.",
  alternates: {
    canonical: "/entretien-adoucisseur",
  },
  openGraph: {
    title: "Entretien adoucisseur d'eau dans l'Yonne - Maintenance et révision",
    description:
      "Entretien régulier de votre adoucisseur d'eau dans l'Yonne. Service professionnel disponible.",
    url: `${siteConfig.domain}/entretien-adoucisseur`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Entretien d'adoucisseur d'eau",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
  },
  areaServed: {
    "@type": "State",
    name: siteConfig.departement.departementName,
  },
  description:
    "Service d'entretien et de maintenance d'adoucisseurs d'eau dans le département de l'Yonne.",
};

export default function EntretienPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      
      <Section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Entretien d'adoucisseur d'eau dans l'Yonne
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Un entretien régulier est essentiel pour garantir le bon fonctionnement et la durée de vie
          de votre adoucisseur d'eau. Découvrez pourquoi l'entretien est important, à quelle
          fréquence le réaliser, et comment notre service d'entretien professionnel peut vous
          accompagner dans tout le département.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              À quelle fréquence faire entretenir son adoucisseur ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                La fréquence d'entretien d'un adoucisseur d'eau dépend de plusieurs facteurs :
                la dureté de l'eau, la consommation, et le modèle de l'appareil. En général, il
                est recommandé de faire entretenir votre adoucisseur :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Une fois par an minimum</strong> pour une vérification générale et un
                  nettoyage complet
                </li>
                <li>
                  <strong>Tous les 6 mois</strong> si vous avez une eau très dure (supérieure à
                  25°fH) ou une consommation importante
                </li>
                <li>
                  <strong>Immédiatement</strong> en cas de signe de dysfonctionnement ou de baisse
                  de performance
                </li>
              </ul>
              <p>
                En plus de l'entretien professionnel, vous devez vérifier régulièrement le niveau
                de sel dans le bac à sel et le recharger si nécessaire. La fréquence de recharge
                dépend de votre consommation et de la dureté de l'eau.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Les signes qui montrent qu'un entretien est nécessaire
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Plusieurs signes peuvent indiquer que votre adoucisseur nécessite un entretien ou
                une intervention :
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Eau moins douce qu'à l'habitude :</strong> Vous remarquez des dépôts
                    de calcaire ou une sensation différente de l'eau
                  </li>
                  <li>
                    <strong>Consommation de sel anormale :</strong> Le sel se consomme plus
                    rapidement que d'habitude
                  </li>
                  <li>
                    <strong>Bruit inhabituel :</strong> L'adoucisseur fait des bruits étranges
                    lors de la régénération
                  </li>
                  <li>
                    <strong>Eau trouble ou goût étrange :</strong> L'eau adoucie présente un
                    aspect ou un goût inhabituel
                  </li>
                  <li>
                    <strong>Régénération qui ne fonctionne plus :</strong> L'appareil ne se
                    régénère plus automatiquement
                  </li>
                  <li>
                    <strong>Fuite d'eau :</strong> Présence d'eau autour de l'adoucisseur
                  </li>
                </ul>
              </div>
              <p>
                Si vous observez l'un de ces signes, il est recommandé de faire appel à un
                professionnel pour un diagnostic et un entretien. Si votre appareil ne fonctionne plus correctement, découvrez aussi notre{" "}
                <Link href="/depannage-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  service de dépannage d'adoucisseur dans l'Yonne
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Entretien d'adoucisseur dans l'Yonne : comment ça se passe ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Un entretien professionnel d'adoucisseur comprend plusieurs étapes essentielles :
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    1. Vérification du niveau de sel
                  </h3>
                  <p>
                    Le professionnel vérifie le niveau de sel dans le bac et s'assure que la
                    qualité du sel est adaptée. Il peut également nettoyer le bac à sel si
                    nécessaire.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    2. Nettoyage et vérification de la résine
                  </h3>
                  <p>
                    La résine échangeuse d'ions est vérifiée pour s'assurer qu'elle fonctionne
                    correctement. Un nettoyage peut être effectué si nécessaire. La résine doit
                    être remplacée tous les 5 à 10 ans selon l'utilisation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    3. Contrôle de la programmation
                  </h3>
                  <p>
                    Le professionnel vérifie que la programmation de la régénération est correcte
                    et adaptée à votre consommation. Les réglages peuvent être ajustés si nécessaire.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    4. Test de la dureté de l'eau
                  </h3>
                  <p>
                    Un test de dureté est effectué pour vérifier que l'adoucisseur fonctionne
                    correctement et que l'eau est bien adoucie.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    5. Vérification générale
                  </h3>
                  <p>
                    Le professionnel vérifie l'ensemble de l'installation : raccordements, fuites
                    éventuelles, état général de l'appareil.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contrat d'entretien : une solution pratique
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Pour garantir un entretien régulier et éviter les oublis, vous pouvez souscrire à
                un contrat d'entretien. Ce contrat comprend généralement :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Interventions d'entretien programmées (1 à 2 fois par an)</li>
                <li>Vérification et nettoyage complet</li>
                <li>Recharge de sel si nécessaire</li>
                <li>Intervention d'urgence en cas de problème</li>
                <li>Conseils et suivi personnalisé</li>
              </ul>
              <p>
                Un contrat d'entretien vous permet de bénéficier d'un suivi régulier et de
                préserver la durée de vie de votre adoucisseur tout en évitant les pannes
                coûteuses.
              </p>
            </div>
          </section>

          <section>
            <RelatedServices currentService="entretien-adoucisseur" />
          </section>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Programmez l'entretien de votre adoucisseur
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Contactez-nous pour programmer l'entretien de votre adoucisseur d'eau dans l'Yonne. Nous
            vous proposons un service professionnel adapté à vos besoins.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}














import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dépannage adoucisseur d'eau dans l'Yonne - Réparation et intervention d'urgence",
  description:
    "Service de dépannage et réparation d'adoucisseurs d'eau dans l'Yonne. Intervention rapide pour tous types de pannes. Disponible à Auxerre, Sens, Joigny, Avallon et tout le 89.",
  alternates: {
    canonical: "/depannage-adoucisseur",
  },
  openGraph: {
    title: "Dépannage adoucisseur d'eau dans l'Yonne - Réparation et intervention d'urgence",
    description:
      "Service de dépannage et réparation d'adoucisseurs d'eau dans l'Yonne. Intervention rapide.",
    url: `${siteConfig.domain}/depannage-adoucisseur`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Dépannage d'adoucisseur d'eau",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
  },
  areaServed: {
    "@type": "State",
    name: siteConfig.departement.departementName,
  },
  description:
    "Service de dépannage et réparation d'adoucisseurs d'eau dans le département de l'Yonne. Intervention rapide.",
};

export default function DepannagePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      
      <Section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dépannage d'adoucisseur d'eau dans l'Yonne
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Votre adoucisseur d'eau ne fonctionne plus correctement ? Notre service de dépannage
          intervient rapidement dans tout l'{siteConfig.departement.departementName} pour diagnostiquer et réparer votre appareil.
          Intervention d'urgence disponible pour les pannes critiques.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Problèmes courants avec un adoucisseur d'eau
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Plusieurs problèmes peuvent affecter le fonctionnement d'un adoucisseur d'eau.
                Voici les pannes les plus courantes :
              </p>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    L'adoucisseur ne se régénère plus
                  </h3>
                  <p>
                    Causes possibles : problème de programmation, vanne défectueuse, résine
                    saturée, problème électrique. Un professionnel peut diagnostiquer et réparer
                    le problème.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Eau non adoucie ou mal adoucie
                  </h3>
                  <p>
                    L'eau reste dure malgré l'adoucisseur. Causes possibles : résine usée ou
                    saturée, problème de régénération, réglages incorrects, vanne défectueuse.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Fuite d'eau
                  </h3>
                  <p>
                    Présence d'eau autour de l'adoucisseur. Causes possibles : joint défectueux,
                    raccordement mal serré, vanne qui fuit, réservoir fissuré. Intervention
                    urgente recommandée.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Consommation excessive de sel
                  </h3>
                  <p>
                    Le sel se consomme trop rapidement. Causes possibles : régénération trop
                    fréquente, problème de programmation, fuite dans le bac à sel.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Bruit anormal
                  </h3>
                  <p>
                    L'adoucisseur fait des bruits inhabituels. Causes possibles : problème de
                    vanne, résine qui bouge, problème de pompe, encrassement.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Eau salée au robinet
                  </h3>
                  <p>
                    L'eau a un goût salé. Causes possibles : problème de régénération, vanne qui
                    reste ouverte, résine saturée. Problème à résoudre rapidement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diagnostic et réparation par un professionnel
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                En cas de panne, il est recommandé de faire appel à un professionnel qui pourra :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Diagnostiquer le problème :</strong> Identification précise de la cause
                  de la panne grâce à un diagnostic complet
                </li>
                <li>
                  <strong>Proposer une solution :</strong> Réparation, remplacement de pièces, ou
                  remplacement de l'appareil si nécessaire
                </li>
                <li>
                  <strong>Intervenir rapidement :</strong> Intervention sous 24 à 48h pour les
                  pannes non urgentes, intervention d'urgence disponible
                </li>
                <li>
                  <strong>Garantir la réparation :</strong> Travaux garantis avec pièces de
                  qualité
                </li>
              </ul>
              <p>
                Ne tentez pas de réparer vous-même un adoucisseur, surtout en cas de problème
                électrique ou de fuite. Un professionnel dispose des compétences et des outils
                nécessaires pour intervenir en toute sécurité. Pour éviter les pannes, pensez à programmer un{" "}
                <Link href="/entretien-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  entretien régulier de votre adoucisseur
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Intervention d'urgence dans l'Yonne
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Pour les pannes critiques (fuite importante, eau salée, panne totale), nous
                proposons un service d'intervention d'urgence disponible dans tout le département :
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <ul className="list-disc list-inside space-y-2">
                  <li>Intervention sous 24h pour les urgences</li>
                  <li>Disponibilité à Auxerre, Sens, Joigny, Avallon, Migennes, Tonnerre et partout dans le 89</li>
                  <li>Diagnostic rapide et solution immédiate si possible</li>
                  <li>Devis transparent avant toute intervention</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quand remplacer plutôt que réparer ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Parfois, il est plus économique de remplacer un adoucisseur plutôt que de le
                réparer. C'est le cas notamment si :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>L'appareil est très ancien (plus de 15 ans)</li>
                <li>Le coût de réparation dépasse 50% du prix d'un nouvel appareil</li>
                <li>Plusieurs pannes se succèdent</li>
                <li>L'appareil est obsolète et les pièces sont difficiles à trouver</li>
                <li>La consommation d'énergie est excessive</li>
              </ul>
              <p>
                Un professionnel peut vous conseiller sur l'opportunité de réparer ou de remplacer
                votre adoucisseur en fonction de votre situation. Si un remplacement est nécessaire, découvrez nos{" "}
                <Link href="/adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  services d'installation d'adoucisseur dans l'Yonne
                </Link> et consultez nos{" "}
                <Link href="/prix-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  tarifs pour l'achat et la pose d'un adoucisseur
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <RelatedServices currentService="depannage-adoucisseur" />
          </section>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Besoin d'une intervention de dépannage ?
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Contactez-nous pour une intervention rapide de dépannage de votre adoucisseur d'eau
            dans l'Yonne. Nous intervenons dans tout le département.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}














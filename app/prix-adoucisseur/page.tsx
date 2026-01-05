import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import RelatedServices from "@/components/RelatedServices";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Prix adoucisseur d'eau dans l'Yonne - Devis gratuit",
  description:
    "Tarifs et prix d'un adoucisseur d'eau dans l'Yonne. Devis gratuit pour l'installation, l'entretien et le dépannage. Informations sur les coûts à Auxerre, Sens, Joigny, Avallon et tout le 89.",
  alternates: {
    canonical: "/prix-adoucisseur",
  },
  openGraph: {
    title: "Prix adoucisseur d'eau dans l'Yonne - Devis gratuit",
    description:
      "Tarifs et prix d'un adoucisseur d'eau dans l'Yonne. Devis gratuit et personnalisé.",
    url: `${siteConfig.domain}/prix-adoucisseur`,
  },
};

export default function PrixPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Prix d'un adoucisseur d'eau dans l'Yonne
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Le prix d'un adoucisseur d'eau varie selon plusieurs facteurs : la taille de votre
          logement, le nombre de personnes, la dureté de l'eau et le modèle choisi. Découvrez
          les tarifs moyens et obtenez un devis gratuit personnalisé pour votre projet dans l'Yonne.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prix d'achat d'un adoucisseur d'eau
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Le prix d'un adoucisseur d'eau varie généralement entre <strong>800€ et 2500€</strong> selon
                plusieurs critères :
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Facteurs influençant le prix
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Capacité :</strong> Un adoucisseur pour 2-3 personnes coûte entre 800€
                    et 1200€, tandis qu'un modèle pour 4-6 personnes coûte entre 1200€ et 2000€
                  </li>
                  <li>
                    <strong>Type d'adoucisseur :</strong> Les adoucisseurs à résine classiques sont
                    généralement moins chers que les modèles au CO2
                  </li>
                  <li>
                    <strong>Niveau d'automatisation :</strong> Les modèles automatiques avec
                    programmation avancée sont plus chers que les modèles manuels
                  </li>
                  <li>
                    <strong>Marque et qualité :</strong> Les grandes marques et les modèles
                    haut de gamme sont plus onéreux mais offrent une meilleure durabilité
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-2">💡 Conseil</p>
                <p>
                  Il est recommandé de ne pas choisir uniquement sur le prix. Un adoucisseur de
                  qualité, bien dimensionné, vous fera économiser de l'argent sur le long terme
                  grâce à une meilleure efficacité et une durée de vie plus longue.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coût d'installation
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Le coût d'installation d'un adoucisseur d'eau varie généralement entre{" "}
                <strong>200€ et 500€</strong>, selon la complexité de l'installation :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Raccordement à l'arrivée d'eau</li>
                <li>Installation du bac à sel</li>
                <li>Réglages et programmation</li>
                <li>Mise en service et test</li>
                <li>Éventuelles modifications de plomberie</li>
              </ul>
              <p>
                Certains installateurs proposent des forfaits "fourni et posé" qui incluent
                l'appareil et l'installation, ce qui peut être plus avantageux. Pour en savoir plus, consultez notre page sur{" "}
                <Link href="/adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  l'installation d'adoucisseur d'eau dans l'Yonne
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coûts d'entretien et de fonctionnement
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                En plus du coût d'achat et d'installation, il faut prévoir des coûts récurrents :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-900">Sel de régénération</h3>
                  <p className="text-sm">
                    Environ 50€ à 100€ par an selon la consommation et la dureté de l'eau
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-900">Entretien annuel</h3>
                  <p className="text-sm">
                    Entre 100€ et 200€ par an pour un{" "}
                    <Link href="/entretien-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                      entretien professionnel
                    </Link>
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-900">Consommation d'eau</h3>
                  <p className="text-sm">
                    Légère augmentation due à la régénération (environ 5% de consommation en plus)
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-900">Remplacement résine</h3>
                  <p className="text-sm">
                    Tous les 5-10 ans, environ 200€ à 400€ selon le modèle
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Aides et financement
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Certaines aides peuvent être disponibles pour l'installation d'un adoucisseur
                d'eau, notamment :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Crédit d'impôt :</strong> Vérifiez les conditions d'éligibilité selon
                  votre situation
                </li>
                <li>
                  <strong>Aides locales :</strong> Certaines communes ou départements proposent
                  des aides pour l'amélioration de la qualité de l'eau
                </li>
                <li>
                  <strong>Financement :</strong> Possibilité de financement avec paiement en
                  plusieurs fois chez certains installateurs
                </li>
              </ul>
              <p>
                Renseignez-vous auprès de votre installateur ou de votre mairie pour connaître
                les aides disponibles dans votre commune.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi demander un devis personnalisé ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Les prix indiqués sont des fourchettes moyennes. Le prix réel dépend de votre
                situation spécifique :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dureté de l'eau dans votre commune</li>
                <li>Nombre de personnes dans votre foyer</li>
                <li>Consommation d'eau quotidienne</li>
                <li>Espace disponible pour l'installation</li>
                <li>Complexité de l'installation (plomberie existante)</li>
                <li>Modèle et marque choisis</li>
              </ul>
              <p>
                Un devis personnalisé vous permet d'obtenir un prix précis adapté à vos besoins
                et à votre situation. C'est gratuit et sans engagement.
              </p>
            </div>
          </section>

          <section>
            <RelatedServices currentService="prix-adoucisseur" />
          </section>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Obtenez un devis gratuit personnalisé
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Remplissez le formulaire ci-dessous pour recevoir un devis gratuit et personnalisé
            pour votre adoucisseur d'eau dans l'Yonne. Nous vous contacterons rapidement avec une
            estimation précise.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}














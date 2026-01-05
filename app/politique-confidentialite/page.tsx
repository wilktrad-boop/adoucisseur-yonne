import { Metadata } from "next";
import Section from "@/components/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité - RGPD",
  description: "Politique de confidentialité et protection des données personnelles du site adoucisseur-yonne.fr",
  alternates: {
    canonical: "/politique-confidentialite",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p>
              La présente politique de confidentialité a pour objet d'informer les utilisateurs
              du site {siteConfig.domain} sur la manière dont {siteConfig.name} collecte, utilise
              et protège les informations personnelles qui lui sont communiquées.
            </p>
            <p>
              Cette politique est conforme au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Données collectées
            </h2>
            <p>
              Lors de l'utilisation du formulaire de contact, les données suivantes peuvent être
              collectées :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Code postal et ville</li>
              <li>Type de besoin (installation, entretien, dépannage, etc.)</li>
              <li>Message libre</li>
            </ul>
            <p>
              Ces données sont collectées uniquement avec votre consentement explicite lors de
              la soumission du formulaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Finalités du traitement
            </h2>
            <p>
              Les données personnelles collectées sont utilisées pour :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Vous mettre en relation avec des professionnels partenaires</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              <li>Améliorer nos services et notre site web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Base légale du traitement
            </h2>
            <p>
              Le traitement de vos données personnelles est basé sur :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Votre consentement explicite lors de la soumission du formulaire</li>
              <li>L'exécution de mesures précontractuelles (réponse à votre demande de devis)</li>
              <li>Notre intérêt légitime à améliorer nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Conservation des données
            </h2>
            <p>
              Vos données personnelles sont conservées :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pendant la durée nécessaire à la réponse à votre demande</li>
              <li>Pendant une durée maximale de 3 ans à compter du dernier contact</li>
              <li>Conformément aux obligations légales de conservation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Partage des données
            </h2>
            <p>
              Vos données personnelles peuvent être partagées avec :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Des professionnels partenaires qualifiés pour répondre à votre demande de devis
                ou d'intervention
              </li>
              <li>
                Nos prestataires techniques (hébergeur, service d'email) dans le cadre strict de
                l'exécution de leurs missions
              </li>
            </ul>
            <p>
              Nous ne vendons jamais vos données personnelles à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Droit d'accès :</strong> Vous pouvez obtenir une copie de vos données
                personnelles
              </li>
              <li>
                <strong>Droit de rectification :</strong> Vous pouvez corriger vos données
                inexactes ou incomplètes
              </li>
              <li>
                <strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de
                vos données
              </li>
              <li>
                <strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du
                traitement de vos données
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans
                un format structuré
              </li>
              <li>
                <strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de
                vos données
              </li>
              <li>
                <strong>Droit de retirer votre consentement :</strong> À tout moment, vous pouvez
                retirer votre consentement au traitement de vos données
              </li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à l'adresse : {siteConfig.contact.email}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Cookies
            </h2>
            <p>
              Le site utilise des cookies techniques nécessaires au fonctionnement du site. Ces
              cookies ne nécessitent pas votre consentement préalable.
            </p>
            <p>
              Aucun cookie de tracking ou de publicité n'est utilisé sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données personnelles contre tout accès non autorisé, perte, destruction
              ou altération.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou le traitement
              de vos données personnelles, vous pouvez nous contacter :
            </p>
            <p>
              <strong>Email :</strong> {siteConfig.contact.email}
            </p>
            <p>
              <strong>Téléphone :</strong> {siteConfig.contact.phone}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Réclamation
            </h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
              réclamation auprès de la Commission Nationale de l'Informatique et des Libertés
              (CNIL) :
            </p>
            <p>
              <strong>CNIL</strong>
              <br />
              3 Place de Fontenoy - TSA 80715
              <br />
              75334 PARIS CEDEX 07
              <br />
              Téléphone : 01 53 73 22 22
              <br />
              Site web : www.cnil.fr
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}


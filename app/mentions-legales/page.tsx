import { Metadata } from "next";
import Section from "@/components/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site adoucisseur-yonne.fr",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <Section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Éditeur du site
            </h2>
            <p>
              Le site {siteConfig.domain} est édité par {siteConfig.name}.
            </p>
            <p>
              <strong>Adresse :</strong> [À compléter]
            </p>
            <p>
              <strong>Téléphone :</strong> {siteConfig.contact.phone}
            </p>
            <p>
              <strong>Email :</strong> {siteConfig.contact.email}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé par Vercel Inc.
            </p>
            <p>
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, etc.) est la propriété
              de {siteConfig.name} ou de ses partenaires et est protégé par les lois françaises
              et internationales relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Données personnelles
            </h2>
            <p>
              Les données personnelles collectées via le formulaire de contact sont utilisées
              uniquement pour répondre à vos demandes et vous proposer nos services.
            </p>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de
              suppression et d'opposition aux données vous concernant. Pour exercer ces droits,
              contactez-nous à l'adresse : {siteConfig.contact.email}
            </p>
            <p>
              Pour plus d'informations, consultez notre{" "}
              <a href="/politique-confidentialite" className="text-primary-600 hover:text-primary-700">
                politique de confidentialité
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Responsabilité
            </h2>
            <p>
              {siteConfig.name} met tout en œuvre pour fournir des informations exactes et à jour.
              Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des
              informations diffusées sur le site.
            </p>
            <p>
              L'utilisation du site se fait sous votre propre responsabilité. {siteConfig.name}
              ne pourra être tenu responsable des dommages directs ou indirects résultant de
              l'utilisation du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Liens externes
            </h2>
            <p>
              Le site peut contenir des liens vers des sites externes. {siteConfig.name} n'exerce
              aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. Tout litige
              relatif à l'utilisation du site sera de la compétence exclusive des tribunaux
              français.
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














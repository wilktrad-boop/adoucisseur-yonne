import { Metadata } from "next";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact - Devis gratuit adoucisseur d'eau dans l'Yonne",
  description:
    "Contactez-nous pour un devis gratuit d'adoucisseur d'eau dans l'Yonne. Installation, entretien, dépannage. Disponible à Auxerre, Sens, Joigny, Avallon, Migennes et tout le 89.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - Devis gratuit adoucisseur d'eau dans l'Yonne",
    description:
      "Contactez-nous pour un devis gratuit d'adoucisseur d'eau dans l'Yonne.",
    url: `${siteConfig.domain}/contact`,
  },
};

export default function ContactPage() {
  const villesDesservies = siteConfig.departement.mainCities.join(", ");
  return (
    <Section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Contactez-nous
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Vous avez des questions sur l'installation, l'entretien ou le dépannage d'un adoucisseur
          d'eau dans l'Yonne ? Remplissez le formulaire ci-dessous et nous vous contacterons
          rapidement pour répondre à vos questions et vous proposer un devis gratuit.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Informations de contact
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Zone d'intervention</h3>
                <p className="text-gray-700">
                  Tout le département de l'Yonne ({villesDesservies} et de nombreuses autres communes)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Formulaire de contact
            </h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </Section>
  );
}














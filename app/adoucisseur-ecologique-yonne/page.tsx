import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title:
    "Adoucisseur sans sel et solutions écologiques dans l'Yonne (89)",
  description:
    "Adoucisseur d'eau écologique dans l'Yonne : CO2, magnétique, électronique. Alternatives sans sel ni résine pour traiter le calcaire à Auxerre, Sens, Joigny. Comparatif et devis gratuit.",
  alternates: {
    canonical: "/adoucisseur-ecologique-yonne",
  },
  openGraph: {
    title: "Adoucisseur sans sel et solutions écologiques dans l'Yonne",
    description:
      "Alternatives écologiques à l'adoucisseur classique : CO2, magnétique, électronique. Comparatif complet et devis gratuit dans l'Yonne.",
    url: `${siteConfig.domain}/adoucisseur-ecologique-yonne`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Installation d'adoucisseur d'eau écologique",
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
    "Installation d'adoucisseurs d'eau écologiques sans sel dans l'Yonne : CO2, magnétique, électronique.",
};

const faqItems = [
  {
    question: "Un adoucisseur sans sel est-il aussi efficace qu'un adoucisseur classique ?",
    answer:
      "Cela dépend de la technologie. L'adoucisseur au CO2 est aussi efficace qu'un adoucisseur à résine pour réduire la dureté de l'eau. Les solutions magnétiques et électroniques ne réduisent pas réellement le TH mais limitent les dépôts de tartre. Pour une eau très dure (>30 TH) comme dans le nord de l'Yonne, le CO2 ou la résine restent les plus fiables.",
  },
  {
    question: "Quel est le prix d'un adoucisseur écologique ?",
    answer:
      "Un adoucisseur au CO2 coûte entre 2 000 et 3 500€ pose comprise, soit plus cher qu'un modèle à résine (800–2 000€). En revanche, il n'y a pas d'achat de sel (environ 100€/an économisés) et pas de rejet d'eau saumâtre. Les dispositifs magnétiques sont moins chers (100–500€) mais leur efficacité est limitée sur une eau très calcaire.",
  },
  {
    question: "L'adoucisseur au CO2 nécessite-t-il du sel ?",
    answer:
      "Non. L'adoucisseur au CO2 injecte du dioxyde de carbone alimentaire dans l'eau pour transformer le calcaire en bicarbonate de calcium, soluble et non incrustant. Il ne nécessite ni sel, ni résine, ni rejet d'eau. Les minéraux (calcium, magnésium) sont conservés dans l'eau.",
  },
  {
    question: "Quel adoucisseur écologique choisir dans l'Yonne ?",
    answer:
      "Avec une dureté de 23 à 38 TH dans l'Yonne, nous recommandons l'adoucisseur au CO2 pour une efficacité comparable à la résine sans les inconvénients écologiques. Pour un budget limité, un dispositif électronique peut atténuer le tartre mais ne traitera pas l'eau en profondeur. Contactez-nous pour un diagnostic gratuit adapté à votre situation.",
  },
  {
    question: "Un adoucisseur écologique filtre-t-il les PFAS ?",
    answer:
      "Non. Aucun adoucisseur, qu'il soit classique ou écologique, ne filtre les PFAS ni les pesticides. Pour filtrer ces polluants (notamment à Auxerre), il faut un osmoseur à osmose inverse en complément. Nous proposons des installations combinées adoucisseur écologique + osmoseur.",
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

const comparatif = [
  {
    type: "Résine (classique)",
    sel: true,
    efficacite: "Excellente",
    ecologie: "Moyenne",
    prix: "800–2 000€",
    entretien: "Sel + révision annuelle",
    mineraux: false,
  },
  {
    type: "CO2 (écologique)",
    sel: false,
    efficacite: "Excellente",
    ecologie: "Très bonne",
    prix: "2 000–3 500€",
    entretien: "Recharge CO2",
    mineraux: true,
  },
  {
    type: "Magnétique",
    sel: false,
    efficacite: "Limitée",
    ecologie: "Excellente",
    prix: "100–500€",
    entretien: "Aucun",
    mineraux: true,
  },
  {
    type: "Électronique",
    sel: false,
    efficacite: "Modérée",
    ecologie: "Très bonne",
    prix: "300–800€",
    entretien: "Aucun",
    mineraux: true,
  },
];

export default function AdoucisseurEcologiquePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <Section className="bg-gradient-to-br from-green-600 via-green-700 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Adoucisseur écologique dans l'Yonne" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Adoucisseur sans sel et solutions écologiques dans l&apos;Yonne
          </h1>
          <p className="text-xl text-green-100 mb-8">
            CO2, magnétique, électronique : des alternatives au sel pour traiter le calcaire
            dans l&apos;Yonne. Pas de rejet d&apos;eau saumâtre, pas de consommables polluants.
            Comparatif complet et devis gratuit.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#devis"
              className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/adoucisseur"
              className="border border-white/50 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Adoucisseur classique →
            </Link>
          </div>
        </div>
      </Section>

      {/* Pourquoi écologique */}
      <Section className="py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pourquoi choisir un adoucisseur écologique ?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4 text-gray-700">
              <p>
                Un adoucisseur classique à résine utilise du sel pour régénérer la résine
                échangeuse d&apos;ions. Ce processus rejette de l&apos;eau chargée en chlorure de
                sodium dans les eaux usées, ce qui pose un problème écologique.
              </p>
              <p>
                Les adoucisseurs écologiques traitent le calcaire sans sel, sans résine et
                sans rejet polluant. Certaines technologies conservent même les minéraux
                bénéfiques (calcium, magnésium) dans l&apos;eau.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Pas de sel à acheter", desc: "100€/an économisés" },
                { label: "Pas de rejet d'eau saumâtre", desc: "Respectueux de l'environnement" },
                { label: "Minéraux conservés", desc: "Calcium et magnésium maintenus (CO2)" },
                { label: "Entretien réduit", desc: "Moins de consommables" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
                  <span className="text-green-600 font-bold mt-0.5 shrink-0">&#10003;</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Les technologies */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Les 3 technologies d&apos;adoucisseur écologique
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-green-500 rounded-xl p-6">
              <div className="text-3xl mb-3" aria-hidden="true">&#x1F4A8;</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adoucisseur au CO2</h3>
              <p className="text-sm font-medium text-green-600 mb-3">Recommandé dans l&apos;Yonne</p>
              <p className="text-gray-600 text-sm mb-4">
                Injecte du CO2 alimentaire dans l&apos;eau. Le calcaire est transformé en
                bicarbonate soluble : plus de dépôts, mais les minéraux sont conservés.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>&#10003; Efficacité comparable à la résine</li>
                <li>&#10003; Pas de sel ni de rejet</li>
                <li>&#10003; Conserve calcium et magnésium</li>
                <li>&#10007; Prix plus élevé (2 000–3 500€)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3" aria-hidden="true">&#x1F9F2;</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Anti-calcaire magnétique</h3>
              <p className="text-sm font-medium text-gray-500 mb-3">Solution légère</p>
              <p className="text-gray-600 text-sm mb-4">
                Des aimants permanents modifient la structure cristalline du calcaire
                pour réduire son adhérence aux parois. Installation simple, sans branchement.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>&#10003; Aucun entretien</li>
                <li>&#10003; Prix très bas (100–500€)</li>
                <li>&#10003; Installation en 30 min</li>
                <li>&#10007; Efficacité limitée sur eau très dure</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3" aria-hidden="true">&#x26A1;</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Anti-calcaire électronique</h3>
              <p className="text-sm font-medium text-gray-500 mb-3">Compromis intermédiaire</p>
              <p className="text-gray-600 text-sm mb-4">
                Des impulsions électriques empêchent les cristaux de calcaire de
                s&apos;accrocher aux surfaces. Ne modifie pas la composition de l&apos;eau.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>&#10003; Aucun entretien</li>
                <li>&#10003; Prix modéré (300–800€)</li>
                <li>&#10003; Conserve les minéraux</li>
                <li>&#10007; Ne réduit pas le TH mesuré</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Tableau comparatif */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comparatif : adoucisseur classique vs écologique
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">Technologie</th>
                  <th className="text-center p-4 font-semibold text-gray-700">Sel</th>
                  <th className="text-center p-4 font-semibold text-gray-700">Efficacité</th>
                  <th className="text-center p-4 font-semibold text-gray-700">Impact éco.</th>
                  <th className="text-center p-4 font-semibold text-gray-700">Minéraux</th>
                  <th className="text-center p-4 font-semibold text-gray-700">Prix installé</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparatif.map((row) => (
                  <tr key={row.type} className={row.type.includes("CO2") ? "bg-green-50" : ""}>
                    <td className="p-4 font-medium text-gray-900">{row.type}</td>
                    <td className="p-4 text-center">
                      {row.sel ? (
                        <span className="text-red-500 font-bold">Oui</span>
                      ) : (
                        <span className="text-green-600 font-bold">Non</span>
                      )}
                    </td>
                    <td className="p-4 text-center text-gray-700">{row.efficacite}</td>
                    <td className="p-4 text-center text-gray-700">{row.ecologie}</td>
                    <td className="p-4 text-center">
                      {row.mineraux ? (
                        <span className="text-green-600 font-bold">Conservés</span>
                      ) : (
                        <span className="text-red-500">Retirés</span>
                      )}
                    </td>
                    <td className="p-4 text-center text-gray-700">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Pour l&apos;Yonne (23–38 TH), nous recommandons le CO2 ou la résine classique pour un
            traitement efficace du calcaire.
          </p>
        </div>
      </Section>

      {/* Contexte Yonne */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            L&apos;eau de l&apos;Yonne : pourquoi un adoucisseur est indispensable
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="text-gray-700 space-y-4">
              <p>
                L&apos;eau de l&apos;Yonne traverse des terrains calcaires typiques de la Bourgogne.
                La dureté varie de <strong>23 TH</strong> dans le sud (Avallon) à{" "}
                <strong>38 TH</strong> dans le nord (Sens, Villeneuve-sur-Yonne).
              </p>
              <p>
                Au-delà de 15 TH, l&apos;eau est considérée comme dure. Dans l&apos;Yonne,
                100% des communes dépassent ce seuil. Le calcaire endommage les
                canalisations, le chauffe-eau, et augmente la facture d&apos;énergie.
              </p>
              <p>
                Un adoucisseur écologique au CO2 traite efficacement cette eau sans les
                inconvénients environnementaux du sel.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { ville: "Auxerre", th: "25–35 TH", zone: "Centre Yonne" },
                { ville: "Sens", th: "28–38 TH", zone: "Nord Yonne" },
                { ville: "Joigny", th: "26–36 TH", zone: "Val de l'Yonne" },
                { ville: "Avallon", th: "24–34 TH", zone: "Sud Yonne" },
              ].map((item) => (
                <Link
                  key={item.ville}
                  href={`/villes/${item.ville.toLowerCase()}`}
                  className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:border-primary-400 transition"
                >
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition text-sm">
                      {item.ville}
                    </p>
                    <p className="text-xs text-gray-500">{item.zone}</p>
                  </div>
                  <span className="text-sm font-medium text-primary-600">{item.th}</span>
                </Link>
              ))}
              <Link
                href="/qualite-eau-yonne"
                className="block text-center text-primary-600 hover:text-primary-700 font-medium text-sm mt-2"
              >
                Voir toutes les zones →
              </Link>
            </div>
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
              { href: "/adoucisseur", title: "Adoucisseur classique", desc: "Installation résine échangeuse d'ions" },
              { href: "/osmoseur-yonne", title: "Osmoseur et filtration", desc: "Filtre PFAS, pesticides, nitrates" },
              { href: "/entretien-adoucisseur", title: "Entretien", desc: "Maintenance et révision régulière" },
              { href: "/detartrage-yonne", title: "Détartrage", desc: "Traitement anti-calcaire curatif" },
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
            <Link href="/guides" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 text-sm">
              Guides et conseils →
            </Link>
            <Link href="/prix-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 text-sm">
              Prix et devis →
            </Link>
            <Link href="/villes" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 text-sm">
              Toutes les villes →
            </Link>
          </div>
        </div>
      </Section>

      {/* Devis */}
      <div id="devis">
        <Section className="py-14">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
              Devis gratuit pour un adoucisseur écologique
            </h2>
            <p className="text-center text-gray-600 mb-8">
              CO2, magnétique ou classique — nous analysons votre eau et vous recommandons
              la solution la plus adaptée. Réponse sous 24h.
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

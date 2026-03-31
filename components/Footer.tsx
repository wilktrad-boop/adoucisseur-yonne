import Link from "next/link";
import { siteConfig, villes } from "@/config/site";

export default function Footer() {
  const principalesVilles = villes.slice(0, 6).map((v) => v.nom).join(", ");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm">
              Installation et entretien d'adoucisseurs d'eau dans tout le
              département de l'{siteConfig.departement.departementName}.
            </p>
            <p className="text-sm mt-4">
              Interventions à {principalesVilles} et dans toute l'
              {siteConfig.departement.departementName}.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Nos services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/adoucisseur" className="hover:text-white transition">
                  Adoucisseur d'eau
                </Link>
              </li>
              <li>
                <Link href="/osmoseur-yonne" className="hover:text-white transition">
                  Osmoseur et filtration
                </Link>
              </li>
              <li>
                <Link href="/entretien-adoucisseur" className="hover:text-white transition">
                  Entretien
                </Link>
              </li>
              <li>
                <Link href="/depannage-adoucisseur" className="hover:text-white transition">
                  Dépannage
                </Link>
              </li>
              <li>
                <Link href="/prix-adoucisseur" className="hover:text-white transition">
                  Prix et devis
                </Link>
              </li>
            </ul>

            <h3 className="text-white text-lg font-semibold mb-4 mt-6">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/qualite-eau-yonne" className="hover:text-white transition">
                  Qualité de l'eau dans l'Yonne
                </Link>
              </li>
              <li>
                <Link href="/pfas-pesticides-eau-auxerre" className="hover:text-white transition">
                  PFAS et pesticides à Auxerre
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white transition">
                  Guides et conseils
                </Link>
              </li>
              <li>
                <Link href="/villes" className="hover:text-white transition">
                  Villes desservies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-white transition">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>

            <h3 className="text-white text-lg font-semibold mb-4 mt-6">Nos partenaires en Auvergne-Rhône-Alpes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://valence-adoucisseur.fr/" target="_blank" rel="noopener" className="hover:text-white transition">
                  Adoucisseur à Valence
                </a>
              </li>
              <li>
                <a href="https://www.adoucisseur-isere.fr/" target="_blank" rel="noopener" className="hover:text-white transition">
                  Adoucisseur en Isère
                </a>
              </li>
              <li>
                <a href="https://adoucisseur-haute-savoie.fr/" target="_blank" rel="noopener" className="hover:text-white transition">
                  Adoucisseur en Haute-Savoie
                </a>
              </li>
              <li>
                <a href="https://www.adoucisseur-ain.fr/" target="_blank" rel="noopener" className="hover:text-white transition">
                  Adoucisseur dans l'Ain
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}














import Link from "next/link";
import { Ville, villes } from "@/config/site";

interface CityListProps {
  villes?: Ville[];
}

export default function CityList({ villes: villesProp }: CityListProps) {
  const villesToDisplay = villesProp || villes;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {villesToDisplay.map((ville) => (
        <Link
          key={ville.slug}
          href={`/villes/${ville.slug}`}
          className="group relative overflow-hidden bg-white p-6 rounded-xl shadow-sm border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Image de fond avec opacité */}
          {ville.image && (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${ville.image})`,
                }}
              />
              <div className="absolute inset-0 bg-white/75" />
            </>
          )}
          {/* Contenu (au-dessus du fond) */}
          <div className="relative z-10">
            {/* Badge zone */}
            {ville.zone && (
              <div className="inline-block mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700">
                  {ville.zone}
                </span>
              </div>
            )}

            {/* Nom de la ville */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
              {ville.nom}
            </h3>

          {/* Code postal */}
          <p className="text-sm text-gray-600 mb-3 flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {ville.codePostal}
          </p>

          {/* Dureté de l'eau si disponible */}
          {ville.dureteEau && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Dureté de l'eau</span>
                <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded">
                  {ville.dureteEau}
                </span>
              </div>
            </div>
          )}

            {/* Indicateur hover */}
            <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
              Adoucisseur {ville.nom}
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}













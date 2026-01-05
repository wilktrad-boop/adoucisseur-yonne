"use client";

import { useState, useMemo } from "react";
import Section from "@/components/Section";
import CityList from "@/components/CityList";
import { villes } from "@/config/site";
import { departementConfig } from "@/config/departement";

export default function VillesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  // Extraire les zones uniques
  const zones = useMemo(() => {
    const uniqueZones = Array.from(
      new Set(villes.map((v) => v.zone).filter((z): z is string => z !== undefined))
    );
    return uniqueZones;
  }, []);

  // Filtrer les villes
  const filteredVilles = useMemo(() => {
    return villes.filter((ville) => {
      const matchesSearch =
        ville.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ville.codePostal.includes(searchTerm);
      const matchesZone = !selectedZone || ville.zone === selectedZone;
      return matchesSearch && matchesZone;
    });
  }, [searchTerm, selectedZone]);

  const totalVilles = villes.length;
  const villesAffichees = filteredVilles.length;

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Villes desservies {departementConfig.regionLabel}
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8">
            Nous intervenons dans tout le département de l'{departementConfig.departementName} pour
            l'installation, l'entretien et le dépannage d'adoucisseurs d'eau
          </p>
          
          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">{totalVilles}+</div>
              <div className="text-primary-100">Villes desservies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Disponibilité</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">
                {departementConfig.departementName} couvert
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Filtres et recherche */}
      <Section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          {/* Barre de recherche */}
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Rechercher une ville
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tapez le nom d'une ville ou un code postal..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Filtres par zone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Filtrer par zone
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedZone(null)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedZone === null
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-primary-500"
                }`}
              >
                Toutes les zones
              </button>
              {zones.map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedZone === zone
                      ? "bg-primary-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-primary-500"
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          {/* Résultats */}
          {searchTerm || selectedZone ? (
            <div className="mt-4 text-sm text-gray-600">
              {villesAffichees === 0 ? (
                <p className="text-red-600 font-medium">
                  Aucune ville trouvée avec ces critères.
                </p>
              ) : (
                <p>
                  <strong>{villesAffichees}</strong> ville{villesAffichees > 1 ? "s" : ""} trouvée{villesAffichees > 1 ? "s" : ""}
                </p>
              )}
            </div>
          ) : null}
        </div>
      </Section>

      {/* Liste des villes */}
      <Section className="py-12">
        <CityList villes={filteredVilles} />
        
        {villesAffichees === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              Aucune ville ne correspond à votre recherche.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedZone(null);
              }}
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Message si ville non trouvée */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 border border-primary-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vous ne trouvez pas votre ville dans la liste ?
          </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Nous intervenons dans de nombreuses autres communes de l'{departementConfig.departementName}. Notre réseau de
            professionnels couvre tout le département pour vous garantir un service de qualité.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-md hover:shadow-lg"
          >
            Contactez-nous pour vérifier
          </a>
        </div>
      </Section>
    </>
  );
}












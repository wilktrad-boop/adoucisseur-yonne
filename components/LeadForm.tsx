"use client";

import { useState, FormEvent } from "react";
import { departementConfig } from "@/config/departement";
import { villes } from "@/config/site";

interface LeadFormProps {
  villePreselectionnee?: string;
  className?: string;
}

export default function LeadForm({ villePreselectionnee, className = "" }: LeadFormProps) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    codePostal: "",
    ville: villePreselectionnee || "",
    besoin: "installation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[0-9\s\+\-\(\)]{10,}$/.test(phone.replace(/\s/g, ""));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setSubmitStatus("error");
      setFeedbackMessage("Merci de saisir une adresse email valide.");
      return;
    }

    if (!validatePhone(formData.telephone)) {
      setSubmitStatus("error");
      setFeedbackMessage("Merci de saisir un numéro de téléphone valide (10 chiffres).");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setFeedbackMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setSubmitStatus("success");
        setFeedbackMessage(
          data?.message ||
            "Merci ! Votre demande a été envoyée. Nous vous contacterons sous peu."
        );
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          codePostal: "",
          ville: villePreselectionnee || "",
          besoin: "installation",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setFeedbackMessage(
          data?.error || "Une erreur est survenue. Veuillez réessayer dans quelques instants."
        );
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setSubmitStatus("error");
      setFeedbackMessage("Impossible d'envoyer votre demande pour le moment. Essayez à nouveau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom *
          </label>
          <input
            type="text"
            id="nom"
            required
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            required
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="06 12 34 56 78"
          />
        </div>

        <div>
          <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700 mb-1">
            Code postal
          </label>
          <input
            type="text"
            id="codePostal"
            value={formData.codePostal}
            onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder={departementConfig.defaultPostalCode}
          />
        </div>
      </div>

      <div>
        <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">
          Ville *
        </label>
        <select
          id="ville"
          required
          value={formData.ville}
          onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Sélectionnez une ville</option>
          {villes.map((ville) => (
            <option key={ville.slug} value={ville.nom}>
              {ville.nom} ({ville.codePostal})
            </option>
          ))}
          <option value="autre">
            Autre ville {departementConfig.regionLabel}
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="besoin" className="block text-sm font-medium text-gray-700 mb-1">
          Type de besoin *
        </label>
        <select
          id="besoin"
          required
          value={formData.besoin}
          onChange={(e) => setFormData({ ...formData, besoin: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="installation">Installation d'un adoucisseur</option>
          <option value="entretien">Entretien d'un adoucisseur</option>
          <option value="depannage">Dépannage / Réparation</option>
          <option value="remplacement">Remplacement d'un adoucisseur</option>
          <option value="devis">Demande de devis / Information</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Décrivez votre besoin ou posez vos questions..."
        />
      </div>

      {submitStatus !== "idle" && feedbackMessage && (
        <div
          className={`px-4 py-3 rounded-lg border ${
            submitStatus === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {feedbackMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours...
          </>
        ) : "Demander un devis gratuit"}
      </button>
    </form>
  );
}







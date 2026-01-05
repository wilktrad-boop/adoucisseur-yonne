import Link from "next/link";
import { departementConfig } from "@/config/departement";

interface Service {
  href: string;
  title: string;
}

interface RelatedServicesProps {
  currentService: "adoucisseur" | "entretien-adoucisseur" | "depannage-adoucisseur" | "prix-adoucisseur";
}

const allServices: Record<string, Service> = {
  "adoucisseur": {
    href: "/adoucisseur",
    title: "Installation d'adoucisseur d'eau",
  },
  "entretien-adoucisseur": {
    href: "/entretien-adoucisseur",
    title: `Entretien d'adoucisseur d'eau ${departementConfig.regionLabel}`,
  },
  "depannage-adoucisseur": {
    href: "/depannage-adoucisseur",
    title: `Dépannage d'adoucisseur ${departementConfig.regionLabel}`,
  },
  "prix-adoucisseur": {
    href: "/prix-adoucisseur",
    title: "Prix d'un adoucisseur : achat, pose, entretien",
  },
};

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  const otherServices = Object.entries(allServices)
    .filter(([key]) => key !== currentService)
    .map(([, service]) => service);

  return (
    <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Nos autres services
      </h2>
      <ul className="space-y-4">
        {otherServices.map((service) => (
          <li key={service.href}>
            <Link
              href={service.href}
              className="flex items-start group text-gray-700 hover:text-primary-600 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-3 mt-0.5 text-primary-600 flex-shrink-0 group-hover:translate-x-1 transition-transform"
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
              <span className="font-medium">{service.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


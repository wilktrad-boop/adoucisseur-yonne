import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig, villes } from "@/config/site";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Évite le FOIT (Flash of Invisible Text)
  preload: true,
});

const defaultTitle = siteConfig.departement.seo.homeTitle;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.domain}/technicien_hero.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.departement.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Schéma JSON-LD pour l'organisation
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.name,
  url: siteConfig.domain,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressRegion: siteConfig.departement.departementName,
    addressCountry: "FR",
  },
  areaServed: [
    {
      "@type": "City",
      name: siteConfig.departement.departementName,
      postalCode: siteConfig.departement.departementNumber,
    },
    ...villes.map((ville) => ({
      "@type": "City",
      name: ville.nom,
      postalCode: ville.codePostal,
    })),
  ],
  serviceType: [
    "Installation d'adoucisseur d'eau",
    "Entretien d'adoucisseur d'eau",
    "Dépannage d'adoucisseur d'eau",
    "Remplacement d'adoucisseur d'eau",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}









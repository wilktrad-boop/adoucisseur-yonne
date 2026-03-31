import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { getGuideBySlug, guides } from "@/data/guides";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${siteConfig.domain}/guides/${slug}`,
      type: "article",
      publishedTime: guide.date,
    },
  };
}

function headingToId(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractHeadings(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.substring(3).trim();
      return { text, id: headingToId(text) };
    });
}

function formatContent(content: string): string {
  return content
    .split("\n")
    .map((line) => {
      if (line.startsWith("# ")) {
        return `<h1 class="text-3xl font-bold text-gray-900 mb-4">${line.substring(2)}</h1>`;
      }
      if (line.startsWith("## ")) {
        const text = line.substring(3).trim();
        const id = headingToId(text);
        return `<h2 id="${id}" class="text-2xl font-bold text-gray-900 mb-4 mt-8 scroll-mt-24">${text}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">${line.substring(4)}</h3>`;
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return `<li class="ml-4">${line.substring(2)}</li>`;
      }
      if (line.trim() === "") {
        return "<br />";
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return `<p class="font-semibold text-gray-900 mb-2">${line.substring(2, line.length - 2)}</p>`;
      }
      return `<p class="text-gray-700 mb-4">${line}</p>`;
    })
    .join("\n");
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const headings = extractHeadings(guide.content);
  const relatedGuides = guides.filter((g) => g.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    inLanguage: "fr",
    url: `${siteConfig.domain}/guides/${slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    wordCount: guide.content.split(/\s+/).length,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Guides", href: "/guides" },
              { label: guide.title },
            ]}
          />

          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {guide.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {guide.description}
            </p>
            <div className="text-sm text-gray-500 mb-8">
              Publié le {new Date(guide.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            {/* Table des matières */}
            {headings.length > 2 && (
              <nav
                aria-label="Table des matières"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
              >
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Table des matières
                </p>
                <ol className="space-y-2">
                  {headings.map((h, i) => (
                    <li key={h.id} className="flex items-start gap-2 text-sm">
                      <span className="text-gray-400 font-mono shrink-0 mt-0.5">{i + 1}.</span>
                      <a
                        href={`#${h.id}`}
                        className="text-primary-600 hover:text-primary-700 hover:underline leading-snug"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(guide.content) }}
            />
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
            >
              Demander un devis gratuit
            </Link>
          </div>

          {/* Nos services */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos services dans l'Yonne</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/adoucisseur", title: "Installation d'adoucisseur", desc: "Pose complète et mise en service" },
                { href: "/entretien-adoucisseur", title: "Entretien d'adoucisseur", desc: "Maintenance et révision régulière" },
                { href: "/depannage-adoucisseur", title: "Dépannage", desc: "Intervention rapide en cas de panne" },
                { href: "/osmoseur-yonne", title: "Osmoseur et filtration", desc: "Filtrez PFAS, pesticides et nitrates" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block bg-white border border-gray-200 rounded-xl p-4 hover:border-primary-400 hover:shadow-md transition"
                >
                  <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-1">
                    {service.title}
                  </p>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Articles liés */}
          {relatedGuides.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Guides similaires</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedGuides.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-md transition"
                  >
                    <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition text-sm leading-snug mb-2">
                      {g.title}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2">{g.description}</p>
                    <span className="mt-3 inline-block text-xs text-primary-600 font-medium">
                      Lire →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
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

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Convertir le markdown simple en HTML basique
  const formatContent = (content: string) => {
    return content
      .split("\n")
      .map((line, index) => {
        if (line.startsWith("# ")) {
          return `<h1 class="text-3xl font-bold text-gray-900 mb-4">${line.substring(2)}</h1>`;
        }
        if (line.startsWith("## ")) {
          return `<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">${line.substring(3)}</h2>`;
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
  };

  return (
    <Section className="py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/guides"
          className="text-primary-600 hover:text-primary-700 font-semibold mb-6 inline-block"
        >
          ← Retour aux guides
        </Link>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {guide.description}
          </p>
          <div className="text-sm text-gray-500 mb-8">
            Publié le {new Date(guide.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

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
      </div>
    </Section>
  );
}














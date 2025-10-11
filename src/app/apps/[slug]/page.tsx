import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAppById, appsData } from "@/lib/apps-data";
import { generateAppSchema, generateAppBreadcrumbSchema } from "@/lib/app-schemas";
import AppDetailClient from "./app-detail-client";

// Generate static params for all apps
export async function generateStaticParams() {
  return appsData.map((app) => ({
    slug: app.id,
  }));
}

// Generate metadata for each app
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const app = getAppById(params.slug);

  if (!app) {
    return {
      title: "App Not Found",
    };
  }

  const canonicalUrl = `https://7kc.me/apps/${app.id}`;
  const ogImageUrl = `https://7kc.me/og/${app.id}.png`;

  return {
    title: `${app.name} - ${app.tagline} | 7K Ecosystem`,
    description: app.description,
    keywords: app.keywords.join(", "),
    authors: [{ name: "Kunal Chheda", url: "https://7kc.me" }],
    creator: "Kunal Chheda",
    publisher: "7K Ecosystem",
    applicationName: app.name,
    
    openGraph: {
      title: `${app.name} - ${app.tagline}`,
      description: app.description,
      url: canonicalUrl,
      siteName: "7K Ecosystem",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${app.name} - ${app.tagline}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    
    twitter: {
      card: "summary_large_image",
      title: `${app.name} - ${app.tagline}`,
      description: app.description,
      creator: "@kunu2009",
      images: [ogImageUrl],
    },
    
    alternates: {
      canonical: canonicalUrl,
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
    
    other: {
      "application-name": app.name,
      "apple-mobile-web-app-title": app.name,
      "mobile-web-app-capable": "yes",
    },
  };
}

export default function AppDetailPage({ params }: { params: { slug: string } }) {
  const app = getAppById(params.slug);

  if (!app) {
    notFound();
  }

  // Generate structured data schemas
  const appSchema = generateAppSchema(app);
  const breadcrumbSchema = generateAppBreadcrumbSchema(app.name, app.id);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <AppDetailClient app={app} />
    </>
  );
}

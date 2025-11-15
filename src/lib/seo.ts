import { Metadata } from 'next';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonical?: string;
  noindex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SITE_URL = 'https://7kc.me';
const DEFAULT_OG_IMAGE = 'https://storage.googleapis.com/fantastic-images/b1494953-e59e-4a6f-a63e-4cde8a3f6f96.png';

export function generateSEO(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    canonical,
    noindex = false,
    author = 'Kunal Vishwakarma',
    publishedTime,
    modifiedTime,
    section,
    tags = [],
  } = config;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    openGraph: {
      title: title || '',
      description: description || '',
      type: ogType,
      url: canonical || SITE_URL,
      siteName: '7K Portfolio',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || '7K Portfolio',
        },
      ],
      ...(ogType === 'article' && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime || publishedTime,
            section,
            tags,
            authors: [author],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: title || '',
      description: description || '',
      creator: '@kunal7k',
      images: [ogImage],
    },
    alternates: {
      canonical: canonical || SITE_URL,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
  };

  return metadata;
}

export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = 'Kunal Vishwakarma',
  url,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: author,
      logo: {
        '@type': 'ImageObject',
        url: DEFAULT_OG_IMAGE,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function generateServiceSchema({
  name,
  description,
  price,
  currency = 'INR',
  url,
}: {
  name: string;
  description: string;
  price: number;
  currency?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Person',
      name: 'Kunal Vishwakarma',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      url,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

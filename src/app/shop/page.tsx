import type { Metadata } from 'next';
import StoreClient from '../store/store-client';
import { getGithubPortfolioData } from '@/lib/github-portfolio.server';

// Rich SEO metadata for Google discovery
export const metadata: Metadata = {
  title: '7K Shop - 80+ GitHub Apps, Digital Products, Templates & Services | Kunal Chheda',
  description:
    'Explore 7K Shop for 80+ GitHub app projects, digital products, and high-converting services: web development, SEO, UI/UX, Instagram design, reel editing, WhatsApp Business setup, Google Business Profile optimization, Notion setup, AI content writing, and Shopify/Wix setup. Made in India with UPI-friendly pricing.',
  keywords: [
    // Shop/Marketplace keywords
    '7K shop',
    '7k digital shop',
    'digital products India',
    'buy web templates',
    'premium website templates',
    'digital marketplace India',
    'online store digital products',
    'GitHub app portfolio',
    '80+ public repositories',
    'TypeScript app portfolio',
    'open source app showcase',

    // Template keywords
    'Next.js templates buy',
    'React templates India',
    'website templates INR',
    'premium templates download',
    'ecommerce templates',
    'portfolio templates',
    'SaaS templates',

    // eBook keywords
    'ebooks online India',
    'buy ebooks INR',
    'design ebooks',
    'programming ebooks',
    'self-help ebooks India',

    // App keywords
    'productivity apps free',
    'best apps India',
    'web apps download',
    'PWA apps',
    'mobile apps free',

    // Service keywords
    'web development services India',
    'hire web developer India',
    'freelance developer Mumbai',
    'website design services',
    'app development India',
    'instagram post design services',
    'reel editing services',
    'logo design and branding package',
    'whatsapp business account setup',
    'google business profile SEO service',
    'notion template setup service',
    'AI content writing and editing service',
    'college project support services',
    'shopify store setup India',
    'wix website setup service',
    'affordable digital services India',
    'small business digital services Mumbai',
    'startup website package India',
    'service bundles India',
    'social media design package',

    // Brand keywords
    '7K Solutions',
    'Kunal Chheda products',
    '7K digital products',
  ],
  openGraph: {
    title: '7K Shop - 80+ GitHub Apps, Templates, Products & Services',
    description:
      'A portfolio commerce hub with 80+ GitHub apps, premium digital products, and growth-focused services.',
    url: 'https://7kc.me/shop',
    siteName: '7K Shop',
    type: 'website',
    images: [
      {
        url: 'https://7kc.me/og/store-og.png',
        width: 1200,
        height: 630,
        alt: '7K Shop - Digital Products Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7K Shop - 80+ GitHub Apps & Digital Products',
    description: 'Explore the 7K app universe plus web, SEO, and growth services for creators and businesses.',
    images: ['https://7kc.me/og/store-og.png'],
  },
  alternates: {
    canonical: 'https://7kc.me/shop',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'ecommerce',
};

// JSON-LD Structured Data for rich Google results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  name: '7K Shop',
  description:
    'Portfolio-first digital marketplace with 80+ GitHub projects, premium products, and web/SEO/growth services.',
  url: 'https://7kc.me/shop',
  logo: 'https://7kc.me/logo.png',
  image: 'https://7kc.me/og/store-og.png',
  priceRange: '₹499 - ₹20,000',
  currenciesAccepted: 'INR',
  paymentAccepted: 'UPI, Credit Card, Debit Card, Net Banking',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  founder: {
    '@type': 'Person',
    name: 'Kunal Chheda',
    url: 'https://7kc.me',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'India',
    },
    {
      '@type': 'City',
      name: 'Mumbai',
    },
  ],
  knowsAbout: [
    'Open Source App Development',
    'TypeScript Product Engineering',
    'Portfolio Product Systems',
    'Web Development',
    'SEO Optimization',
    'UI/UX Design',
    'Instagram Content Design',
    'Reel Video Editing',
    'WhatsApp Business Setup',
    'Google Business Profile Optimization',
    'Notion Workspace Setup',
    'AI Content Writing',
    'Shopify and Wix Store Setup',
  ],
  sameAs: [
    'https://linkedin.com/in/kunalchheda',
    'https://github.com/kunu2009',
    'https://twitter.com/7ksolutions',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '7K Digital Products & App Universe',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'GitHub App Universe',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'SoftwareApplication',
              name: '80+ Public App Projects',
              applicationCategory: 'EducationalApplication',
              operatingSystem: 'Web',
              description: 'Education, productivity, games, AI, and utility apps from the 7K GitHub portfolio.',
            },
            price: '0',
            priceCurrency: 'INR',
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Web Templates',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Premium Website Templates',
              description: 'Next.js & React templates for modern websites',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.85',
                ratingCount: '55',
                bestRating: '5',
                worstRating: '1',
              },
            },
            price: '7000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'eBooks',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Book',
              name: 'Design & Development eBooks',
            },
            price: '499',
            priceCurrency: 'INR',
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development Services',
              description: 'Business websites, landing pages, and custom web apps',
            },
            price: '3000',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Optimization Services',
              description: 'Keyword strategy, on-page SEO, and growth reporting',
            },
            price: '1000',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Instagram Post Design Packages',
              description: 'Branded social media post packs for creators and businesses',
            },
            price: '500',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Reel Editing Services',
              description: 'Short-form reel editing for Instagram and YouTube Shorts',
            },
            price: '800',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Logo + Mini Branding Kit',
              description: 'Logo concepts, color palette, and mini brand guide',
            },
            price: '2000',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'WhatsApp Business Setup',
              description: 'Business profile, catalog setup, and automated replies',
            },
            price: '2000',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google Business Profile Optimization',
              description: 'Local SEO setup and profile optimization for map visibility',
            },
            price: '2500',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Notion Setup Service',
              description: 'Student and business Notion dashboards tailored to your workflow',
            },
            price: '2500',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Content Writing & Editing',
              description: 'Conversion-focused web and social copy with AI-assisted workflows',
            },
            price: '2000',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Shopify / Wix Setup Services',
              description: 'Launch-ready store setup with pages, products, and basic optimization',
            },
            price: '5000',
            priceCurrency: 'INR',
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Service Bundles',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Starter Growth Pack',
              description: 'Branding + social creatives + WhatsApp setup bundle',
            },
            price: '6999',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Launch Pack',
              description: 'Website + SEO + Google Business Profile optimization',
            },
            price: '12999',
            priceCurrency: 'INR',
          },
        ],
      },
    ],
  },
};

export default async function ShopPage() {
  const githubPortfolio = await getGithubPortfolioData();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StoreClient githubPortfolio={githubPortfolio} />
    </>
  );
}

import type { Metadata } from 'next';
import StoreClient from '../store/store-client';

// Rich SEO metadata for Google discovery
export const metadata: Metadata = {
  title: '7K Shop - Digital Products, Web Templates, Apps, eBooks & Services | Kunal Chheda',
  description:
    'Explore 7K Shop for digital products and high-converting services: web development, SEO, UI/UX, Instagram design, reel editing, WhatsApp Business setup, Google Business Profile optimization, Notion setup, AI content writing, and Shopify/Wix setup. Made in India with UPI-friendly pricing.',
  keywords: [
    // Shop/Marketplace keywords
    '7K shop',
    '7k digital shop',
    'digital products India',
    'buy web templates',
    'premium website templates',
    'digital marketplace India',
    'online store digital products',

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
    title: '7K Shop - Digital Products, Templates, Apps & Services',
    description:
      'Premium digital products plus growth-focused services: websites, SEO, social media creatives, and business setup support.',
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
    title: '7K Shop - Premium Digital Products',
    description: 'Digital products + web, SEO, and growth services for creators, startups, and small businesses.',
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
    'Premium digital products marketplace with web development, SEO, design, social media, and business setup services.',
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
    name: '7K Digital Products',
    itemListElement: [
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
            },
            price: '7000',
            priceCurrency: 'INR',
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

export default function ShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StoreClient />
    </>
  );
}

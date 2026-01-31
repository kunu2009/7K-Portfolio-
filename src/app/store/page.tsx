import type { Metadata } from 'next';
import StoreClient from './store-client';

// Rich SEO metadata for Google discovery
export const metadata: Metadata = {
  title: '7K Store - Digital Products, Web Templates, Apps, eBooks & Services | Kunal Chheda',
  description: 'Shop premium digital products at 7K Store: Web templates (₹7,000+), eBooks, mobile apps, productivity tools, web development services. Made in India. Instant download. UPI payments accepted.',
  keywords: [
    // Store/Marketplace keywords
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
    
    // Brand keywords
    '7K Store',
    '7K Solutions',
    'Kunal Chheda products',
    '7K digital products',
  ],
  openGraph: {
    title: '7K Store - Digital Products, Templates, Apps & Services',
    description: 'Shop premium digital products: Web templates, eBooks, apps, and professional services. Made in India with ❤️',
    url: 'https://7kc.me/store',
    siteName: '7K Store',
    type: 'website',
    images: [
      {
        url: 'https://7kc.me/og/store-og.png',
        width: 1200,
        height: 630,
        alt: '7K Store - Digital Products Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7K Store - Premium Digital Products',
    description: 'Web templates, eBooks, apps & services. Made in India.',
    images: ['https://7kc.me/og/store-og.png'],
  },
  alternates: {
    canonical: 'https://7kc.me/store',
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
  '@type': 'Store',
  name: '7K Store',
  description: 'Premium digital products marketplace - Web templates, eBooks, Apps & Services',
  url: 'https://7kc.me/store',
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
            },
            price: '3000',
            priceCurrency: 'INR',
          },
        ],
      },
    ],
  },
};

export default function StorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StoreClient />
    </>
  );
}

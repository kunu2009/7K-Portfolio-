import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Website Templates | 7K Ecosystem',
  description:
    'Browse SEO-friendly website templates for hotels, ecommerce stores, agencies, SaaS products, portfolios, and education platforms.',
  keywords: [
    'website templates',
    'Next.js templates',
    'React templates',
    'SEO friendly templates',
    'ecommerce templates',
    'portfolio templates',
    'SaaS landing page templates',
    'agency website templates',
    'education website templates',
    '7K templates',
  ],
  openGraph: {
    title: 'Website Templates | 7K Ecosystem',
    description:
      'Browse SEO-friendly website templates for hotels, ecommerce stores, agencies, SaaS products, portfolios, and education platforms.',
    url: 'https://7kc.me/templates',
    siteName: '7K Ecosystem',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Templates | 7K Ecosystem',
    description:
      'Browse SEO-friendly website templates for hotels, ecommerce stores, agencies, SaaS products, portfolios, and education platforms.',
    creator: '@kunal7k',
  },
  alternates: {
    canonical: 'https://7kc.me/templates',
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
};

export default function TemplatesLayout({ children }: { children: ReactNode }) {
  return children;
}
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Project Cost Calculator | 7K Studios',
  description:
    'Estimate website, app, SEO, design, and content project costs with a simple interactive calculator from 7K Studios.',
  keywords: [
    'project cost calculator',
    'website cost estimator',
    'app development pricing',
    'SEO services pricing',
    'design cost calculator',
    'freelance project estimate',
    '7K Studios',
  ],
  openGraph: {
    title: 'Project Cost Calculator | 7K Studios',
    description:
      'Estimate website, app, SEO, design, and content project costs with a simple interactive calculator.',
    url: 'https://7kc.me/services/calculator',
    siteName: '7K Ecosystem',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Cost Calculator | 7K Studios',
    description:
      'Estimate website, app, SEO, design, and content project costs with a simple interactive calculator.',
    creator: '@kunal7k',
  },
  alternates: {
    canonical: 'https://7kc.me/services/calculator',
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

export default function CalculatorLayout({ children }: { children: ReactNode }) {
  return children;
}
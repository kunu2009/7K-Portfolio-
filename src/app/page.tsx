import HomePage from '@/components/home-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kunal Chheda - Portfolio, Apps, Books, Services & Templates | 7K Ecosystem',
  description: 'Explore a curated 7K ecosystem with SEO-focused apps, books, services, templates, and products organized into clear sections. Built by Kunal Chheda from India.',
  keywords: [
    // Most searched generic terms
    'best productivity app',
    'best fitness tracker app',
    'best habit tracker',
    'best task manager app',
    'best language learning app',
    'best finance app',
    'free productivity apps',
    'free fitness tracker',
    'free habit tracker app',
    'free workout app',
    
    // Specific features people search for
    'productivity app free',
    'fitness tracker free',
    'habit tracking app',
    'calorie tracker app',
    'budget tracker free',
    'task manager online',
    'daily planner free',
    'workout planner app',
    'expense tracker app',
    'language learning free',
    
    // Trending 2025 keywords
    'best apps 2025',
    'top productivity apps 2025',
    'fitness apps 2025',
    'free web apps 2025',
    'digital services India',
    'SEO services India',
    'website templates',
    'online books',
    'app directory',
    
    // Location-based
    'productivity apps India',
    'fitness app India',
    'best Indian apps',
    'apps made in India',
    
    // Developer/creator
    'Kunal Chheda',
    'Kunal Chheda developer',
    'student developer India',
    '7K Ecosystem',
    '7K apps',
  ],
  openGraph: {
    title: 'Kunal Chheda - Portfolio, Apps, Books, Services & Templates | 7K Ecosystem',
    description: 'A curated ecosystem for apps, books, services, templates, and more - organized for better discovery.',
    type: 'website',
    url: 'https://7kc.me',
    siteName: '7K Ecosystem - Free Apps',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '7K Ecosystem - Best Free Productivity and Fitness Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunal Chheda - Portfolio, Apps, Books, Services & Templates | 7K Ecosystem',
    description: 'A curated ecosystem for apps, books, services, templates, and more.',
    images: ['/og-image.png'],
    creator: '@kunal7k',
  },
  alternates: {
    canonical: 'https://7kc.me',
  },
};

export default function Page() {
  return <HomePage />;
}

import HomePage from '@/components/home-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kunal Chheda - Best Free Productivity Apps, Fitness Tracker & Learning Tools | 7K Ecosystem',
  description: 'Discover 20+ best free apps by Kunal Chheda (Kunal Paresh Chheda) - student developer from Mumbai, India. Free productivity tools, habit tracker, fitness app, task manager, language learning, finance tracker. No subscriptions, completely free!',
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
    title: 'Best Free Productivity, Fitness & Learning Apps | 7K Ecosystem',
    description: '20+ free apps for productivity, fitness tracking, habit building, language learning & more. No subscriptions. Completely free tools for everyone.',
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
    title: 'Best Free Productivity & Fitness Apps - 7K Ecosystem',
    description: '20+ free apps: habit tracker, fitness tracker, task manager, language learning & more!',
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

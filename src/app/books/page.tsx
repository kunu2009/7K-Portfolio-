import type { Metadata } from 'next';
import BooksPageClient from './books-client';

export const metadata: Metadata = {
  title: 'Books & Writing',
  description: 'Explore my collection of books including Ethos - A philosophy on design and culture, and The Kup Games - A thrilling mystery novel. Read full chapters online.',
  keywords: [
    'books by Kunal Chheda',
    'Ethos book',
    'The Kup Games',
    'philosophy book',
    'mystery novel',
    'read online books',
    'student author',
    'design philosophy',
    'Indian author',
    'free online books',
  ],
  openGraph: {
    title: 'Books & Writing | 7K Ecosystem',
    description: 'Explore my collection including Ethos and The Kup Games. Read full chapters online for free.',
    url: 'https://7kc.me/books',
    type: 'website',
    images: [
      {
        url: 'https://7kc.me/images/portfolios/lavender-skies-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Books Collection - 7K Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Books & Writing | 7K Ecosystem',
    description: 'Explore my collection including Ethos and The Kup Games. Read online.',
    images: ['https://7kc.me/images/portfolios/lavender-skies-cover.jpg'],
  },
  alternates: {
    canonical: 'https://7kc.me/books',
  },
};

export default function BooksPage() {
  return <BooksPageClient />;
}

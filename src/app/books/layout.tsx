import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Books & Writing | 7K Ecosystem',
  description:
    'Read books and chapter-based writing projects by Kunal Chheda, including Ethos, The Kup Games, and more serialized stories.',
  keywords: [
    'books by Kunal Chheda',
    'read online books',
    'serialized chapters',
    'Ethos book',
    'The Kup Games',
    'Kunal Paresh Chheda',
    '7K books',
  ],
  openGraph: {
    title: 'Books & Writing | 7K Ecosystem',
    description:
      'Read books and chapter-based writing projects by Kunal Chheda, including Ethos, The Kup Games, and more serialized stories.',
    url: 'https://7kc.me/books',
    siteName: '7K Ecosystem',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Books & Writing | 7K Ecosystem',
    description:
      'Read books and chapter-based writing projects by Kunal Chheda, including Ethos, The Kup Games, and more serialized stories.',
    creator: '@kunal7k',
  },
  alternates: {
    canonical: 'https://7kc.me/books',
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

export default function BooksLayout({ children }: { children: ReactNode }) {
  return children;
}
import type { Metadata } from 'next';
import { bookData } from '@/lib/book-content';
import BookDetailClient from './book-detail-client';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const book = bookData[resolvedParams.id as keyof typeof bookData];
  
  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }

  return {
    title: book.title,
    description: book.synopsis,
    keywords: [
      book.title,
      book.author,
      'read online',
      'free book',
      `${book.title} chapters`,
      `${book.author} book`,
      'online reading',
      book.language,
    ],
    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: book.synopsis,
      url: `https://7kc.me/books/${resolvedParams.id}`,
      type: 'website',
      images: [
        {
          url: book.coverImage,
          width: 1200,
          height: 1800,
          alt: `${book.title} cover`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${book.title} by ${book.author}`,
      description: book.synopsis,
      images: [book.coverImage],
    },
    alternates: {
      canonical: `https://7kc.me/books/${resolvedParams.id}`,
    },
  };
}

export default function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <BookDetailClient params={params} />;
}

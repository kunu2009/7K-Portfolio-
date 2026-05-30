import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { bookContent, bookData } from '@/lib/book-content';
import { generateBreadcrumbSchema } from '@/lib/seo';

type Props = {
  params: Promise<{ id: string; chapter: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const book = bookData[resolvedParams.id as keyof typeof bookData];
  const content = bookContent[resolvedParams.id as keyof typeof bookContent];

  if (!book || !content) {
    return {
      title: 'Chapter Not Found',
    };
  }

  const chapterId = Number(resolvedParams.chapter);
  const chapterMetadata = book.chapters.find((chapter: any) => chapter.id === chapterId);
  const chapterContent = content.chapters.find((chapter: any) => chapter.id === chapterId);
  const chapterTitle = chapterMetadata?.title || chapterContent?.title || `Chapter ${chapterId}`;
  const chapterDescription = `${chapterTitle} from ${book.title}. Read the chapter online with the full book context.`;
  const canonicalUrl = `https://7kc.me/books/${resolvedParams.id}/read/${resolvedParams.chapter}`;

  return {
    title: `${chapterTitle} - ${book.title}`,
    description: chapterDescription,
    keywords: [
      book.title,
      chapterTitle,
      book.author,
      'read online chapter',
      'book chapter online',
      `${book.title} chapter ${chapterId}`,
      'free reading',
    ],
    openGraph: {
      title: `${chapterTitle} - ${book.title}`,
      description: chapterDescription,
      url: canonicalUrl,
      type: 'article',
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
      title: `${chapterTitle} - ${book.title}`,
      description: chapterDescription,
      images: [book.coverImage],
    },
    alternates: {
      canonical: canonicalUrl,
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
}

export default async function ReadingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string; chapter: string }>;
}) {
  const resolvedParams = await params;
  const book = bookData[resolvedParams.id as keyof typeof bookData];
  const chapterId = Number(resolvedParams.chapter);
  const chapterMetadata = book?.chapters.find((chapter: any) => chapter.id === chapterId);

  if (!book) {
    return children;
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://7kc.me' },
    { name: 'Books', url: 'https://7kc.me/books' },
    { name: book.title, url: `https://7kc.me/books/${resolvedParams.id}` },
    { name: chapterMetadata?.title || `Chapter ${chapterId}`, url: `https://7kc.me/books/${resolvedParams.id}/read/${resolvedParams.chapter}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {children}
    </>
  );
}
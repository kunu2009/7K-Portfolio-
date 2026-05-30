import { Metadata } from 'next';
import { getAllPosts, getCategories, getTags } from '@/lib/blog';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Blog - Web Development, SEO, Design & App Building Insights',
  description: 'Read web development, SEO, design, app building, and digital product insights from the 7K Ecosystem blog.',
  keywords: [
    'web development blog',
    'SEO blog',
    'Next.js tutorials',
    'React blog',
    'app building insights',
    'digital products blog',
    '7K Ecosystem blog',
  ],
  openGraph: {
    title: 'Blog - Web Development, SEO, Design & App Building Insights',
    description: 'Read web development, SEO, design, app building, and digital product insights from the 7K Ecosystem blog.',
    type: 'website',
    url: 'https://7kc.me/blog',
    siteName: '7K Ecosystem',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Web Development, SEO, Design & App Building Insights',
    description: 'Read web development, SEO, design, app building, and digital product insights from the 7K Ecosystem blog.',
    creator: '@kunal7k',
  },
  alternates: {
    canonical: 'https://7kc.me/blog',
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

export default async function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  const tags = getTags();

  return <BlogClient posts={posts} categories={categories} tags={tags} />;
}

import { Metadata } from 'next';
import { getAllPosts, getCategories, getTags } from '@/lib/blog';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Blog - Web Development Insights & Tutorials',
  description: 'Learn about web development, design trends, and best practices from my blog.',
  openGraph: {
    title: 'Blog - Web Development Insights & Tutorials',
    description: 'Learn about web development, design trends, and best practices from my blog.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  const tags = getTags();

  return <BlogClient posts={posts} categories={categories} tags={tags} />;
}

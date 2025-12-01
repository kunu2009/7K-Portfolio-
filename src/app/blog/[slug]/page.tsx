import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { Calendar, User, Clock, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <main className="min-h-screen bg-background py-20 px-4">
      <article className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {getReadingTime(post.content)}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="flex items-center gap-2 mt-4">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none" style={{ fontFeatureSettings: '"tnum" 1, "cv11" 1' }}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold mb-6 mt-12">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold mb-4 mt-10">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold mb-3 mt-8">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-6 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-6 space-y-2">
                  {children}
                </ol>
              ),
              code: ({ children }) => (
                <code className="px-2 py-1 bg-secondary rounded text-sm">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="p-4 bg-secondary rounded-lg overflow-x-auto mb-6">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              // Custom renderer for tables with proper styling
              table: ({ children }) => (
                <div className="overflow-x-auto my-8 rounded-lg border border-border">
                  <table className="min-w-full border-collapse">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-muted/50">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => (
                <tbody className="bg-background">
                  {children}
                </tbody>
              ),
              th: ({ children }) => (
                <th className="border-b border-border px-6 py-4 text-left font-semibold text-foreground">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border-b border-border px-6 py-4 text-foreground/90" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {children}
                </td>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-muted/30 transition-colors">
                  {children}
                </tr>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link
              href="/blog"
              className="px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors"
            >
              <ArrowLeft className="inline-block mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}

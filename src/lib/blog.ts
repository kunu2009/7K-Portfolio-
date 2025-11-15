import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  published: boolean;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  const posts = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author || 'Anonymous',
        category: data.category || 'Uncategorized',
        tags: data.tags || [],
        image: data.image || '/images/blog/default.jpg',
        published: data.published ?? true,
        content,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const altFilePath = path.join(BLOG_DIR, `${slug}.md`);

  let fullPath = '';
  if (fs.existsSync(filePath)) {
    fullPath = filePath;
  } else if (fs.existsSync(altFilePath)) {
    fullPath = altFilePath;
  } else {
    return null;
  }

  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author || 'Anonymous',
    category: data.category || 'Uncategorized',
    tags: data.tags || [],
    image: data.image || '/images/blog/default.jpg',
    published: data.published ?? true,
    content,
  };
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return categories;
}

export function getTags(): string[] {
  const posts = getAllPosts();
  const allTags = posts.flatMap((post) => post.tags);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags;
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

export function searchPosts(query: string): BlogPost[] {
  const posts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

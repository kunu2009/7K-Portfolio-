import { getAllPosts } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/constants';

export async function GET() {
  const posts = getAllPosts();
  
  const baseUrl = SITE_CONFIG.url;
  
  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: `${SITE_CONFIG.name} - Blog`,
    home_page_url: baseUrl,
    feed_url: `${baseUrl}/feed.json`,
    description: SITE_CONFIG.description,
    icon: `${baseUrl}/favicon.png`,
    favicon: `${baseUrl}/favicon.ico`,
    authors: [
      {
        name: SITE_CONFIG.author.name,
        url: SITE_CONFIG.author.github,
      },
    ],
    language: "en-US",
    items: posts.map((post) => ({
      id: `${baseUrl}/blog/${post.slug}`,
      url: `${baseUrl}/blog/${post.slug}`,
      title: post.title,
      content_text: post.description,
      summary: post.description,
      image: post.image ? `${baseUrl}${post.image}` : undefined,
      date_published: new Date(post.date).toISOString(),
      authors: [
        {
          name: post.author,
        },
      ],
      tags: [post.category, ...post.tags],
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

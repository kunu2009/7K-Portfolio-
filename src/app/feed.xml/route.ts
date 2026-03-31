import { getAllPosts } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/constants';

export async function GET() {
  const posts = getAllPosts();
  
  const baseUrl = SITE_CONFIG.url;
  const feedUrl = `${baseUrl}/feed.xml`;
  
  const rssItems = posts.map((post) => {
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();
    
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${SITE_CONFIG.author.email} (${post.author})</author>
      <category>${post.category}</category>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
      ${post.image ? `<enclosure url="${baseUrl}${post.image}" type="image/jpeg" />` : ''}
    </item>`;
  }).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${SITE_CONFIG.name} - Blog</title>
    <link>${baseUrl}</link>
    <description>${SITE_CONFIG.description}</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <generator>7K Portfolio RSS Generator</generator>
    <image>
      <url>${baseUrl}/favicon.png</url>
      <title>${SITE_CONFIG.name}</title>
      <link>${baseUrl}</link>
    </image>
    <managingEditor>${SITE_CONFIG.author.email} (${SITE_CONFIG.author.name})</managingEditor>
    <webMaster>${SITE_CONFIG.author.email} (${SITE_CONFIG.author.name})</webMaster>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

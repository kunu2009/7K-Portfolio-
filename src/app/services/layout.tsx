import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '7K Studios Services | Web Development, SEO, Design, Social Media & Business Setup',
  description:
    'Professional digital services in India starting at ₹8,000 for core offerings. Web development, SEO, UI/UX, Instagram creatives, reel editing, WhatsApp Business setup, Google Business Profile optimization, Notion setup, AI content writing, and Shopify/Wix store setup.',
  keywords: [
    'affordable services India',
    'freelance services Mumbai',
    'quick services for students',
    'instagram post design service',
    'reel editing services India',
    'logo mini branding package',
    'whatsapp business setup service',
    'google business profile optimization',
    'notion workspace setup',
    'AI content writing services',
    'college project support India',
    'shopify wix setup service',
    'web development India',
    'affordable web design',
    'SEO services India',
    'UI UX design',
    'app development',
    'digital studio India',
    '7K Studios',
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

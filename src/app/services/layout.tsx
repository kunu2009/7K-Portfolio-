import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '7K Studios - Professional Digital Services | Web Development, SEO, UI/UX Design',
  description: 'Affordable digital services in India. Web Development (₹5k-₹15k), App Prototyping (₹2k-₹10k), SEO Optimization (₹1k-₹3k), UI/UX Design (₹1k-₹5k). 50+ projects delivered.',
  keywords: [
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

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact 7K Solutions | Kunal Chheda',
  description:
    'Contact Kunal Chheda (7K Solutions) for web development, design, SEO, templates, and digital product services.',
  alternates: {
    canonical: 'https://7kc.me/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <p className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          Let&apos;s build something meaningful
        </p>

        <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
          Contact 7K Solutions
        </h1>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          For websites, apps, templates, SEO, and growth-focused digital services, share your goal and timeline.
          I&apos;ll reply with the best path and a practical scope.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="https://wa.me/918591247148"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border p-5 hover:bg-accent transition-colors"
          >
            <h2 className="font-semibold">WhatsApp</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fastest response for service inquiries</p>
            <p className="mt-3 text-sm font-medium">+91 85912 47148</p>
          </a>

          <a
            href="mailto:7kmindbeatss@gmail.com"
            className="rounded-2xl border border-border p-5 hover:bg-accent transition-colors"
          >
            <h2 className="font-semibold">Email</h2>
            <p className="mt-1 text-sm text-muted-foreground">Best for detailed project briefs</p>
            <p className="mt-3 text-sm font-medium">7kmindbeatss@gmail.com</p>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            View services
          </Link>
          <Link
            href="/shop"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent"
          >
            Open shop
          </Link>
        </div>
      </section>
    </main>
  );
}

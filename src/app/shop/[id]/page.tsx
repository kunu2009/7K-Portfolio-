import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getShopProductById, shopProducts } from "@/lib/shop-data";
import type { Metadata } from "next";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return shopProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getShopProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | 7K Shop",
    };
  }

  return {
    title: `${product.name} | 7K Digital Shop`,
    description: product.description,
    keywords: [
      product.seoKeyword,
      "digital product",
      "buy digital download",
      "7K shop",
    ],
    openGraph: {
      title: `${product.name} | 7K Shop`,
      description: product.description,
      type: "website",
      url: `https://7kc.me/shop/${product.id}`,
    },
    alternates: {
      canonical: `https://7kc.me/shop/${product.id}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getShopProductById(id);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    offers: {
      "@type": "Offer",
      price: String(product.priceValue),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://7kc.me/shop/${product.id}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link href="/shop" className="mb-7 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← Back to Shop
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="space-y-6">
              <section className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-8 backdrop-blur-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent" />

                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="rounded-full capitalize">
                    {product.category}
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    {product.delivery}
                  </Badge>
                </div>

                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">{product.name}</h1>
                <p className="mb-6 max-w-3xl text-base text-muted-foreground md:text-lg">{product.description}</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/90 p-5">
                    <p className="text-sm text-muted-foreground">Best for</p>
                    <p className="mt-1 font-medium">{product.audience}</p>
                  </div>

                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                    <p className="text-sm text-muted-foreground">Outcome</p>
                    <p className="mt-1 font-medium">{product.outcome}</p>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-border/80 bg-card/70 p-6">
                <h2 className="mb-4 text-2xl font-bold">What you get</h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {product.includes.map((item) => (
                    <Card key={item} className="flex items-start gap-2 border-border/70 p-4 text-sm">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-border/80 bg-card/70 p-6">
                <h2 className="mb-4 text-2xl font-bold">FAQ</h2>
                <div className="space-y-3">
                  {product.faqs.map((faq) => (
                    <Card key={faq.question} className="border-border/70 p-5">
                      <h3 className="mb-2 font-semibold">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-20 lg:h-fit">
              <Card className="overflow-hidden border-border/80 bg-card/90 p-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Instant digital access
                </div>

                <p className="mb-1 text-sm text-muted-foreground">Price</p>
                <p className="mb-5 text-4xl font-bold text-primary">{product.price}</p>

                <div className="space-y-2">
                  <Button className="w-full rounded-full">Buy Now</Button>
                  <Button variant="outline" className="w-full rounded-full">Pre-Order</Button>
                </div>

                <div className="mt-6 space-y-3 border-t border-border/70 pt-5 text-sm text-muted-foreground">
                  <p className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Secure payment flow</p>
                  <p className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Clear delivery instructions</p>
                  <p className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Support via contact channel</p>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

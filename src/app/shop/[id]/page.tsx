import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getShopProductById, shopProducts } from "@/lib/shop-data";
import type { Metadata } from "next";
import { ArrowLeft, Check, ShieldCheck, Sparkles, Star } from "lucide-react";
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
      <main className="container mx-auto px-4 py-12 md:py-14">
        <div className="mx-auto max-w-6xl">
          <Link href="/shop" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Shop
          </Link>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[2rem] border border-border/70 bg-card p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline" className="rounded-full capitalize">{product.category}</Badge>
                <Badge variant="outline" className="rounded-full">{product.delivery}</Badge>
              </div>

              <div className="mb-5 rounded-3xl border border-border/70 bg-background p-4">
                <div className="mb-4 aspect-[4/3] rounded-2xl bg-gradient-to-b from-muted to-muted/40" />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h1 className="text-2xl font-black tracking-[-0.02em] md:text-3xl">{product.name}</h1>
                    <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-sm font-semibold">{product.price}</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" /> 4.8 product rating
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <Card className="rounded-2xl border-border/70 p-4">
                  <p className="text-xs text-muted-foreground">Best for</p>
                  <p className="mt-1 text-sm font-medium">{product.audience}</p>
                </Card>
                <Card className="rounded-2xl border-border/70 p-4">
                  <p className="text-xs text-muted-foreground">Outcome</p>
                  <p className="mt-1 text-sm font-medium">{product.outcome}</p>
                </Card>
              </div>

              <section className="mt-6">
                <h2 className="mb-3 text-xl font-bold">What you get</h2>
                <div className="grid gap-2 sm:grid-cols-2">
                  {product.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2 rounded-xl border border-border/70 bg-background p-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </section>

            <aside className="space-y-6 lg:sticky lg:top-20 lg:h-fit">
              <Card className="rounded-[2rem] border-border/70 bg-card p-5">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
                  <Sparkles className="h-3.5 w-3.5 text-primary" /> Instant digital access
                </div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="mb-5 text-4xl font-black tracking-tight">{product.price}</p>
                <div className="space-y-2">
                  <Button className="w-full rounded-full">Buy Now</Button>
                  <Button variant="outline" className="w-full rounded-full">Pre-Order</Button>
                </div>
                <div className="mt-5 space-y-2 border-t border-border/70 pt-4 text-sm text-muted-foreground">
                  <p className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Secure payment flow</p>
                  <p className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Fast delivery support</p>
                </div>
              </Card>

              <Card className="rounded-[2rem] border-border/70 bg-card p-5">
                <h2 className="mb-3 text-lg font-bold">FAQ</h2>
                <div className="space-y-2">
                  {product.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-border/70 bg-background p-3">
                      <h3 className="text-sm font-semibold">{faq.question}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
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

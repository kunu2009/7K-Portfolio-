"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { shopChecklistFlow, shopProducts } from "@/lib/shop-data";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

const categoryLabel = {
  prompts: "Prompt Packs",
  templates: "Templates",
  bundle: "Bundle",
  code: "Code Kit",
};

export default function ShopClient() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-background to-background" />
        <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative mx-auto px-4 py-24 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">7K Digital Shop • AI-first assets</span>
            </div>

            <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl md:leading-tight">
              Aesthetic digital products,
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                built for real outcomes.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
              Clean design, practical templates, instant delivery. Start with proven products and scale with a low-stress workflow.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="#products">
                <Button size="lg" className="gap-2 rounded-full px-7">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#checklist">
                <Button size="lg" variant="outline" className="rounded-full px-7">
                  View Launch Flow
                </Button>
              </Link>
            </div>

            <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-sm backdrop-blur-sm">
                <p className="font-semibold">Instant Delivery</p>
                <p className="text-muted-foreground">Digital-only files</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-sm backdrop-blur-sm">
                <p className="font-semibold">AI-Optimized</p>
                <p className="text-muted-foreground">Built for fast use</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-sm backdrop-blur-sm">
                <p className="font-semibold">SEO-Ready</p>
                <p className="text-muted-foreground">Portfolio linked</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-14 md:py-16">
        <section id="products" className="mb-20">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Featured Products</h2>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">
                Curated digital offers designed to be useful immediately.
              </p>
            </div>
            <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
              {shopProducts.length} curated items
            </Badge>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shopProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <Card className="group relative flex h-full flex-col justify-between overflow-hidden border-border/80 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

                  <div>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="rounded-full">
                        {categoryLabel[product.category]}
                      </Badge>
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
                  </div>

                  <div className="space-y-3 border-t border-border/70 pt-4">
                    <p className="text-xs text-muted-foreground">Delivery: {product.delivery}</p>
                    <div className="flex gap-2">
                      <Link href={`/shop/${product.id}`} className="w-full">
                        <Button variant="outline" className="w-full rounded-full">Details</Button>
                      </Link>
                      <Link href={`/shop/${product.id}`} className="w-full">
                        <Button className="w-full rounded-full">Buy</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="checklist" className="mb-16">
          <div className="mb-7 max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">Simple Launch Flow</h2>
            <p className="mt-1 text-sm text-muted-foreground md:text-base">
              Follow this sequence to launch fast with less friction.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {shopChecklistFlow.map((item) => (
              <Card key={item.step} className="relative overflow-hidden border-border/80 p-5">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary/30" />
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Step {item.step}: {item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-border/70 bg-gradient-to-r from-card to-card/70 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold md:text-3xl">Ready to launch your first digital product?</h3>
              <p className="mt-2 text-muted-foreground">
                Start with one prompt pack today, then expand into templates and starter kits.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-primary" /> Clear scope</span>
                <span className="inline-flex items-center gap-1"><Zap className="h-4 w-4 text-primary" /> Fast setup</span>
              </div>
            </div>
            <Link href="#products">
              <Button size="lg" className="rounded-full px-8">Start Shopping</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

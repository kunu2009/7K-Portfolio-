"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { shopChecklistFlow, shopProducts } from "@/lib/shop-data";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
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
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="container relative mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Digital Shop • AI-first products</span>
            </div>

            <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
              Minimal. Modern. Built to sell digital products.
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
              Explore high-value digital products with instant delivery and practical outcomes.
              Clean design, clear value, and SEO-ready product structure.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="#products">
                <Button size="lg" className="gap-2 rounded-full">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#checklist">
                <Button size="lg" variant="outline" className="rounded-full">
                  Launch Checklist
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-14">
        <section id="products" className="mb-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Featured Products</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Start with these proven products for your first digital sales.
              </p>
            </div>
            <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
              {shopProducts.length} products
            </Badge>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shopProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <Card className="flex h-full flex-col justify-between border-border/80 bg-card/80 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="rounded-full">
                        {categoryLabel[product.category]}
                      </Badge>
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
                  </div>

                  <div className="space-y-3 pt-3">
                    <p className="text-xs text-muted-foreground">Delivery: {product.delivery}</p>
                    <Button className="w-full rounded-full">Buy / Pre-Order</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="checklist" className="mb-6">
          <div className="mb-6 max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">Simple Shop Launch Checklist</h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Follow this flow from setup to first sales.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {shopChecklistFlow.map((item) => (
              <Card key={item.step} className="p-5">
                <div className="mb-2 flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Step {item.step}: {item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

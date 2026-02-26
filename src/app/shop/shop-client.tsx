"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { shopChecklistFlow, shopProducts } from "@/lib/shop-data";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, Sparkles, Star } from "lucide-react";
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
      <section className="container mx-auto px-4 pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="relative overflow-hidden rounded-[2rem] border-border/70 bg-card p-6 md:min-h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-b from-muted/70 via-card to-card" />
              <div className="relative flex h-full flex-col justify-between">
                <Badge variant="outline" className="w-fit rounded-full">7K SHOP</Badge>
                <div>
                  <h1 className="text-5xl font-black tracking-[-0.03em] md:text-6xl">RUN 7K</h1>
                  <p className="mt-3 max-w-xs text-sm text-muted-foreground">Minimal digital products. Strong outcomes. Clean experience.</p>
                </div>
                <Link href="#products">
                  <Button className="w-full rounded-full gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="rounded-[2rem] border-border/70 bg-card p-5 md:min-h-[420px]">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold tracking-tight">Tailored for you</p>
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full"><Sparkles className="h-4 w-4" /></Button>
              </div>
              <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-2 text-sm text-muted-foreground">
                <Search className="h-4 w-4" /> Search digital assets
              </div>
              <div className="grid grid-cols-2 gap-3">
                {shopProducts.slice(0, 4).map((product) => (
                  <Link key={product.id} href={`/shop/${product.id}`}>
                    <div className="rounded-2xl border border-border/70 bg-background p-3 transition hover:-translate-y-0.5 hover:shadow-md">
                      <div className="mb-2 aspect-square rounded-xl bg-gradient-to-b from-muted to-muted/40" />
                      <p className="line-clamp-1 text-xs font-semibold">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            <Card className="rounded-[2rem] border-border/70 bg-card p-5 md:min-h-[420px]">
              <p className="mb-4 text-sm font-semibold">Product Details</p>
              <div className="mb-4 rounded-3xl border border-border/70 bg-background p-4">
                <div className="mb-3 aspect-[3/4] rounded-2xl bg-gradient-to-b from-muted to-muted/40" />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{shopProducts[0].name}</p>
                    <p className="text-xs text-muted-foreground">{shopProducts[0].category}</p>
                  </div>
                  <Badge variant="outline" className="rounded-full">{shopProducts[0].price}</Badge>
                </div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" /> 4.8 average rating
                </div>
              </div>
              <Link href={`/shop/${shopProducts[0].id}`}>
                <Button className="w-full rounded-full gap-2">
                  View Product <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </motion.div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-14">
        <section id="products" className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black tracking-[-0.02em] md:text-3xl">Featured Products</h2>
              <p className="mt-1 text-sm text-muted-foreground">Clean, attention-grabbing product cards in an app-like layout.</p>
            </div>
            <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">{shopProducts.length} products</Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {shopProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <Card className="rounded-3xl border-border/70 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 aspect-[4/3] rounded-2xl bg-gradient-to-b from-muted to-muted/40" />

                  <div className="mb-3 flex items-center justify-between gap-2">
                    <Badge variant="outline" className="rounded-full">{categoryLabel[product.category]}</Badge>
                    <p className="font-semibold">{product.price}</p>
                  </div>

                  <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">{product.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

                  <div className="mt-4 flex gap-2">
                    <Link href={`/shop/${product.id}`} className="w-full">
                      <Button variant="outline" className="w-full rounded-full">Details</Button>
                    </Link>
                    <Link href={`/shop/${product.id}`} className="w-full">
                      <Button className="w-full rounded-full">Buy</Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="checklist" className="mx-auto mt-14 max-w-6xl rounded-3xl border border-border/70 bg-card p-6 md:p-8">
          <h2 className="text-2xl font-bold md:text-3xl">Simple Launch Flow</h2>
          <p className="mt-1 text-sm text-muted-foreground">Keep this flow and launch without overwhelm.</p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {shopChecklistFlow.map((item) => (
              <div key={item.step} className="rounded-2xl border border-border/70 bg-background p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Step {item.step}: {item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

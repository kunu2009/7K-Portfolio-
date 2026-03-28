"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Palette, 
  Sparkles, 
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  Download
} from "lucide-react";

// Creations will be added here - placeholder for now
const creations: { file: string; title: string; category: string; featured?: boolean }[] = [
  // Add your creations here later
];

const categories = ["All", "Typography", "Design", "Photo Edit"];

export default function CreationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredCreations = selectedCategory === "All" 
    ? creations 
    : creations.filter(c => c.category === selectedCategory);

  const featuredCreations = creations.filter(c => c.featured);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    const filtered = filteredCreations;
    if (direction === "prev") {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1);
    } else {
      setLightboxIndex(lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-pink-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
        </div>
        
        {/* Floating decorations */}
        <div className="absolute top-16 right-10 opacity-15 animate-pulse hidden md:block">
          <img src="/images/decorations/anime-girl-sketch.jpg" alt="" width={110} height={110} className="rounded-2xl" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-12 hidden lg:block animate-bounce" style={{ animationDuration: '4s' }}>
          <img src="/images/decorations/cat-sketch-2.jpg" alt="" width={100} height={100} className="rounded-full" />
        </div>
        <div className="absolute top-1/3 left-5 opacity-10 hidden xl:block">
          <img src="/images/decorations/kunal-ringlight.jpg" alt="" width={90} height={90} className="rounded-full" />
        </div>
        <div className="absolute bottom-1/4 right-20 opacity-8 hidden xl:block">
          <img src="/images/decorations/deadpool-glass.jpeg" alt="" width={100} height={100} className="rounded-2xl" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20"
            >
              <Palette className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium">Creative Gallery</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              My{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Creations
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Beyond coding, I love expressing creativity through design. Here&apos;s a collection 
              of my Picsart creations, typography experiments, and photo edits.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 pt-8"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border">
                <Sparkles className="w-5 h-5 text-pink-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold">{creations.length}</div>
                  <div className="text-xs text-muted-foreground">Creations</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border">
                <Palette className="w-5 h-5 text-purple-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold">{categories.length - 1}</div>
                  <div className="text-xs text-muted-foreground">Categories</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border">
                <Heart className="w-5 h-5 text-red-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold">∞</div>
                  <div className="text-xs text-muted-foreground">Passion</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-pink-500/5 to-purple-500/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-500" />
            Featured Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCreations.map((creation, index) => (
              <motion.div
                key={creation.file}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 border-pink-500/20 hover:border-pink-500/50 transition-colors shadow-xl"
                onClick={() => openLightbox(creations.indexOf(creation))}
              >
                <Image
                  src={`/images/creations/${creation.file}`}
                  alt={creation.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{creation.title}</h3>
                    <p className="text-white/70 text-sm">{creation.category}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "bg-card border border-border hover:border-pink-500/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredCreations.map((creation, index) => (
                <motion.div
                  key={creation.file}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-border hover:border-pink-500/50 transition-colors shadow-md group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={`/images/creations/${creation.file}`}
                    alt={creation.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
          <p className="text-muted-foreground mb-8">
            Check out my coding journey or the apps I&apos;ve built with the same passion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-4 h-4" />
              Dev Journey
            </Link>
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
            >
              <Heart className="w-4 h-4" />
              Explore Apps
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/creations/${filteredCreations[lightboxIndex].file}`}
                alt={filteredCreations[lightboxIndex].title}
                width={1200}
                height={1200}
                className="rounded-lg object-contain max-h-[85vh]"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-xl font-semibold">{filteredCreations[lightboxIndex].title}</h3>
                    <p className="text-white/70">{filteredCreations[lightboxIndex].category}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <span>{lightboxIndex + 1} / {filteredCreations.length}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

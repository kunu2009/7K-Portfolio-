import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Star, PenLine, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Writing = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  pages: number;
  chapters: number;
  rating: number;
  category: string;
};

const writings: Writing[] = [
  {
    id: "ethos",
    title: "Ethos and Thought",
    description: "A comprehensive exploration of design philosophy, cultural values, and the frameworks that shape how we build products and lead organizations.",
    coverImage: "/images/books/ethos-cover.png",
    pages: 193,
    chapters: 12,
    rating: 4.5,
    category: "Philosophy",
  },
  {
    id: "kupgames",
    title: "The Kup Games",
    description: "A thrilling mystery unfolding in the halls of Kupam School, where a strategic student named Rudra must navigate dark secrets and dangerous games.",
    coverImage: "/images/books/kupgames-cover.png",
    pages: 160,
    chapters: 5,
    rating: 4.7,
    category: "Mystery",
  },
  {
    id: "somaiya-survival",
    title: "The Somaiya Survival Manual",
    description: "Campus culture, real stories, tips, hacks, and humour. Everything you need to survive and thrive at KJ Somaiya College.",
    coverImage: "/images/books/somaiya-survival-cover.png",
    pages: 120,
    chapters: 8,
    rating: 4.9,
    category: "Campus Life",
  },
];

// TOGGLE: Set to true to show, false to hide
const SHOW_WRITING_SECTION = true;

const WritingSection = () => {
  // Hide section if toggle is false
  if (!SHOW_WRITING_SECTION) {
    return null;
  }

  return (
    <section id="writing" className="container py-24 sm:py-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Writing</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Exploring worlds and ideas through books and articles.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link href="/books">
            <Button variant="outline" className="gap-2">
              <BookOpen className="h-4 w-4" />
              My Books
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" className="gap-2">
              <PenLine className="h-4 w-4" />
              Blog & Articles
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Books Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Books
          </h3>
          <Link href="/books" className="text-primary hover:underline flex items-center gap-1 text-sm">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {writings.map((writing) => (
          <Link key={writing.id} href={`/books/${writing.id}`}>
            <Card className="overflow-hidden group bg-secondary/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-primary cursor-pointer h-full">
              <div className="flex flex-col h-full">
                {/* Book Cover - Better sizing to show full cover */}
                <div className="h-[240px] md:h-[220px] relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={writing.coverImage}
                      alt={`${writing.title} cover`}
                      fill
                      className="object-contain drop-shadow-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Book Details */}
                <CardContent className="flex-grow p-6 space-y-3">
                  <div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {writing.category}
                    </span>
                  </div>
                  <h4 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">
                    {writing.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {writing.description}
                  </p>
                  <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{writing.rating}</span>
                    </div>
                    <span>{writing.pages} pages</span>
                    <span>{writing.chapters} chapters</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
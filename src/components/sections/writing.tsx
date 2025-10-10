import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Writing = {
  id: string;
  title: string;
  description: string;
  coverColor: string;
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
    coverColor: "from-indigo-500 to-purple-600",
    pages: 193,
    chapters: 12,
    rating: 4.5,
    category: "Philosophy",
  },
  {
    id: "kupgames",
    title: "The Kup Games",
    description: "A thrilling mystery unfolding in the halls of Kupam School, where a strategic student named Rudra must navigate dark secrets and dangerous games.",
    coverColor: "from-slate-700 to-slate-900",
    pages: 160,
    chapters: 5,
    rating: 4.7,
    category: "Mystery",
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
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Books & Writing</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Exploring worlds and ideas through the written word.
        </p>
        <Link href="/books">
          <Button variant="outline" className="mb-16 gap-2">
            <BookOpen className="h-4 w-4" />
            View Full Library
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {writings.map((writing) => (
          <Link key={writing.id} href={`/books/${writing.id}`}>
            <Card className="overflow-hidden group bg-secondary/50 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-primary cursor-pointer h-full">
              <div className="flex flex-col sm:flex-row h-full">
                {/* Book Cover */}
                <div className="sm:w-1/3 min-h-[200px] sm:min-h-full">
                  <div className={`w-full h-full bg-gradient-to-br ${writing.coverColor} flex items-center justify-center p-8`}>
                    <BookOpen className="h-20 w-20 text-white/80" />
                  </div>
                </div>

                {/* Book Details */}
                <div className="sm:w-2/3 flex flex-col p-6 sm:p-8">
                  <CardContent className="flex-grow p-0 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {writing.category}
                        </span>
                      </div>
                      <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {writing.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {writing.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{writing.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {writing.pages} pages
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {writing.chapters} chapters
                      </div>
                    </div>

                    <Button className="w-full sm:w-auto mt-4 gap-2 bg-gradient-to-r from-primary to-accent">
                      Start Reading
                      <BookOpen className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WritingSection;

    
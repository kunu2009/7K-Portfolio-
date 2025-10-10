'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronRight, Home, Bookmark, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const bookData: Record<string, any> = {
  ethos: {
    title: 'Ethos and Thought',
    author: 'Kunal Paresh Chheda',
    rating: 4.5,
    pages: 193,
    language: 'ENG',
    coverColor: 'from-indigo-500 to-purple-600',
    chapters: [
      { id: 1, title: 'Chapter 1 - Ethos and Thought', pages: '1-18' },
      { id: 2, title: 'Chapter 2 - Dharma, Karma, Moksha', pages: '19-35' },
      { id: 3, title: 'Chapter 3 - Reason Humanism Individualism', pages: '36-52' },
      { id: 4, title: 'Chapter 4 - Spirituality and Secularism', pages: '53-68' },
      { id: 5, title: 'Chapter 5 - Community and Individualism', pages: '69-85' },
      { id: 6, title: 'Chapter 6 - Symbolism in Art and Architecture', pages: '86-102' },
      { id: 7, title: 'Chapter 7 - Education and Knowledge Systems', pages: '103-119' },
      { id: 8, title: 'Chapter 8 - How Values Shape Tech Design', pages: '120-135' },
      { id: 9, title: 'Chapter 9 - Globalization and Ethical Fusion', pages: '136-152' },
      { id: 10, title: 'Chapter 10 - Rituals Habits and Inner Work', pages: '153-168' },
      { id: 11, title: 'Chapter 11 - Organizational Design Structures', pages: '169-184' },
      { id: 12, title: 'Chapter 12 - A Minimal Manifesto', pages: '185-193' },
    ],
  },
  kupgames: {
    title: 'The Kup Games',
    author: 'Kunal Paresh Chheda',
    rating: 4.7,
    pages: 160,
    language: 'ENG',
    coverColor: 'from-slate-700 to-slate-900',
    chapters: [
      { id: 1, title: 'Chapter 1 - The Arrival at Kupam', pages: '1-32' },
      { id: 2, title: 'Chapter 2 - The First Crack', pages: '33-64' },
      { id: 3, title: 'Chapter 3 - The Disappearance', pages: '65-96' },
      { id: 4, title: 'Chapter 4 - The Watcher', pages: '97-128' },
      { id: 5, title: 'Chapter 5 - The Enemy or the Ally', pages: '129-160' },
    ],
  },
};

export default function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const book = bookData[resolvedParams.id];
  const [activeTab, setActiveTab] = useState<'home' | 'bookmark' | 'chat'>('home');

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Book not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/books" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold hidden sm:inline">Back to Library</span>
          </Link>
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent truncate max-w-[200px] sm:max-w-none">
              {book.title}
            </h1>
          </div>
          <div className="w-[80px] sm:w-[140px]" />
        </div>
      </header>

      {/* Hero Section with Book Info */}
      <section className="relative py-12 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Book Cover */}
            <div className="flex justify-center">
              <div className={`w-64 aspect-[2/3] rounded-2xl bg-gradient-to-br ${book.coverColor} shadow-2xl flex flex-col items-center justify-center p-8 text-white`}>
                <BookOpen className="h-20 w-20 mb-6 opacity-80" />
                <h2 className="text-2xl font-bold text-center mb-3">{book.title}</h2>
                <p className="text-base opacity-80 text-center">{book.author}</p>
              </div>
            </div>

            {/* Book Details */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{book.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{book.author}</p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <span className="font-medium">Rating</span>
                  <span className="text-primary font-bold">{book.rating}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <BookOpen className="h-4 w-4" />
                  <span>{book.pages} pages</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <span className="font-medium">Language</span>
                  <span className="text-primary font-bold">{book.language}</span>
                </div>
              </div>

              <Link href={`/books/${resolvedParams.id}/read/1`}>
                <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Continue reading
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis Section */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Synopsis</h2>
          <p className="text-muted-foreground leading-relaxed">
            {resolvedParams.id === 'ethos' 
              ? "This chapter names the two central instruments of this book and shows how they shape the world you design, lead, and live inside. I offer precise definitions, a few guiding metaphors, concrete stories from product work and community projects, and repeatable practices you can use today to surface assumptions and rewire defaults."
              : "Jack and Jill is the story of a boy and a girl who went up a hill together. They went to fetch a pail of water, but unfortunately, their plan is disrupted when Jack came. Not only do the main characters face obstacles..."
            }
          </p>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {book.title === 'The Kup Games' ? 'Chapters' : 'Chapter 2 - New Hope'}
            </h2>
            <span className="text-sm text-muted-foreground">
              Page {book.chapters[0].pages}
            </span>
          </div>

          <div className="space-y-3">
            {book.chapters.map((chapter: any) => (
              <Link key={chapter.id} href={`/books/${resolvedParams.id}/read/${chapter.id}`}>
                <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4 hover:bg-card hover:border-primary/50 transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">Pages {chapter.pages}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-border/40 px-4 py-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('bookmark')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'bookmark' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            <Bookmark className="h-5 w-5" />
            <span className="text-xs">Bookmark</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'chat' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs">My Page</span>
          </button>
        </div>
      </div>
    </div>
  );
}

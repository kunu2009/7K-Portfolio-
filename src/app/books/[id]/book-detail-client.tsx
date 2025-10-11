'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, ChevronRight, Home, Bookmark, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookData } from '@/lib/book-content';

export default function BookDetailClient({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const book = bookData[resolvedParams.id as keyof typeof bookData];
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
              <div className="w-64 aspect-[2/3] rounded-2xl shadow-2xl relative overflow-hidden">
                <Image
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 384px"
                  priority
                />
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
            {book.synopsis}
          </p>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Chapters</h2>
            <span className="text-sm text-muted-foreground">
              {book.chapters.length} chapters
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

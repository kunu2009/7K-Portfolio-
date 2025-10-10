'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const books = [
  {
    id: 'ethos',
    title: 'Ethos and Thought',
    author: 'Kunal Paresh Chheda',
    description: 'A comprehensive exploration of design philosophy, cultural values, and the intersection of Eastern and Western thought in technology and leadership.',
    rating: 4.5,
    pages: 193,
    coverColor: 'from-indigo-500 to-purple-600',
    category: 'Philosophy',
    chapters: 12,
  },
  {
    id: 'kupgames',
    title: 'The Kup Games',
    author: 'Kunal Paresh Chheda',
    description: 'A thrilling mystery unfolding in Kupam, where a seemingly ordinary student Rudra discovers dark secrets hidden beneath the surface of a quiet town.',
    rating: 4.7,
    pages: 160,
    coverColor: 'from-slate-700 to-slate-900',
    category: 'Mystery',
    chapters: 5,
  },
];

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Studioll</h1>
          </div>
          <div className="w-[140px]" /> {/* Spacer for balance */}
        </div>
      </header>

      {/* Hero Section - Desktop */}
      <section className="hidden lg:block relative py-12 px-4">
        <div className="container max-w-7xl mx-auto">
          {/* Search */}
          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 max-w-md bg-card/50 border-border/50"
            />
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-8">My Books</h2>

          {/* Book Carousel - Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {filteredBooks.map((book) => (
              <Link key={book.id} href={`/books/${book.id}`} className="group">
                <div className={`aspect-[2/3] rounded-xl bg-gradient-to-br ${book.coverColor} shadow-2xl transform transition-all group-hover:scale-105 group-hover:shadow-primary/20 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <BookOpen className="h-12 w-12 mb-4 opacity-80" />
                    <h3 className="text-lg font-bold text-center mb-2">{book.title}</h3>
                    <p className="text-sm opacity-80 text-center">{book.author}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Book Section - Desktop */}
          {filteredBooks.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-12 bg-card/30 backdrop-blur border border-border/50 rounded-3xl p-12">
              <div className="flex items-center justify-center">
                <div className={`aspect-[2/3] w-full max-w-sm rounded-2xl bg-gradient-to-br ${filteredBooks[0].coverColor} shadow-2xl relative overflow-hidden`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                    <BookOpen className="h-16 w-16 mb-6 opacity-80" />
                    <h3 className="text-2xl font-bold text-center mb-3">{filteredBooks[0].title}</h3>
                    <p className="text-base opacity-80 text-center">{filteredBooks[0].author}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-sm text-primary font-medium mb-2">Best Book</span>
                <h3 className="text-4xl font-bold text-foreground mb-4">{filteredBooks[0].title}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {filteredBooks[0].description}
                </p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-lg font-semibold">{filteredBooks[0].rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{filteredBooks[0].pages} pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{filteredBooks[0].chapters} chapters</span>
                  </div>
                </div>

                <Link href={`/books/${filteredBooks[0].id}`}>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    READ MORE
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mobile View */}
      <section className="lg:hidden px-4 py-8">
        <div className="container max-w-md mx-auto">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-border/50"
            />
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-6">My Books</h2>

          {/* Book Cards - Mobile */}
          <div className="space-y-6">
            {filteredBooks.map((book) => (
              <Link key={book.id} href={`/books/${book.id}`}>
                <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex gap-4 mb-4">
                    <div className={`w-24 aspect-[2/3] rounded-xl bg-gradient-to-br ${book.coverColor} shadow-lg flex-shrink-0 flex items-center justify-center`}>
                      <BookOpen className="h-8 w-8 text-white opacity-80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground mb-1 truncate">{book.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                          <span>{book.rating}</span>
                        </div>
                        <span className="text-muted-foreground">{book.pages} pages</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Continue Reading Section */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-foreground mb-4">Continue Reading</h3>
            {filteredBooks.slice(0, 2).map((book) => (
              <Link key={`continue-${book.id}`} href={`/books/${book.id}`}>
                <div className="bg-card/30 border border-border/50 rounded-xl p-4 mb-4 hover:bg-card/50 transition-all">
                  <h4 className="font-semibold text-foreground mb-1">{book.title}</h4>
                  <div className="w-full bg-border/30 rounded-full h-1.5 mb-2">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">35%</p>
                </div>
              </Link>
            ))}
          </div>

          {/* New Arrival */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">New Arrival</h3>
              <button className="text-primary text-sm">See All</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {filteredBooks.map((book) => (
                <Link key={`new-${book.id}`} href={`/books/${book.id}`}>
                  <div className={`aspect-[2/3] rounded-lg bg-gradient-to-br ${book.coverColor} shadow-lg flex items-center justify-center`}>
                    <BookOpen className="h-6 w-6 text-white opacity-80" />
                  </div>
                  <p className="text-xs font-medium text-foreground mt-2 truncate">{book.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{book.author}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

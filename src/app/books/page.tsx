'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Star, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

import { bookData } from '@/lib/book-content';

const books = [
  {
    id: 'ethos',
    title: bookData.ethos.title,
    author: bookData.ethos.author,
    description: 'A comprehensive exploration of design philosophy, cultural values, and the intersection of Eastern and Western thought in technology and leadership.',
    rating: bookData.ethos.rating,
    pages: bookData.ethos.pages,
    coverImage: bookData.ethos.coverImage,
    category: 'Philosophy',
    chapters: bookData.ethos.chapters.length,
  },
  {
    id: 'kupgames',
    title: bookData.kupgames.title,
    author: bookData.kupgames.author,
    description: 'A thrilling mystery unfolding in Kupam, where a seemingly ordinary student Rudra discovers dark secrets hidden beneath the surface of a quiet town.',
    rating: bookData.kupgames.rating,
    pages: bookData.kupgames.pages,
    coverImage: bookData.kupgames.coverImage,
    category: 'Mystery',
    chapters: bookData.kupgames.chapters.length,
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
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Books</h1>
          </div>
          <div className="w-[140px]" /> {/* Spacer */}
        </div>
      </header>

      {/* Desktop View - Completely Redesigned */}
      <section className="hidden lg:block relative py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">My Library</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring worlds and ideas through the written word
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search books by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base bg-card/50 border-border/50 rounded-xl"
              />
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {filteredBooks.map((book) => (
              <Link key={book.id} href={`/books/${book.id}`}>
                <Card className="overflow-hidden group bg-card/50 hover:bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer">
                  <div className="grid grid-cols-2 gap-6 p-6">
                    {/* Book Cover - Larger */}
                    <div className="aspect-[2/3] rounded-xl shadow-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        priority
                      />
                    </div>

                    {/* Book Details */}
                    <div className="flex flex-col justify-center space-y-4">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                          {book.category}
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {book.title}
                        </h2>
                        <p className="text-sm text-muted-foreground font-medium">
                          by {book.author}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                        {book.description}
                      </p>

                      {/* Stats */}
                      <div className="space-y-3 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-semibold">{book.rating} Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{book.pages} pages • {book.chapters} chapters</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full mt-4 gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 group-hover:scale-105 transition-transform">
                        Start Reading
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* No results */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No books found</h3>
              <p className="text-muted-foreground">Try adjusting your search query</p>
            </div>
          )}
        </div>
      </section>

      {/* Mobile View - Keep as is (user likes it) */}
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

          {/* Books List */}
          <div className="space-y-6">
            {filteredBooks.map((book) => (
              <Link key={book.id} href={`/books/${book.id}`}>
                <Card className="overflow-hidden bg-card/50 hover:bg-card border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex gap-4 p-4">
                    {/* Book Cover */}
                    <div className="w-24 aspect-[2/3] rounded-lg shadow-lg relative overflow-hidden flex-shrink-0">
                      <Image
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>

                    {/* Book Info */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary inline-block mb-2">
                          {book.category}
                        </span>
                        <h3 className="font-bold text-foreground mb-1 truncate">{book.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{book.author}</p>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                          <span>{book.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{book.pages} pages</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* No results */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No books found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

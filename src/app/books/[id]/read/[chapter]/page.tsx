'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ChevronLeft, ChevronRight, Settings, Bookmark, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookData, bookContent } from '@/lib/book-content';

// Component to render chapter links in text
function ChapterLinkText({ text, bookId, currentBookChapters }: { text: string; bookId: string; currentBookChapters: number }) {
  // Match patterns like "Chapter 2", "Chapter 3", "chapter 4", etc.
  const chapterPattern = /(?:→\s*)?[Cc]hapter\s+(\d+)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = chapterPattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    const chapterNum = parseInt(match[1]);
    // Only make it a link if the chapter exists in this book
    if (chapterNum >= 1 && chapterNum <= currentBookChapters) {
      parts.push(
        <Link 
          key={match.index}
          href={`/books/${bookId}/read/${chapterNum}`}
          className="text-primary hover:underline font-medium inline-flex items-center gap-1"
        >
          {match[0]}
        </Link>
      );
    } else {
      parts.push(match[0]);
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return <>{parts}</>;
}

export default function ReadingPage({ 
  params 
}: { 
  params: Promise<{ id: string; chapter: string }> 
}) {
  const resolvedParams = use(params);
  const bookId = resolvedParams.id;
  const chapterId = parseInt(resolvedParams.chapter);
  
  const book = bookData[bookId as keyof typeof bookData];
  const content = bookContent[bookId as keyof typeof bookContent];
  
  const [fontSize, setFontSize] = useState(16);
  const [showSettings, setShowSettings] = useState(false);

  if (!book || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Book not found</p>
      </div>
    );
  }

  const chapter = content.chapters.find((ch: any) => ch.id === chapterId);
  const currentChapterIndex = content.chapters.findIndex((ch: any) => ch.id === chapterId);
  const prevChapter = currentChapterIndex > 0 ? content.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < content.chapters.length - 1 ? content.chapters[currentChapterIndex + 1] : null;

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chapter not found</p>
      </div>
    );
  }

  const chapterMetadata = book.chapters.find((ch: any) => ch.id === chapterId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl">
        <div className="container flex h-14 items-center justify-between px-4 max-w-4xl mx-auto">
          <Link 
            href={`/books/${bookId}`} 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium hidden sm:inline">Back</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg hover:bg-accent/50 transition-colors"
            >
              <Settings className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Bookmark className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="border-t border-border/40 bg-card/95 backdrop-blur-xl">
            <div className="container max-w-4xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Font Size</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                    disabled={fontSize <= 12}
                  >
                    A-
                  </Button>
                  <span className="text-sm font-medium w-12 text-center">{fontSize}px</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                    disabled={fontSize >= 24}
                  >
                    A+
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Reading Content */}
      <main className="container max-w-3xl mx-auto px-4 py-8 md:py-12 pb-32">
        {/* Chapter Title */}
        <div className="mb-8">
          <div className="text-sm text-muted-foreground mb-2">
            {book.title} • Chapter {chapterId}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {chapterMetadata?.title || chapter.title}
          </h1>
          {chapterMetadata?.pages && (
            <div className="text-sm text-muted-foreground">
              Pages {chapterMetadata.pages}
            </div>
          )}
        </div>

        {/* Chapter Content with Markdown Rendering */}
        <article 
          className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90 prose-h1:hidden prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3"
          style={{ fontSize: `${fontSize}px`, lineHeight: '1.75' }}
        >
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              // Custom renderer for paragraphs to handle chapter links
              p: ({ children }) => {
                const processChildren = (child: any): any => {
                  if (typeof child === 'string') {
                    return <ChapterLinkText text={child} bookId={bookId} currentBookChapters={book.chapters.length} />;
                  }
                  return child;
                };
                
                return (
                  <p>
                    {Array.isArray(children) 
                      ? children.map((child, i) => <span key={i}>{processChildren(child)}</span>)
                      : processChildren(children)
                    }
                  </p>
                );
              },
              // Custom renderer for list items
              li: ({ children }) => {
                const processChildren = (child: any): any => {
                  if (typeof child === 'string') {
                    return <ChapterLinkText text={child} bookId={bookId} currentBookChapters={book.chapters.length} />;
                  }
                  return child;
                };
                
                return (
                  <li>
                    {Array.isArray(children) 
                      ? children.map((child, i) => <span key={i}>{processChildren(child)}</span>)
                      : processChildren(children)
                    }
                  </li>
                );
              },
            }}
          >
            {chapter.content}
          </ReactMarkdown>
        </article>

        {/* Chapter Navigation - Fixed at bottom with proper spacing */}
        <div className="fixed bottom-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border/40 py-4 px-4 z-40">
          <div className="container max-w-3xl mx-auto flex items-center justify-between gap-4">
            {prevChapter ? (
              <Link href={`/books/${bookId}/read/${prevChapter.id}`} className="flex-1">
                <Button variant="outline" className="w-full group">
                  <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="truncate hidden sm:inline">Previous</span>
                  <span className="truncate sm:hidden">Prev</span>
                </Button>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            <Link href={`/books/${bookId}`} className="px-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                {chapterId} / {book.chapters.length}
              </Button>
            </Link>

            {nextChapter ? (
              <Link href={`/books/${bookId}/read/${nextChapter.id}`} className="flex-1">
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 group">
                  <span className="truncate hidden sm:inline">Next Chapter</span>
                  <span className="truncate sm:hidden">Next</span>
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <Link href={`/books/${bookId}`} className="flex-1">
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Finish
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>

      {/* Progress Bar - positioned above navigation */}
      <div className="fixed bottom-[calc(4rem+56px)] left-0 right-0 h-1 bg-muted z-40">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${((chapterId) / book.chapters.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Settings, Lock, Save, Plus, Trash2, Eye, EyeOff, Home, LogOut, Check, X, BookOpen, Smartphone, User, Upload, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { App } from "@/lib/apps-data";
import type { Book } from "@/lib/books-data";

export default function UniversalSettingsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("apps");
  
  // Apps state
  const [apps, setApps] = useState<App[]>([]);
  const [editingApp, setEditingApp] = useState<App | null>(null);
  
  // Books state
  const [books, setBooks] = useState<Book[]>([]);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [uploadedMD, setUploadedMD] = useState<string>("");
  
  // General state
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState("");

  // Check session on mount
  useEffect(() => {
    const session = sessionStorage.getItem('portfolio_admin_session');
    if (session) {
      try {
        const parsed = JSON.parse(session);
        if (parsed.authenticated && Date.now() - parsed.timestamp < 3600000) {
          setIsAuthenticated(true);
          loadApps();
          loadBooks();
        }
      } catch (e) {
        console.error('Session error:', e);
      }
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem('portfolio_admin_session', JSON.stringify({
          authenticated: true,
          timestamp: Date.now()
        }));
        setIsAuthenticated(true);
        setPassword("");
        loadApps();
        loadBooks();
      } else {
        setLoginError(data.message || "Invalid credentials");
      }
    } catch (error) {
      setLoginError("Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadApps = async () => {
    try {
      const response = await fetch('/api/apps');
      const data = await response.json();
      if (data.success) {
        setApps(data.apps);
      }
    } catch (error) {
      console.error('Failed to load apps:', error);
    }
  };

  const loadBooks = async () => {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();
      if (data.success) {
        setBooks(data.books);
      }
    } catch (error) {
      console.error('Failed to load books:', error);
    }
  };

  const handleSaveApps = async () => {
    setLoading(true);
    setSaveError("");
    setSaveSuccess(false);

    try {
      const response = await fetch('/api/apps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apps,
          commitMessage: 'Update apps data from universal settings panel'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        setSaveError(data.message || "Failed to save changes");
      }
    } catch (error) {
      setSaveError("Failed to save changes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBooks = async () => {
    setLoading(true);
    setSaveError("");
    setSaveSuccess(false);

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          books,
          commitMessage: 'Update books data from universal settings panel'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        setSaveError(data.message || "Failed to save changes");
      }
    } catch (error) {
      setSaveError("Failed to save changes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target?.result as string;
      setUploadedMD(content);
      
      // Auto-parse chapters from MD file
      const chapters = parseChaptersFromMD(content);
      
      if (editingBook) {
        setEditingBook({
          ...editingBook,
          chapters: chapters
        });
      }
    };
    reader.readAsText(file);
  };

  const parseChaptersFromMD = (content: string) => {
    // Split by ## headings (chapters)
    const chapterRegex = /^##\s+(.+)$/gm;
    const matches = [...content.matchAll(chapterRegex)];
    
    return matches.map((match, index) => ({
      id: index + 1,
      title: match[1].trim(),
      pages: `${index * 10 + 1}-${(index + 1) * 10}`,
      content: extractChapterContent(content, match.index!, matches[index + 1]?.index)
    }));
  };

  const extractChapterContent = (fullContent: string, startIndex: number, endIndex?: number) => {
    return fullContent.slice(startIndex, endIndex).trim();
  };

  const handleAddBook = () => {
    const newBook: Book = {
      id: `book-${Date.now()}`,
      title: "New Book",
      author: "Author Name",
      rating: 4.0,
      pages: 100,
      language: "ENG",
      coverImage: "/images/books/default-cover.png",
      synopsis: "Book synopsis goes here...",
      category: "General",
      chapters: []
    };
    setBooks([...books, newBook]);
    setEditingBook(newBook);
  };

  const handleDeleteBook = (bookId: string) => {
    if (confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter(b => b.id !== bookId));
      if (editingBook?.id === bookId) {
        setEditingBook(null);
      }
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('portfolio_admin_session');
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-slate-950 dark:via-gray-950 dark:to-stone-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 shadow-2xl">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center mb-8">
              <div className="p-4 rounded-2xl bg-primary/10 mb-4">
                <Lock className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Portfolio Settings</h1>
              <p className="text-muted-foreground text-center">
                Sign in to manage your portfolio apps, books, and more
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                  autoComplete="username"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    autoComplete="current-password"
                    className="h-12 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {loginError && (
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                  <X className="h-4 w-4" />
                  {loginError}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-lg font-semibold"
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Home className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Universal Settings Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-slate-950 dark:via-gray-950 dark:to-stone-950">
      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.01]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Universal Settings</h1>
                <p className="text-sm text-muted-foreground">Manage everything in one place</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {saveSuccess && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium">
                  <Check className="h-4 w-4" />
                  Saved successfully!
                </div>
              )}
              
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>

              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="apps" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Apps
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Books
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Apps Tab */}
          <TabsContent value="apps" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Manage Apps</CardTitle>
                    <CardDescription>Edit your portfolio applications</CardDescription>
                  </div>
                  <Button onClick={handleSaveApps} disabled={loading}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Apps
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  Apps management interface (reusing existing apps code)
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Books Tab */}
          <TabsContent value="books" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Books List */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Books</CardTitle>
                    <Button size="sm" onClick={handleAddBook}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {books.map((book) => (
                      <div
                        key={book.id}
                        onClick={() => setEditingBook(book)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          editingBook?.id === book.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">{book.title}</h3>
                            <p className="text-xs text-muted-foreground">{book.author}</p>
                            <Badge variant="secondary" className="mt-1 text-xs">
                              {book.chapters.length} chapters
                            </Badge>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteBook(book.id);
                            }}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {books.length === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-8">
                        No books yet. Click + to add one.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Book Editor */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>
                      {editingBook ? `Edit: ${editingBook.title}` : 'Select a book to edit'}
                    </CardTitle>
                    {editingBook && (
                      <Button onClick={handleSaveBooks} disabled={loading}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {editingBook ? (
                    <div className="space-y-6">
                      {/* Book Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Title</label>
                          <Input
                            value={editingBook.title}
                            onChange={(e) => setEditingBook({...editingBook, title: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Author</label>
                          <Input
                            value={editingBook.author}
                            onChange={(e) => setEditingBook({...editingBook, author: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Category</label>
                          <Input
                            value={editingBook.category}
                            onChange={(e) => setEditingBook({...editingBook, category: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Cover Image URL</label>
                          <Input
                            value={editingBook.coverImage}
                            onChange={(e) => setEditingBook({...editingBook, coverImage: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Pages</label>
                          <Input
                            type="number"
                            value={editingBook.pages}
                            onChange={(e) => setEditingBook({...editingBook, pages: parseInt(e.target.value)})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Rating</label>
                          <Input
                            type="number"
                            step="0.1"
                            max="5"
                            value={editingBook.rating}
                            onChange={(e) => setEditingBook({...editingBook, rating: parseFloat(e.target.value)})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Synopsis</label>
                        <Textarea
                          value={editingBook.synopsis}
                          onChange={(e) => setEditingBook({...editingBook, synopsis: e.target.value})}
                          rows={4}
                        />
                      </div>

                      {/* MD File Upload */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Upload MD File</label>
                        <div className="flex items-center gap-4">
                          <Input
                            type="file"
                            accept=".md,.markdown"
                            onChange={handleFileUpload}
                            className="flex-1"
                          />
                          <Button variant="outline" size="sm">
                            <Upload className="h-4 w-4 mr-2" />
                            Upload
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Upload an MD file to auto-generate chapters. Chapters are parsed from ## headings.
                        </p>
                      </div>

                      {/* Chapters List */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Chapters ({editingBook.chapters.length})</label>
                        <div className="border rounded-lg divide-y max-h-64 overflow-y-auto">
                          {editingBook.chapters.map((chapter) => (
                            <div key={chapter.id} className="p-3 hover:bg-muted/50">
                              <div className="flex items-start justify-between">
                                <div>
                                  <p className="font-medium">Chapter {chapter.id}: {chapter.title}</p>
                                  <p className="text-xs text-muted-foreground">Pages {chapter.pages}</p>
                                </div>
                                <FileText className="h-4 w-4 text-muted-foreground" />
                              </div>
                            </div>
                          ))}
                          {editingBook.chapters.length === 0 && (
                            <p className="text-sm text-muted-foreground text-center py-8">
                              No chapters yet. Upload an MD file to generate chapters.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Select a book from the list to start editing</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Settings</CardTitle>
                <CardDescription>Manage your personal information and portfolio details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  Portfolio management interface (Coming soon)
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Configure general preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  General settings interface (Coming soon)
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Error Display */}
        {saveError && (
          <div className="fixed bottom-4 right-4 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 shadow-lg max-w-md">
            <div className="flex items-start gap-3">
              <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Error</p>
                <p className="text-sm">{saveError}</p>
              </div>
              <button onClick={() => setSaveError("")} className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

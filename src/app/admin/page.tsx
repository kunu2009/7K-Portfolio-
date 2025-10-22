"use client";

import { useState, useEffect } from "react";
import { Settings, Lock, Save, Plus, Trash2, Eye, EyeOff, Home, LogOut, Check, X, BookOpen, Smartphone, User, Upload, FileText, GripVertical, Link as LinkIcon, Mail, Github, Linkedin, Twitter, Layout, Type, Image as ImageIcon, ToggleLeft, Calendar, Star, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { App } from "@/lib/apps-data";
import type { Book } from "@/lib/books-data";
import type { PortfolioSections } from "@/lib/sections-data";

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
  
  // Portfolio state
  const [portfolioData, setPortfolioData] = useState({
    name: "Kunal Chheda",
    title: "Student & Developer",
    bio: "Building the 7K Ecosystem - A suite of applications for productivity, learning, and personal growth.",
    email: "kunal@7kc.me",
    github: "kunu2009",
    linkedin: "kunalchheda",
    twitter: "kunalchheda",
    location: "India",
  });
  
  // General settings state
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "7K Ecosystem",
    siteUrl: "https://7kc.me",
    metaDescription: "Student portfolio and ecosystem of productivity apps",
    analyticsEnabled: true,
    maintenanceMode: false,
  });
  
  // Portfolio sections state
  const [sections, setSections] = useState<PortfolioSections | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");
  
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
          loadPortfolio();
          loadSettings();
          loadSections();
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
        loadPortfolio();
        loadSettings();
        loadSections();
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

  const loadPortfolio = async () => {
    try {
      const response = await fetch('/api/portfolio');
      const data = await response.json();
      if (data.success) {
        setPortfolioData(data.portfolio);
      }
    } catch (error) {
      console.error('Failed to load portfolio:', error);
    }
  };

  const loadSettings = async () => {
    try {
      const response = await fetch('/api/settings');
      const data = await response.json();
      if (data.success) {
        setGeneralSettings(data.settings);
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  };

  const loadSections = async () => {
    try {
      const response = await fetch('/api/sections');
      const data = await response.json();
      if (data.success) {
        setSections(data.sections);
      }
    } catch (error) {
      console.error('Failed to load sections:', error);
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

  const handleSavePortfolio = async () => {
    setLoading(true);
    setSaveError("");
    setSaveSuccess(false);

    try {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          portfolio: portfolioData,
          commitMessage: 'Update portfolio data from admin panel'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        setSaveError(data.message || "Failed to save portfolio");
      }
    } catch (error) {
      setSaveError("Failed to save portfolio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    setLoading(true);
    setSaveError("");
    setSaveSuccess(false);

    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          settings: generalSettings,
          commitMessage: 'Update site settings from admin panel'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        setSaveError(data.message || "Failed to save settings");
      }
    } catch (error) {
      setSaveError("Failed to save settings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSections = async () => {
    setLoading(true);
    setSaveError("");
    setSaveSuccess(false);

    try {
      const response = await fetch('/api/sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sections: sections,
          commitMessage: 'Update portfolio sections from admin panel'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        setSaveError(data.message || "Failed to save sections");
      }
    } catch (error) {
      setSaveError("Failed to save sections. Please try again.");
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

  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if it's an image
    if (!file.type.startsWith('image/')) {
      setSaveError('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string;
      
      if (editingBook) {
        // For now, we'll use the base64 data URL
        // In production, you'd upload to a CDN/storage
        setEditingBook({
          ...editingBook,
          coverImage: imageUrl
        });
        
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2000);
      }
    };
    reader.readAsDataURL(file);
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

  const handleAddApp = () => {
    const newApp: App = {
      id: `app-${Date.now()}`,
      name: "New App",
      tagline: "App tagline",
      description: "Short description",
      fullDescription: "Full description goes here...",
      url: "https://app.7kc.me",
      category: "productivity",
      features: ["Feature 1", "Feature 2"],
      technologies: ["React", "TypeScript"],
      keywords: ["keyword1", "keyword2"],
      rating: 4.0,
      reviews: 0,
      launchDate: new Date().toISOString().split('T')[0],
      status: "coming-soon" as const,
      pricing: "free" as const,
      targetAudience: ["students", "professionals"]
    };
    setApps([...apps, newApp]);
    setEditingApp(newApp);
  };

  const handleDeleteApp = (appId: string) => {
    if (confirm("Are you sure you want to delete this app?")) {
      setApps(apps.filter(a => a.id !== appId));
      if (editingApp?.id === appId) {
        setEditingApp(null);
      }
    }
  };

  const moveAppUp = (index: number) => {
    if (index === 0) return;
    const newApps = [...apps];
    [newApps[index - 1], newApps[index]] = [newApps[index], newApps[index - 1]];
    setApps(newApps);
  };

  const moveAppDown = (index: number) => {
    if (index === apps.length - 1) return;
    const newApps = [...apps];
    [newApps[index], newApps[index + 1]] = [newApps[index + 1], newApps[index]];
    setApps(newApps);
  };

  const moveBookUp = (index: number) => {
    if (index === 0) return;
    const newBooks = [...books];
    [newBooks[index - 1], newBooks[index]] = [newBooks[index], newBooks[index - 1]];
    setBooks(newBooks);
  };

  const moveBookDown = (index: number) => {
    if (index === books.length - 1) return;
    const newBooks = [...books];
    [newBooks[index], newBooks[index + 1]] = [newBooks[index + 1], newBooks[index]];
    setBooks(newBooks);
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
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="apps" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Apps
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Books
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              Content
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Apps List */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Apps ({apps.length})</CardTitle>
                    <Button size="sm" onClick={handleAddApp}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {apps.map((app, index) => (
                      <div
                        key={app.id}
                        onClick={() => setEditingApp(app)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          editingApp?.id === app.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex flex-col gap-1 pt-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                moveAppUp(index);
                              }}
                              disabled={index === 0}
                            >
                              <GripVertical className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                moveAppDown(index);
                              }}
                              disabled={index === apps.length - 1}
                            >
                              <GripVertical className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium truncate">{app.name}</h3>
                              <Badge variant="secondary" className="text-xs">
                                #{index + 1}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{app.tagline}</p>
                            <Badge variant="outline" className="mt-1 text-xs">
                              {app.status}
                            </Badge>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteApp(app.id);
                            }}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {apps.length === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-8">
                        No apps yet. Click + to add one.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* App Editor */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>
                      {editingApp ? `Edit: ${editingApp.name}` : 'Select an app to edit'}
                    </CardTitle>
                    {editingApp && (
                      <Button onClick={handleSaveApps} disabled={loading}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {editingApp ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>App Name</Label>
                          <Input
                            value={editingApp.name}
                            onChange={(e) => setEditingApp({...editingApp, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>URL</Label>
                          <Input
                            value={editingApp.url}
                            onChange={(e) => setEditingApp({...editingApp, url: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label>Tagline</Label>
                          <Input
                            value={editingApp.tagline}
                            onChange={(e) => setEditingApp({...editingApp, tagline: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Category</Label>
                          <Input
                            value={editingApp.category}
                            onChange={(e) => setEditingApp({...editingApp, category: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Status</Label>
                          <select
                            value={editingApp.status}
                            onChange={(e) => setEditingApp({...editingApp, status: e.target.value as any})}
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                          >
                            <option value="live">Live</option>
                            <option value="beta">Beta</option>
                            <option value="coming-soon">Coming Soon</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Short Description</Label>
                        <Textarea
                          value={editingApp.description}
                          onChange={(e) => setEditingApp({...editingApp, description: e.target.value})}
                          rows={2}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Full Description</Label>
                        <Textarea
                          value={editingApp.fullDescription}
                          onChange={(e) => setEditingApp({...editingApp, fullDescription: e.target.value})}
                          rows={4}
                        />
                      </div>

                      {/* App Icon Upload */}
                      <div className="space-y-2">
                        <Label>App Icon/Logo</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-muted-foreground">Upload Image</Label>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setEditingApp({
                                      ...editingApp,
                                      icon: reader.result as string
                                    });
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                            <p className="text-xs text-muted-foreground">
                              Upload PNG, SVG, or WEBP (recommended: 256x256px)
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-muted-foreground">Or Enter URL</Label>
                            <Input
                              value={editingApp.icon || ''}
                              onChange={(e) => setEditingApp({...editingApp, icon: e.target.value})}
                              placeholder="/icons/app-icon.png"
                            />
                          </div>
                        </div>
                        {/* Icon Preview */}
                        {editingApp.icon && (
                          <div className="mt-2">
                            <Label className="text-xs text-muted-foreground mb-2 block">Preview</Label>
                            <div className="relative w-16 h-16 border rounded-lg overflow-hidden bg-muted">
                              <img
                                src={editingApp.icon}
                                alt="Icon preview"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect fill="%23ddd" width="64" height="64"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-size="12"%3ENo Icon%3C/text%3E%3C/svg%3E';
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Rating (0-5)</Label>
                          <Input
                            type="number"
                            step="0.1"
                            max="5"
                            value={editingApp.rating}
                            onChange={(e) => setEditingApp({...editingApp, rating: parseFloat(e.target.value)})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Reviews Count</Label>
                          <Input
                            type="number"
                            value={editingApp.reviews}
                            onChange={(e) => setEditingApp({...editingApp, reviews: parseInt(e.target.value)})}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Smartphone className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Select an app from the list to start editing</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
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
                    {books.map((book, index) => (
                      <div
                        key={book.id}
                        onClick={() => setEditingBook(book)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          editingBook?.id === book.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex flex-col gap-1 pt-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                moveBookUp(index);
                              }}
                              disabled={index === 0}
                            >
                              <GripVertical className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                moveBookDown(index);
                              }}
                              disabled={index === books.length - 1}
                            >
                              <GripVertical className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium truncate">{book.title}</h3>
                              <Badge variant="secondary" className="text-xs">
                                #{index + 1}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{book.author}</p>
                            <Badge variant="outline" className="mt-1 text-xs">
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

                      {/* Cover Image Upload */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Cover Image</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-muted-foreground">Upload Image</Label>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={handleCoverImageUpload}
                            />
                            <p className="text-xs text-muted-foreground">
                              Upload JPG, PNG, or WEBP (recommended: 400x600px)
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-muted-foreground">Or Enter URL</Label>
                            <Input
                              value={editingBook.coverImage}
                              onChange={(e) => setEditingBook({...editingBook, coverImage: e.target.value})}
                              placeholder="/images/books/cover.png"
                            />
                          </div>
                        </div>
                        {/* Cover Preview */}
                        {editingBook.coverImage && (
                          <div className="mt-2">
                            <Label className="text-xs text-muted-foreground mb-2 block">Preview</Label>
                            <div className="relative w-32 h-48 border rounded-lg overflow-hidden bg-muted">
                              <img
                                src={editingBook.coverImage}
                                alt="Cover preview"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="300"%3E%3Crect fill="%23ddd" width="200" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-size="20"%3ENo Image%3C/text%3E%3C/svg%3E';
                                }}
                              />
                            </div>
                          </div>
                        )}
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

          {/* Content Tab */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Section Selector Sidebar */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg">Sections</CardTitle>
                  <CardDescription>Select a section to edit</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button
                      variant={activeSection === 'hero' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('hero')}
                    >
                      <Layout className="h-4 w-4 mr-2" />
                      Hero
                    </Button>
                    <Button
                      variant={activeSection === 'about' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('about')}
                    >
                      <User className="h-4 w-4 mr-2" />
                      About
                    </Button>
                    <Button
                      variant={activeSection === 'philosophy' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('philosophy')}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Philosophy
                    </Button>
                    <Button
                      variant={activeSection === 'services' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('services')}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Services
                    </Button>
                    <Button
                      variant={activeSection === 'showcase' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('showcase')}
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Portfolio Showcase
                    </Button>
                    <Button
                      variant={activeSection === 'ecosystem' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('ecosystem')}
                    >
                      <Smartphone className="h-4 w-4 mr-2" />
                      Ecosystem
                    </Button>
                    <Button
                      variant={activeSection === 'projects' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('projects')}
                    >
                      <Type className="h-4 w-4 mr-2" />
                      Projects
                    </Button>
                    <Button
                      variant={activeSection === 'contact' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('contact')}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button
                      variant={activeSection === 'journey' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('journey')}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Journey
                    </Button>
                    <Button
                      variant={activeSection === 'recommendations' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('recommendations')}
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Recommendations
                    </Button>
                    <Button
                      variant={activeSection === 'support' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveSection('support')}
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Support
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Section Editor */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>
                        {activeSection === 'hero' && 'Hero Section'}
                        {activeSection === 'about' && 'About Section'}
                        {activeSection === 'philosophy' && 'Philosophy Section'}
                        {activeSection === 'services' && 'Services Section'}
                        {activeSection === 'showcase' && 'Portfolio Showcase'}
                        {activeSection === 'ecosystem' && 'Ecosystem Section'}
                        {activeSection === 'projects' && 'Projects Section'}
                        {activeSection === 'contact' && 'Contact Section'}
                        {activeSection === 'journey' && 'Journey Section'}
                        {activeSection === 'recommendations' && 'Recommendations Section'}
                        {activeSection === 'support' && 'Support Section'}
                      </CardTitle>
                      <CardDescription>
                        Edit the content for this section of your portfolio homepage
                      </CardDescription>
                    </div>
                    <Button onClick={handleSaveSections} disabled={loading}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {!sections ? (
                    <div className="text-center py-8 text-muted-foreground">
                      Loading sections...
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Hero Section Editor */}
                      {activeSection === 'hero' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="hero-enabled" className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.hero.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                hero: { ...sections.hero, enabled: !sections.hero.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.hero.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="hero-title">Title</Label>
                            <Input
                              id="hero-title"
                              value={sections.hero.title}
                              onChange={(e) => setSections({
                                ...sections,
                                hero: { ...sections.hero, title: e.target.value }
                              })}
                              placeholder="Main headline"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="hero-subtitle">Subtitle</Label>
                            <Input
                              id="hero-subtitle"
                              value={sections.hero.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                hero: { ...sections.hero, subtitle: e.target.value }
                              })}
                              placeholder="Supporting text"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="hero-description">Description</Label>
                            <textarea
                              id="hero-description"
                              value={sections.hero.description}
                              onChange={(e) => setSections({
                                ...sections,
                                hero: { ...sections.hero, description: e.target.value }
                              })}
                              placeholder="Brief introduction"
                              className="w-full min-h-[80px] px-3 py-2 rounded-md border border-input bg-background"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="hero-bg">Background Image URL</Label>
                            <Input
                              id="hero-bg"
                              value={sections.hero.backgroundImage}
                              onChange={(e) => setSections({
                                ...sections,
                                hero: { ...sections.hero, backgroundImage: e.target.value }
                              })}
                              placeholder="https://example.com/image.jpg"
                            />
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">CTA Buttons</Label>
                            
                            <div className="space-y-2 p-4 border rounded-md">
                              <Label className="text-sm font-medium">Primary Button</Label>
                              <Input
                                value={sections.hero.ctaText}
                                onChange={(e) => setSections({
                                  ...sections,
                                  hero: { ...sections.hero, ctaText: e.target.value }
                                })}
                                placeholder="Button text"
                                className="mb-2"
                              />
                              <Input
                                value={sections.hero.ctaLink}
                                onChange={(e) => setSections({
                                  ...sections,
                                  hero: { ...sections.hero, ctaLink: e.target.value }
                                })}
                                placeholder="Button link"
                              />
                            </div>

                            <div className="space-y-2 p-4 border rounded-md">
                              <Label className="text-sm font-medium">Secondary Button</Label>
                              <Input
                                value={sections.hero.secondaryCtaText || ''}
                                onChange={(e) => setSections({
                                  ...sections,
                                  hero: { ...sections.hero, secondaryCtaText: e.target.value }
                                })}
                                placeholder="Button text"
                                className="mb-2"
                              />
                              <Input
                                value={sections.hero.secondaryCtaLink || ''}
                                onChange={(e) => setSections({
                                  ...sections,
                                  hero: { ...sections.hero, secondaryCtaLink: e.target.value }
                                })}
                                placeholder="Button link"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* About Section Editor */}
                      {activeSection === 'about' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.about.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                about: { ...sections.about, enabled: !sections.about.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.about.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.about.title}
                              onChange={(e) => setSections({
                                ...sections,
                                about: { ...sections.about, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.about.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                about: { ...sections.about, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Description</Label>
                            <textarea
                              value={sections.about.description}
                              onChange={(e) => setSections({
                                ...sections,
                                about: { ...sections.about, description: e.target.value }
                              })}
                              className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Profile Image URL</Label>
                            <Input
                              value={sections.about.image || ''}
                              onChange={(e) => setSections({
                                ...sections,
                                about: { ...sections.about, image: e.target.value }
                              })}
                              placeholder="https://example.com/profile.jpg"
                            />
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Highlights</Label>
                            {sections.about.highlights.map((highlight, index) => (
                              <div key={index} className="flex gap-2">
                                <Input
                                  value={highlight}
                                  onChange={(e) => {
                                    const newHighlights = [...sections.about.highlights];
                                    newHighlights[index] = e.target.value;
                                    setSections({
                                      ...sections,
                                      about: { ...sections.about, highlights: newHighlights }
                                    });
                                  }}
                                  placeholder={`Highlight ${index + 1}`}
                                />
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  onClick={() => {
                                    const newHighlights = sections.about.highlights.filter((_, i) => i !== index);
                                    setSections({
                                      ...sections,
                                      about: { ...sections.about, highlights: newHighlights }
                                    });
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSections({
                                  ...sections,
                                  about: {
                                    ...sections.about,
                                    highlights: [...sections.about.highlights, '']
                                  }
                                });
                              }}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Highlight
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Philosophy Section Editor */}
                      {activeSection === 'philosophy' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.philosophy.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                philosophy: { ...sections.philosophy, enabled: !sections.philosophy.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.philosophy.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.philosophy.title}
                              onChange={(e) => setSections({
                                ...sections,
                                philosophy: { ...sections.philosophy, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.philosophy.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                philosophy: { ...sections.philosophy, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Philosophies</Label>
                            {sections.philosophy.philosophies.map((phil, index) => (
                              <div key={index} className="p-4 border rounded-md space-y-3">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium">Philosophy {index + 1}</Label>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => {
                                      const newPhilosophies = sections.philosophy.philosophies.filter((_, i) => i !== index);
                                      setSections({
                                        ...sections,
                                        philosophy: { ...sections.philosophy, philosophies: newPhilosophies }
                                      });
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                                <Input
                                  value={phil.title}
                                  onChange={(e) => {
                                    const newPhilosophies = [...sections.philosophy.philosophies];
                                    newPhilosophies[index] = { ...phil, title: e.target.value };
                                    setSections({
                                      ...sections,
                                      philosophy: { ...sections.philosophy, philosophies: newPhilosophies }
                                    });
                                  }}
                                  placeholder="Philosophy title"
                                />
                                <textarea
                                  value={phil.description}
                                  onChange={(e) => {
                                    const newPhilosophies = [...sections.philosophy.philosophies];
                                    newPhilosophies[index] = { ...phil, description: e.target.value };
                                    setSections({
                                      ...sections,
                                      philosophy: { ...sections.philosophy, philosophies: newPhilosophies }
                                    });
                                  }}
                                  placeholder="Philosophy description"
                                  className="w-full min-h-[60px] px-3 py-2 rounded-md border border-input bg-background"
                                />
                                <Input
                                  value={phil.icon || ''}
                                  onChange={(e) => {
                                    const newPhilosophies = [...sections.philosophy.philosophies];
                                    newPhilosophies[index] = { ...phil, icon: e.target.value };
                                    setSections({
                                      ...sections,
                                      philosophy: { ...sections.philosophy, philosophies: newPhilosophies }
                                    });
                                  }}
                                  placeholder="Icon name (optional)"
                                />
                              </div>
                            ))}
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSections({
                                  ...sections,
                                  philosophy: {
                                    ...sections.philosophy,
                                    philosophies: [
                                      ...sections.philosophy.philosophies,
                                      { title: '', description: '', icon: '' }
                                    ]
                                  }
                                });
                              }}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Philosophy
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Services Section Editor */}
                      {activeSection === 'services' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.services.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                services: { ...sections.services, enabled: !sections.services.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.services.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.services.title}
                              onChange={(e) => setSections({
                                ...sections,
                                services: { ...sections.services, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.services.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                services: { ...sections.services, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Services</Label>
                            {sections.services.services.map((service, index) => (
                              <div key={index} className="p-4 border rounded-md space-y-3">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium">Service {index + 1}</Label>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => {
                                      const newServices = sections.services.services.filter((_, i) => i !== index);
                                      setSections({
                                        ...sections,
                                        services: { ...sections.services, services: newServices }
                                      });
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                                <Input
                                  value={service.id}
                                  onChange={(e) => {
                                    const newServices = [...sections.services.services];
                                    newServices[index] = { ...service, id: e.target.value };
                                    setSections({
                                      ...sections,
                                      services: { ...sections.services, services: newServices }
                                    });
                                  }}
                                  placeholder="Service ID (e.g., web-dev)"
                                />
                                <Input
                                  value={service.title}
                                  onChange={(e) => {
                                    const newServices = [...sections.services.services];
                                    newServices[index] = { ...service, title: e.target.value };
                                    setSections({
                                      ...sections,
                                      services: { ...sections.services, services: newServices }
                                    });
                                  }}
                                  placeholder="Service title"
                                />
                                <textarea
                                  value={service.description}
                                  onChange={(e) => {
                                    const newServices = [...sections.services.services];
                                    newServices[index] = { ...service, description: e.target.value };
                                    setSections({
                                      ...sections,
                                      services: { ...sections.services, services: newServices }
                                    });
                                  }}
                                  placeholder="Service description"
                                  className="w-full min-h-[60px] px-3 py-2 rounded-md border border-input bg-background"
                                />
                                <Input
                                  value={service.icon}
                                  onChange={(e) => {
                                    const newServices = [...sections.services.services];
                                    newServices[index] = { ...service, icon: e.target.value };
                                    setSections({
                                      ...sections,
                                      services: { ...sections.services, services: newServices }
                                    });
                                  }}
                                  placeholder="Icon name"
                                />
                                <div className="space-y-2 pl-4 border-l-2">
                                  <Label className="text-sm font-medium">Features</Label>
                                  {service.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex gap-2">
                                      <Input
                                        value={feature}
                                        onChange={(e) => {
                                          const newServices = [...sections.services.services];
                                          const newFeatures = [...service.features];
                                          newFeatures[fIndex] = e.target.value;
                                          newServices[index] = { ...service, features: newFeatures };
                                          setSections({
                                            ...sections,
                                            services: { ...sections.services, services: newServices }
                                          });
                                        }}
                                        placeholder={`Feature ${fIndex + 1}`}
                                      />
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => {
                                          const newServices = [...sections.services.services];
                                          const newFeatures = service.features.filter((_, i) => i !== fIndex);
                                          newServices[index] = { ...service, features: newFeatures };
                                          setSections({
                                            ...sections,
                                            services: { ...sections.services, services: newServices }
                                          });
                                        }}
                                      >
                                        <X className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  ))}
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      const newServices = [...sections.services.services];
                                      newServices[index] = {
                                        ...service,
                                        features: [...service.features, '']
                                      };
                                      setSections({
                                        ...sections,
                                        services: { ...sections.services, services: newServices }
                                      });
                                    }}
                                  >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Feature
                                  </Button>
                                </div>
                              </div>
                            ))}
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSections({
                                  ...sections,
                                  services: {
                                    ...sections.services,
                                    services: [
                                      ...sections.services.services,
                                      { id: '', title: '', description: '', icon: '', features: [] }
                                    ]
                                  }
                                });
                              }}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Service
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Portfolio Showcase Section Editor */}
                      {activeSection === 'showcase' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.portfolioShowcase.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                portfolioShowcase: { ...sections.portfolioShowcase, enabled: !sections.portfolioShowcase.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.portfolioShowcase.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.portfolioShowcase.title}
                              onChange={(e) => setSections({
                                ...sections,
                                portfolioShowcase: { ...sections.portfolioShowcase, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.portfolioShowcase.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                portfolioShowcase: { ...sections.portfolioShowcase, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Showcase Items</Label>
                            {sections.portfolioShowcase.showcaseItems.map((item, index) => (
                              <div key={index} className="p-4 border rounded-md space-y-3">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium">Item {index + 1}</Label>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => {
                                      const newItems = sections.portfolioShowcase.showcaseItems.filter((_, i) => i !== index);
                                      setSections({
                                        ...sections,
                                        portfolioShowcase: { ...sections.portfolioShowcase, showcaseItems: newItems }
                                      });
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                                <Input
                                  value={item.id}
                                  onChange={(e) => {
                                    const newItems = [...sections.portfolioShowcase.showcaseItems];
                                    newItems[index] = { ...item, id: e.target.value };
                                    setSections({
                                      ...sections,
                                      portfolioShowcase: { ...sections.portfolioShowcase, showcaseItems: newItems }
                                    });
                                  }}
                                  placeholder="Item ID"
                                />
                                <Input
                                  value={item.title}
                                  onChange={(e) => {
                                    const newItems = [...sections.portfolioShowcase.showcaseItems];
                                    newItems[index] = { ...item, title: e.target.value };
                                    setSections({
                                      ...sections,
                                      portfolioShowcase: { ...sections.portfolioShowcase, showcaseItems: newItems }
                                    });
                                  }}
                                  placeholder="Item title"
                                />
                                <textarea
                                  value={item.description}
                                  onChange={(e) => {
                                    const newItems = [...sections.portfolioShowcase.showcaseItems];
                                    newItems[index] = { ...item, description: e.target.value };
                                    setSections({
                                      ...sections,
                                      portfolioShowcase: { ...sections.portfolioShowcase, showcaseItems: newItems }
                                    });
                                  }}
                                  placeholder="Item description"
                                  className="w-full min-h-[60px] px-3 py-2 rounded-md border border-input bg-background"
                                />
                                <Input
                                  value={item.image}
                                  onChange={(e) => {
                                    const newItems = [...sections.portfolioShowcase.showcaseItems];
                                    newItems[index] = { ...item, image: e.target.value };
                                    setSections({
                                      ...sections,
                                      portfolioShowcase: { ...sections.portfolioShowcase, showcaseItems: newItems }
                                    });
                                  }}
                                  placeholder="Image URL"
                                />
                                <Input
                                  value={item.link}
                                  onChange={(e) => {
                                    const newItems = [...sections.portfolioShowcase.showcaseItems];
                                    newItems[index] = { ...item, link: e.target.value };
                                    setSections({
                                      ...sections,
                                      portfolioShowcase: { ...sections.portfolioShowcase, showcaseItems: newItems }
                                    });
                                  }}
                                  placeholder="Link URL"
                                />
                                <Input
                                  value={item.category}
                                  onChange={(e) => {
                                    const newItems = [...sections.portfolioShowcase.showcaseItems];
                                    newItems[index] = { ...item, category: e.target.value };
                                    setSections({
                                      ...sections,
                                      portfolioShowcase: { ...sections.portfolioShowcase, showcaseItems: newItems }
                                    });
                                  }}
                                  placeholder="Category"
                                />
                              </div>
                            ))}
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSections({
                                  ...sections,
                                  portfolioShowcase: {
                                    ...sections.portfolioShowcase,
                                    showcaseItems: [
                                      ...sections.portfolioShowcase.showcaseItems,
                                      { id: '', title: '', description: '', image: '', link: '', category: '' }
                                    ]
                                  }
                                });
                              }}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Showcase Item
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Ecosystem Section Editor */}
                      {activeSection === 'ecosystem' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.ecosystem.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                ecosystem: { ...sections.ecosystem, enabled: !sections.ecosystem.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.ecosystem.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.ecosystem.title}
                              onChange={(e) => setSections({
                                ...sections,
                                ecosystem: { ...sections.ecosystem, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.ecosystem.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                ecosystem: { ...sections.ecosystem, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Description</Label>
                            <textarea
                              value={sections.ecosystem.description}
                              onChange={(e) => setSections({
                                ...sections,
                                ecosystem: { ...sections.ecosystem, description: e.target.value }
                              })}
                              className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                            />
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Features</Label>
                            {sections.ecosystem.features.map((feature, index) => (
                              <div key={index} className="flex gap-2">
                                <Input
                                  value={feature}
                                  onChange={(e) => {
                                    const newFeatures = [...sections.ecosystem.features];
                                    newFeatures[index] = e.target.value;
                                    setSections({
                                      ...sections,
                                      ecosystem: { ...sections.ecosystem, features: newFeatures }
                                    });
                                  }}
                                  placeholder={`Feature ${index + 1}`}
                                />
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  onClick={() => {
                                    const newFeatures = sections.ecosystem.features.filter((_, i) => i !== index);
                                    setSections({
                                      ...sections,
                                      ecosystem: { ...sections.ecosystem, features: newFeatures }
                                    });
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSections({
                                  ...sections,
                                  ecosystem: {
                                    ...sections.ecosystem,
                                    features: [...sections.ecosystem.features, '']
                                  }
                                });
                              }}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Feature
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Projects Section Editor */}
                      {activeSection === 'projects' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.projects.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                projects: { ...sections.projects, enabled: !sections.projects.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.projects.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.projects.title}
                              onChange={(e) => setSections({
                                ...sections,
                                projects: { ...sections.projects, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.projects.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                projects: { ...sections.projects, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Projects</Label>
                            {sections.projects.projects.map((project, index) => (
                              <div key={index} className="p-4 border rounded-md space-y-3">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium">Project {index + 1}</Label>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => {
                                      const newProjects = sections.projects.projects.filter((_, i) => i !== index);
                                      setSections({
                                        ...sections,
                                        projects: { ...sections.projects, projects: newProjects }
                                      });
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                                <Input
                                  value={project.id}
                                  onChange={(e) => {
                                    const newProjects = [...sections.projects.projects];
                                    newProjects[index] = { ...project, id: e.target.value };
                                    setSections({
                                      ...sections,
                                      projects: { ...sections.projects, projects: newProjects }
                                    });
                                  }}
                                  placeholder="Project ID"
                                />
                                <Input
                                  value={project.title}
                                  onChange={(e) => {
                                    const newProjects = [...sections.projects.projects];
                                    newProjects[index] = { ...project, title: e.target.value };
                                    setSections({
                                      ...sections,
                                      projects: { ...sections.projects, projects: newProjects }
                                    });
                                  }}
                                  placeholder="Project title"
                                />
                                <textarea
                                  value={project.description}
                                  onChange={(e) => {
                                    const newProjects = [...sections.projects.projects];
                                    newProjects[index] = { ...project, description: e.target.value };
                                    setSections({
                                      ...sections,
                                      projects: { ...sections.projects, projects: newProjects }
                                    });
                                  }}
                                  placeholder="Project description"
                                  className="w-full min-h-[60px] px-3 py-2 rounded-md border border-input bg-background"
                                />
                                <Input
                                  value={project.link || ''}
                                  onChange={(e) => {
                                    const newProjects = [...sections.projects.projects];
                                    newProjects[index] = { ...project, link: e.target.value };
                                    setSections({
                                      ...sections,
                                      projects: { ...sections.projects, projects: newProjects }
                                    });
                                  }}
                                  placeholder="Project link (optional)"
                                />
                                <Input
                                  value={project.github || ''}
                                  onChange={(e) => {
                                    const newProjects = [...sections.projects.projects];
                                    newProjects[index] = { ...project, github: e.target.value };
                                    setSections({
                                      ...sections,
                                      projects: { ...sections.projects, projects: newProjects }
                                    });
                                  }}
                                  placeholder="GitHub URL (optional)"
                                />
                                <Input
                                  value={project.image || ''}
                                  onChange={(e) => {
                                    const newProjects = [...sections.projects.projects];
                                    newProjects[index] = { ...project, image: e.target.value };
                                    setSections({
                                      ...sections,
                                      projects: { ...sections.projects, projects: newProjects }
                                    });
                                  }}
                                  placeholder="Image URL (optional)"
                                />
                                <div className="space-y-2 pl-4 border-l-2">
                                  <Label className="text-sm font-medium">Tech Stack</Label>
                                  {project.tech.map((tech, tIndex) => (
                                    <div key={tIndex} className="flex gap-2">
                                      <Input
                                        value={tech}
                                        onChange={(e) => {
                                          const newProjects = [...sections.projects.projects];
                                          const newTech = [...project.tech];
                                          newTech[tIndex] = e.target.value;
                                          newProjects[index] = { ...project, tech: newTech };
                                          setSections({
                                            ...sections,
                                            projects: { ...sections.projects, projects: newProjects }
                                          });
                                        }}
                                        placeholder={`Technology ${tIndex + 1}`}
                                      />
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => {
                                          const newProjects = [...sections.projects.projects];
                                          const newTech = project.tech.filter((_, i) => i !== tIndex);
                                          newProjects[index] = { ...project, tech: newTech };
                                          setSections({
                                            ...sections,
                                            projects: { ...sections.projects, projects: newProjects }
                                          });
                                        }}
                                      >
                                        <X className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  ))}
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      const newProjects = [...sections.projects.projects];
                                      newProjects[index] = {
                                        ...project,
                                        tech: [...project.tech, '']
                                      };
                                      setSections({
                                        ...sections,
                                        projects: { ...sections.projects, projects: newProjects }
                                      });
                                    }}
                                  >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Tech
                                  </Button>
                                </div>
                              </div>
                            ))}
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSections({
                                  ...sections,
                                  projects: {
                                    ...sections.projects,
                                    projects: [
                                      ...sections.projects.projects,
                                      { id: '', title: '', description: '', tech: [], link: '', github: '', image: '' }
                                    ]
                                  }
                                });
                              }}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Project
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Contact Section Editor */}
                      {activeSection === 'contact' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.contact.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                contact: { ...sections.contact, enabled: !sections.contact.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.contact.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.contact.title}
                              onChange={(e) => setSections({
                                ...sections,
                                contact: { ...sections.contact, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.contact.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                contact: { ...sections.contact, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Email</Label>
                            <Input
                              type="email"
                              value={sections.contact.email}
                              onChange={(e) => setSections({
                                ...sections,
                                contact: { ...sections.contact, email: e.target.value }
                              })}
                              placeholder="your@email.com"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Phone (Optional)</Label>
                            <Input
                              value={sections.contact.phone || ''}
                              onChange={(e) => setSections({
                                ...sections,
                                contact: { ...sections.contact, phone: e.target.value }
                              })}
                              placeholder="+1 234 567 8900"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Availability</Label>
                            <Input
                              value={sections.contact.availability}
                              onChange={(e) => setSections({
                                ...sections,
                                contact: { ...sections.contact, availability: e.target.value }
                              })}
                              placeholder="Available for freelance work"
                            />
                          </div>

                          <div className="space-y-3 p-4 border rounded-md">
                            <Label className="text-base font-semibold">Social Links</Label>
                            <div className="space-y-2">
                              <Label className="text-sm">GitHub</Label>
                              <Input
                                value={sections.contact.socialLinks.github || ''}
                                onChange={(e) => setSections({
                                  ...sections,
                                  contact: {
                                    ...sections.contact,
                                    socialLinks: { ...sections.contact.socialLinks, github: e.target.value }
                                  }
                                })}
                                placeholder="https://github.com/username"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm">LinkedIn</Label>
                              <Input
                                value={sections.contact.socialLinks.linkedin || ''}
                                onChange={(e) => setSections({
                                  ...sections,
                                  contact: {
                                    ...sections.contact,
                                    socialLinks: { ...sections.contact.socialLinks, linkedin: e.target.value }
                                  }
                                })}
                                placeholder="https://linkedin.com/in/username"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm">Twitter</Label>
                              <Input
                                value={sections.contact.socialLinks.twitter || ''}
                                onChange={(e) => setSections({
                                  ...sections,
                                  contact: {
                                    ...sections.contact,
                                    socialLinks: { ...sections.contact.socialLinks, twitter: e.target.value }
                                  }
                                })}
                                placeholder="https://twitter.com/username"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm">Instagram</Label>
                              <Input
                                value={sections.contact.socialLinks.instagram || ''}
                                onChange={(e) => setSections({
                                  ...sections,
                                  contact: {
                                    ...sections.contact,
                                    socialLinks: { ...sections.contact.socialLinks, instagram: e.target.value }
                                  }
                                })}
                                placeholder="https://instagram.com/username"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Journey Section Editor */}
                      {activeSection === 'journey' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.journey.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                journey: { ...sections.journey, enabled: !sections.journey.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.journey.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.journey.title}
                              onChange={(e) => setSections({
                                ...sections,
                                journey: { ...sections.journey, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.journey.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                journey: { ...sections.journey, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Milestones</Label>
                            {sections.journey.milestones.map((milestone, index) => (
                              <div key={index} className="p-4 border rounded-md space-y-3">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium">Milestone {index + 1}</Label>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => {
                                      const newMilestones = sections.journey.milestones.filter((_, i) => i !== index);
                                      setSections({
                                        ...sections,
                                        journey: { ...sections.journey, milestones: newMilestones }
                                      });
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                                <Input
                                  value={milestone.year}
                                  onChange={(e) => {
                                    const newMilestones = [...sections.journey.milestones];
                                    newMilestones[index] = { ...milestone, year: e.target.value };
                                    setSections({
                                      ...sections,
                                      journey: { ...sections.journey, milestones: newMilestones }
                                    });
                                  }}
                                  placeholder="Year (e.g., 2024)"
                                />
                                <Input
                                  value={milestone.title}
                                  onChange={(e) => {
                                    const newMilestones = [...sections.journey.milestones];
                                    newMilestones[index] = { ...milestone, title: e.target.value };
                                    setSections({
                                      ...sections,
                                      journey: { ...sections.journey, milestones: newMilestones }
                                    });
                                  }}
                                  placeholder="Milestone title"
                                />
                                <textarea
                                  value={milestone.description}
                                  onChange={(e) => {
                                    const newMilestones = [...sections.journey.milestones];
                                    newMilestones[index] = { ...milestone, description: e.target.value };
                                    setSections({
                                      ...sections,
                                      journey: { ...sections.journey, milestones: newMilestones }
                                    });
                                  }}
                                  placeholder="Milestone description"
                                  className="w-full min-h-[60px] px-3 py-2 rounded-md border border-input bg-background"
                                />
                              </div>
                            ))}
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSections({
                                  ...sections,
                                  journey: {
                                    ...sections.journey,
                                    milestones: [
                                      ...sections.journey.milestones,
                                      { year: '', title: '', description: '' }
                                    ]
                                  }
                                });
                              }}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Milestone
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Recommendations Section Editor */}
                      {activeSection === 'recommendations' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.recommendations.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                recommendations: { ...sections.recommendations, enabled: !sections.recommendations.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.recommendations.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.recommendations.title}
                              onChange={(e) => setSections({
                                ...sections,
                                recommendations: { ...sections.recommendations, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.recommendations.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                recommendations: { ...sections.recommendations, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Testimonials</Label>
                            {sections.recommendations.recommendations.map((rec, index) => (
                              <div key={index} className="p-4 border rounded-md space-y-3">
                                <div className="flex items-center justify-between">
                                  <Label className="font-medium">Testimonial {index + 1}</Label>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => {
                                      const newRecs = sections.recommendations.recommendations.filter((_, i) => i !== index);
                                      setSections({
                                        ...sections,
                                        recommendations: { ...sections.recommendations, recommendations: newRecs }
                                      });
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                                <Input
                                  value={rec.id}
                                  onChange={(e) => {
                                    const newRecs = [...sections.recommendations.recommendations];
                                    newRecs[index] = { ...rec, id: e.target.value };
                                    setSections({
                                      ...sections,
                                      recommendations: { ...sections.recommendations, recommendations: newRecs }
                                    });
                                  }}
                                  placeholder="Recommendation ID (e.g., rec-1)"
                                />
                                <Input
                                  value={rec.name}
                                  onChange={(e) => {
                                    const newRecs = [...sections.recommendations.recommendations];
                                    newRecs[index] = { ...rec, name: e.target.value };
                                    setSections({
                                      ...sections,
                                      recommendations: { ...sections.recommendations, recommendations: newRecs }
                                    });
                                  }}
                                  placeholder="Person's name"
                                />
                                <Input
                                  value={rec.role}
                                  onChange={(e) => {
                                    const newRecs = [...sections.recommendations.recommendations];
                                    newRecs[index] = { ...rec, role: e.target.value };
                                    setSections({
                                      ...sections,
                                      recommendations: { ...sections.recommendations, recommendations: newRecs }
                                    });
                                  }}
                                  placeholder="Their role/position"
                                />
                                <Input
                                  value={rec.company}
                                  onChange={(e) => {
                                    const newRecs = [...sections.recommendations.recommendations];
                                    newRecs[index] = { ...rec, company: e.target.value };
                                    setSections({
                                      ...sections,
                                      recommendations: { ...sections.recommendations, recommendations: newRecs }
                                    });
                                  }}
                                  placeholder="Company name"
                                />
                                <textarea
                                  value={rec.text}
                                  onChange={(e) => {
                                    const newRecs = [...sections.recommendations.recommendations];
                                    newRecs[index] = { ...rec, text: e.target.value };
                                    setSections({
                                      ...sections,
                                      recommendations: { ...sections.recommendations, recommendations: newRecs }
                                    });
                                  }}
                                  placeholder="Testimonial text"
                                  className="w-full min-h-[80px] px-3 py-2 rounded-md border border-input bg-background"
                                />
                                <Input
                                  value={rec.avatar}
                                  onChange={(e) => {
                                    const newRecs = [...sections.recommendations.recommendations];
                                    newRecs[index] = { ...rec, avatar: e.target.value };
                                    setSections({
                                      ...sections,
                                      recommendations: { ...sections.recommendations, recommendations: newRecs }
                                    });
                                  }}
                                  placeholder="Avatar image URL"
                                />
                              </div>
                            ))}
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSections({
                                  ...sections,
                                  recommendations: {
                                    ...sections.recommendations,
                                    recommendations: [
                                      ...sections.recommendations.recommendations,
                                      { id: `rec-${Date.now()}`, name: '', role: '', company: '', text: '', avatar: '' }
                                    ]
                                  }
                                });
                              }}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Testimonial
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Support Section Editor */}
                      {activeSection === 'support' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Section Enabled</Label>
                            <Button
                              variant={sections.support.enabled ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSections({
                                ...sections,
                                support: { ...sections.support, enabled: !sections.support.enabled }
                              })}
                            >
                              <ToggleLeft className="h-4 w-4 mr-2" />
                              {sections.support.enabled ? 'Enabled' : 'Disabled'}
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                              value={sections.support.title}
                              onChange={(e) => setSections({
                                ...sections,
                                support: { ...sections.support, title: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Subtitle</Label>
                            <Input
                              value={sections.support.subtitle}
                              onChange={(e) => setSections({
                                ...sections,
                                support: { ...sections.support, subtitle: e.target.value }
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Description</Label>
                            <textarea
                              value={sections.support.description}
                              onChange={(e) => setSections({
                                ...sections,
                                support: { ...sections.support, description: e.target.value }
                              })}
                              className="w-full min-h-[80px] px-3 py-2 rounded-md border border-input bg-background"
                              placeholder="Explain why you need support"
                            />
                          </div>

                          <div className="space-y-3 p-4 border rounded-md">
                            <Label className="text-base font-semibold">Donation Links</Label>
                            <div className="space-y-2">
                              <Label className="text-sm">Buy Me a Coffee</Label>
                              <Input
                                value={sections.support.donationLinks.buyMeCoffee || ''}
                                onChange={(e) => setSections({
                                  ...sections,
                                  support: {
                                    ...sections.support,
                                    donationLinks: { ...sections.support.donationLinks, buyMeCoffee: e.target.value }
                                  }
                                })}
                                placeholder="https://buymeacoffee.com/username"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm">Patreon</Label>
                              <Input
                                value={sections.support.donationLinks.patreon || ''}
                                onChange={(e) => setSections({
                                  ...sections,
                                  support: {
                                    ...sections.support,
                                    donationLinks: { ...sections.support.donationLinks, patreon: e.target.value }
                                  }
                                })}
                                placeholder="https://patreon.com/username"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm">PayPal</Label>
                              <Input
                                value={sections.support.donationLinks.paypal || ''}
                                onChange={(e) => setSections({
                                  ...sections,
                                  support: {
                                    ...sections.support,
                                    donationLinks: { ...sections.support.donationLinks, paypal: e.target.value }
                                  }
                                })}
                                placeholder="https://paypal.me/username"
                              />
                            </div>
                          </div>
                        </div>
                      )}
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
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Portfolio Settings</CardTitle>
                    <CardDescription>Manage your personal information and portfolio details</CardDescription>
                  </div>
                  <Button onClick={() => {
                    handleSavePortfolio();
                  }} disabled={loading}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Portfolio
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Full Name</Label>
                        <Input
                          value={portfolioData.name}
                          onChange={(e) => setPortfolioData({...portfolioData, name: e.target.value})}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Title/Role</Label>
                        <Input
                          value={portfolioData.title}
                          onChange={(e) => setPortfolioData({...portfolioData, title: e.target.value})}
                          placeholder="e.g., Student & Developer"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          value={portfolioData.email}
                          onChange={(e) => setPortfolioData({...portfolioData, email: e.target.value})}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Location</Label>
                        <Input
                          value={portfolioData.location}
                          onChange={(e) => setPortfolioData({...portfolioData, location: e.target.value})}
                          placeholder="City, Country"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea
                      value={portfolioData.bio}
                      onChange={(e) => setPortfolioData({...portfolioData, bio: e.target.value})}
                      rows={4}
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <LinkIcon className="h-5 w-5" />
                      Social Links
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          GitHub Username
                        </Label>
                        <Input
                          value={portfolioData.github}
                          onChange={(e) => setPortfolioData({...portfolioData, github: e.target.value})}
                          placeholder="username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn Username
                        </Label>
                        <Input
                          value={portfolioData.linkedin}
                          onChange={(e) => setPortfolioData({...portfolioData, linkedin: e.target.value})}
                          placeholder="username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Twitter className="h-4 w-4" />
                          Twitter/X Username
                        </Label>
                        <Input
                          value={portfolioData.twitter}
                          onChange={(e) => setPortfolioData({...portfolioData, twitter: e.target.value})}
                          placeholder="username"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preview */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Preview</h3>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <h2 className="text-2xl font-bold">{portfolioData.name}</h2>
                          <p className="text-muted-foreground">{portfolioData.title}</p>
                          <p className="text-sm text-muted-foreground mt-2">{portfolioData.location}</p>
                          <p className="mt-4 text-sm">{portfolioData.bio}</p>
                          <div className="flex justify-center gap-4 mt-4">
                            {portfolioData.github && (
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Github className="h-3 w-3" />
                                {portfolioData.github}
                              </Badge>
                            )}
                            {portfolioData.linkedin && (
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Linkedin className="h-3 w-3" />
                                {portfolioData.linkedin}
                              </Badge>
                            )}
                            {portfolioData.twitter && (
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Twitter className="h-3 w-3" />
                                {portfolioData.twitter}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Configure general preferences and site settings</CardDescription>
                  </div>
                  <Button onClick={() => {
                    handleSaveSettings();
                  }} disabled={loading}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Site Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Site Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Site Name</Label>
                        <Input
                          value={generalSettings.siteName}
                          onChange={(e) => setGeneralSettings({...generalSettings, siteName: e.target.value})}
                          placeholder="Your site name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Site URL</Label>
                        <Input
                          value={generalSettings.siteUrl}
                          onChange={(e) => setGeneralSettings({...generalSettings, siteUrl: e.target.value})}
                          placeholder="https://yoursite.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <Label>Meta Description</Label>
                      <Textarea
                        value={generalSettings.metaDescription}
                        onChange={(e) => setGeneralSettings({...generalSettings, metaDescription: e.target.value})}
                        rows={3}
                        placeholder="A brief description of your site for SEO"
                      />
                      <p className="text-xs text-muted-foreground">
                        Recommended: 150-160 characters for optimal SEO
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Features</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-0.5">
                          <Label>Analytics Tracking</Label>
                          <p className="text-sm text-muted-foreground">
                            Enable Google Analytics or similar tracking
                          </p>
                        </div>
                        <Switch
                          checked={generalSettings.analyticsEnabled}
                          onCheckedChange={(checked) => setGeneralSettings({...generalSettings, analyticsEnabled: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-0.5">
                          <Label>Maintenance Mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Show a maintenance page to visitors
                          </p>
                        </div>
                        <Switch
                          checked={generalSettings.maintenanceMode}
                          onCheckedChange={(checked) => setGeneralSettings({...generalSettings, maintenanceMode: checked})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* SEO Preview */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">SEO Preview</h3>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6">
                        <div className="space-y-2">
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                            {generalSettings.siteName}
                          </p>
                          <p className="text-sm text-green-700 dark:text-green-400">
                            {generalSettings.siteUrl}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {generalSettings.metaDescription}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Statistics */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Current Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold">{apps.length}</p>
                            <p className="text-sm text-muted-foreground">Apps</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold">{books.length}</p>
                            <p className="text-sm text-muted-foreground">Books</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold">
                              {books.reduce((sum, book) => sum + book.chapters.length, 0)}
                            </p>
                            <p className="text-sm text-muted-foreground">Chapters</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold">
                              {apps.filter(a => a.status === 'live').length}
                            </p>
                            <p className="text-sm text-muted-foreground">Live Apps</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Danger Zone */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-400">Danger Zone</h3>
                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-red-600 dark:text-red-400">Clear All Cache</Label>
                              <p className="text-sm text-muted-foreground">
                                Clear all cached data and force a fresh load
                              </p>
                            </div>
                            <Button variant="destructive" size="sm">
                              Clear Cache
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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

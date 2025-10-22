"use client";

import { useState, useEffect } from "react";
import { Settings, Lock, Save, Plus, Trash2, Eye, EyeOff, Home, LogOut, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { App } from "@/lib/apps-data";

export default function SettingsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [apps, setApps] = useState<App[]>([]);
  const [editingApp, setEditingApp] = useState<App | null>(null);
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

  const handleSaveChanges = async () => {
    setLoading(true);
    setSaveError("");
    setSaveSuccess(false);

    try {
      const response = await fetch('/api/apps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apps,
          commitMessage: 'Update apps data from settings panel'
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

  const handleAddApp = () => {
    const newApp: App = {
      id: `app-${Date.now()}`,
      name: "New App",
      tagline: "App tagline",
      description: "Short description",
      fullDescription: "Full description of the app",
      url: "https://app.7kc.me",
      category: "productivity",
      features: [],
      technologies: [],
      keywords: [],
      rating: 0,
      reviews: 0,
      launchDate: new Date().toISOString().split('T')[0],
      status: "coming-soon",
      pricing: "free",
      targetAudience: []
    };
    setApps([...apps, newApp]);
    setEditingApp(newApp);
  };

  const handleDeleteApp = (id: string) => {
    if (confirm('Are you sure you want to delete this app?')) {
      setApps(apps.filter(app => app.id !== id));
      if (editingApp?.id === id) {
        setEditingApp(null);
      }
    }
  };

  const handleUpdateApp = (updatedApp: App) => {
    setApps(apps.map(app => app.id === updatedApp.id ? updatedApp : app));
    setEditingApp(updatedApp);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('portfolio_admin_session');
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  // Login Page
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-slate-950 dark:via-gray-950 dark:to-stone-950 flex items-center justify-center p-4">
        <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.01]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <Card className="w-full max-w-md relative z-10 shadow-2xl border-2">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold">Portfolio Settings</CardTitle>
              <CardDescription className="mt-2">
                Sign in to manage your portfolio apps
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
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

  // Settings Dashboard
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
                <h1 className="text-xl font-bold">Portfolio Settings</h1>
                <p className="text-sm text-muted-foreground">Manage your apps and content</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {saveSuccess && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium">
                  <Check className="h-4 w-4" />
                  Saved successfully!
                </div>
              )}
              
              <Button
                onClick={handleSaveChanges}
                disabled={loading}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                <Save className="h-4 w-4 mr-2" />
                {loading ? "Saving..." : "Save & Commit"}
              </Button>

              <Link href="/">
                <Button variant="outline">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>

              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        {saveError && (
          <div className="mb-4 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 flex items-center gap-2">
            <X className="h-5 w-5" />
            {saveError}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Apps List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Apps ({apps.length})</CardTitle>
                  <Button onClick={handleAddApp} size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Add New
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 max-h-[calc(100vh-16rem)] overflow-y-auto">
                {apps.map((app) => (
                  <div
                    key={app.id}
                    onClick={() => setEditingApp(app)}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      editingApp?.id === app.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50 hover:bg-accent/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{app.name}</h3>
                        <p className="text-xs text-muted-foreground truncate">{app.tagline}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {app.status}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {app.category}
                          </Badge>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteApp(app.id);
                        }}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* App Editor */}
          <div className="lg:col-span-2">
            {editingApp ? (
              <AppEditor app={editingApp} onUpdate={handleUpdateApp} />
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-12">
                  <Settings className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No App Selected</h3>
                  <p className="text-sm text-muted-foreground">
                    Select an app from the list to edit, or create a new one
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// App Editor Component
function AppEditor({ app, onUpdate }: { app: App; onUpdate: (app: App) => void }) {
  const [formData, setFormData] = useState(app);

  useEffect(() => {
    setFormData(app);
  }, [app]);

  const handleChange = (field: keyof App, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    onUpdate(updated);
  };

  const handleArrayChange = (field: keyof App, value: string) => {
    const array = value.split(',').map(item => item.trim()).filter(Boolean);
    handleChange(field, array);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit App: {formData.name}</CardTitle>
        <CardDescription>Update app details, features, and settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 max-h-[calc(100vh-16rem)] overflow-y-auto">
        {/* Basic Info */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">App ID</label>
              <Input
                value={formData.id}
                onChange={(e) => handleChange('id', e.target.value)}
                placeholder="app-id"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">App Name</label>
              <Input
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="App Name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tagline</label>
            <Input
              value={formData.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              placeholder="Short tagline"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Short Description</label>
            <Textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Short description"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Full Description</label>
            <Textarea
              value={formData.fullDescription}
              onChange={(e) => handleChange('fullDescription', e.target.value)}
              placeholder="Full description"
              rows={5}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">URL</label>
              <Input
                value={formData.url}
                onChange={(e) => handleChange('url', e.target.value)}
                placeholder="https://app.7kc.me"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="productivity">Productivity</option>
                <option value="learning">Learning & Education</option>
                <option value="finance">Finance & Money</option>
                <option value="health">Health & Fitness</option>
                <option value="entertainment">Entertainment</option>
                <option value="creative">Creative Tools</option>
                <option value="social">Social & Communication</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value as any)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="live">Live</option>
                <option value="beta">Beta</option>
                <option value="coming-soon">Coming Soon</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Pricing</label>
              <select
                value={formData.pricing}
                onChange={(e) => handleChange('pricing', e.target.value as any)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="free">Free</option>
                <option value="freemium">Freemium</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Launch Date</label>
              <Input
                type="date"
                value={formData.launchDate}
                onChange={(e) => handleChange('launchDate', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Rating</label>
              <Input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={formData.rating}
                onChange={(e) => handleChange('rating', parseFloat(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Reviews</label>
              <Input
                type="number"
                value={formData.reviews}
                onChange={(e) => handleChange('reviews', parseInt(e.target.value))}
              />
            </div>
          </div>

          {/* Arrays */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Features (comma-separated)</label>
            <Textarea
              value={formData.features.join(', ')}
              onChange={(e) => handleArrayChange('features', e.target.value)}
              placeholder="Feature 1, Feature 2, Feature 3"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Technologies (comma-separated)</label>
            <Input
              value={formData.technologies.join(', ')}
              onChange={(e) => handleArrayChange('technologies', e.target.value)}
              placeholder="Next.js, React, TypeScript"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Keywords (comma-separated)</label>
            <Textarea
              value={formData.keywords.join(', ')}
              onChange={(e) => handleArrayChange('keywords', e.target.value)}
              placeholder="keyword1, keyword2, keyword3"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Target Audience (comma-separated)</label>
            <Input
              value={formData.targetAudience.join(', ')}
              onChange={(e) => handleArrayChange('targetAudience', e.target.value)}
              placeholder="students, professionals, developers"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

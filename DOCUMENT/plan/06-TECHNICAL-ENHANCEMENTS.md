# ⚡ Technical Enhancements & Performance Optimization

> **Goal**: Achieve 100/100 Lighthouse scores and enterprise-grade quality
> **Focus**: Speed, SEO, Accessibility, Best Practices, UX

---

## 🎯 Current Performance Audit

### Lighthouse Scores (Estimated Current State):
```
Performance:     92/100 ✅ (Good, can be better)
Accessibility:   87/100 ⚠️  (Needs improvement)
Best Practices:  95/100 ✅ (Good)
SEO:            95/100 ✅ (Good)
PWA:            60/100 ⚠️  (Partial implementation)
```

### Target Scores:
```
Performance:     98-100/100 🎯
Accessibility:   95-100/100 🎯
Best Practices:  100/100 🎯
SEO:            100/100 🎯
PWA:            100/100 🎯
```

---

## ⚡ Performance Optimization

### 1. Image Optimization

**Current Issues:**
- Large image file sizes
- Missing WebP format
- No lazy loading on some images
- No image size optimization

**Solutions:**

#### A. Next.js Image Component
```tsx
// Replace all <img> with <Image>
import Image from 'next/image';

// Before
<img src="/portfolio/project1.jpg" alt="Project" />

// After
<Image
  src="/portfolio/project1.jpg"
  alt="Project showcase for e-commerce website"
  width={800}
  height={600}
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### B. Image Conversion Script
```bash
# Install sharp for image processing
npm install sharp

# Create script: scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await optimizeImages(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      await sharp(filePath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`Optimized: ${file} → ${path.basename(outputPath)}`);
    }
  }
}

optimizeImages('./public/images');
```

**Run:** `node scripts/optimize-images.js`

---

### 2. Code Splitting & Lazy Loading

**Current**: All components loaded upfront

**Improved**: Load components as needed

```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

// Instead of:
import HeavyComponent from '@/components/heavy-component';

// Use:
const HeavyComponent = dynamic(
  () => import('@/components/heavy-component'),
  {
    loading: () => <Skeleton />,
    ssr: false // If not needed for SEO
  }
);

// For sections below fold
const ProjectsSection = dynamic(
  () => import('@/components/sections/projects'),
  { ssr: true } // Still SSR for SEO
);

const ContactSection = dynamic(
  () => import('@/components/sections/contact'),
  { ssr: false } // Not critical for initial load
);
```

**Apply to:**
- Stan AI chatbot (only load when opened)
- Portfolio filters (load on interaction)
- Complex animations (load on viewport)
- Video players (load on click)

---

### 3. Font Optimization

**Current**: External font loads

**Improved**: Next.js Font Optimization

```tsx
// app/layout.tsx
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Prevent FOIT (Flash of Invisible Text)
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}

// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
    },
  },
};
```

**Benefits:**
- Self-hosted fonts (no external requests)
- Preloaded critical fonts
- Eliminates font flashing
- Faster font loading

---

### 4. Bundle Size Reduction

**Analyze Current Bundle:**
```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... your config
});

# Run analysis
ANALYZE=true npm run build
```

**Reduce Bundle Size:**

```tsx
// 1. Use barrel imports carefully
// Bad (imports entire library)
import { Button, Card, Input, Select } from '@/components/ui';

// Good (imports only what's needed)
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

// 2. Remove unused dependencies
npm uninstall <unused-package>

// 3. Replace heavy libraries with lighter alternatives
// Instead of: moment.js (70kb)
// Use: date-fns (15kb) or native Date

// Instead of: lodash (full - 70kb)
import debounce from 'lodash/debounce'; // Only 5kb

// 4. Tree-shake Lucide icons
import { Heart, Star, Share } from 'lucide-react'; // Only imports used icons
```

---

### 5. Caching Strategy

**Implement Aggressive Caching:**

```tsx
// app/api/apps/route.ts
export async function GET() {
  const data = await getAppsData();
  
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

// Static page caching
// app/blog/[slug]/page.tsx
export const revalidate = 3600; // Revalidate every hour

// For static assets
// next.config.ts
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

---

### 6. Database Query Optimization

**If using database:**

```tsx
// Bad: N+1 query problem
const projects = await db.project.findMany();
for (const project of projects) {
  const tags = await db.tag.findMany({ where: { projectId: project.id } });
}

// Good: Single query with relations
const projects = await db.project.findMany({
  include: {
    tags: true,
    category: true,
  },
});

// Add database indexes
// prisma/schema.prisma
model Project {
  id        String   @id @default(cuid())
  title     String
  slug      String   @unique // Index automatically created
  published Boolean
  
  @@index([published]) // Manual index for filtering
  @@index([createdAt]) // For sorting
}
```

---

## ♿ Accessibility Improvements

### 1. Semantic HTML

**Audit Current Structure:**
```tsx
// Bad
<div className="header">
  <div className="nav">
    <div className="link">Home</div>
  </div>
</div>

// Good
<header>
  <nav aria-label="Main navigation">
    <a href="/" aria-current="page">Home</a>
  </nav>
</header>

// Full semantic structure
<body>
  <a href="#main-content" className="skip-to-content">
    Skip to main content
  </a>
  
  <header role="banner">
    <nav role="navigation" aria-label="Main">
      {/* Navigation */}
    </nav>
  </header>
  
  <main id="main-content" role="main">
    <article>
      <h1>Page Title</h1>
      {/* Content */}
    </article>
  </main>
  
  <aside role="complementary" aria-label="Related links">
    {/* Sidebar */}
  </aside>
  
  <footer role="contentinfo">
    {/* Footer */}
  </footer>
</body>
```

---

### 2. ARIA Labels & Attributes

**Add Proper Labels:**

```tsx
// Forms
<form role="search" aria-label="Search projects">
  <label htmlFor="search-input">Search</label>
  <input
    id="search-input"
    type="search"
    aria-label="Search projects by name or technology"
    aria-describedby="search-help"
  />
  <span id="search-help">Enter project name or technology</span>
  <button type="submit" aria-label="Submit search">
    <SearchIcon aria-hidden="true" />
  </button>
</form>

// Buttons with icons only
<button
  aria-label="Toggle dark mode"
  aria-pressed={isDark}
>
  {isDark ? <SunIcon aria-hidden="true" /> : <MoonIcon aria-hidden="true" />}
</button>

// Navigation
<nav aria-label="Main navigation">
  <ul>
    <li>
      <a href="/" aria-current={isHome ? "page" : undefined}>
        Home
      </a>
    </li>
  </ul>
</nav>

// Loading states
<button disabled={loading} aria-busy={loading}>
  {loading ? (
    <>
      <Spinner aria-hidden="true" />
      <span>Loading...</span>
    </>
  ) : (
    'Submit'
  )}
</button>
```

---

### 3. Keyboard Navigation

**Ensure Full Keyboard Access:**

```tsx
// Focus management
import { useRef, useEffect } from 'react';

function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      // Save previous focus
      previousFocus.current = document.activeElement as HTMLElement;
      
      // Focus modal
      modalRef.current?.focus();
      
      // Trap focus in modal
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        
        if (e.key === 'Tab') {
          trapFocus(e, modalRef.current);
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        // Restore focus
        previousFocus.current?.focus();
      };
    }
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <h2 id="modal-title">{title}</h2>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

// Skip to content link
<a
  href="#main-content"
  className="absolute left-0 top-0 -translate-y-full focus:translate-y-0 
             bg-primary text-primary-foreground px-4 py-2 transition-transform"
>
  Skip to main content
</a>

// Focus visible styles (tailwind.config)
module.exports = {
  theme: {
    extend: {
      ringWidth: {
        DEFAULT: '3px',
      },
      ringColor: {
        DEFAULT: 'hsl(var(--primary))',
      },
    },
  },
  plugins: [
    // Automatically add focus-visible styles
    require('@tailwindcss/forms'),
  ],
};
```

---

### 4. Color Contrast

**Check Contrast Ratios:**
```
WCAG AA Requirements:
- Normal text: 4.5:1
- Large text (18px+): 3:1
- UI components: 3:1

WCAG AAA Requirements:
- Normal text: 7:1
- Large text: 4.5:1
```

**Improve Contrast:**
```tsx
// Bad (light gray on white)
<span className="text-gray-300">Secondary text</span>

// Good (darker gray for sufficient contrast)
<span className="text-gray-700 dark:text-gray-300">
  Secondary text
</span>

// Check with browser DevTools
// Chrome: Lighthouse > Accessibility > Contrast
// Firefox: Accessibility Inspector
```

---

### 5. Screen Reader Testing

**Test With:**
- NVDA (Windows, free)
- JAWS (Windows, paid)
- VoiceOver (Mac, built-in)
- Orca (Linux, free)

**Common Fixes:**
```tsx
// Images
<Image
  src="/project.jpg"
  alt="E-commerce website homepage showing product grid and search bar"
  // Not just "website" or "project"
/>

// Empty alt for decorative images
<Image src="/decoration.svg" alt="" aria-hidden="true" />

// Icon buttons
<button aria-label="Close menu">
  <XIcon aria-hidden="true" />
</button>

// Links
<a href="/projects" aria-label="View all 24 projects in portfolio">
  View Projects →
</a>

// Status messages
<div role="status" aria-live="polite">
  {statusMessage}
</div>

<div role="alert" aria-live="assertive">
  {errorMessage}
</div>
```

---

## 🔍 SEO Enhancements

### 1. Structured Data (JSON-LD)

**Implement Rich Snippets:**

```tsx
// components/seo/structured-data.tsx
export function StructuredData({ type, data }: { type: string; data: any }) {
  const schemas = {
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Kunal Vishwakarma - Full-Stack Developer',
      url: 'https://yourwebsite.com',
      description: 'Professional web development services...',
      author: {
        '@type': 'Person',
        name: 'Kunal Vishwakarma',
      },
    },
    
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kunal Vishwakarma',
      url: 'https://yourwebsite.com',
      jobTitle: 'Full-Stack Developer',
      alumniOf: 'VNSGU University',
      sameAs: [
        'https://github.com/yourusername',
        'https://linkedin.com/in/yourprofile',
      ],
      knowsAbout: [
        'Web Development',
        'React',
        'Next.js',
        'TypeScript',
      ],
    },
    
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Web Development',
      provider: {
        '@type': 'Person',
        name: 'Kunal Vishwakarma',
      },
      areaServed: 'India',
      offers: {
        '@type': 'Offer',
        price: '3000',
        priceCurrency: 'INR',
      },
    },
    
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.breadcrumbs.map((item: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': item.url,
          name: item.label,
        },
      })),
    },
    
    article: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: data.title,
      description: data.description,
      image: data.image,
      author: {
        '@type': 'Person',
        name: 'Kunal Vishwakarma',
      },
      datePublished: data.publishedAt,
      dateModified: data.updatedAt,
    },
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas[type] || schemas.website),
      }}
    />
  );
}

// Use in layout/page
<StructuredData type="website" data={{}} />
```

---

### 2. Meta Tags Optimization

**Complete Meta Template:**

```tsx
// components/seo/meta-tags.tsx
import { Metadata } from 'next';

export function generateMetadata({
  title,
  description,
  image = '/og-image.jpg',
  type = 'website',
  publishedTime,
  path = '',
}: {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  path?: string;
}): Metadata {
  const url = `https://yourwebsite.com${path}`;
  
  return {
    title: `${title} | Kunal Vishwakarma`,
    description,
    
    openGraph: {
      title,
      description,
      url,
      siteName: 'Kunal Vishwakarma - Full-Stack Developer',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type,
      ...(type === 'article' && publishedTime
        ? {
            publishedTime,
            authors: ['Kunal Vishwakarma'],
          }
        : {}),
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@yourusername',
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    alternates: {
      canonical: url,
    },
  };
}
```

---

### 3. Sitemap Generation

**Dynamic Sitemap:**

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import { appsData } from '@/lib/apps-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yourwebsite.com';
  const posts = await getAllBlogPosts();
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/apps',
    '/projects',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Blog posts
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));
  
  // App pages
  const appPages = appsData.map((app) => ({
    url: `${baseUrl}/apps/${app.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));
  
  return [...staticPages, ...blogPosts, ...appPages];
}
```

---

### 4. robots.txt

```txt
# public/robots.txt
User-agent: *
Allow: /

# Disallow admin/private pages
Disallow: /admin
Disallow: /api

# Sitemap
Sitemap: https://yourwebsite.com/sitemap.xml

# Crawl delay (optional, for aggressive bots)
Crawl-delay: 1
```

---

## 📱 Progressive Web App (PWA)

### 1. Web App Manifest

```json
// public/manifest.json
{
  "name": "Kunal Vishwakarma - Full-Stack Developer",
  "short_name": "Kunal Portfolio",
  "description": "Professional web development services",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#8b5cf6",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "screenshots": [
    {
      "src": "/screenshots/desktop.png",
      "sizes": "1280x720",
      "type": "image/png",
      "form_factor": "wide"
    },
    {
      "src": "/screenshots/mobile.png",
      "sizes": "750x1334",
      "type": "image/png",
      "form_factor": "narrow"
    }
  ],
  "categories": ["business", "productivity", "portfolio"],
  "shortcuts": [
    {
      "name": "View Projects",
      "url": "/projects",
      "description": "Browse all projects"
    },
    {
      "name": "Contact",
      "url": "/contact",
      "description": "Get in touch"
    }
  ]
}
```

---

### 2. Service Worker

```tsx
// Install next-pwa
npm install @ducanh2912/next-pwa

// next.config.ts
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
        },
      },
    },
    {
      urlPattern: /\.(?:jpg|jpeg|png|gif|webp|svg)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
      },
    },
  ],
});

module.exports = withPWA({
  // Your Next.js config
});
```

---

### 3. Offline Support

```tsx
// components/offline-indicator.tsx
'use client';

import { useEffect, useState } from 'react';

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);
  
  useEffect(() => {
    setIsOnline(navigator.onLine);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  if (isOnline) return null;
  
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-destructive text-destructive-foreground 
                    px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50">
      <WifiOffIcon className="h-5 w-5" />
      <p>You're offline. Some features may be limited.</p>
    </div>
  );
}
```

---

## 🛡️ Security Best Practices

### 1. Security Headers

```tsx
// next.config.ts
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};
```

---

### 2. Content Security Policy

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://vitals.vercel-insights.com;
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
  `
    .replace(/\s{2,}/g, ' ')
    .trim();
  
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);
  
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  
  response.headers.set('Content-Security-Policy', cspHeader);
  
  return response;
}
```

---

### 3. Environment Variables

```bash
# .env.local (never commit!)
DATABASE_URL="postgresql://..."
API_KEY="secret_key"
NEXT_PUBLIC_SITE_URL="https://yourwebsite.com"

# .env.example (commit this)
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
API_KEY="your_api_key_here"
NEXT_PUBLIC_SITE_URL="https://yourwebsite.com"
```

```tsx
// Validate env vars on build
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
```

---

## 🎨 UX Enhancements

### 1. Loading States

```tsx
// components/ui/skeleton.tsx
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted',
        className
      )}
    />
  );
}

// Usage in components
function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}

// In page
<Suspense fallback={<ProjectsLoading />}>
  <ProjectsGrid />
</Suspense>
```

---

### 2. Error Boundaries

```tsx
// app/error.tsx
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-muted-foreground">
        {error.message || 'An unexpected error occurred'}
      </p>
      <div className="flex gap-2">
        <Button onClick={reset}>Try again</Button>
        <Button variant="outline" onClick={() => window.location.href = '/'}>
          Go home
        </Button>
      </div>
    </div>
  );
}

// app/global-error.tsx (for root layout errors)
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={reset}>Try again</button>
      </body>
    </html>
  );
}
```

---

### 3. Optimistic Updates

```tsx
// For form submissions
'use client';

import { useOptimistic, useTransition } from 'react';

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [optimisticStatus, setOptimisticStatus] = useOptimistic<string>('idle');
  
  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      setOptimisticStatus('submitting');
      
      try {
        await submitContactForm(formData);
        setOptimisticStatus('success');
      } catch (error) {
        setOptimisticStatus('error');
      }
    });
  }
  
  return (
    <form action={handleSubmit}>
      {/* Form fields */}
      
      <Button disabled={isPending}>
        {optimisticStatus === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
      
      {optimisticStatus === 'success' && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {optimisticStatus === 'error' && (
        <p className="text-red-600">Failed to send. Please try again.</p>
      )}
    </form>
  );
}
```

---

## 📊 Monitoring & Analytics

### 1. Web Vitals Tracking

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

// Custom Web Vitals reporting
// app/web-vitals.tsx
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
    
    console.log(metric);
  });
  
  return null;
}
```

---

### 2. Error Tracking (Sentry)

```bash
npm install @sentry/nextjs
```

```tsx
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});

// sentry.server.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});
```

---

## ✅ Pre-Launch Checklist

### Performance:
- [ ] All images optimized & lazy loaded
- [ ] Code splitting implemented
- [ ] Bundle size < 200KB (first load)
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Font optimization enabled

### SEO:
- [ ] All pages have unique titles/descriptions
- [ ] Structured data on all pages
- [ ] Sitemap generated & submitted
- [ ] robots.txt configured
- [ ] OpenGraph images for all pages
- [ ] Internal linking optimized
- [ ] Mobile-friendly test passed

### Accessibility:
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA
- [ ] ARIA labels added where needed
- [ ] Focus indicators visible
- [ ] Screen reader tested
- [ ] Skip to content link added

### Security:
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] CSP implemented
- [ ] Environment variables secured
- [ ] Dependencies updated
- [ ] API routes protected

### UX:
- [ ] Loading states for all async actions
- [ ] Error boundaries implemented
- [ ] 404 page designed
- [ ] Offline support (PWA)
- [ ] Forms validated
- [ ] Success/error messages clear

---

**Expected Results After Implementation:**
- 🚀 100/100 Lighthouse Performance
- ♿ 100/100 Accessibility
- 🔍 100/100 SEO
- ⚡ < 1s page load time
- 📱 Full PWA support
- 🛡️ Enterprise-grade security

**This completes the technical foundation for a world-class portfolio website!**

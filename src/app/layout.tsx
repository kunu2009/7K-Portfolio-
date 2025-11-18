import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { ChatAssistantLoader } from '@/components/layout/chat-assistant-loader';
import { ServiceWorkerRegistration } from '@/components/service-worker-registration';
import { MobileCTABar } from '@/components/mobile-cta-bar';
import EmailCapturePopup from '@/components/email-capture-popup';
import { SkipToContent, GlobalAnnouncer } from '@/lib/accessibility';
import { SITE_CONFIG } from '@/lib/constants';
import { projectSchemas, organizationSchema, breadcrumbSchema, bookSchemas } from '@/lib/schemas';

// Optimize font loading with Next.js Font optimization
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
  display: 'swap',
  preload: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [
    { 
      name: SITE_CONFIG.author.name, 
      url: SITE_CONFIG.author.github 
    }
  ],
  creator: SITE_CONFIG.author.name,
  publisher: SITE_CONFIG.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Portfolio of ${SITE_CONFIG.author.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: '@kunal7k',
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: '4i9I_ltIK4zIhbHtWu99Yz3fyikz_SBfGkFkAKU7zto',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${ptSans.variable}`}>
      <head>
        {/* Preconnect to critical domains - removed Google Fonts as using Next.js font optimization */}
        <link rel="preconnect" href="https://storage.googleapis.com" />
        <link rel="dns-prefetch" href="https://storage.googleapis.com" />

        {/* Favicons / PWA icons - explicit links to ensure browsers pick them up */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#B87333" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#B87333" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Performance optimization meta tags */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* PWA Splash Screen - iOS - Multiple sizes for different devices */}
        <link rel="apple-touch-startup-image" href="/splash-screen.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash-screen.png" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash-screen.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash-screen.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash-screen.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="apple-touch-startup-image" href="/splash-screen.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="7K Portfolio" />
        
        {/* PWA Splash Screen - Android */}
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} font-body antialiased bg-background`}>
        <SkipToContent />
        <GlobalAnnouncer />
        <ServiceWorkerRegistration />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main id="main-content">
            {children}
          </main>
          <Toaster />
          <ChatAssistantLoader />
          <MobileCTABar />
          <EmailCapturePopup />
        </ThemeProvider>
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kunal Chheda",
              "alternateName": ["Kunal", "Kunal Paresh Chheda", "7K Developer", "7K Ecosystem Creator", "Kunal Developer"],
              "url": "https://7kc.me",
              "image": "https://storage.googleapis.com/fantastic-images/b1494953-e59e-4a6f-a63e-4cde8a3f6f96.png",
              "sameAs": [
                "https://github.com/kunu2009",
                "https://www.linkedin.com/in/kunal-chheda-b36731388",
                "https://www.instagram.com/7kc_me/",
                "https://twitter.com/kunal7k"
              ],
              "jobTitle": "Full Stack Developer & App Creator",
              "email": "7kmindbeatss@gmail.com",
              "description": "Student developer from India building 20+ free productivity, fitness, finance, and learning apps. Creator of 7K Life, 7K Fitness, 7K Money and more popular web applications.",
              "knowsAbout": [
                "Web Development",
                "App Development",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Python",
                "Java",
                "Kotlin",
                "Firebase",
                "Productivity Apps",
                "Fitness Apps",
                "Finance Apps",
                "Language Learning Apps",
                "UI/UX Design",
                "SEO",
                "AI Integration"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "12th Grade Student"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressCountry": "India"
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "India"
                },
                "skills": "React, Next.js, TypeScript, Python, Java, Kotlin, App Development, Web Development, UI/UX Design"
              },
              "owns": {
                "@type": "OwnershipInfo",
                "acquiredFrom": {
                  "@type": "Organization",
                  "name": "7K Ecosystem"
                }
              }
            })
          }}
        />
        
        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Best Free Productivity, Fitness & Learning Apps - 7K Ecosystem by Kunal Chheda",
              "alternateName": ["7K Apps", "7K Ecosystem", "Kunal Chheda Apps", "Kunal Apps", "Kunal Paresh Chheda Portfolio"],
              "url": "https://7kc.me",
              "description": "Discover 20+ free apps for productivity, fitness tracking, language learning, finance management, and education. Created by student developer Kunal Chheda (Kunal Paresh Chheda) from Mumbai, India.",
              "keywords": "productivity app, fitness tracker, habit tracker, finance app, language learning, free apps, web apps, student developer, Indian apps",
              "author": {
                "@type": "Person",
                "name": "Kunal Chheda"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://7kc.me/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "en-US",
              "copyrightYear": "2024",
              "copyrightHolder": {
                "@type": "Person",
                "name": "Kunal Chheda"
              }
            })
          }}
        />
        
        {/* Structured Data - FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best free productivity app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "7K Life is a free all-in-one productivity app that helps you manage tasks, track habits, set goals, and organize your life. It features habit tracking with streaks, smart task management, goal setting, note-taking, and analytics - all completely free."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which is the best free fitness tracker app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "7K Fitness is a comprehensive free fitness tracker with 500+ exercise tutorials, calorie tracking, workout plans, and progress monitoring. It's perfect for gym workouts, home exercises, and health tracking."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best free habit tracker app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "7K Life offers the best free habit tracking with streak counting, daily reminders, analytics, and progress visualization. Track unlimited habits and build better routines without any cost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which app is best for learning multiple languages?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "7K Polyglot is a free language learning app that helps you learn multiple languages simultaneously with flashcards, spaced repetition, pronunciation practice, and AI conversation features."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best free personal finance app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "7K Money is a free personal finance manager that helps you track expenses, create budgets, monitor investments, and achieve financial goals with automatic tracking and detailed analytics."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is Kunal Chheda?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kunal Chheda (Kunal Paresh Chheda) is a 12th-grade student developer from Mumbai, India who has created 20+ free web applications including productivity tools, fitness trackers, language learning apps, and educational platforms. He specializes in React, Next.js, and TypeScript development and is the creator of the 7K Ecosystem."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What apps has Kunal created?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kunal Chheda has created 20+ apps including 7K Life (productivity app), 7K Fitness (workout tracker), 7K Money (finance manager), 7K Polyglot (language learning), 7K LawPrep (CLAT preparation), and many more educational and productivity tools."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are 7K apps free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Most 7K Ecosystem apps are completely free to use with no subscriptions required. Some apps offer premium features through a freemium model, but core functionality is always free."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What apps are available in the 7K Ecosystem?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The 7K Ecosystem includes 20+ apps: 7K Life (productivity), 7K Fitness (workout tracker), 7K Money (finance), 7K Polyglot (language learning), 7K LawPrep (CLAT preparation), 7K Kanban (project management), 7K Games, and many more educational and productivity tools."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        {/* Structured Data - Breadcrumb Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
        
        {/* Structured Data - Project Applications */}
        {projectSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema)
            }}
          />
        ))}
        
        {/* Structured Data - Books */}
        {bookSchemas.map((schema, index) => (
          <script
            key={`book-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema)
            }}
          />
        ))}
      </body>
    </html>
  );
}

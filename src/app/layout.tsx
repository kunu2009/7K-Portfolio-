import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { ChatAssistantLoader } from '@/components/layout/chat-assistant-loader';
import { ServiceWorkerRegistration } from '@/components/service-worker-registration';
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
  keywords: [
    ...SITE_CONFIG.keywords,
    'student developer India',
    '12th grade developer',
    'chess player programmer',
    'CLAT preparation app',
    'teenage developer',
    'polyglot developer',
    'Mumbai student developer',
  ],
  authors: [
    { 
      name: SITE_CONFIG.author.name, 
      url: SITE_CONFIG.author.github 
    }
  ],
  creator: SITE_CONFIG.author.name,
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
        alt: SITE_CONFIG.name,
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
        <ServiceWorkerRegistration />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ChatAssistantLoader />
        </ThemeProvider>
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kunal Chheda",
              "url": "https://7kc.me",
              "image": "https://storage.googleapis.com/fantastic-images/b1494953-e59e-4a6f-a63e-4cde8a3f6f96.png",
              "sameAs": [
                "https://github.com/kunu2009",
                "https://www.linkedin.com/in/kunal-chheda-b36731388",
                "https://www.instagram.com/7kc_me/"
              ],
              "jobTitle": "Student Developer",
              "email": "7kmindbeatss@gmail.com",
              "description": "12th-grade student developer from India, building 20+ productivity apps in the 7K Ecosystem",
              "knowsAbout": ["Web Development", "React", "Next.js", "TypeScript", "App Development", "Chess"],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "12th Grade Student"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
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
              "name": "7K Ecosystem - Kunal Chheda Portfolio",
              "url": "https://7kc.me",
              "description": "Student developer portfolio showcasing 20+ productivity applications",
              "author": {
                "@type": "Person",
                "name": "Kunal Chheda"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://7kc.me/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
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

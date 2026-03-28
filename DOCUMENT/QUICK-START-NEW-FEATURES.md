# Quick Reference: New Features

## 🚀 How to Use Each Feature

### 1. Service Packages Page
**URL**: `/services/packages`
```tsx
// Already accessible at the URL
// No additional setup needed
```

### 2. Blog System
**Add a new blog post**:
1. Create file in `/content/blog/your-post-slug.mdx`
2. Add frontmatter:
```yaml
---
title: "Your Post Title"
description: "Short description"
date: "2025-01-20"
author: "Kunal Vishwakarma"
category: "Web Development"
tags: ["Next.js", "React"]
image: "/images/blog/your-image.jpg"
published: true
---
```
3. Write content in Markdown
4. Post automatically appears at `/blog`

**Blog URLs**:
- Listing: `/blog`
- Individual: `/blog/[slug]`

### 3. Cost Calculator
**URL**: `/services/calculator`
```tsx
// Already accessible at the URL
// Pre-configured with pricing logic
```

### 4. Mobile CTA Bar
**Already Active!**
- Automatically appears after 300px scroll
- Mobile: Bottom sticky bar
- Desktop: Floating WhatsApp button

**Customize**:
```tsx
// Edit: src/components/mobile-cta-bar.tsx
const whatsappNumber = '918591247148'; // Change number
const phoneNumber = '+918591247148';
const email = 'kunalvishwakarma2009@gmail.com';
```

### 5. Enhanced Contact Form
**Usage**:
```tsx
import { EnhancedContactForm } from '@/components/enhanced-contact-form';

export default function ContactPage() {
  return (
    <div className="container py-20">
      <EnhancedContactForm />
    </div>
  );
}
```

**Setup Email Service** (currently logs only):
```tsx
// Edit: src/app/api/contact/route.ts
// Replace console.log with actual email service
// Options: SendGrid, Resend, Nodemailer
```

### 6. Loading States
**Usage Examples**:
```tsx
import { 
  SkeletonLoader, 
  CardSkeleton, 
  LoadingSpinner,
  PageLoader 
} from '@/components/loading-states';

// Skeleton
{isLoading && <CardSkeleton />}

// Spinner
{isLoading && <LoadingSpinner size="md" />}

// Full page
{isLoading && <PageLoader />}
```

### 7. SEO Utilities
**Generate Metadata**:
```tsx
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Your Page Title',
  description: 'Your description',
  keywords: ['keyword1', 'keyword2'],
  ogImage: '/images/og-image.jpg',
});
```

**Add Structured Data**:
```tsx
import { generateArticleSchema } from '@/lib/seo';

<script type="application/ld+json">
  {JSON.stringify(generateArticleSchema({
    title: 'Article Title',
    description: 'Description',
    image: '/image.jpg',
    datePublished: '2025-01-20',
    url: 'https://7kc.me/article',
  }))}
</script>
```

### 8. Accessibility Components
**Skip to Content**:
```tsx
// Already added to layout.tsx
import { SkipToContent } from '@/lib/accessibility';
```

**Screen Reader Text**:
```tsx
import { ScreenReaderOnly } from '@/lib/accessibility';

<button>
  <Icon />
  <ScreenReaderOnly>Click to open menu</ScreenReaderOnly>
</button>
```

**Focus Indicators**:
```tsx
import { FocusableButton } from '@/lib/accessibility';

<FocusableButton onClick={handleClick}>
  Click Me
</FocusableButton>
```

### 9. Sitemap & Robots
**Automatically Generated!**
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

**Customize**:
```tsx
// Edit: src/app/sitemap.ts
// Edit: src/app/robots.ts
```

---

## 📝 Common Tasks

### Add Blog Post
1. Create `/content/blog/my-post.mdx`
2. Add frontmatter (see template above)
3. Write markdown content
4. Appears automatically at `/blog`

### Update Package Pricing
Edit `/src/app/services/packages/page.tsx`:
```tsx
const packages = [
  {
    id: 'starter',
    price: '5,000', // Change here
    features: [...] // Modify features
  },
  // ...
]
```

### Add Calculator Feature
Edit `/src/app/services/calculator/page.tsx`:
```tsx
const features: Feature[] = [
  { id: 'new-feature', name: 'New Feature', price: 1000 },
  // ...
];
```

### Change Mobile CTA Contact Info
Edit `/src/components/mobile-cta-bar.tsx`:
```tsx
const whatsappNumber = 'YOUR_NUMBER';
const phoneNumber = 'YOUR_PHONE';
const email = 'YOUR_EMAIL';
```

### Integrate Email Service
1. Choose service: SendGrid, Resend, or Nodemailer
2. Install package: `npm install @sendgrid/mail`
3. Edit `/src/app/api/contact/route.ts`
4. Add API key to `.env.local`

Example (SendGrid):
```tsx
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'your-email@example.com',
  from: 'noreply@7kc.me',
  subject: data.subject,
  text: data.message,
  html: `<strong>${data.message}</strong>`,
});
```

---

## 🎨 Customization Tips

### Color Scheme
All components use Tailwind classes:
- `bg-primary` - Primary color
- `text-primary-foreground` - Primary text
- `bg-secondary` - Secondary background
- `border-border` - Border color

### Responsive Design
All components are mobile-first:
- `md:` - Tablet and up
- `lg:` - Desktop and up
- `xl:` - Large desktop

### Animations
Using:
- `animate-in fade-in` - Fade in
- `animate-pulse` - Pulse effect
- `transition-all` - Smooth transitions
- `hover:scale-105` - Hover zoom

---

## 🔧 Troubleshooting

### Blog posts not showing
- Check `published: true` in frontmatter
- Verify file extension is `.mdx` or `.md`
- File must be in `/content/blog/`

### Mobile CTA not appearing
- Scroll down 300px to trigger
- Check viewport is mobile (<768px) for bottom bar
- Desktop shows floating WhatsApp only

### Contact form not submitting
- Check browser console for errors
- Verify API route exists at `/api/contact`
- Ensure all required fields are filled

### TypeScript errors
- Run `npm run typecheck` to see all errors
- Our new files have zero errors
- Pre-existing errors don't affect functionality

---

## 📊 Performance Checklist

- [x] Images optimized (AVIF, WebP)
- [x] Code splitting enabled
- [x] Lazy loading configured
- [x] Sitemap generated
- [x] Robots.txt configured
- [x] SEO metadata complete
- [x] Accessibility features added
- [x] Mobile responsive
- [x] Dark mode compatible
- [x] Loading states implemented

---

## 🚀 Deployment

All features work immediately after deployment:
```bash
npm run build
npm run start
```

Or deploy to Vercel:
```bash
vercel deploy --prod
```

---

## 📱 URLs Quick Reference

| Feature | URL |
|---------|-----|
| Service Packages | `/services/packages` |
| Cost Calculator | `/services/calculator` |
| Blog Listing | `/blog` |
| Blog Post | `/blog/[slug]` |
| Contact API | `/api/contact` |
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |

---

## 💡 Next Steps

1. **Test everything** using testing checklist in main summary
2. **Add blog images** to `/public/images/blog/`
3. **Write more blog posts** for SEO
4. **Integrate email service** for contact form
5. **Collect testimonials** from clients
6. **Create case studies** page
7. **Add portfolio item details** pages

---

*Need help? Check FEATURES-IMPLEMENTATION-SUMMARY.md for detailed documentation.*

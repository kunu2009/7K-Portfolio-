# 🎨 OG Image Generation Guide for Apps

## Overview
Create unique Open Graph images for each of the 19 apps to optimize social media sharing.

## 🖼️ Image Specifications

- **Size**: 1200 x 630 pixels
- **Format**: PNG (preferred) or JPG
- **Max File Size**: < 1MB per image
- **Aspect Ratio**: 1.91:1
- **Location**: `public/og/` directory

---

## 🎯 Required Images

### Base Images
- `public/og/apps.png` - Main apps directory image

### Individual App Images (19 total)
1. `public/og/life.png` - 7K Life
2. `public/og/kanban.png` - 7K Kanban
3. `public/og/pins.png` - 7K Pins
4. `public/og/prompt.png` - 7K Prompt Library
5. `public/og/tools.png` - 7K Dev Tools
6. `public/og/pol.png` - 7K Politics Hub
7. `public/og/eco.png` - 7K Economics
8. `public/og/his.png` - 7K History
9. `public/og/english.png` - 7K English Master
10. `public/og/eng.png` - 7K Engineering Hub
11. `public/og/polyglot.png` - 7K Polyglot
12. `public/og/money.png` - 7K Money Manager
13. `public/og/7kmoney.png` - 7K Money Learn
14. `public/og/fitness.png` - 7K Fitness Pro
15. `public/og/fit.png` - 7K Fit Challenge
16. `public/og/game.png` - 7K Games Arcade
17. `public/og/student.png` - 7K Student Hub
18. `public/og/group.png` - 7K Group Chat
19. `public/og/editor.png` - 7K Code Editor

---

## 🎨 Design Template

### Layout Structure
```
┌─────────────────────────────────────────────────────┐
│  7K ECOSYSTEM                              [Logo]   │
│                                                     │
│                    [App Icon]                       │
│                     (100x100)                       │
│                                                     │
│              APP NAME IN BOLD                       │
│                                                     │
│           Tagline in lighter text                   │
│                                                     │
│     ★★★★★ 4.8 | 200+ reviews | Free                │
│                                                     │
│  #Feature1  #Feature2  #Feature3                    │
│                                                     │
│                           7kc.me/apps/appname       │
└─────────────────────────────────────────────────────┘
```

### Design Elements
- **Background**: Gradient (dark to darker, matches brand)
- **App Icon**: Large, centered emoji or custom icon
- **App Name**: 48-60px, bold, white
- **Tagline**: 24-32px, gray/muted
- **Rating**: Stars + number, prominent
- **Features**: Pill-shaped badges, 3 key features
- **URL**: Bottom right, small, subtle
- **Branding**: "7K ECOSYSTEM" top left, logo top right

---

## 🛠️ Generation Methods

### Option 1: Automated with Vercel OG (Recommended)

**File**: `src/app/api/og/[slug]/route.tsx`

```tsx
import { ImageResponse } from 'next/og';
import { getAppById } from '@/lib/apps-data';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const app = getAppById(params.slug);
  
  if (!app) {
    return new Response('Not found', { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* App Icon */}
        <div style={{ fontSize: '100px', marginBottom: '20px' }}>
          {getCategoryIcon(app.category)}
        </div>
        
        {/* App Name */}
        <div style={{ fontSize: '60px', fontWeight: 'bold', marginBottom: '10px' }}>
          {app.name}
        </div>
        
        {/* Tagline */}
        <div style={{ fontSize: '32px', color: '#a0a0a0', marginBottom: '30px' }}>
          {app.tagline}
        </div>
        
        {/* Rating */}
        <div style={{ display: 'flex', gap: '20px', fontSize: '24px' }}>
          <span>⭐ {app.rating}</span>
          <span>•</span>
          <span>{app.reviews} reviews</span>
          <span>•</span>
          <span style={{ textTransform: 'capitalize' }}>{app.pricing}</span>
        </div>
        
        {/* URL */}
        <div style={{ position: 'absolute', bottom: '30px', right: '40px', fontSize: '20px', color: '#666' }}>
          7kc.me/apps/{app.id}
        </div>
        
        {/* Branding */}
        <div style={{ position: 'absolute', top: '30px', left: '40px', fontSize: '20px', fontWeight: 'bold' }}>
          7K ECOSYSTEM
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    productivity: "🚀",
    learning: "📚",
    finance: "💰",
    health: "💪",
    entertainment: "🎮",
    creative: "🎨",
    social: "💬",
  };
  return icons[category] || "⚡";
}
```

**Usage**: Images auto-generate at `/api/og/{app-id}`

**Update metadata**:
```tsx
// In src/app/apps/[slug]/page.tsx
const ogImageUrl = `https://7kc.me/api/og/${app.id}`;
```

---

### Option 2: Figma/Canva Template

1. **Create Master Template**
   - Open Figma or Canva
   - Create 1200x630 frame
   - Add gradient background
   - Add text placeholders
   - Add icon placeholder
   - Export as template

2. **Duplicate for Each App**
   - Copy template 19 times
   - Replace app name
   - Replace tagline
   - Replace icon
   - Update rating/reviews
   - Export as PNG

3. **Batch Export**
   - Select all frames
   - Export > PNG > 1200x630
   - Name correctly (life.png, kanban.png, etc.)
   - Upload to `public/og/`

**Canva Template URL**: [Create template](https://www.canva.com/create/facebook-posts/)

---

### Option 3: HTML + Puppeteer Script

**File**: `scripts/generate-og-images.js`

```javascript
const puppeteer = require('puppeteer');
const { appsData } = require('../src/lib/apps-data');
const fs = require('fs');
const path = require('path');

async function generateOGImage(app) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to OG image size
  await page.setViewport({ width: 1200, height: 630 });
  
  // Generate HTML
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            margin: 0;
            width: 1200px;
            height: 630px;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', sans-serif;
            color: white;
          }
          .icon { font-size: 100px; margin-bottom: 20px; }
          .name { font-size: 60px; font-weight: bold; margin-bottom: 10px; }
          .tagline { font-size: 32px; color: #a0a0a0; margin-bottom: 30px; }
          .meta { display: flex; gap: 20px; font-size: 24px; }
          .url { position: absolute; bottom: 30px; right: 40px; font-size: 20px; color: #666; }
          .brand { position: absolute; top: 30px; left: 40px; font-size: 20px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="brand">7K ECOSYSTEM</div>
        <div class="icon">${getCategoryIcon(app.category)}</div>
        <div class="name">${app.name}</div>
        <div class="tagline">${app.tagline}</div>
        <div class="meta">
          <span>⭐ ${app.rating}</span>
          <span>•</span>
          <span>${app.reviews} reviews</span>
          <span>•</span>
          <span style="text-transform: capitalize">${app.pricing}</span>
        </div>
        <div class="url">7kc.me/apps/${app.id}</div>
      </body>
    </html>
  `;
  
  await page.setContent(html);
  
  // Take screenshot
  const outputPath = path.join(__dirname, '../public/og', `${app.id}.png`);
  await page.screenshot({ path: outputPath });
  
  await browser.close();
  console.log(`✅ Generated: ${app.id}.png`);
}

// Generate all images
async function generateAll() {
  // Ensure og directory exists
  const ogDir = path.join(__dirname, '../public/og');
  if (!fs.existsSync(ogDir)) {
    fs.mkdirSync(ogDir, { recursive: true });
  }
  
  for (const app of appsData) {
    await generateOGImage(app);
  }
  
  console.log('🎉 All OG images generated!');
}

generateAll();
```

**Run**: `node scripts/generate-og-images.js`

---

## 📋 Implementation Checklist

- [ ] Create `public/og/` directory
- [ ] Choose generation method
- [ ] Generate main `apps.png` image
- [ ] Generate all 19 individual app images
- [ ] Verify image dimensions (1200x630)
- [ ] Optimize file sizes (< 1MB each)
- [ ] Test on Facebook Debugger
- [ ] Test on Twitter Card Validator
- [ ] Update OG URLs in metadata (already done in code)
- [ ] Deploy and verify live URLs

---

## 🧪 Testing Tools

### Facebook Debugger
https://developers.facebook.com/tools/debug/

**Test URLs**:
- https://7kc.me/apps
- https://7kc.me/apps/life
- https://7kc.me/apps/kanban
- etc.

**What to check**:
- Image loads correctly
- Title and description appear
- No warnings or errors

### Twitter Card Validator
https://cards-dev.twitter.com/validator

**Test same URLs**:
- Verify card type: summary_large_image
- Image displays correctly
- Text looks good

### LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/

**Test for LinkedIn sharing**

---

## 🎨 Design Tips

1. **Keep it Simple**: Don't overcrowd the image
2. **High Contrast**: Dark bg + light text or vice versa
3. **Legible Text**: Minimum 24px for readability
4. **Brand Consistency**: Use same colors/fonts as site
5. **Mobile Preview**: Test how it looks in mobile feeds
6. **Safe Zone**: Keep important content 40px from edges
7. **App Icon**: Make it large and recognizable
8. **Call to Action**: Subtle but present

---

## 🚀 Quick Start (Recommended)

### Use Vercel OG (Easiest)

1. Install package:
```bash
npm install @vercel/og
```

2. Create API route (code above)

3. Update image URLs in metadata (already done)

4. Deploy - images auto-generate!

**Advantages**:
- ✅ No manual image creation
- ✅ Always up-to-date with data
- ✅ Easy to modify design
- ✅ Scales automatically

---

## 📊 Impact

With unique OG images:
- **Social CTR**: +30-40% on shared links
- **Brand Recognition**: Consistent visual identity
- **Professional**: Shows attention to detail
- **Shareability**: More likely to be shared
- **Trust**: Looks legitimate and polished

---

## 🎯 Priority Order

1. **Main apps page** (`apps.png`) - Most important
2. **Top 5 apps** - life, kanban, student, polyglot, fitness
3. **Remaining 14 apps** - As time allows
4. **Test and iterate** - Improve based on engagement

---

**Next Step**: Choose a method and start with the main apps.png image!

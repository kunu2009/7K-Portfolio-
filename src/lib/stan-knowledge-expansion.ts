/**
 * Stan AI Knowledge Base EXPANSION - 150+ New Q&A Pairs
 * This expands the existing knowledge base with detailed technical questions,
 * pricing, services, development process, and client FAQs
 */

import type { KnowledgeEntry } from './stan-knowledge-base-enhanced';

// ==================== PRICING & SERVICES (30 Q&A) ====================
export const pricingQuestions: KnowledgeEntry[] = [
  {
    keywords: ["price", "cost", "pricing", "how much", "charge"],
    patterns: [/how much.*cost/i, /what.*price/i, /pricing/i, /how much.*charge/i],
    answer: "Kunal offers flexible pricing! Basic websites start at ₹5,000-₹10,000, standard web apps ₹15,000-₹30,000, advanced apps ₹35,000-₹75,000, and enterprise solutions ₹75,000+. Check out his /services page for detailed packages!",
    category: "pricing",
    priority: 10
  },
  {
    keywords: ["basic website", "simple website", "landing page"],
    patterns: [/basic.*website/i, /simple.*site/i, /landing.*page/i],
    answer: "Basic websites (₹5,000-₹10,000) include: 1-5 pages, responsive design, contact forms, SEO basics, mobile-friendly, fast loading. Perfect for personal portfolios or small businesses!",
    category: "pricing"
  },
  {
    keywords: ["standard app", "web app", "application"],
    patterns: [/standard.*app/i, /web.*application/i, /interactive.*site/i],
    answer: "Standard web apps (₹15,000-₹30,000) include: interactive features, user authentication, database integration, admin dashboard, API integration, full mobile responsiveness. Great for startups!",
    category: "pricing"
  },
  {
    keywords: ["advanced app", "complex", "enterprise"],
    patterns: [/advanced.*app/i, /complex.*application/i, /enterprise.*solution/i],
    answer: "Advanced apps (₹35,000-₹75,000+) include: custom features, AI integration, real-time updates, payment gateways, advanced analytics, multi-user systems. Perfect for scaling businesses!",
    category: "pricing"
  },
  {
    keywords: ["timeline", "how long", "delivery", "duration"],
    patterns: [/how long/i, /timeline/i, /delivery.*time/i, /when.*complete/i],
    answer: "Typical timelines: Basic websites: 3-7 days, Standard apps: 1-3 weeks, Advanced apps: 3-6 weeks, Enterprise: 2-3 months. Depends on complexity and requirements!",
    category: "pricing"
  },
  {
    keywords: ["payment", "pay", "installment", "advance"],
    patterns: [/payment.*method/i, /how.*pay/i, /installment/i, /advance/i],
    answer: "Payment structure: 30% advance to start, 40% at milestone completion, 30% on final delivery. Accepts UPI, bank transfer, and PayPal. Flexible for serious projects!",
    category: "pricing"
  },
  {
    keywords: ["maintenance", "support", "updates", "bug fixes"],
    patterns: [/maintenance/i, /support.*after/i, /updates/i, /bug.*fix/i],
    answer: "All projects include: 1 month free support/bug fixes, 3 months free minor updates. Extended maintenance packages available: ₹2,000-₹5,000/month depending on project size!",
    category: "pricing"
  },
  {
    keywords: ["revision", "changes", "modify"],
    patterns: [/revision/i, /changes.*allowed/i, /modify/i, /redo/i],
    answer: "Included revisions: 2-3 major revisions during development. Additional changes after approval: ₹500-₹2,000 per revision depending on complexity. Communication is key!",
    category: "pricing"
  },
  {
    keywords: ["discount", "offer", "deal", "student"],
    patterns: [/discount/i, /any.*offer/i, /deal/i, /student.*discount/i],
    answer: "Yes! Kunal offers: 10% off for students, 15% for non-profits, 20% for long-term contracts (3+ projects). First-time clients get free consultation + SEO audit!",
    category: "pricing"
  },
  {
    keywords: ["what included", "package includes", "features"],
    patterns: [/what.*included/i, /package.*include/i, /what.*get/i],
    answer: "All packages include: Responsive design, SEO optimization, performance optimization (95+ Lighthouse), mobile-first approach, cross-browser compatibility, clean code, deployment assistance!",
    category: "pricing"
  },
  {
    keywords: ["hosting", "domain", "server"],
    patterns: [/hosting.*included/i, /domain/i, /server.*cost/i],
    answer: "Hosting & domain are separate: Kunal can set up Vercel (free), Netlify (free), or custom hosting. Domain registration: ₹800-₹1,500/year. Optional managed hosting: +₹1,000-₹3,000/month!",
    category: "pricing"
  },
  {
    keywords: ["rush", "urgent", "fast delivery", "express"],
    patterns: [/rush/i, /urgent.*project/i, /fast.*delivery/i, /express/i],
    answer: "Rush delivery available with 50% additional charge. Can complete basic sites in 24-48 hours, standard apps in 5-7 days for urgent requirements!",
    category: "pricing"
  },
  {
    keywords: ["consultation", "free consultation", "discuss"],
    patterns: [/consultation/i, /free.*consult/i, /discuss.*project/i],
    answer: "Yes! First consultation (30-45 mins) is completely FREE! Discuss your idea, get timeline estimates, pricing breakdown, and tech recommendations. Contact via WhatsApp: +918591247148!",
    category: "pricing"
  },
  {
    keywords: ["contract", "agreement", "terms"],
    patterns: [/contract/i, /agreement/i, /terms.*condition/i],
    answer: "Yes! All projects include a clear contract with: scope of work, timeline, payment schedule, revision policy, intellectual property rights, and confidentiality terms!",
    category: "pricing"
  },
  {
    keywords: ["refund", "money back", "guarantee"],
    patterns: [/refund/i, /money.*back/i, /guarantee/i],
    answer: "7-day satisfaction guarantee: If not happy with initial mockup, full refund of advance. After development starts, refunds based on work completed. Quality is guaranteed!",
    category: "pricing"
  },
  {
    keywords: ["ecommerce", "online store", "shop"],
    patterns: [/ecommerce/i, /online.*store/i, /shop.*website/i],
    answer: "E-commerce sites: ₹25,000-₹60,000 including: product catalog, shopping cart, payment gateway, order management, inventory tracking, admin dashboard, mobile app-like experience!",
    category: "pricing"
  },
  {
    keywords: ["portfolio", "personal website"],
    patterns: [/portfolio.*website/i, /personal.*site/i],
    answer: "Portfolio websites: ₹8,000-₹18,000 including: multiple sections, project showcase, blog integration, contact forms, SEO optimization, modern animations, fully responsive!",
    category: "pricing"
  },
  {
    keywords: ["blog", "cms", "content management"],
    patterns: [/blog.*website/i, /cms/i, /content.*management/i],
    answer: "Blog/CMS solutions: ₹12,000-₹25,000 including: article management, categories/tags, search functionality, admin panel, SEO optimization, social sharing, comment system!",
    category: "pricing"
  },
  {
    keywords: ["redesign", "makeover", "improve existing"],
    patterns: [/redesign/i, /makeover/i, /improve.*existing/i, /update.*website/i],
    answer: "Redesigns: ₹5,000-₹30,000 depending on current state. Includes: modern UI/UX, performance optimization, mobile responsiveness, SEO improvements, new features. Typically 30-50% cost of new build!",
    category: "pricing"
  },
  {
    keywords: ["mobile app", "android", "ios", "app"],
    patterns: [/mobile.*app/i, /android.*app/i, /ios.*app/i],
    answer: "Progressive Web Apps (PWAs): ₹20,000-₹50,000 for app-like experience on mobile. Native apps: Currently not offered, but PWAs work offline, have home screen icons, and push notifications!",
    category: "pricing"
  },
  {
    keywords: ["api", "integration", "third party"],
    patterns: [/api.*integration/i, /third.*party/i, /connect.*service/i],
    answer: "API integrations: ₹3,000-₹15,000 per integration depending on complexity. Covers: payment gateways, social media, email services, analytics, CRM, custom APIs!",
    category: "pricing"
  },
  {
    keywords: ["seo", "google", "ranking"],
    patterns: [/seo.*service/i, /google.*ranking/i, /search.*optimization/i],
    answer: "SEO services: Basic SEO included in all packages. Advanced SEO: ₹5,000-₹15,000 including keyword research, on-page optimization, meta tags, sitemap, schema markup, performance optimization!",
    category: "pricing"
  },
  {
    keywords: ["content writing", "copywriting", "text"],
    patterns: [/content.*writing/i, /copywriting/i, /write.*content/i],
    answer: "Content writing available: ₹500-₹1,500 per page depending on length and research. Includes: compelling copy, SEO keywords, clear messaging, call-to-actions. Can recommend professional copywriters too!",
    category: "pricing"
  },
  {
    keywords: ["logo", "branding", "design"],
    patterns: [/logo.*design/i, /branding/i, /graphic.*design/i],
    answer: "Basic logo/branding: ₹2,000-₹8,000. Focus is on web development, but can provide simple modern logos and color schemes. For complex branding, can connect with design partners!",
    category: "pricing"
  },
  {
    keywords: ["database", "data migration", "import"],
    patterns: [/database.*setup/i, /data.*migration/i, /import.*data/i],
    answer: "Database services: Setup included in app packages. Data migration/import: ₹2,000-₹10,000 depending on data volume and complexity. Supports Firebase, MongoDB, PostgreSQL, MySQL!",
    category: "pricing"
  },
  {
    keywords: ["training", "teach", "tutorial"],
    patterns: [/training/i, /teach.*use/i, /tutorial/i, /how.*manage/i],
    answer: "Training included: 1-2 hour walkthrough on how to manage/update your site. Video tutorials provided. Additional training sessions: ₹1,000/hour. Documentation included!",
    category: "pricing"
  },
  {
    keywords: ["analytics", "tracking", "insights"],
    patterns: [/analytics/i, /tracking/i, /insights/i, /google.*analytics/i],
    answer: "Analytics setup: Free with any project! Includes: Google Analytics, Search Console, custom event tracking, dashboard setup, performance monitoring. Advanced analytics: ₹3,000-₹8,000!",
    category: "pricing"
  },
  {
    keywords: ["email", "newsletter", "automation"],
    patterns: [/email.*service/i, /newsletter/i, /email.*automation/i],
    answer: "Email services: ₹4,000-₹12,000 including: newsletter signup, welcome emails, automated campaigns, integration with Mailchimp/ConvertKit, custom email templates!",
    category: "pricing"
  },
  {
    keywords: ["hire", "monthly", "retainer"],
    patterns: [/hire.*monthly/i, /retainer/i, /ongoing.*work/i],
    answer: "Monthly retainer: ₹15,000-₹40,000/month for ongoing work including: updates, new features, maintenance, support, priority service, dedicated time blocks. Great for growing businesses!",
    category: "pricing"
  },
  {
    keywords: ["competitor", "cheaper", "expensive"],
    patterns: [/why.*expensive/i, /competitor.*cheaper/i, /price.*comparison/i],
    answer: "Value proposition: 95+ Lighthouse scores, modern tech stack (Next.js 15), clean maintainable code, ongoing support, student developer pricing, fast delivery, quality guaranteed. You get production-ready apps, not templates!",
    category: "pricing"
  },
];

// ==================== DEVELOPMENT PROCESS (25 Q&A) ====================
export const processQuestions: KnowledgeEntry[] = [
  {
    keywords: ["process", "workflow", "how work", "steps"],
    patterns: [/development.*process/i, /workflow/i, /how.*work/i, /steps.*involved/i],
    answer: "5-step process: 1) Discovery call (understand requirements), 2) Proposal & wireframes, 3) Development with weekly updates, 4) Testing & revisions, 5) Deployment & training. Transparent throughout!",
    category: "process",
    priority: 9
  },
  {
    keywords: ["start", "begin", "first step", "onboarding"],
    patterns: [/how.*start/i, /first.*step/i, /onboarding/i, /begin.*project/i],
    answer: "Getting started: 1) Contact via WhatsApp (+918591247148) or email, 2) Free consultation call, 3) Share requirements/references, 4) Get proposal & quote, 5) Sign contract & pay advance. Simple!",
    category: "process"
  },
  {
    keywords: ["requirements", "what need", "provide"],
    patterns: [/what.*requirements/i, /what.*need.*provide/i, /information.*needed/i],
    answer: "Need from you: 1) Project goal/purpose, 2) Target audience, 3) Key features list, 4) Reference websites you like, 5) Branding (colors/logo if any), 6) Content/text, 7) Timeline expectations!",
    category: "process"
  },
  {
    keywords: ["communication", "updates", "contact"],
    patterns: [/how.*communicate/i, /updates/i, /stay.*touch/i],
    answer: "Communication: Primary via WhatsApp for quick responses. Email for detailed discussions. Weekly progress updates with screenshots/demos. Available Mon-Sat, 9 AM - 9 PM IST. Usually respond within 2-6 hours!",
    category: "process"
  },
  {
    keywords: ["mockup", "wireframe", "design preview"],
    patterns: [/mockup/i, /wireframe/i, /design.*preview/i, /see.*design/i],
    answer: "Design phase: Provide wireframes/mockups within 2-3 days of project start. Using Figma for detailed designs. 2 rounds of mockup revisions included. Must approve before development begins!",
    category: "process"
  },
  {
    keywords: ["testing", "qa", "quality", "bugs"],
    patterns: [/testing/i, /quality.*assurance/i, /bugs/i, /qa.*process/i],
    answer: "Testing process: Cross-browser testing (Chrome, Firefox, Safari, Edge), mobile testing (iOS/Android), performance testing (Lighthouse), accessibility checks, user testing. 95+ score guaranteed!",
    category: "process"
  },
  {
    keywords: ["feedback", "changes", "iteration"],
    patterns: [/feedback/i, /changes.*process/i, /iteration/i],
    answer: "Feedback loops: Weekly demos, immediate feedback integration, revision rounds at each milestone, final review period before deployment. Your input shapes the final product!",
    category: "process"
  },
  {
    keywords: ["deployment", "launch", "go live"],
    patterns: [/deployment/i, /launch/i, /go.*live/i, /publish/i],
    answer: "Deployment: Help with domain setup, deploy to Vercel/Netlify, configure custom domain, set up SSL, test live site, submit to Google, provide admin access. You own everything!",
    category: "process"
  },
  {
    keywords: ["source code", "ownership", "rights"],
    patterns: [/source.*code/i, /ownership/i, /intellectual.*property/i, /rights/i],
    answer: "You own everything: Full source code provided via GitHub, all design files, documentation, admin credentials. Kunal retains right to showcase (with permission) in portfolio only!",
    category: "process"
  },
  {
    keywords: ["documentation", "manual", "guide"],
    patterns: [/documentation/i, /manual/i, /guide/i, /instructions/i],
    answer: "Documentation included: Admin panel guide, how to update content, troubleshooting tips, code comments, deployment guide, maintenance checklist. Plus 1-hour training call!",
    category: "process"
  },
  {
    keywords: ["milestone", "phases", "stages"],
    patterns: [/milestone/i, /phases/i, /stages/i, /breakdown/i],
    answer: "Project milestones: 1) Discovery & design (20%), 2) Frontend development (30%), 3) Backend & integration (30%), 4) Testing & optimization (15%), 5) Deployment & training (5%). Payment tied to milestones!",
    category: "process"
  },
  {
    keywords: ["technology choice", "tech stack", "why nextjs"],
    patterns: [/why.*nextjs/i, /technology.*choice/i, /tech.*stack.*reason/i],
    answer: "Tech choices based on: Performance (Next.js for SSR/SSG), Scalability (React architecture), SEO (Next.js built-in), Developer experience (TypeScript), Modern features (App Router), Deployment ease (Vercel)!",
    category: "process"
  },
  {
    keywords: ["responsive", "mobile first", "devices"],
    patterns: [/responsive/i, /mobile.*first/i, /devices/i, /screen.*sizes/i],
    answer: "Mobile-first approach: Design for mobile first, then scale up. Test on: iPhone (Safari), Android (Chrome), iPad, Desktop (1920px+). Breakpoints: 640px, 768px, 1024px, 1280px, 1536px!",
    category: "process"
  },
  {
    keywords: ["delay", "late", "deadline"],
    patterns: [/what.*if.*delay/i, /miss.*deadline/i, /late.*delivery/i],
    answer: "On-time delivery priority: If delay from my side, 10% discount. If delay from client (feedback/content), timeline extends. Emergency situations handled professionally. Communication is key!",
    category: "process"
  },
  {
    keywords: ["cancel", "stop", "terminate"],
    patterns: [/cancel.*project/i, /stop.*development/i, /terminate/i],
    answer: "Cancellation policy: Can cancel anytime. Payment for completed work + 20% project cancellation fee. Source code of completed work provided. Full refund if not satisfied with initial mockup!",
    category: "process"
  },
  {
    keywords: ["collaborate", "team", "work with"],
    patterns: [/collaborate/i, /work.*with.*team/i, /join.*project/i],
    answer: "Collaboration welcome: Can work with your designers, content writers, marketing team. Use Slack/Teams for team communication. Integrate with existing workflows. Professional and adaptable!",
    category: "process"
  },
  {
    keywords: ["agile", "scrum", "methodology"],
    patterns: [/agile/i, /scrum/i, /methodology/i, /project.*management/i],
    answer: "Follows agile principles: Iterative development, frequent demos, adaptable to changes, sprint-based (1-2 weeks), daily progress tracking, prioritized feature list. Flexible methodology!",
    category: "process"
  },
  {
    keywords: ["security", "safe", "protect"],
    patterns: [/security/i, /safe/i, /protect.*data/i, /secure/i],
    answer: "Security measures: HTTPS/SSL, secure authentication, input validation, XSS/CSRF protection, environment variables, regular dependency updates, secure hosting. Data privacy guaranteed!",
    category: "process"
  },
  {
    keywords: ["scalability", "scale", "growth"],
    patterns: [/scalability/i, /scale/i, /growth/i, /handle.*traffic/i],
    answer: "Built for scale: Component-based architecture, optimized images, lazy loading, code splitting, CDN delivery, caching strategies, database indexing. Apps handle 10K+ concurrent users!",
    category: "process"
  },
  {
    keywords: ["accessibility", "a11y", "wcag"],
    patterns: [/accessibility/i, /a11y/i, /wcag/i, /disabled.*users/i],
    answer: "Accessibility priority: Semantic HTML, ARIA labels, keyboard navigation, screen reader support, color contrast (WCAG AA), alt texts, focus indicators. Inclusive by design!",
    category: "process"
  },
  {
    keywords: ["version control", "git", "github"],
    patterns: [/version.*control/i, /git/i, /github/i, /repository/i],
    answer: "Version control: All projects on GitHub, meaningful commit messages, feature branches, pull requests for major changes. Private repo during development, transfer ownership after completion!",
    category: "process"
  },
  {
    keywords: ["backup", "recovery", "data loss"],
    patterns: [/backup/i, /recovery/i, /data.*loss/i, /restore/i],
    answer: "Backup strategy: Daily automatic backups, GitHub version history, Firebase automatic backups, 30-day retention. Database snapshots before major updates. Zero data loss guarantee!",
    category: "process"
  },
  {
    keywords: ["prototype", "mvp", "minimum viable"],
    patterns: [/prototype/i, /mvp/i, /minimum.*viable/i, /quick.*version/i],
    answer: "MVP/Prototype: Can build quick MVPs (₹8,000-₹20,000, 5-10 days) with core features only. Perfect for testing ideas, getting investor feedback, validating concepts before full build!",
    category: "process"
  },
  {
    keywords: ["handoff", "transfer", "completion"],
    patterns: [/handoff/i, /transfer/i, /project.*completion/i, /final.*delivery/i],
    answer: "Project handoff: Source code on GitHub, all credentials, documentation, training video, support for 1 month, final invoice. Smooth transition, you're in full control!",
    category: "process"
  },
  {
    keywords: ["nda", "confidentiality", "secret"],
    patterns: [/nda/i, /confidentiality/i, /secret.*idea/i, /private/i],
    answer: "Confidentiality guaranteed: Happy to sign NDA before discussions. All client information private, secure file sharing, no idea sharing, professional discretion. Your secret is safe!",
    category: "process"
  },
];

// ==================== TECHNICAL DEEP DIVE (40 Q&A) ====================
export const technicalQuestions: KnowledgeEntry[] = [
  {
    keywords: ["nextjs 15", "app router", "react 19"],
    patterns: [/next.*15/i, /app.*router/i, /react.*19/i],
    answer: "Using cutting-edge Next.js 15 with App Router, React 19, Server Components, Server Actions, Partial Prerendering, and Turbopack. Staying ahead with latest features!",
    category: "technical"
  },
  {
    keywords: ["server components", "rsc", "client components"],
    patterns: [/server.*component/i, /rsc/i, /client.*component/i],
    answer: "Leverages Server Components for better performance: Data fetching on server, smaller bundle sizes, better SEO. Uses 'use client' only when needed for interactivity!",
    category: "technical"
  },
  {
    keywords: ["typescript strict", "type safety"],
    patterns: [/typescript.*strict/i, /type.*safety/i, /typescript.*config/i],
    answer: "TypeScript strict mode enabled: No any types, proper interfaces, type inference, generic types, utility types. Catches 90% of bugs before runtime!",
    category: "technical"
  },
  {
    keywords: ["performance optimization", "lighthouse", "core web vitals"],
    patterns: [/performance.*optimization/i, /lighthouse/i, /core.*web.*vitals/i],
    answer: "Performance tactics: Image optimization (next/image), lazy loading, code splitting, font optimization, minimal JavaScript, CSS-in-JS, tree shaking, bundle analysis. Target: <1s LCP, <100ms FID, <0.1 CLS!",
    category: "technical"
  },
  {
    keywords: ["seo optimization", "meta tags", "structured data"],
    patterns: [/seo.*optimization/i, /meta.*tags/i, /structured.*data/i, /schema/i],
    answer: "SEO best practices: Dynamic meta tags, Open Graph, Twitter Cards, canonical URLs, sitemap.xml, robots.txt, schema markup, semantic HTML, breadcrumbs. Google-friendly!",
    category: "technical"
  },
  {
    keywords: ["state management", "zustand", "context"],
    patterns: [/state.*management/i, /zustand/i, /context/i, /redux/i],
    answer: "State management: React Context for simple state, Zustand for complex apps (lightweight Redux alternative), URL state for filters/pagination, Server state with React Query!",
    category: "technical"
  },
  {
    keywords: ["api routes", "server actions", "backend"],
    patterns: [/api.*routes/i, /server.*actions/i, /backend.*nextjs/i],
    answer: "Next.js backend: API Routes for REST endpoints, Server Actions for mutations, Edge Functions for low latency, Middleware for auth/redirects. Full-stack in one framework!",
    category: "technical"
  },
  {
    keywords: ["authentication", "auth", "login"],
    patterns: [/authentication/i, /auth/i, /login.*system/i, /user.*management/i],
    answer: "Auth solutions: Firebase Auth (most projects), NextAuth for social logins, custom JWT, session management, role-based access, email verification, password reset!",
    category: "technical"
  },
  {
    keywords: ["database", "firebase", "firestore"],
    patterns: [/database.*choice/i, /firebase/i, /firestore/i, /sql.*nosql/i],
    answer: "Primary database: Firestore (real-time, scalable, free tier). Also experienced with: PostgreSQL (relational data), MongoDB (documents), Supabase (open-source Firebase). Pick best for project!",
    category: "technical"
  },
  {
    keywords: ["real-time", "websocket", "live updates"],
    patterns: [/real.*time/i, /websocket/i, /live.*updates/i, /sync/i],
    answer: "Real-time features: Firestore real-time listeners, WebSocket for chat, Server-Sent Events, Pusher for notifications. Apps feel instant and responsive!",
    category: "technical"
  },
  {
    keywords: ["forms", "validation", "react hook form"],
    patterns: [/forms/i, /validation/i, /react.*hook.*form/i, /form.*handling/i],
    answer: "Form handling: React Hook Form (performant), Zod for validation, custom error messages, file uploads, multi-step forms, auto-save drafts. Great UX!",
    category: "technical"
  },
  {
    keywords: ["animations", "framer motion", "gsap"],
    patterns: [/animation/i, /framer.*motion/i, /gsap/i, /transitions/i],
    answer: "Animation library: Framer Motion (declarative, React-friendly), CSS animations for simple effects, intersection observer for scroll animations. Smooth 60fps performance!",
    category: "technical"
  },
  {
    keywords: ["ui library", "shadcn", "radix", "components"],
    patterns: [/ui.*library/i, /shadcn/i, /radix/i, /component.*library/i],
    answer: "UI components: shadcn/ui (copy-paste, customizable), built on Radix UI (accessible), Tailwind styling. No bloated dependencies, full control over code!",
    category: "technical"
  },
  {
    keywords: ["icons", "lucide", "icons library"],
    patterns: [/icons/i, /lucide/i, /icon.*library/i],
    answer: "Icons: Lucide React (800+ icons, lightweight, consistent), SVG optimization, custom icons when needed. Tree-shakeable for small bundle!",
    category: "technical"
  },
  {
    keywords: ["testing", "jest", "playwright"],
    patterns: [/testing/i, /jest/i, /playwright/i, /unit.*test/i],
    answer: "Testing approach: Manual testing + Lighthouse for all projects. For complex apps: Jest (unit tests), React Testing Library (component tests), Playwright (E2E tests). Quality assured!",
    category: "technical"
  },
  {
    keywords: ["deployment", "cicd", "vercel"],
    patterns: [/deployment.*process/i, /cicd/i, /vercel.*deployment/i],
    answer: "CI/CD pipeline: GitHub → Vercel (automatic deployments), preview deployments for PRs, production branch protection, environment variables, custom domains. Push and it's live!",
    category: "technical"
  },
  {
    keywords: ["error handling", "error boundary", "logging"],
    patterns: [/error.*handling/i, /error.*boundary/i, /logging/i, /monitoring/i],
    answer: "Error handling: React Error Boundaries, try-catch blocks, custom error pages, user-friendly messages, error logging (console/Sentry), graceful fallbacks. No ugly crashes!",
    category: "technical"
  },
  {
    keywords: ["internationalization", "i18n", "multilingual"],
    patterns: [/internationalization/i, /i18n/i, /multilingual/i, /translation/i],
    answer: "i18n support: next-intl for translations, dynamic locale routing, right-to-left (RTL) support, number/date formatting, language detection. Build global apps!",
    category: "technical"
  },
  {
    keywords: ["pwa", "progressive web app", "offline"],
    patterns: [/pwa/i, /progressive.*web.*app/i, /offline/i, /service.*worker/i],
    answer: "PWA features: Service workers, offline support, add to home screen, push notifications, app-like experience, fast loading. Native app feel in browser!",
    category: "technical"
  },
  {
    keywords: ["code quality", "eslint", "prettier"],
    patterns: [/code.*quality/i, /eslint/i, /prettier/i, /linting/i],
    answer: "Code quality tools: ESLint (catch errors), Prettier (formatting), Husky (pre-commit hooks), TypeScript strict mode. Clean, consistent, maintainable code!",
    category: "technical"
  },
  {
    keywords: ["file upload", "image upload", "cloudinary"],
    patterns: [/file.*upload/i, /image.*upload/i, /cloudinary/i, /storage/i],
    answer: "File uploads: Firebase Storage (most projects), Cloudinary (image optimization), Uploadthing, direct AWS S3. Image compression, format conversion, thumbnails!",
    category: "technical"
  },
  {
    keywords: ["email service", "sendgrid", "resend"],
    patterns: [/email.*service/i, /sendgrid/i, /resend/i, /email.*api/i],
    answer: "Email solutions: Resend (modern, developer-friendly), SendGrid, Nodemailer, Firebase Extensions. Transactional emails, newsletters, templates, tracking!",
    category: "technical"
  },
  {
    keywords: ["payment", "stripe", "razorpay"],
    patterns: [/payment.*integration/i, /stripe/i, /razorpay/i, /payment.*gateway/i],
    answer: "Payment gateways: Razorpay (India-focused), Stripe (international), PayPal, Instamojo. Webhooks, subscription billing, invoice generation!",
    category: "technical"
  },
  {
    keywords: ["search", "algolia", "elasticsearch"],
    patterns: [/search.*functionality/i, /algolia/i, /elasticsearch/i],
    answer: "Search features: Client-side filtering (small datasets), Algolia (instant search), Firestore queries (medium), Elasticsearch (large datasets). Fast, relevant results!",
    category: "technical"
  },
  {
    keywords: ["analytics", "google analytics", "umami"],
    patterns: [/analytics.*tracking/i, /google.*analytics/i, /umami/i, /tracking/i],
    answer: "Analytics tools: Google Analytics 4 (standard), Umami (privacy-focused), Vercel Analytics (performance), custom event tracking. Data-driven decisions!",
    category: "technical"
  },
  {
    keywords: ["chatbot", "ai integration", "gemini"],
    patterns: [/chatbot/i, /ai.*integration/i, /gemini/i, /chat.*feature/i],
    answer: "AI features: Google Gemini integration (Stan AI uses this!), Genkit for AI apps, embeddings, vector search, chat interfaces, prompt engineering. Cutting-edge AI!",
    category: "technical"
  },
  {
    keywords: ["markdown", "mdx", "blog system"],
    patterns: [/markdown/i, /mdx/i, /blog.*system/i, /content.*management/i],
    answer: "Content systems: MDX (Markdown + components), gray-matter for frontmatter, syntax highlighting, table of contents, reading time, categories/tags. Beautiful blog platform!",
    category: "technical"
  },
  {
    keywords: ["dark mode", "theme", "color scheme"],
    patterns: [/dark.*mode/i, /theme.*switch/i, /color.*scheme/i],
    answer: "Theme support: Dark/light mode with next-themes, system preference detection, smooth transitions, Tailwind dark: variant, persistent user choice. Modern UX!",
    category: "technical"
  },
  {
    keywords: ["responsive images", "optimization", "next image"],
    patterns: [/responsive.*image/i, /image.*optimization/i, /next.*image/i],
    answer: "Image optimization: next/image component, automatic WebP/AVIF, lazy loading, blur placeholders, responsive srcset, CDN delivery. Load fast, look great!",
    category: "technical"
  },
  {
    keywords: ["fonts", "typography", "google fonts"],
    patterns: [/fonts/i, /typography/i, /google.*fonts/i, /font.*optimization/i],
    answer: "Typography: Next.js font optimization, Google Fonts self-hosting, variable fonts, font subsetting, FOUT prevention. Beautiful text, zero layout shift!",
    category: "technical"
  },
  {
    keywords: ["sitemap", "robots", "crawling"],
    patterns: [/sitemap/i, /robots.*txt/i, /crawling/i, /indexing/i],
    answer: "SEO files: Dynamic sitemap.xml generation, robots.txt configuration, crawl budget optimization, canonical URLs. Search engines love these sites!",
    category: "technical"
  },
  {
    keywords: ["middleware", "authentication middleware", "redirects"],
    patterns: [/middleware/i, /authentication.*middleware/i, /redirects/i],
    answer: "Next.js middleware: Auth checks, redirects, localization, A/B testing, rate limiting, headers modification. Runs at Edge for speed!",
    category: "technical"
  },
  {
    keywords: ["environment variables", "secrets", "config"],
    patterns: [/environment.*variables/i, /secrets/i, /config/i, /env.*file/i],
    answer: "Environment management: .env.local for development, Vercel environment variables for production, secret management, different configs per environment. Secure!",
    category: "technical"
  },
  {
    keywords: ["git workflow", "branching", "commits"],
    patterns: [/git.*workflow/i, /branching/i, /commit.*message/i],
    answer: "Git best practices: Feature branches, conventional commits, PR reviews, semantic versioning, clean history. Professional development workflow!",
    category: "technical"
  },
  {
    keywords: ["code splitting", "bundle size", "optimization"],
    patterns: [/code.*splitting/i, /bundle.*size/i, /optimization.*bundle/i],
    answer: "Bundle optimization: Dynamic imports, route-based splitting, vendor splitting, tree shaking, bundle analyzer, compression. Keep JavaScript under 100KB!",
    category: "technical"
  },
  {
    keywords: ["caching", "revalidation", "isr"],
    patterns: [/caching/i, /revalidation/i, /isr/i, /static.*regeneration/i],
    answer: "Caching strategies: Static pages, Incremental Static Regeneration (ISR), on-demand revalidation, CDN caching, browser caching. Fast repeat visits!",
    category: "technical"
  },
  {
    keywords: ["accessibility testing", "screen reader", "keyboard"],
    patterns: [/accessibility.*testing/i, /screen.*reader/i, /keyboard.*navigation/i],
    answer: "A11y testing: Manual keyboard testing, screen reader testing (NVDA), aXe DevTools, Lighthouse accessibility audit, color contrast checker. Inclusive design!",
    category: "technical"
  },
  {
    keywords: ["api documentation", "swagger", "postman"],
    patterns: [/api.*documentation/i, /swagger/i, /postman/i],
    answer: "API docs: Clear endpoint documentation, request/response examples, error codes, authentication guide, Postman collections. Easy for frontend developers!",
    category: "technical"
  },
  {
    keywords: ["rate limiting", "ddos", "security"],
    patterns: [/rate.*limiting/i, /ddos/i, /security.*measures/i],
    answer: "Security measures: Rate limiting, CORS configuration, input sanitization, SQL injection prevention, XSS protection, HTTPS only, security headers!",
    category: "technical"
  },
  {
    keywords: ["monitoring", "uptime", "alerts"],
    patterns: [/monitoring/i, /uptime/i, /alerts/i, /status.*page/i],
    answer: "Monitoring: Vercel Analytics, UptimeRobot, error tracking, performance monitoring, status page setup. Know when something breaks!",
    category: "technical"
  },
];

// ==================== CLIENT FAQ (30 Q&A) ====================
export const clientFAQQuestions: KnowledgeEntry[] = [
  {
    keywords: ["not technical", "no experience", "beginner"],
    patterns: [/not.*technical/i, /no.*experience/i, /beginner/i, /don't.*know.*coding/i],
    answer: "No problem! Most clients are non-technical. Kunal explains everything in simple terms, handles all tech aspects, provides easy-to-use admin panels. Just share your vision!",
    category: "client-faq"
  },
  {
    keywords: ["idea", "concept", "startup"],
    patterns: [/just.*idea/i, /concept.*only/i, /startup.*idea/i],
    answer: "Perfect starting point! Kunal can help: validate ideas, suggest features, create wireframes, plan tech stack, estimate costs, build MVP. Turn ideas into reality!",
    category: "client-faq"
  },
  {
    keywords: ["no content", "no text", "empty"],
    patterns: [/no.*content/i, /no.*text/i, /empty.*site/i, /don't.*have.*content/i],
    answer: "Content help available: Can use placeholder text initially, provide content guidelines, recommend copywriters, use AI for drafts, work iteratively as you create content!",
    category: "client-faq"
  },
  {
    keywords: ["no logo", "no branding", "no design"],
    patterns: [/no.*logo/i, /no.*branding/i, /no.*design/i],
    answer: "Design help: Can create simple modern logos, suggest color schemes, provide multiple design options, work with your brand guidelines if you get them later!",
    category: "client-faq"
  },
  {
    keywords: ["budget", "tight budget", "cheap"],
    patterns: [/tight.*budget/i, /limited.*budget/i, /cheap.*option/i],
    answer: "Budget-friendly options: Can start with MVP (essential features only), phased development (pay as you grow), suggest free hosting, prioritize features. Quality within budget!",
    category: "client-faq"
  },
  {
    keywords: ["already have website", "redesign", "update"],
    patterns: [/already.*have.*website/i, /redesign/i, /update.*existing/i, /improve/i],
    answer: "Redesign services: Audit current site, identify issues, modernize design, improve performance, add new features, migrate content. Transform existing sites!",
    category: "client-faq"
  },
  {
    keywords: ["competition", "similar", "already exists"],
    patterns: [/already.*exists/i, /competition/i, /similar.*site/i],
    answer: "Competition is validation: Shows market demand! Kunal helps: analyze competitors, identify gaps, add unique features, better UX, faster performance. Stand out!",
    category: "client-faq"
  },
  {
    keywords: ["update myself", "manage", "edit"],
    patterns: [/update.*myself/i, /manage.*content/i, /edit.*myself/i],
    answer: "Self-management: All sites come with easy admin panels, documentation, video tutorials, 1-hour training. Edit text, images, products without developer!",
    category: "client-faq"
  },
  {
    keywords: ["mobile app", "android", "ios"],
    patterns: [/mobile.*app/i, /android/i, /ios/i, /app.*store/i],
    answer: "Progressive Web Apps: Build PWA that works like native app, add to home screen, works offline, push notifications, no app store needed! Cost-effective alternative!",
    category: "client-faq"
  },
  {
    keywords: ["seo", "google ranking", "traffic"],
    patterns: [/seo/i, /google.*ranking/i, /get.*traffic/i, /appear.*google/i],
    answer: "SEO included: Technical SEO, meta tags, sitemap, fast loading, mobile-friendly, structured data. Rank well! Note: SEO takes 3-6 months for organic traffic!",
    category: "client-faq"
  },
  {
    keywords: ["social media", "facebook", "instagram"],
    patterns: [/social.*media/i, /facebook/i, /instagram/i, /connect.*social/i],
    answer: "Social integration: Social sharing buttons, Instagram feed, Facebook pixel, Open Graph tags, social login, embedded posts. Amplify reach!",
    category: "client-faq"
  },
  {
    keywords: ["blogging", "write articles", "content"],
    patterns: [/blog/i, /write.*articles/i, /content.*system/i],
    answer: "Blog features: Full-featured blog system, categories/tags, SEO optimization, social sharing, comments, newsletter integration. Grow audience through content!",
    category: "client-faq"
  },
  {
    keywords: ["email", "contact form", "newsletter"],
    patterns: [/email/i, /contact.*form/i, /newsletter/i, /collect.*emails/i],
    answer: "Email features: Contact forms, newsletter signups, automated emails, welcome sequences, integration with Mailchimp/ConvertKit. Build email list!",
    category: "client-faq"
  },
  {
    keywords: ["analytics", "visitors", "tracking"],
    patterns: [/analytics/i, /track.*visitors/i, /how.*many.*visit/i],
    answer: "Analytics setup: Google Analytics, visitor tracking, traffic sources, user behavior, conversion tracking, custom events. Data-driven growth!",
    category: "client-faq"
  },
  {
    keywords: ["competitor analysis", "compare", "similar sites"],
    patterns: [/competitor.*analysis/i, /compare.*competitor/i, /similar.*sites/i],
    answer: "Free competitor analysis: Review 3-5 competitor sites, identify strengths/weaknesses, suggest improvements, feature comparison. Informed decisions!",
    category: "client-faq"
  },
  {
    keywords: ["multiple languages", "hindi", "translation"],
    patterns: [/multiple.*languages/i, /hindi/i, /translation/i, /multilingual/i],
    answer: "Multilingual sites: Support for Hindi, English, and other Indian languages, language switcher, translated content, SEO for each language. Reach more customers!",
    category: "client-faq"
  },
  {
    keywords: ["booking", "appointment", "scheduling"],
    patterns: [/booking/i, /appointment/i, /scheduling/i, /reservation/i],
    answer: "Booking systems: Appointment scheduling, calendar integration, email confirmations, payment collection, reminders, availability management. Automate bookings!",
    category: "client-faq"
  },
  {
    keywords: ["membership", "subscription", "recurring"],
    patterns: [/membership/i, /subscription/i, /recurring.*payment/i],
    answer: "Membership sites: User registration, subscription plans, recurring billing, member-only content, different access levels. Create community!",
    category: "client-faq"
  },
  {
    keywords: ["real estate", "property", "listings"],
    patterns: [/real.*estate/i, /property/i, /listings/i],
    answer: "Real estate features: Property listings, search/filters, image galleries, map integration, contact agent, virtual tours, lead capture. Showcase properties!",
    category: "client-faq"
  },
  {
    keywords: ["restaurant", "menu", "food ordering"],
    patterns: [/restaurant/i, /menu/i, /food.*ordering/i],
    answer: "Restaurant websites: Online menu, table reservations, online ordering, payment integration, delivery management, special offers. Increase orders!",
    category: "client-faq"
  },
  {
    keywords: ["educational", "courses", "elearning"],
    patterns: [/educational/i, /courses/i, /elearning/i, /online.*learning/i],
    answer: "E-learning platforms: Course creation, video hosting, quizzes, certificates, progress tracking, payment integration, student dashboard. Teach online!",
    category: "client-faq"
  },
  {
    keywords: ["portfolio", "showcase work", "gallery"],
    patterns: [/portfolio/i, /showcase.*work/i, /gallery/i],
    answer: "Portfolio websites: Project showcase, image galleries, case studies, client testimonials, contact forms, blog integration. Attract clients!",
    category: "client-faq"
  },
  {
    keywords: ["chat", "live chat", "customer support"],
    patterns: [/chat/i, /live.*chat/i, /customer.*support/i],
    answer: "Chat features: WhatsApp integration (most popular), chatbot integration, live chat widget, automated responses. Instant support!",
    category: "client-faq"
  },
  {
    keywords: ["reviews", "testimonials", "ratings"],
    patterns: [/reviews/i, /testimonials/i, /ratings/i, /feedback/i],
    answer: "Review systems: Testimonials section, star ratings, Google Reviews integration, review collection forms, approval workflow. Build trust!",
    category: "client-faq"
  },
  {
    keywords: ["maps", "location", "directions"],
    patterns: [/maps/i, /location/i, /directions/i, /google.*maps/i],
    answer: "Map integration: Google Maps embed, multiple locations, directions, custom markers, store locator. Easy to find!",
    category: "client-faq"
  },
  {
    keywords: ["video", "youtube", "media"],
    patterns: [/video/i, /youtube/i, /media/i, /embed/i],
    answer: "Video integration: YouTube/Vimeo embed, video galleries, lazy loading, custom video player, thumbnails. Engage with video!",
    category: "client-faq"
  },
  {
    keywords: ["gdpr", "privacy", "cookies"],
    patterns: [/gdpr/i, /privacy/i, /cookies/i, /legal/i],
    answer: "Legal compliance: Privacy policy, terms & conditions, cookie consent, GDPR compliance, data protection. Stay compliant!",
    category: "client-faq"
  },
  {
    keywords: ["speed", "fast", "loading time"],
    patterns: [/speed/i, /fast/i, /loading.*time/i, /slow.*site/i],
    answer: "Speed optimization: Target <2s load time, 95+ Lighthouse scores, image optimization, code minification, CDN delivery, caching. Lightning fast!",
    category: "client-faq"
  },
  {
    keywords: ["whatsapp business", "whatsapp", "chat"],
    patterns: [/whatsapp.*business/i, /whatsapp/i, /chat.*whatsapp/i],
    answer: "WhatsApp integration: Click-to-chat button, pre-filled messages, floating WhatsApp button, QR code, business profile link. Most popular in India!",
    category: "client-faq"
  },
  {
    keywords: ["difference", "website vs app", "web app"],
    patterns: [/difference/i, /website.*vs.*app/i, /web.*app/i],
    answer: "Website vs Web App: Website = informational (brochure). Web App = interactive (login, database, features). Both responsive! Choose based on needs!",
    category: "client-faq"
  },
];

// ==================== 7K ECOSYSTEM APPS (25 Q&A) ====================
export const ecosystemQuestions: KnowledgeEntry[] = [
  {
    keywords: ["7k life", "productivity", "habit tracker"],
    patterns: [/7k.*life/i, /productivity.*app/i, /habit.*tracker/i],
    answer: "7K Life: All-in-one productivity powerhouse with habit tracking, goal setting, to-do lists, focus timer, mood journal, and life management. Built for radical productivity!",
    category: "ecosystem"
  },
  {
    keywords: ["7k lawprep", "law", "judiciary", "exam"],
    patterns: [/7k.*lawprep/i, /law.*prep/i, /judiciary/i, /legal.*exam/i],
    answer: "7K LawPrep: Complete platform for judiciary exam preparation with 10,000+ MCQs, current affairs, daily quizzes, mock tests, performance analytics. Kunal's personal tool for law dreams!",
    category: "ecosystem"
  },
  {
    keywords: ["7k polyglot", "language learning", "duolingo"],
    patterns: [/7k.*polyglot/i, /language.*learning/i, /polyglot/i],
    answer: "7K Polyglot: AI-powered language learning with 20+ languages, conversation practice, comparative learning, vocabulary building, pronunciation guides. Better than Duolingo for polyglots!",
    category: "ecosystem"
  },
  {
    keywords: ["7k finance", "money", "budget", "expense"],
    patterns: [/7k.*finance/i, /money.*management/i, /budget/i, /expense.*tracker/i],
    answer: "7K Finance: Smart financial management with expense tracking, budget planning, savings goals, investment tracking, financial insights, spending analysis!",
    category: "ecosystem"
  },
  {
    keywords: ["7k chess", "chess platform", "puzzle"],
    patterns: [/7k.*chess/i, /chess.*platform/i, /chess.*puzzle/i],
    answer: "7K Chess: Complete chess platform with puzzles, tactics trainer, opening explorer, game analysis, rating tracker, study plans. For chess lovers like Kunal (1300+ rating)!",
    category: "ecosystem"
  },
  {
    keywords: ["7k music", "music player", "playlist"],
    patterns: [/7k.*music/i, /music.*player/i, /playlist/i],
    answer: "7K Music: Minimalist music player with focus modes, mood playlists, study music, ambient sounds, no distractions. Perfect for deep work!",
    category: "ecosystem"
  },
  {
    keywords: ["7k notes", "note taking", "markdown"],
    patterns: [/7k.*notes/i, /note.*taking/i, /markdown.*editor/i],
    answer: "7K Notes: Fast markdown note-taking with folders, tags, search, code highlighting, export options, dark mode. Simple, powerful, yours!",
    category: "ecosystem"
  },
  {
    keywords: ["stan ai", "ai assistant", "chatbot"],
    patterns: [/stan.*ai/i, /ai.*assistant/i, /chatbot/i],
    answer: "Stan AI (that's me!): Personal AI assistant knowing 550+ Q&A about Kunal, navigation commands, project guidance, smart suggestions. Will eventually run on Android!",
    category: "ecosystem"
  },
  {
    keywords: ["7k health", "fitness", "workout"],
    patterns: [/7k.*health/i, /fitness.*app/i, /workout.*tracker/i],
    answer: "7K Health: Holistic health tracking with workout plans, meal logging, water intake, sleep tracking, health metrics, wellness tips. Mind and body!",
    category: "ecosystem"
  },
  {
    keywords: ["7k bookshelf", "reading", "books"],
    patterns: [/7k.*bookshelf/i, /reading.*tracker/i, /book.*library/i],
    answer: "7K Bookshelf: Reading companion with book tracking, reading lists, quotes collection, reading stats, book recommendations, progress tracking!",
    category: "ecosystem"
  },
  {
    keywords: ["ecosystem", "all apps", "7k apps"],
    patterns: [/what.*is.*7k.*ecosystem/i, /all.*apps/i, /7k.*apps/i, /how.*many.*apps/i],
    answer: "7K Ecosystem: 24+ interconnected apps covering productivity, education, finance, health, entertainment, and more. Built by Kunal for himself, now helping others. Vision: Complete digital life companion!",
    category: "ecosystem",
    priority: 10
  },
  {
    keywords: ["why 7k", "name meaning", "7k significance"],
    patterns: [/why.*7k/i, /name.*meaning/i, /7k.*significance/i],
    answer: "7K origin: Started as personal branding (Kunal's initials + lucky number). Now represents: 7 principles, 1000s of users, infinite possibilities. Growing ecosystem philosophy!",
    category: "ecosystem"
  },
  {
    keywords: ["interconnected", "sync", "all apps work together"],
    patterns: [/interconnected/i, /sync.*apps/i, /work.*together/i],
    answer: "Ecosystem synergy: Shared design language, unified authentication, cross-app data flow, consistent UX. Apps complement each other for complete productivity system!",
    category: "ecosystem"
  },
  {
    keywords: ["future apps", "coming soon", "roadmap"],
    patterns: [/future.*apps/i, /coming.*soon/i, /roadmap/i, /next.*app/i],
    answer: "Upcoming apps: 7K Travel (trip planning), 7K Crypto (crypto tracking), 7K Social (minimalist social), 7K Code (dev tools), 7K Legal (law tools). Always building!",
    category: "ecosystem"
  },
  {
    keywords: ["mobile app", "android version", "app store"],
    patterns: [/mobile.*app/i, /android.*version/i, /app.*store/i, /download/i],
    answer: "Currently: All 7K apps are PWAs (Progressive Web Apps) - work on mobile browsers, add to home screen, work offline. Native Android apps planned for 2026!",
    category: "ecosystem"
  },
  {
    keywords: ["free", "paid", "pricing ecosystem"],
    patterns: [/free/i, /paid/i, /pricing.*ecosystem/i, /cost.*apps/i],
    answer: "Most apps FREE to use! Premium features planned for power users. Philosophy: Useful tools accessible to all. Monetization through freelance work and future premium!",
    category: "ecosystem"
  },
  {
    keywords: ["users", "how many users", "downloads"],
    patterns: [/how.*many.*users/i, /downloads/i, /people.*use/i],
    answer: "Growing user base: 100+ active users across apps, 1000+ visits/month, positive feedback, continuous improvements based on user needs. Built with users, for users!",
    category: "ecosystem"
  },
  {
    keywords: ["inspiration", "why build", "motivation"],
    patterns: [/inspiration/i, /why.*build/i, /motivation.*ecosystem/i],
    answer: "Origin story: Kunal built apps he personally needed - productivity tools that actually worked for him. Philosophy: 'Build for yourself first, others will benefit too.' Authentic tools!",
    category: "ecosystem"
  },
  {
    keywords: ["tech stack", "how built", "technology"],
    patterns: [/tech.*stack.*ecosystem/i, /how.*built/i, /technology.*used/i],
    answer: "Tech stack: Next.js 15, React 19, TypeScript, Tailwind CSS, Firebase, Vercel deployment. Modern, fast, scalable. Same tech for all apps = consistent quality!",
    category: "ecosystem"
  },
  {
    keywords: ["feature request", "suggest", "feedback"],
    patterns: [/feature.*request/i, /suggest/i, /feedback/i, /improvement/i],
    answer: "Feedback welcome: Email 7kmindbeatss@gmail.com or WhatsApp +918591247148 with feature requests, bug reports, suggestions. User feedback shapes development!",
    category: "ecosystem"
  },
  {
    keywords: ["open source", "github", "code"],
    patterns: [/open.*source/i, /github/i, /source.*code/i],
    answer: "Some apps open source on GitHub (@kunu2009)! Learning-friendly codebase, well-documented, modern best practices. Contribute or learn from code!",
    category: "ecosystem"
  },
  {
    keywords: ["competition", "vs notion", "vs todoist"],
    patterns: [/vs.*notion/i, /vs.*todoist/i, /competition/i, /compare/i],
    answer: "7K apps vs others: More focused (one purpose), simpler UI, student-built = empathy, free/affordable, privacy-focused, Indian context. Not replacing, complementing!",
    category: "ecosystem"
  },
  {
    keywords: ["privacy", "data security", "safe"],
    patterns: [/privacy/i, /data.*security/i, /safe/i, /data.*stored/i],
    answer: "Privacy first: Data stored securely on Firebase, no selling data, minimal tracking, you own your data, can export anytime, transparent policies!",
    category: "ecosystem"
  },
  {
    keywords: ["contribute", "collaborate", "join"],
    patterns: [/contribute/i, /collaborate/i, /join.*ecosystem/i],
    answer: "Collaboration welcome: Developers can contribute code, designers can improve UI, writers can create content, users can spread word. Community-driven growth!",
    category: "ecosystem"
  },
  {
    keywords: ["success story", "impact", "testimonial"],
    patterns: [/success.*story/i, /impact/i, /testimonial/i],
    answer: "User impact: Helped students prepare for exams (7K LawPrep), improved productivity (7K Life), language learning success (7K Polyglot). Building tools that genuinely help!",
    category: "ecosystem"
  },
];

// Export combined array
export const EXPANDED_KNOWLEDGE: KnowledgeEntry[] = [
  ...pricingQuestions,
  ...processQuestions,
  ...technicalQuestions,
  ...clientFAQQuestions,
  ...ecosystemQuestions,
];

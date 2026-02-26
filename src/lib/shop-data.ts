export type ShopProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "prompts" | "templates" | "bundle" | "code";
  delivery: string;
  seoKeyword: string;
};

export type ShopChecklistStep = {
  step: number;
  title: string;
  detail: string;
};

export const shopProducts: ShopProduct[] = [
  {
    id: "dev-prompt-pack-vol-1",
    name: "Developer Prompt Pack Vol.1",
    description: "150 high-quality prompts for coding, debugging, and documentation workflows.",
    price: "₹149",
    category: "prompts",
    delivery: "Instant digital download",
    seoKeyword: "developer prompt pack",
  },
  {
    id: "student-productivity-prompts",
    name: "Student Productivity Prompt Pack",
    description: "Exam planning, revision, notes, and project prompts designed for students.",
    price: "₹149",
    category: "prompts",
    delivery: "Instant digital download",
    seoKeyword: "student prompt pack",
  },
  {
    id: "portfolio-resume-copy-kit",
    name: "Portfolio + Resume Copy Kit",
    description: "ATS-ready resume templates and portfolio copy frameworks for fast publishing.",
    price: "₹299",
    category: "templates",
    delivery: "ZIP + guide PDF",
    seoKeyword: "portfolio resume template",
  },
  {
    id: "notion-study-planner-kit",
    name: "Notion Study Planner Kit",
    description: "Minimal Notion templates for study planning, habit tracking, and task execution.",
    price: "₹299",
    category: "templates",
    delivery: "Notion duplicate links",
    seoKeyword: "notion study planner template",
  },
  {
    id: "landing-page-copy-swipe-file",
    name: "Landing Page Copy Swipe File",
    description: "50 proven headline, CTA, and section templates for high-converting pages.",
    price: "₹399",
    category: "templates",
    delivery: "PDF + editable docs",
    seoKeyword: "landing page copy templates",
  },
  {
    id: "nextjs-portfolio-starter-kit",
    name: "Next.js Portfolio Starter Kit",
    description: "Modern sections, reusable blocks, and SEO-ready setup for dev portfolios.",
    price: "₹799",
    category: "code",
    delivery: "Source files + setup guide",
    seoKeyword: "nextjs portfolio starter kit",
  },
];

export const shopChecklistFlow: ShopChecklistStep[] = [
  {
    step: 1,
    title: "Finalize 3 launch products",
    detail: "Pick 2 low-ticket items + 1 core product from your shortlist.",
  },
  {
    step: 2,
    title: "Create product assets with AI",
    detail: "Generate first drafts, then keep only top-quality outputs.",
  },
  {
    step: 3,
    title: "Package and preview",
    detail: "Prepare ZIP/PDF/Notion links and preview images for each product.",
  },
  {
    step: 4,
    title: "Publish /shop and product pages",
    detail: "Use keyword-focused titles, descriptions, and FAQ sections.",
  },
  {
    step: 5,
    title: "Enable payments + delivery",
    detail: "Start with UPI/manual delivery, then move to Razorpay automation.",
  },
  {
    step: 6,
    title: "Launch content and internal links",
    detail: "Publish blog posts and link homepage/apps to product pages.",
  },
  {
    step: 7,
    title: "Track conversions weekly",
    detail: "Monitor traffic, add-to-cart intent, sales, and top-performing pages.",
  },
];

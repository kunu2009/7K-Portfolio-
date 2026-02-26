export type ShopProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  category: "prompts" | "templates" | "bundle" | "code";
  delivery: string;
  seoKeyword: string;
  audience: string;
  outcome: string;
  includes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
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
    priceValue: 149,
    category: "prompts",
    delivery: "Instant digital download",
    seoKeyword: "developer prompt pack",
    audience: "Developers, freelancers, and coding students",
    outcome: "Write faster, debug better, and ship cleaner code with reusable AI prompts.",
    includes: [
      "150 categorized prompts",
      "Debugging and refactoring prompt set",
      "Code review and docs prompts",
      "Quick-start usage guide",
    ],
    faqs: [
      {
        question: "How do I use these prompts?",
        answer: "Copy a prompt, replace placeholders, and run it in your AI tool. A quick-start guide is included.",
      },
      {
        question: "Will this work with ChatGPT and Gemini?",
        answer: "Yes, prompts are model-agnostic and work across major AI assistants.",
      },
    ],
  },
  {
    id: "student-productivity-prompts",
    name: "Student Productivity Prompt Pack",
    description: "Exam planning, revision, notes, and project prompts designed for students.",
    price: "₹149",
    priceValue: 149,
    category: "prompts",
    delivery: "Instant digital download",
    seoKeyword: "student prompt pack",
    audience: "School and college students",
    outcome: "Plan study sessions better and finish assignments with less stress.",
    includes: [
      "100 study workflow prompts",
      "Exam prep and revision prompts",
      "Project and presentation prompts",
      "Weekly planning template",
    ],
    faqs: [
      {
        question: "Is this useful for class 11/12 students?",
        answer: "Yes, this is built for student workflows including school-level exam prep.",
      },
      {
        question: "Do I need paid AI tools?",
        answer: "No, these prompts can be used with free AI tiers as well.",
      },
    ],
  },
  {
    id: "portfolio-resume-copy-kit",
    name: "Portfolio + Resume Copy Kit",
    description: "ATS-ready resume templates and portfolio copy frameworks for fast publishing.",
    price: "₹299",
    priceValue: 299,
    category: "templates",
    delivery: "ZIP + guide PDF",
    seoKeyword: "portfolio resume template",
    audience: "Students and beginner freelancers",
    outcome: "Publish a polished resume and portfolio copy in hours, not days.",
    includes: [
      "ATS-friendly resume templates",
      "Portfolio section copy framework",
      "Project description formula",
      "Editing checklist",
    ],
    faqs: [
      {
        question: "Are these templates editable?",
        answer: "Yes, all templates are editable in standard document tools.",
      },
      {
        question: "Can I use this for internships?",
        answer: "Yes, this kit is designed for internship and entry-level applications.",
      },
    ],
  },
  {
    id: "notion-study-planner-kit",
    name: "Notion Study Planner Kit",
    description: "Minimal Notion templates for study planning, habit tracking, and task execution.",
    price: "₹299",
    priceValue: 299,
    category: "templates",
    delivery: "Notion duplicate links",
    seoKeyword: "notion study planner template",
    audience: "Students who want a clean digital planning system",
    outcome: "Track study goals and habits in one simple dashboard.",
    includes: [
      "Study planner template",
      "Habit tracker template",
      "Weekly review dashboard",
      "Setup walkthrough",
    ],
    faqs: [
      {
        question: "Do I need Notion premium?",
        answer: "No, these templates work on the free Notion plan.",
      },
      {
        question: "Is this mobile friendly?",
        answer: "Yes, the templates are usable on both desktop and mobile.",
      },
    ],
  },
  {
    id: "landing-page-copy-swipe-file",
    name: "Landing Page Copy Swipe File",
    description: "50 proven headline, CTA, and section templates for high-converting pages.",
    price: "₹399",
    priceValue: 399,
    category: "templates",
    delivery: "PDF + editable docs",
    seoKeyword: "landing page copy templates",
    audience: "Founders, creators, and freelancers",
    outcome: "Write clearer copy that improves conversion without starting from blank pages.",
    includes: [
      "50 conversion-focused copy blocks",
      "Headline and CTA frameworks",
      "Problem-solution section templates",
      "Quick adaptation guide",
    ],
    faqs: [
      {
        question: "Can I use this for client projects?",
        answer: "Yes, you can adapt these templates for your own or client landing pages.",
      },
      {
        question: "Is this beginner-friendly?",
        answer: "Yes, it includes beginner examples and plug-and-play structures.",
      },
    ],
  },
  {
    id: "nextjs-portfolio-starter-kit",
    name: "Next.js Portfolio Starter Kit",
    description: "Modern sections, reusable blocks, and SEO-ready setup for dev portfolios.",
    price: "₹799",
    priceValue: 799,
    category: "code",
    delivery: "Source files + setup guide",
    seoKeyword: "nextjs portfolio starter kit",
    audience: "Developers and students launching personal sites",
    outcome: "Ship a modern portfolio faster with reusable sections and SEO defaults.",
    includes: [
      "Reusable hero/features/CTA sections",
      "SEO metadata starter setup",
      "Responsive UI blocks",
      "Setup and deployment guide",
    ],
    faqs: [
      {
        question: "Do I need advanced coding knowledge?",
        answer: "Basic Next.js and React knowledge is enough to use and customize this kit.",
      },
      {
        question: "Can I deploy this on Vercel?",
        answer: "Yes, the kit is deployment-ready for Vercel and similar platforms.",
      },
    ],
  },
];

export function getShopProductById(id: string): ShopProduct | undefined {
  return shopProducts.find((product) => product.id === id);
}

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

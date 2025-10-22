/**
 * Portfolio Sections Data
 * Complete control over all homepage sections
 */

export interface HeroSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export interface AboutSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
  highlights: string[];
  image?: string;
}

export interface PhilosophySection {
  enabled: boolean;
  title: string;
  subtitle: string;
  philosophies: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export interface ServicesSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
  }>;
}

export interface PortfolioShowcaseSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  showcaseItems: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
  }>;
}

export interface EcosystemSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface ProjectsSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
  }>;
}

export interface ContactSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface JourneySection {
  enabled: boolean;
  title: string;
  subtitle: string;
  milestones: Array<{
    year: string;
    title: string;
    description: string;
  }>;
}

export interface RecommendationsSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  recommendations: Array<{
    id: string;
    name: string;
    role: string;
    company: string;
    text: string;
    avatar?: string;
  }>;
}

export interface SupportSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  description: string;
  donationLinks: {
    buyMeCoffee?: string;
    patreon?: string;
    paypal?: string;
  };
}

export interface PortfolioSections {
  hero: HeroSection;
  about: AboutSection;
  philosophy: PhilosophySection;
  services: ServicesSection;
  portfolioShowcase: PortfolioShowcaseSection;
  ecosystem: EcosystemSection;
  projects: ProjectsSection;
  contact: ContactSection;
  journey: JourneySection;
  recommendations: RecommendationsSection;
  support: SupportSection;
}

export const portfolioSections: PortfolioSections = {
  hero: {
    enabled: true,
    title: "Building the 7K Ecosystem",
    subtitle: "One Idea at a Time.",
    description: "I'm Kunal — a 12th-grade Arts student with a passion for building apps, learning languages, and playing chess. I dream of becoming a corporate lawyer, but my love for technology is rooted in creating tools that empower and comfort. From productivity apps to language learning platforms, finance trackers to fitness companions — I build digital solutions that make life easier. Developer • Polyglot • Chess Player • Lifelong Learner",
    ctaText: "Explore My Work",
    ctaLink: "#projects",
    secondaryCtaText: "Get In Touch",
    secondaryCtaLink: "#contact",
    backgroundImage: "/images/main-background.svg"
  },
  about: {
    enabled: true,
    title: "About Me",
    subtitle: "Who I Am",
    description: "I'm Kunal Chheda — a 12th-grade Arts student from India with an unconventional blend of ambitions. While I dream of becoming a corporate lawyer, my heart beats for technology and creation. I've built over 24 powerful applications spanning productivity, education, finance, health, and entertainment. As a polyglot learning multiple languages, a chess enthusiast pushing my rating, and a full-stack developer mastering modern web technologies, I believe in building tools that don't just solve problems—they provide comfort and companionship in our digital journey.",
    quote: "I didn't build products to showcase my skills. I built them because I needed something steady and reliable when everything else felt uncertain. These apps aren't just code—they're my companions, my comfort zone, and proof that technology can be warm, empathetic, and deeply personal.",
    highlights: [
      "12th Grade Arts Student",
      "24+ Production Apps Built",
      "Chess Player (1300+ Rating)",
      "Polyglot in Progress (6+ Languages)",
      "Full-Stack Developer",
      "Aspiring Corporate Lawyer"
    ],
    image: "/images/profile.jpg"
  },
  philosophy: {
    enabled: true,
    title: "Philosophy",
    subtitle: "What Drives Me",
    philosophies: [
      {
        title: "Build for Impact",
        description: "Every app should solve a real problem and make someone's life easier.",
        icon: "target"
      },
      {
        title: "Privacy First",
        description: "User data is sacred. Privacy isn't a feature, it's a fundamental right.",
        icon: "shield"
      },
      {
        title: "Continuous Learning",
        description: "Technology evolves fast. Stay curious, keep learning, never stop growing.",
        icon: "book"
      }
    ]
  },
  services: {
    enabled: true,
    title: "Services",
    subtitle: "What I Offer",
    services: [
      {
        id: "web-dev",
        title: "Web Development",
        description: "Full-stack web applications built with modern technologies",
        icon: "code",
        features: ["Next.js & React", "TypeScript", "Tailwind CSS", "Firebase Integration"]
      },
      {
        id: "app-dev",
        title: "App Development",
        description: "Creating productivity tools and utility applications",
        icon: "smartphone",
        features: ["PWA Development", "Offline-first", "Cross-platform", "Performance Optimized"]
      },
      {
        id: "ui-design",
        title: "UI/UX Design",
        description: "Designing intuitive and beautiful user experiences",
        icon: "palette",
        features: ["Figma Design", "Responsive Layouts", "Design Systems", "Accessibility"]
      }
    ]
  },
  portfolioShowcase: {
    enabled: true,
    title: "Featured Work",
    subtitle: "Projects I'm Proud Of",
    showcaseItems: [
      {
        id: "7k-life",
        title: "7K Life",
        description: "All-in-one productivity companion",
        image: "/images/showcase/7k-life.png",
        link: "https://life.7kc.me",
        category: "Productivity"
      },
      {
        id: "7k-lawprep",
        title: "7K LawPrep",
        description: "Complete law exam preparation platform",
        image: "/images/showcase/7k-lawprep.png",
        link: "https://lawprep.7kc.me",
        category: "Education"
      }
    ]
  },
  ecosystem: {
    enabled: true,
    title: "7K Ecosystem",
    subtitle: "A Suite of Connected Apps",
    description: "The 7K Ecosystem is a collection of 20+ applications designed to enhance productivity, learning, and personal growth. Each app is built with privacy, performance, and user experience in mind.",
    features: [
      "Unified Experience",
      "Privacy-Focused",
      "Offline-First",
      "Open Source",
      "Regular Updates"
    ]
  },
  projects: {
    enabled: true,
    title: "Projects",
    subtitle: "What I'm Building",
    projects: [
      {
        id: "project-1",
        title: "7K Portfolio",
        description: "Personal portfolio and ecosystem hub built with Next.js 14",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://7kc.me",
        github: "https://github.com/kunu2009/7K-Portfolio-",
        image: "/images/projects/portfolio.png"
      }
    ]
  },
  contact: {
    enabled: true,
    title: "Get In Touch",
    subtitle: "Let's Connect",
    email: "7kmindbeatss@gmail.com",
    availability: "Available for freelance projects and collaborations",
    socialLinks: {
      github: "kunu2009",
      linkedin: "kunal-chheda-b36731388",
      twitter: "kunal7k"
    }
  },
  journey: {
    enabled: true,
    title: "My Journey",
    subtitle: "How It All Started",
    milestones: [
      {
        year: "2023",
        title: "Started Coding",
        description: "Began learning web development with HTML, CSS, and JavaScript"
      },
      {
        year: "2024",
        title: "Built First App",
        description: "Launched 7K Life, my first productivity application"
      },
      {
        year: "2025",
        title: "Growing Ecosystem",
        description: "Expanded to 20+ apps and building the 7K Ecosystem"
      }
    ]
  },
  recommendations: {
    enabled: true,
    title: "Recommendations",
    subtitle: "What People Say",
    recommendations: [
      {
        id: "rec-1",
        name: "John Doe",
        role: "Developer",
        company: "Tech Corp",
        text: "Kunal is an exceptional developer with great attention to detail and user experience.",
        avatar: "/images/avatars/user1.jpg"
      }
    ]
  },
  support: {
    enabled: true,
    title: "Support My Work",
    subtitle: "Help Keep the Ecosystem Growing",
    description: "If you find my apps useful, consider supporting my work. Your contribution helps me dedicate more time to building and maintaining these tools.",
    donationLinks: {
      buyMeCoffee: "https://buymeacoffee.com/kunal7k",
      patreon: "https://patreon.com/kunal7k"
    }
  }
};

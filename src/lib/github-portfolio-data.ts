export type GithubRepoLanguage = 'TypeScript' | 'JavaScript' | 'HTML' | 'Dart' | 'Kotlin' | 'Python';

export type GithubPortfolioStat = {
  value: string;
  label: string;
  helper: string;
};

export type GithubPortfolioSegment = {
  id: string;
  emoji: string;
  title: string;
  count: string;
  summary: string;
  gradient: string;
};

export type GithubRepo = {
  name: string;
  description: string;
  language: GithubRepoLanguage;
  repoUrl: string;
  liveUrl?: string;
  badge?: string;
};

export type GithubPortfolioData = {
  stats: GithubPortfolioStat[];
  segments: GithubPortfolioSegment[];
  featuredRepos: GithubRepo[];
};

export const defaultGithubPortfolioData: GithubPortfolioData = {
  stats: [
    { value: '80+', label: 'Public Repos', helper: 'Live GitHub portfolio' },
    { value: '53+', label: 'TypeScript Projects', helper: 'Primary stack' },
    { value: '14+', label: 'Web/HTML/JS Apps', helper: 'Rapid builds' },
    { value: 'Mar 2026', label: 'Latest Push', helper: 'Actively shipping' },
  ],
  segments: [
    {
      id: 'education',
      emoji: '🎓',
      title: 'Education & Exam Prep',
      count: '15+ apps',
      summary: 'HSC, UPSC, CET-LLB, law prep, constitution and flashcard tools.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'productivity',
      emoji: '📱',
      title: 'Productivity & Life',
      count: '12+ apps',
      summary: 'Trackers, dashboards, finance and self-improvement systems.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'games',
      emoji: '🎮',
      title: 'Games & Interactive',
      count: '10+ projects',
      summary: 'Trivia, pong, racing and browser game experiments.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      id: 'creative-ai',
      emoji: '🧠',
      title: 'AI & Creative Tools',
      count: '10+ tools',
      summary: 'Meme generators, writing aids, media and design utilities.',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
    {
      id: 'media',
      emoji: '🎵',
      title: 'Media & Content',
      count: '8+ apps',
      summary: 'Music, books, group player and content-centric products.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      id: 'platforms',
      emoji: '🛠️',
      title: 'Platform & Utility Labs',
      count: '20+ builds',
      summary: 'Portfolio infrastructure, launchers, PWA and web utility projects.',
      gradient: 'from-slate-600 to-zinc-700',
    },
  ],
  featuredRepos: [
    {
      name: '7K-Portfolio-',
      description: 'Primary flagship portfolio codebase, actively updated and production-ready.',
      language: 'TypeScript',
      repoUrl: 'https://github.com/kunu2009/7K-Portfolio-',
      liveUrl: 'https://7-k-portfolio.vercel.app',
      badge: 'Flagship',
    },
    {
      name: '7k-HSC',
      description: 'Large-scale Maharashtra board learning app covering Science, Commerce, and Arts.',
      language: 'TypeScript',
      repoUrl: 'https://github.com/kunu2009/7k-HSC',
      liveUrl: 'https://7k-hsc.vercel.app',
      badge: 'Education',
    },
    {
      name: '7KLAWPREP',
      description: 'Law entrance prep platform with structured study resources and workflows.',
      language: 'TypeScript',
      repoUrl: 'https://github.com/kunu2009/7KLAWPREP',
      liveUrl: 'https://7-klawprep.vercel.app',
      badge: 'Exam Prep',
    },
    {
      name: '7k-snapnotes',
      description: 'Image-to-flashcard concept for students who want quick revision loops.',
      language: 'TypeScript',
      repoUrl: 'https://github.com/kunu2009/7k-snapnotes',
      liveUrl: 'https://7k-snapnotes.vercel.app',
      badge: 'AI Learning',
    },
    {
      name: '7K-MULTITOOL',
      description: 'Swiss-army style utility suite built for everyday productivity and creator workflows.',
      language: 'TypeScript',
      repoUrl: 'https://github.com/kunu2009/7K-MULTITOOL',
      liveUrl: 'https://7-k-multitool.vercel.app',
      badge: 'Utilities',
    },
    {
      name: '7KLAUNCHER',
      description: 'Android launcher project that connects and organizes the wider 7K app ecosystem.',
      language: 'Kotlin',
      repoUrl: 'https://github.com/kunu2009/7KLAUNCHER',
      badge: 'Android',
    },
  ],
};

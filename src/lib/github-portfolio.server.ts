import 'server-only';

import {
  defaultGithubPortfolioData,
  type GithubPortfolioData,
  type GithubRepo,
  type GithubRepoLanguage,
} from '@/lib/github-portfolio-data';

const GITHUB_USER = 'kunu2009';
const FEATURED_REPO_ORDER = ['7K-Portfolio-', '7k-HSC', '7KLAWPREP', '7k-snapnotes', '7K-MULTITOOL', '7KLAUNCHER'];

type GithubApiRepo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  pushed_at: string;
};

const segmentMeta = {
  education: {
    emoji: '🎓',
    title: 'Education & Exam Prep',
    summary: 'HSC, UPSC, CET-LLB, law prep, constitution and flashcard tools.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  productivity: {
    emoji: '📱',
    title: 'Productivity & Life',
    summary: 'Trackers, dashboards, finance and self-improvement systems.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  games: {
    emoji: '🎮',
    title: 'Games & Interactive',
    summary: 'Trivia, pong, racing and browser game experiments.',
    gradient: 'from-amber-500 to-orange-500',
  },
  'creative-ai': {
    emoji: '🧠',
    title: 'AI & Creative Tools',
    summary: 'Meme generators, writing aids, media and design utilities.',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  media: {
    emoji: '🎵',
    title: 'Media & Content',
    summary: 'Music, books, group player and content-centric products.',
    gradient: 'from-violet-500 to-purple-500',
  },
  platforms: {
    emoji: '🛠️',
    title: 'Platform & Utility Labs',
    summary: 'Portfolio infrastructure, launchers, PWA and web utility projects.',
    gradient: 'from-slate-600 to-zinc-700',
  },
} as const;

type SegmentId = keyof typeof segmentMeta;

function normalizeLanguage(language: string | null): GithubRepoLanguage {
  if (language === 'TypeScript' || language === 'JavaScript' || language === 'HTML' || language === 'Dart' || language === 'Kotlin' || language === 'Python') {
    return language;
  }

  if (!language) return 'TypeScript';
  return 'TypeScript';
}

function classifySegment(repo: GithubApiRepo): SegmentId {
  const text = `${repo.name} ${repo.description ?? ''}`.toLowerCase();

  if (/hsc|upsc|law|exam|study|constitution|cet|prep|notes|itihaas|political/.test(text)) return 'education';
  if (/life|daily|skill|workspace|productivity|money|tracker|finance|polyglot|level/.test(text)) return 'productivity';
  if (/game|pong|racing|trivia|craft/.test(text)) return 'games';
  if (/ai|meme|prompt|writer|background|interior|social/.test(text)) return 'creative-ai';
  if (/music|song|book|media|news|player/.test(text)) return 'media';
  return 'platforms';
}

function buildSegmentCountLabel(count: number): string {
  return `${Math.max(count, 1)}+ ${count === 1 ? 'app' : 'apps'}`;
}

function formatLatestPushDate(iso: string): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
}

function createFeaturedRepo(repo: GithubApiRepo, badge: string): GithubRepo {
  const cleanDescription = repo.description?.trim() || 'Production-ready app from the 7K portfolio ecosystem.';

  return {
    name: repo.name,
    description: cleanDescription,
    language: normalizeLanguage(repo.language),
    repoUrl: repo.html_url,
    liveUrl: repo.homepage || undefined,
    badge,
  };
}

export async function getGithubPortfolioData(): Promise<GithubPortfolioData> {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, {
      next: { revalidate: 60 * 60 * 6 },
      headers: {
        Accept: 'application/vnd.github+json',
      },
    });

    if (!response.ok) {
      return defaultGithubPortfolioData;
    }

    const repos = (await response.json()) as GithubApiRepo[];
    if (!Array.isArray(repos) || repos.length === 0) {
      return defaultGithubPortfolioData;
    }

    const totalRepos = repos.length;
    const typeScriptCount = repos.filter((repo) => repo.language === 'TypeScript').length;
    const webCount = repos.filter((repo) => repo.language === 'HTML' || repo.language === 'JavaScript').length;

    const latestRepoByPush = [...repos].sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())[0];
    const latestPush = latestRepoByPush?.pushed_at ? formatLatestPushDate(latestRepoByPush.pushed_at) : defaultGithubPortfolioData.stats[3].value;

    const segmentCounts: Record<SegmentId, number> = {
      education: 0,
      productivity: 0,
      games: 0,
      'creative-ai': 0,
      media: 0,
      platforms: 0,
    };

    for (const repo of repos) {
      segmentCounts[classifySegment(repo)] += 1;
    }

    const featuredRepos = FEATURED_REPO_ORDER
      .map((name, index) => {
        const repo = repos.find((r) => r.name.toLowerCase() === name.toLowerCase());
        if (!repo) return null;

        const defaultBadges = ['Flagship', 'Education', 'Exam Prep', 'AI Learning', 'Utilities', 'Android'];
        return createFeaturedRepo(repo, defaultBadges[index] || 'Featured');
      })
      .filter((repo): repo is GithubRepo => Boolean(repo));

    const segments: GithubPortfolioData['segments'] = (Object.keys(segmentMeta) as SegmentId[]).map((segmentId) => ({
      id: segmentId,
      emoji: segmentMeta[segmentId].emoji,
      title: segmentMeta[segmentId].title,
      count: buildSegmentCountLabel(segmentCounts[segmentId]),
      summary: segmentMeta[segmentId].summary,
      gradient: segmentMeta[segmentId].gradient,
    }));

    return {
      stats: [
        { value: `${totalRepos}+`, label: 'Public Repos', helper: 'Live GitHub portfolio' },
        { value: `${typeScriptCount}+`, label: 'TypeScript Projects', helper: 'Primary stack' },
        { value: `${webCount}+`, label: 'Web/HTML/JS Apps', helper: 'Rapid builds' },
        { value: latestPush, label: 'Latest Push', helper: 'Actively shipping' },
      ],
      segments,
      featuredRepos: featuredRepos.length > 0 ? featuredRepos : defaultGithubPortfolioData.featuredRepos,
    };
  } catch {
    return defaultGithubPortfolioData;
  }
}

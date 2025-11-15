
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { appsData } from "@/lib/apps-data";
import { 
  Activity,
  BookOpen,
  Briefcase,
  Calendar,
  Camera,
  Code2,
  DollarSign,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  Heart,
  History,
  Image as ImageIcon,
  Instagram,
  Landmark,
  Languages,
  Lightbulb,
  Music,
  PenTool,
  PieChart,
  Pin,
  Presentation,
  Scale,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Wand2
} from "lucide-react";
import Link from "next/link";

// Icon mapping for different apps - each with distinct, relevant icon
const getAppIcon = (appId: string) => {
  const iconMap: { [key: string]: any } = {
    'life': Target,                    // 7K Life - Goals/productivity
    '7kmoney': Wallet,                 // 7K Money - Finance tracking
    'pol': Landmark,                   // Political Science - Government
    'eco': TrendingUp,                 // Economics - Growth/trends
    'his': History,                    // History - Historical
    'kanban': Briefcase,               // Kanban - Project management
    'pins': Pin,                       // Pins - Bookmarks
    'prompt': Wand2,                   // Prompt Library - AI/Magic
    'tools': Code2,                    // Dev Tools - Development
    'english': BookOpen,               // English - Learning
    'eng': Presentation,               // English Pro - Advanced learning
    'polyglot': Languages,             // Polyglot - Multiple languages
    'money': DollarSign,               // Money Manager - Finance
    'fitness': Dumbbell,               // Fitness Pro - Exercise
    'fit': Heart,                      // 7K Fit - Health
    'game': Gamepad2,                  // Games - Gaming
    'student': Users,                  // Student Game Hub - Groups
    'group': Users,                    // Group Game - Party games
    'editor': ImageIcon,               // Photo Editor - Images
    'insta': Instagram,                // Insta Hub - Social
    'relife': Activity,                // ReLife - Life management
    'upsc': Scale,                     // UPSC - Law/exam prep
    'music': Music,                    // Music - Streaming
    'learn': GraduationCap,            // Learning platform
    'creative': Camera,                // Creative tools
    'write': PenTool,                  // Writing tools
    'analytics': PieChart,             // Analytics
    'calendar': Calendar,              // Calendar
    'ai': Lightbulb,                   // AI tools
  };
  return iconMap[appId] || Sparkles;
};

// Get featured apps (first 8 apps from the data)
const featuredApps = appsData.slice(0, 8);

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="container py-24 sm:py-32 opacity-0 animate-fade-in-up section-gradient-dark section-border-glow" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 section-header-glow">The 7K Ecosystem Vision</h2>
        <p className="text-xl text-muted-foreground mb-16">
          An interconnected system of tools, apps, and habits for productivity, personal growth, and creative freedom.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredApps.map((app) => {
          const IconComponent = getAppIcon(app.id);
          return (
            <Link key={app.id} href={app.url} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Card className="text-center h-full border shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-primary">
                <CardHeader className="items-center">
                  <div className="p-4 bg-secondary rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-lg">{app.name}</CardTitle>
                  <CardDescription className="mt-2 text-sm line-clamp-2">{app.tagline}</CardDescription>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-1 bg-primary/10 rounded-full">{app.category}</span>
                    {app.pricing === 'free' && <span className="px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">Free</span>}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default EcosystemSection;

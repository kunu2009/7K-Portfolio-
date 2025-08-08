
import Link from "next/link";
import {
  BookOpen,
  Terminal,
  Gamepad2,
  LayoutTemplate,
  PieChart,
  Palette,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const portfolioStyles = [
  {
    icon: BookOpen,
    title: "The Storyteller",
    description: "A classic, narrative-driven portfolio to learn my story.",
    href: "/story",
    status: "live",
  },
  {
    icon: Terminal,
    title: "The Terminal",
    description: "An interactive, command-line portfolio for tech enthusiasts.",
    href: "/terminal",
    status: "live",
  },
  {
    icon: Gamepad2,
    title: "The Arcade",
    description: "A 2D game-based portfolio. Play through my projects and skills.",
    href: "/arcade",
    status: "live",
  },
  {
    icon: LayoutTemplate,
    title: "The CSS Slider",
    description: "An animated, visually-driven showcase of my best work.",
    href: "/slider",
    status: "live",
  },
  {
    icon: PieChart,
    title: "The Resume Dashboard",
    description: "A data-driven dashboard of my skills, stats, and journey.",
    href: "#",
    status: "soon",
  },
  {
    icon: Palette,
    title: "The Creative Canvas",
    description: "An experimental, art-based portfolio to showcase design skills.",
    href: "#",
    status: "soon",
  },
];

export function PortfolioScreen() {
  return (
    <div className="w-full h-full p-4 overflow-y-auto bg-black/50">
        <div className="text-center text-white pt-8 pb-4">
            <h1 className="font-headline text-3xl font-bold mb-2">
            Portfolioverse
            </h1>
            <p className="text-sm text-white/80">
            Explore my world through different styles.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {portfolioStyles.map((style) => (
            <Link
              key={style.title}
              href={style.href}
              className={
                style.status === "soon" ? "pointer-events-none" : ""
              }
            >
              <Card className="h-full text-left bg-zinc-800/80 hover:bg-zinc-700/80 border-zinc-700 transition-colors duration-300 ease-in-out text-white">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-zinc-900 rounded-lg">
                      <style.icon className="h-5 w-5 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-headline text-lg mb-1 text-white">
                        {style.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 text-xs">
                        {style.description}
                      </CardDescription>
                      {style.status === "soon" && (
                        <p className="text-xs text-amber-400 font-bold mt-2">
                          COMING SOON
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
    </div>
  );
}

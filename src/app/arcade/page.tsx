import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowLeft, Play } from "lucide-react";

export default function ArcadePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center text-center p-8 bg-background">
       <div className="relative">
         <Gamepad2 className="h-28 w-28 text-primary animate-pulse" />
       </div>
       <h1 className="font-headline text-5xl md:text-6xl font-bold mt-8 mb-4">7K Arcade</h1>
       <p className="text-xl text-muted-foreground mb-8 max-w-lg">
         An interactive journey through my digital universe.
       </p>
       <div className="flex flex-col gap-4 items-center">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg animate-pulse">
            <Play className="mr-3 h-5 w-5" />
            Press Start
        </Button>
        <Button asChild variant="outline">
            <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Selection
            </Link>
        </Button>
       </div>
       <p className="text-sm text-muted-foreground mt-16 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            (Full game experience coming soon)
       </p>
    </div>
  )
}

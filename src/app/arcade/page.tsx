"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowLeft, Play, Code, Terminal, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function ArcadePage() {

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center text-center p-8 bg-background overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="relative mb-8">
            <Gamepad2 className="h-28 w-28 text-primary animate-pulse" />
            <Code className="h-10 w-10 text-accent absolute -bottom-2 -right-2 animate-pulse" style={{ animationDelay: '0.2s' }}/>
        </div>

        <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4">
          Code Jumper
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          A simple platformer where you play as a pixel character jumping between floating code blocks. Each successful jump reveals a project or skill. The higher you climb, the more advanced the projects become.
        </p>
        <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-4 p-4 border rounded-lg bg-secondary/50">
                <div className="flex flex-col items-center">
                    <Server className="h-8 w-8 text-primary"/>
                    <span className="text-xs mt-1">HTML/CSS</span>
                </div>
                <div className="text-muted-foreground">→</div>
                 <div className="flex flex-col items-center">
                    <Terminal className="h-8 w-8 text-primary"/>
                    <span className="text-xs mt-1">JavaScript</span>
                </div>
                 <div className="text-muted-foreground">→</div>
                 <div className="flex flex-col items-center">
                    <Code className="h-8 w-8 text-primary"/>
                    <span className="text-xs mt-1">React/Next.js</span>
                </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Miss a jump, and you fall to a "404 Error" screen, but you can restart easily.</p>
        </div>
        <div className="flex flex-col gap-4 items-center mt-12">
            <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg animate-pulse"
            disabled
            >
            <Play className="mr-3 h-5 w-5" />
            Coming Soon
            </Button>
            <Button asChild variant="outline">
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Selection
            </Link>
            </Button>
        </div>
      </motion.div>
    </div>
  );
}

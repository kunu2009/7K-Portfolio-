"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowLeft, Play, UserCircle, Bot, Code } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const characters = [
  {
    name: "The Storyteller",
    icon: UserCircle,
    description: "Navigate the narrative-driven portfolio.",
    avatar: "https://storage.googleapis.com/fantastic-images/b1494953-e59e-4a6f-a63e-4cde8a3f6f96.png"
  },
  {
    name: "The Terminalist",
    icon: Code,
    description: "Explore via an interactive command-line.",
    avatar: "https://placehold.co/128x128.png",
    hint: "matrix code"
  },
  {
    name: "The AI Guide",
    icon: Bot,
    description: "Let an AI shape your journey.",
    avatar: "https://placehold.co/128x128.png",
    hint: "glowing circuit brain"
  },
];

type GameState = "start" | "characterSelect";

export default function ArcadePage() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedChar, setSelectedChar] = useState<string | null>(null);

  const handleStart = () => {
    setGameState("characterSelect");
  };
  
  const handleSelectCharacter = (name: string) => {
    setSelectedChar(name);
    // Future: Start game with this character
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center text-center p-8 bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        {gameState === "start" && (
          <motion.div
            key="start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <Gamepad2 className="h-28 w-28 text-primary animate-pulse" />
            </div>
            <h1 className="font-headline text-5xl md:text-6xl font-bold mt-8 mb-4">
              7K Arcade
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              An interactive journey through my digital universe.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg animate-pulse"
                onClick={handleStart}
              >
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
            <p
              className="text-sm text-muted-foreground mt-16 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              (Full game experience coming soon)
            </p>
          </motion.div>
        )}

        {gameState === "characterSelect" && (
          <motion.div
            key="characterSelect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-headline text-5xl md:text-6xl font-bold mb-8">Choose Your Player</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {characters.map((char) => (
                <div
                  key={char.name}
                  className={cn(
                    "p-6 rounded-lg border-2 flex flex-col items-center gap-4 cursor-pointer transition-all duration-300",
                    selectedChar === char.name
                      ? "border-primary bg-primary/10 shadow-lg scale-105"
                      : "border-border hover:border-primary/50 hover:bg-secondary/50",
                  )}
                  onClick={() => handleSelectCharacter(char.name)}
                >
                  <Avatar className="h-24 w-24 mb-4 border-4 border-secondary">
                     <AvatarImage src={char.avatar} alt={char.name} data-ai-hint={char.hint} />
                     <AvatarFallback><char.icon className="h-10 w-10 text-muted-foreground" /></AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline text-2xl">{char.name}</h3>
                  <p className="text-muted-foreground text-sm">{char.description}</p>
                </div>
              ))}
            </div>
             <div className="flex gap-4">
                 <Button variant="outline" onClick={() => setGameState('start')}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <Button size="lg" disabled={!selectedChar}>
                    Start Game
                </Button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

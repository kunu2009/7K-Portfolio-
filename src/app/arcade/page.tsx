
"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MousePointerClick, RefreshCw } from 'lucide-react';
import { motion, useAnimate } from 'framer-motion';

// --- Game Configuration ---
const BALL_SIZE = 25;
const GRAVITY = 0.4;
const BOUNCE_VELOCITY = 10;
const PLATFORM_HEIGHT = 15;
const PLATFORM_WIDTH = 90;
const MAX_PLATFORMS = 7;

const Ball = ({ scope }: { scope: any }) => (
  <motion.div
    ref={scope}
    className="absolute bg-primary rounded-full z-10"
    style={{
      width: BALL_SIZE,
      height: BALL_SIZE,
      bottom: 0,
      left: `calc(50% - ${BALL_SIZE / 2}px)`,
    }}
  />
);

const Platform = ({ x, y, width, label, onRemove }: { x: number, y: number, width: number, label: string, onRemove: () => void }) => (
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    onClick={onRemove}
    className="absolute bg-secondary/90 rounded-md flex items-center justify-center text-xs font-mono text-secondary-foreground cursor-pointer hover:border-destructive border-2 border-transparent"
    style={{
      left: x,
      bottom: y,
      width: width,
      height: PLATFORM_HEIGHT,
    }}
  >
    {label}
  </motion.div>
);

const Game = () => {
  const [scope, animate] = useAnimate();
  const gameAreaRef = useRef<HTMLDivElement>(null);
  
  const [ballState, setBallState] = useState({ x: 150, y: 300, vx: 2, vy: 0 });
  const [platforms, setPlatforms] = useState<{ id: number; x: number; y: number; label: string }[]>([
    { id: 0, x: 150, y: 280, label: "HTML" },
    { id: 1, x: 250, y: 150, label: "CSS" },
    { id: 2, x: 50, y: 50, label: "JavaScript" },
  ]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gameLoopRef = useRef<number>();
  const nextPlatformId = useRef(platforms.length);
  const platformLabels = ["React", "Next.js", "AI/Genkit", "Python", "UI/UX", "Node.js", "Firebase"];

  const resetGame = useCallback(() => {
    setBallState({ x: 150, y: 300, vx: 2, vy: 0 });
    setPlatforms([
        { id: 0, x: 150, y: 280, label: "HTML" },
        { id: 1, x: 250, y: 150, label: "CSS" },
        { id: 2, x: 50, y: 50, label: "JavaScript" },
    ]);
    setScore(0);
    setGameOver(false);
    animate(scope.current, { x: 150, y: -300 + BALL_SIZE });
  }, [animate, scope]);

  const placePlatform = (e: React.MouseEvent<HTMLDivElement>) => {
    if (platforms.length >= MAX_PLATFORMS || gameOver) return;
    const rect = gameAreaRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = e.clientX - rect.left - (PLATFORM_WIDTH / 2);
    const y = rect.height - (e.clientY - rect.top) - (PLATFORM_HEIGHT / 2);
    
    const newLabel = platformLabels[platforms.length - 3] || "Skill";
    setPlatforms(prev => [...prev, { id: nextPlatformId.current++, x, y, label: newLabel }]);
  };

  const removePlatform = (id: number) => {
    setPlatforms(prev => prev.filter(p => p.id !== id));
  }

  const gameLoop = useCallback(() => {
    if (gameOver) {
        cancelAnimationFrame(gameLoopRef.current!);
        return;
    }

    setBallState(prev => {
        let { x, y, vx, vy } = { ...prev };
        const gameWidth = gameAreaRef.current?.clientWidth || 500;

        // Apply gravity
        vy -= GRAVITY;

        // Update position
        x += vx;
        y += vy;
        
        // Wall collisions
        if (x < 0 || x > gameWidth - BALL_SIZE) {
            vx = -vx;
            x = Math.max(0, Math.min(x, gameWidth - BALL_SIZE));
        }

        // Platform collisions
        for (const p of platforms) {
            const ballBottom = y;
            const ballTop = y + BALL_SIZE;
            const platformTop = p.y + PLATFORM_HEIGHT;
            const platformBottom = p.y;

            if (
                x + BALL_SIZE > p.x && 
                x < p.x + PLATFORM_WIDTH && 
                ballBottom < platformTop && 
                ballBottom > platformBottom && 
                vy < 0
            ) {
                vy = BOUNCE_VELOCITY;
                y = platformTop;

                // Update score
                const newScore = Math.floor(p.y);
                if(newScore > score) {
                    setScore(newScore);
                }
            }
        }

        // Game Over condition
        if (y < 0) {
            setGameOver(true);
        }
        
        // Animate the ball
        animate(scope.current, { x, y: -y + BALL_SIZE }, { duration: 0 });
        
        return { x, y, vx, vy };
    });

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [gameOver, platforms, animate, scope, score]);
  
  useEffect(() => {
    gameLoopRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(gameLoopRef.current!);
  }, [gameLoop]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
        <div className="w-full max-w-lg mb-4 flex justify-between items-center">
             <h1 className="font-headline text-3xl font-bold">Bounce Up!</h1>
             <div className="text-right">
                <p className="font-mono">HEIGHT: {score}</p>
                 <p className="text-xs text-muted-foreground">Platforms: {platforms.length}/{MAX_PLATFORMS}</p>
             </div>
        </div>
        <div 
            ref={gameAreaRef} 
            className="relative w-full max-w-lg h-[600px] bg-secondary/30 rounded-lg overflow-hidden border cursor-crosshair"
            onClick={placePlatform}
        >
            {gameOver ? (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 animate-fade-in-up">
                    <h2 className="text-5xl font-bold text-red-500 font-mono">Game Over</h2>
                    <p className="text-xl text-white">Final Height: {score}</p>
                    <p className="text-muted-foreground mb-4">(The ball fell)</p>
                    <Button onClick={resetGame}>
                        <RefreshCw className="mr-2" />
                        Try Again
                    </Button>
                </div>
            ) : (
                 <p className="absolute top-2 right-2 text-xs text-muted-foreground font-mono z-20 flex items-center gap-1"><MousePointerClick className="w-3 h-3"/> Click to place platforms</p>
            )}
            <Ball scope={scope} />
            {platforms.map(p => (
                <Platform key={p.id} {...p} width={PLATFORM_WIDTH} onRemove={() => removePlatform(p.id)} />
            ))}
        </div>
        <Button asChild variant="link" className="mt-4">
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Selection
            </Link>
        </Button>
    </div>
  )
}

export default function ArcadePage() {
  return (
    <div 
      className="flex min-h-dvh flex-col items-center justify-center text-center p-4 bg-background overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main-background.svg')"}}
    >
      <Game />
    </div>
  );
}

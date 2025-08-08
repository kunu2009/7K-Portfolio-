
"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, RefreshCw } from 'lucide-react';
import { motion, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- Game Configuration ---
const PLAYER_SIZE = 30;
const PLAYER_JUMP_VELOCITY = 12;
const GRAVITY = 0.6;
const PLAYER_HORIZONTAL_SPEED = 4;
const PLATFORM_HEIGHT = 20;
const PLATFORM_WIDTH_RANGE = [80, 150];

const initialPlatforms = [
  { x: 150, y: 550, width: 100, label: "HTML" },
  { x: 300, y: 450, width: 120, label: "CSS" },
  { x: 100, y: 350, width: 90, label: "JavaScript" },
  { x: 250, y: 250, width: 150, label: "React" },
  { x: 120, y: 150, width: 130, label: "Next.js" },
];

const Player = ({ scope }: { scope: any }) => (
  <motion.div
    ref={scope}
    className="absolute bg-primary rounded-sm z-10 flex items-center justify-center"
    style={{
      width: PLAYER_SIZE,
      height: PLAYER_SIZE,
      bottom: 0,
      left: `calc(50% - ${PLAYER_SIZE / 2}px)`,
    }}
  >
      <Code className="w-4 h-4 text-primary-foreground"/>
  </motion.div>
);

const Platform = ({ x, y, width, label }: { x: number, y: number, width: number, label: string }) => (
  <div
    className="absolute bg-secondary/80 rounded-md flex items-center justify-center text-xs font-mono text-secondary-foreground"
    style={{
      left: x,
      bottom: y,
      width: width,
      height: PLATFORM_HEIGHT,
    }}
  >
    {label}
  </div>
);

const Game = () => {
  const [scope, animate] = useAnimate();
  const gameAreaRef = useRef<HTMLDivElement>(null);
  
  const [playerState, setPlayerState] = useState({
      x: 150,
      y: 570, // Start on the first platform
      vx: 0,
      vy: 0,
      onGround: true,
  });
  
  const [keysPressed, setKeysPressed] = useState<Record<string, boolean>>({});
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const gameLoopRef = useRef<number>();

  const resetGame = useCallback(() => {
    setPlayerState({ x: 150, y: 570, vx: 0, vy: 0, onGround: true });
    setScore(0);
    setGameOver(false);
    animate(scope.current, { x: 150, y: -570 + PLAYER_SIZE });
  }, [animate, scope]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => setKeysPressed(prev => ({ ...prev, [e.key.toLowerCase()]: true }));
    const handleKeyUp = (e: KeyboardEvent) => setKeysPressed(prev => ({ ...prev, [e.key.toLowerCase()]: false }));
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const gameLoop = useCallback(() => {
    if (gameOver) {
        cancelAnimationFrame(gameLoopRef.current!);
        return;
    }

    setPlayerState(prev => {
        let { x, y, vx, vy, onGround } = { ...prev };

        // Horizontal movement
        vx = 0;
        if (keysPressed['a'] || keysPressed['arrowleft']) vx = -PLAYER_HORIZONTAL_SPEED;
        if (keysPressed['d'] || keysPressed['arrowright']) vx = PLAYER_HORIZONTAL_SPEED;

        // Apply jump
        if ((keysPressed[' '] || keysPressed['w'] || keysPressed['arrowup']) && onGround) {
            vy = PLAYER_JUMP_VELOCITY;
            onGround = false;
        }

        // Apply gravity
        vy -= GRAVITY;

        // Update position
        x += vx;
        y += vy;
        
        // Collision detection with platforms
        let landed = false;
        for (const p of initialPlatforms) {
            if (x + PLAYER_SIZE > p.x && x < p.x + p.width && y >= p.y + PLATFORM_HEIGHT && y <= p.y + PLATFORM_HEIGHT + 5 && vy <= 0) {
                vy = 0;
                y = p.y + PLATFORM_HEIGHT;
                landed = true;
                
                // Update score - simple version
                const platformIndex = initialPlatforms.indexOf(p);
                if (platformIndex > score) {
                    setScore(platformIndex);
                }
            }
        }
        onGround = landed;

        // Wall collisions
        const gameWidth = gameAreaRef.current?.clientWidth || 500;
        if (x < 0) x = 0;
        if (x > gameWidth - PLAYER_SIZE) x = gameWidth - PLAYER_SIZE;

        // Game Over condition
        if (y < 0) {
            setGameOver(true);
        }

        animate(scope.current, { x, y: -y + PLAYER_SIZE }, { duration: 0 });
        return { x, y, vx, vy, onGround };
    });

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [gameOver, keysPressed, animate, scope, score]);
  
  useEffect(() => {
    gameLoopRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(gameLoopRef.current!);
  }, [gameLoop]);


  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
        <div className="w-full max-w-lg mb-4 flex justify-between items-center">
             <h1 className="font-headline text-3xl font-bold">Code Jumper</h1>
             <div className="text-right">
                <p className="font-mono">SCORE: {score}</p>
                 <p className="text-xs text-muted-foreground">Highest Skill: {initialPlatforms[score]?.label || 'None'}</p>
             </div>
        </div>
        <div ref={gameAreaRef} className="relative w-full max-w-lg h-[600px] bg-secondary/30 rounded-lg overflow-hidden border">
            {gameOver ? (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 animate-fade-in-up">
                    <h2 className="text-5xl font-bold text-red-500 font-mono">404</h2>
                    <p className="text-xl text-white">Project Not Found</p>
                    <p className="text-muted-foreground mb-4">(You fell off)</p>
                    <Button onClick={resetGame}>
                        <RefreshCw className="mr-2" />
                        Restart
                    </Button>
                </div>
            ) : (
                 <p className="absolute top-2 right-2 text-xs text-muted-foreground font-mono z-20">Use A/D or Arrows to move, Space to jump</p>
            )}
            <Player scope={scope} />
            {initialPlatforms.map(p => (
                <Platform key={`${p.x}-${p.y}`} {...p} />
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
    <div className="flex min-h-dvh flex-col items-center justify-center text-center p-4 bg-background overflow-hidden">
      <Game />
    </div>
  );
}

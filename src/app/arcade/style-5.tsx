"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, ArrowUp, ArrowDown, ArrowLeft as ArrowLeftIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

type Position = { x: number; y: number };
type Direction = { x: number; y: number };

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  
  const directionRef = useRef(direction);
  const snakeRef = useRef(snake);

  // Update refs
  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);

  const generateFood = useCallback(() => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (snakeRef.current.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood());
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    setGameStarted(true);
  }, [generateFood]);

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused || !gameStarted) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const newHead = {
        x: head.x + directionRef.current.x,
        y: head.y + directionRef.current.y,
      };

      // Check wall collision
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameOver(true);
        return prevSnake;
      }

      // Check self collision
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
        return newSnake; // Don't remove tail (snake grows)
      }

      // Remove tail
      newSnake.pop();
      return newSnake;
    });
  }, [gameOver, isPaused, gameStarted, food, generateFood]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return;
    
    const interval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(interval);
  }, [moveSnake, gameOver, isPaused, gameStarted]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) {
        if (e.key === ' ' || e.key === 'Enter') {
          resetGame();
        }
        return;
      }

      if (e.key === ' ') {
        setIsPaused(prev => !prev);
        return;
      }

      const key = e.key.toLowerCase();
      setDirection(prev => {
        // Prevent reversing direction
        if (key === 'arrowup' && prev.y === 0) return { x: 0, y: -1 };
        if (key === 'arrowdown' && prev.y === 0) return { x: 0, y: 1 };
        if (key === 'arrowleft' && prev.x === 0) return { x: -1, y: 0 };
        if (key === 'arrowright' && prev.x === 0) return { x: 1, y: 0 };
        
        // WASD controls
        if (key === 'w' && prev.y === 0) return { x: 0, y: -1 };
        if (key === 's' && prev.y === 0) return { x: 0, y: 1 };
        if (key === 'a' && prev.x === 0) return { x: -1, y: 0 };
        if (key === 'd' && prev.x === 0) return { x: 1, y: 0 };
        
        return prev;
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, resetGame]);

  const handleDirectionButton = (newDir: Direction) => {
    if (!gameStarted) {
      resetGame();
      return;
    }
    
    setDirection(prev => {
      // Prevent reversing direction
      if (newDir.y === -1 && prev.y === 0) return newDir; // Up
      if (newDir.y === 1 && prev.y === 0) return newDir; // Down
      if (newDir.x === -1 && prev.x === 0) return newDir; // Left
      if (newDir.x === 1 && prev.x === 0) return newDir; // Right
      return prev;
    });
  };

  return (
    <div 
      className="flex min-h-dvh flex-col items-center justify-center p-4 bg-background overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main-background.svg')"}}
    >
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="font-headline text-4xl font-bold mb-2 text-green-500">🐍 Snake Game</h1>
          <div className="flex justify-center gap-8 text-lg">
            <div>Score: <span className="font-bold text-green-500">{score}</span></div>
            <div>Length: <span className="font-bold text-blue-500">{snake.length}</span></div>
          </div>
        </div>

        {/* Game Board */}
        <div className="relative mx-auto" style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}>
          <div 
            className="relative border-4 border-green-500 rounded-lg overflow-hidden bg-black/80"
            style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
          >
            {/* Grid background */}
            <div className="absolute inset-0 grid opacity-10" 
              style={{ 
                gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
                gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`
              }}
            >
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
                <div key={i} className="border border-green-900"></div>
              ))}
            </div>

            {/* Snake */}
            {snake.map((segment, index) => (
              <motion.div
                key={`${segment.x}-${segment.y}-${index}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`absolute rounded-sm ${
                  index === 0 
                    ? 'bg-gradient-to-br from-green-400 to-green-600 border-2 border-green-300' 
                    : 'bg-gradient-to-br from-green-500 to-green-700'
                }`}
                style={{
                  left: segment.x * CELL_SIZE,
                  top: segment.y * CELL_SIZE,
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                }}
              />
            ))}

            {/* Food */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity 
              }}
              className="absolute bg-red-500 rounded-full border-2 border-red-300"
              style={{
                left: food.x * CELL_SIZE,
                top: food.y * CELL_SIZE,
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
              }}
            />

            {/* Overlays */}
            {!gameStarted && (
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20">
                <h2 className="text-3xl font-bold text-white mb-4">🐍 Snake Game</h2>
                <p className="text-white/80 mb-6 text-center px-4">
                  Use Arrow Keys or WASD to move<br/>
                  Press SPACE to pause
                </p>
                <Button onClick={resetGame} size="lg" className="bg-green-600 hover:bg-green-700">
                  Start Game
                </Button>
              </div>
            )}

            {isPaused && !gameOver && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-yellow-500 mb-2">⏸️ PAUSED</h2>
                  <p className="text-white/80">Press SPACE to continue</p>
                </div>
              </div>
            )}

            {gameOver && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-20"
              >
                <h2 className="text-4xl font-bold text-red-500 mb-2">Game Over! 💀</h2>
                <p className="text-2xl text-white mb-2">Final Score: {score}</p>
                <p className="text-lg text-white/80 mb-6">Length: {snake.length}</p>
                <Button onClick={resetGame} size="lg" className="bg-green-600 hover:bg-green-700">
                  <RefreshCw className="mr-2" />
                  Play Again
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="mt-6 flex flex-col items-center gap-2 md:hidden">
          <Button
            onClick={() => handleDirectionButton({ x: 0, y: -1 })}
            variant="outline"
            size="lg"
            className="w-16 h-16 bg-green-600/20 hover:bg-green-600/30 border-green-500"
          >
            <ArrowUp className="w-6 h-6" />
          </Button>
          <div className="flex gap-2">
            <Button
              onClick={() => handleDirectionButton({ x: -1, y: 0 })}
              variant="outline"
              size="lg"
              className="w-16 h-16 bg-green-600/20 hover:bg-green-600/30 border-green-500"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </Button>
            <Button
              onClick={() => handleDirectionButton({ x: 0, y: 1 })}
              variant="outline"
              size="lg"
              className="w-16 h-16 bg-green-600/20 hover:bg-green-600/30 border-green-500"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
            <Button
              onClick={() => handleDirectionButton({ x: 1, y: 0 })}
              variant="outline"
              size="lg"
              className="w-16 h-16 bg-green-600/20 hover:bg-green-600/30 border-green-500"
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p className="hidden md:block">Arrow Keys / WASD to move • SPACE to pause • Collect 🔴 to grow</p>
          <p className="md:hidden">Tap buttons to move • Collect 🔴 to grow</p>
        </div>
      </div>
    </div>
  );
}

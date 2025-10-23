"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, ArrowLeft, ArrowRight, ArrowDown, RotateCw } from 'lucide-react';
import { motion } from 'framer-motion';

const ROWS = 20;
const COLS = 10;
const CELL_SIZE = 30;
const GAME_SPEED = 1000;

type Cell = number; // 0 = empty, 1-7 = tetromino colors
type Board = Cell[][];
type Tetromino = { shape: number[][]; color: number };
type Position = { x: number; y: number };

const TETROMINOS: Tetromino[] = [
  { shape: [[1, 1, 1, 1]], color: 1 }, // I
  { shape: [[1, 1], [1, 1]], color: 2 }, // O
  { shape: [[0, 1, 0], [1, 1, 1]], color: 3 }, // T
  { shape: [[1, 1, 0], [0, 1, 1]], color: 4 }, // S
  { shape: [[0, 1, 1], [1, 1, 0]], color: 5 }, // Z
  { shape: [[1, 0, 0], [1, 1, 1]], color: 6 }, // L
  { shape: [[0, 0, 1], [1, 1, 1]], color: 7 }, // J
];

const COLORS = [
  'bg-gray-900', // empty
  'bg-cyan-500', // I
  'bg-yellow-500', // O
  'bg-purple-500', // T
  'bg-green-500', // S
  'bg-red-500', // Z
  'bg-orange-500', // L
  'bg-blue-500', // J
];

const createEmptyBoard = (): Board => 
  Array.from({ length: ROWS }, () => Array(COLS).fill(0));

const getRandomTetromino = (): Tetromino => 
  TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];

export default function TetrisGame() {
  const [board, setBoard] = useState<Board>(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<Tetromino>(getRandomTetromino());
  const [currentPos, setCurrentPos] = useState<Position>({ x: 4, y: 0 });
  const [nextPiece, setNextPiece] = useState<Tetromino>(getRandomTetromino());
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const boardRef = useRef(board);
  const pieceRef = useRef(currentPiece);
  const posRef = useRef(currentPos);

  useEffect(() => {
    boardRef.current = board;
    pieceRef.current = currentPiece;
    posRef.current = currentPos;
  }, [board, currentPiece, currentPos]);

  const checkCollision = useCallback((piece: Tetromino, pos: Position, testBoard: Board = boardRef.current): boolean => {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          const newX = pos.x + x;
          const newY = pos.y + y;
          
          if (newX < 0 || newX >= COLS || newY >= ROWS) return true;
          if (newY >= 0 && testBoard[newY][newX]) return true;
        }
      }
    }
    return false;
  }, []);

  const rotatePiece = useCallback((piece: Tetromino): Tetromino => {
    const rotated = piece.shape[0].map((_, i) =>
      piece.shape.map(row => row[i]).reverse()
    );
    return { ...piece, shape: rotated };
  }, []);

  const mergePiece = useCallback((piece: Tetromino, pos: Position, testBoard: Board): Board => {
    const newBoard = testBoard.map(row => [...row]);
    piece.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell && pos.y + y >= 0) {
          newBoard[pos.y + y][pos.x + x] = piece.color;
        }
      });
    });
    return newBoard;
  }, []);

  const clearLines = useCallback((testBoard: Board): { newBoard: Board; linesCleared: number } => {
    let linesCleared = 0;
    const newBoard = testBoard.filter(row => {
      if (row.every(cell => cell !== 0)) {
        linesCleared++;
        return false;
      }
      return true;
    });
    
    while (newBoard.length < ROWS) {
      newBoard.unshift(Array(COLS).fill(0));
    }
    
    return { newBoard, linesCleared };
  }, []);

  const lockPiece = useCallback(() => {
    const mergedBoard = mergePiece(pieceRef.current, posRef.current, boardRef.current);
    const { newBoard, linesCleared } = clearLines(mergedBoard);
    
    setBoard(newBoard);
    setLines(prev => prev + linesCleared);
    
    // Update score
    const points = [0, 40, 100, 300, 1200][linesCleared] * level;
    setScore(prev => prev + points);
    
    // New piece
    const newPiece = nextPiece;
    const newPos = { x: 4, y: 0 };
    
    if (checkCollision(newPiece, newPos, newBoard)) {
      setGameOver(true);
      return;
    }
    
    setCurrentPiece(newPiece);
    setCurrentPos(newPos);
    setNextPiece(getRandomTetromino());
  }, [nextPiece, level, mergePiece, clearLines, checkCollision]);

  const moveDown = useCallback(() => {
    if (gameOver || !gameStarted || isPaused) return;
    
    const newPos = { ...posRef.current, y: posRef.current.y + 1 };
    
    if (checkCollision(pieceRef.current, newPos)) {
      lockPiece();
    } else {
      setCurrentPos(newPos);
    }
  }, [gameOver, gameStarted, isPaused, checkCollision, lockPiece]);

  const moveLeft = useCallback(() => {
    if (gameOver || !gameStarted || isPaused) return;
    const newPos = { ...currentPos, x: currentPos.x - 1 };
    if (!checkCollision(currentPiece, newPos)) {
      setCurrentPos(newPos);
    }
  }, [currentPiece, currentPos, gameOver, gameStarted, isPaused, checkCollision]);

  const moveRight = useCallback(() => {
    if (gameOver || !gameStarted || isPaused) return;
    const newPos = { ...currentPos, x: currentPos.x + 1 };
    if (!checkCollision(currentPiece, newPos)) {
      setCurrentPos(newPos);
    }
  }, [currentPiece, currentPos, gameOver, gameStarted, isPaused, checkCollision]);

  const rotate = useCallback(() => {
    if (gameOver || !gameStarted || isPaused) return;
    const rotated = rotatePiece(currentPiece);
    if (!checkCollision(rotated, currentPos)) {
      setCurrentPiece(rotated);
    }
  }, [currentPiece, currentPos, gameOver, gameStarted, isPaused, rotatePiece, checkCollision]);

  const hardDrop = useCallback(() => {
    if (gameOver || !gameStarted || isPaused) return;
    let newPos = { ...currentPos };
    while (!checkCollision(currentPiece, { ...newPos, y: newPos.y + 1 })) {
      newPos.y++;
    }
    setCurrentPos(newPos);
    setTimeout(() => lockPiece(), 0);
  }, [currentPiece, currentPos, gameOver, gameStarted, isPaused, checkCollision, lockPiece]);

  const resetGame = useCallback(() => {
    setBoard(createEmptyBoard());
    setCurrentPiece(getRandomTetromino());
    setNextPiece(getRandomTetromino());
    setCurrentPos({ x: 4, y: 0 });
    setScore(0);
    setLines(0);
    setLevel(1);
    setGameOver(false);
    setIsPaused(false);
    setGameStarted(true);
  }, []);

  // Update level based on lines
  useEffect(() => {
    setLevel(Math.floor(lines / 10) + 1);
  }, [lines]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return;
    
    const speed = Math.max(100, GAME_SPEED - (level - 1) * 100);
    const interval = setInterval(moveDown, speed);
    
    return () => clearInterval(interval);
  }, [moveDown, gameOver, gameStarted, isPaused, level]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) {
        if (e.key === ' ' || e.key === 'Enter') {
          resetGame();
        }
        return;
      }

      e.preventDefault();
      
      if (e.key === ' ' || e.key === 'p') {
        setIsPaused(prev => !prev);
        return;
      }

      const key = e.key.toLowerCase();
      
      if (key === 'arrowleft' || key === 'a') moveLeft();
      if (key === 'arrowright' || key === 'd') moveRight();
      if (key === 'arrowdown' || key === 's') moveDown();
      if (key === 'arrowup' || key === 'w') rotate();
      if (key === ' ') hardDrop();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, moveLeft, moveRight, moveDown, rotate, hardDrop, resetGame]);

  // Render preview piece
  const renderPreview = () => {
    const previewBoard = mergePiece(currentPiece, currentPos, board);
    return previewBoard;
  };

  return (
    <div 
      className="flex min-h-dvh flex-col items-center justify-center p-4 bg-background overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main-background.svg')"}}
    >
      <div className="w-full max-w-4xl">
        <h1 className="font-headline text-4xl font-bold mb-6 text-center text-blue-500">🎮 Tetris</h1>
        
        <div className="flex gap-6 justify-center items-start flex-wrap">
          {/* Game Board */}
          <div className="relative">
            <div 
              className="border-4 border-blue-500 rounded-lg overflow-hidden bg-black/80"
              style={{ width: COLS * CELL_SIZE, height: ROWS * CELL_SIZE }}
            >
              <div className="grid" style={{
                gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
                gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
              }}>
                {renderPreview().map((row, y) =>
                  row.map((cell, x) => (
                    <div
                      key={`${x}-${y}`}
                      className={`border border-gray-800 ${COLORS[cell]}`}
                      style={{ width: CELL_SIZE, height: CELL_SIZE }}
                    />
                  ))
                )}
              </div>

              {/* Overlays */}
              {!gameStarted && (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20">
                  <h2 className="text-3xl font-bold text-white mb-4">🎮 Tetris</h2>
                  <p className="text-white/80 mb-2 text-center px-4">
                    Arrow Keys / WASD to move<br/>
                    UP / W to rotate<br/>
                    SPACE for hard drop<br/>
                    P to pause
                  </p>
                  <Button onClick={resetGame} size="lg" className="mt-4 bg-blue-600 hover:bg-blue-700">
                    Start Game
                  </Button>
                </div>
              )}

              {isPaused && !gameOver && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-yellow-500 mb-2">⏸️ PAUSED</h2>
                    <p className="text-white/80">Press P or SPACE to continue</p>
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
                  <p className="text-2xl text-white mb-2">Score: {score}</p>
                  <p className="text-lg text-white/80 mb-6">Lines: {lines} • Level: {level}</p>
                  <Button onClick={resetGame} size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <RefreshCw className="mr-2" />
                    Play Again
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Mobile Controls */}
            <div className="mt-4 flex flex-col items-center gap-2 md:hidden">
              <div className="flex gap-2">
                <Button
                  onClick={rotate}
                  variant="outline"
                  size="lg"
                  className="w-16 h-16 bg-blue-600/20 hover:bg-blue-600/30 border-blue-500"
                >
                  <RotateCw className="w-6 h-6" />
                </Button>
                <Button
                  onClick={hardDrop}
                  variant="outline"
                  size="lg"
                  className="w-16 h-16 bg-purple-600/20 hover:bg-purple-600/30 border-purple-500"
                >
                  <ArrowDown className="w-6 h-6" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={moveLeft}
                  variant="outline"
                  size="lg"
                  className="w-16 h-16 bg-blue-600/20 hover:bg-blue-600/30 border-blue-500"
                >
                  <ArrowLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={moveDown}
                  variant="outline"
                  size="lg"
                  className="w-16 h-16 bg-blue-600/20 hover:bg-blue-600/30 border-blue-500"
                >
                  <ArrowDown className="w-6 h-6" />
                </Button>
                <Button
                  onClick={moveRight}
                  variant="outline"
                  size="lg"
                  className="w-16 h-16 bg-blue-600/20 hover:bg-blue-600/30 border-blue-500"
                >
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="flex flex-col gap-4">
            {/* Stats */}
            <div className="bg-black/60 border border-blue-500 rounded-lg p-4 min-w-[200px]">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Score:</span>
                  <span className="font-bold text-white">{score}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Lines:</span>
                  <span className="font-bold text-white">{lines}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Level:</span>
                  <span className="font-bold text-white">{level}</span>
                </div>
              </div>
            </div>

            {/* Next Piece */}
            <div className="bg-black/60 border border-blue-500 rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Next</h3>
              <div className="flex items-center justify-center h-24">
                <div className="grid gap-1">
                  {nextPiece.shape.map((row, y) => (
                    <div key={y} className="flex gap-1">
                      {row.map((cell, x) => (
                        <div
                          key={x}
                          className={`w-6 h-6 rounded ${cell ? COLORS[nextPiece.color] : 'bg-transparent'}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p className="hidden md:block">
            ← → Move • ↑ Rotate • ↓ Soft Drop • SPACE Hard Drop • P Pause
          </p>
          <p className="md:hidden">Tap buttons to play • Clear lines to score</p>
        </div>
      </div>
    </div>
  );
}

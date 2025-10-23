"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Trophy, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Card = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const CARD_EMOJIS = ['🚀', '💻', '🎮', '🎨', '🎵', '⚡', '🌟', '🔥', '💎', '🎯', '🏆', '🎪'];

export default function MemoryMatchGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [time, setTime] = useState(0);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [isChecking, setIsChecking] = useState(false);

  const difficultySettings = {
    easy: { pairs: 6, cols: 4 },
    medium: { pairs: 8, cols: 4 },
    hard: { pairs: 12, cols: 6 },
  };

  const initializeGame = useCallback(() => {
    const { pairs } = difficultySettings[difficulty];
    const selectedEmojis = CARD_EMOJIS.slice(0, pairs);
    const cardPairs = [...selectedEmojis, ...selectedEmojis];
    
    // Shuffle cards
    const shuffled = cardPairs
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
    
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setGameWon(false);
    setTime(0);
    setGameStarted(true);
  }, [difficulty]);

  // Timer
  useEffect(() => {
    if (!gameStarted || gameWon) return;
    
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [gameStarted, gameWon]);

  // Check for matches
  useEffect(() => {
    if (flippedCards.length !== 2 || isChecking) return;
    
    setIsChecking(true);
    const [first, second] = flippedCards;
    const firstCard = cards.find(c => c.id === first);
    const secondCard = cards.find(c => c.id === second);
    
    if (firstCard?.emoji === secondCard?.emoji) {
      // Match found
      setTimeout(() => {
        setCards(prev =>
          prev.map(card =>
            card.id === first || card.id === second
              ? { ...card, isMatched: true }
              : card
          )
        );
        setMatches(prev => prev + 1);
        setFlippedCards([]);
        setIsChecking(false);
      }, 500);
    } else {
      // No match
      setTimeout(() => {
        setCards(prev =>
          prev.map(card =>
            card.id === first || card.id === second
              ? { ...card, isFlipped: false }
              : card
          )
        );
        setFlippedCards([]);
        setIsChecking(false);
      }, 1000);
    }
    
    setMoves(prev => prev + 1);
  }, [flippedCards, cards, isChecking]);

  // Check for win
  useEffect(() => {
    const { pairs } = difficultySettings[difficulty];
    if (gameStarted && matches === pairs) {
      setGameWon(true);
    }
  }, [matches, gameStarted, difficulty]);

  const handleCardClick = (cardId: number) => {
    if (!gameStarted || isChecking) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched || flippedCards.length >= 2) return;
    
    setCards(prev =>
      prev.map(c =>
        c.id === cardId ? { ...c, isFlipped: true } : c
      )
    );
    setFlippedCards(prev => [...prev, cardId]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScore = () => {
    const { pairs } = difficultySettings[difficulty];
    const baseScore = pairs * 100;
    const timeBonus = Math.max(0, 300 - time);
    const moveBonus = Math.max(0, (pairs * 3 - moves) * 10);
    return baseScore + timeBonus + moveBonus;
  };

  return (
    <div 
      className="flex min-h-dvh flex-col items-center justify-center p-4 bg-background overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main-background.svg')"}}
    >
      <div className="w-full max-w-5xl">
        <h1 className="font-headline text-4xl font-bold mb-6 text-center text-purple-500">🧠 Memory Match</h1>
        
        {/* Difficulty Selection */}
        {!gameStarted && !gameWon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-col items-center gap-4"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Select Difficulty</h2>
            <div className="flex gap-4 flex-wrap justify-center">
              <Button
                onClick={() => { setDifficulty('easy'); initializeGame(); }}
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                🟢 Easy (6 pairs)
              </Button>
              <Button
                onClick={() => { setDifficulty('medium'); initializeGame(); }}
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700"
              >
                🟡 Medium (8 pairs)
              </Button>
              <Button
                onClick={() => { setDifficulty('hard'); initializeGame(); }}
                size="lg"
                className="bg-red-600 hover:bg-red-700"
              >
                🔴 Hard (12 pairs)
              </Button>
            </div>
          </motion.div>
        )}

        {gameStarted && (
          <>
            {/* Stats Bar */}
            <div className="mb-6 flex justify-center gap-6 flex-wrap">
              <div className="bg-black/60 border border-purple-500 rounded-lg px-6 py-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-bold text-lg">{formatTime(time)}</span>
                </div>
              </div>
              <div className="bg-black/60 border border-purple-500 rounded-lg px-6 py-3">
                <div className="text-white">
                  <span className="text-white/70">Moves: </span>
                  <span className="font-bold text-lg">{moves}</span>
                </div>
              </div>
              <div className="bg-black/60 border border-purple-500 rounded-lg px-6 py-3">
                <div className="text-white">
                  <span className="text-white/70">Matches: </span>
                  <span className="font-bold text-lg">{matches}/{difficultySettings[difficulty].pairs}</span>
                </div>
              </div>
            </div>

            {/* Game Board */}
            <div 
              className={`grid gap-3 mx-auto mb-6`}
              style={{
                gridTemplateColumns: `repeat(${difficultySettings[difficulty].cols}, minmax(0, 1fr))`,
                maxWidth: `${difficultySettings[difficulty].cols * 100}px`,
              }}
            >
              <AnimatePresence>
                {cards.map((card) => (
                  <motion.div
                    key={card.id}
                    initial={{ scale: 0, rotateY: 0 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
                    whileTap={{ scale: card.isMatched ? 1 : 0.95 }}
                    onClick={() => handleCardClick(card.id)}
                    className={`aspect-square rounded-lg cursor-pointer relative ${
                      card.isMatched ? 'opacity-60' : ''
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center rounded-lg"
                      animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                    >
                      {/* Back of card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg border-2 border-purple-400 flex items-center justify-center">
                        <div className="text-4xl opacity-30">❓</div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center rounded-lg"
                      animate={{ rotateY: card.isFlipped || card.isMatched ? 0 : -180 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                    >
                      {/* Front of card */}
                      <div className={`absolute inset-0 rounded-lg border-2 flex items-center justify-center text-5xl ${
                        card.isMatched 
                          ? 'bg-gradient-to-br from-green-500 to-emerald-600 border-green-400' 
                          : 'bg-gradient-to-br from-blue-500 to-cyan-600 border-blue-400'
                      }`}>
                        {card.emoji}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Reset Button */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => {
                  setGameStarted(false);
                  setCards([]);
                }}
                variant="outline"
                className="border-purple-500 hover:bg-purple-500/20"
              >
                Change Difficulty
              </Button>
              <Button
                onClick={initializeGame}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <RefreshCw className="mr-2" />
                New Game
              </Button>
            </div>
          </>
        )}

        {/* Win Screen */}
        <AnimatePresence>
          {gameWon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 p-4"
            >
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 border-4 border-yellow-400 rounded-2xl p-8 max-w-md w-full text-center">
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.1, 1, 1.1, 1]
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl mb-4"
                >
                  🏆
                </motion.div>
                
                <h2 className="text-4xl font-bold text-yellow-400 mb-4">You Won!</h2>
                
                <div className="space-y-2 mb-6 text-white">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg px-4 py-2">
                    <span>Time:</span>
                    <span className="font-bold">{formatTime(time)}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg px-4 py-2">
                    <span>Moves:</span>
                    <span className="font-bold">{moves}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg px-4 py-2">
                    <span>Difficulty:</span>
                    <span className="font-bold capitalize">{difficulty}</span>
                  </div>
                  <div className="flex justify-between items-center bg-yellow-400/20 border-2 border-yellow-400 rounded-lg px-4 py-2 mt-4">
                    <span className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      Score:
                    </span>
                    <span className="font-bold text-xl text-yellow-400">{getScore()}</span>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={() => {
                      setGameStarted(false);
                      setGameWon(false);
                      setCards([]);
                    }}
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/20"
                  >
                    Change Difficulty
                  </Button>
                  <Button
                    onClick={() => {
                      setGameWon(false);
                      initializeGame();
                    }}
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    <RefreshCw className="mr-2" />
                    Play Again
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        <div className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <p>Click cards to flip them • Find matching pairs • Complete all matches to win!</p>
          <p className="mt-2">
            💡 Tip: Try to remember card locations for better score!
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { MascotType, getMascotConfig } from "./mascot-store";

interface MascotBodyProps {
  mascotType: MascotType;
  mood: string;
  isHovered: boolean;
  isBlinking: boolean;
  eyeOffset: { x: number; y: number };
  isWaving: boolean;
  isDragging: boolean;
  isJumping: boolean;
}

// Cat Mascot Body
const CatBody = ({ isHovered, isBlinking, eyeOffset, isWaving, isDragging }: MascotBodyProps) => {
  const config = getMascotConfig("cat");
  
  return (
    <motion.div className="relative w-20 h-24">
      {/* Cat Head */}
      <motion.div
        className="relative w-16 h-14 mx-auto rounded-[40%] flex flex-col items-center justify-center shadow-2xl border-2 border-white/30"
        style={{ 
          background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
        }}
        animate={{ y: isHovered ? [0, -3, 0] : 0 }}
        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
      >
        {/* Cat Ears */}
        <motion.div
          className="absolute -top-4 -left-1 w-0 h-0"
          style={{
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderBottom: `14px solid ${config.colors.primary}`,
          }}
          animate={isHovered ? { rotate: [-5, 5, -5] } : {}}
          transition={{ duration: 0.3, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-4 -right-1 w-0 h-0"
          style={{
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderBottom: `14px solid ${config.colors.primary}`,
          }}
          animate={isHovered ? { rotate: [5, -5, 5] } : {}}
          transition={{ duration: 0.3, repeat: Infinity }}
        />
        {/* Inner ears */}
        <div className="absolute -top-2.5 -left-0 w-0 h-0"
          style={{
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderBottom: `8px solid #FCD34D`,
          }}
        />
        <div className="absolute -top-2.5 -right-0 w-0 h-0"
          style={{
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderBottom: `8px solid #FCD34D`,
          }}
        />
        
        {/* Face */}
        <div className="flex flex-col items-center gap-1 mt-2">
          {/* Eyes */}
          <div className="flex gap-4">
            <motion.div 
              className="w-3 h-4 bg-gray-900 rounded-full flex items-center justify-start pt-1 overflow-hidden"
              animate={isBlinking ? { scaleY: 0.1 } : { scaleY: 1 }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ x: eyeOffset.x * 0.5, y: eyeOffset.y * 0.3 }}
              />
            </motion.div>
            <motion.div 
              className="w-3 h-4 bg-gray-900 rounded-full flex items-center justify-start pt-1 overflow-hidden"
              animate={isBlinking ? { scaleY: 0.1 } : { scaleY: 1 }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ x: eyeOffset.x * 0.5, y: eyeOffset.y * 0.3 }}
              />
            </motion.div>
          </div>
          
          {/* Nose & Mouth */}
          <div className="flex flex-col items-center">
            <div className="w-2 h-1.5 bg-pink-400 rounded-full" />
            <div className="flex gap-0.5">
              <div className="w-2 h-1 border-b-2 border-gray-800 rounded-br-full" />
              <div className="w-2 h-1 border-b-2 border-gray-800 rounded-bl-full" />
            </div>
          </div>
          
          {/* Whiskers */}
          <div className="absolute left-0 top-1/2 flex flex-col gap-1">
            <div className="w-4 h-0.5 bg-gray-800/50 rounded-full -rotate-6" />
            <div className="w-4 h-0.5 bg-gray-800/50 rounded-full" />
            <div className="w-4 h-0.5 bg-gray-800/50 rounded-full rotate-6" />
          </div>
          <div className="absolute right-0 top-1/2 flex flex-col gap-1">
            <div className="w-4 h-0.5 bg-gray-800/50 rounded-full rotate-6" />
            <div className="w-4 h-0.5 bg-gray-800/50 rounded-full" />
            <div className="w-4 h-0.5 bg-gray-800/50 rounded-full -rotate-6" />
          </div>
        </div>
      </motion.div>
      
      {/* Body */}
      <motion.div
        className="w-12 h-8 mx-auto -mt-2 rounded-b-3xl border-2 border-t-0 border-white/20"
        style={{ background: `linear-gradient(to bottom, ${config.colors.primary}, ${config.colors.secondary})` }}
      />
      
      {/* Tail */}
      <motion.div
        className="absolute -right-4 bottom-4 w-8 h-3 rounded-full origin-left"
        style={{ background: config.colors.primary }}
        animate={{ rotate: isHovered ? [0, 30, -10, 20, 0] : [0, 10, 0] }}
        transition={{ duration: isHovered ? 0.8 : 2, repeat: Infinity }}
      />
      
      {/* Paws */}
      <div className="flex justify-center gap-4 -mt-1">
        <motion.div
          className="w-4 h-3 rounded-full"
          style={{ background: config.colors.primary }}
          animate={isWaving ? { rotate: [-20, 20, -20] } : {}}
          transition={{ duration: 0.3, repeat: isWaving ? Infinity : 0 }}
        />
        <motion.div
          className="w-4 h-3 rounded-full"
          style={{ background: config.colors.primary }}
        />
      </div>
    </motion.div>
  );
};

// Dog Mascot Body
const DogBody = ({ isHovered, isBlinking, eyeOffset, isWaving, isDragging }: MascotBodyProps) => {
  const config = getMascotConfig("dog");
  
  return (
    <motion.div className="relative w-20 h-24">
      {/* Dog Head */}
      <motion.div
        className="relative w-16 h-14 mx-auto rounded-[35%] flex flex-col items-center justify-center shadow-2xl border-2 border-white/30"
        style={{ background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` }}
      >
        {/* Floppy Ears */}
        <motion.div
          className="absolute -top-1 -left-3 w-5 h-8 rounded-full origin-top"
          style={{ background: config.colors.secondary }}
          animate={isHovered ? { rotate: [-10, 10, -10] } : { rotate: -15 }}
          transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0 }}
        />
        <motion.div
          className="absolute -top-1 -right-3 w-5 h-8 rounded-full origin-top"
          style={{ background: config.colors.secondary }}
          animate={isHovered ? { rotate: [10, -10, 10] } : { rotate: 15 }}
          transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0 }}
        />
        
        {/* Eyes */}
        <div className="flex gap-4 mb-1">
          <motion.div 
            className="w-3.5 h-3.5 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden"
            animate={isBlinking ? { scaleY: 0.1 } : { scaleY: 1 }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ x: eyeOffset.x * 0.5, y: eyeOffset.y * 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="w-3.5 h-3.5 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden"
            animate={isBlinking ? { scaleY: 0.1 } : { scaleY: 1 }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ x: eyeOffset.x * 0.5, y: eyeOffset.y * 0.3 }}
            />
          </motion.div>
        </div>
        
        {/* Snout */}
        <div className="w-8 h-5 bg-amber-200 rounded-full flex flex-col items-center justify-center">
          <div className="w-3 h-2 bg-gray-900 rounded-full mb-0.5" />
          <motion.div 
            className="w-4 h-1.5 bg-pink-400 rounded-full"
            animate={isHovered ? { scaleX: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      {/* Body */}
      <motion.div
        className="w-12 h-8 mx-auto -mt-2 rounded-b-3xl border-2 border-t-0 border-white/20"
        style={{ background: `linear-gradient(to bottom, ${config.colors.primary}, ${config.colors.secondary})` }}
      >
        {/* Collar */}
        <div className="w-full h-2 bg-red-500 rounded-full mt-1 flex items-center justify-center">
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
        </div>
      </motion.div>
      
      {/* Tail */}
      <motion.div
        className="absolute -right-3 bottom-6 w-6 h-3 rounded-full origin-left"
        style={{ background: config.colors.primary }}
        animate={{ rotate: [0, 30, 0, 30, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      />
      
      {/* Paws */}
      <div className="flex justify-center gap-4 -mt-1">
        <motion.div
          className="w-4 h-4 rounded-full"
          style={{ background: config.colors.primary }}
          animate={isWaving ? { y: [-5, 0, -5] } : {}}
          transition={{ duration: 0.3, repeat: isWaving ? Infinity : 0 }}
        />
        <div className="w-4 h-4 rounded-full" style={{ background: config.colors.primary }} />
      </div>
    </motion.div>
  );
};

// Panda Mascot Body
const PandaBody = ({ isHovered, isBlinking, eyeOffset, isWaving }: MascotBodyProps) => {
  return (
    <motion.div className="relative w-20 h-24">
      {/* Panda Head */}
      <motion.div
        className="relative w-16 h-14 mx-auto rounded-full bg-white flex flex-col items-center justify-center shadow-2xl border-2 border-gray-200"
      >
        {/* Ears */}
        <div className="absolute -top-2 -left-1 w-5 h-5 rounded-full bg-gray-900" />
        <div className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-gray-900" />
        
        {/* Eye patches */}
        <div className="flex gap-2 mb-1">
          <motion.div 
            className="w-5 h-5 bg-gray-900 rounded-[40%] flex items-center justify-center -rotate-12"
            animate={isBlinking ? { scaleY: 0.3 } : {}}
          >
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ x: eyeOffset.x * 0.3, y: eyeOffset.y * 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="w-5 h-5 bg-gray-900 rounded-[40%] flex items-center justify-center rotate-12"
            animate={isBlinking ? { scaleY: 0.3 } : {}}
          >
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ x: eyeOffset.x * 0.3, y: eyeOffset.y * 0.3 }}
            />
          </motion.div>
        </div>
        
        {/* Nose */}
        <div className="w-3 h-2 bg-gray-900 rounded-full" />
        <motion.div 
          className="w-2 h-1 bg-gray-900 rounded-full mt-0.5"
          animate={isHovered ? { scaleX: [1, 1.5, 1] } : {}}
        />
      </motion.div>
      
      {/* Body */}
      <motion.div className="w-14 h-10 mx-auto -mt-2 rounded-b-3xl bg-white border-2 border-t-0 border-gray-200">
        {/* Belly */}
        <div className="w-8 h-6 mx-auto mt-1 rounded-full bg-gray-100" />
      </motion.div>
      
      {/* Arms */}
      <motion.div
        className="absolute left-0 top-1/2 w-4 h-6 bg-gray-900 rounded-full"
        animate={isWaving ? { rotate: [-30, 30, -30] } : {}}
        transition={{ duration: 0.5, repeat: isWaving ? Infinity : 0 }}
      />
      <div className="absolute right-0 top-1/2 w-4 h-6 bg-gray-900 rounded-full" />
      
      {/* Feet */}
      <div className="flex justify-center gap-3 -mt-1">
        <div className="w-5 h-4 bg-gray-900 rounded-full" />
        <div className="w-5 h-4 bg-gray-900 rounded-full" />
      </div>
    </motion.div>
  );
};

// Fox Mascot Body
const FoxBody = ({ isHovered, isBlinking, eyeOffset, isWaving }: MascotBodyProps) => {
  const config = getMascotConfig("fox");
  
  return (
    <motion.div className="relative w-20 h-24">
      {/* Fox Head */}
      <motion.div
        className="relative w-16 h-12 mx-auto flex flex-col items-center justify-center shadow-2xl"
        style={{ 
          background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
          borderRadius: "40% 40% 50% 50%",
        }}
      >
        {/* Pointy Ears */}
        <div className="absolute -top-4 -left-0 w-0 h-0"
          style={{
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: `16px solid ${config.colors.primary}`,
          }}
        />
        <div className="absolute -top-4 -right-0 w-0 h-0"
          style={{
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: `16px solid ${config.colors.primary}`,
          }}
        />
        {/* Inner ears */}
        <div className="absolute -top-2 left-1 w-0 h-0"
          style={{
            borderLeft: "3px solid transparent",
            borderRight: "3px solid transparent",
            borderBottom: "8px solid #1F2937",
          }}
        />
        <div className="absolute -top-2 right-1 w-0 h-0"
          style={{
            borderLeft: "3px solid transparent",
            borderRight: "3px solid transparent",
            borderBottom: "8px solid #1F2937",
          }}
        />
        
        {/* White face markings */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-8 bg-white rounded-t-full" />
        
        {/* Eyes */}
        <div className="flex gap-4 relative z-10 mb-1">
          <motion.div 
            className="w-2.5 h-3 bg-gray-900 rounded-full overflow-hidden"
            style={{ borderRadius: "40%" }}
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-1 h-1 bg-white rounded-full mt-0.5 ml-0.5"
              animate={{ x: eyeOffset.x * 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="w-2.5 h-3 bg-gray-900 rounded-full overflow-hidden"
            style={{ borderRadius: "40%" }}
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-1 h-1 bg-white rounded-full mt-0.5 ml-0.5"
              animate={{ x: eyeOffset.x * 0.3 }}
            />
          </motion.div>
        </div>
        
        {/* Nose */}
        <div className="w-2 h-1.5 bg-gray-900 rounded-full relative z-10" />
      </motion.div>
      
      {/* Body */}
      <motion.div
        className="w-12 h-8 mx-auto -mt-1 rounded-b-3xl border-2 border-t-0 border-white/20"
        style={{ background: `linear-gradient(to bottom, ${config.colors.secondary}, ${config.colors.primary})` }}
      >
        <div className="w-6 h-4 mx-auto mt-1 bg-white rounded-full" />
      </motion.div>
      
      {/* Fluffy Tail */}
      <motion.div
        className="absolute -right-5 bottom-4 w-10 h-6 rounded-full origin-left"
        style={{ background: `linear-gradient(to right, ${config.colors.primary}, ${config.colors.accent})` }}
        animate={{ rotate: isHovered ? [0, 20, -10, 15, 0] : [0, 5, 0] }}
        transition={{ duration: isHovered ? 0.6 : 2, repeat: Infinity }}
      />
      
      {/* Paws */}
      <div className="flex justify-center gap-4 -mt-1">
        <motion.div
          className="w-3 h-3 bg-gray-900 rounded-full"
          animate={isWaving ? { y: [-3, 0, -3] } : {}}
          transition={{ duration: 0.3, repeat: isWaving ? Infinity : 0 }}
        />
        <div className="w-3 h-3 bg-gray-900 rounded-full" />
      </div>
    </motion.div>
  );
};

// Alien Mascot Body
const AlienBody = ({ isHovered, isBlinking, eyeOffset, isWaving }: MascotBodyProps) => {
  const config = getMascotConfig("alien");
  
  return (
    <motion.div className="relative w-20 h-24">
      {/* Alien Head */}
      <motion.div
        className="relative w-14 h-16 mx-auto rounded-[50%_50%_45%_45%] flex flex-col items-center justify-center shadow-2xl border-2 border-white/30"
        style={{ background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` }}
        animate={isHovered ? { y: [0, -5, 0] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {/* Antennae */}
        <motion.div className="absolute -top-4 left-3 flex flex-col items-center"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className="w-0.5 h-4 bg-green-400" />
          <motion.div 
            className="w-2 h-2 rounded-full bg-green-300"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.div>
        <motion.div className="absolute -top-4 right-3 flex flex-col items-center"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        >
          <div className="w-0.5 h-4 bg-green-400" />
          <motion.div 
            className="w-2 h-2 rounded-full bg-green-300"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
          />
        </motion.div>
        
        {/* Big Eyes */}
        <div className="flex gap-1 mb-2">
          <motion.div 
            className="w-5 h-7 bg-gray-900 rounded-[50%] flex items-center justify-center overflow-hidden border-2 border-white/50"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ x: eyeOffset.x * 0.5, y: eyeOffset.y * 0.5 }}
            />
          </motion.div>
          <motion.div 
            className="w-5 h-7 bg-gray-900 rounded-[50%] flex items-center justify-center overflow-hidden border-2 border-white/50"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ x: eyeOffset.x * 0.5, y: eyeOffset.y * 0.5 }}
            />
          </motion.div>
        </div>
        
        {/* Small Mouth */}
        <motion.div 
          className="w-3 h-1.5 bg-gray-900 rounded-full"
          animate={isHovered ? { scaleX: [1, 1.5, 1] } : {}}
        />
      </motion.div>
      
      {/* Body */}
      <motion.div
        className="w-10 h-8 mx-auto -mt-2 rounded-b-2xl border-2 border-t-0 border-white/20"
        style={{ background: `linear-gradient(to bottom, ${config.colors.secondary}, ${config.colors.primary})` }}
      />
      
      {/* Arms */}
      <motion.div
        className="absolute left-1 top-1/2 w-6 h-2 rounded-full origin-right"
        style={{ background: config.colors.secondary }}
        animate={isWaving ? { rotate: [-20, 40, -20] } : {}}
        transition={{ duration: 0.5, repeat: isWaving ? Infinity : 0 }}
      />
      <div className="absolute right-1 top-1/2 w-6 h-2 rounded-full" style={{ background: config.colors.secondary }} />
      
      {/* Feet */}
      <div className="flex justify-center gap-3 -mt-1">
        <div className="w-4 h-2 bg-green-400 rounded-full" />
        <div className="w-4 h-2 bg-green-400 rounded-full" />
      </div>
    </motion.div>
  );
};

// Ghost Mascot Body
const GhostBody = ({ isHovered, isBlinking, eyeOffset, isWaving }: MascotBodyProps) => {
  return (
    <motion.div 
      className="relative w-20 h-24"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Ghost Body */}
      <motion.div
        className="relative w-16 h-20 mx-auto bg-gradient-to-b from-white to-gray-100 rounded-t-full shadow-2xl border-2 border-gray-200 flex flex-col items-center pt-4"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 90% 100%, 70% 85%, 50% 100%, 30% 85%, 10% 100%, 0% 85%)",
        }}
      >
        {/* Eyes */}
        <div className="flex gap-3 mb-2">
          <motion.div 
            className="w-4 h-5 bg-gray-900 rounded-full flex items-end justify-center pb-1 overflow-hidden"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ x: eyeOffset.x * 0.5, y: eyeOffset.y * 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="w-4 h-5 bg-gray-900 rounded-full flex items-end justify-center pb-1 overflow-hidden"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ x: eyeOffset.x * 0.5, y: eyeOffset.y * 0.3 }}
            />
          </motion.div>
        </div>
        
        {/* Mouth */}
        <motion.div 
          className="w-4 h-3 bg-gray-900 rounded-full"
          animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        />
        
        {/* Blush */}
        <div className="absolute top-8 left-2 w-2 h-1 bg-pink-200 rounded-full opacity-60" />
        <div className="absolute top-8 right-2 w-2 h-1 bg-pink-200 rounded-full opacity-60" />
      </motion.div>
      
      {/* Waving arm */}
      {isWaving && (
        <motion.div
          className="absolute right-0 top-1/3 text-lg"
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        >
          👋
        </motion.div>
      )}
    </motion.div>
  );
};

// Bunny Mascot Body
const BunnyBody = ({ isHovered, isBlinking, eyeOffset, isWaving, isJumping }: MascotBodyProps) => {
  const config = getMascotConfig("bunny");
  
  return (
    <motion.div 
      className="relative w-20 h-24"
      animate={isJumping ? { y: [0, -15, 0] } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Long Ears */}
      <motion.div
        className="absolute -top-6 left-4 w-4 h-10 rounded-full border-2 border-white/30"
        style={{ background: `linear-gradient(to bottom, ${config.colors.primary}, ${config.colors.secondary})` }}
        animate={isHovered ? { rotate: [-10, 10, -10] } : {}}
        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
      >
        <div className="w-2 h-6 bg-pink-200 rounded-full mx-auto mt-2" />
      </motion.div>
      <motion.div
        className="absolute -top-6 right-4 w-4 h-10 rounded-full border-2 border-white/30"
        style={{ background: `linear-gradient(to bottom, ${config.colors.primary}, ${config.colors.secondary})` }}
        animate={isHovered ? { rotate: [10, -10, 10] } : {}}
        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, delay: 0.1 }}
      >
        <div className="w-2 h-6 bg-pink-200 rounded-full mx-auto mt-2" />
      </motion.div>
      
      {/* Head */}
      <motion.div
        className="relative w-14 h-12 mx-auto mt-4 rounded-full flex flex-col items-center justify-center shadow-2xl border-2 border-white/30"
        style={{ background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` }}
      >
        {/* Eyes */}
        <div className="flex gap-3 mb-1">
          <motion.div 
            className="w-3 h-4 bg-gray-900 rounded-full overflow-hidden"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full mt-1 ml-0.5"
              animate={{ x: eyeOffset.x * 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="w-3 h-4 bg-gray-900 rounded-full overflow-hidden"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full mt-1 ml-0.5"
              animate={{ x: eyeOffset.x * 0.3 }}
            />
          </motion.div>
        </div>
        
        {/* Nose & Mouth */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-2 h-1.5 bg-pink-400 rounded-full"
            animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
          />
          <div className="w-3 h-1 flex">
            <div className="w-1.5 h-1 border-b border-gray-800 rounded-bl-full" />
            <div className="w-1.5 h-1 border-b border-gray-800 rounded-br-full" />
          </div>
        </div>
        
        {/* Cheeks */}
        <div className="absolute left-1 top-1/2 w-2 h-1.5 bg-pink-200 rounded-full opacity-60" />
        <div className="absolute right-1 top-1/2 w-2 h-1.5 bg-pink-200 rounded-full opacity-60" />
      </motion.div>
      
      {/* Body */}
      <motion.div
        className="w-10 h-8 mx-auto -mt-1 rounded-full border-2 border-white/20"
        style={{ background: `linear-gradient(to bottom, ${config.colors.secondary}, ${config.colors.primary})` }}
      />
      
      {/* Paws */}
      <div className="flex justify-center gap-2 -mt-1">
        <motion.div
          className="w-4 h-3 rounded-full"
          style={{ background: config.colors.primary }}
          animate={isWaving ? { y: [-3, 0, -3] } : {}}
          transition={{ duration: 0.2, repeat: isWaving ? Infinity : 0 }}
        />
        <div className="w-4 h-3 rounded-full" style={{ background: config.colors.primary }} />
      </div>
      
      {/* Tail */}
      <motion.div
        className="absolute -right-1 bottom-6 w-4 h-4 bg-white rounded-full border border-gray-200"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </motion.div>
  );
};

// Owl Mascot Body
const OwlBody = ({ isHovered, isBlinking, eyeOffset, isWaving }: MascotBodyProps) => {
  const config = getMascotConfig("owl");
  
  return (
    <motion.div className="relative w-20 h-24">
      {/* Owl Body (combined head+body) */}
      <motion.div
        className="relative w-16 h-20 mx-auto rounded-[45%_45%_40%_40%] flex flex-col items-center pt-3 shadow-2xl border-2 border-white/30"
        style={{ background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` }}
      >
        {/* Ear tufts */}
        <div className="absolute -top-2 left-2 w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: `10px solid ${config.colors.primary}`,
          }}
        />
        <div className="absolute -top-2 right-2 w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: `10px solid ${config.colors.primary}`,
          }}
        />
        
        {/* Big Eyes */}
        <div className="flex gap-1 mb-1">
          <motion.div 
            className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-600"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-3 h-3 bg-gray-900 rounded-full"
              animate={{ x: eyeOffset.x * 0.3, y: eyeOffset.y * 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-600"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-3 h-3 bg-gray-900 rounded-full"
              animate={{ x: eyeOffset.x * 0.3, y: eyeOffset.y * 0.3 }}
            />
          </motion.div>
        </div>
        
        {/* Beak */}
        <div className="w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "8px solid #F59E0B",
          }}
        />
        
        {/* Belly pattern */}
        <div className="w-8 h-6 mt-1 rounded-full bg-amber-100 flex flex-col items-center pt-1">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-amber-300 rounded-full" />
            <div className="w-1 h-1 bg-amber-300 rounded-full" />
            <div className="w-1 h-1 bg-amber-300 rounded-full" />
          </div>
          <div className="flex gap-1 mt-0.5">
            <div className="w-1 h-1 bg-amber-300 rounded-full" />
            <div className="w-1 h-1 bg-amber-300 rounded-full" />
          </div>
        </div>
      </motion.div>
      
      {/* Wings */}
      <motion.div
        className="absolute left-0 top-1/3 w-4 h-10 rounded-full origin-right"
        style={{ background: config.colors.secondary }}
        animate={isWaving ? { rotate: [-20, 20, -20] } : { rotate: 0 }}
        transition={{ duration: 0.4, repeat: isWaving ? Infinity : 0 }}
      />
      <div className="absolute right-0 top-1/3 w-4 h-10 rounded-full" style={{ background: config.colors.secondary }} />
      
      {/* Feet */}
      <div className="flex justify-center gap-2 -mt-1">
        <div className="flex">
          <div className="w-1.5 h-2 bg-amber-500 rounded-full" />
          <div className="w-1.5 h-2 bg-amber-500 rounded-full" />
          <div className="w-1.5 h-2 bg-amber-500 rounded-full" />
        </div>
        <div className="flex">
          <div className="w-1.5 h-2 bg-amber-500 rounded-full" />
          <div className="w-1.5 h-2 bg-amber-500 rounded-full" />
          <div className="w-1.5 h-2 bg-amber-500 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

// Dragon Mascot Body
const DragonBody = ({ isHovered, isBlinking, eyeOffset, isWaving }: MascotBodyProps) => {
  const config = getMascotConfig("dragon");
  
  return (
    <motion.div className="relative w-20 h-24">
      {/* Dragon Head */}
      <motion.div
        className="relative w-14 h-12 mx-auto rounded-[40%] flex flex-col items-center justify-center shadow-2xl border-2 border-white/30"
        style={{ background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` }}
      >
        {/* Horns */}
        <motion.div
          className="absolute -top-3 left-1 w-2 h-5 rounded-t-full origin-bottom"
          style={{ background: `linear-gradient(to top, ${config.colors.primary}, ${config.colors.accent})` }}
          animate={isHovered ? { rotate: [-5, 5, -5] } : {}}
        />
        <motion.div
          className="absolute -top-3 right-1 w-2 h-5 rounded-t-full origin-bottom"
          style={{ background: `linear-gradient(to top, ${config.colors.primary}, ${config.colors.accent})` }}
          animate={isHovered ? { rotate: [5, -5, 5] } : {}}
        />
        
        {/* Eyes */}
        <div className="flex gap-3 mb-1">
          <motion.div 
            className="w-3 h-4 bg-yellow-400 rounded-[30%] flex items-center justify-center overflow-hidden"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-1 h-3 bg-gray-900 rounded-full"
              animate={{ x: eyeOffset.x * 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="w-3 h-4 bg-yellow-400 rounded-[30%] flex items-center justify-center overflow-hidden"
            animate={isBlinking ? { scaleY: 0.1 } : {}}
          >
            <motion.div 
              className="w-1 h-3 bg-gray-900 rounded-full"
              animate={{ x: eyeOffset.x * 0.3 }}
            />
          </motion.div>
        </div>
        
        {/* Snout */}
        <div className="w-6 h-3 bg-red-400 rounded-full flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-gray-900 rounded-full" />
          <div className="w-1 h-1 bg-gray-900 rounded-full" />
        </div>
        
        {/* Smoke from nostrils */}
        {isHovered && (
          <>
            <motion.div
              className="absolute bottom-2 left-4 w-1 h-1 bg-gray-400 rounded-full"
              animate={{ y: [-5, -15], opacity: [0.8, 0], scale: [1, 2] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-2 right-4 w-1 h-1 bg-gray-400 rounded-full"
              animate={{ y: [-5, -15], opacity: [0.8, 0], scale: [1, 2] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            />
          </>
        )}
      </motion.div>
      
      {/* Body */}
      <motion.div
        className="w-12 h-8 mx-auto -mt-1 rounded-b-2xl border-2 border-t-0 border-white/20"
        style={{ background: `linear-gradient(to bottom, ${config.colors.secondary}, ${config.colors.primary})` }}
      >
        {/* Belly scales */}
        <div className="w-6 h-4 mx-auto mt-1 bg-yellow-200 rounded-full" />
      </motion.div>
      
      {/* Wings */}
      <motion.div
        className="absolute -left-4 top-1/3 w-8 h-6 origin-right"
        style={{ 
          background: `linear-gradient(to left, ${config.colors.primary}, transparent)`,
          clipPath: "polygon(100% 0%, 100% 100%, 0% 50%)",
        }}
        animate={isWaving ? { rotate: [-30, 10, -30] } : { rotate: -10 }}
        transition={{ duration: 0.5, repeat: isWaving ? Infinity : 0 }}
      />
      <motion.div
        className="absolute -right-4 top-1/3 w-8 h-6 origin-left"
        style={{ 
          background: `linear-gradient(to right, ${config.colors.primary}, transparent)`,
          clipPath: "polygon(0% 0%, 0% 100%, 100% 50%)",
        }}
        animate={isWaving ? { rotate: [30, -10, 30] } : { rotate: 10 }}
        transition={{ duration: 0.5, repeat: isWaving ? Infinity : 0, delay: 0.1 }}
      />
      
      {/* Tail */}
      <motion.div
        className="absolute -right-6 bottom-4 flex items-center"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="w-4 h-2 rounded-full" style={{ background: config.colors.primary }} />
        <div className="w-3 h-2 rounded-full" style={{ background: config.colors.secondary }} />
        <div className="w-0 h-0"
          style={{
            borderTop: "4px solid transparent",
            borderBottom: "4px solid transparent",
            borderLeft: `6px solid ${config.colors.accent}`,
          }}
        />
      </motion.div>
      
      {/* Feet */}
      <div className="flex justify-center gap-3 -mt-1">
        <div className="w-4 h-3 rounded-full" style={{ background: config.colors.primary }} />
        <div className="w-4 h-3 rounded-full" style={{ background: config.colors.primary }} />
      </div>
    </motion.div>
  );
};

// Main component that renders the appropriate mascot
export function MascotBody(props: MascotBodyProps) {
  switch (props.mascotType) {
    case "cat":
      return <CatBody {...props} />;
    case "dog":
      return <DogBody {...props} />;
    case "panda":
      return <PandaBody {...props} />;
    case "fox":
      return <FoxBody {...props} />;
    case "alien":
      return <AlienBody {...props} />;
    case "ghost":
      return <GhostBody {...props} />;
    case "bunny":
      return <BunnyBody {...props} />;
    case "owl":
      return <OwlBody {...props} />;
    case "dragon":
      return <DragonBody {...props} />;
    default:
      return null; // Robot uses its own custom rendering
  }
}

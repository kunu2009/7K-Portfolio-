
"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Menu, MoveDown, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
    {
        id: "life-app",
        title: "7K Life",
        description: "A core application for holistic life management and productivity. A central hub for tasks, goals, and personal knowledge, designed to amplify focus and eliminate friction.",
        image: "https://storage.googleapis.com/pixystudio-images/08f731a5-82c5-4424-a74e-5e3e3b3c378b.png",
        imageHint: "futuristic person red jacket",
    },
    {
        id: "law-prep",
        title: "7KLawPrep",
        description: "Web-based utilities and resources for law aspirants, featuring mock tests, performance analytics, and specialized tools for competitive entrance exam preparation.",
        image: "https://storage.googleapis.com/pixystudio-images/830c279c-72e7-4e92-9571-5f2105156a59.png",
        imageHint: "black glove pointing",
    },
    {
        id: "stan-ai",
        title: "Stan AI",
        description: "An AI running on Android to provide assistance on the go, integrated across the 7K ecosystem to automate tasks and provide contextual information.",
        image: "https://storage.googleapis.com/pixystudio-images/7f6b95d7-8d00-4740-9b37-25e22756d1b7.png",
        imageHint: "abstract 3d render",
    },
];

const Header = () => (
    <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-0 left-0 right-0 z-20 p-4 md:p-8"
    >
        <div className="flex justify-between items-center">
             <Link href="/" className="font-bold text-lg tracking-wider hover:text-red-500 transition-colors">+1</Link>
             <div className="hidden md:flex gap-8 text-sm font-medium">
                 <Link href="/story#projects" className="hover:text-red-500 transition-colors">PROJECTS</Link>
                 <Link href="#" className="hover:text-red-500 transition-colors">SHOP</Link>
                 <Link href="#" className="hover:text-red-500 transition-colors">NEW ARRIVALS ▾</Link>
             </div>
            <Button variant="ghost" size="icon" className="hover:text-red-500 transition-colors">
                <Menu />
            </Button>
        </div>
    </motion.header>
)

const Footer = ({ onNext }: { onNext: () => void }) => (
     <motion.footer 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-0 right-0 z-20 p-4 md:p-8"
    >
        <Button variant="ghost" size="icon" className="w-16 h-16 rounded-full bg-red-500 text-white hover:bg-red-600 transform hover:scale-110 transition-transform" onClick={onNext}>
            <MoveDown />
        </Button>
    </motion.footer>
)

const SlideCounter = ({ current, total }: { current: number; total: number }) => (
    <motion.div 
         initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-1/2 left-4 md:left-8 z-20 -translate-y-1/2 flex items-center gap-4 text-sm font-medium [writing-mode:vertical-lr]"
    >
        <span className="text-foreground">{`0${current + 1}`}</span>
        <div className="w-px h-16 bg-muted-foreground/50"></div>
        <span className="text-muted-foreground">{`0${total}`}</span>
    </motion.div>
)

const SideInfo = () => (
     <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hidden md:flex absolute top-1/2 right-8 z-20 -translate-y-1/2 items-center gap-4 text-xs font-medium [writing-mode:vertical-lr] text-muted-foreground tracking-widest"
    >
        <span>X-LAB MATERIALS OF CREATION</span>
    </motion.div>
)

export default function SliderPage() {
    const [[page, direction], setPage] = useState([0, 0]);
    const projectIndex = ((page % projects.length) + projects.length) % projects.length;

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const currentProject = projects[projectIndex];

    const variants = {
        enter: (direction: number) => ({
            y: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            y: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            y: direction < 0 ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.5,
                ease: 'easeOut'
            }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    }
    
    const imageVariants = {
        initial: { scale: 1.2, opacity: 0 },
        animate: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.95]
            }
        },
        exit: { scale: 1.1, opacity: 0, transition: { duration: 0.4 } }
    }


    return (
        <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-white text-black font-sans">
            <Header />

            <main className="relative w-full h-full flex items-center justify-center">
                 <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            y: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.3 },
                        }}
                        className="absolute w-full h-full"
                    >
                         <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col justify-between p-8 md:p-16">
                                <motion.div variants={textVariants} initial="initial" animate="animate" exit="exit" className="max-w-sm">
                                    <p className="text-sm font-medium text-muted-foreground mb-1">X/LABS</p>
                                    <p className="text-xs text-muted-foreground">
                                       {currentProject.description}
                                    </p>
                                </motion.div>
                                <motion.div variants={textVariants} initial="initial" animate="animate" exit="exit" className="relative">
                                     <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">
                                        {currentProject.title}.
                                    </h1>
                                    <motion.div initial={{rotate: -90, opacity: 0}} animate={{rotate: 0, opacity: 1}} transition={{delay: 0.8, duration: 0.5}}>
                                      <Menu className="absolute left-1 bottom-full mb-4 w-12 h-12" />
                                    </motion.div>
                                </motion.div>
                            </div>
                            <div className="relative bg-red-500 overflow-hidden">
                                <motion.div variants={imageVariants} initial="initial" animate="animate" exit="exit" className="w-full h-full">
                                    <Image 
                                        src={currentProject.image} 
                                        alt={currentProject.title} 
                                        layout="fill" 
                                        objectFit="cover" 
                                        objectPosition="center"
                                        data-ai-hint={currentProject.imageHint}
                                        className="transition-transform duration-500 group-hover:scale-105"
                                        priority
                                    />
                                </motion.div>
                                <div className="absolute bottom-0 left-0 p-4 flex gap-2">
                                     <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                         <Button variant="outline" size="icon" onClick={() => paginate(-1)} className="bg-black text-white rounded-none w-12 h-12 border-black hover:bg-gray-800">
                                            <ArrowLeft/>
                                         </Button>
                                     </motion.div>
                                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                         <Button variant="outline" size="icon" onClick={() => paginate(1)} className="bg-black text-white rounded-none w-12 h-12 border-black hover:bg-gray-800">
                                            <ArrowRight/>
                                        </Button>
                                     </motion.div>
                                </div>
                            </div>
                         </div>
                    </motion.div>
                </AnimatePresence>
            </main>
           
            <SlideCounter current={projectIndex} total={projects.length} />
            <SideInfo />
            <Footer onNext={() => paginate(1)} />
        </div>
    );
}

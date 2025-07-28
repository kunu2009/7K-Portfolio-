
"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

type HistoryItem = {
  command: string;
  output: React.ReactNode;
};

const asciiArt = `
  ______   __ __    
 /_  __/  / // /___ 
  / /    / // /_  / 
 / /    / // / / /__
/_/    /_//_/ /____/
                     
`;

const AboutContent = () => (
    <div>
        <p>I&apos;m a 12th-standard Arts student with a vision to become a corporate lawyer.</p>
        <p>My journey is about a relentless pursuit of knowledge and a passion for building things.</p>
        <br/>
        <p>Skills:</p>
        <ul className="list-disc list-inside">
            <li>JavaScript/TypeScript</li>
            <li>React & Next.js</li>
            <li>Python</li>
            <li>AI/Genkit</li>
            <li>UI/UX Design</li>
        </ul>
    </div>
);

const ProjectsContent = () => (
    <div>
        <p>Here are a few of my projects. For more, see the &apos;Storyteller&apos; portfolio.</p>
        <ul className='list-disc list-inside'>
            <li><a href="https://7-klife-newsss-msdh1vil9-kunu2009s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">7K Life App</a> - Holistic life management.</li>
            <li><a href="https://7-klawprep.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">7KLawPrep</a> - Tools for law aspirants.</li>
            <li><a href="https://7-k-itihaas.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">7K Itihaas</a> - Interactive Indian history timelines.</li>
        </ul>
    </div>
)


const HelpContent = () => (
  <div>
    <p>Available commands:</p>
    <ul className="list-disc list-inside">
      <li><span className="text-green-400">help</span> - Shows this list of commands</li>
      <li><span className="text-green-400">about</span> - Displays information about me</li>
      <li><span className="text-green-400">projects</span> - Lists my key projects</li>
      <li><span className="text-green-400">clear</span> - Clears the terminal screen</li>
      <li><span className="text-green-400">home</span> - Navigates back to the portfolio hub</li>
    </ul>
  </div>
);

const commands: { [key: string]: React.ReactNode } = {
  help: <HelpContent />,
  about: <AboutContent />,
  whoami: <AboutContent />,
  projects: <ProjectsContent />,
};


export function Terminal() {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleCommand = (command: string) => {
        const lowerCaseCommand = command.toLowerCase().trim();
        let output: React.ReactNode;

        if (lowerCaseCommand === 'clear') {
            setHistory([]);
            return;
        }

        if (lowerCaseCommand === 'home') {
            // This will trigger a page navigation
            window.location.href = '/';
            return;
        }

        output = commands[lowerCaseCommand] ?? <p>Command not found: &apos;{command}&apos;. Type &apos;help&apos; for a list of commands.</p>;
        
        setHistory(prev => [...prev, { command, output }]);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input) return;
        handleCommand(input);
        setInput("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        // Future: Implement command history with up/down arrows
    }
    
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const initialMessage = (
        <div>
            <pre className='text-green-400'>{asciiArt}</pre>
            <p>Welcome to the 7K Terminal Portfolio.</p>
            <p>Type &apos;help&apos; to see the list of available commands.</p>
        </div>
    );

    return (
        <div 
            className="w-full h-dvh p-4 bg-black text-green-400 font-code overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="flex justify-end">
                <Button asChild variant="ghost" className="text-green-400 hover:bg-green-900 hover:text-green-300">
                    <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Selection
                    </Link>
                </Button>
            </div>
            
            {initialMessage}

            {history.map((item, index) => (
                <div key={index}>
                    <div className="flex items-center">
                        <span className="text-yellow-400">kunal@7k:~$</span>
                        <span className="ml-2">{item.command}</span>
                    </div>
                    <div>{item.output}</div>
                </div>
            ))}
            
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
                <span className="text-yellow-400">kunal@7k:~$</span>
                <input 
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 ml-2 bg-transparent text-green-400 outline-none border-none"
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                />
                 <div className="w-2 h-4 bg-green-400 animate-blink" />
            </form>
            <div ref={scrollRef} />
        </div>
    );
}

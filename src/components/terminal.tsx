
"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

type HistoryItem = {
  command: string;
  output: React.ReactNode;
  path: string;
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
        <p>I'm a 12th-standard Arts student with a vision to become a corporate lawyer.</p>
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
        <p>Here are a few of my projects. Use `cd projects` then `ls` to see them, or `cat projects/[project-name]`.</p>
        <ul className='list-disc list-inside'>
            <li><a href="https://7-klife-newsss-msdh1vil9-kunu2009s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">7K Life App</a> - Holistic life management.</li>
            <li><a href="https://7-klawprep.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">7KLawPrep</a> - Tools for law aspirants.</li>
            <li><a href="https://7-k-itihaas.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">7K Itihaas</a> - Interactive Indian history timelines.</li>
        </ul>
    </div>
);

const ContactContent = () => (
    <div>
        <p>You can reach me at:</p>
        <p>Email: <a href="mailto:example@email.com" className="text-green-400 underline">example@email.com</a></p>
    </div>
);

const fileSystem = {
    '/': {
        type: 'dir',
        children: ['about.md', 'contact.md', 'projects/']
    },
    '/about.md': {
        type: 'file',
        content: <AboutContent />
    },
    '/contact.md': {
        type: 'file',
        content: <ContactContent />
    },
    '/projects': {
        type: 'dir',
        children: ['7k-life-app.md', '7klawprep.md', '7k-itihaas.md']
    },
    '/projects/7k-life-app.md': {
        type: 'file',
        content: <div><strong>7K Life App:</strong> Holistic life management. <a href="https://7-klife-newsss-msdh1vil9-kunu2009s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">View Project</a></div>
    },
    '/projects/7klawprep.md': {
        type: 'file',
        content: <div><strong>7KLawPrep:</strong> Tools for law aspirants. <a href="https://7-klawprep.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">View Project</a></div>
    },
     '/projects/7k-itihaas.md': {
        type: 'file',
        content: <div><strong>7K Itihaas:</strong> Interactive Indian history timelines. <a href="https://7-k-itihaas.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">View Project</a></div>
    }
};


const HelpContent = () => (
  <div>
    <p>Available commands:</p>
    <ul className="list-disc list-inside grid grid-cols-2 gap-x-4">
      <li><span className="text-green-400">help</span> - Shows this list</li>
      <li><span className="text-green-400">about</span> - Displays info about me</li>
      <li><span className="text-green-400">whoami</span> - Alias for 'about'</li>
      <li><span className="text-green-400">date</span> - Current date and time</li>
      <li><span className="text-green-400">echo [text]</span> - Prints back text</li>
      <li><span className="text-green-400">clear</span> - Clears the screen</li>
      <li><span className="text-green-400">home</span> - Back to portfolio hub</li>
      <li><span className="text-green-400">pwd</span> - Print working directory</li>
      <li><span className="text-green-400">ls [path]</span> - List directory contents</li>
      <li><span className="text-green-400">cd [path]</span> - Change directory</li>
      <li><span className="text-green-400">cat [file]</span> - Display file content</li>
    </ul>
  </div>
);


export function Terminal() {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [input, setInput] = useState("");
    const [currentPath, setCurrentPath] = useState("/");
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const resolvePath = (path: string) => {
        if (path.startsWith('/')) return path;
        const newPath = new URL(path, `file://${currentPath}`).pathname;
        return newPath.endsWith('/') && newPath.length > 1 ? newPath.slice(0, -1) : newPath;
    }

    const commands: { [key: string]: (args: string[]) => React.ReactNode } = {
        help: () => <HelpContent />,
        about: () => fileSystem['/about.md'].content,
        whoami: () => fileSystem['/about.md'].content,
        date: () => new Date().toLocaleString(),
        echo: (args) => args.join(' '),
        pwd: () => currentPath,
        ls: (args) => {
            const pathArg = args[0] || ".";
            const path = resolvePath(pathArg);
            const node = fileSystem[path as keyof typeof fileSystem] || fileSystem[path.slice(0,-1) as keyof typeof fileSystem];
            
            if (!node) {
                 return `ls: cannot access '${pathArg}': No such file or directory`;
            }
            if (node.type === 'file') {
                 return <div className="grid grid-cols-3 gap-x-4"><span>{pathArg}</span></div>;
            }
            if (node.type === 'dir') {
                return <div className="grid grid-cols-3 gap-x-4">{node.children.map(child => <span key={child}>{child}</span>)}</div>;
            }
            return `ls: cannot access '${pathArg}': No such file or directory`;
        },
        cd: (args) => {
            const path = args[0] || '/';
            let newPath = resolvePath(path);
             if (newPath !== '/' && !newPath.endsWith('/')) {
                newPath += '/';
            }
            const node = fileSystem[newPath.slice(0,-1) as keyof typeof fileSystem];
            if (node && node.type === 'dir') {
                setCurrentPath(newPath);
                return null;
            }
            return `cd: no such file or directory: ${path}`;
        },
        cat: (args) => {
            if (!args[0]) return 'cat: missing operand';
            const path = resolvePath(args[0]);
            const node = fileSystem[path as keyof typeof fileSystem];
             if (!node) {
                return `cat: ${args[0]}: No such file or directory`;
            }
            if (node.type === 'dir') {
                return `cat: ${args[0]}: Is a directory`;
            }
            if (node.type === 'file') {
                return node.content;
            }
            return `cat: ${args[0]}: No such file or directory`;
        },
        home: () => {
            window.location.href = '/';
            return 'Navigating home...';
        },
        clear: () => {
            setHistory([]);
            return null;
        }
    };

    const handleCommand = (fullCommand: string) => {
        const lowerCaseCommand = fullCommand.trim();
        const [commandName, ...args] = lowerCaseCommand.split(/\s+/);

        let output: React.ReactNode;
        const commandFn = commands[commandName.toLowerCase()];
        
        if (commandFn) {
            const commandOutput = commandFn(args);
            if (commandOutput !== null) {
                 output = commandOutput;
            } else {
                return;
            }
        } else {
             output = <p>Command not found: &apos;{commandName}&apos;. Type &apos;help&apos; for a list of commands.</p>;
        }
        
        setHistory(prev => [...prev, { command: fullCommand, output, path: currentPath }]);
        if (fullCommand) setCommandHistory(prev => [fullCommand, ...prev]);
        setHistoryIndex(-1);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput("");
            }
        }
    }
    
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);
    
    useEffect(() => {
        if (history.length === 0) {
             const initialHistoryItem: HistoryItem = {
                command: '',
                output: (
                    <div>
                        <pre className='text-green-400'>{asciiArt}</pre>
                        <p>Welcome to the 7K Terminal Portfolio.</p>
                        <p>Type &apos;help&apos; to see available commands.</p>
                        <p>Start by typing `ls` to see available files, and `cat [filename]` to read them.</p>
                    </div>
                ),
                path: '~'
            }
            setHistory([initialHistoryItem]);
        }
    }, [history.length]);


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

            {history.map((item, index) => (
                <div key={index}>
                    {item.command && (
                         <div className="flex items-center">
                            <span className="text-yellow-400">kunal@7k:{item.path === '/' ? '~' : item.path.slice(0,-1)}$</span>
                            <span className="ml-2">{item.command}</span>
                        </div>
                    )}
                    <div>{item.output}</div>
                </div>
            ))}
            
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
                <span className="text-yellow-400">kunal@7k:{currentPath === '/' ? '~' : currentPath.slice(0,-1)}$</span>
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

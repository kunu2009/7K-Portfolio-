
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
  ████████╗██╗  ██╗
  ╚══██╔══╝██║ ██╔╝
     ██║   █████╔╝ 
     ██║   ██╔═██╗ 
     ██║   ██║  ██╗
     ╚═╝   ╚═╝  ╚═╝
`;

const welcomeBanner = `
██╗    ██╗███████╗██╗     ██████╗  ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔══██╗██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██████╔╝██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██╔═══╝ ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗██║     ╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝╚═╝      ╚═════╝ ╚═╝     ╚═╝╚══════╝
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
        content: <div>You can reach me at: <a href="mailto:example@email.com" className="text-green-400 underline">example@email.com</a></div>
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

const manPages: { [key: string]: string } = {
    help: 'help: Shows a list of available commands.',
    about: 'about: Displays a short bio and skill summary.',
    whoami: 'whoami: An alias for the `about` command.',
    date: 'date: Displays the current date and time.',
    echo: 'echo [text]: Prints the provided text back to the terminal.',
    clear: 'clear: Clears all previous output from the terminal screen.',
    home: 'home: Navigates back to the main portfolio hub page.',
    pwd: 'pwd: Prints the name of the current working directory.',
    ls: 'ls [path]: Lists the contents of a directory. Defaults to the current directory.',
    cd: 'cd [path]: Changes the current working directory.',
    cat: 'cat [file]: Displays the content of a file.',
    sudo: 'sudo [command]: Execute a command with superuser privileges.',
    man: 'man [command]: Displays the manual page for a given command.',
    '7k': '7k: Shows a short pitch for the 7K ecosystem project.',
    motivate: 'motivate: Displays a motivational quote.',
    ascii: 'ascii: Shows the 7K ASCII art logo.',
    banner: 'banner: Displays the welcome banner.',
    matrix: 'matrix: Are you the one?',
    hack: 'hack [target]: Initiates a simulated hack sequence.',
};

const motivationalQuotes = [
    "The only way to do great work is to love what you do.",
    "The secret of getting ahead is getting started.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "The future belongs to those who believe in the beauty of their dreams."
];

const HelpContent = () => (
  <div>
    <p>Available commands:</p>
    <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-3 gap-x-4">
      {Object.keys(manPages).map(cmd => <li key={cmd}><span className="text-green-400">{cmd}</span></li>)}
    </ul>
     <br/>
    <p>Use `man [command]` to get more information about a specific command.</p>
  </div>
);

const HackContent = ({target}: {target: string}) => {
    const lines = [
        `[+] Initiating connection to ${target}...`,
        `[+] Connection established.`,
        `[+] Bypassing firewall...`,
        `[+] Firewall bypassed. Gaining access...`,
        `[+] Access granted.`,
        `[+] Reading /etc/passwd...`,
        `root:x:0:0:root:/root:/bin/bash`,
        `daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin`,
        `kunal:x:1000:1000:Kunal,,,:/home/kunal:/bin/bash`,
        `[+] Success. Just kidding, this is a simulation!`
    ];

    return (
        <div>
            {lines.map((line, i) => (
                <div key={i}>{line}</div>
            ))}
        </div>
    )
}

export function Terminal() {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [input, setInput] = useState("");
    const [currentPath, setCurrentPath] = useState("/");
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const resolvePath = (path: string) => {
        if (!path || path === '~') path = '/';
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
            let path = resolvePath(pathArg);
            if (path !== '/' && path.endsWith('/')) {
                path = path.slice(0, -1);
            }
            const node = fileSystem[path as keyof typeof fileSystem];
            
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
            
            const nodeKey = newPath === '/' ? '/' : newPath.slice(0, -1);
            const node = fileSystem[nodeKey as keyof typeof fileSystem];

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
        sudo: (args) => {
            if (args[0] === 'godmode') {
                return <span className="text-red-500 font-bold">[!] ACCESS GRANTED. Welcome, Administrator.</span>;
            }
            return "You’re not root, Kunal is 😎";
        },
        man: (args) => {
            const command = args[0];
            if (!command) return "What manual page do you want?";
            return manPages[command] || `No manual entry for ${command}`;
        },
        '7k': () => "The 7K Ecosystem is an interconnected system of tools, apps, and habits for productivity, personal growth, and creative freedom.",
        motivate: () => {
            const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
            return `"${motivationalQuotes[randomIndex]}"`;
        },
        ascii: () => <pre>{asciiArt}</pre>,
        banner: () => <pre>{welcomeBanner}</pre>,
        matrix: () => "Wake up, Neo... The Matrix has you. Follow the white rabbit.",
        hack: (args) => {
            const target = args[0] || 'the-mainframe';
            return <HackContent target={target} />;
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

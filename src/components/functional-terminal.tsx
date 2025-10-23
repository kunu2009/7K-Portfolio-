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

type TerminalTheme = {
  bg: string;
  text: string;
  prompt: string;
  path: string;
  accent: string;
  link: string;
  error: string;
};

const themes: { [key: string]: TerminalTheme } = {
  classic: {
    bg: 'bg-black',
    text: 'text-green-400',
    prompt: 'text-yellow-400',
    path: 'text-yellow-400',
    accent: 'text-cyan-400',
    link: 'text-green-400',
    error: 'text-red-400'
  },
  hacker: {
    bg: 'bg-[#0a0e14]',
    text: 'text-[#00ff41]',
    prompt: 'text-[#ff0055]',
    path: 'text-[#00d9ff]',
    accent: 'text-[#ffcc00]',
    link: 'text-[#00ff41]',
    error: 'text-[#ff0055]'
  },
  dracula: {
    bg: 'bg-[#282a36]',
    text: 'text-[#f8f8f2]',
    prompt: 'text-[#ff79c6]',
    path: 'text-[#8be9fd]',
    accent: 'text-[#50fa7b]',
    link: 'text-[#bd93f9]',
    error: 'text-[#ff5555]'
  },
  nord: {
    bg: 'bg-[#2e3440]',
    text: 'text-[#d8dee9]',
    prompt: 'text-[#88c0d0]',
    path: 'text-[#81a1c1]',
    accent: 'text-[#a3be8c]',
    link: 'text-[#88c0d0]',
    error: 'text-[#bf616a]'
  }
};

const welcomeBanner = `
 ███████╗██╗  ██╗
 ╚════██║██║ ██╔╝
     ██╔╝█████╔╝ 
    ██╔╝ ██╔═██╗ 
   ██║   ██║  ██╗
   ╚═╝   ╚═╝  ╚═╝
`;

const AboutContent = () => (
    <div>
        <p>👋 Hi! I'm Kunal Paresh Chheda</p>
        <p>🎓 12th-standard Arts student with a vision to become a corporate lawyer</p>
        <p>💻 Passionate builder and tech enthusiast</p>
        <br/>
        <p>🚀 Skills:</p>
        <ul className="list-disc list-inside ml-4">
            <li>JavaScript/TypeScript</li>
            <li>React & Next.js</li>
            <li>Python & AI</li>
            <li>Flutter & Mobile Development</li>
            <li>UI/UX Design</li>
        </ul>
        <br/>
        <p>🌟 Part of the 7K Ecosystem - building tools for productivity, learning, and growth</p>
    </div>
);

const fileSystem = {
    '/': {
        type: 'dir',
        children: ['about.md', 'contact.md', 'projects/', 'social.md', 'resume.md']
    },
    '/about.md': {
        type: 'file',
        content: <AboutContent />
    },
    '/contact.md': {
        type: 'file',
        content: (
            <div>
                <p>📧 Email: <a href="mailto:7kmindbeatss@gmail.com" className="underline hover:opacity-80">7kmindbeatss@gmail.com</a></p>
                <p>🌐 Portfolio: <a href="https://7kc.me" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">7kc.me</a></p>
                <p>💼 Open for collaborations and opportunities!</p>
            </div>
        )
    },
    '/social.md': {
        type: 'file',
        content: (
            <div>
                <p>🔗 Find me on:</p>
                <p>• GitHub: <a href="https://github.com/kunu2009" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">@kunu2009</a></p>
                <p>• LinkedIn: <a href="https://linkedin.com/in/kunal-chheda" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Kunal Chheda</a></p>
                <p>• Twitter/X: Coming soon!</p>
            </div>
        )
    },
    '/resume.md': {
        type: 'file',
        content: (
            <div>
                <p>📄 Resume/CV</p>
                <p>Contact me for my latest resume!</p>
                <br/>
                <p>Highlights:</p>
                <p>• 20+ apps built while in school</p>
                <p>• Full-stack developer with modern tech stack</p>
                <p>• Created Portfolioverse with 28 unique portfolio styles</p>
                <p>• Built 7K Ecosystem for holistic life management</p>
            </div>
        )
    },
    '/projects': {
        type: 'dir',
        children: ['7k-life.md', '7klawprep.md', '7k-itihaas.md', 'polyglot.md', 'stan-ai.md']
    },
    '/projects/7k-life.md': {
        type: 'file',
        content: (
            <div>
                <p><strong>🌟 7K Life App</strong></p>
                <p>Holistic life management platform with todo lists, habits, goals, and more</p>
                <p>🔗 <a href="https://7-klife-newsss-msdh1vil9-kunu2009s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">View Project</a></p>
                <p>Tech: Next.js, TypeScript, Tailwind CSS</p>
            </div>
        )
    },
    '/projects/7klawprep.md': {
        type: 'file',
        content: (
            <div>
                <p><strong>⚖️ 7KLawPrep</strong></p>
                <p>Comprehensive tools for law aspirants - study materials, mock tests, and resources</p>
                <p>🔗 <a href="https://7-klawprep.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">View Project</a></p>
                <p>Tech: React, Next.js, AI Integration</p>
            </div>
        )
    },
    '/projects/7k-itihaas.md': {
        type: 'file',
        content: (
            <div>
                <p><strong>📜 7K Itihaas</strong></p>
                <p>Interactive Indian history timelines with engaging visualizations</p>
                <p>🔗 <a href="https://7-k-itihaas.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">View Project</a></p>
                <p>Tech: Next.js, TypeScript, Framer Motion</p>
            </div>
        )
    },
    '/projects/polyglot.md': {
        type: 'file',
        content: (
            <div>
                <p><strong>🌍 Polyglot</strong></p>
                <p>Language learning platform with AI-powered practice</p>
                <p>Tech: Next.js, AI, Speech Recognition</p>
            </div>
        )
    },
    '/projects/stan-ai.md': {
        type: 'file',
        content: (
            <div>
                <p><strong>🤖 Stan AI</strong></p>
                <p>Personal AI assistant with 50+ preloaded Q&A about me and my projects</p>
                <p>Tech: Local pattern matching, no external APIs</p>
                <p>Try it: Type 'ask stan' in this terminal!</p>
            </div>
        )
    }
};

const manPages: { [key: string]: string } = {
    help: 'help - Shows a list of available commands',
    about: 'about - Displays my bio and skills',
    whoami: 'whoami - An alias for the about command',
    date: 'date - Displays the current date and time',
    echo: 'echo [text] - Prints the provided text',
    clear: 'clear - Clears the terminal screen',
    home: 'home - Returns to the main portfolio page',
    pwd: 'pwd - Prints the current working directory',
    ls: 'ls [path] - Lists directory contents',
    cd: 'cd [path] - Changes directory',
    cat: 'cat [file] - Displays file content',
    sudo: 'sudo [command] - Execute with superuser privileges',
    man: 'man [command] - Shows manual page for command',
    '7k': '7k - Information about the 7K ecosystem',
    motivate: 'motivate - Displays a motivational quote',
    banner: 'banner - Shows the welcome banner',
    matrix: 'matrix - Are you the one?',
    hack: 'hack [target] - Simulated hack sequence',
    theme: 'theme [name] - Change terminal theme (classic/hacker/dracula/nord)',
    tree: 'tree - Display directory structure as a tree',
    neofetch: 'neofetch - Display system information',
};

const motivationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "First, solve the problem. Then, write the code. - John Johnson",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
];

const HelpContent = ({ theme }: { theme: TerminalTheme }) => (
  <div>
    <p>Available commands:</p>
    <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-3 gap-x-4 mt-2">
      {Object.keys(manPages).map(cmd => (
        <li key={cmd}>
          <span className={theme.accent}>{cmd}</span>
        </li>
      ))}
    </ul>
    <br/>
    <p>💡 Tips:</p>
    <p>• Use <span className={theme.accent}>Tab</span> for autocomplete (coming soon)</p>
    <p>• Use <span className={theme.accent}>↑/↓</span> arrows to navigate command history</p>
    <p>• Type <span className={theme.accent}>man [command]</span> for more info about a command</p>
  </div>
);

const HackContent = ({ target, theme }: { target: string; theme: TerminalTheme }) => {
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
        `[+] Success! Just kidding, this is a simulation 😄`
    ];

    return (
        <div className={theme.accent}>
            {lines.map((line, i) => (
                <div key={i} className="my-1">{line}</div>
            ))}
        </div>
    );
};

const TreeContent = ({ theme }: { theme: TerminalTheme }) => (
    <div className="font-mono">
        <p>.</p>
        <p>├── about.md</p>
        <p>├── contact.md</p>
        <p>├── social.md</p>
        <p>├── resume.md</p>
        <p>└── projects/</p>
        <p>    ├── 7k-life.md</p>
        <p>    ├── 7klawprep.md</p>
        <p>    ├── 7k-itihaas.md</p>
        <p>    ├── polyglot.md</p>
        <p>    └── stan-ai.md</p>
    </div>
);

const NeofetchContent = ({ theme }: { theme: TerminalTheme }) => (
    <div className="font-mono">
        <pre className={theme.accent}>{welcomeBanner}</pre>
        <p><span className={theme.accent}>Name:</span> Kunal Paresh Chheda</p>
        <p><span className={theme.accent}>Role:</span> Full Stack Developer & Student</p>
        <p><span className={theme.accent}>Education:</span> 12th Grade (Arts)</p>
        <p><span className={theme.accent}>Location:</span> India</p>
        <p><span className={theme.accent}>Projects:</span> 20+ apps built</p>
        <p><span className={theme.accent}>Tech:</span> React, Next.js, TypeScript, Python, Flutter</p>
        <p><span className={theme.accent}>Interests:</span> Law, Tech, Design, AI</p>
        <p><span className={theme.accent}>Status:</span> 🟢 Available for opportunities</p>
    </div>
);

interface FunctionalTerminalProps {
    themeName?: 'classic' | 'hacker' | 'dracula' | 'nord';
}

export function FunctionalTerminal({ themeName = 'classic' }: FunctionalTerminalProps) {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [input, setInput] = useState("");
    const [currentPath, setCurrentPath] = useState("/");
    const [currentTheme, setCurrentTheme] = useState<TerminalTheme>(themes[themeName]);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const resolvePath = (path: string) => {
        if (!path || path === '~') path = '/';
        if (path.startsWith('/')) return path;
        const newPath = new URL(path, `file://${currentPath}`).pathname;
        return newPath.endsWith('/') && newPath.length > 1 ? newPath.slice(0, -1) : newPath;
    };

    const commands: { [key: string]: (args: string[]) => React.ReactNode } = {
        help: () => <HelpContent theme={currentTheme} />,
        about: () => fileSystem['/about.md'].content,
        whoami: () => fileSystem['/about.md'].content,
        date: () => new Date().toLocaleString(),
        echo: (args) => args.join(' ') || '',
        pwd: () => currentPath,
        ls: (args) => {
            const pathArg = args[0] || ".";
            let path = resolvePath(pathArg);
            if (path !== '/' && path.endsWith('/')) {
                path = path.slice(0, -1);
            }
            const node = fileSystem[path as keyof typeof fileSystem];
            
            if (!node) {
                 return <span className={currentTheme.error}>ls: cannot access '{pathArg}': No such file or directory</span>;
            }
            if (node.type === 'file') {
                 return <div className="grid grid-cols-3 gap-x-4"><span>{pathArg}</span></div>;
            }
            if (node.type === 'dir' && 'children' in node) {
                return <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4">{node.children.map((child: string) => <span key={child} className={currentTheme.accent}>{child}</span>)}</div>;
            }
            return <span className={currentTheme.error}>ls: cannot access '{pathArg}': No such file or directory</span>;
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
            return <span className={currentTheme.error}>cd: no such file or directory: {path}</span>;
        },
        cat: (args) => {
            if (!args[0]) return <span className={currentTheme.error}>cat: missing operand</span>;
            const path = resolvePath(args[0]);
            const node = fileSystem[path as keyof typeof fileSystem];
             if (!node) {
                return <span className={currentTheme.error}>cat: {args[0]}: No such file or directory</span>;
            }
            if (node.type === 'dir') {
                return <span className={currentTheme.error}>cat: {args[0]}: Is a directory</span>;
            }
            if (node.type === 'file' && 'content' in node) {
                return node.content;
            }
            return <span className={currentTheme.error}>cat: {args[0]}: No such file or directory</span>;
        },
        home: () => {
            window.location.href = '/';
            return 'Navigating home...';
        },
        sudo: (args) => {
            if (args[0] === 'godmode') {
                return <span className={currentTheme.error + " font-bold"}>[!] ACCESS GRANTED. Welcome, Administrator.</span>;
            }
            return "You're not root, Kunal is 😄";
        },
        man: (args) => {
            const command = args[0];
            if (!command) return "What manual page do you want?";
            return manPages[command] || <span className={currentTheme.error}>No manual entry for {command}</span>;
        },
        '7k': () => (
            <div>
                <p className={currentTheme.accent}>🌟 The 7K Ecosystem</p>
                <p>An interconnected system of tools, apps, and habits for:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Productivity & Time Management</li>
                    <li>Learning & Knowledge Retention</li>
                    <li>Personal Growth & Habits</li>
                    <li>Creative Freedom & Expression</li>
                </ul>
                <p className="mt-2">Type 'ls projects/' to see 7K projects!</p>
            </div>
        ),
        motivate: () => {
            const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
            return <span className={currentTheme.accent}>"{motivationalQuotes[randomIndex]}"</span>;
        },
        banner: () => <pre className={currentTheme.accent}>{welcomeBanner}</pre>,
        matrix: () => <span className={currentTheme.accent}>Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐰</span>,
        hack: (args) => {
            const target = args[0] || 'the-mainframe';
            return <HackContent target={target} theme={currentTheme} />;
        },
        theme: (args) => {
            const themeName = args[0]?.toLowerCase();
            if (!themeName) {
                return (
                    <div>
                        <p>Available themes: classic, hacker, dracula, nord</p>
                        <p>Usage: theme [name]</p>
                    </div>
                );
            }
            if (themes[themeName]) {
                setCurrentTheme(themes[themeName]);
                return <span className={currentTheme.accent}>Theme changed to: {themeName} ✨</span>;
            }
            return <span className={currentTheme.error}>Theme '{themeName}' not found. Available: classic, hacker, dracula, nord</span>;
        },
        tree: () => <TreeContent theme={currentTheme} />,
        neofetch: () => <NeofetchContent theme={currentTheme} />,
        clear: () => {
            setHistory([]);
            return null;
        }
    };

    const handleCommand = (fullCommand: string) => {
        const lowerCaseCommand = fullCommand.trim();
        if (!lowerCaseCommand) return;

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
             output = <p className={currentTheme.error}>Command not found: '{commandName}'. Type 'help' for available commands.</p>;
        }
        
        setHistory(prev => [...prev, { command: fullCommand, output, path: currentPath }]);
        if (fullCommand) setCommandHistory(prev => [fullCommand, ...prev]);
        setHistoryIndex(-1);
    };

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
    };
    
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
                        <pre className={currentTheme.accent}>{welcomeBanner}</pre>
                        <p>Welcome to the 7K Terminal Portfolio 🚀</p>
                        <p>Type <span className={currentTheme.accent}>'help'</span> to see available commands.</p>
                        <p>Try: <span className={currentTheme.accent}>ls</span>, <span className={currentTheme.accent}>cat about.md</span>, <span className={currentTheme.accent}>neofetch</span></p>
                    </div>
                ),
                path: '~'
            };
            setHistory([initialHistoryItem]);
        }
    }, [history.length, currentTheme]);

    return (
        <div 
            className={`w-full h-dvh p-4 ${currentTheme.bg} ${currentTheme.text} font-mono overflow-y-auto`}
            onClick={() => inputRef.current?.focus()}
        >
            <div className="flex justify-end mb-4">
                <Button asChild variant="ghost" className={`${currentTheme.text} hover:opacity-80`}>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Selection
                    </Link>
                </Button>
            </div>

            {history.map((item, index) => (
                <div key={index} className="mb-2">
                    {item.command && (
                         <div className="flex items-center">
                            <span className={currentTheme.prompt}>kunal@7k</span>
                            <span className={currentTheme.path}>:{item.path === '/' ? '~' : item.path.slice(0,-1)}</span>
                            <span className={currentTheme.prompt}>$</span>
                            <span className="ml-2">{item.command}</span>
                        </div>
                    )}
                    <div className="mt-1 ml-0">{item.output}</div>
                </div>
            ))}
            
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
                <span className={currentTheme.prompt}>kunal@7k</span>
                <span className={currentTheme.path}>:{currentPath === '/' ? '~' : currentPath.slice(0,-1)}</span>
                <span className={currentTheme.prompt}>$</span>
                <input 
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`flex-1 ml-2 bg-transparent ${currentTheme.text} outline-none border-none`}
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                />
                <div className={`w-2 h-4 ${currentTheme.text.replace('text-', 'bg-')} animate-pulse`} />
            </form>
            <div ref={scrollRef} />
        </div>
    );
}

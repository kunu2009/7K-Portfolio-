/**
 * Batch add follow-up questions to Stan AI knowledge base
 * This script uses regex replacement to add followUpQuestions field
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'stan-knowledge-base.ts');

// Read the original file
let content = fs.readFileSync(filePath, 'utf-8');

// Step 1: Add followUpQuestions to type definition
content = content.replace(
  /(export type KnowledgeEntry = \{[^}]+questionId: number;)\n(\})/,
  '$1\n  followUpQuestions?: string[];\n$2'
);

// Step 2: Add GREETINGS array before STAN_KNOWLEDGE
const greetingsCode = `
// Greetings and conversational responses
const GREETINGS: KnowledgeEntry[] = [
  {
    keywords: ["hello", "hi", "hey"],
    patterns: [/^(hello|hi|hey)/i],
    answer: "Hey! 👋 I'm Stan, Kunal's AI assistant! I know everything about Kunal and the 7K Ecosystem. What would you like to know?",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["Who is Kunal?", "What is 7K Ecosystem?", "Tell me about Kunal's apps", "What services does Kunal offer?"]
  },
  {
    keywords: ["good", "morning"],
    patterns: [/good morning/i],
    answer: "Good morning! ☀️ I'm Stan, Kunal's AI assistant. Ready to help you explore his amazing work! What would you like to discover?",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["What apps has Kunal built?", "Tell me about 7K Life", "What's Kunal's tech stack?", "How can I contact Kunal?"]
  },
  {
    keywords: ["good", "afternoon"],
    patterns: [/good afternoon/i],
    answer: "Good afternoon! 🌤️ I'm Stan, Kunal's AI assistant. Ready to explore the 7K Ecosystem with you! What would you like to discover?",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["What is 7K Ecosystem?", "Tell me about Kunal's portfolio", "What services are available?", "Show me Kunal's projects"]
  },
  {
    keywords: ["good", "evening"],
    patterns: [/good evening/i],
    answer: "Good evening! 🌆 I'm Stan, here to help you learn about Kunal and the 7K Ecosystem. What can I share with you?",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["Who is Kunal?", "What apps are available?", "Tell me about Kunal's skills", "What's Kunal working on?"]
  },
  {
    keywords: ["good", "night"],
    patterns: [/good night/i],
    answer: "Good night! 🌙 Thanks for chatting with me. Feel free to come back anytime to learn about Kunal and the 7K Ecosystem. Sweet dreams!",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["What is 7K Ecosystem?", "Tell me about Kunal's apps", "What services does Kunal offer?", "How can I contact Kunal?"]
  },
  {
    keywords: ["how", "are", "you"],
    patterns: [/how are you/i, /how're you/i],
    answer: "I'm doing great! 😊 I'm Stan, Kunal's AI assistant, and I'm always excited to share info about Kunal and the 7K Ecosystem! How can I help you today?",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["Who is Kunal?", "What is 7K Ecosystem?", "Tell me about Kunal's apps", "What are Kunal's skills?"]
  },
  {
    keywords: ["thanks", "thank", "you"],
    patterns: [/^(thanks|thank you|thx)/i],
    answer: "You're welcome! 😊 I'm happy to help! If you have more questions about Kunal or the 7K Ecosystem, just ask!",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["Tell me more about Kunal", "What other apps are there?", "How can I hire Kunal?", "What's next in the ecosystem?"]
  },
  {
    keywords: ["bye", "goodbye"],
    patterns: [/^(bye|goodbye|see you)/i],
    answer: "Goodbye! 👋 Thanks for chatting! Come back anytime to learn more about Kunal and the 7K Ecosystem. Have a great day!",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["What is 7K Ecosystem?", "How can I contact Kunal?", "Tell me about Kunal's services", "What apps should I try?"]
  },
  {
    keywords: ["who", "are", "you"],
    patterns: [/who are you/i, /what are you/i],
    answer: "I'm Stan, Kunal's personal AI assistant! 🤖 I have 550+ answers about Kunal Chheda, his skills, all 24+ apps in the 7K Ecosystem, services, and much more. Think of me as your guide to everything Kunal has built!",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["Who is Kunal?", "What is 7K Ecosystem?", "Tell me about the apps", "What can you help me with?"]
  },
  {
    keywords: ["help"],
    patterns: [/^help$/i, /can you help/i, /what can you/i],
    answer: "I can tell you about:\\n\\n✨ Kunal's background, skills, and career plans\\n🚀 All 24+ apps in the 7K Ecosystem\\n💼 Services, pricing, and how to work with Kunal\\n🎨 28 portfolio design variations\\n⚡ Tech stack, tools, and development approach\\n📚 Educational apps, language learning, and more!\\n\\nJust ask me anything!",
    category: "greetings",
    questionId: 0,
    priority: 15,
    followUpQuestions: ["Who is Kunal?", "What is 7K Ecosystem?", "What's Kunal's tech stack?", "How can I hire Kunal?"]
  }
];

export const STAN_KNOWLEDGE: KnowledgeEntry[] = [
  ...GREETINGS,`;

content = content.replace(
  /export const STAN_KNOWLEDGE: KnowledgeEntry\[\] = \[/,
  greetingsCode
);

// Step 3: Add followUpQuestions to selected high-priority entries using batch replacement
// This will add to entries without modifying the structure

const replacements = [
  // Q1: Who is Kunal
  {
    search: /(\s+\/\/ Q1: Who is Kunal Chheda\?[\s\S]+?priority: 10)(\n\s+\})/,
    replace: '$1,\n    followUpQuestions: ["What is the 7K Ecosystem?", "What are Kunal\'s career plans?", "Tell me about Kunal\'s skills", "What apps has Kunal built?"]$2'
  },
  // Q101: 7K Ecosystem
  {
    search: /(\s+\/\/ Q101: What is the 7K Ecosystem\?[\s\S]+?priority: 9)(\n\s+\})/,
    replace: '$1,\n    followUpQuestions: ["How many apps are in the 7K Ecosystem?", "What is 7K Life?", "Tell me about all the apps", "Why build an ecosystem?"]$2'
  },
  // Q103: 7K Life
  {
    search: /(\s+\/\/ Q103: What is 7K Life\?[\s\S]+?priority: 9)(\n\s+\})/,
    replace: '$1,\n    followUpQuestions: ["What features does 7K Life have?", "Tell me about other productivity apps", "What is 7K Polyglot?", "How much does it cost?"]$2'
  },
  // Q55: Tech stack
  {
    search: /(\s+\/\/ Q55: What's Kunal's tech stack\?[\s\S]+?priority: 9)(\n\s+\})/,
    replace: '$1,\n    followUpQuestions: ["Can Kunal do backend development?", "What frameworks does Kunal use?", "Does Kunal know TypeScript?", "Tell me about AI experience"]$2'
  },
  // Q251: Services
  {
    search: /(\s+\/\/ Q251: What services does Kunal offer\?[\s\S]+?priority: 7)(\n\s+\})/,
    replace: '$1,\n    followUpQuestions: ["How much does web development cost?", "Can Kunal build mobile apps?", "What\'s included in UI/UX design?", "How do I hire Kunal?"]$2'
  },
  // Q201: Portfolio styles
  {
    search: /(\s+\/\/ Q201: How many portfolio styles exist\?[\s\S]+?priority: 7)(\n\s+\})/,
    replace: '$1,\n    followUpQuestions: ["What are the portfolio categories?", "Tell me about the Story portfolio", "What\'s the Terminal portfolio like?", "Can I see all designs?"]$2'
  }
];

// Apply specific replacements
replacements.forEach(({ search, replace }) => {
  content = content.replace(search, replace);
});

// Step 4: Add generic follow-ups to ALL remaining entries (this is the bulk operation)
// Match pattern: priority: X\n    } and add followUpQuestions before the closing brace
let count = 0;
content = content.replace(
  /(priority: \d+)(\n\s+\})/g,
  (match, p1, p2) => {
    // Skip if already has followUpQuestions
    if (match.includes('followUpQuestions')) return match;
    
    count++;
    // Limit to 400 additions
    if (count > 400) return match;
    
    // Add generic follow-ups
    return `${p1},\n    followUpQuestions: ["What is 7K Ecosystem?", "Tell me about Kunal's apps", "What services does Kunal offer?", "How can I contact Kunal?"]${p2}`;
  }
);

// Write back
fs.writeFileSync(filePath, content, 'utf-8');

console.log(`✅ Success! Added follow-up questions to ${count + 6} entries (including 10 greetings)`);
console.log(`📁 File updated: ${filePath}`);

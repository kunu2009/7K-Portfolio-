'use server';
/**
 * Stan AI - Smart Assistant ENHANCED
 * A local AI assistant with 550+ preloaded questions about Kunal Chheda
 * No external API dependencies - works entirely with pattern matching and knowledge base
 * Now powered by comprehensive context from STAN-AI-COMPLETE-CONTEXT.md
 */

import { STAN_KNOWLEDGE, FUN_FACTS, KNOWLEDGE_STATS, type KnowledgeEntry } from '@/lib/stan-knowledge-base';

export type ChatInput = string;

// Enhanced output type with follow-up questions
export type ChatOutput = {
  answer: string;
  followUpQuestions?: string[];
};

/**
 * Main function to get Stan's response with follow-up suggestions
 */
export async function askChatAssistant(input: ChatInput): Promise<ChatOutput> {
  const normalizedInput = input.toLowerCase().trim();

  // Find matching knowledge entries
  const matches = findMatches(normalizedInput);

  if (matches.length > 0) {
    const bestMatch = matches[0];
    
    // Return answer with optional follow-up questions
    return {
      answer: bestMatch.answer,
      followUpQuestions: bestMatch.followUpQuestions,
    };
  }

  // If no match found, return a friendly fallback with suggestions
  return {
    answer: getFallbackResponse(),
    followUpQuestions: [
      "Who is Kunal?",
      "What is 7K Ecosystem?",
      "Tell me about Kunal's apps",
      "What services does Kunal offer?",
    ],
  };
}

/**
 * Enhanced matching algorithm with priority and scoring
 */
function findMatches(input: string): KnowledgeEntry[] {
  const matches: Array<{ entry: KnowledgeEntry; score: number }> = [];

  for (const entry of STAN_KNOWLEDGE) {
    let score = 0;

    // Check pattern matches (highest priority)
    for (const pattern of entry.patterns) {
      if (pattern.test(input)) {
        score += 15; // Pattern match is strong signal
        break; // Only count pattern match once
      }
    }

    // Check keyword matches
    let keywordMatches = 0;
    for (const keyword of entry.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        keywordMatches++;
        score += 2;
      }
    }

    // Bonus for multiple keyword matches
    if (keywordMatches >= 3) {
      score += 5;
    }

    // Apply priority multiplier
    if (entry.priority && score > 0) {
      score *= entry.priority / 5; // Normalize priority
    }

    // Only include entries with meaningful matches
    if (score > 0) {
      matches.push({ entry, score });
    }
  }

  // Sort by score (highest first)
  matches.sort((a, b) => b.score - a.score);

  // Return top matches
  return matches.slice(0, 3).map(m => m.entry);
}

/**
 * Get a fallback response with a random fun fact
 */
function getFallbackResponse(): string {
  const randomFact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
  
  const suggestions = [
    "Try asking about Kunal's projects, skills, or apps!",
    "Ask me about the 7K Ecosystem, portfolio, or career plans!",
    "You can ask about specific apps like 7K Life, Polyglot, or LawPrep!",
    "Ask about Kunal's tech stack, services, or future plans!",
  ];
  
  const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
  
  return `Hmm, I don't have specific information about that. But did you know? ${randomFact}\n\n${randomSuggestion}`;
}

/**
 * Get a random greeting
 */
export async function getGreeting(): Promise<string> {
  const greetings = [
    `Hi! I'm Stan, Kunal's AI assistant! I have ${KNOWLEDGE_STATS.totalQuestions}+ answers about Kunal, his projects, and the 7K Ecosystem. Ask me anything!`,
    "Hey there! 👋 I'm Stan! I know all about Kunal and his work. What would you like to know?",
    "Hello! I'm Stan, here to help you explore Kunal's world of productivity, law, and tech! What can I tell you?",
    "Greetings! I'm Stan, Kunal's digital assistant. Ask me about his projects, skills, or journey!",
    `Welcome! I'm Stan with ${KNOWLEDGE_STATS.totalQuestions} Q&A pairs ready. Fire away with your questions!`,
  ];

  return greetings[Math.floor(Math.random() * greetings.length)];
}

/**
 * Get knowledge base stats
 */
export async function getKnowledgeStats() {
  return KNOWLEDGE_STATS;
}

/**
 * Search for questions by category
 */
export async function getQuestionsByCategory(category: string): Promise<string[]> {
  const questions = STAN_KNOWLEDGE
    .filter(entry => entry.category === category)
    .slice(0, 10)
    .map((entry, index) => `${index + 1}. Q${entry.questionId}: ${entry.answer.substring(0, 100)}...`);
  
  return questions;
}

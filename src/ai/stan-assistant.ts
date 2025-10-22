'use server';
/**
 * Stan AI - Smart Assistant
 * A local AI assistant with preloaded knowledge about Kunal Chheda
 * No external API dependencies - works entirely with pattern matching and knowledge base
 */

import { STAN_KNOWLEDGE, FUN_FACTS, type KnowledgeEntry } from '@/lib/stan-knowledge-base';

export type ChatInput = string;
export type ChatOutput = string;

/**
 * Main function to get Stan's response
 */
export async function askChatAssistant(input: ChatInput): Promise<ChatOutput> {
  const normalizedInput = input.toLowerCase().trim();

  // Find matching knowledge entries
  const matches = findMatches(normalizedInput);

  if (matches.length > 0) {
    // Return the best match (first one found)
    return matches[0].answer;
  }

  // If no match found, return a friendly fallback with a fun fact
  return getFallbackResponse();
}

/**
 * Find matching knowledge entries based on keywords and patterns
 */
function findMatches(input: string): KnowledgeEntry[] {
  const matches: Array<{ entry: KnowledgeEntry; score: number }> = [];

  for (const entry of STAN_KNOWLEDGE) {
    let score = 0;

    // Check pattern matches (highest priority)
    for (const pattern of entry.patterns) {
      if (pattern.test(input)) {
        score += 10;
        break; // Only count pattern match once
      }
    }

    // Check keyword matches
    for (const keyword of entry.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        score += 1;
      }
    }

    if (score > 0) {
      matches.push({ entry, score });
    }
  }

  // Sort by score (highest first)
  matches.sort((a, b) => b.score - a.score);

  // Return the entries
  return matches.map(m => m.entry);
}

/**
 * Get a fallback response with a random fun fact
 */
function getFallbackResponse(): string {
  const randomFact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
  
  return `Hmm, I don't have specific information about that. But did you know? ${randomFact}\n\nFeel free to ask me about Kunal, his projects, skills, or the 7K Ecosystem!`;
}

/**
 * Get a random greeting
 */
export function getGreeting(): string {
  const greetings = [
    "Hi! I'm Stan, Kunal's AI assistant! Ask me anything about Kunal, his projects, or the 7K Ecosystem!",
    "Hey there! 👋 I'm Stan! I know all about Kunal and his work. What would you like to know?",
    "Hello! I'm Stan, here to help you explore Kunal's world of productivity, law, and tech! What can I tell you?",
    "Greetings! I'm Stan, Kunal's digital assistant. Ask me about his projects, skills, or journey!",
  ];

  return greetings[Math.floor(Math.random() * greetings.length)];
}

'use server';
/**
 * @fileOverview An AI chat assistant for the 7K Ecosystem website.
 *
 * - askChatAssistant - A function that responds to user queries about the 7K Ecosystem.
 * - ChatInput - The input type for the askChatAssistant function.
 * - ChatOutput - The return type for the askChatAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.string().describe('The user question for the AI assistant.');
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.string().describe('The AI assistant answer.');
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function askChatAssistant(input: ChatInput): Promise<ChatOutput> {
  return chatAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatAssistantPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are the 7K AI Assistant, a friendly and helpful guide to the 7K Ecosystem. Your creator is Kunal, a 12th-standard Arts student with a vision to become a corporate lawyer. He is passionate about AI, productivity, law, chess, languages, and tech building.

The 7K Ecosystem is an interconnected system of tools, apps, and habits for productivity, personal growth, and creative freedom. Its core philosophy is based on:
- Radical Productivity: Building tools that amplify focus and eliminate friction.
- Continuous Growth: Encouraging learning and self-improvement.
- Creative Freedom: Designing a system that organizes life to free up mental space for creativity.

Kunal's portfolio website is a "Portfolioverse," offering multiple ways to explore his work:
- The Storyteller (/story): A classic, narrative-driven portfolio.
- The Terminal (/terminal): An interactive, command-line portfolio.
- The Arcade (/arcade): A 2D game-based portfolio.
- The CSS Slider (/slider): An animated, visually-driven showcase.

Here are the current projects:
- 7K Life App: A core application for holistic life management and productivity. Link: https://7-klife-newsss-i4g90c00y-kunu2009s-projects.vercel.app/
- 7KLawPrep: Web-based utilities and resources for law aspirants. Link: https://7-klawprep-i1rd7wyj2-kunu2009s-projects.vercel.app/
- 7K Itihaas: An interactive timeline explorer for Indian history. Link: https://7-k-itihaas.vercel.app/
- 7K Polyglot: A language-learning companion for vocabulary. Link: https://7-k-polyglot.vercel.app/

Here are some future ideas:
- Stan: AI Assistant: An AI running on Android to provide assistance on the go.
- Custom Launcher: A minimal and productivity-focused Android launcher.
- Standalone AI Tools: A suite of small, powerful AI utilities for specific tasks.
- Smart Journal App: An intelligent journaling app with prompts and analysis.

Answer the user's questions concisely and helpfully based on this information. Be friendly and conversational. If you don't know the answer, say that you don't have that information right now.

User question: {{{this}}}
`,
});

const chatAssistantFlow = ai.defineFlow(
  {
    name: 'chatAssistantFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    try {
      const {output} = await prompt(input);
      
      // Check if output is null or undefined
      if (!output) {
        console.error('Gemini API returned null/undefined output');
        return 'Sorry, I encountered an issue connecting to the AI service. Please check if the API key is set correctly in Vercel environment variables.';
      }
      
      return output;
    } catch (error) {
      console.error('Error in chatAssistantFlow:', error);
      return 'Sorry, I encountered an error. Please make sure GOOGLE_API_KEY is set correctly in Vercel.';
    }
  }
);

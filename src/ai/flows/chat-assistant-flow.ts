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

The 7K Ecosystem is an interconnected system of tools, apps, and habits for productivity, personal growth, and creative freedom.

Here are the current projects:
- 7K Life App: A core application for holistic life management and productivity. You can find it at https://7-klife-newsss-msdh1vil9-kunu2009s-projects.vercel.app/
- CLAT/MHCET Tools: Web-based utilities and resources for law aspirants. You can find it at https://7-klawprep.vercel.app/
- Stan: AI Assistant: An AI running on Android to provide assistance on the go.

Here are some future ideas:
- Custom Launcher: A minimal and productivity-focused Android launcher.
- Standalone AI Tools: A suite of small, powerful AI utilities for specific tasks.
- Smart Journal App: An intelligent journaling app with prompts and analysis.

Answer the user's questions concisely and helpfully based on this information. Be friendly and conversational. Do not make up information. If you don't know the answer, say that you don't have that information right now.

User question: {{{prompt}}}
`,
});

const chatAssistantFlow = ai.defineFlow(
  {
    name: 'chatAssistantFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';
/**
 * @fileOverview An AI flow to generate a "thought of the day".
 *
 * - generateThoughtOfTheDay - A function that generates a thought-provoking quote.
 * - ThoughtOfTheDayOutput - The return type for the generateThoughtOfTheDay function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ThoughtOfTheDayOutputSchema = z.object({
  thought: z.string().describe('The thought-provoking quote.'),
  author: z.string().describe('The fictional or historical author of the quote.'),
});
export type ThoughtOfTheDayOutput = z.infer<typeof ThoughtOfTheDayOutputSchema>;

export async function generateThoughtOfTheDay(): Promise<ThoughtOfTheDayOutput> {
  return thoughtOfTheDayFlow();
}

const prompt = ai.definePrompt({
  name: 'thoughtOfTheDayPrompt',
  output: {schema: ThoughtOfTheDayOutputSchema},
  prompt: `You are a wise philosopher. Your task is to generate one concise, original, and thought-provoking quote.

The quote should be on one of the following topics:
- Productivity
- Personal growth
- The intersection of law and technology
- Creative freedom
- The nature of ambition

Please provide the quote and a plausible but fictional author for it. Do not use real authors.

Example:
Thought: "The tools we build are but extensions of our will, and the most powerful tool is a focused mind."
Author: "Lyra, the Architect"

Generate a new, unique quote now.`,
});

const thoughtOfTheDayFlow = ai.defineFlow(
  {
    name: 'thoughtOfTheDayFlow',
    outputSchema: ThoughtOfTheDayOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);

'use server';

/**
 * @fileOverview AI-powered personalized recommendation flow for the 7K Ecosystem landing page.
 *
 * - generatePersonalizedRecommendations - A function that generates personalized recommendations based on user profile information.
 * - PersonalizedRecommendationsInput - The input type for the generatePersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the generatePersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  interests: z
    .string()
    .describe('A comma-separated list of the user\u2019s interests.'),
  background: z.string().describe('A description of the user\u2019s background.'),
  ecosystemDescription: z
    .string()
    .default(
      'An interconnected system of tools, apps, and habits for productivity, personal growth, and creative freedom.'
    )
    .describe('Description of the 7K Ecosystem.'),
  projects: z
    .string()
    .default(
      '7K Life App, CLAT/MHCET Tools, Stan: AI Assistant on Android, Future app ideas (like launcher, AI tools, journal app, etc.)'
    )
    .describe('List of available projects in the 7K Ecosystem.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A list of personalized recommendations for apps or resources within the 7K Ecosystem, based on the user\u2019s interests and background.'
    ),
  reasoning: z
    .string()
    .describe(
      'Explanation of why each recommendation was made, based on the user\u2019s profile.'
    ),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function generatePersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized recommendations for the 7K Ecosystem.

  The 7K Ecosystem is described as: {{{ecosystemDescription}}}

  The available projects are: {{{projects}}}

  Based on the user's interests and background, provide a list of personalized recommendations for apps or resources within the 7K Ecosystem.
  Also, provide a reasoning for each recommendation.

  User Interests: {{{interests}}}
  User Background: {{{background}}}

  Format the output as follows:

  Recommendations: [recommendation1, recommendation2, ...]
  Reasoning: [reasoning1, reasoning2, ...]
  `,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';

/**
 * @fileoverview A solution advisor AI agent that provides recommendations for solar and CCTV systems.
 * 
 * - getSolution - A function that handles the solution generation process.
 */

import { ai } from '@/ai/genkit';
import { SolutionInput, SolutionSchema, SolutionInputSchema, Solution } from '@/ai/schema/advisor';

export async function getSolution(input: SolutionInput): Promise<Solution> {
  return solutionAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solutionAdvisorPrompt',
  input: { schema: SolutionInputSchema },
  output: { schema: SolutionSchema },
  model: 'googleai/gemini-1.5-flash-latest',
  prompt: `You are an expert Solutions Advisor for HexaTech, a company specializing in solar fitting and CCTV camera installation.
  Your role is to analyze a customer's requirements and provide a clear, concise, and helpful recommendation for both solar and CCTV solutions.

  Based on the following user requirements, generate a tailored recommendation.

  User Requirements: {{{requirements}}}
  
  Your response should be structured into two parts: one for the solar solution and one for the CCTV solution.
  Provide practical and actionable advice. For solar, consider aspects like potential system size, and benefits. For CCTV, suggest camera types and strategic placements.
  Keep the tone professional, helpful, and confident. Address the user directly.
  `,
});

const solutionAdvisorFlow = ai.defineFlow(
  {
    name: 'solutionAdvisorFlow',
    inputSchema: SolutionInputSchema,
    outputSchema: SolutionSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error("Failed to generate a solution.");
    }
    return output;
  }
);

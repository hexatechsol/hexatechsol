/**
 * @fileoverview Defines the data structures (schemas and types) for the solution advisor feature.
 * This includes input validation and the shape of the data returned by the AI.
 * 
 * - SolutionInputSchema - Zod schema for validating the user's input.
 * - SolutionInput - The TypeScript type inferred from the input schema.
 * - SolutionSchema - Zod schema for validating the AI's output.
 * - Solution - The TypeScript type inferred from the output schema.
 */

import { z } from 'zod';

export const SolutionInputSchema = z.object({
  requirements: z.string().describe("The user's requirements for solar and CCTV solutions."),
});
export type SolutionInput = z.infer<typeof SolutionInputSchema>;

export const SolutionSchema = z.object({
  solarRecommendation: z.string().describe("A tailored recommendation for a solar panel system based on the user's needs."),
  cctvRecommendation: z.string().describe("A tailored recommendation for a CCTV security system based on the user's needs."),
});
export type Solution = z.infer<typeof SolutionSchema>;

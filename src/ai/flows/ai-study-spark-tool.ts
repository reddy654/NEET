
'use server';
/**
 * @fileOverview A Genkit flow for generating personalized motivational prompts and daily scientific pro-tips for NEET students.
 *
 * - generateStudySpark - A function that generates a study spark including a motivational prompt and a scientific pro-tip.
 * - GenerateStudySparkInput - The input type for the generateStudySpark function.
 * - GenerateStudySparkOutput - The return type for the generateStudySpark function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStudySparkInputSchema = z.object({
  subject: z.enum(['Biology', 'Physics', 'Chemistry']).optional().describe('The preferred subject for the pro-tip (Biology, Physics, or Chemistry). If not provided, a random subject will be chosen.'),
});
export type GenerateStudySparkInput = z.infer<typeof GenerateStudySparkInputSchema>;

const GenerateStudySparkOutputSchema = z.object({
  motivation: z.string().describe('A personalized motivational prompt for a NEET student.'),
  proTip: z.string().describe('A concise scientific pro-tip related to the chosen subject.'),
  subjectUsed: z.enum(['Biology', 'Physics', 'Chemistry']).describe('The subject for which the pro-tip was generated.'),
});
export type GenerateStudySparkOutput = z.infer<typeof GenerateStudySparkOutputSchema>;

export async function generateStudySpark(input: GenerateStudySparkInput): Promise<GenerateStudySparkOutput> {
  return generateStudySparkFlow(input);
}

const prompt = ai.definePrompt({
  name: 'studySparkPrompt',
  input: {schema: GenerateStudySparkInputSchema},
  output: {schema: GenerateStudySparkOutputSchema},
  prompt: `You are an AI assistant designed to help NEET students stay focused and motivated.
Generate a personalized motivational prompt and a concise scientific pro-tip.

Subject Determination:
{{#if subject}}
  The student's preferred subject is: {{{subject}}}. Use this for the pro-tip.
{{else}}
  No specific subject was preferred. Randomly choose one from Biology, Physics, or Chemistry for the pro-tip.
{{/if}}

Ensure the pro-tip is scientifically accurate and formatted clearly as text.`,
});

const generateStudySparkFlow = ai.defineFlow(
  {
    name: 'generateStudySparkFlow',
    inputSchema: GenerateStudySparkInputSchema,
    outputSchema: GenerateStudySparkOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('No output returned from Genkit prompt');
    }
    return output;
  }
);

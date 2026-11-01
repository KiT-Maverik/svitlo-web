import type { Section } from '@svitlo/engine/content';

export const quizDefinition = {
  type: 'section',
  content: { quiz: { quiz: { type: 'quiz' } } },
} satisfies Section<'definition'>;

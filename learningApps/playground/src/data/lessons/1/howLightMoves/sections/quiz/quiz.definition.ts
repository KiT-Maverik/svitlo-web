import type { ContentBlock_Quiz, Section } from '@svitlo/engine/content';

export const quizDefinition = {
  type: 'section',
  content: {
    quiz: {
      quiz: {
        type: 'quiz',
      } satisfies ContentBlock_Quiz<'definition'>,
    },
  },
} satisfies Section<'definition'>;

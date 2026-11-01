import type { ContentBlock_Quiz, Section } from '@svitlo/engine/content';
import { howLightMovesQuestionsDefinition } from '../../questions/index.definition';

export const quizDefinition = {
  type: 'section',
  content: {
    quiz: {
      quiz: {
        type: 'quiz',
        questions: howLightMovesQuestionsDefinition.selectOneAnswer,
      } satisfies ContentBlock_Quiz<'definition'>,
    },
  },
} satisfies Section<'definition'>;

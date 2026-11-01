import type { ContentBlock_Quiz, Section } from '@svitlo/engine/content';

export const quizDefinition = {
  type: 'section',
  content: {
    quiz: {
      quiz: {
        type: 'quiz',
        questions: {
          lightTravelsStraight: { type: 'select-one-answer' },
          lightRayDirection: { type: 'select-one-answer' },
          fastestMedium: { type: 'select-one-answer' },
          lightSpeedInWater: { type: 'select-one-answer' },
          airVacuumSpeed: { type: 'select-one-answer' },
          opaqueObjectShadow: { type: 'select-one-answer' },
        },
      } satisfies ContentBlock_Quiz<'definition'>,
    },
  },
} satisfies Section<'definition'>;

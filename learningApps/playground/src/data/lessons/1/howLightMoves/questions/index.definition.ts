import type { Question_Catalog } from '@svitlo/engine/content';

export const howLightMovesQuestionsDefinition = {
  selectOneAnswer: {
    lightTravelsStraight: { type: 'selectOneAnswer' },
    lightRayDirection: { type: 'selectOneAnswer' },
    fastestMedium: { type: 'selectOneAnswer' },
    lightSpeedInWater: { type: 'selectOneAnswer' },
    airVacuumSpeed: { type: 'selectOneAnswer' },
    opaqueObjectShadow: { type: 'selectOneAnswer' },
  },
} satisfies Question_Catalog<'definition'>;

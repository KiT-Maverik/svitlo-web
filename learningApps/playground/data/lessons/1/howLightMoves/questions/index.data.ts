import type { Question_Catalog_DataFor } from '@svitlo/engine/content';
import type { howLightMovesQuestionsDefinition } from '@/data/lessons/1/howLightMoves/questions/index.definition';
import { airVacuumSpeed_Question_Data } from './airVacuumSpeed.data';
import { fastestMedium_Question_Data } from './fastestMedium.data';
import { lightRayDirection_Question_Data } from './lightRayDirection.data';
import { lightSpeedInWater_Question_Data } from './lightSpeedInWater.data';
import { lightTravelsStraight_Question_Data } from './lightTravelsStraight.data';
import { opaqueObjectShadow_Question_Data } from './opaqueObjectShadow.data';

export const howLightMovesQuestionsData = {
  selectOneAnswer: {
    lightTravelsStraight: lightTravelsStraight_Question_Data,
    lightRayDirection: lightRayDirection_Question_Data,
    fastestMedium: fastestMedium_Question_Data,
    lightSpeedInWater: lightSpeedInWater_Question_Data,
    airVacuumSpeed: airVacuumSpeed_Question_Data,
    opaqueObjectShadow: opaqueObjectShadow_Question_Data,
  },
} satisfies Question_Catalog_DataFor<typeof howLightMovesQuestionsDefinition>;

import { airVacuumSpeed_Question_Ids } from './airVacuumSpeed.ids';
import { fastestMedium_Question_Ids } from './fastestMedium.ids';
import { lightRayDirection_Question_Ids } from './lightRayDirection.ids';
import { lightSpeedInWater_Question_Ids } from './lightSpeedInWater.ids';
import { lightTravelsStraight_Question_Ids } from './lightTravelsStraight.ids';
import { opaqueObjectShadow_Question_Ids } from './opaqueObjectShadow.ids';

export const quiz_Questions_Ids = {
  airVacuumSpeed: airVacuumSpeed_Question_Ids.question,
  fastestMedium: fastestMedium_Question_Ids.question,
  lightRayDirection: lightRayDirection_Question_Ids.question,
  lightSpeedInWater: lightSpeedInWater_Question_Ids.question,
  lightTravelsStraight: lightTravelsStraight_Question_Ids.question,
  opaqueObjectShadow: opaqueObjectShadow_Question_Ids.question,
} as const;

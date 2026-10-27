import type { Quiz_Config } from '@types';
import { lightTravelsStraight } from './lightTravelsStraight.data';
import { lightRayDirection } from './lightRayDirection.data';
import { fastestMedium } from './fastestMedium.data';
import { lightSpeedInWater } from './lightSpeedInWater.data';
import { airVacuumSpeed } from './airVacuumSpeed.data';
import { opaqueObjectShadow } from './opaqueObjectShadow.data';

export const questionBank = [
  lightTravelsStraight,
  lightRayDirection,
  fastestMedium,
  lightSpeedInWater,
  airVacuumSpeed,
  opaqueObjectShadow,
] satisfies Quiz_Config['questionBank'];

import type { Quiz_Config } from '@types';
import { lightTravelsStraight } from './lightTravelsStraight';
import { lightRayDirection } from './lightRayDirection';
import { fastestMedium } from './fastestMedium';
import { lightSpeedInWater } from './lightSpeedInWater';
import { airVacuumSpeed } from './airVacuumSpeed';
import { opaqueObjectShadow } from './opaqueObjectShadow';

export const questionBank = [
  lightTravelsStraight,
  lightRayDirection,
  fastestMedium,
  lightSpeedInWater,
  airVacuumSpeed,
  opaqueObjectShadow,
] satisfies Quiz_Config['questionBank'];

import { practice_Media_Ids } from './Practice.ids';

/** Refractive indices used by the interactive medium comparison scene. */
export const media = [
  { id: practice_Media_Ids.vacuum, key: 'vacuum', index: 1 },
  { id: practice_Media_Ids.air, key: 'air', index: 1.000293 },
  { id: practice_Media_Ids.water, key: 'water', index: 1.333 },
] as const;

export const LIGHT_SPEED_KM_S = 299792.458;
// todo

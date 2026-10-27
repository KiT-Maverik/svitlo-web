import { length_SkillGroup_Ids } from './length/length.ids';
import { mass_SkillGroup_Ids } from './mass/mass.ids';
import { capacity_SkillGroup_Ids } from './capacity/capacity.ids';
import { temperature_SkillGroup_Ids } from './temperature/temperature.ids';
import { general_SkillGroup_Ids } from './general/general.ids';

export const measurement_SkillGroups_Ids = {
  length: length_SkillGroup_Ids.length,
  mass: mass_SkillGroup_Ids.mass,
  capacity: capacity_SkillGroup_Ids.capacity,
  temperature: temperature_SkillGroup_Ids.temperature,
  general: general_SkillGroup_Ids.general,
} as const;

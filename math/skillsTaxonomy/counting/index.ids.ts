import { sequence_SkillGroup_Ids } from './sequence/sequence.ids';
import { cardinality_SkillGroup_Ids } from './cardinality/cardinality.ids';
import { steps_SkillGroup_Ids } from './steps/steps.ids';
import { ordinal_SkillGroup_Ids } from './ordinal/ordinal.ids';
import { parity_SkillGroup_Ids } from './parity/parity.ids';

export const counting_SkillGroups_Ids = {
  sequence: sequence_SkillGroup_Ids.sequence,
  cardinality: cardinality_SkillGroup_Ids.cardinality,
  steps: steps_SkillGroup_Ids.steps,
  ordinal: ordinal_SkillGroup_Ids.ordinal,
  parity: parity_SkillGroup_Ids.parity,
} as const;

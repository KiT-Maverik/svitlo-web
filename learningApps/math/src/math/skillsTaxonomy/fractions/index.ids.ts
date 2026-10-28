import { representation_SkillGroup_Ids } from './representation/representation.ids';
import { comparison_SkillGroup_Ids } from './comparison/comparison.ids';
import { arithmetic_SkillGroup_Ids } from './arithmetic/arithmetic.ids';
import { portions_SkillGroup_Ids } from './portions/portions.ids';

export const fractions_SkillGroups_Ids = {
  representation: representation_SkillGroup_Ids.representation,
  comparison: comparison_SkillGroup_Ids.comparison,
  arithmetic: arithmetic_SkillGroup_Ids.arithmetic,
  portions: portions_SkillGroup_Ids.portions,
} as const;

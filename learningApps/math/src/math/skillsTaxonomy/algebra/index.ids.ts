import { equalities_SkillGroup_Ids } from './equalities/equalities.ids';
import { expressions_SkillGroup_Ids } from './expressions/expressions.ids';
import { formalization_SkillGroup_Ids } from './formalization/formalization.ids';
import { patterns_SkillGroup_Ids } from './patterns/patterns.ids';
import { unknowns_SkillGroup_Ids } from './unknowns/unknowns.ids';

export const algebra_SkillGroups_Ids = {
  expressions: expressions_SkillGroup_Ids.expressions,
  equalities: equalities_SkillGroup_Ids.equalities,
  unknowns: unknowns_SkillGroup_Ids.unknowns,
  patterns: patterns_SkillGroup_Ids.patterns,
  formalization: formalization_SkillGroup_Ids.formalization,
} as const;

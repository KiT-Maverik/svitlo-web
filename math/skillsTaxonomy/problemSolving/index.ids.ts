import { conditions_SkillGroup_Ids } from './conditions/conditions.ids';
import { models_SkillGroup_Ids } from './models/models.ids';
import { planning_SkillGroup_Ids } from './planning/planning.ids';
import { comparisons_SkillGroup_Ids } from './comparisons/comparisons.ids';
import { parts_SkillGroup_Ids } from './parts/parts.ids';
import { groups_SkillGroup_Ids } from './groups/groups.ids';
import { quantities_SkillGroup_Ids } from './quantities/quantities.ids';

export const problemSolving_SkillGroups_Ids = {
  conditions: conditions_SkillGroup_Ids.conditions,
  models: models_SkillGroup_Ids.models,
  planning: planning_SkillGroup_Ids.planning,
  comparisons: comparisons_SkillGroup_Ids.comparisons,
  parts: parts_SkillGroup_Ids.parts,
  groups: groups_SkillGroup_Ids.groups,
  quantities: quantities_SkillGroup_Ids.quantities,
} as const;

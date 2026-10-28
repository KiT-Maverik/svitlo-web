import { argumentation_SkillGroup_Ids } from './argumentation/argumentation.ids';
import { logic_SkillGroup_Ids } from './logic/logic.ids';
import { representations_SkillGroup_Ids } from './representations/representations.ids';
import { verification_SkillGroup_Ids } from './verification/verification.ids';

export const reasoning_SkillGroups_Ids = {
  argumentation: argumentation_SkillGroup_Ids.argumentation,
  verification: verification_SkillGroup_Ids.verification,
  logic: logic_SkillGroup_Ids.logic,
  representations: representations_SkillGroup_Ids.representations,
} as const;

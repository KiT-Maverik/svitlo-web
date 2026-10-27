import { collection_SkillGroup_Ids } from './collection/collection.ids';
import { presentation_SkillGroup_Ids } from './presentation/presentation.ids';
import { interpretation_SkillGroup_Ids } from './interpretation/interpretation.ids';

export const data_SkillGroups_Ids = {
  collection: collection_SkillGroup_Ids.collection,
  presentation: presentation_SkillGroup_Ids.presentation,
  interpretation: interpretation_SkillGroup_Ids.interpretation,
} as const;

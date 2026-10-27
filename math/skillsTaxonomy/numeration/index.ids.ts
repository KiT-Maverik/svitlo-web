import { notation_SkillGroup_Ids } from './notation/notation.ids';
import { placeValue_SkillGroup_Ids } from './placeValue/placeValue.ids';
import { comparison_SkillGroup_Ids } from './comparison/comparison.ids';
import { numberLine_SkillGroup_Ids } from './numberLine/numberLine.ids';
import { estimation_SkillGroup_Ids } from './estimation/estimation.ids';

export const numeration_SkillGroups_Ids = {
  notation: notation_SkillGroup_Ids.notation,
  placeValue: placeValue_SkillGroup_Ids.placeValue,
  comparison: comparison_SkillGroup_Ids.comparison,
  numberLine: numberLine_SkillGroup_Ids.numberLine,
  estimation: estimation_SkillGroup_Ids.estimation,
} as const;

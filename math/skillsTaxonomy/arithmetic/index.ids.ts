import { addition_SkillGroup_Ids } from './addition/addition.ids';
import { subtraction_SkillGroup_Ids } from './subtraction/subtraction.ids';
import { additionSubtraction_SkillGroup_Ids } from './additionSubtraction/additionSubtraction.ids';

export const arithmetic_SkillGroups_Ids = {
  addition: addition_SkillGroup_Ids.addition,
  subtraction: subtraction_SkillGroup_Ids.subtraction,
  additionSubtraction: additionSubtraction_SkillGroup_Ids.additionSubtraction,
  multiply: '1cb60869-1e45-44c0-bc72-aab0a8df8af7',
  divide: 'ddb45d35-6e28-4e55-b934-949c3f0a21b2',
} as const;

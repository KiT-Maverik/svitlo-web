import { addition_SkillGroup_Ids } from './addition/addition.ids';
import { additionSubtraction_SkillGroup_Ids } from './additionSubtraction/additionSubtraction.ids';
import { divide_SkillGroup_Ids } from './divide/divide.ids';
import { multiply_SkillGroup_Ids } from './multiply/multiply.ids';
import { subtraction_SkillGroup_Ids } from './subtraction/subtraction.ids';

export const arithmetic_SkillGroups_Ids = {
  addition: addition_SkillGroup_Ids.addition,
  subtraction: subtraction_SkillGroup_Ids.subtraction,
  additionSubtraction: additionSubtraction_SkillGroup_Ids.additionSubtraction,
  multiply: multiply_SkillGroup_Ids.multiply,
  divide: divide_SkillGroup_Ids.divide,
} as const;

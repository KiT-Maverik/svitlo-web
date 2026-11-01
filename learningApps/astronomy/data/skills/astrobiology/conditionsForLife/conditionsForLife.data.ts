import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  extremophileAnalogues_Skill_Data,
  habitability_Skill_Data,
  habitabilityThroughTime_Skill_Data,
  prebioticChemistry_Skill_Data,
} from './skills';

export const conditionsForLife_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'conditionsForLife',
  id: 'dfc0e071-5101-4aaa-b24f-691b32dd77f4',
  name: {
    en: 'Conditions for Life',
  },
  skills: {
    extremophileAnalogues: extremophileAnalogues_Skill_Data,
    habitability: habitability_Skill_Data,
    habitabilityThroughTime: habitabilityThroughTime_Skill_Data,
    prebioticChemistry: prebioticChemistry_Skill_Data,
  },
  description: {
    methodological:
      'Evaluating environments for life requires explicit biological and geochemical assumptions; familiar Earth conditions are useful evidence, not universal proof.',
    frontend: {
      en: 'Consider the environments and chemistry that might allow life to exist.',
    },
  },
});

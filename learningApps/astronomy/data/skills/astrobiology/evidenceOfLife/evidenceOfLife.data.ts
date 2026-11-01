import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  abioticFalsePositives_Skill_Data,
  biosignatures_Skill_Data,
  lifeDetectionEvidenceStandards_Skill_Data,
  planetaryProtection_Skill_Data,
  technosignatures_Skill_Data,
} from './skills';

export const evidenceOfLife_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'evidenceOfLife',
  id: 'b6aa9935-9b82-4753-8abe-678b2c459f8b',
  name: {
    en: 'Evidence of Life',
  },
  skills: {
    abioticFalsePositives: abioticFalsePositives_Skill_Data,
    biosignatures: biosignatures_Skill_Data,
    lifeDetectionEvidenceStandards: lifeDetectionEvidenceStandards_Skill_Data,
    planetaryProtection: planetaryProtection_Skill_Data,
    technosignatures: technosignatures_Skill_Data,
  },
  description: {
    methodological:
      'A proposed sign of life must be weighed against nonbiological processes and the limits of the measuring instrument.',
    frontend: {
      en: 'Learn how to distinguish possible signs of life from nonliving explanations.',
    },
  },
});

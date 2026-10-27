import type { SkillGroup_Config } from '../../../types/content/skillGroup.types';
import { buildSkillConfig } from './buildSkillConfig.utils';
import { validateSkillReferences } from './validateSkillReferences.utils';

export function buildSkillGroupConfig<const T extends SkillGroup_Config>(config: T): T {
  buildSkillConfig(config);
  validateSkillReferences('SkillGroup', 'skillIds', config.skillIds);
  return config;
}

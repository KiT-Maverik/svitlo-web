import type { SkillDomain_Config } from '../../../types/content/skillDomain.types';
import { buildSkillConfig } from './buildSkillConfig.utils';
import { validateSkillReferences } from './validateSkillReferences.utils';

export function buildSkillDomainConfig<const T extends SkillDomain_Config>(config: T): T {
  buildSkillConfig(config);
  validateSkillReferences('SkillDomain', 'groupIds', config.groupIds);
  return config;
}

import type { Collection } from '../../../types/misc.types';
import type { SkillDomain_Config } from '../../../types/content/skillDomain.types';
import { validateSkillConfig } from './buildSkillConfig.utils';
import { validateSkillReferences } from './validateSkillReferences.utils';

/** Add the discriminator to a validated domain without mutating its authored config. */
export function buildSkillDomainConfig<const T extends SkillDomain_Config>(config: T) {
  validateSkillConfig(config);
  validateSkillReferences('SkillDomain', 'groupIds', config.groupIds);
  const collection: Extract<Collection, 'skillDomain'> = 'skillDomain';
  return { ...config, collection } as const;
}

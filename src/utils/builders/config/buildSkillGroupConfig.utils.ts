import type { Collection } from '../../../types/misc.types';
import type { SkillGroup_Config } from '../../../types/content/skillGroup.types';
import { validateSkillConfig } from './buildSkillConfig.utils';
import { validateSkillReferences } from './validateSkillReferences.utils';

/** Add the discriminator to a validated group without mutating its authored config. */
export function buildSkillGroupConfig<const T extends SkillGroup_Config>(config: T) {
  validateSkillConfig(config);
  validateSkillReferences('SkillGroup', 'skillIds', config.skillIds);
  const collection = 'skillGroup' satisfies Collection;
  return { ...config, collection } as const;
}

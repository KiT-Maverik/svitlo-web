import type { Collection } from '@svitlo/contracts/content';
import type { SkillGroup_Config } from '@svitlo/contracts/taxonomy';
import type { DeepReadonly } from '@svitlo/contracts/content';
import { validateSkillConfig } from './buildSkillConfig.utils';
import { validateSkillReferences } from './validateSkillReferences.utils';

/** Add the discriminator to a validated group without mutating its authored config. */
export function buildSkillGroupConfig<const T extends SkillGroup_Config>(config: T): DeepReadonly<T & { readonly collection: Extract<Collection, 'skillGroup'> }> {
  validateSkillConfig(config);
  validateSkillReferences('SkillGroup', 'skillIds', config.skillIds);
  const collection: Extract<Collection, 'skillGroup'> = 'skillGroup';
  return { ...config, collection } as DeepReadonly<T & { readonly collection: Extract<Collection, 'skillGroup'> }>;
}

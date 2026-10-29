import type { Collection } from '@svitlo/contracts/content';
import type { SkillDomain_Config } from '@svitlo/contracts/taxonomy';
import type { DeepReadonly } from '@svitlo/contracts/content';
import { validateSkillConfig } from './buildSkillConfig.utils';
import { validateSkillReferences } from './validateSkillReferences.utils';

/** Add the discriminator to a validated domain without mutating its authored config. */
export function buildSkillDomainConfig<const T extends SkillDomain_Config>(config: T): DeepReadonly<T & { readonly collection: Extract<Collection, 'skillDomain'> }> {
  validateSkillConfig(config);
  validateSkillReferences('SkillDomain', 'groupIds', config.groupIds);
  const collection: Extract<Collection, 'skillDomain'> = 'skillDomain';
  return { ...config, collection } as DeepReadonly<T & { readonly collection: Extract<Collection, 'skillDomain'> }>;
}

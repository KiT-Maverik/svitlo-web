import type { Collection } from '@svitlo/contracts/content';
import type { SkillDomain_Config } from '@svitlo/contracts/taxonomy';
import type { DeepReadonly } from '@svitlo/contracts/content';
import { validateSkillConfig } from './buildSkillConfig.utils';
import { validateSkillReferences } from './validateSkillReferences.utils';

/** Add the discriminator to a validated domain without mutating its authored config. */
export function buildSkillDomainConfig<const T extends SkillDomain_Config>(config: T): DeepReadonly<T & { readonly collection: Extract<Collection, 'skillDomain'> }> {
  validateSkillConfig(config);

  // The two primary catalog ownership forms are exclusive and must not be empty.
  if (!config.groupIds || typeof config.groupIds !== 'object' || Array.isArray(config.groupIds)) {
    throw new Error('SkillDomain groupIds must be an object');
  }
  if (config.skillIds !== undefined && (!config.skillIds || typeof config.skillIds !== 'object' || Array.isArray(config.skillIds))) {
    throw new Error('SkillDomain skillIds must be an object when provided');
  }

  const hasGroups = Object.keys(config.groupIds).length > 0;
  const hasDirectSkills = config.skillIds !== undefined && Object.keys(config.skillIds).length > 0;
  if (hasGroups === hasDirectSkills) {
    throw new Error('SkillDomain must contain either non-empty groupIds or non-empty direct skillIds, but not both');
  }

  if (hasGroups) {
    validateSkillReferences('SkillDomain', 'groupIds', config.groupIds);
  } else {
    validateSkillReferences('SkillDomain', 'skillIds', config.skillIds!);
  }

  const collection: Extract<Collection, 'skillDomain'> = 'skillDomain';
  return { ...config, collection } as DeepReadonly<T & { readonly collection: Extract<Collection, 'skillDomain'> }>;
}

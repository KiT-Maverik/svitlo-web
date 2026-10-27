import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';
import type { Collection } from '../../../types/misc.types';
import type { Skill_Config } from '../../../types/content/skill.types';
import { validateSkillUuid } from './validateSkillReferences.utils';

const supportedLanguages = new Set<string>(
  DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language),
);

/**
 * Shared validation for all taxonomy authoring configs.
 * This does not create any collection, entity or external relationship.
 */
export function validateSkillConfig(config: Skill_Config): void {
  if (!config) {
    throw new Error('Skill id must be a UUID');
  }
  validateSkillUuid(config.id, 'Skill id');

  if (!config.name || typeof config.name !== 'object' || Array.isArray(config.name)) {
    throw new Error('Skill name must contain all supported languages');
  }

  for (const language of supportedLanguages) {
    const value = config.name[language as keyof typeof config.name];
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error(`Skill name must contain a non-empty translation for ${language}`);
    }
  }

  const unexpected = Object.keys(config.name).filter(language => !supportedLanguages.has(language));
  if (unexpected.length > 0) {
    throw new Error(`Skill name contains unsupported languages: ${unexpected.join(', ')}`);
  }
}

/**
 * Adds the static taxonomy discriminator. IDs remain imported from *.ids.ts.
 * Authoring config is not mutated; fileLocation is added separately by the registry.
 */
export function buildSkillConfig<const T extends Skill_Config>(config: T) {
  validateSkillConfig(config);
  const collection: Extract<Collection, 'skill'> = 'skill';
  return { ...config, collection } as const;
}

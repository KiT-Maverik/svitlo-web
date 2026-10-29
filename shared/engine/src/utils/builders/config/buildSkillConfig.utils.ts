import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';
import type { Collection } from '@svitlo/contracts/content';
import type { Skill_Config } from '@svitlo/contracts/taxonomy';
import type { DeepReadonly } from '@svitlo/contracts/content';
import { validateSkillUuid } from './validateSkillReferences.utils';

const supportedLanguages = new Set<string>(DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language));

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

  // Legacy records may lack descriptions until their reviewed Markdown has been
  // migrated. Once provided, the dictionary must cover every supported locale.
  if (config.description !== undefined) {
    if (!config.description || typeof config.description !== 'object' || Array.isArray(config.description)) {
      throw new Error('Skill description must contain all supported languages');
    }
    for (const language of supportedLanguages) {
      const value = config.description[language as keyof typeof config.description];
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error(`Skill description must contain a non-empty translation for ${language}`);
      }
    }
    const unexpectedDescriptionLanguages = Object.keys(config.description).filter(language => !supportedLanguages.has(language));
    if (unexpectedDescriptionLanguages.length > 0) {
      throw new Error(`Skill description contains unsupported languages: ${unexpectedDescriptionLanguages.join(', ')}`);
    }
  }
}

/**
 * Adds the static taxonomy discriminator. IDs remain imported from *.ids.ts.
 * Authoring config is not mutated; fileLocation is added separately by the registry.
 */
export function buildSkillConfig<const T extends Skill_Config>(config: T): DeepReadonly<T & { readonly collection: Extract<Collection, 'skill'> }> {
  validateSkillConfig(config);
  const collection: Extract<Collection, 'skill'> = 'skill';
  return { ...config, collection } as DeepReadonly<T & { readonly collection: Extract<Collection, 'skill'> }>;
}

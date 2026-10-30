import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';
import type { Collection } from '@svitlo/contracts/content';
import type { Skill_Config, SkillDescription_Config } from '@svitlo/contracts/taxonomy';
import type { DeepReadonly } from '@svitlo/contracts/content';
import { validateSkillUuid } from './validateSkillReferences.utils';

const supportedLanguages = new Set<string>(DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language));

/**
 * Shared validation for all taxonomy authoring configs.
 * This does not create any collection, entity or external relationship.
 */
export function validateSkillConfig(
  config: Pick<Skill_Config, 'id' | 'name' | 'slug'> & { description?: SkillDescription_Config },
  requireFrontendDescription = false,
): void {
  if (!config) {
    throw new Error('Skill id must be a UUID');
  }
  validateSkillUuid(config.id, 'Skill id');

  // Older Mathematics configs may omit slug until their independently owned migration.
  if (config.slug !== undefined &&
      (typeof config.slug !== 'string' || !/^[a-z][A-Za-z0-9]*$/.test(config.slug))) {
    throw new Error('Taxonomy slug must be an English lowerCamelCase identifier');
  }

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

  // Skills require descriptions; Groups and Domains still permit legacy omissions.
  if (requireFrontendDescription && config.description === undefined) {
    throw new Error('Skill description is required');
  }
  if (config.description !== undefined) {
    const description = config.description;
    if (!description || typeof description !== 'object' || Array.isArray(description)) {
      throw new Error('Skill description must be an object with a methodological string');
    }
    if (typeof description.methodological !== 'string' || description.methodological.trim() === '') {
      throw new Error('Skill description.methodological must be non-empty English text');
    }

    const unexpectedKeys = Object.keys(description).filter(key => key !== 'methodological' && key !== 'fe');
    if (unexpectedKeys.length > 0) {
      throw new Error('Skill description contains unsupported fields: ' + unexpectedKeys.join(', '));
    }

    if (requireFrontendDescription && description.fe === undefined) {
      throw new Error('Skill description.fe must contain all supported languages');
    }
    if (description.fe !== undefined) {
      if (!description.fe || typeof description.fe !== 'object' || Array.isArray(description.fe)) {
        throw new Error('Skill description.fe must contain all supported languages');
      }
      for (const language of supportedLanguages) {
        const value = description.fe[language as keyof typeof description.fe];
        if (typeof value !== 'string' || value.trim() === '') {
          throw new Error('Skill description.fe must contain a non-empty translation for ' + language);
        }
      }
      const extraLanguages = Object.keys(description.fe).filter(language => !supportedLanguages.has(language));
      if (extraLanguages.length > 0) {
        throw new Error('Skill description.fe contains unsupported languages: ' + extraLanguages.join(', '));
      }
    }
  }
}

/**
 * Adds the static taxonomy discriminator. IDs remain imported from *.ids.ts.
 * Authoring config is not mutated; fileLocation is added separately by the registry.
 */
export function buildSkillConfig<const T extends Skill_Config>(config: T): DeepReadonly<T & { readonly collection: Extract<Collection, 'skill'> }> {
  validateSkillConfig(config, true);
  const collection: Extract<Collection, 'skill'> = 'skill';
  return { ...config, collection } as DeepReadonly<T & { readonly collection: Extract<Collection, 'skill'> }>;
}

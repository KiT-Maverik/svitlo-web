import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';
import type { Skill_Config } from '../../../types/content/skill.types';

const supportedLocales = new Set<string>(
  DEFAULT_SUPPORTED_LANGUAGES.map(({ locale }) => locale),
);

/**
 * Validate a skill definition without modifying it or inventing external relationships.
 *
 * The caller supplies only the semantic ID and all localized names.
 * A separate build-time source index supplies fileLocation when registering skills.
 */
export function buildSkillConfig<const T extends Skill_Config>(config: T): T {
  if (!config || typeof config.id !== 'string' || config.id.trim() === '') {
    throw new Error('Skill id must be a non-empty string');
  }

  if (!config.name || typeof config.name !== 'object' || Array.isArray(config.name)) {
    throw new Error('Skill name must contain all supported locales');
  }

  for (const locale of supportedLocales) {
    const value = config.name[locale as keyof typeof config.name];
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error(`Skill name must contain a non-empty translation for ${locale}`);
    }
  }

  const unexpected = Object.keys(config.name).filter(locale => !supportedLocales.has(locale));
  if (unexpected.length > 0) {
    throw new Error(`Skill name contains unsupported locales: ${unexpected.join(', ')}`);
  }

  return config;
}

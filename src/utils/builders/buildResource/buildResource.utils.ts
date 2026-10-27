import type { LanguageCode, Locale, Resource, Resource_Config, TextResource, TextResource_Config } from '@types';
import { FALLBACK_LANGUAGE, getLanguageCode } from '../../../types/languages';

function localized(values: Partial<Record<Locale, string>>, locale: Locale): string {
  const value = values[locale] ?? values['en-US'] ?? Object.values(values)[0];
  if (value === undefined) throw new Error(`Resource has no value for ${locale}`);
  return value;
}

export function buildTextResource(config: TextResource_Config, locale: Locale): TextResource {
  const language = getLanguageCode(locale);
  const values: Partial<Record<LanguageCode, string>> = config.value;
  const value = values[language] ?? values[FALLBACK_LANGUAGE] ?? Object.values(values)[0];
  if (value === undefined) throw new Error(`Resource has no value for ${locale}`);
  return { id: config.id, blockType: 'text', locale, value };
}

export function buildResource(config: Resource_Config, locale: Locale): Resource {
  switch (config.blockType) {
    case 'text':
      return buildTextResource(config, locale);
    case 'scene':
      return config;
    case 'markdown':
      return { id: config.id, blockType: 'markdown', locale, fileLocation: localized(config.fileLocation, locale) };
    case 'audio':
      return {
        id: config.id,
        blockType: 'audio',
        locale,
        fileLocation: localized(config.fileLocation, locale),
        title: localized(config.title, locale),
        description: localized(config.description, locale),
      };
    case 'video':
      return {
        id: config.id,
        blockType: 'video',
        locale,
        fileLocation: localized(config.fileLocation, locale),
        poster: localized(config.poster, locale),
      };
    case 'image':
      return {
        id: config.id,
        blockType: 'image',
        locale,
        fileLocation: localized(config.fileLocation, locale),
        alt: localized(config.alt, locale),
      };
    case 'code':
      return {
        id: config.id,
        blockType: 'code',
        locale,
        fileLocation: localized(config.fileLocation, locale),
        codeParams: config.codeParams.map(param => ({
          selector: param.selector,
          value: localized(param.values, locale),
        })),
      };
  }
}

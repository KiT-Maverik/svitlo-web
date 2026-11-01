import type { LanguageCode, Locale } from '../../../types/languages';
import type { DeepReadonly } from '@svitlo/contracts/content';
import type { ContentBlock, ContentBlock_Config, TextContentBlock, TextContentBlock_Config } from '@svitlo/contracts/content';
import { FALLBACK_LANGUAGE, getLanguageCode } from '../../../types/languages';

function localized(values: Readonly<Partial<Record<Locale, string>>>, locale: Locale): string {
  const value = values[locale] ?? values['en-US'] ?? Object.values(values)[0];
  if (value === undefined) throw new Error(`ContentBlock has no value for ${locale}`);
  return value;
}

export function buildTextContentBlock(config: DeepReadonly<TextContentBlock_Config>, locale: Locale): TextContentBlock {
  const language = getLanguageCode(locale);
  const values: Partial<Record<LanguageCode, string>> = config.value;
  const value = values[language] ?? values[FALLBACK_LANGUAGE] ?? Object.values(values)[0];
  if (value === undefined) throw new Error(`ContentBlock has no value for ${locale}`);
  return { id: config.id, blockType: 'text', locale, value };
}

export function buildContentBlock(config: DeepReadonly<ContentBlock_Config>, locale: Locale): ContentBlock {
  switch (config.blockType) {
    case 'text':
      return buildTextContentBlock(config, locale);
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

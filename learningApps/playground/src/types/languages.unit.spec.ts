import { describe, expect, it } from 'vitest';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@svitlo/engine/localization';
import type { LanguageDefinition } from '@svitlo/engine/localization';

describe('Language definitions', () => {
  it('describes language metadata without duplicating flag presentation data', () => {
    expect(DEFAULT_SUPPORTED_LANGUAGES).toHaveLength(28);
    for (const language of DEFAULT_SUPPORTED_LANGUAGES) {
      expect(language).not.toHaveProperty('flag');
    }
  });

  it('registers six new locale variants with unique language codes', () => {
    const expected = ['lt-LT', 'lv-LV', 'et-EE', 'be-tarask', 'ka-GE', 'kk-Cyrl-KZ'];
    for (const locale of expected) {
      expect(DEFAULT_SUPPORTED_LANGUAGES.some(language => language.locale === locale)).toBe(true);
    }
    expect(new Set(DEFAULT_SUPPORTED_LANGUAGES.map(language => language.locale)).size).toBe(28);
    expect(new Set(DEFAULT_SUPPORTED_LANGUAGES.map(language => language.language)).size).toBe(28);
  });

  it('keeps the public language contract independent from flag assets', () => {
    const descriptor: LanguageDefinition = DEFAULT_SUPPORTED_LANGUAGES[0];
    expect(descriptor.locale).toBe('en-US');
    expect(descriptor.language).toBe('en');
  });
});

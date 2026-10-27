import { describe, expect, it } from 'vitest';
import { DEFAULT_SUPPORTED_LANGUAGES, type LanguageDefinition } from './languages';

describe('Language definitions', () => {
  it('describes language metadata without duplicating flag presentation data', () => {
    expect(DEFAULT_SUPPORTED_LANGUAGES).toHaveLength(22);
    for (const language of DEFAULT_SUPPORTED_LANGUAGES) {
      expect(language).not.toHaveProperty('flag');
    }
  });

  it('keeps the public language contract independent from flag assets', () => {
    const descriptor: LanguageDefinition = DEFAULT_SUPPORTED_LANGUAGES[0];
    expect(descriptor.locale).toBe('en-US');
    expect(descriptor.language).toBe('en');
  });
});

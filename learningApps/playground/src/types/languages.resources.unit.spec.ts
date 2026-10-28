import { describe, expect, it } from 'vitest';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@svitlo/engine/localization';
import { getLearningLayoutMessages } from '@svitlo/ui-kit/learning-layout/locales';

const additionalLocales = ['lt-LT', 'lv-LV', 'et-EE', 'be-tarask', 'ka-GE', 'kk-Cyrl-KZ'] as const;
const languages = ['lt', 'lv', 'et', 'be', 'ka', 'kk'] as const;

describe('Playground internationalization', () => {
  it('registers all extended locales with the correct language codes', () => {
    for (let i = 0; i < additionalLocales.length; i++) {
      expect(DEFAULT_SUPPORTED_LANGUAGES.find(item => item.locale === additionalLocales[i])?.language).toBe(languages[i]);
    }
  });

  it('resolves reusable layout labels for extended locales', () => {
    for (const locale of additionalLocales) expect(getLearningLayoutMessages(locale).brand).toBeTruthy();
  });
});

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../types/languages';
import type { TextContentBlock_AllLanguages_Config } from '../../content';
import { createTextContentBlock } from './createTextContentBlock.utils';

const values = Object.fromEntries(
  DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => [language, language]),
) as TextContentBlock_AllLanguages_Config;

describe('Utils', () => {
  describe('CreateTextContentBlock', () => {
    describe('Metadata', () => {
      it('should create a text configuration that declares all locales by default', () => {
        assert.deepEqual(createTextContentBlock('title', values), {
          id: 'title',
          blockType: 'text',
          allLocales: true,
          value: values,
        });
      });

      it('should create a configuration for explicitly selected locales', () => {
        assert.deepEqual(
          createTextContentBlock(
            'title',
            { uk: 'Світло' },
            {
              locales: { only: ['uk'] },
            },
          ),
          {
            id: 'title',
            blockType: 'text',
            allLocales: false,
            value: { uk: 'Світло' },
          },
        );
      });

      it('should support inclusion-based locale selection', () => {
        const result = createTextContentBlock('title', values, {
          locales: { include: ['pl'] },
        });
        assert.equal(result.allLocales, false);
        assert.equal(result.value['pl'], 'pl');
      });

      it('should support exclusion-based locale selection', () => {
        const withoutEnglish = Object.fromEntries(
          DEFAULT_SUPPORTED_LANGUAGES.filter(({ language }) => language !== 'en').map(({ language }) => [
            language,
            language,
          ]),
        ) as Record<Exclude<keyof TextContentBlock_AllLanguages_Config, 'en'>, string>;
        const result = createTextContentBlock('title', withoutEnglish, {
          locales: { exclude: ['en'] },
        });
        assert.equal(result.allLocales, false);
        assert.deepEqual(result.value, withoutEnglish);
      });

      it('should retain an empty identifier and empty selected translation as supplied', () => {
        const result = createTextContentBlock(
          '',
          { uk: '' },
          {
            locales: { only: ['uk'] },
          },
        );
        assert.deepEqual(result, { id: '', blockType: 'text', allLocales: false, value: { uk: '' } });
      });
    });

    describe('Input identity', () => {
      it('should preserve the supplied values object by reference', () => {
        const result = createTextContentBlock('title', values);
        assert.strictEqual(result.value, values);
      });

      it('should not change the supplied localized values', () => {
        const original = { uk: 'Світло', pl: 'Światło' };
        const before = { ...original };
        createTextContentBlock('title', original, { locales: { only: ['uk', 'pl'] } });
        assert.deepEqual(original, before);
      });
    });
  });
});

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../types/languages';
import type { Resource_AllLocales_Config } from '@types';
import { createTextResource } from './CreateTextResource.utils';

const values = Object.fromEntries(
  DEFAULT_SUPPORTED_LANGUAGES.map(({ locale }) => [locale, locale]),
) as Resource_AllLocales_Config;

describe('Utils', () => {
  describe('CreateTextResource', () => {
    describe('Metadata', () => {
      it('should create a text configuration that declares all locales by default', () => {
        assert.deepEqual(createTextResource('title', values), {
          id: 'title', blockType: 'text', allLocales: true, value: values,
        });
      });

      it('should create a configuration for explicitly selected locales', () => {
        assert.deepEqual(createTextResource('title', { 'uk-UA': 'Світло' }, {
          locales: { only: ['uk-UA'] },
        }), {
          id: 'title', blockType: 'text', allLocales: false,
          value: { 'uk-UA': 'Світло' },
        });
      });

      it('should support inclusion-based locale selection', () => {
        const result = createTextResource('title', { 'pl-PL': 'Światło' }, {
          locales: { include: ['pl-PL'] },
        });
        assert.equal(result.allLocales, false);
        assert.equal(result.value['pl-PL'], 'Światło');
      });

      it('should support exclusion-based locale selection', () => {
        const withoutEnglish = Object.fromEntries(
          DEFAULT_SUPPORTED_LANGUAGES.filter(({ locale }) => locale !== 'en-US')
            .map(({ locale }) => [locale, locale]),
        ) as Record<Exclude<keyof Resource_AllLocales_Config, 'en-US'>, string>;
        const result = createTextResource('title', withoutEnglish, {
          locales: { exclude: ['en-US'] },
        });
        assert.equal(result.allLocales, false);
        assert.deepEqual(result.value, withoutEnglish);
      });

      it('should retain an empty identifier and empty selected translation as supplied', () => {
        const result = createTextResource('', { 'uk-UA': '' }, {
          locales: { only: ['uk-UA'] },
        });
        assert.deepEqual(result, { id: '', blockType: 'text', allLocales: false, value: { 'uk-UA': '' } });
      });
    });

    describe('Input identity', () => {
      it('should preserve the supplied values object by reference', () => {
        const result = createTextResource('title', values);
        assert.strictEqual(result.value, values);
      });

      it('should not change the supplied localized values', () => {
        const original = { 'uk-UA': 'Світло', 'pl-PL': 'Światło' };
        const before = { ...original };
        createTextResource('title', original, { locales: { only: ['uk-UA', 'pl-PL'] } });
        assert.deepEqual(original, before);
      });
    });
  });
});

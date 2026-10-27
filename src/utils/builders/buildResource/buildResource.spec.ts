import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { TextResource_Config } from '@types';
import { buildResource, buildTextResource } from './buildResource.utils';

const text: TextResource_Config = {
  id: 'title',
  blockType: 'text',
  allLocales: false,
  value: { en: 'Hello', uk: 'Привіт' },
};

describe('Utils', () => {
  describe('Builders', () => {
    describe('BuildResource', () => {
      describe('Localization', () => {
        it('should select the requested locale when its translation is available', () => {
          assert.deepEqual(buildTextResource(text, 'uk-UA'), {
            id: 'title',
            blockType: 'text',
            locale: 'uk-UA',
            value: 'Привіт',
          });
        });

        it('should fall back to English when the requested locale is unavailable', () => {
          assert.deepEqual(buildTextResource(text, 'pl-PL'), {
            id: 'title',
            blockType: 'text',
            locale: 'pl-PL',
            value: 'Hello',
          });
        });

        it('should fall back to the first configured locale when English is unavailable', () => {
          const configured: TextResource_Config = {
            id: 'only-uk',
            blockType: 'text',
            allLocales: false,
            value: { uk: 'Українською', pl: 'Po polsku' },
          };
          assert.equal(buildTextResource(configured, 'fr-FR').value, 'Українською');
        });

        it('should preserve an intentionally empty translation instead of falling back', () => {
          const configured: TextResource_Config = {
            ...text,
            value: { en: 'Hello', uk: '' },
          };
          assert.equal(buildTextResource(configured, 'uk-UA').value, '');
        });

        it('should reject a malformed resource that has no localized values', () => {
          // Invalid by design: verify the runtime error at the untyped data boundary.
          const malformed = { ...text, value: {} } as unknown as TextResource_Config;
          assert.throws(() => buildTextResource(malformed, 'uk-UA'), /Resource has no value for uk-UA/);
        });
      });

      describe('Resource kinds', () => {
        it('should build a text resource using the text builder contract', () => {
          assert.deepEqual(buildResource(text, 'en-US'), buildTextResource(text, 'en-US'));
        });

        it('should localize a markdown resource file location', () => {
          assert.deepEqual(
            buildResource(
              {
                id: 'md',
                blockType: 'markdown',
                allLocales: false,
                fileLocation: { 'en-US': '/english.md', 'uk-UA': '/ukrainian.md' },
              },
              'uk-UA',
            ),
            {
              id: 'md',
              blockType: 'markdown',
              locale: 'uk-UA',
              fileLocation: '/ukrainian.md',
            },
          );
        });

        it('should localize audio path, title, and description independently', () => {
          assert.deepEqual(
            buildResource(
              {
                id: 'audio',
                blockType: 'audio',
                allLocales: false,
                fileLocation: { 'en-US': '/en.mp3' },
                title: { 'uk-UA': 'Звук' },
                description: { 'en-US': 'English description', 'uk-UA': 'Опис' },
              },
              'uk-UA',
            ),
            {
              id: 'audio',
              blockType: 'audio',
              locale: 'uk-UA',
              fileLocation: '/en.mp3',
              title: 'Звук',
              description: 'Опис',
            },
          );
        });

        it('should localize video path and poster independently', () => {
          assert.deepEqual(
            buildResource(
              {
                id: 'video',
                blockType: 'video',
                allLocales: false,
                fileLocation: { 'en-US': '/en.mp4', 'uk-UA': '/uk.mp4' },
                poster: { 'en-US': '/poster.png' },
              },
              'uk-UA',
            ),
            {
              id: 'video',
              blockType: 'video',
              locale: 'uk-UA',
              fileLocation: '/uk.mp4',
              poster: '/poster.png',
            },
          );
        });

        it('should localize image path and alternative text independently', () => {
          assert.deepEqual(
            buildResource(
              {
                id: 'image',
                blockType: 'image',
                allLocales: false,
                fileLocation: { 'en-US': '/light.png' },
                alt: { 'en-US': 'Light', 'uk-UA': 'Світло' },
              },
              'uk-UA',
            ),
            {
              id: 'image',
              blockType: 'image',
              locale: 'uk-UA',
              fileLocation: '/light.png',
              alt: 'Світло',
            },
          );
        });

        it('should preserve code parameter order and selectors while localizing values', () => {
          assert.deepEqual(
            buildResource(
              {
                id: 'code',
                blockType: 'code',
                allLocales: false,
                fileLocation: { 'en-US': '/code.ts' },
                codeParams: [
                  { selector: 'first', values: { 'en-US': 'one', 'uk-UA': 'один' } },
                  { selector: 'second', values: { 'en-US': 'two', 'uk-UA': 'два' } },
                ],
              },
              'uk-UA',
            ),
            {
              id: 'code',
              blockType: 'code',
              locale: 'uk-UA',
              fileLocation: '/code.ts',
              codeParams: [
                { selector: 'first', value: 'один' },
                { selector: 'second', value: 'два' },
              ],
            },
          );
        });

        it('should return an empty parameter list for code without parameters', () => {
          const resource = buildResource(
            {
              id: 'code',
              blockType: 'code',
              allLocales: false,
              fileLocation: { 'en-US': '/code.ts' },
              codeParams: [],
            },
            'en-US',
          );
          assert.equal(resource.blockType, 'code');
          if (resource.blockType !== 'code') return assert.fail('Expected a code resource');
          assert.deepEqual(resource.codeParams, []);
        });
      });

      describe('Input integrity', () => {
        it('should not mutate the original localized text configuration', () => {
          const original = structuredClone(text);
          buildTextResource(text, 'uk-UA');
          assert.deepEqual(text, original);
        });

        it('should not mutate nested code parameter configurations', () => {
          const config = {
            id: 'code',
            blockType: 'code' as const,
            allLocales: false as const,
            fileLocation: { 'en-US': '/code.ts' },
            codeParams: [{ selector: 'name', values: { 'en-US': 'original' } }],
          };
          const original = structuredClone(config);
          buildResource(config, 'uk-UA');
          assert.deepEqual(config, original);
        });
      });
    });
  });
});

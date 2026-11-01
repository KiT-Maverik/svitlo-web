import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { TextContentBlock_Config } from '../../../content';
import { buildContentBlock, buildTextContentBlock } from './buildContentBlock.utils';

const text: TextContentBlock_Config = {
  id: 'title',
  blockType: 'text',
  allLocales: false,
  value: { en: 'Hello', uk: 'Привіт' },
};

describe('Utils', () => {
  describe('Builders', () => {
    describe('BuildContentBlock', () => {
      describe('Localization', () => {
        it('should select the requested locale when its translation is available', () => {
          assert.deepEqual(buildTextContentBlock(text, 'uk-UA'), {
            id: 'title',
            blockType: 'text',
            locale: 'uk-UA',
            value: 'Привіт',
          });
        });

        it('should fall back to English when the requested locale is unavailable', () => {
          assert.deepEqual(buildTextContentBlock(text, 'pl-PL'), {
            id: 'title',
            blockType: 'text',
            locale: 'pl-PL',
            value: 'Hello',
          });
        });

        it('should fall back to the first configured locale when English is unavailable', () => {
          const configured: TextContentBlock_Config = {
            id: 'only-uk',
            blockType: 'text',
            allLocales: false,
            value: { uk: 'Українською', pl: 'Po polsku' },
          };
          assert.equal(buildTextContentBlock(configured, 'fr-FR').value, 'Українською');
        });

        it('should preserve an intentionally empty translation instead of falling back', () => {
          const configured: TextContentBlock_Config = {
            ...text,
            value: { en: 'Hello', uk: '' },
          };
          assert.equal(buildTextContentBlock(configured, 'uk-UA').value, '');
        });

        it('should reject a malformed contentBlock that has no localized values', () => {
          // Invalid by design: verify the runtime error at the untyped data boundary.
          const malformed = { ...text, value: {} } as unknown as TextContentBlock_Config;
          assert.throws(() => buildTextContentBlock(malformed, 'uk-UA'), /ContentBlock has no value for uk-UA/);
        });
      });

      describe('ContentBlock kinds', () => {
        it('should build a text contentBlock using the text builder contract', () => {
          assert.deepEqual(buildContentBlock(text, 'en-US'), buildTextContentBlock(text, 'en-US'));
        });

        it('should localize a markdown contentBlock file location', () => {
          assert.deepEqual(
            buildContentBlock(
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
            buildContentBlock(
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
            buildContentBlock(
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
            buildContentBlock(
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
            buildContentBlock(
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
          const contentBlock = buildContentBlock(
            {
              id: 'code',
              blockType: 'code',
              allLocales: false,
              fileLocation: { 'en-US': '/code.ts' },
              codeParams: [],
            },
            'en-US',
          );
          assert.equal(contentBlock.blockType, 'code');
          if (contentBlock.blockType !== 'code') return assert.fail('Expected a code contentBlock');
          assert.deepEqual(contentBlock.codeParams, []);
        });
      });

      describe('Input integrity', () => {
        it('should not mutate the original localized text configuration', () => {
          const original = structuredClone(text);
          buildTextContentBlock(text, 'uk-UA');
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
          buildContentBlock(config, 'uk-UA');
          assert.deepEqual(config, original);
        });
      });
    });
  });
});

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@svitlo/engine/localization';
import { getLearningLayoutMessages } from '@svitlo/ui-kit/learning-layout/locales';

const root = process.cwd();
const newLanguages = ['lt', 'lv', 'et', 'be', 'ka', 'kk'] as const;
const newLocales = ['lt-LT', 'lv-LV', 'et-EE', 'be-tarask', 'ka-GE', 'kk-Cyrl-KZ'] as const;

function collectFiles(folder: string): string[] {
  return readdirSync(folder, { withFileTypes: true }).flatMap(entry => {
    const path = join(folder, entry.name);
    return entry.isDirectory() ? collectFiles(path) : [path];
  });
}

function countLanguageEntries(source: string, language: string): number {
  return [...source.matchAll(new RegExp(`(?:^|\\s)["']?${language}["']?\\s*:`, 'gm'))].length;
}

describe('Extended locale resource coverage', () => {
  it('registers each extended locale with its intended language code', () => {
    for (let index = 0; index < newLocales.length; index++) {
      expect(DEFAULT_SUPPORTED_LANGUAGES.find(item => item.locale === newLocales[index])?.language)
        .toBe(newLanguages[index]);
    }
  });

  it('includes six translations in every authored math taxonomy config', () => {
    const files = collectFiles(join(root, 'src/math/skillsTaxonomy'))
      .filter(file => file.endsWith('.data.ts') && !file.endsWith('index.data.ts'));
    expect(files.length).toBeGreaterThanOrEqual(358);

    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      for (const language of newLanguages) {
        expect(countLanguageEntries(source, language), `${file}: missing ${language}`).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it('includes localized values for every light-lesson text resource', () => {
    const files = collectFiles(join(root, 'src/content/howLightMoves'))
      .filter(file => file.endsWith('.data.ts'));

    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      const resources = source.split('createTextResource(').length - 1;
      if (!resources) continue;
      for (const language of newLanguages) {
        expect(countLanguageEntries(source, language), `${file}: missing ${language}`)
          .toBeGreaterThanOrEqual(resources);
      }
    }
  });

  it('provides every new language with each of the three theory Markdown resources', () => {
    const folder = join(root, 'src/content/howLightMoves/sections/theory/resources/markdown');
    for (const section of ['01', '02', '03']) {
      for (const language of newLanguages) {
        const source = readFileSync(join(folder, section, `${language}.md`), 'utf8');
        expect(source.trim().length).toBeGreaterThan(40);
      }
    }
  });

  it('provides locale dictionaries for the learner interface and lesson UI', () => {
    for (const locale of newLocales) expect(getLearningLayoutMessages(locale).brand).toBeTruthy();
    for (const folder of [
      'src/components/layout/LearningLayout/NavbarPreferences/locales',
      'src/components/pages/Lesson/locales',
    ]) {
      for (const locale of newLocales) {
        const source = readFileSync(join(root, folder, `${locale}.ts`), 'utf8');
        expect(source).toContain('export const locale');
      }
    }
  });
});

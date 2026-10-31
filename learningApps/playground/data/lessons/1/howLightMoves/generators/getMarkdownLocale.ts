import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_SUPPORTED_LANGUAGES, type LanguageCode } from '@svitlo/engine';

const defaultLanguageCodes = DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language);
const theoryDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const getMarkdownLocale = <T extends LanguageCode = LanguageCode>(
  path: string,
  languages: readonly T[] = defaultLanguageCodes as unknown as readonly T[],
): Record<T, string> => {
  const directory = resolve(theoryDirectory, path);
  const locale = {} as Record<T, string>;

  for (const language of languages) {
    const file = resolve(directory, `${language}.md`);
    let content: string;

    try {
      content = readFileSync(file, 'utf8');
    } catch (error) {
      throw new Error(`Missing Markdown locale file: ${file}`, { cause: error });
    }

    if (!content.trim()) {
      throw new Error(`Empty Markdown locale file: ${file}`);
    }

    locale[language] = content;
  }

  return locale;
};

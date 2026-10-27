import assert from 'node:assert/strict';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';

/**
 * Inspect an authored Skill name dictionary without relying on Prettier quote style
 * or the order in which language keys were inserted.
 *
 * This deliberately validates source-level literals rather than importing configs:
 * the import would require runtime resolution of TypeScript path aliases.
 */
export function assertSupportedTranslations(source: string, label: string): Record<string, string> {
  const block = source.match(/\bname:\s*\{([\s\S]*?)\n\s*\},?/)?.[1];
  assert.ok(block, `Missing localized name dictionary: ${label}`);

  const names: Record<string, string> = {};
  let count = 0;

  for (const raw of block.split('\n')) {
    const line = raw.trim();
    if (!line) continue;

    // Both 'lt': '...', "lt": "...", and lt: '...' are valid authoring styles.
    const entry = line.match(/^(?:['"])?([a-z]{2})(?:['"])?\s*:\s*(['"])(.*)\2,?$/);
    assert.ok(entry, `Invalid localized name entry in ${label}: ${line}`);
    const [, language, , value] = entry;
    assert.ok(!(language in names), `Duplicate language ${language} in ${label}`);
    assert.ok(value.trim(), `Empty translation for ${language} in ${label}`);
    names[language] = value.replace(/\\(['"\\])/g, '$1');
    count++;
  }

  const expected = DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language).sort();
  assert.equal(count, expected.length, `Wrong translation count in ${label}`);
  assert.deepEqual(Object.keys(names).sort(), expected, `Wrong locale set in ${label}`);
  return names;
}

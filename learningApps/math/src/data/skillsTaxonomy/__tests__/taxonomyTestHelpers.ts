import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@svitlo/engine/localization';

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

/**
 * The typed taxonomy Code files are canonical; staging Markdown can be partial or absent.
 * Check that declared Skills have matching local Code files and are exported at
 * the Skill collection level, without importing runtime TypeScript modules.
 */
export function assertTaxonomyCodeStructure(
  domain: string,
  groups: Record<string, readonly string[]>,
): void {
  const root = join(process.cwd(), 'src', 'data', 'skillsTaxonomy', domain);
  assert.ok(existsSync(join(root, domain + '.data.ts')), 'Missing Domain Code: ' + domain);
  for (const [group, skills] of Object.entries(groups)) {
    const folder = join(root, group);
    assert.ok(existsSync(join(folder, group + '.data.ts')), 'Missing Group Code: ' + group);
    const skillFolder = join(folder, 'skills');
    const actual = readdirSync(skillFolder).filter(name => name.endsWith('.data.ts') && name !== 'index.data.ts').sort();
    assert.deepEqual(actual, skills.map(name => name + '.data.ts').sort(), 'Source Skill files: ' + group);
    const ids = readFileSync(join(skillFolder, 'index.ids.ts'), 'utf8');
    const keys = [...ids.matchAll(/^\s*([A-Za-z]\w*):\s*['"][0-9a-f-]{36}['"],?$/gm)].map(match => match[1]).sort();
    assert.deepEqual(keys, [...skills].sort(), 'Skill ID dictionary: ' + group);
    const exports = readFileSync(join(skillFolder, 'index.data.ts'), 'utf8').trim().split('\n').sort();
    assert.deepEqual(exports,
      skills.map(key => `export { ${key}_Skill_Data } from './${key}.data';`).sort(),
      'Skill collection exports: ' + group,
    );
  }
}

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = join(process.cwd(), 'src', 'math', 'skillsTaxonomy', 'arithmetic');
const groups = {
  addition: 10,
  subtraction: 8,
  additionSubtraction: 13,
  multiply: 24,
  divide: 24,
} as const;
const locales = [
  'en',
  'zh',
  'hi',
  'es',
  'ar',
  'fr',
  'bn',
  'pt',
  'ur',
  'id',
  'de',
  'ja',
  'ko',
  'tr',
  'vi',
  'ta',
  'te',
  'mr',
  'ms',
  'he',
  'pl',
  'uk',
] as const;
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

function read(...parts: string[]): string {
  return readFileSync(join(root, ...parts), 'utf8');
}
function ids(content: string): Map<string, string> {
  return new Map(
    [...content.matchAll(/^  (\w+): '([0-9a-f-]{36})',/gm)].map((match): [string, string] => [match[1], match[2]]),
  );
}

describe('Arithmetic taxonomy completeness', () => {
  it('defines 79 localized Skills, stable UUIDs and five referenced Groups', () => {
    const all = new Set<string>();
    const refs = read('index.ids.ts');
    for (const [group, expected] of Object.entries(groups)) {
      const folder = join(root, group, 'skills');
      const dictionary = ids(read(group, 'skills', 'index.ids.ts'));
      assert.equal(dictionary.size, expected, group);
      const groupUuid = ids(read(group, group + '.ids.ts')).get(group);
      assert.ok(groupUuid && uuid.test(groupUuid), group + ' group UUID');
      assert.ok(refs.includes(group + ': ' + group + '_SkillGroup_Ids.' + group));
      assert.ok(!all.has(groupUuid), 'duplicate group UUID');
      all.add(groupUuid);

      const groupData = read(group, group + '.data.ts');
      assert.ok(groupData.includes('skillIds: ' + group + '_Skills_Ids'));
      const files = readdirSync(folder).filter(x => x.endsWith('.data.ts') && x !== 'index.data.ts');
      assert.equal(files.length, expected, group);
      const exports = read(group, 'skills', 'index.data.ts').trim().split('\n');
      assert.deepEqual(exports, [...exports].sort(), group + ' alphabetical exports');

      for (const [key, value] of dictionary) {
        assert.match(value, uuid, group + '/' + key);
        assert.ok(!all.has(value), 'Duplicate UUID ' + value);
        all.add(value);
        const data = read(group, 'skills', key + '.data.ts');
        assert.ok(data.includes('id: ' + group + '_Skills_Ids.' + key + ','));
        assert.ok(data.includes('export const ' + key + '_Skill_Data = buildSkillConfig('));
        assert.ok(exports.includes('export { ' + key + "_Skill_Data } from './" + key + ".data';"));
        const localizations = [...data.matchAll(/^    ([a-z]{2}): (.+),$/gm)];
        assert.deepEqual(
          localizations.map(m => m[1]),
          [...locales],
          group + '/' + key,
        );
        const names = localizations.map(m => JSON.parse(m[2]) as string);
        assert.ok(names.every(n => n.trim().length > 0 && !n.includes('undefined')));
      }
    }
    assert.equal(all.size, 84);
    assert.match(read('arithmetic.data.ts'), /groupIds: arithmetic_SkillGroups_Ids/);
  });
});

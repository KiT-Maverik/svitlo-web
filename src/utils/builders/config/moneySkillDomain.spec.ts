import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';

const taxonomy = join(process.cwd(), 'src', 'math', 'skillsTaxonomy');
const root = join(taxonomy, 'money');
const read = (path: string) => readFileSync(join(root, path), 'utf8');
const groups = {
  denominations: ['recognizeDenominations', 'composeAmount', 'compareAmounts'],
  transactions: ['calculateChange', 'unitPriceTotal', 'budgetConstraint'],
} as const;
const configs = [
  'money.data.ts',
  ...Object.entries(groups).flatMap(([group, skills]) => [
    group + '/' + group + '.data.ts',
    ...skills.map(skill => group + '/skills/' + skill + '.data.ts'),
  ]),
];
const idFiles = [
  'money.ids.ts',
  ...Object.keys(groups).flatMap(group => [group + '/' + group + '.ids.ts', group + '/skills/index.ids.ts']),
];
const uuidPattern = /'([0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})'/g;

describe('Money SkillDomain integrity', () => {
  it('implements exactly nine configs with all 22 nonempty localized names', () => {
    assert.equal(configs.length, 9);
    const languages = DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language).sort();
    for (const file of configs) {
      const dictionary = read(file).match(/name: \{([\s\S]*?)\n  \},/)?.[1];
      assert.ok(dictionary, 'Missing name dictionary: ' + file);
      const entries = [...dictionary.matchAll(/^    ([a-z]{2}): "([^"]+)",$/gm)];
      assert.deepEqual(entries.map(([, key]) => key).sort(), languages, file);
      assert.ok(
        entries.every(([, , value]) => value.trim().length > 0),
        file,
      );
    }
  });

  it('holds nine unique, static UUIDs, not colliding with other domains', () => {
    const own = idFiles.flatMap(file => [...read(file).matchAll(uuidPattern)].map(([, id]) => id));
    assert.equal(own.length, 9);
    assert.equal(new Set(own).size, 9);
    for (const file of idFiles) {
      assert.doesNotMatch(read(file), /randomUUID|uuidv4|generateUUID|\.data'/);
    }

    const walk = (directory: string): string[] =>
      readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) return walk(path);
        return entry.name.endsWith('.ids.ts') ? [path] : [];
      });
    const others = walk(taxonomy)
      .filter(path => !path.startsWith(root + '/'))
      .flatMap(path => [...readFileSync(path, 'utf8').matchAll(uuidPattern)].map(([, id]) => id));
    for (const id of own) assert.ok(!others.includes(id), 'Duplicate UUID outside Money: ' + id);
  });

  it('maintains explicit references for both groups and all six skills', () => {
    assert.match(read('money.data.ts'), /groupIds: money_SkillGroups_Ids/);
    for (const [group, skills] of Object.entries(groups)) {
      assert.ok(read('index.ids.ts').includes(group + ': ' + group + '_SkillGroup_Ids.' + group + ','));
      const groupData = read(group + '/' + group + '.data.ts');
      assert.ok(groupData.includes('skillIds: ' + group + '_Skills_Ids,'));
      const ids = read(group + '/skills/index.ids.ts');
      const exports = read(group + '/skills/index.data.ts')
        .trim()
        .split('\n');
      assert.equal(exports.length, skills.length);
      for (const skill of skills) {
        assert.ok(ids.includes(skill + ": '"), 'Missing Skill UUID: ' + skill);
        assert.ok(exports.includes('export { ' + skill + "_Skill_Data } from './" + skill + ".data';"));
        assert.ok(read(group + '/skills/' + skill + '.data.ts').includes('id: ' + group + '_Skills_Ids.' + skill));
      }
    }
  });
});

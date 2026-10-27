import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';

const root = join(process.cwd(), 'src', 'math', 'skillsTaxonomy');
const numeration = join(root, 'numeration');
const groupSkills = {
  notation: ['digits09', 'readWrite20', 'readWrite100', 'readWrite1000'],
  placeValue: [
    'flexiblePartition',
    'totalTensInNumber',
    'makeTen',
    'tensOnes',
    'makeHundred',
    'hundredsTensOnes',
    'digitPlaceValue',
    'zeroPlaceholder',
    'expandedForm',
    'regroupPlaceValues',
    'multipleRepresentations',
  ],
  comparison: ['moreLessEqual', 'comparisonSymbols', 'order20', 'order100', 'order1000'],
  numberLine: ['beforeAfterBetween', 'numberLine20', 'numberLine1000', 'distanceOnLine'],
  estimation: ['roundToTen', 'roundToHundred', 'estimateQuantity'],
} as const;

const source = (path: string): string => readFileSync(path, 'utf8');
const lines = (path: string): string[] =>
  source(path)
    .trim()
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

const languages = DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language);

/** Inspect authored configurations without importing TS modules through unresolved @/ aliases. */
function localizedNames(path: string): Record<string, string> {
  const content = source(path);
  const name = content.match(/\bname: \{\n([\s\S]*?)\n  \},/);
  assert.ok(name, `Missing localized name in ${path}`);
  const pairs = [...name[1].matchAll(/^\s{4}([a-z]{2}): "((?:\\.|[^"\\])*)",?$/gm)];
  assert.equal(pairs.length, languages.length, `Wrong translation count in ${path}`);
  const values = Object.fromEntries(pairs.map(([, language, value]) => [language, value]));
  assert.deepEqual(Object.keys(values).sort(), [...languages].sort(), `Wrong locale set in ${path}`);
  for (const language of languages) {
    assert.ok(values[language]?.trim(), `Blank ${language} in ${path}`);
  }
  return values;
}

describe('Natural Numbers taxonomy integrity', () => {
  it('has five complete groups, 27 actual Skill data files, and scoped barrels', () => {
    assert.equal(Object.keys(groupSkills).length, 5);
    assert.equal(
      Object.values(groupSkills).reduce((n, skills) => n + skills.length, 0),
      27,
    );
    assert.deepEqual(lines(join(numeration, 'index.data.ts')), [
      "export { numeration_SkillDomain_Data } from './numeration.data';",
    ]);

    const domainConfig = source(join(numeration, 'numeration.data.ts'));
    assert.match(domainConfig, /buildSkillDomainConfig\(/);
    assert.match(domainConfig, /groupIds: numeration_SkillGroups_Ids/);

    for (const [group, skills] of Object.entries(groupSkills)) {
      const dir = join(numeration, group);
      assert.deepEqual(lines(join(dir, 'index.data.ts')), [
        `export { ${group}_SkillGroup_Data } from './${group}.data';`,
      ]);
      assert.match(source(join(dir, `${group}.data.ts`)), /buildSkillGroupConfig\(/);
      assert.ok(source(join(numeration, 'index.ids.ts')).includes(`${group}: ${group}_SkillGroup_Ids.${group},`));
      assert.ok(source(join(dir, `${group}.data.ts`)).includes(`skillIds: ${group}_Skills_Ids,`));

      const skillsDir = join(dir, 'skills');
      const actualSkills = readdirSync(skillsDir).filter(
        filename => filename.endsWith('.data.ts') && filename !== 'index.data.ts',
      );
      assert.deepEqual(actualSkills.sort(), skills.map(skill => `${skill}.data.ts`).sort());
      assert.deepEqual(
        lines(join(skillsDir, 'index.data.ts')),
        skills
          .slice()
          .sort()
          .map(skill => `export { ${skill}_Skill_Data } from './${skill}.data';`),
      );

      const ids = source(join(skillsDir, 'index.ids.ts'));
      for (const skill of skills) {
        assert.match(ids, new RegExp(`\\b${skill}: '[0-9a-f-]{36}'`));
        const config = source(join(skillsDir, `${skill}.data.ts`));
        assert.match(config, /buildSkillConfig\(/);
        assert.ok(config.includes(`id: ${group}_Skills_Ids.${skill},`));
      }
    }
  });

  it('provides all 22 localized names and distinct parent/child names', () => {
    localizedNames(join(numeration, 'numeration.data.ts'));
    for (const [group, skills] of Object.entries(groupSkills)) {
      const dir = join(numeration, group);
      const groupNames = localizedNames(join(dir, `${group}.data.ts`));
      for (const skill of skills) {
        const names = localizedNames(join(dir, 'skills', `${skill}.data.ts`));
        for (const language of languages) {
          assert.notEqual(
            names[language],
            groupNames[language],
            `Skill name duplicates its group in ${language}: ${group}/${skill}`,
          );
        }
      }
    }
  });

  it('uses globally unique static UUID literals without data imports in ID files', () => {
    const seen = new Set<string>();
    const walk = (folder: string): void => {
      for (const entry of readdirSync(folder, { withFileTypes: true })) {
        const file = join(folder, entry.name);
        if (entry.isDirectory()) {
          walk(file);
          continue;
        }
        if (!entry.name.endsWith('.ids.ts')) continue;
        const content = source(file);
        assert.doesNotMatch(content, /from ['"][^'"]+\.data['"]/, `ID imports data: ${file}`);
        for (const [, id] of content.matchAll(
          /['"]([0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})['"]/gi,
        )) {
          assert.ok(!seen.has(id), `Duplicate static UUID: ${id}`);
          seen.add(id);
        }
      }
    };
    walk(root);
    assert.ok(seen.size >= 33 + 15);

    const numerationIds = [
      join(numeration, 'numeration.ids.ts'),
      ...Object.keys(groupSkills).flatMap(group => [
        join(numeration, group, `${group}.ids.ts`),
        join(numeration, group, 'skills', 'index.ids.ts'),
      ]),
    ];
    const ids = numerationIds.flatMap(path =>
      [
        ...source(path).matchAll(/['"]([0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})['"]/gi),
      ].map(match => match[1]),
    );
    assert.equal(ids.length, 33);
    assert.equal(new Set(ids).size, 33);
  });

  it('lists the 27 actual Skill configurations as Implemented in the inventory', () => {
    const inventory = source(join(process.cwd(), 'src', 'math', 'skills-inventory.md'));
    const section = inventory.split('### Domain 2. Натуральні числа (27)')[1]?.split('### Domain 3. Дроби')[0];
    assert.ok(section);
    assert.equal((section.match(/\| \*\*Implemented\*\* \|/g) ?? []).length, 27);
  });
});

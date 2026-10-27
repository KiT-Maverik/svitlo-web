import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';

const root = join(process.cwd(), 'math', 'skillsTaxonomy', 'time');

const groupSkills = {
  calendar: ['daySequence', 'leapYearDays', 'weekMonthYear', 'calendarInterval'],
  clock: ['read24HourClock', 'readHour', 'readHalfQuarter', 'readFiveMinute', 'readMinute'],
  duration: ['convertHoursMinutes', 'convertMinutesSeconds', 'eventDuration', 'findStartOrEnd'],
} as const;

const read = (path: string): string => readFileSync(join(root, path), 'utf8');
const lines = (source: string): string[] =>
  source
    .trim()
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

function ownIds(source: string): Record<string, string> {
  return Object.fromEntries([...source.matchAll(/^  (\w+): '([^']+)',?$/gm)].map(([, key, id]) => [key, id]));
}

function names(source: string): Record<string, string> {
  const match = source.match(/  name: \{\n([\s\S]*?)\n  \},/);
  assert.ok(match, 'Expected a localized name dictionary');

  return Object.fromEntries(
    match[1].split('\n').map(line => {
      const item = line.match(/^    ([a-z]{2}): ("(?:[^"\\]|\\.)*"),$/);
      assert.ok(item, `Invalid locale definition: ${line}`);
      return [item[1], JSON.parse(item[2]) as string];
    }),
  );
}

describe('Time skill taxonomy', () => {
  it('defines exactly three groups and thirteen independently authored skills', () => {
    const domain = read('time.data.ts');
    assert.match(domain, /id: time_SkillDomain_Ids\.time,/);
    assert.match(domain, /groupIds: time_SkillGroups_Ids,/);

    const groupIndex = read('index.ids.ts');
    assert.deepEqual(
      [...groupIndex.matchAll(/^  (\w+): \w+_SkillGroup_Ids\.\w+,?$/gm)].map(x => x[1]),
      Object.keys(groupSkills),
    );

    for (const [group, skills] of Object.entries(groupSkills)) {
      const groupData = read(`${group}/${group}.data.ts`);
      assert.ok(groupData.includes(`id: ${group}_SkillGroup_Ids.${group},`));
      assert.ok(groupData.includes(`skillIds: ${group}_Skills_Ids,`));

      const ids = ownIds(read(`${group}/skills/index.ids.ts`));
      assert.deepEqual(Object.keys(ids), skills);

      for (const skill of skills) {
        const source = read(`${group}/skills/${skill}.data.ts`);
        assert.ok(source.includes(`export const ${skill}_Skill_Data = buildSkillConfig({`));
        assert.ok(source.includes(`id: ${group}_Skills_Ids.${skill},`));
      }

      assert.deepEqual(
        lines(read(`${group}/skills/index.data.ts`)),
        [...skills].sort().map(skill => `export { ${skill}_Skill_Data } from './${skill}.data';`),
      );
    }
  });

  it('uses seventeen distinct, static UUIDs with no data imports in ID-only files', () => {
    const idSources = [
      read('time.ids.ts'),
      ...Object.keys(groupSkills).flatMap(group => [
        read(`${group}/${group}.ids.ts`),
        read(`${group}/skills/index.ids.ts`),
      ]),
    ];
    const ids = idSources.flatMap(source => Object.values(ownIds(source)));
    assert.equal(ids.length, 17);
    assert.equal(new Set(ids).size, 17);
    for (const id of ids) {
      assert.match(id, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    }
    for (const source of [...idSources, read('index.ids.ts')]) {
      assert.doesNotMatch(source, /_Data|buildSkill|randomUUID|uuidv4/);
    }
  });

  it('provides all 22 supported locales and distinct parent/child names', () => {
    const required = DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language);
    const domainNames = names(read('time.data.ts'));
    assert.deepEqual(Object.keys(domainNames), required);

    for (const [group, skills] of Object.entries(groupSkills)) {
      const groupNames = names(read(`${group}/${group}.data.ts`));
      assert.deepEqual(Object.keys(groupNames), required);

      for (const skill of skills) {
        const skillNames = names(read(`${group}/skills/${skill}.data.ts`));
        assert.deepEqual(Object.keys(skillNames), required);
        for (const language of required) {
          assert.ok(skillNames[language].trim(), `Missing ${language} for ${skill}`);
          assert.notEqual(skillNames[language], groupNames[language], `Duplicate group name for ${skill}/${language}`);
        }
      }
    }
  });
});

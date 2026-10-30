import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@svitlo/engine/localization';
import { assertTaxonomyCodeStructure, assertSupportedTranslations } from './taxonomyTestHelpers';

const root = join(process.cwd(), 'src', 'data', 'skillsTaxonomy');
const domain = join(root, 'measurement');
const locales = DEFAULT_SUPPORTED_LANGUAGES.map(item => item.language);
const names = {
  length: [
    'compareLength',
    'nonstandardLength',
    'useRuler',
    'measureCentimeters',
    'drawSegmentCentimeters',
    'millimeters',
    'decimeters',
    'meters',
    'kilometers',
    'estimateLength',
    'addSubtractLengths',
  ],
  mass: ['centnerKilogram', 'compareMass', 'kilogramGram', 'weighObject'],
  capacity: ['capacityConcept', 'liter', 'milliliter'],
  temperature: ['readTemperature'],
  general: ['standardUnitPurpose', 'chooseAppropriateUnit', 'wordProblemsMeasures'],
} as const;

function read(path: string): string {
  return readFileSync(path, 'utf8');
}

function getNames(path: string): Record<string, string> {
  return assertSupportedTranslations(read(path), path);
}

function ids(path: string): Record<string, string> {
  return Object.fromEntries(
    [...read(path).matchAll(/^\s+(\w+): '([0-9a-f-]+)',?$/gm)].map(([, key, value]) => [key, value]),
  );
}

describe('Measurement taxonomy', () => {
  it('implements five groups and 22 Skills with canonical Code links', () => {
    assert.deepEqual(
      readdirSync(domain, { withFileTypes: true })
        .filter(item => item.isDirectory())
        .map(item => item.name)
        .sort(),
      Object.keys(names).sort(),
    );
    for (const [group, skills] of Object.entries(names)) {
      const dir = join(domain, group, 'skills');
      assert.deepEqual(
        readdirSync(dir)
          .filter(name => name.endsWith('.data.ts') && name !== 'index.data.ts')
          .sort(),
        skills.map(key => key + '.data.ts').sort(),
      );
      assert.deepEqual(
        read(join(dir, 'index.data.ts')).trim().split('\n'),
        skills.map(key => 'export { ' + key + "_Skill_Data } from './" + key + ".data';").sort(),
      );
    }
    assertTaxonomyCodeStructure('measurement', names);
  });

  it('uses stable, unique UUIDs with separate ID-only references', () => {
    const seen = new Set<string>();
    const check = (value: string): void => {
      assert.match(value, /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
      assert.ok(!seen.has(value), 'Duplicate UUID: ' + value);
      seen.add(value);

    };
    const domainIds = ids(join(domain, 'measurement.ids.ts'));
    assert.deepEqual(Object.keys(domainIds), ['measurement']);
    check(domainIds.measurement);
    assert.ok(read(join(domain, 'measurement.data.ts')).includes('groupIds: measurement_SkillGroups_Ids'));
    const groupLinks = read(join(domain, 'index.ids.ts'));
    for (const [group, skills] of Object.entries(names)) {
      const groupIds = ids(join(domain, group, group + '.ids.ts'));
      assert.deepEqual(Object.keys(groupIds), [group]);
      check(groupIds[group]);
      assert.ok(groupLinks.includes(group + ': ' + group + '_SkillGroup_Ids.' + group + ','));
      assert.ok(read(join(domain, group, group + '.data.ts')).includes('skillIds: ' + group + '_Skills_Ids'));
      const skillIds = ids(join(domain, group, 'skills', 'index.ids.ts'));
      assert.deepEqual(Object.keys(skillIds).sort(), [...skills].sort());
      for (const key of skills) {
        const file = read(join(domain, group, 'skills', key + '.data.ts'));
        assert.ok(file.includes('id: ' + group + '_Skills_Ids.' + key + ','));
        assert.doesNotMatch(file, /from ['"][^'"]+\.data['"]/);
        const value = skillIds[key];
        check(value);
      }
    }
    assert.equal(seen.size, 28);
  });

  it('provides all supported translations with distinct Group and Skill names', () => {
    assert.equal(locales.length, DEFAULT_SUPPORTED_LANGUAGES.length);
    getNames(join(domain, 'measurement.data.ts'));
    for (const [group, skills] of Object.entries(names)) {
      const parent = getNames(join(domain, group, group + '.data.ts'));
      for (const key of skills) {
        const child = getNames(join(domain, group, 'skills', key + '.data.ts'));
        for (const language of locales) assert.notEqual(child[language], parent[language]);
      }
    }
  });
});

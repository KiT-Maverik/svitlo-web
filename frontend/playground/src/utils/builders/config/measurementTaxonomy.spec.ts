import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';
import { assertSupportedTranslations } from './taxonomyTestHelpers';

const root = join(process.cwd(), 'src', 'math', 'skillsTaxonomy');
const domain = join(root, 'measurement');
const inventory = readFileSync(join(process.cwd(), 'src', 'math', 'skills-inventory.md'), 'utf8');
const migration = readFileSync(join(root, 'UUID-MIGRATION.md'), 'utf8');
const locales = DEFAULT_SUPPORTED_LANGUAGES.map(item => item.language);
const names = {
  length: [
    'compareLength',
    'nonstandardLength',
    'rulerZero',
    'measureCentimeters',
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

const expectedEditorial = [
  'compare-length',
  'nonstandard-length',
  'ruler-zero',
  'measure-centimeters',
  'millimeters',
  'decimeters',
  'meters',
  'kilometers',
  'estimate-length',
  'add-subtract-lengths',
  'centner-kilogram',
  'compare-mass',
  'kilogram-gram',
  'weigh-object',
  'capacity-concept',
  'liter',
  'milliliter',
  'temperature-read',
  'standard-unit-purpose',
  'choose-appropriate-unit',
  'word-problems-measures',
];

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
  it('implements exactly the inventory groups and 21 Skills', () => {
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
    const domainInventory = inventory.split('### Domain 7.')[1]?.split('### Domain 8.')[0];
    assert.ok(domainInventory);
    const rows = [...domainInventory.matchAll(/^\|\s*`(math\.measure\.[^`]+)`\s*\|[^\n]+$/gm)];
    assert.deepEqual(rows.map(row => row[1]).sort(), expectedEditorial.map(key => 'math.measure.' + key).sort());
    assert.ok(rows.every(row => /\|\s*\*\*Implemented\*\*\s*\|\s*$/.test(row[0])));
  });

  it('uses stable, unique UUIDs with separate ID-only references', () => {
    const seen = new Set<string>();
    const check = (kind: string, editorial: string, value: string): void => {
      assert.match(value, /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
      assert.ok(!seen.has(value), 'Duplicate UUID: ' + value);
      seen.add(value);
      assert.ok(
        migration.split('\n').some(line => {
          const columns = line.split('|').map(column => column.trim());
          return columns[1] === kind && columns[2] === '`' + editorial + '`' && columns[3] === '`' + value + '`';
        }),
        `Missing migration entry: ${kind} ${editorial} ${value}`,
      );
    };
    const domainIds = ids(join(domain, 'measurement.ids.ts'));
    assert.deepEqual(Object.keys(domainIds), ['measurement']);
    check('domain', 'math.measurement', domainIds.measurement);
    assert.ok(read(join(domain, 'measurement.data.ts')).includes('groupIds: measurement_SkillGroups_Ids'));
    const groupLinks = read(join(domain, 'index.ids.ts'));
    let count = 0;
    for (const [group, skills] of Object.entries(names)) {
      const groupIds = ids(join(domain, group, group + '.ids.ts'));
      assert.deepEqual(Object.keys(groupIds), [group]);
      check('group', 'math.measurement.' + group, groupIds[group]);
      assert.ok(groupLinks.includes(group + ': ' + group + '_SkillGroup_Ids.' + group + ','));
      assert.ok(read(join(domain, group, group + '.data.ts')).includes('skillIds: ' + group + '_Skills_Ids'));
      const skillIds = ids(join(domain, group, 'skills', 'index.ids.ts'));
      assert.deepEqual(Object.keys(skillIds).sort(), [...skills].sort());
      for (const key of skills) {
        const file = read(join(domain, group, 'skills', key + '.data.ts'));
        assert.ok(file.includes('id: ' + group + '_Skills_Ids.' + key + ','));
        assert.doesNotMatch(file, /from ['"][^'"]+\.data['"]/);
        const value = skillIds[key];
        check('skill', 'math.measure.' + expectedEditorial[count++], value);
      }
    }
    assert.equal(seen.size, 27);
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

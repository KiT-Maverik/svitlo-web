import assert from 'node:assert/strict';
import { test } from 'node:test';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { assertSupportedTranslations } from './taxonomyTestHelpers';

const root = join(process.cwd(), 'src', 'data', 'skillsTaxonomy');

function read(path: string): string {
  return readFileSync(join(root, path), 'utf8');
}

function countSkills(path: string): number {
  return readdirSync(path, { withFileTypes: true }).reduce((total, entry) => {
    const full = join(path, entry.name);
    if (entry.isDirectory()) return total + countSkills(full);
    return total + Number(entry.isFile() && entry.name.endsWith('.data.ts') &&
      entry.name !== 'index.data.ts' && full.includes('/skills/'));
  }, 0);
}

test('merged regrouping competencies retain the original two-digit UUIDs without range ceilings', () => {
  for (const [group, id, oldKeys] of [
    ['arithmetic/addition', 'a1ff147a-bf4c-4cc9-ab9d-ccacd0a5fa47', ['twoDigitCarry', 'threeDigitCarry', 'carryErrorDetection']],
    ['arithmetic/subtraction', '5ef6de35-c2d8-4073-98d8-d8779eaa7875', ['twoDigitBorrow', 'threeDigitBorrow', 'borrowErrorDetection']],
  ] as const) {
    const path = group + '/skills/';
    const ids = read(path + 'index.ids.ts');
    assert.ok(ids.includes(`regrouping: '${id}'`), group);
    for (const old of oldKeys) {
      assert.ok(!ids.includes(old + ':'), 'Retired ID key ' + old);
      assert.ok(!existsSync(join(root, path, old + '.data.ts')), 'Retired Skill file ' + old);
    }
    const data = read(path + 'regrouping.data.ts');
    assert.match(data, /id: (addition|subtraction)_Skills_Ids.regrouping/);
    assert.match(data, /description: \{ methodological:/);
    assertSupportedTranslations(data, group + '/regrouping');
  }
});

test('length skills separate ruler usage, measuring and constructing with stable identities', () => {
  const path = 'measurement/length/skills/';
  const ids = read(path + 'index.ids.ts');
  const expected = {
    useRuler: '02a916c0-937f-41b8-a2d4-c48593b8798a',
    measureCentimeters: 'abb9261a-793e-48fd-8262-7cd2ca8df3d3',
    drawSegmentCentimeters: 'b86b08f1-e24c-4d95-a98c-8d6c664ea915',
  };
  for (const [key, id] of Object.entries(expected)) {
    assert.ok(ids.includes(`${key}: '${id}'`), key);
    const data = read(path + key + '.data.ts');
    assert.ok(data.includes('id: length_Skills_Ids.' + key), key);
    assertSupportedTranslations(data, key);
  }
  assert.ok(!ids.includes('rulerZero:'), 'Retired key must not be retained as an alias');
  assert.ok(!existsSync(join(root, path, 'rulerZero.data.ts')));
});

test('approved editorial removals are absent and Mathematics now has 277 Skills', () => {
  const retired = [
    'arithmetic/divide/skills/errorDetection.data.ts',
    'algebra/expressions/skills/identifyExpressionError.data.ts',
    'reasoning/verification/skills/spotCalculationError.data.ts',
    'data/collection/skills/classifyByAttribute.data.ts',
  ];
  for (const file of retired) assert.ok(!existsSync(join(root, file)), file);
  assert.equal(countSkills(root), 277);
});

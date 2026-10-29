import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { assertCanonicalTaxonomyCodeLinks, assertSupportedTranslations } from './taxonomyTestHelpers';

const root = join(process.cwd(), 'src', 'data', 'skillsTaxonomy');
const base = join(root, 'fractions');
const groups = {
  representation: [
    'wholeAndEqualParts',
    'fractionGreaterThanOne',
    'tenthsAsDivision',
    'unitFractionModel',
    'unitFractionRead',
    'denominatorMeaning',
    'numeratorMeaning',
    'nonUnitModel',
    'wholeDependence',
    'numberLine',
    'oneAsFraction',
    'equivalentVisual',
  ],
  comparison: ['compareSameNumerator', 'compareUnit', 'sameDenominatorModel'],
  arithmetic: ['addLikeDenominators', 'subtractLikeDenominators'],
  portions: ['findUnitPart', 'reconstructWhole'],
} as const;

const read = (...segments: string[]) => readFileSync(join(...segments), 'utf8');
const uuidPattern = /[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/gi;

function checkLocales(source: string, label: string): void {
  assertSupportedTranslations(source, label);
}

function getStaticIds(source: string): Readonly<Record<string, string>> {
  return Object.fromEntries([...source.matchAll(/^\s+(\w+): '([0-9a-f-]+)',$/gm)].map(([, key, id]) => [key, id]));
}

describe('Math / Fractions taxonomy', () => {
  it('defines a localized domain, four groups and 19 localized Skill files', () => {
    const domain = read(base, 'fractions.data.ts');
    checkLocales(domain, 'fractions domain');
    assert.ok(domain.includes('groupIds: fractions_SkillGroups_Ids'));
    const groupRefs = read(base, 'index.ids.ts');
    let total = 0;

    for (const [group, expectedSkills] of Object.entries(groups)) {
      const folder = join(base, group);
      assert.ok(groupRefs.includes(group + ': ' + group + '_SkillGroup_Ids.' + group));
      const groupData = read(folder, group + '.data.ts');
      checkLocales(groupData, group);
      assert.ok(groupData.includes('skillIds: ' + group + '_Skills_Ids'));
      const ids = getStaticIds(read(folder, 'skills', 'index.ids.ts'));
      assert.deepEqual(Object.keys(ids).sort(), [...expectedSkills].sort());

      const allFiles = readdirSync(join(folder, 'skills')).filter(
        filename => filename.endsWith('.data.ts') && filename !== 'index.data.ts',
      );
      assert.equal(allFiles.length, expectedSkills.length, group + ' Skill file count');

      const exports = read(folder, 'skills', 'index.data.ts').trim().split('\n');
      assert.deepEqual(
        exports,
        [...expectedSkills].sort().map(skill => 'export { ' + skill + "_Skill_Data } from './" + skill + ".data';"),
      );

      for (const skill of expectedSkills) {
        const data = read(folder, 'skills', skill + '.data.ts');
        checkLocales(data, group + '/' + skill);
        assert.ok(data.includes('export const ' + skill + '_Skill_Data = buildSkillConfig({'));
        assert.ok(data.includes('id: ' + group + '_Skills_Ids.' + skill + ','));
        total++;
      }
    }
    assert.equal(total, 19);
  });

  it('uses 24 unique static UUID literals for the domain, groups and skills', () => {
    const ids = [
      ...read(base, 'fractions.ids.ts').matchAll(uuidPattern),
      ...Object.keys(groups).flatMap(group => [
        ...read(base, group, group + '.ids.ts').matchAll(uuidPattern),
        ...read(base, group, 'skills', 'index.ids.ts').matchAll(uuidPattern),
      ]),
    ].map(match => match[0]);
    assert.equal(ids.length, 24);
    assert.equal(new Set(ids).size, 24);
  });

  it('links all 19 implemented Skills from the canonical taxonomy', () => {
    assertCanonicalTaxonomyCodeLinks('fractions', groups);
  });
});

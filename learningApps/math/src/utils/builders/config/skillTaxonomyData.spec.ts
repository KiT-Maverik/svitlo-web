import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { assertSupportedTranslations } from './taxonomyTestHelpers';

const taxonomy = join(process.cwd(), 'src', 'math', 'skillsTaxonomy');
const domain = join(taxonomy, 'data');
const expected: Record<string, readonly string[]> = {
  collection: [
    'classifyByAttribute',
    'formulateInvestigationQuestion',
    'collectCounts',
    'tallyMarks',
    'fillSimpleTable',
  ],
  presentation: [
    'linePlotMeasurements',
    'readSimpleTable',
    'readPictograph',
    'buildPictograph',
    'readBarChart',
    'buildBarChart',
    'scaledChart',
  ],
  interpretation: ['compareCategories', 'interpretConclusion', 'missingInformation'],
};
const read = (path: string): string => readFileSync(path, 'utf8');
const uuidEntries = (source: string) =>
  [...source.matchAll(/^\s*(\w+): '([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})',?$/gm)].map(
    match => ({ key: match[1], id: match[2] }),
  );

describe('Data taxonomy source contracts', () => {
  it('has three groups and fifteen individually authored skills', () => {
    assert.deepEqual(
      readdirSync(domain, { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name)
        .sort(),
      Object.keys(expected).sort(),
    );
    let count = 0;
    for (const [group, keys] of Object.entries(expected)) {
      const folder = join(domain, group, 'skills');
      const actual = readdirSync(folder)
        .filter(name => name.endsWith('.data.ts') && name !== 'index.data.ts')
        .sort();
      assert.deepEqual(actual, keys.map(key => key + '.data.ts').sort());
      assert.deepEqual(
        uuidEntries(read(join(folder, 'index.ids.ts'))).map(item => item.key),
        [...keys],
      );
      assert.ok(read(join(domain, group, group + '.data.ts')).includes('skillIds: ' + group + '_Skills_Ids'));
      count += actual.length;
    }
    assert.equal(count, 15);
  });

  it('localizes every domain, group and skill name into all supported languages', () => {
    const paths = [join(domain, 'data.data.ts')];
    for (const [group, keys] of Object.entries(expected)) {
      paths.push(join(domain, group, group + '.data.ts'));
      for (const key of keys) paths.push(join(domain, group, 'skills', key + '.data.ts'));
    }
    assert.equal(paths.length, 19);
    for (const path of paths) {
      assert.ok(existsSync(path), path);
      const source = read(path);
      assertSupportedTranslations(source, path);
      assert.ok(!source.includes('fileLocation:'), path);
    }
  });

  it('keeps new UUID literals unique across the entire taxonomy', () => {
    const seen = new Map<string, string>();
    function visit(folder: string): void {
      for (const entry of readdirSync(folder, { withFileTypes: true })) {
        const path = join(folder, entry.name);
        if (entry.isDirectory()) visit(path);
        else if (entry.name.endsWith('.ids.ts')) {
          const source = read(path);
          assert.doesNotMatch(source, /randomUUID|uuidv4|Math\.random/);
          for (const { id } of uuidEntries(source)) {
            assert.ok(!seen.has(id), 'Duplicate UUID: ' + path + ' and ' + seen.get(id));
            seen.set(id, path);
          }
        }
      }
    }
    visit(taxonomy);
    assert.equal([...seen.values()].filter(path => path.startsWith(domain)).length, 19);
  });

  it('keeps domain, group and skill exports at their own collection levels', () => {
    assert.equal(read(join(domain, 'index.data.ts')).trim(), "export { data_SkillDomain_Data } from './data.data';");
    assert.ok(read(join(domain, 'data.data.ts')).includes('groupIds: data_SkillGroups_Ids'));
    for (const [group, keys] of Object.entries(expected)) {
      assert.equal(
        read(join(domain, group, 'index.data.ts')).trim(),
        'export { ' + group + "_SkillGroup_Data } from './" + group + ".data';",
      );
      const actual = read(join(domain, group, 'skills', 'index.data.ts'))
        .trim()
        .split('\n')
        .sort();
      assert.deepEqual(actual, keys.map(key => 'export { ' + key + "_Skill_Data } from './" + key + ".data';").sort());
    }
  });

  it('marks exactly the authored skills as Implemented in the inventory', () => {
    const inventory = read(join(process.cwd(), 'src', 'math', 'skills-inventory.md'));
    const dataSection = inventory.split('### Domain 10. Дані (15)')[1].split('### Domain 11.')[0];
    const rows = dataSection.split('\n').filter(line => line.includes('| ' + String.fromCharCode(96) + 'math.data.'));
    assert.equal(rows.length, 15);
    for (const row of rows) assert.ok(row.endsWith('| **Implemented** |'));
    assert.ok(dataSection.includes('3/3 Group configs + 15/15 individual Skills'));
  });
});

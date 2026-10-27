import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { assertSupportedTranslations } from './taxonomyTestHelpers';

const root = join(process.cwd(), 'src', 'math');
const taxonomy = join(root, 'skillsTaxonomy');
const geometry = join(taxonomy, 'geometry');
const groups = {
  orientation: ['positionWords', 'gridMapNavigation', 'spatialOrientationPath'],
  figures: ['identify2dShapes', 'shapeAttributes', 'polygon', 'triangleRectangleSquare', 'composeDecomposeShapes'],
  solids: ['shapeOnSolidSurface', 'identify3dSolids', 'spatialSolidsAttributes'],
  lines: ['linesAndPoints', 'segment', 'ray', 'closedOpenLines', 'parallelPerpendicular'],
  angles: ['angleAsTurn', 'rightAngle', 'angleTypes'],
  circles: ['circleDisk', 'radiusDiameter', 'drawCircle'],
  transformations: ['turnsQuarters', 'translationsReflections', 'reflectionSymmetry'],
  perimeter: ['measurePerimeter', 'rectanglePerimeter', 'squarePerimeter', 'unknownSideFromPerimeter'],
  area: ['compositeArea', 'areaAsCovering', 'countUnitSquares', 'rectangleAreaModel'],
  perimeterArea: ['areaPerimeterContrast', 'perimeterVsArea'],
} as const;
const languageCodes = Object.keys(assertSupportedTranslations(readFileSync(join(geometry, 'geometry.data.ts'), 'utf8'), 'geometry'));
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

const read = (path: string) => readFileSync(path, 'utf8');
const lines = (path: string) =>
  read(path)
    .trim()
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

function names(source: string, label: string): Record<string, string> {
  return assertSupportedTranslations(source, label);
}

function validTranslations(path: string): Record<string, string> {
  const result = names(read(path), path);
  assert.deepEqual(Object.keys(result).sort(), [...languageCodes].sort(), path);
  for (const value of Object.values(result)) {
    assert.ok(value.trim().length > 0, path);
  }
  return result;
}

function idDictionary(path: string): Map<string, string> {
  const entries = Array.from(read(path).matchAll(/^\s{2}(\w+): '([0-9a-f-]{36})',?$/gm)).map(
    ([, key, id]) => [key, id] as const,
  );
  assert.ok(entries.length > 0, 'Empty UUID dictionary: ' + path);
  for (const [, id] of entries) assert.match(id, uuidPattern, path);
  return new Map(entries);
}

describe('Geometry taxonomy integrity', () => {
  it('implements exactly 10 groups and 35 localized skills with valid unique UUIDs', () => {
    const allIds = new Set<string>();
    const register = (id: string) => {
      assert.ok(!allIds.has(id), 'Duplicate UUID: ' + id);
      allIds.add(id);
    };
    const domainIds = idDictionary(join(geometry, 'geometry.ids.ts'));
    assert.equal(domainIds.size, 1);
    register(domainIds.get('geometry')!);
    validTranslations(join(geometry, 'geometry.data.ts'));
    const groupReferences = read(join(geometry, 'index.ids.ts'));
    const migration = read(join(taxonomy, 'UUID-MIGRATION.md'));
    let totalSkills = 0;
    for (const [group, skillNames] of Object.entries(groups)) {
      const dir = join(geometry, group);
      const source = read(join(dir, group + '.data.ts'));
      const groupId = idDictionary(join(dir, group + '.ids.ts')).get(group);
      assert.ok(groupId, 'Missing group ID: ' + group);
      register(groupId);
      assert.ok(groupReferences.includes(group + ': ' + group + '_SkillGroup_Ids.' + group));
      assert.ok(source.includes('skillIds: ' + group + '_Skills_Ids'));
      const groupNames = validTranslations(join(dir, group + '.data.ts'));
      assert.deepEqual(lines(join(dir, 'index.data.ts')), [
        'export { ' + group + "_SkillGroup_Data } from './" + group + ".data';",
      ]);
      const skillDirectory = join(dir, 'skills');
      const ids = idDictionary(join(skillDirectory, 'index.ids.ts'));
      assert.deepEqual([...ids.keys()].sort(), [...skillNames].sort(), group);
      assert.deepEqual(
        readdirSync(skillDirectory)
          .filter(file => file.endsWith('.data.ts') && file !== 'index.data.ts')
          .sort(),
        skillNames.map(name => name + '.data.ts').sort(),
        group,
      );
      assert.deepEqual(
        lines(join(skillDirectory, 'index.data.ts')),
        skillNames.map(name => 'export { ' + name + "_Skill_Data } from './" + name + ".data';").sort(),
        group,
      );
      for (const skill of skillNames) {
        const id = ids.get(skill)!;
        register(id);
        assert.ok(migration.includes('`' + id + '`'), 'Missing migration UUID: ' + id);
        const data = read(join(skillDirectory, skill + '.data.ts'));
        assert.ok(data.includes('id: ' + group + '_Skills_Ids.' + skill));
        assert.ok(data.includes('export const ' + skill + '_Skill_Data = buildSkillConfig('));
        const skillNamesByLocale = validTranslations(join(skillDirectory, skill + '.data.ts'));
        for (const code of languageCodes) {
          assert.notEqual(skillNamesByLocale[code], groupNames[code], group + '/' + skill + ':' + code);
        }
        totalSkills++;
      }
    }
    assert.equal(totalSkills, 35);
    assert.equal(allIds.size, 46);
    assert.deepEqual(
      readdirSync(geometry, { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name)
        .sort(),
      Object.keys(groups).sort(),
    );
  });

  it('marks all 35 materialized skills and 10 groups as implemented in the inventory', () => {
    const inventory = read(join(root, 'skills-inventory.md'));
    const section = inventory.split('### Domain 6. Геометрія (35)')[1]?.split('### Domain 7.')[0];
    assert.ok(section);
    assert.match(section, /35\/35 Skill files — \*\*Implemented\*\*/);
    assert.equal(
      Array.from(
        section.matchAll(/^\*\*Implementation:\*\* Implemented — Group data and all Skill data files present\.$/gm),
      ).length,
      10,
    );
    const statuses = Array.from(section.matchAll(/^\| `math\.[^`]+` \|[^\n]+\| (Implemented|—) \|$/gm));
    assert.equal(statuses.length, 35);
    assert.ok(statuses.every(([, status]) => status === 'Implemented'));
  });
});

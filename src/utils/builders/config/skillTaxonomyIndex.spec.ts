import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const taxonomy = join(process.cwd(), 'math', 'skillsTaxonomy');
const domains = ['algebra', 'arithmetic', 'counting', 'geometry', 'numeration'] as const;

const lines = (path: string): string[] =>
  readFileSync(path, 'utf8').trim().split('\n').map(line => line.trim()).filter(Boolean);

/**
 * Regression guard: fetching a Domain must never transitively export every
 * Group and Skill via re-export barrels.
 */
describe('Skill taxonomy level-specific data barrels', () => {
  it('exports only domain configs at the root', () => {
    assert.deepEqual(lines(join(taxonomy, 'index.data.ts')), domains.map(
      domain => `export { ${domain}_SkillDomain_Data } from './${domain}/index.data';`,
    ));
  });

  it('keeps domain and group indexes limited to their own collection', () => {
    for (const domain of domains) {
      const domainPath = join(taxonomy, domain);
      assert.deepEqual(
        lines(join(domainPath, 'index.data.ts')),
        [`export { ${domain}_SkillDomain_Data } from './${domain}.data';`],
      );

      for (const entry of readdirSync(domainPath, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const groupPath = join(domainPath, entry.name);
        if (!existsSync(join(groupPath, `${entry.name}.data.ts`))) continue;
        assert.deepEqual(
          lines(join(groupPath, 'index.data.ts')),
          [`export { ${entry.name}_SkillGroup_Data } from './${entry.name}.data';`],
        );
      }
    }
  });

  it('exports Skills only through their own Skills indexes', () => {
    for (const domain of domains) {
      for (const entry of readdirSync(join(taxonomy, domain), { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const folder = join(taxonomy, domain, entry.name, 'skills');
        const indexFile = join(folder, 'index.data.ts');
        if (!existsSync(indexFile)) continue;
        const skills = readdirSync(folder).filter(
          filename => filename.endsWith('.data.ts') && filename !== 'index.data.ts',
        );
        const actual = lines(indexFile);
        assert.equal(actual.length, skills.length);
        for (const filename of skills) {
          const skill = filename.slice(0, -'.data.ts'.length);
          assert.ok(actual.includes(
            `export { ${skill}_Skill_Data } from './${skill}.data';`,
          ), `Missing data export for ${domain}/${entry.name}/${skill}`);
        }
      }
    }
  });
});

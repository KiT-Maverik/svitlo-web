import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { assessmentMethods_AssessmentMethod_Ids } from './assessmentMethod.ids';

describe('Static Assessment Method UUID registry', () => {
  it('contains exactly 16 distinct valid UUIDs', () => {
    const ids = Object.values(assessmentMethods_AssessmentMethod_Ids);
    assert.equal(ids.length, 16);
    assert.equal(new Set(ids).size, 16);
    for (const id of ids) {
      assert.match(id, /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    }
  });
  it('is authored independently of data modules and runtime UUID generation', () => {
    const source = readFileSync(join(process.cwd(), 'src/types/content/assessmentMethod.ids.ts'), 'utf8');
    assert.doesNotMatch(source, /randomUUID|uuidv4|uuid\.v4|Math\.random/);
    assert.doesNotMatch(source, /from ['"]\.\/.*\.data['"]/);
  });
});

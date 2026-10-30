import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../localization';
import type { SkillDomain_Config } from '../../../taxonomy';
import { buildSkillDomainConfig } from './buildSkillDomainConfig.utils';

const domainId = '11111111-1111-4111-8111-111111111111';
const groupId = '22222222-2222-4222-8222-222222222222';
const skillId = '33333333-3333-4333-8333-333333333333';

const name = Object.fromEntries(
  DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => [language, 'Test biology domain']),
) as SkillDomain_Config['name'];

function createDomain(
  groupIds: SkillDomain_Config['groupIds'],
  skillIds?: SkillDomain_Config['skillIds'],
): SkillDomain_Config {
  return { id: domainId, name, groupIds, ...(skillIds === undefined ? {} : { skillIds }) };
}

describe('buildSkillDomainConfig', () => {
  it('preserves grouped domain compatibility', () => {
    const config = createDomain({ organisms: groupId });
    const result = buildSkillDomainConfig(config);

    assert.equal(result.collection, 'skillDomain');
    assert.deepEqual(result.groupIds, { organisms: groupId });
    assert.equal(result.skillIds, undefined);
    assert.ok(!('collection' in config));
  });

  it('uses the same nested description validation for a Domain', () => {
    const config = {
      ...createDomain({ organisms: groupId }),
      description: { methodological: 'The conceptual scope of the domain.' },
    };
    assert.deepEqual(buildSkillDomainConfig(config).description, config.description);
    const incomplete = {
      ...config,
      description: { methodological: 'Valid text', fe: { en: 'Partial locale' } },
    } as unknown as SkillDomain_Config;
    assert.throws(() => buildSkillDomainConfig(incomplete), /Skill description.fe/);
  });

  it('allows direct Skills when the domain has zero Groups', () => {
    const config = createDomain({}, { identify: skillId });
    const result = buildSkillDomainConfig(config);

    assert.equal(result.collection, 'skillDomain');
    assert.deepEqual(result.groupIds, {});
    assert.deepEqual(result.skillIds, { identify: skillId });
  });

  it('rejects a domain with neither Groups nor direct Skills', () => {
    assert.throws(() => buildSkillDomainConfig(createDomain({})), /either non-empty groupIds or non-empty direct skillIds/);
    assert.throws(() => buildSkillDomainConfig(createDomain({}, {})), /either non-empty groupIds or non-empty direct skillIds/);
  });

  it('rejects a domain that mixes Groups and direct Skills', () => {
    assert.throws(
      () => buildSkillDomainConfig(createDomain({ organisms: groupId }, { identify: skillId })),
      /but not both/,
    );
  });

  it('validates UUIDs on direct Skill references', () => {
    const invalid = 'not-a-uuid' as SkillDomain_Config['id'];
    assert.throws(
      () => buildSkillDomainConfig(createDomain({}, { identify: invalid })),
      /SkillDomain skillIds.identify must be a UUID/,
    );
  });

  it('rejects duplicate direct Skill IDs', () => {
    assert.throws(
      () => buildSkillDomainConfig(createDomain({}, { identify: skillId, classify: skillId })),
      /SkillDomain skillIds contains duplicate id/,
    );
  });
});

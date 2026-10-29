import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../localization';
import type { SkillGroup_Config } from '../../../taxonomy';
import type { SkillDomain_Config } from '../../../taxonomy';
import { buildSkillGroupConfig } from '../../../taxonomy';
import { buildSkillDomainConfig } from '../../../taxonomy';

const names = () =>
  Object.fromEntries(
    DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => [language, 'A localized name']),
  ) as SkillGroup_Config['name'];

const groupId = 'ae3a76b3-47eb-47b6-92df-2ffa7da52ceb' as const;
const domainId = '9de735b7-4bcd-4b58-8832-d2d5d15846cd' as const;
const skillId = '9d1e7906-fa72-4ac5-b313-b135333fb937' as const;

describe('Skill catalog builders', () => {
  it('preserves keyed references and injects distinct collection discriminators', () => {
    const group = { id: groupId, name: names(), skillIds: { first: skillId, second: domainId } } as const;
    const domain = { id: domainId, name: names(), groupIds: { primary: groupId, secondary: skillId } } as const;
    const builtGroup = buildSkillGroupConfig(group);
    const builtDomain = buildSkillDomainConfig(domain);
    assert.notStrictEqual(builtGroup, group);
    assert.notStrictEqual(builtDomain, domain);
    assert.equal(builtGroup.collection, 'skillGroup');
    assert.equal(builtDomain.collection, 'skillDomain');
    assert.strictEqual(builtGroup.skillIds, group.skillIds);
    assert.strictEqual(builtDomain.groupIds, domain.groupIds);
    assert.deepEqual(Object.keys(group.skillIds), ['first', 'second']);
  });

  it('rejects missing translations in groups and domains', () => {
    const partial = { ...names() } as Record<string, string>;
    delete partial.uk;
    assert.throws(
      () =>
        buildSkillGroupConfig({
          id: groupId,
          name: partial as SkillGroup_Config['name'],
          skillIds: { first: skillId },
        }),
      /uk/,
    );
    assert.throws(
      () =>
        buildSkillDomainConfig({
          id: domainId,
          name: partial as SkillDomain_Config['name'],
          groupIds: { primary: groupId },
        }),
      /uk/,
    );
  });

  it('rejects arrays, empty objects, bad UUIDs and duplicate child IDs', () => {
    for (const refs of [{}, [], null, { first: '' }, { a: skillId, b: skillId }]) {
      assert.throws(
        () =>
          buildSkillGroupConfig({
            id: groupId,
            name: names(),
            skillIds: refs as SkillGroup_Config['skillIds'],
          }),
        /SkillGroup skillIds/,
      );
      assert.throws(
        () =>
          buildSkillDomainConfig({
            id: domainId,
            name: names(),
            groupIds: refs as SkillDomain_Config['groupIds'],
          }),
        /SkillDomain (?:groupIds|must contain)/,
      );
    }
    assert.throws(
      () =>
        buildSkillGroupConfig({
          id: 'not-a-uuid' as SkillGroup_Config['id'],
          name: names(),
          skillIds: { first: skillId },
        }),
      /Skill id must be a UUID/,
    );
  });

  it('supports exactly one Domain membership mode', () => {
    const direct = buildSkillDomainConfig({
      id: domainId, name: names(), groupIds: {}, skillIds: { first: skillId },
    });
    assert.equal(direct.collection, 'skillDomain');
    assert.deepEqual(direct.groupIds, {});
    assert.deepEqual(direct.skillIds, { first: skillId });

    assert.throws(() =>
      buildSkillDomainConfig({ id: domainId, name: names(), groupIds: {} }),
      /either non-empty groupIds or non-empty direct skillIds/,
    );
    assert.throws(() =>
      buildSkillDomainConfig({
        id: domainId, name: names(), groupIds: { group: groupId }, skillIds: { first: skillId },
      }),
      /but not both/,
    );
  });

  it('does not add fileLocation or mutate the original config', () => {
    const group = buildSkillGroupConfig({ id: groupId, name: names(), skillIds: { first: skillId } });
    assert.deepEqual(Object.keys(group).sort(), ['collection', 'id', 'name', 'skillIds']);
  });
});

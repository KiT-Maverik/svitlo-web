import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';
import type { SkillGroup_Config } from '../../../types/content/skillGroup.types';
import type { SkillDomain_Config } from '../../../types/content/skillDomain.types';
import { buildSkillGroupConfig } from './buildSkillGroupConfig.utils';
import { buildSkillDomainConfig } from './buildSkillDomainConfig.utils';

const names = () => Object.fromEntries(
  DEFAULT_SUPPORTED_LANGUAGES.map(({ locale }) => [locale, 'A localized name']),
) as SkillGroup_Config['name'];

describe('Skill catalog builders', () => {
  it('preserves group identity, order and input references', () => {
    const config = { id: 'g', name: names(), skillIds: ['b', 'a'] as const };
    assert.strictEqual(buildSkillGroupConfig(config), config);
    assert.deepEqual(config.skillIds, ['b', 'a']);
  });

  it('preserves domain identity, order and input references', () => {
    const config = { id: 'd', name: names(), groupIds: ['z', 'a'] as const };
    assert.strictEqual(buildSkillDomainConfig(config), config);
    assert.deepEqual(config.groupIds, ['z', 'a']);
  });

  it('requires all localized titles for groups and domains', () => {
    const partial = { ...names() } as Record<string, string>;
    delete partial['uk-UA'];
    assert.throws(() => buildSkillGroupConfig({
      id: 'g', name: partial as SkillGroup_Config['name'], skillIds: ['s'],
    }), /uk-UA/);
    assert.throws(() => buildSkillDomainConfig({
      id: 'd', name: partial as SkillDomain_Config['name'], groupIds: ['g'],
    }), /uk-UA/);
  });

  it('rejects empty or duplicate reference lists', () => {
    for (const ids of [[], [''], ['x', 'x']]) {
      assert.throws(() => buildSkillGroupConfig({
        id: 'g', name: names(), skillIds: ids,
      }), /SkillGroup skillIds/);
      assert.throws(() => buildSkillDomainConfig({
        id: 'd', name: names(), groupIds: ids,
      }), /SkillDomain groupIds/);
    }
  });

  it('does not invent fileLocation', () => {
    const result = buildSkillGroupConfig({ id: 'g', name: names(), skillIds: ['s'] });
    assert.deepEqual(Object.keys(result).sort(), ['id', 'name', 'skillIds']);
  });
});

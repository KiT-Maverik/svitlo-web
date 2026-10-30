import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../localization';
import type { Skill_Config } from '../../../taxonomy';
import { buildSkillConfig } from '../../../taxonomy';

const allNames = () =>
  Object.fromEntries(
    DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => [language, `Skill in ${language}`]),
  ) as Skill_Config['name'];

const skill = (): Skill_Config => ({
  id: 'ae3a76b3-47eb-47b6-92df-2ffa7da52ceb',
  name: allNames(),
});

describe('Utils / builders / config / buildSkillConfig', () => {
  it('adds the skill collection without changing identity fields or locales', () => {
    const input = skill();
    const result = buildSkillConfig(input);
    assert.notStrictEqual(result, input);
    assert.equal(result.collection, 'skill');
    assert.equal(result.id, input.id);
    assert.equal(Object.keys(result.name).length, DEFAULT_SUPPORTED_LANGUAGES.length);
    assert.deepEqual(result.name, input.name);
  });

  it('does not mutate the input or its name dictionary', () => {
    const input = skill();
    const before = structuredClone(input);
    buildSkillConfig(input);
    assert.deepEqual(input, before);
  });

  it('rejects missing, blank and non-string identifiers at the runtime boundary', () => {
    for (const id of ['', '  ', 'math.multiply.by-2', null, undefined, 123]) {
      const invalid = { ...skill(), id } as unknown as Skill_Config;
      assert.throws(() => buildSkillConfig(invalid), /Skill id/);
    }
  });

  it('rejects a missing or malformed name dictionary', () => {
    for (const name of [undefined, null, [], 'name']) {
      const invalid = { ...skill(), name } as unknown as Skill_Config;
      assert.throws(() => buildSkillConfig(invalid), /Skill name/);
    }
  });

  it('rejects any missing required language', () => {
    for (const { language } of DEFAULT_SUPPORTED_LANGUAGES) {
      const names: Record<string, string> = { ...allNames() };
      delete names[language];
      assert.throws(
        () => buildSkillConfig({ id: skill().id, name: names } as unknown as Skill_Config),
        new RegExp(language),
      );
    }
  });

  it('rejects blank and non-string localized names', () => {
    for (const value of ['', '  ', null, 5]) {
      const invalid = { ...allNames(), uk: value };
      assert.throws(() => buildSkillConfig({ id: skill().id, name: invalid } as unknown as Skill_Config), /uk/);
    }
  });

  const frontendCopy = () =>
    Object.fromEntries(DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) =>
      [language, 'Frontend description in ' + language])) as NonNullable<Skill_Config['description']>['fe'];

  it('allows missing description only for legacy records', () => {
    assert.equal(buildSkillConfig(skill()).description, undefined);
  });

  it('accepts a methodological description without frontend text', () => {
    const input = { ...skill(), description: { methodological: 'Mathematical concept and boundaries.' } };
    assert.deepEqual(buildSkillConfig(input).description, input.description);
  });

  it('accepts methodological description and complete optional fe dictionary', () => {
    const input = {
      ...skill(),
      description: { methodological: 'Mathematical concept and boundaries.', fe: frontendCopy() },
    };
    assert.deepEqual(buildSkillConfig(input).description, input.description);
  });

  it('rejects missing, blank, malformed and extra methodological fields', () => {
    for (const description of [null, [], 'text', {}, { fe: frontendCopy() },
      { methodological: '' }, { methodological: '  ' }, { methodological: 17 },
      { methodological: 'Valid', extra: 'Unsupported' }]) {
      assert.throws(() => buildSkillConfig({ ...skill(), description } as unknown as Skill_Config), /Skill description/);
    }
  });

  it('rejects fe when incomplete, malformed, blank or containing unexpected locales', () => {
    const fe = frontendCopy();
    for (const frontend of [null, [], 'text', {}, { en: 'Only English' },
      { ...fe, uk: ' ' }, { ...fe, xx: 'Unsupported' }]) {
      assert.throws(
        () => buildSkillConfig({ ...skill(), description: { methodological: 'Valid', fe: frontend } } as unknown as Skill_Config),
        /Skill description.fe/,
      );
    }
  });

  it('rejects unsupported extra locale keys', () => {
    const names = { ...allNames(), xx: 'Unknown' };
    assert.throws(() => buildSkillConfig({ id: skill().id, name: names }), /unsupported languages: xx/);
  });
});

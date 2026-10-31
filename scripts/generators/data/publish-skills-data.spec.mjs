import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
  languageCodes,
  loadSkillGraph,
  renderSkillFiles,
  writePublishedFiles,
  checkPublishedFiles,
} from './publish-skills-data.mjs';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const fixture = path.join(repo, 'learningApps/playground/data/skills');

test('publishes all 2 domains, 4 groups, 8 Skills into localized standalone and nested JSON', () => {
  const codes = languageCodes();
  const graph = loadSkillGraph(fixture, codes);
  const files = renderSkillFiles(graph, codes);
  assert.equal(graph.length, 2);
  assert.equal(graph.reduce((sum, domain) => sum + domain.groups.length, 0), 4);
  assert.equal(graph.reduce((sum, domain) =>
    sum + domain.groups.reduce((groupSum, group) => groupSum + group.skills.length, 0), 0), 8);
  assert.equal(files.size, 14 * codes.length + 1);
  assert.deepEqual(JSON.parse(files.get('index.json')), {
    version: 1,
    languages: codes,
    domains: ['testColors', 'testShapes'],
  });
  assert(codes.includes('en') && codes.includes('uk'));
  assert.equal(new Set(codes).size, codes.length);

  const domain = JSON.parse(files.get('testColors/en.json'));
  assert.equal(domain.collection, 'skillDomain');
  assert.equal(domain.language, 'en');
  assert.equal(typeof domain.name, 'string');
  assert.equal(domain.groups.length, 2);
  assert.equal(domain.groups[0].skills.length, 2);
  assert.equal(domain.groups[0].skills[0].collection, 'skill');
  assert.equal(domain.groups[0].skills[0].name.includes('[TEST en]'), true);

  const group = JSON.parse(files.get('testColors/testWarmColors/uk.json'));
  assert.equal(group.collection, 'skillGroup');
  assert.equal(group.language, 'uk');
  assert.equal(group.skills.length, 2);
  assert.equal(typeof group.skills[0].name, 'string');

  const skill = JSON.parse(files.get('testColors/testWarmColors/testRecognizeRed/en.json'));
  assert.equal(skill.slug, 'testRecognizeRed');
  assert.equal(skill.collection, 'skill');
  assert.equal(skill.language, 'en');
  assert.equal(typeof skill.name, 'string');
  assert.equal(typeof skill.description, 'string');
  assert(!JSON.stringify(domain).includes('methodological'));
  assert(!JSON.stringify(domain).includes('\"fe\"'));
  assert(!Object.hasOwn(skill, 'groups'));
  assert(!Object.hasOwn(skill, 'skills'));

  for (const code of codes) {
    assert(files.has('testShapes/' + code + '.json'));
    assert(files.has('testShapes/testPolygonShapes/' + code + '.json'));
    assert(files.has('testShapes/testPolygonShapes/testRecognizeTriangle/' + code + '.json'));
  }
});

test('requires every supported locale and refuses incomplete input before publishing', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'skills-locale-missing-'));
  try {
    const copied = path.join(temp, 'skills');
    fs.cpSync(fixture, copied, { recursive: true });
    const target = path.join(copied, 'testColors/testWarmColors/skills/testRecognizeRed.data.ts');
    const original = fs.readFileSync(target, 'utf8');
    const changed = original.replace('    en: "[TEST en] Recognize red",\n', '');
    assert.notEqual(original, changed);
    fs.writeFileSync(target, changed);
    assert.throws(() => loadSkillGraph(copied, languageCodes()), /missing \[en\]/);
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
});

test('rejects missing canonical slugs and incomplete frontend descriptions', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'skills-contract-'));
  try {
    const copied = path.join(temp, 'skills');
    fs.cpSync(fixture, copied, { recursive: true });
    const target = path.join(copied, 'testColors/testWarmColors/skills/testRecognizeRed.data.ts');
    const original = fs.readFileSync(target, 'utf8');

    fs.writeFileSync(target, original.replace("  slug: 'testRecognizeRed',\n", ''));
    assert.throws(() => loadSkillGraph(copied, languageCodes()), /slug/);

    fs.writeFileSync(target, original.replace('    frontend: {', '    fe: {'));
    assert.throws(() => loadSkillGraph(copied, languageCodes()), /frontend|nonliteral|Unexpected/);

    fs.writeFileSync(target, original.replace('      uk: "[TEST uk] Recognize the color red in a simple visual example.",\n', ''));
    assert.throws(() => loadSkillGraph(copied, languageCodes()), /missing \[uk\]/);
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
});

test('checks deterministic output and removes obsolete files only inside the generated tree', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'skills-publish-'));
  try {
    const output = path.join(temp, 'public/data/skills');
    const files = renderSkillFiles(loadSkillGraph(fixture, languageCodes()), languageCodes());
    assert.equal(checkPublishedFiles(output, files).missing.length, files.size);
    writePublishedFiles(output, files);
    assert.deepEqual(checkPublishedFiles(output, files), { missing: [], changed: [], stale: [] });
    fs.writeFileSync(path.join(output, 'obsolete.json'), '{}');
    assert.deepEqual(checkPublishedFiles(output, files).stale, ['obsolete.json']);
    fs.writeFileSync(path.join(output, 'testColors/en.json'), 'broken');
    assert.deepEqual(checkPublishedFiles(output, files).changed, ['testColors/en.json']);
    writePublishedFiles(output, files);
    assert.deepEqual(checkPublishedFiles(output, files), { missing: [], changed: [], stale: [] });
    assert.equal(fs.existsSync(path.join(output, 'obsolete.json')), false);
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
});

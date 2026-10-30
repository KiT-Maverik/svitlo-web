import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const script = path.join(root, 'scripts/implement-skills-taxonomy.mjs');
const roster = fs.readFileSync(path.join(root,'shared/contracts/src/types/languages.ts'), 'utf8');
const languageList = roster.slice(roster.indexOf('export const DEFAULT_SUPPORTED_LANGUAGES'), roster.indexOf('] as const satisfies readonly LanguageDefinition[];'));
const locales = [...languageList.matchAll(/language:\s*'([^']+)'/g)].map(x => x[1]);
const strings = (en, prefix) => Object.fromEntries(locales.map(l => [l, l === 'en' ? en : `${prefix} (${l})`]));
function section(level, title, slug, action = 'create', status = 'pending', children = null, friendly = 'Discover meaningful knowledge.') {
  return `${'#'.repeat(level)} ${title}\n\nSlug: ${slug}\nAction: ${action}\nStatus: ${status}\n\n` +
    (level === 3 ? `Groups: ${children === 'groups' ? 1 : 0} · Skills: 1\n\n` : level === 4 && children === 'skills' ? 'Skills: 1\n\n' : '') +
    `[Not implemented](#)\n\nMethodological description: Canonical English meaning of ${title}.\nUser-friendly description: ${friendly}\n\n`;
}
const grouped = () => section(3,'Drawing','drawing','create','pending','groups') +
  section(4,'Perspective','perspective','create','pending','skills') +
  section(5,'Draw Perspective','drawPerspective');
const direct = () => section(3,'Music','music','create','pending','direct') + section(4,'Hear Rhythm','hearRhythm');
const emptyHeader = '# Test Taxonomy\n\n## SUMMARY\n\nDomains: 2\nGroups: 1\nSkills: 2\n\nCode files: 0/2 Domains · 0/1 Groups · 0/2 Skills\n\n## DOMAINS\n\n';
function setup(text = emptyHeader + grouped() + direct()) {
  const pkg = fs.mkdtempSync(path.join(root,'learningApps','.markdown-skill-fixture-'));
  const md = path.join(pkg,'docs/skills/taxonomy.md');
  fs.mkdirSync(path.dirname(md), { recursive: true });
  fs.writeFileSync(path.join(pkg,'package.json'), '{"name":"fixture","private":true}');
  fs.writeFileSync(md, text);
  const specs = [
    ['drawing','Drawing'], ['drawing/perspective','Perspective'], ['drawing/perspective/drawPerspective','Draw Perspective'],
    ['music','Music'], ['music/hearRhythm','Hear Rhythm'],
  ];
  const translations = {};
  for (const [key,title] of specs) translations[key] = {
    name: strings(title,'Reviewed name ' + title),
    fe: strings('Discover meaningful knowledge.','Reviewed friendly '+title),
  };
  const json = path.join(pkg,'translations.json');
  fs.writeFileSync(json, JSON.stringify(translations));
  const run = (...args) => spawnSync(process.execPath, [script,'--package',path.relative(root,pkg),'--translations',path.relative(root,json),...args],
    { cwd:root,encoding:'utf8' });
  const updateText = replace => fs.writeFileSync(md,replace(fs.readFileSync(md,'utf8')));
  return {pkg,md,json,run,updateText,translations};
}
function withFixture(fn, text) {
  const f = setup(text);
  try { fn(f); } finally { fs.rmSync(f.pkg,{recursive:true,force:true}); }
}
const result = p => JSON.parse(p.stdout.trim().split('\n').at(-1));

test('dry-run is default and creates no files or editorial status changes', () => withFixture(f => {
  const before = fs.readFileSync(f.md,'utf8');
  const r = f.run();
  assert.equal(r.status,0,r.stderr);
  assert.equal(result(r).mode,'dry-run');
  assert.equal(fs.readFileSync(f.md,'utf8'),before);
  assert.equal(fs.existsSync(path.join(f.pkg,'Data')),false);
}));

test('creates grouped and direct Skills, complete locales and stable ID maps; rerun is safe', () => withFixture(f => {
  let r = f.run('--apply');
  assert.equal(r.status,0,r.stderr);
  assert.equal(result(r).errors,0);
  const data = path.join(f.pkg,'Data/skills');
  const skillFile = path.join(data,'drawing/perspective/skills/drawPerspective.data.ts');
  const directFile = path.join(data,'music/skills/hearRhythm.data.ts');
  assert.ok(fs.existsSync(skillFile));
  assert.ok(fs.existsSync(directFile));
  assert.match(fs.readFileSync(skillFile,'utf8'),/buildSkillConfig/);
  for (const [file, slug] of [
    ['drawing/drawing.data.ts', 'drawing'],
    ['drawing/perspective/perspective.data.ts', 'perspective'],
    ['drawing/perspective/skills/drawPerspective.data.ts', 'drawPerspective'],
    ['music/music.data.ts', 'music'],
    ['music/skills/hearRhythm.data.ts', 'hearRhythm'],
  ]) assert.match(fs.readFileSync(path.join(data, file), 'utf8'),
    new RegExp('\\bslug: "' + slug + '",'));
  assert.match(fs.readFileSync(path.join(data,'music/music.data.ts'),'utf8'),/groupIds: \{\},\s+skillIds: music_Skills_Ids/);
  const ids = fs.readFileSync(path.join(data,'drawing/perspective/skills/index.ids.ts'),'utf8');
  assert.match(ids,/drawPerspective: "[0-9a-f-]{36}"/);
  assert.match(fs.readFileSync(f.md,'utf8'),/Status: implemented/);
  assert.match(fs.readFileSync(f.md,'utf8'),/\[drawPerspective.data.ts\]\(/);
  const first = fs.readFileSync(skillFile,'utf8');
  r = f.run('--apply');
  assert.equal(r.status,0,r.stderr);
  assert.equal(fs.readFileSync(skillFile,'utf8'),first);
  assert.equal(fs.readFileSync(path.join(data,'drawing/perspective/skills/index.ids.ts'),'utf8'),ids);
}));

test('update changes approved English text and preserves UUID and other locales', () => withFixture(f => {
  assert.equal(f.run('--apply').status,0);
  const idFile = path.join(f.pkg,'Data/skills/music/skills/index.ids.ts');
  const before = fs.readFileSync(idFile,'utf8');
  f.updateText(s=>s.replace('Action: create\nStatus: implemented\n\n[hearRhythm.data.ts]', 'Action: update\nStatus: implemented\n\n[hearRhythm.data.ts]')
    .replace('Canonical English meaning of Hear Rhythm.', 'Reviewed new meaning of Hear Rhythm.'));
  const filepath=path.join(f.pkg,'Data/skills/music/skills/hearRhythm.data.ts');
  const old = fs.readFileSync(filepath,'utf8');
  const translationFile = JSON.parse(fs.readFileSync(f.json,'utf8'));
  delete translationFile['music/hearRhythm'];
  fs.writeFileSync(f.json,JSON.stringify(translationFile));
  const r=f.run('--apply');
  assert.equal(r.status,0,r.stderr);
  const after=fs.readFileSync(filepath,'utf8');
  assert.match(after,/Reviewed new meaning of Hear Rhythm/);
  assert.match(after,new RegExp('Reviewed name Hear Rhythm \\(uk\\)'));
  assert.equal(fs.readFileSync(idFile,'utf8'), before);
  assert.notEqual(old,after);
}));

test('skip leaves implemented entity unchanged even with altered descriptive text', () => withFixture(f => {
  assert.equal(f.run('--apply').status,0);
  const filepath=path.join(f.pkg,'Data/skills/music/skills/hearRhythm.data.ts');
  const old=fs.readFileSync(filepath,'utf8');
  f.updateText(s=>s.replace('Action: create\nStatus: implemented\n\n[hearRhythm.data.ts]', 'Action: skip\nStatus: implemented\n\n[hearRhythm.data.ts]')
    .replace('Canonical English meaning of Hear Rhythm.', 'Ignored English meaning.'));
  const r=f.run('--apply');
  assert.equal(r.status,0,r.stderr);
  assert.equal(fs.readFileSync(filepath,'utf8'),old);
}));

test('delete needs explicit authorization and dependency checks; fixes local indexes', () => withFixture(f => {
  assert.equal(f.run('--apply').status,0);
  f.updateText(s => s.replace('Action: create\nStatus: implemented\n\n[hearRhythm.data.ts]', 'Action: delete\nStatus: implemented\n\n[hearRhythm.data.ts]')
    .replace('### Music\n\nSlug: music\nAction: create','### Music\n\nSlug: music\nAction: delete'));
  const code=path.join(f.pkg,'Data/skills/music/skills/hearRhythm.data.ts');
  const blocked=f.run('--apply');
  assert.notEqual(blocked.status,0);
  assert.ok(fs.existsSync(code));
  const external=path.join(f.pkg,'src/references.ts');
  fs.mkdirSync(path.dirname(external),{recursive:true});
  fs.writeFileSync(external,"import { hearRhythm_Skill_Data } from '../Data/skills/music/skills/hearRhythm.data';");
  const rejected=f.run('--apply','--allow-delete');
  assert.notEqual(rejected.status,0);
  assert.match(rejected.stderr,/Unsafe deletion; external references/);
  fs.rmSync(external);
  const permitted=f.run('--apply','--allow-delete');
  assert.equal(permitted.status,0,permitted.stderr);
  assert.equal(fs.existsSync(code),false);
  assert.match(fs.readFileSync(f.md,'utf8'),/### Music\s+Slug: music\s+Action: delete\s+Status: pending/);
  assert.doesNotMatch(fs.readFileSync(path.join(f.pkg,'Data/skills/index.data.ts'),'utf8'),/music/);
}));

test('incomplete locales, malformed slug and missing update targets skip only invalid domains', () => withFixture(f => {
  const json = JSON.parse(fs.readFileSync(f.json,'utf8'));
  delete json['drawing/perspective/drawPerspective'].fe.uk;
  fs.writeFileSync(f.json,JSON.stringify(json));
  f.updateText(s=>s.replace('Slug: hearRhythm','Slug: hear-rhythm'));
  let r=f.run('--apply');
  assert.notEqual(r.status,0);
  assert.match(r.stderr,/Incomplete locales/);
  assert.match(r.stderr,/Invalid lowerCamelCase/);
  assert.equal(fs.existsSync(path.join(f.pkg,'Data/skills/drawing')),false);
  assert.equal(fs.existsSync(path.join(f.pkg,'Data/skills/music')),false);
  f.updateText(s=>s.replace('Slug: hear-rhythm','Slug: hearRhythm'));
  r=f.run('--apply');
  assert.notEqual(r.status,0);
  assert.ok(fs.existsSync(path.join(f.pkg,'Data/skills/music/skills/hearRhythm.data.ts')));
  assert.equal(fs.existsSync(path.join(f.pkg,'Data/skills/drawing')),false);
}));

test('update of missing target is diagnosed and never fabricates a new UUID', () => withFixture(f => {
  f.updateText(s=>s.replace('Action: create\nStatus: pending\n\n[Not implemented](#)\n\nMethodological description: Canonical English meaning of Draw Perspective.',
    'Action: update\nStatus: pending\n\n[Not implemented](#)\n\nMethodological description: Canonical English meaning of Draw Perspective.'));
  const r=f.run('--apply');
  assert.notEqual(r.status,0);
  assert.match(r.stderr,/Nonexistent update target/);
  assert.equal(fs.existsSync(path.join(f.pkg,'Data/skills/drawing')),false);
  assert.ok(fs.existsSync(path.join(f.pkg,'Data/skills/music/skills/hearRhythm.data.ts')));
}));

test('duplicate child slug and conflicting create target are rejected without partial writes', () => withFixture(f => {
  f.updateText(s => s + section(4,'Another Rhythm','hearRhythm'));
  const duplicate = f.run('--apply');
  assert.notEqual(duplicate.status,0);
  assert.match(duplicate.stderr,/Duplicate slug in sibling scope/);
  assert.ok(fs.existsSync(path.join(f.pkg,'Data/skills/drawing/perspective/skills/drawPerspective.data.ts')));
  assert.equal(fs.existsSync(path.join(f.pkg,'Data/skills/music')),false);
  f.updateText(s => s.slice(0,s.lastIndexOf('#### Another Rhythm')));
  const rogue=path.join(f.pkg,'Data/skills/music/skills/hearRhythm.data.ts');
  fs.mkdirSync(path.dirname(rogue),{recursive:true});
  fs.writeFileSync(rogue,'export const unrelated = true;\n');
  const conflict=f.run('--apply');
  assert.notEqual(conflict.status,0);
  assert.match(conflict.stderr,/Conflicting create target/);
  assert.equal(fs.readFileSync(rogue,'utf8'),'export const unrelated = true;\n');
}));

test('existing unlisted child ID cannot be overwritten by index regeneration', () => withFixture(f => {
  assert.equal(f.run('--apply').status,0);
  const mapFile=path.join(f.pkg,'Data/skills/drawing/perspective/skills/index.ids.ts');
  const original=fs.readFileSync(mapFile,'utf8');
  fs.writeFileSync(mapFile,original.replace('} as const;',"  unseen: '3d6a2b6c-16cf-48cd-b3ac-1bbac0bef15e',\n} as const;"));
  f.updateText(s=>s.replace('Action: create\nStatus: implemented\n\n[drawPerspective.data.ts]','Action: update\nStatus: implemented\n\n[drawPerspective.data.ts]'));
  const res=f.run('--apply');
  assert.notEqual(res.status,0);
  assert.match(res.stderr,/Unknown existing child reference/);
  assert.match(fs.readFileSync(mapFile,'utf8'),/unseen/);
}));

test('failed update in one Domain preserves its root exports while a separate Domain succeeds', () => withFixture(f => {
  assert.equal(f.run('--apply').status,0);
  const file=path.join(f.pkg,'Data/skills/index.data.ts');
  const before=fs.readFileSync(file,'utf8');
  f.updateText(s=>s.replace('[drawing.data.ts]', '[other.data.ts]')
    .replace('Canonical English meaning of Hear Rhythm.', 'New approved meaning of rhythm.')
    .replace('Action: create\nStatus: implemented\n\n[hearRhythm.data.ts]', 'Action: update\nStatus: implemented\n\n[hearRhythm.data.ts]'));
  const translations=JSON.parse(fs.readFileSync(f.json,'utf8'));
  delete translations['music/hearRhythm'];
  fs.writeFileSync(f.json,JSON.stringify(translations));
  const res=f.run('--apply');
  assert.notEqual(res.status,0);
  assert.match(res.stderr,/Code link is not verified canonical target/);
  assert.match(fs.readFileSync(path.join(f.pkg,'Data/skills/music/skills/hearRhythm.data.ts'),'utf8'),/New approved meaning/);
  assert.equal(fs.readFileSync(file,'utf8'),before);
}));

test('a fully pending skip-only taxonomy stays unchanged without requiring translations', () => withFixture(f => {
  f.updateText(s=>s.replaceAll('Action: create','Action: skip'));
  fs.writeFileSync(f.json,'{}');
  const prior=fs.readFileSync(f.md,'utf8');
  const r=f.run('--apply');
  assert.equal(r.status,0,r.stderr);
  assert.equal(fs.existsSync(path.join(f.pkg,'Data')),false);
  assert.equal(fs.readFileSync(f.md,'utf8'),prior);
}));

test('symlinked destination is rejected without touching files outside the textbook', () => withFixture(f => {
  const dest=path.join(f.pkg,'Data');
  const outside=fs.mkdtempSync(path.join(os.tmpdir(),'taxonomy-outside-'));
  try {
    fs.symlinkSync(outside,dest,'dir');
    const r=f.run('--apply');
    assert.notEqual(r.status,0);
    assert.match(r.stderr,/Refusing symlinked output path/);
    assert.deepEqual(fs.readdirSync(outside),[]);
  } finally { fs.rmSync(outside,{recursive:true,force:true}); }
}));


test('update backfills a legacy absent slug without modifying the existing UUID', () => withFixture(f => {
  assert.equal(f.run('--apply').status, 0);
  const file = path.join(f.pkg, 'Data/skills/music/skills/hearRhythm.data.ts');
  const ids = path.join(f.pkg, 'Data/skills/music/skills/index.ids.ts');
  const beforeIds = fs.readFileSync(ids, 'utf8');
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('  slug: "hearRhythm",\n', ''));
  f.updateText(s => s.replace('Action: create\nStatus: implemented\n\n[hearRhythm.data.ts]',
    'Action: update\nStatus: implemented\n\n[hearRhythm.data.ts]'));
  const r = f.run('--apply');
  assert.equal(r.status, 0, r.stderr);
  assert.match(fs.readFileSync(file, 'utf8'), /slug: "hearRhythm",/);
  assert.equal(fs.readFileSync(ids, 'utf8'), beforeIds);
}));

test('create rerun backfills slug only for a verified entity, and is idempotent', () => withFixture(f => {
  assert.equal(f.run('--apply').status, 0);
  const file = path.join(f.pkg, 'Data/skills/drawing/drawing.data.ts');
  const ids = path.join(f.pkg, 'Data/skills/drawing/drawing.ids.ts');
  const originalId = fs.readFileSync(ids, 'utf8');
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('  slug: "drawing",\n', ''));
  assert.equal(f.run('--apply').status, 0);
  assert.match(fs.readFileSync(file, 'utf8'), /slug: "drawing",/);
  assert.equal(fs.readFileSync(ids, 'utf8'), originalId);
  const stable = fs.readFileSync(file, 'utf8');
  assert.equal(f.run('--apply').status, 0);
  assert.equal(fs.readFileSync(file, 'utf8'), stable);
}));

test('a conflicting code slug is rejected without an overwrite', () => withFixture(f => {
  assert.equal(f.run('--apply').status, 0);
  const file = path.join(f.pkg, 'Data/skills/music/skills/hearRhythm.data.ts');
  const tampered = fs.readFileSync(file, 'utf8').replace('slug: "hearRhythm"', 'slug: "unrelated"');
  fs.writeFileSync(file, tampered);
  const r = f.run('--apply');
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /Existing slug conflicts with approved taxonomy Slug/);
  assert.equal(fs.readFileSync(file, 'utf8'), tampered);
}));

test('skip does not backfill a missing slug on an implemented entity', () => withFixture(f => {
  assert.equal(f.run('--apply').status, 0);
  const file = path.join(f.pkg, 'Data/skills/music/skills/hearRhythm.data.ts');
  const legacy = fs.readFileSync(file, 'utf8').replace('  slug: "hearRhythm",\n', '');
  fs.writeFileSync(file, legacy);
  f.updateText(s => s.replace('Action: create\nStatus: implemented\n\n[hearRhythm.data.ts]',
    'Action: skip\nStatus: implemented\n\n[hearRhythm.data.ts]'));
  assert.equal(f.run('--apply').status, 0);
  assert.equal(fs.readFileSync(file, 'utf8'), legacy);
}));

import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const script = path.join(root, 'scripts/implement-skills-taxonomy.mjs');
const roster = fs.readFileSync(path.join(root, 'shared/contracts/src/types/languages.ts'),'utf8');
const languages = roster.slice(roster.indexOf('export const DEFAULT_SUPPORTED_LANGUAGES'),
  roster.indexOf('] as const satisfies readonly LanguageDefinition[];'));
const locales = [...languages.matchAll(/language:\s*'([^']+)'/g)].map(x=>x[1]);
assert.ok(locales.includes('en') && locales.includes('uk'));
const friendly='Explore this topic.';
function section(level,title,slug,action='create',status='pending',children='') {
  const prefix=level===3 ? 'Groups: '+(children==='group'?1:0)+' · Skills: 1\n\n' :
    level===4 && children==='skill' ? 'Skills: 1\n\n' : '';
  return '#'.repeat(level)+' '+title+'\n\nSlug: '+slug+'\nAction: '+action+
    '\nStatus: '+status+'\n\n'+prefix+'[Not implemented](#)\n\n'+
    'Methodological description: Definition of '+title+'.\n'+
    'User-friendly description: '+friendly+'\n\n';
}
const header='# Test Taxonomy\n\n## SUMMARY\n\nDomains: 2\nGroups: 1\nSkills: 2\n\n## DOMAINS\n\n';
const original=header+section(3,'Geometry','geometry','create','pending','group')+
  section(4,'Angles','angles','create','pending','skill')+
  section(5,'Compare Angles','compareAngles')+
  section(3,'Music','music','create','pending','direct')+
  section(4,'Hear Rhythm','hearRhythm');
function fixture() {
  const pkg=fs.mkdtempSync(path.join(root,'learningApps','.direct-skill-code-'));
  const md=path.join(pkg,'docs/skills/taxonomy.md');
  fs.mkdirSync(path.dirname(md),{recursive:true});
  fs.writeFileSync(path.join(pkg,'package.json'),'{"name":"fixture","private":true}');
  fs.writeFileSync(md,original);
  const defs=[['geometry','Geometry'],['geometry/angles','Angles'],
    ['geometry/angles/compareAngles','Compare Angles'],['music','Music'],['music/hearRhythm','Hear Rhythm']];
  const translations=Object.fromEntries(defs.map(([key,title])=>[key,{
    name:Object.fromEntries(locales.map(l=>[l,l==='en'?title:'Translated '+title+' '+l])),
    fe:Object.fromEntries(locales.map(l=>[l,l==='en'?friendly:'Frontend '+title+' '+l])),
  }]));
  const tFile=path.join(pkg,'locales.json');
  fs.writeFileSync(tFile,JSON.stringify(translations));
  const run=(...flags)=>spawnSync(process.execPath,
    [script,'--package',path.relative(root,pkg),'--translations',path.relative(root,tFile),...flags],
    {cwd:root,encoding:'utf8',maxBuffer:16*1024*1024});
  const edit=fn=>fs.writeFileSync(md,fn(fs.readFileSync(md,'utf8')));
  return {pkg,md,tFile,run,edit};
}
function withFixture(fn) {
  const f=fixture();
  try {fn(f);} finally {fs.rmSync(f.pkg,{force:true,recursive:true});}
}
const data=f=>path.join(f.pkg,'data/skills');
const source=(f,p)=>fs.readFileSync(path.join(data(f),p),'utf8');
const uuid=body=>body.match(/\bid: "([0-9a-f-]{36})"/)?.[1];

test('dry-run is default and leaves code and Markdown untouched',()=>withFixture(f=>{
  const before=fs.readFileSync(f.md,'utf8');
  const r=f.run();
  assert.equal(r.status,0,r.stderr);
  assert.match(r.stdout,/"mode":"dry-run"/);
  assert.equal(fs.existsSync(data(f)),false);
  assert.equal(fs.readFileSync(f.md,'utf8'),before);
}));

test('create emits entity-owned IDs, direct imports and only allowed indexes',()=>withFixture(f=>{
  const r=f.run('--apply');
  assert.equal(r.status,0,r.stderr);
  assert.match(r.stdout,/"success":5/);
  const paths=['geometry/geometry.data.ts','geometry/angles/angles.data.ts',
    'geometry/angles/skills/compareAngles.data.ts','music/music.data.ts',
    'music/skills/hearRhythm.data.ts'];
  const ids=new Set();
  for(const p of paths) {
    const content=source(f,p);
    assert.match(content,/buildSkill(Domain|Group)?Config/);
    const id=uuid(content);
    assert.match(id,/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    ids.add(id);
    assert.doesNotMatch(content,/\bslug\s*:/);
  }
  assert.equal(ids.size,5);
  assert.match(source(f,'geometry/geometry.data.ts'),/angles: angles_SkillGroup_Data\.id/);
  assert.match(source(f,'geometry/angles/angles.data.ts'),/compareAngles: compareAngles_Skill_Data\.id/);
  assert.match(source(f,'music/music.data.ts'),/groupIds: \{\}/);
  assert.match(source(f,'music/music.data.ts'),/hearRhythm: hearRhythm_Skill_Data\.id/);
  assert.match(source(f,'index.ts'),/geometry_SkillDomain_Data/);
  assert.match(source(f,'geometry/angles/skills/index.ts'),/compareAngles_Skill_Data/);
  assert.match(source(f,'music/skills/index.ts'),/hearRhythm_Skill_Data/);
  assert.equal(fs.existsSync(path.join(data(f),'index.ids.ts')),false);
  assert.equal(fs.existsSync(path.join(data(f),'index.data.ts')),false);
  assert.equal(fs.existsSync(path.join(f.pkg,'Data')),false);
  assert.equal(fs.existsSync(path.join(data(f),'geometry/index.ts')),false);
  assert.equal(fs.existsSync(path.join(data(f),'geometry/angles/index.ts')),false);
  assert.match(fs.readFileSync(f.md,'utf8'),/Status: implemented/);
  assert.match(fs.readFileSync(f.md,'utf8'),/\[compareAngles.data.ts\]\(/);
  const before=source(f,'music/skills/hearRhythm.data.ts');
  const second=f.run('--apply');
  assert.equal(second.status,0,second.stderr);
  assert.equal(source(f,'music/skills/hearRhythm.data.ts'),before);
}));

test('update preserves entity UUID, existing locales and unrelated source',()=>withFixture(f=>{
  assert.equal(f.run('--apply').status,0);
  const p='music/skills/hearRhythm.data.ts',id=uuid(source(f,p));
  const geometry=source(f,'geometry/geometry.data.ts');
  const sourceBefore=source(f,p);
  f.edit(s=>s.replace('Action: create\nStatus: implemented\n\n[hearRhythm.data.ts]',
    'Action: update\nStatus: implemented\n\n[hearRhythm.data.ts]')
    .replace('Definition of Hear Rhythm.','Revised concept of Hear Rhythm.'));
  const translations=JSON.parse(fs.readFileSync(f.tFile,'utf8'));
  delete translations['music/hearRhythm'];
  fs.writeFileSync(f.tFile,JSON.stringify(translations));
  const r=f.run('--apply');
  assert.equal(r.status,0,r.stderr);
  assert.equal(uuid(source(f,p)),id);
  assert.match(source(f,p),/Revised concept of Hear Rhythm/);
  assert.equal(source(f,p).replace('Revised concept of Hear Rhythm.','Definition of Hear Rhythm.'),sourceBefore,
    'Updating a stable Skill changes only the approved text, not its layout');
  assert.equal(source(f,'geometry/geometry.data.ts'),geometry);
}));

test('a Skill update does not force unchanged ancestor Data to be regenerated',()=>withFixture(f=>{
  assert.equal(f.run('--apply').status,0);
  const beforeDomain=source(f,'geometry/geometry.data.ts');
  const beforeGroup=source(f,'geometry/angles/angles.data.ts');
  const leaf='geometry/angles/skills/compareAngles.data.ts';
  const beforeId=uuid(source(f,leaf));
  f.edit(s=>s.replace('Slug: geometry\nAction: create','Slug: geometry\nAction: skip')
    .replace('Slug: angles\nAction: create','Slug: angles\nAction: skip')
    .replace('Slug: compareAngles\nAction: create','Slug: compareAngles\nAction: update')
    .replace('Definition of Compare Angles.','Updated angle comparison description.'));
  const r=f.run('--apply');
  assert.equal(r.status,0,r.stderr);
  assert.equal(source(f,'geometry/geometry.data.ts'),beforeDomain);
  assert.equal(source(f,'geometry/angles/angles.data.ts'),beforeGroup);
  assert.equal(uuid(source(f,leaf)),beforeId);
  assert.match(source(f,leaf),/Updated angle comparison description/);
}));

test('missing localization blocks only affected Domain',()=>withFixture(f=>{
  const loc=JSON.parse(fs.readFileSync(f.tFile,'utf8'));
  delete loc['geometry/angles/compareAngles'].fe.uk;
  fs.writeFileSync(f.tFile,JSON.stringify(loc));
  const r=f.run('--apply');
  assert.notEqual(r.status,0);
  assert.match(r.stderr,/Incomplete locales/);
  assert.equal(fs.existsSync(path.join(data(f),'geometry')),false);
  assert.ok(fs.existsSync(path.join(data(f),'music/skills/hearRhythm.data.ts')));
}));

test('duplicate slug across Domains or entity kinds fails before write',()=>withFixture(f=>{
  f.edit(s=>s.replace('Slug: hearRhythm','Slug: compareAngles'));
  const r=f.run('--apply');
  assert.notEqual(r.status,0);
  assert.match(r.stderr,/Duplicate taxonomy slug/);
  assert.equal(fs.existsSync(data(f)),false);
}));

test('delete actions are blocked even if the legacy authorization switch is present',()=>withFixture(f=>{
  assert.equal(f.run('--apply').status,0);
  const before=source(f,'music/music.data.ts');
  f.edit(s=>s.replace('Slug: music\nAction: create\nStatus: implemented',
    'Slug: music\nAction: delete\nStatus: implemented'));
  const r=f.run('--apply','--allow-delete');
  assert.notEqual(r.status,0);
  assert.match(r.stderr,/Deletion disabled/);
  assert.equal(source(f,'music/music.data.ts'),before);
}));

test('invalid update never allocates an identity, and another Domain can succeed',()=>withFixture(f=>{
  f.edit(s=>s.replace('Action: create\nStatus: pending\n\n[Not implemented](#)\n\nMethodological description: Definition of Compare Angles.',
    'Action: update\nStatus: pending\n\n[Not implemented](#)\n\nMethodological description: Definition of Compare Angles.'));
  const r=f.run('--apply');
  assert.notEqual(r.status,0);
  assert.match(r.stderr,/Update requires existing verified entity/);
  assert.ok(fs.existsSync(path.join(data(f),'music/skills/hearRhythm.data.ts')));
  assert.equal(fs.existsSync(path.join(data(f),'geometry')),false);
}));

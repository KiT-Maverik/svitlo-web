#!/usr/bin/env node
/** Permanent editorial Markdown -> typed Skill source generator. No textbook content is changed on import. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slugPattern = /^[a-z][A-Za-z0-9]*$/;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const errors = [];
const reports = [];
const opts = { apply: false, allowDelete: false };
function diagnostic(entity, action, severity, problem) {
  const item = { entity, action, severity, problem };
  reports.push(item);
  if (severity === 'error') errors.push(item);
  console.error(JSON.stringify(item));
}
function cli() {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--apply' || arg === '--allow-delete') {
      if (opts[arg === '--apply' ? 'apply' : 'allowDelete']) throw Error('Duplicate flag: ' + arg);
      opts[arg === '--apply' ? 'apply' : 'allowDelete'] = true;
    } else if (arg === '--package' || arg === '--translations') {
      const key = arg.slice(2);
      if (opts[key] || !args[i + 1] || args[i + 1].startsWith('--')) throw Error('Missing/duplicate value: ' + arg);
      opts[key] = args[++i];
    } else throw Error('Unknown argument: ' + arg);
  }
  if (!opts.package || (opts.allowDelete && !opts.apply)) throw Error('Usage: --package learningApps/<textbook> [--translations <reviewed.json>] [--apply [--allow-delete]]');
  const apps = path.join(root, 'learningApps') + path.sep;
  const pkg = path.resolve(root, opts.package);
  if (!pkg.startsWith(apps) || !fs.existsSync(path.join(pkg, 'package.json'))) throw Error('Expected existing textbook package under learningApps/');
  opts.packageRoot = pkg;
  opts.markdown = path.join(pkg, 'docs/skills/taxonomy.md');
  opts.targetRoot = path.join(pkg, 'Data/skills');
  if (!fs.existsSync(opts.markdown)) throw Error('Missing taxonomy.md: ' + opts.markdown);
  if (opts.translations) {
    const p = path.resolve(root, opts.translations);
    if (!p.startsWith(root + path.sep) || !fs.existsSync(p)) throw Error('Translations must be an existing file inside repository');
    opts.translations = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!opts.translations || Array.isArray(opts.translations) || typeof opts.translations !== 'object') throw Error('Translations JSON must be an entity-path map');
  } else opts.translations = {};
}
function locales() {
  const source = fs.readFileSync(path.join(root, 'shared/contracts/src/types/languages.ts'), 'utf8');
  const marker = source.indexOf('export const DEFAULT_SUPPORTED_LANGUAGES = [');
  const end = source.indexOf('] as const satisfies readonly LanguageDefinition[];', marker);
  if (marker < 0 || end < 0) throw Error('Unable to read supported-language registry');
  const codes = [...source.slice(marker, end).matchAll(/\blanguage:\s*'([^']+)'/g)].map(m => m[1]);
  if (!codes.includes('en') || codes.length < 2 || new Set(codes).size !== codes.length) throw Error('Invalid supported-language registry');
  return codes;
}
function sourceFile(file, content) {
  const ast = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  if (ast.parseDiagnostics.length) throw Error('Invalid TypeScript: ' + file);
  return ast;
}
function unwrap(node) {
  while (node && (ts.isAsExpression(node) || ts.isParenthesizedExpression(node) || ts.isSatisfiesExpression(node))) node = node.expression;
  return node;
}
function property(object, key) {
  if (!object || !ts.isObjectLiteralExpression(object)) throw Error('Expected object for ' + key);
  const hits = object.properties.filter(p => ts.isPropertyAssignment(p) && p.name?.text === key);
  if (hits.length !== 1) throw Error('Expected one ' + key + ' property');
  return hits[0];
}
function optionalProperty(object, key) {
  return object.properties.find(p => ts.isPropertyAssignment(p) && p.name?.text === key);
}
function readId(file, variable, key) {
  if (!fs.existsSync(file)) throw Error('Missing identity map: ' + file);
  const source = fs.readFileSync(file, 'utf8');
  const ast = sourceFile(file, source);
  const declarations = ast.statements.filter(ts.isVariableStatement).flatMap(s => [...s.declarationList.declarations]);
  const decl = declarations.find(d => d.name.getText(ast) === variable);
  if (!decl) throw Error('Missing ID dictionary ' + variable);
  const v = unwrap(decl.initializer);
  const literal = property(v, key).initializer;
  if (!ts.isStringLiteral(literal) || !uuidPattern.test(literal.text)) throw Error('Invalid UUID in ' + file + ':' + key);
  return literal.text;
}
function readCode(file, kind) {
  if (!fs.existsSync(file)) throw Error('Missing ' + kind + ' code: ' + file);
  const source = fs.readFileSync(file, 'utf8');
  const ast = sourceFile(file, source);
  let found;
  function walk(n) {
    if (ts.isCallExpression(n) && ts.isIdentifier(n.expression) && n.expression.text === 'build' + kind + 'Config') {
      if (found || n.arguments.length !== 1 || !ts.isObjectLiteralExpression(n.arguments[0])) throw Error('Ambiguous ' + kind + ' config: ' + file);
      found = n.arguments[0];
    }
    ts.forEachChild(n, walk);
  }
  walk(ast);
  if (!found) throw Error('Missing build' + kind + 'Config: ' + file);
  return { source, ast, config: found };
}
function literal(node, field) {
  if (!(ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))) throw Error('Expected literal ' + field);
  return node.text;
}
function dict(object, field) {
  const result = {};
  const v = unwrap(object);
  if (!ts.isObjectLiteralExpression(v)) throw Error('Expected localized object ' + field);
  for (const p of v.properties) {
    if (!ts.isPropertyAssignment(p) || !(ts.isIdentifier(p.name) || ts.isStringLiteral(p.name)) || Object.hasOwn(result, p.name.text)) throw Error('Invalid/duplicate key in ' + field);
    result[p.name.text] = literal(p.initializer, field + ':' + p.name.text);
  }
  return result;
}
function checkLocales(value, field, codes) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw Error('Missing localized ' + field);
  const keys = Object.keys(value);
  const missing = codes.filter(c => typeof value[c] !== 'string' || !value[c].trim() || /^\[(?:Not authored|TODO)\]$/i.test(value[c].trim()));
  const extras = keys.filter(k => !codes.includes(k));
  if (missing.length || extras.length) throw Error('Incomplete locales for ' + field + ': missing ' + missing.join(', ') + '; unexpected ' + extras.join(', '));
  return value;
}
function translations(entry, codes) {
  const given = opts.translations[entry.key] ?? {};
  if (!given || typeof given !== 'object' || Array.isArray(given)) throw Error('Invalid translations for ' + entry.key);
  if (Object.keys(given).some(k => k !== 'name' && k !== 'fe')) throw Error('Unexpected translation field for ' + entry.key);
  if (given.name && given.name.en !== entry.title) throw Error('Translated name.en differs from approved heading');
  if (given.fe && entry.friendly !== '[Not authored]' && given.fe.en !== entry.friendly) throw Error('Translated fe.en differs from approved frontend text');
  return given;
}
function parse(markdown) {
  const headings = [...markdown.matchAll(/^(#{3,5}) ([^\r\n]+)\s*$/gm)];
  const entries = [];
  let domain, group;
  for (let i = 0; i < headings.length; i++) {
    const h = headings[i];
    const start = h.index, end = headings[i + 1]?.index ?? markdown.length;
    const body = markdown.slice(start + h[0].length, end);
    const lines = body.split(/\r?\n/).map(v => v.trim()).filter(Boolean);
    const single = label => {
      const matches = lines.filter(v => v.startsWith(label + ':'));
      if (matches.length !== 1) throw Error('Missing or repeated ' + label);
      return matches[0].slice(label.length + 1).trim();
    };
    const depth = h[1].length;
    const isGroup = depth === 4 && lines.some(v => /^Skills:\s*\d+\s*$/.test(v));
    const kind = depth === 3 ? 'SkillDomain' : depth === 5 ? 'Skill' : isGroup ? 'SkillGroup' : 'Skill';
    const entry = { title: h[2].trim(), depth, kind, start, end, body, issues: [] };
    if (depth === 3) { domain = entry; group = undefined; }
    else if (kind === 'SkillGroup') group = entry;
    else if (kind === 'Skill' && depth === 4) group = undefined;
    entry.parent = kind === 'SkillDomain' ? undefined : kind === 'SkillGroup' ? domain : depth === 5 ? group : domain;
    entry.domain = kind === 'SkillDomain' ? entry : domain;
    try {
      if (!entry.parent && kind !== 'SkillDomain') throw Error('Invalid heading ancestry');
      if (depth === 5 && !group) throw Error('Skill without Group');
      entry.slug = single('Slug');
      entry.action = single('Action');
      entry.status = single('Status');
      entry.methodological = single('Methodological description');
      entry.friendly = single('User-friendly description');
      if (!slugPattern.test(entry.slug)) throw Error('Invalid lowerCamelCase Slug');
      if (!['create','update','delete','skip'].includes(entry.action)) throw Error('Invalid Action');
      if (!['pending','implemented'].includes(entry.status)) throw Error('Invalid Status');
      if (!entry.methodological || /^\[/.test(entry.methodological)) throw Error('Missing approved methodological description');
      if (!entry.friendly || (entry.friendly.startsWith('[') && entry.friendly !== '[Not authored]')) throw Error('Invalid user-friendly description');
      const links = lines.filter(l => /^\[[^\]]+\]\([^)]+\)$/.test(l));
      if (links.length !== 1) throw Error('Expected one standalone Code link');
      entry.link = links[0];
      if (entry.status === 'pending' && entry.link !== '[Not implemented](#)') throw Error('Pending entity has non-pending Code link');
      if (entry.status === 'implemented' && entry.link === '[Not implemented](#)') throw Error('Implemented entity has no Code link');
      if (kind === 'SkillDomain' && !lines.some(l => /^Groups:\s*\d+\s*·\s*Skills:\s*\d+/.test(l))) throw Error('Domain count metadata missing');
      if (kind === 'SkillGroup' && !lines.some(l => /^Skills:\s*\d+$/.test(l))) throw Error('Group count metadata missing');
      if (kind === 'Skill' && lines.some(l => /^Skills:|^Groups:/.test(l))) throw Error('Skill has parent count metadata');
      const parentKey = entry.parent?.key;
      entry.key = parentKey ? parentKey + '/' + entry.slug : entry.slug;
    } catch (error) { entry.issues.push(error.message); entry.action ??= 'invalid'; entry.key ??= entry.title; }
    entries.push(entry);
  }
  if (!entries.length) throw Error('No taxonomy entries');
  // Slugs are globally unique among Domain/Group/Skill records in this textbook.
  // Check skipped/pending entries too, case-insensitively for filesystem portability.
  const slugOwners = new Map();
  for (const e of entries) {
    if (!slugPattern.test(e.slug ?? '')) continue;
    const canonicalSlug = e.slug.toLowerCase();
    const first = slugOwners.get(canonicalSlug);
    if (first) {
      const problem = `Duplicate taxonomy slug "${e.slug}" across ${first.key} (${first.kind}) and ${e.key} (${e.kind})`;
      first.issues.push(problem);
      e.issues.push(problem);
    } else slugOwners.set(canonicalSlug, e);
  }
  for (const e of entries) {
    if (e.kind === 'SkillDomain') e.children = entries.filter(x => x.parent === e);
    if (e.kind === 'SkillGroup') e.children = entries.filter(x => x.parent === e);
  }
  return entries;
}
function entityFiles(e) {
  const rootPath = opts.targetRoot;
  const domain = e.domain?.slug ?? e.slug;
  if (e.kind === 'SkillDomain') {
    const dir = path.join(rootPath, domain);
    return { file: path.join(dir, domain + '.data.ts'), ids: path.join(dir, domain + '.ids.ts'), var: domain + '_SkillDomain_Ids' };
  }
  if (e.kind === 'SkillGroup') {
    const dir = path.join(rootPath, domain, e.slug);
    return { file: path.join(dir, e.slug + '.data.ts'), ids: path.join(dir, e.slug + '.ids.ts'), var: e.slug + '_SkillGroup_Ids' };
  }
  const dir = e.depth === 5 ? path.join(rootPath, domain, e.parent.slug, 'skills') : path.join(rootPath, domain, 'skills');
  const parent = e.depth === 5 ? e.parent.slug : domain;
  return { file: path.join(dir, e.slug + '.data.ts'), ids: path.join(dir, 'index.ids.ts'), var: parent + '_Skills_Ids' };
}
function rel(file) { return path.relative(root, file).split(path.sep).join('/'); }
function literalObject(o) { return '{\n' + Object.entries(o).map(([k,v]) => '    ' + JSON.stringify(k) + ': ' + JSON.stringify(v) + ',').join('\n') + '\n  }'; }
function nameAndDescription(e, localized) {
  const desc = ['    methodological: ' + JSON.stringify(e.methodological) + ','];
  if (localized.fe) desc.push('    fe: ' + literalObject(localized.fe) + ',');
  return '  name: ' + literalObject(localized.name) + ',\n  description: {\n' + desc.join('\n') + '\n  },\n';
}
function generateCode(e, id, localized) {
  const imports = [`import { build${e.kind}Config } from '@svitlo/engine/taxonomy';`];
  const own = entityFiles(e);
  const key = e.slug, prefix = e.slug + '_' + (e.kind === 'SkillDomain' ? 'SkillDomain' : e.kind === 'SkillGroup' ? 'SkillGroup' : 'Skill');
  const idImport = e.kind === 'Skill' ? './index.ids' : './' + e.slug + '.ids';
  imports.push(`import { ${own.var} } from '${idImport}';`);
  let refs = '';
  if (e.kind === 'SkillDomain') {
    if (e.children[0]?.kind === 'SkillGroup') {
      imports.push(`import { ${e.slug}_SkillGroups_Ids } from './index.ids';`);
      refs = `  groupIds: ${e.slug}_SkillGroups_Ids,\n`;
    } else {
      imports.push(`import { ${e.slug}_Skills_Ids } from './skills/index.ids';`);
      refs = `  groupIds: {},\n  skillIds: ${e.slug}_Skills_Ids,\n`;
    }
  } else if (e.kind === 'SkillGroup') {
    imports.push(`import { ${e.slug}_Skills_Ids } from './skills/index.ids';`);
    refs = `  skillIds: ${e.slug}_Skills_Ids,\n`;
  }
  return imports.join('\n') + `\n\nexport const ${prefix}_Data = build${e.kind}Config({\n` +
    `  id: ${own.var}.${key},\n  slug: ${JSON.stringify(e.slug)},\n` + nameAndDescription(e, localized) + refs + '});\n';
}
function replaceLiteral(ast, node, value) {
  literal(node, 'updated field');
  return { start: node.getStart(ast), end: node.getEnd(), text: JSON.stringify(value) };
}
function patchCode(e, existing, localized, codes) {
  const { source, ast, config } = existing;
  const idRef = property(config, 'id').initializer.getText(ast);
  const own = entityFiles(e);
  if (idRef !== own.var + '.' + e.slug) throw Error('Existing ID reference conflicts with canonical identity map');
  const edits = [];
  const slug = optionalProperty(config, 'slug');
  if (slug) {
    if (literal(slug.initializer, 'slug') !== e.slug)
      throw Error('Existing slug conflicts with approved taxonomy Slug: ' + e.key);
  } else {
    // Legacy sources can gain the new field without changing their UUID or unrelated values.
    const start = property(config, 'name').getStart(ast);
    edits.push({ start, end: start, text: `slug: ${JSON.stringify(e.slug)},\n  ` });
  }
  const nameObject = unwrap(property(config, 'name').initializer);
  checkLocales(dict(nameObject, 'name'), 'existing name', codes);
  if (localized.name) {
    checkLocales(localized.name, 'name', codes);
    edits.push({ start: nameObject.getStart(ast), end: nameObject.getEnd(), text: literalObject(localized.name) });
  } else edits.push(replaceLiteral(ast, property(nameObject, 'en').initializer, e.title));
  const desc = unwrap(property(config, 'description').initializer);
  edits.push(replaceLiteral(ast, property(desc, 'methodological').initializer, e.methodological));
  const fe = optionalProperty(desc, 'fe');
  if (localized.fe) {
    checkLocales(localized.fe, 'fe', codes);
    if (fe) edits.push({ start: fe.initializer.getStart(ast), end: fe.initializer.getEnd(), text: literalObject(localized.fe) });
    else edits.push({ start: desc.getEnd() - 1, end: desc.getEnd() - 1, text: '\n    fe: ' + literalObject(localized.fe) + ',\n  ' });
  } else if (fe) {
    const old = dict(fe.initializer, 'fe');
    checkLocales(old, 'existing fe', codes);
    if (e.friendly !== '[Not authored]') edits.push(replaceLiteral(ast, property(unwrap(fe.initializer), 'en').initializer, e.friendly));
  } else if (e.kind === 'Skill' || e.friendly !== '[Not authored]') {
    throw Error('Missing complete frontend locale translations for update');
  }
  let updated = source;
  for (const edit of edits.sort((a,b) => b.start-a.start)) updated = updated.slice(0, edit.start) + edit.text + updated.slice(edit.end);
  sourceFile(entityFiles(e).file, updated);
  return updated;
}
function idExportMap(name, children, kind) {
  if (!children.length) return null;
  const imports = kind === 'groups' ? children.map(c => `import { ${c.slug}_SkillGroup_Ids } from './${c.slug}/${c.slug}.ids';`) : [];
  const props = children.map(c => `  ${c.slug}: ${kind === 'groups' ? `${c.slug}_SkillGroup_Ids.${c.slug}` : JSON.stringify(c.id)},`);
  return imports.join('\n') + (imports.length ? '\n\n' : '') + `export const ${name}_${kind === 'groups' ? 'SkillGroups' : 'Skills'}_Ids = {\n${props.join('\n')}\n} as const;\n`;
}
function codeLink(e) {
  const target = entityFiles(e).file;
  const pathRelative = path.relative(path.dirname(opts.markdown), target).split(path.sep).join('/');
  return `[${path.basename(target)}](${encodeURI(pathRelative)})`;
}
function validateLink(e) {
  if (e.status !== 'implemented') return;
  if (e.link !== codeLink(e)) throw Error('Code link is not verified canonical target (expected ' + codeLink(e) + ')');
}
function inPackageReferences(removal, plan) {
  const hits = [];
  const removed = new Set(removal.map(x => path.resolve(x.file)));
  const covered = new Set([...plan.keys()].map(x => path.resolve(x)));
  const tokens = removal.flatMap(x => [x.id, `${x.slug}_${x.kind === 'Skill' ? 'Skill' : x.kind === 'SkillGroup' ? 'SkillGroup' : 'SkillDomain'}_Data`]);
  function walk(dir) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      if (['node_modules','.git','.next','.test-build','coverage','dist','temp'].includes(ent.name)) continue;
      const f = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(f);
      else if (ent.isFile() && /\.(ts|tsx|js|mjs|json|md)$/.test(f) && !removed.has(f) && !covered.has(f) && f !== opts.markdown) {
        const content = fs.readFileSync(f, 'utf8');
        if (tokens.some(t => t && content.includes(t))) hits.push(rel(f));
      }
    }
  }
  walk(opts.packageRoot);
  return hits;
}
function atomicApply(changes) {
  const before = new Map();
  const touched = [];
  const staging = [];
  try {
    for (const [file, content] of changes) {
      before.set(file, fs.existsSync(file) ? fs.readFileSync(file) : null);
      if (content === null) continue;
      fs.mkdirSync(path.dirname(file), { recursive: true });
      const tmp = file + '.taxonomy-' + crypto.randomUUID() + '.tmp';
      fs.writeFileSync(tmp, content);
      staging.push(tmp);
    }
    for (const [file, content] of changes) {
      if (content === null) { if (fs.existsSync(file)) fs.unlinkSync(file); }
      else {
        const tmp = staging.shift();
        fs.renameSync(tmp, file);
      }
      touched.push(file);
    }
  } catch (error) {
    for (const file of touched.reverse()) {
      const prior = before.get(file);
      if (prior === null) fs.rmSync(file, { force: true });
      else fs.writeFileSync(file, prior);
    }
    throw error;
  } finally { for (const tmp of staging) fs.rmSync(tmp, { force: true }); }
}

/** Canonical UUID owners are Domain/Group *.ids.ts and Skills index.ids.ts.
 * Parent/child maps and ID barrels only reference those UUIDs.
 */
function scanUuidRegistry() {
  const byId = new Map();
  const issues = new Map();
  const report = (domain, message) => {
    const current = issues.get(domain) ?? [];
    current.push(message);
    issues.set(domain, current);
  };
  if (!fs.existsSync(opts.targetRoot)) return { byId, issues };
  function scan(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      const parts = path.relative(opts.targetRoot, file).split(path.sep);
      const domain = parts[0];
      if (entry.isSymbolicLink()) {
        report(domain, 'Symlink in taxonomy UUID tree: ' + rel(file));
        continue;
      }
      if (entry.isDirectory()) { scan(file); continue; }
      if (!entry.isFile() || !entry.name.endsWith('.ids.ts')) continue;
      let variable;
      if (parts.length === 2 && entry.name === domain + '.ids.ts')
        variable = domain + '_SkillDomain_Ids';
      else if (parts.length === 3 && parts[1] !== 'skills' && entry.name === parts[1] + '.ids.ts')
        variable = parts[1] + '_SkillGroup_Ids';
      else if (parts.length === 3 && parts[1] === 'skills' && entry.name === 'index.ids.ts')
        variable = domain + '_Skills_Ids';
      else if (parts.length === 4 && parts[2] === 'skills' && entry.name === 'index.ids.ts')
        variable = parts[1] + '_Skills_Ids';
      else continue; // not an owner map
      try {
        const ast = sourceFile(file, fs.readFileSync(file, 'utf8'));
        const declarations = ast.statements.filter(ts.isVariableStatement)
          .flatMap(st => [...st.declarationList.declarations])
          .filter(decl => decl.name.getText(ast) === variable);
        if (declarations.length !== 1) throw Error('Expected one ' + variable + ' identity map');
        const map = unwrap(declarations[0].initializer);
        if (!ts.isObjectLiteralExpression(map)) throw Error('Nonliteral UUID identity map');
        const seenKeys = new Set();
        for (const member of map.properties) {
          if (!ts.isPropertyAssignment(member) ||
              !(ts.isIdentifier(member.name) || ts.isStringLiteral(member.name)))
            throw Error('Unsupported UUID map member');
          const key = member.name.text;
          if (seenKeys.has(key)) throw Error('Repeated key ' + key);
          seenKeys.add(key);
          const id = literal(member.initializer, 'UUID identity');
          if (!uuidPattern.test(id)) throw Error('Malformed UUID for ' + key);
          const owner = { file, key, domain };
          const canonicalId = id.toLowerCase();
          const first = byId.get(canonicalId);
          if (first) {
            const problem = `Duplicate taxonomy UUID ${id} at ${rel(first.file)}#${first.key} and ${rel(file)}#${key}`;
            report(first.domain, problem);
            if (first.domain !== domain) report(domain, problem);
          } else byId.set(canonicalId, owner);
        }
      } catch (error) { report(domain, `Invalid UUID registry ${rel(file)}: ${error.message}`); }
    }
  }
  scan(opts.targetRoot);
  return { byId, issues };
}
function newUniqueUuid(registry, entity) {
  // Cryptographic v4 IDs are reserved before planning the next entity.
  for (let attempt = 0; attempt < 64; attempt++) {
    const id = crypto.randomUUID();
    if (!uuidPattern.test(id)) throw Error('UUID generator produced malformed identity');
    if (registry.byId.has(id.toLowerCase())) continue;
    const f = entityFiles(entity);
    registry.byId.set(id.toLowerCase(), { file: f.ids, key: entity.slug, domain: entity.domain.slug });
    return id;
  }
  throw Error('Unable to generate unique UUID after 64 collisions: ' + entity.key);
}

function run() {
  cli();
  const codes = locales();
  const original = fs.readFileSync(opts.markdown, 'utf8');
  const entities = parse(original);
  const uuidRegistry = scanUuidRegistry();
  const domains = entities.filter(e => e.kind === 'SkillDomain');
  const written = new Map();
  const status = new Map();
  let success = 0, skipped = 0;
  const taken = new Set();
  for (const domain of domains) {
    const subtree = entities.filter(e => e.domain === domain);
    const local = new Map();
    try {
      // Validate before planning writes: nothing in a failed domain is modified.
      const registryProblems = uuidRegistry.issues.get(domain.slug) ?? [];
      if (registryProblems.length || subtree.some(e => e.issues.length)) {
        const authored = subtree.filter(e => e.issues.length)
          .map(e => e.key + ': ' + e.issues.join('; '));
        throw Error([...registryProblems, ...authored].join('; '));
      }
      // Skipping a fully pending subtree does not require fabricated child IDs.
      if (subtree.every(e => e.action === 'skip' && e.status === 'pending')) {
        skipped += subtree.length;
        continue;
      }
      for (const e of subtree) {
        const f = entityFiles(e);
        if (!path.resolve(f.file).startsWith(opts.targetRoot + path.sep)) throw Error('Unsafe destination for ' + e.key);
        if (taken.has(f.file)) throw Error('Duplicate output file ' + rel(f.file));
        taken.add(f.file);
        validateLink(e);
      }
      const children = domain.children;
      if (!children.length || (children.some(e => e.kind === 'SkillGroup') && children.some(e => e.kind === 'Skill'))) throw Error('Domain must contain either Groups or direct Skills');
      if (children.some(c => c.kind === 'SkillGroup' && !c.children.length)) throw Error('Group cannot have zero Skills');
      const ordered = [...subtree].sort((a,b) => b.depth-a.depth);
      for (const e of ordered) {
        const f = entityFiles(e);
        const exists = fs.existsSync(f.file);
        if (e.action === 'skip') {
          if (e.status === 'implemented') {
            if (!exists) throw Error('Skipped implemented target missing: ' + e.key);
            readCode(f.file, e.kind);
            e.id = readId(f.ids, f.var, e.slug);
          }
          continue;
        }
        if (e.action === 'delete') {
          if (!opts.apply || !opts.allowDelete) throw Error('Deletion requires explicit --apply --allow-delete authorization');
          if (e.children?.some(c => c.action !== 'delete')) throw Error('Unsafe deletion: nondeleted descendants of ' + e.key);
          if (!exists && e.status === 'pending') continue; // idempotent deletion rerun
          if (!exists || e.status !== 'implemented') throw Error('Delete requires implemented verified target: ' + e.key);
          e.id = readId(f.ids, f.var, e.slug);
          readCode(f.file, e.kind);
          local.set(f.file, null);
          status.set(e, 'deleted');
          continue;
        }
        if (e.action === 'create') {
          if (exists && e.status !== 'implemented') throw Error('Conflicting create target: ' + e.key);
          if (!exists && e.status === 'implemented') throw Error('Implemented create target missing: ' + e.key);
          if (exists) {
            const current = readCode(f.file, e.kind);
            if (property(current.config, 'id').initializer.getText(current.ast) !== f.var + '.' + e.slug) throw Error('Conflicting create identity reference: ' + e.key);
            e.id = readId(f.ids, f.var, e.slug);
            const existingSlug = optionalProperty(current.config, 'slug');
            if (existingSlug) {
              if (literal(existingSlug.initializer, 'slug') !== e.slug)
                throw Error('Existing slug conflicts with approved taxonomy Slug: ' + e.key);
            } else {
              // A rerun against code generated before slug support safely backfills only slug.
              const start = property(current.config, 'name').getStart(current.ast);
              local.set(f.file, current.source.slice(0, start) +
                `slug: ${JSON.stringify(e.slug)},\n  ` + current.source.slice(start));
            }
            const n = dict(unwrap(property(current.config, 'name').initializer), 'name');
            const d = unwrap(property(current.config, 'description').initializer);
            if (n.en !== e.title || literal(property(d, 'methodological').initializer, 'methodological') !== e.methodological) throw Error('Conflicting create target: ' + e.key);
            if (e.kind === 'Skill') {
              const fe = dict(unwrap(property(d, 'fe').initializer), 'fe');
              checkLocales(fe, 'existing Skill fe', codes);
              if (fe.en !== e.friendly) throw Error('Conflicting create frontend text: ' + e.key);
            }
            checkLocales(n, 'existing name', codes);
          } else {
            const t = translations(e, codes);
            checkLocales(t.name, 'name ' + e.key, codes);
            if (e.kind === 'Skill' || e.friendly !== '[Not authored]') checkLocales(t.fe, 'fe ' + e.key, codes);
            if (e.kind === 'Skill' && e.friendly === '[Not authored]') throw Error('Skill user-friendly description is not authored');
            e.id = newUniqueUuid(uuidRegistry, e);
            local.set(f.file, generateCode(e, e.id, t));
          }
          status.set(e, 'implemented');
          continue;
        }
        if (e.action === 'update') {
          if (!exists) throw Error('Nonexistent update target: ' + e.key);
          if (e.status !== 'implemented') throw Error('Update requires verified implemented status: ' + e.key);
          e.id = readId(f.ids, f.var, e.slug);
          const t = translations(e, codes);
          const updated = patchCode(e, readCode(f.file, e.kind), t, codes);
          if (updated !== fs.readFileSync(f.file, 'utf8')) local.set(f.file, updated);
          status.set(e, 'implemented');
        }
      }
      // An unapplied delete or an unimplemented skipped child must not yield dangling ID references.
      const survivors = subtree.filter(e => status.get(e) !== 'deleted' && (e.action !== 'delete' || !opts.allowDelete));
      const remaining = e => (e.children || []).filter(c => survivors.includes(c));
      for (const e of survivors) {
        if (!e.id) {
          if (e.action === 'skip' && e.status === 'pending' && !remaining(e).length) continue;
          throw Error('Cannot reference unimplemented or deferred child ' + e.key);
        }
        if (e.kind !== 'Skill' && !remaining(e).length) throw Error('Cannot publish empty parent ' + e.key);
        if (e.action === 'skip' && remaining(e).some(c => c.action !== 'skip')) throw Error('Skipped parent cannot change child references: ' + e.key);
      }
      if (opts.apply && opts.allowDelete) {
        const removing = subtree.filter(e => status.get(e) === 'deleted');
        if (removing.length) {
          const allPaths = new Set(removing.map(e => entityFiles(e).file));
          // Indexed references are rewritten below, so remove them from dependency scan.
          for (const e of subtree) {
            if (e.kind === 'SkillDomain') allPaths.add(path.join(opts.targetRoot,'index.data.ts'));
            if (e.kind === 'SkillDomain') allPaths.add(path.join(opts.targetRoot,'index.ids.ts'));
            if (e.kind === 'SkillDomain') allPaths.add(path.join(opts.targetRoot,e.slug,'index.ids.ts'));
            if (e.kind === 'SkillDomain') allPaths.add(path.join(opts.targetRoot,e.slug,'index.data.ts'));
            if (e.kind === 'SkillGroup') allPaths.add(path.join(path.dirname(entityFiles(e).file), 'index.data.ts'));
            if (e.kind === 'SkillGroup' || e.kind === 'SkillDomain') allPaths.add(path.join(path.dirname(entityFiles(e).file),'skills/index.ids.ts'));
            if (e.kind === 'SkillGroup' || e.kind === 'SkillDomain') allPaths.add(path.join(path.dirname(entityFiles(e).file),'skills/index.data.ts'));
          }
          for (const e of removing) allPaths.add(entityFiles(e).ids);
          const fakePlan = new Map([...local, ...[...allPaths].map(f => [f, null])]);
          const refs = inPackageReferences(removing.map(e => ({ ...e, file: entityFiles(e).file })), fakePlan);
          if (refs.length) throw Error('Unsafe deletion; external references: ' + refs.join(', '));
        }
      }
      // Build ID maps and index exports from the complete surviving catalog, never from only changed entries.
      for (const e of survivors) {
        if (!e.id) continue;
        const f = entityFiles(e);
        if (e.kind !== 'Skill') {
          const self = `export const ${f.var} = {\n  ${e.slug}: '${e.id}',\n} as const;\n`;
          if (!fs.existsSync(f.ids)) local.set(f.ids, self);
          else if (readId(f.ids, f.var, e.slug) !== e.id) throw Error('Identity changed unexpectedly: ' + e.key);
          const idx = path.join(path.dirname(f.file),'index.data.ts');
          const code = `export { ${e.slug}_${e.kind}_Data } from './${e.slug}.data';\n`;
          if (e.action !== 'skip' && (!fs.existsSync(idx) || fs.readFileSync(idx,'utf8') !== code)) local.set(idx, code);
        }
      }
      const activeChildren = parent => (parent.children || []).filter(x => x.id && status.get(x) !== 'deleted');
      for (const e of survivors.filter(x => x.kind !== 'Skill')) {
        const kids = activeChildren(e);
        if (!kids.length || e.action === 'skip') continue;
        const dir = path.dirname(entityFiles(e).file);
        const childDir = path.join(dir, kids[0].kind === 'SkillGroup' ? '' : 'skills');
        const idFile = path.join(childDir,'index.ids.ts');
        const map = idExportMap(e.slug, kids, kids[0].kind === 'SkillGroup' ? 'groups' : 'skills');
        if (!map) throw Error('Empty index for ' + e.key);
        // Removing a known child is allowed; dropping an unknown approved ID is not.
        if (fs.existsSync(idFile)) {
          const src = fs.readFileSync(idFile, 'utf8');
          const expectedName = `${e.slug}_${kids[0].kind === 'SkillGroup' ? 'SkillGroups' : 'Skills'}_Ids`;
          const ast = sourceFile(idFile, src);
          const decl = ast.statements.filter(ts.isVariableStatement).flatMap(x => [...x.declarationList.declarations])
            .find(x => x.name.getText(ast) === expectedName);
          if (!decl) throw Error('Unrecognized existing index ' + rel(idFile));
          const existingMap = unwrap(decl.initializer);
          if (!ts.isObjectLiteralExpression(existingMap)) throw Error('Invalid existing index ' + rel(idFile));
          const declared = new Set((e.children || []).map(x => x.slug));
          for (const p of existingMap.properties) {
            if (!ts.isPropertyAssignment(p) || !declared.has(p.name?.text))
              throw Error('Unknown existing child reference in ' + rel(idFile) + ': ' + p.name?.getText(ast));
          }
        }
        local.set(idFile, map);
        if (kids[0].kind === 'Skill') {
          local.set(path.join(childDir,'index.data.ts'), kids.map(k => `export { ${k.slug}_Skill_Data } from './${k.slug}.data';`).sort().join('\n') + '\n');
        }
      }
      for (const e of subtree.filter(x => status.get(x) === 'deleted')) {
        const f = entityFiles(e);
        if (e.kind !== 'Skill') {
          local.set(f.ids, null);
          local.set(path.join(path.dirname(f.file),'index.data.ts'), null);
          if (e.kind === 'SkillGroup' || e.kind === 'SkillDomain') {
            local.set(path.join(path.dirname(f.file),'skills/index.ids.ts'), null);
            local.set(path.join(path.dirname(f.file),'skills/index.data.ts'), null);
          }
        }
      }
      // Enforce no overwrite of unfamiliar existing files in create runs.
      for (const [file, content] of local) {
        if (content !== null && file.endsWith('.ts')) sourceFile(file, content);
        if (written.has(file) && written.get(file) !== content) throw Error('Cross-domain conflicting write: ' + rel(file));
      }
      for (const [file, content] of local) written.set(file, content);
      for (const e of subtree) if (status.get(e) === 'implemented' || status.get(e) === 'deleted') {
        if (e.status !== (status.get(e) === 'implemented' ? 'implemented' : 'pending')) {
          status.set(e, status.get(e));
        }
        success++;
      } else if (e.action === 'skip') skipped++;
    } catch (error) {
      for (const e of subtree) status.delete(e);
      diagnostic(domain.key, domain.action, 'error', error.message);
      skipped += subtree.length;
    }
  }
  // Registry errors in unauthored Domains are still reported (no accidental overwrite).
  const known = new Set(domains.map(d => d.slug));
  for (const [domain, problems] of uuidRegistry.issues) {
    if (!known.has(domain)) for (const problem of problems)
      diagnostic(domain, 'uuid-validation', 'error', problem);
  }
  // Merge root exports without dropping source for failed/untouched Domains.
  // An invalid Domain must not prevent independently valid sibling Domains from being indexed.
  const active = domains.filter(d => d.id && status.get(d) !== 'deleted');
  const deleted = new Set(domains.filter(d => status.get(d) === 'deleted').map(d => d.slug));
  const changed = domains.some(d => {
    const members = entities.filter(e => e.domain === d);
    return members.some(e => status.get(e) === 'deleted' ||
      (status.get(e) === 'implemented' && e.action !== 'skip'));
  });
  if (changed) {
    for (const [name, suffix, kind] of [
      ['index.data.ts', '/index.data', 'SkillDomain_Data'],
      ['index.ids.ts', '', 'SkillDomain_Ids'],
    ]) {
      const file = path.join(opts.targetRoot, name);
      const lines = new Map();
      if (fs.existsSync(file)) {
        for (const line of fs.readFileSync(file,'utf8').split(/\r?\n/).filter(Boolean)) {
          const match = line.match(/^export \{ [A-Za-z][A-Za-z0-9]*_SkillDomain_(?:Data|Ids) \} from '\.\/([a-z][A-Za-z0-9]*)\/(?:index\.data|[a-z][A-Za-z0-9]*\.ids)';$/);
          if (!match) throw Error('Unrecognized root taxonomy export in ' + rel(file));
          if (!deleted.has(match[1])) lines.set(match[1], line);
        }
      }
      for (const d of active) {
        const filename = kind === 'SkillDomain_Data' ? `./${d.slug}/index.data` : `./${d.slug}/${d.slug}.ids`;
        lines.set(d.slug, `export { ${d.slug}_${kind} } from '${filename}';`);
      }
      const content = [...lines.values()].sort().join('\n') + (lines.size ? '\n' : '');
      if (!lines.size) { if (fs.existsSync(file)) written.set(file, null); }
      else if (!fs.existsSync(file) || fs.readFileSync(file,'utf8') !== content) written.set(file,content);
    }
  }
  // Rewrite only implementation metadata; do not touch Action or editorial descriptions.
  let updated = original;
  const replacements = [];
  for (const e of entities) {
    const state = status.get(e);
    if (!state) continue;
    const targetStatus = state === 'deleted' ? 'pending' : 'implemented';
    const targetLink = state === 'deleted' ? '[Not implemented](#)' : codeLink(e);
    if (e.status !== targetStatus || e.link !== targetLink) {
      const bodyStart = e.start + updated.slice(e.start).indexOf('\n') + 1;
      const section = original.slice(bodyStart, e.end);
      const statusMatch = section.match(/^Status: (pending|implemented)$/m);
      if (!statusMatch) continue;
      const modified = section.replace(/^Status: (pending|implemented)$/m,'Status: ' + targetStatus).replace(e.link,targetLink);
      replacements.push({ start: bodyStart, end: e.end, text: modified });
    }
  }
  for (const p of replacements.sort((a,b) => b.start-a.start)) updated = updated.slice(0,p.start) + p.text + updated.slice(p.end);
  const count = k => entities.filter(e => e.kind === k && (status.get(e) === 'implemented' || (!status.has(e) && e.status === 'implemented'))).length;
  updated = updated.replace(/^Code files: .*$/m, `Code files: ${count('SkillDomain')}/${entities.filter(e => e.kind === 'SkillDomain').length} Domains · ${count('SkillGroup')}/${entities.filter(e => e.kind === 'SkillGroup').length} Groups · ${count('Skill')}/${entities.filter(e => e.kind === 'Skill').length} Skills`);
  if (updated !== original) written.set(opts.markdown, updated);
  for (const [file, content] of [...written]) if (content !== null && fs.existsSync(file) && fs.readFileSync(file,'utf8') === content) written.delete(file);
  if (opts.apply && written.size) {
    // Refuse symlinked path components, including previously existing target files.
    for (const file of written.keys()) {
      const sub = path.relative(opts.packageRoot, file);
      if (sub.startsWith('..') || path.isAbsolute(sub)) throw Error('Write path escapes textbook package');
      let current = opts.packageRoot;
      for (const component of sub.split(path.sep)) {
        current = path.join(current, component);
        if (fs.existsSync(current) && fs.lstatSync(current).isSymbolicLink())
          throw Error('Refusing symlinked output path: ' + rel(current));
      }
    }
    try { atomicApply(written); } catch (error) { diagnostic('batch','apply','error','Write failed and rolled back: ' + error.message); }
  }
  console.log(JSON.stringify({ mode: opts.apply ? 'apply' : 'dry-run', success, skipped, errors: errors.length, files: written.size }));
  if (errors.length) process.exitCode = 1;
}
try { run(); } catch (error) { diagnostic('batch','initialization','error',error.message); process.exitCode = 1; }

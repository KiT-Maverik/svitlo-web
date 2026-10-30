#!/usr/bin/env node
/** Independent, read-only static validator of authored taxonomy TypeScript. */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, join, relative, dirname, isAbsolute } from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const ROOTS = { new: 'Data/skills', legacy: 'src/data/skillsTaxonomy' };
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const SLUG = /^[a-z][A-Za-z0-9]*$/;
const UNRESOLVED = Symbol('unresolved');
const posix = value => value.split('\\').join('/');
const own = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const children = dir => existsSync(dir) ? readdirSync(dir, { withFileTypes: true }) : [];
const keyOf = name => ts.isIdentifier(name) || ts.isStringLiteral(name) ? name.text : undefined;

export function validateTaxonomy({ repo = process.cwd(), packageRoot, source }) {
  if (!own(ROOTS, source) || !packageRoot) throw new Error('Explicit --package and --source new|legacy are required');
  const base = resolve(repo);
  const pkg = resolve(base, packageRoot);
  if (relative(base, pkg).startsWith('..') || isAbsolute(relative(base, pkg))) throw new Error('Package must be within repository');
  const root = join(pkg, ROOTS[source]);
  const diagnostics = [];
  const counts = { domains: 0, groups: 0, skills: 0 };
  const label = path => posix(relative(base, path) || '.');
  const emit = (category, path, entity, message) => diagnostics.push({ category, path: label(path), entity, message });
  const files = new Map();
  const seenUUID = new Map();
  const graph = new Map();
  function checkUuid(id, file, entity) {
    if (typeof id !== 'string' || !UUID.test(id)) { emit('INVALID_UUID', file, entity, `Invalid UUID: ${String(id)}`); return; }
    const first = seenUUID.get(id.toLowerCase());
    if (first) emit('DUPLICATE_UUID', file, entity, `UUID ${id} already belongs to ${first}`);
    else seenUUID.set(id.toLowerCase(), entity);
  }
  function parse(file, required = true) {
    const absolute = resolve(file);
    if (files.has(absolute)) return files.get(absolute);
    if (!existsSync(absolute)) {
      if (required) emit('MISSING_FILE', absolute, '', 'Expected source file is missing');
      files.set(absolute, null); return null;
    }
    let sourceFile;
    try { sourceFile = ts.createSourceFile(absolute, readFileSync(absolute, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS); }
    catch (error) { emit('PARSE_ERROR', absolute, '', error.message); files.set(absolute, null); return null; }
    const record = { file: absolute, ast: sourceFile, vars: new Map(), imports: new Map(), exports: [], dependencies: new Set() };
    files.set(absolute, record);
    for (const err of sourceFile.parseDiagnostics) emit('PARSE_ERROR', absolute, '', ts.flattenDiagnosticMessageText(err.messageText, '\n'));
    for (const stmt of sourceFile.statements) {
      if (ts.isImportDeclaration(stmt) && ts.isStringLiteral(stmt.moduleSpecifier)) {
        const spec = stmt.moduleSpecifier.text;
        if (spec.startsWith('.')) {
          const dest = resolveModule(absolute, spec);
          record.dependencies.add(dest);
          if (stmt.importClause?.namedBindings && ts.isNamedImports(stmt.importClause.namedBindings)) {
            for (const item of stmt.importClause.namedBindings.elements) record.imports.set(item.name.text, { file: dest, name: item.propertyName?.text ?? item.name.text });
          }
        } else if (/\.ids\.ts$/.test(absolute) && !stmt.importClause?.isTypeOnly) {
          emit('ID_BOUNDARY', absolute, '', `ID module imports external dependency ${spec}`);
        }
        if (/\.ids\.ts$/.test(absolute) && spec.includes('.data')) emit('ID_BOUNDARY', absolute, '', `ID module imports Data: ${spec}`);
      }
      if (ts.isVariableStatement(stmt)) for (const declaration of stmt.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name) && declaration.initializer) record.vars.set(declaration.name.text, declaration.initializer);
      }
      if (ts.isExportDeclaration(stmt)) {
        const spec = stmt.moduleSpecifier && ts.isStringLiteral(stmt.moduleSpecifier) ? stmt.moduleSpecifier.text : null;
        const names = stmt.exportClause && ts.isNamedExports(stmt.exportClause) ? stmt.exportClause.elements.map(e => ({ name: e.name.text, from: e.propertyName?.text ?? e.name.text })) : null;
        record.exports.push({ spec, names, typeOnly: stmt.isTypeOnly });
        if (spec?.startsWith('.')) record.dependencies.add(resolveModule(absolute, spec));
      }
    }
    return record;
  }
  function resolveModule(from, spec) {
    const target = resolve(dirname(from), spec);
    return target.endsWith('.ts') ? target : `${target}.ts`;
  }
  const errorOnce = new Set();
  function unresolved(file, entity, message, category = 'BROKEN_REFERENCE') {
    const key = `${category}|${file}|${entity}|${message}`;
    if (!errorOnce.has(key)) { errorOnce.add(key); emit(category, file, entity, message); }
    return UNRESOLVED;
  }
  function evaluate(node, file, trail = new Set(), entity = '') {
    if (!node) return UNRESOLVED;
    if (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node) || ts.isTypeAssertionExpression(node)) return evaluate(node.expression, file, trail, entity);
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (ts.isObjectLiteralExpression(node)) {
      const out = Object.create(null);
      for (const prop of node.properties) {
        if (ts.isSpreadAssignment(prop)) {
          const part = evaluate(prop.expression, file, trail, entity);
          if (part === UNRESOLVED || !part || typeof part !== 'object' || Array.isArray(part)) return unresolved(file, entity, 'Unsupported object spread');
          for (const [k, v] of Object.entries(part)) { if (own(out, k)) emit('DUPLICATE_SCOPED_ID', file, entity, `Repeated key ${k}`); out[k] = v; }
        } else if (ts.isPropertyAssignment(prop)) {
          const key = keyOf(prop.name);
          if (!key) return unresolved(file, entity, 'Computed object key cannot be inspected statically', 'STATIC_LIMITATION');
          if (own(out, key)) emit('DUPLICATE_SCOPED_ID', file, entity, `Repeated key ${key}`);
          out[key] = evaluate(prop.initializer, file, trail, entity);
        } else return unresolved(file, entity, 'Unsupported object member', 'STATIC_LIMITATION');
      }
      return out;
    }
    if (ts.isArrayLiteralExpression(node)) return node.elements.map(e => evaluate(e, file, trail, entity));
    if (ts.isPropertyAccessExpression(node)) {
      const parent = evaluate(node.expression, file, trail, entity);
      return parent !== UNRESOLVED && parent != null && typeof parent === 'object' && own(parent, node.name.text) ? parent[node.name.text] : unresolved(file, entity, `Missing property ${node.name.text}`);
    }
    if (ts.isIdentifier(node)) {
      const token = `${file}#${node.text}`;
      if (trail.has(token)) return unresolved(file, entity, `Cyclic value reference: ${token}`, 'CYCLIC_REFERENCE');
      const next = new Set(trail).add(token);
      const module = parse(file);
      if (!module) return UNRESOLVED;
      if (module.vars.has(node.text)) return evaluate(module.vars.get(node.text), file, next, entity);
      if (module.imports.has(node.text)) {
        const imported = module.imports.get(node.text);
        if (!within(imported.file)) return unresolved(file, entity, `Reference leaves selected taxonomy root: ${imported.file}`);
        return evaluate(ts.factory.createIdentifier(imported.name), imported.file, next, entity);
      }
      return unresolved(file, entity, `Unknown identifier ${node.text}`);
    }
    return unresolved(file, entity, `Dynamic expression ${ts.SyntaxKind[node.kind]} cannot be inspected`, 'STATIC_LIMITATION');
  }
  function within(file) { const rel = relative(root, file); return rel !== '..' && !rel.startsWith('../') && !isAbsolute(rel); }
  function value(file, exportedName) {
    const mod = parse(file);
    if (!mod) return UNRESOLVED;
    if (!mod.vars.has(exportedName)) return unresolved(file, exportedName, 'Expected exported symbol is absent');
    return evaluate(mod.vars.get(exportedName), file, new Set(), exportedName);
  }
  function builder(file, symbol, kind) {
    const mod = parse(file);
    if (!mod) return null;
    const declaration = mod.ast.statements.find(stmt => ts.isVariableStatement(stmt) && stmt.declarationList.declarations.some(dec => ts.isIdentifier(dec.name) && dec.name.text === symbol));
    const exported = declaration?.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
    const expr = mod.vars.get(symbol);
    if (!exported || !expr || !ts.isCallExpression(expr) || !ts.isIdentifier(expr.expression) || expr.expression.text !== kind || expr.arguments.length !== 1) {
      emit('MALFORMED_EXPORT', file, symbol, `Expected export const ${symbol} = ${kind}({...})`); return null;
    }
    const config = evaluate(expr.arguments[0], file, new Set(), symbol);
    if (config === UNRESOLVED || !config || typeof config !== 'object') return null;
    return config;
  }
  function dictionary(file, symbol) {
    const mod = parse(file);
    if (!mod) return null;
    const stmt = mod.ast.statements.find(s => ts.isVariableStatement(s) && s.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword) && s.declarationList.declarations.some(d => ts.isIdentifier(d.name) && d.name.text === symbol));
    if (!stmt) { emit('MALFORMED_EXPORT', file, symbol, 'Expected named ID dictionary export'); return null; }
    const data = value(file, symbol);
    if (data === UNRESOLVED || !data || typeof data !== 'object' || Array.isArray(data)) { emit('INVALID_ID_MAP', file, symbol, 'ID dictionary must be a statically resolvable object'); return null; }
    return data;
  }
  function localeSet() {
    const file = join(base, 'shared/contracts/src/types/languages.ts');
    const mod = parse(file);
    if (!mod) return [];
    const expr = mod.vars.get('DEFAULT_SUPPORTED_LANGUAGES');
    const items = expr && evaluate(expr, file, new Set(), 'DEFAULT_SUPPORTED_LANGUAGES');
    if (!Array.isArray(items)) { emit('LANGUAGE_REGISTRY', file, '', 'Cannot statically read language registry'); return []; }
    const languages = items.map(x => x?.language).filter(x => typeof x === 'string');
    if (languages.length !== items.length || new Set(languages).size !== languages.length || !languages.length) emit('LANGUAGE_REGISTRY', file, '', 'Invalid language registry');
    return [...new Set(languages)];
  }
  const languages = localeSet();
  function translations(map, file, entity, field) {
    if (!map || typeof map !== 'object' || Array.isArray(map) || map === UNRESOLVED) { emit('REQUIRED_FIELD', file, entity, `${field} must be a localized dictionary`); return; }
    for (const lang of languages) if (typeof map[lang] !== 'string' || !map[lang].trim()) emit('INCOMPLETE_LOCALES', file, entity, `Missing or blank ${field}.${lang}`);
    for (const lang of Object.keys(map)) if (!languages.includes(lang)) emit('INCOMPLETE_LOCALES', file, entity, `Unexpected ${field}.${lang}`);
  }
  function fields(obj, file, entity, kind) {
    if (!obj) return;
    const expected = { Skill: ['id','name','description'], SkillGroup: ['id','name','description','skillIds'], SkillDomain: ['id','name','description','groupIds','skillIds'] }[kind];
    for (const key of Object.keys(obj)) if (!expected.includes(key)) emit('REQUIRED_FIELD', file, entity, `Unknown config field ${key}`);
    translations(obj.name, file, entity, 'name');
    if (!obj.description) { if (kind === 'Skill') emit('REQUIRED_FIELD', file, entity, 'Skill.description is required'); }
    else {
      if (typeof obj.description !== 'object' || Array.isArray(obj.description) || typeof obj.description.methodological !== 'string' || !obj.description.methodological.trim()) emit('REQUIRED_FIELD', file, entity, 'description.methodological must be non-empty English text');
      if (kind === 'Skill' || obj.description.fe !== undefined) translations(obj.description.fe, file, entity, 'description.fe');
      for (const k of Object.keys(obj.description)) if (!['methodological','fe'].includes(k)) emit('REQUIRED_FIELD', file, entity, `Unknown description field ${k}`);
    }
  }
  function entity(dir, slug, kind) {
    const file = join(dir, `${slug}.data.ts`);
    const symbol = `${slug}_${kind}_Data`;
    const data = builder(file, symbol, `build${kind}Config`);
    if (existsSync(file)) counts[kind === 'Skill' ? 'skills' : kind === 'SkillGroup' ? 'groups' : 'domains']++;
    if (data) { fields(data, file, symbol, kind); checkUuid(data.id, file, symbol); }
    return { data, file, slug, symbol, dir, kind };
  }
  function matchingIds(entityObj) {
    const { dir, slug, kind, data } = entityObj;
    const file = join(dir, `${slug}.ids.ts`);
    const map = dictionary(file, `${slug}_${kind}_Ids`);
    if (map) {
      const keys = Object.keys(map);
      if (keys.length !== 1 || keys[0] !== slug || map[slug] !== data?.id) emit('WRONG_ID_MAP', file, entityObj.symbol, 'Own ID dictionary must contain exactly its slug and its entity UUID');
    }
    return map;
  }
  function sameMap(dataMap, declared, file, entityName, relation) {
    if (!dataMap || typeof dataMap !== 'object' || Array.isArray(dataMap)) { emit('REQUIRED_FIELD', file, entityName, `${relation} must be a dictionary`); return; }
    if (!declared) return;
    for (const key of new Set([...Object.keys(dataMap), ...Object.keys(declared)])) if (dataMap[key] !== declared[key]) emit('WRONG_ID_MAP', file, entityName, `${relation}.${key} differs from direct-child ID index`);
  }
  function validateChildren(map, entities, parent, idName) {
    const file = parent.file;
    if (!map || typeof map !== 'object' || Array.isArray(map)) return;
    for (const e of entities) if (!own(map, e.slug)) emit('ORPHAN_ENTITY', e.file, e.symbol, `Not referenced in ${parent.symbol}.${idName}`);
    for (const [slug, id] of Object.entries(map)) {
      if (!SLUG.test(slug)) emit('INVALID_SLUG', file, parent.symbol, `Invalid child slug ${slug}`);
      if (typeof id !== 'string' || !UUID.test(id)) emit('INVALID_UUID', file, parent.symbol, `Invalid child UUID for ${slug}`);
      const target = entities.find(e => e.slug === slug);
      if (!target) emit('BROKEN_REFERENCE', file, parent.symbol, `No direct ${idName} entity file for ${slug}`);
      else if (target.data && target.data.id !== id) emit('WRONG_ID_MAP', file, parent.symbol, `ID for child ${slug} does not match its Data`);
    }
    if (new Set(Object.values(map).filter(x => typeof x === 'string')).size !== Object.values(map).filter(x => typeof x === 'string').length) emit('DUPLICATE_UUID', file, parent.symbol, `Duplicate UUID among ${idName}`);
  }
  function exportsAt(file, wanted, entityName) {
    const mod = parse(file);
    if (!mod) return;
    const actual = [];
    for (const ex of mod.exports) {
      if (ex.typeOnly || !ex.spec || !ex.spec.startsWith('.') || !ex.names) { emit('EXPORT_BOUNDARY', file, entityName, 'Only explicit named relative re-exports are allowed'); continue; }
      if (ex.spec.includes('.data') && file.endsWith('.ids.ts')) emit('ID_BOUNDARY', file, entityName, 'ID barrel re-exports Data');
      for (const name of ex.names) actual.push(`${name.name}|${name.from}|${posix(ex.spec)}`);
    }
    const expected = wanted.map(x => `${x.symbol}|${x.symbol}|${x.path}`);
    for (const x of expected) if (!actual.includes(x)) emit('EXPORT_BOUNDARY', file, entityName, `Missing or incorrect export ${x}`);
    for (const x of actual) if (!expected.includes(x)) emit('EXPORT_BOUNDARY', file, entityName, `Unexpected export ${x}`);
  }
  function validateNames(dir, known, suffix, entityName) {
    for (const f of children(dir)) if (f.isFile() && f.name.endsWith(suffix) && !known.has(f.name)) emit('ORPHAN_ENTITY', join(dir, f.name), entityName, `Unexpected ${suffix} file`);
  }
  function scanSkills(dir, parent) {
    const mapFile = join(dir, 'index.ids.ts');
    const map = dictionary(mapFile, `${parent.slug}_Skills_Ids`);
    const entries = children(dir).filter(f => f.isFile() && f.name.endsWith('.data.ts') && f.name !== 'index.data.ts');
    const result = [];
    for (const entry of entries) {
      const slug = entry.name.slice(0, -'.data.ts'.length);
      if (!SLUG.test(slug)) emit('INVALID_SLUG', join(dir, entry.name), '', `Invalid Skill filename slug: ${slug}`);
      result.push(entity(dir, slug, 'Skill'));
    }
    for (const key of Object.keys(map ?? {})) if (!entries.some(e => e.name === `${key}.data.ts`)) emit('MISSING_FILE', join(dir, `${key}.data.ts`), key, 'Skill ID has no matching Data file');
    validateChildren(map, result, parent, 'skillIds');
    sameMap(parent.data?.skillIds, map, parent.file, parent.symbol, 'skillIds');
    exportsAt(join(dir, 'index.data.ts'), result.map(e => ({ symbol: e.symbol, path: `./${e.slug}.data` })), parent.symbol);
    return result;
  }
  function scanGroup(dir, slug) {
    if (!SLUG.test(slug)) emit('INVALID_SLUG', dir, slug, 'Invalid Group directory slug');
    const g = entity(dir, slug, 'SkillGroup');
    matchingIds(g);
    exportsAt(join(dir, 'index.data.ts'), [{ symbol: g.symbol, path: `./${slug}.data` }], g.symbol);
    // The legacy Math tree lacks this optional Group barrel.
    if (source === 'new' || existsSync(join(dir, 'index.ids.ts'))) exportsAt(join(dir, 'index.ids.ts'), [{ symbol: `${slug}_SkillGroup_Ids`, path: `./${slug}.ids` }], g.symbol);
    const skillsDir = join(dir, 'skills');
    if (!existsSync(skillsDir)) emit('MISSING_FILE', skillsDir, g.symbol, 'Group skills directory missing');
    scanSkills(skillsDir, g);
    if (!g.data?.skillIds || !Object.keys(g.data.skillIds).length) emit('EMPTY_GROUP', g.file, g.symbol, 'SkillGroup must have direct Skills');
    validateNames(dir, new Set([`${slug}.data.ts`, 'index.data.ts']), '.data.ts', g.symbol);
    validateNames(dir, new Set([`${slug}.ids.ts`, 'index.ids.ts']), '.ids.ts', g.symbol);
    return g;
  }
  function scanDomain(dir, slug) {
    if (!SLUG.test(slug)) emit('INVALID_SLUG', dir, slug, 'Invalid Domain directory slug');
    const d = entity(dir, slug, 'SkillDomain');
    matchingIds(d);
    exportsAt(join(dir, 'index.data.ts'), [{ symbol: d.symbol, path: `./${slug}.data` }], d.symbol);
    const groupDirs = children(dir).filter(e => e.isDirectory() && e.name !== 'skills');
    const groups = groupDirs.map(g => scanGroup(join(dir, g.name), g.name));
    const hasDirect = existsSync(join(dir, 'skills'));
    const hasGroups = !!groups.length;
    if (hasDirect && hasGroups) emit('CROSS_LEVEL_RELATIONSHIP', d.file, d.symbol, 'Cannot mix direct Skills and Groups in a Domain');
    const skillMap = d.data?.skillIds;
    const groupMap = d.data?.groupIds;
    if (!groupMap || typeof groupMap !== 'object' || Array.isArray(groupMap)) emit('REQUIRED_FIELD', d.file, d.symbol, 'Domain.groupIds must be an object');
    const groupCount = groupMap && typeof groupMap === 'object' ? Object.keys(groupMap).length : 0;
    const skillCount = skillMap && typeof skillMap === 'object' ? Object.keys(skillMap).length : 0;
    if (!!groupCount === !!skillCount) emit('CROSS_LEVEL_RELATIONSHIP', d.file, d.symbol, 'Domain requires exactly one nonempty membership mode');
    const index = join(dir, 'index.ids.ts');
    if (hasDirect || skillCount) {
      const ids = dictionary(index, `${slug}_Skills_Ids`);
      scanSkills(join(dir, 'skills'), d);
      sameMap(skillMap, ids, d.file, d.symbol, 'skillIds');
      if (groupCount) emit('CROSS_LEVEL_RELATIONSHIP', d.file, d.symbol, 'Direct Skills with groupIds is invalid');
    } else {
      const ids = dictionary(index, `${slug}_SkillGroups_Ids`);
      validateChildren(ids, groups, d, 'groupIds');
      sameMap(groupMap, ids, d.file, d.symbol, 'groupIds');
      if (skillCount) emit('CROSS_LEVEL_RELATIONSHIP', d.file, d.symbol, 'Groups with direct skillIds is invalid');
    }
    validateNames(dir, new Set([`${slug}.data.ts`, 'index.data.ts']), '.data.ts', d.symbol);
    validateNames(dir, new Set([`${slug}.ids.ts`, 'index.ids.ts']), '.ids.ts', d.symbol);
    return d;
  }
  if (!existsSync(root)) emit('MISSING_ROOT', root, '', `Selected ${source} taxonomy root not found; no fallback to the other architecture`);
  const domains = children(root).filter(e => e.isDirectory() && !e.name.startsWith('__')).map(e => scanDomain(join(root, e.name), e.name));
  exportsAt(join(root, 'index.data.ts'), domains.map(d => ({ symbol: d.symbol, path: `./${d.slug}/index.data` })), 'taxonomy');
  exportsAt(join(root, 'index.ids.ts'), domains.map(d => ({ symbol: `${d.slug}_SkillDomain_Ids`, path: `./${d.slug}/${d.slug}.ids` })), 'taxonomy');
  validateNames(root, new Set(['index.data.ts']), '.data.ts', 'taxonomy');
  validateNames(root, new Set(['index.ids.ts']), '.ids.ts', 'taxonomy');
  if (!domains.length) emit('EMPTY_TAXONOMY', root, '', 'No Domains discovered');
  // Check all parsed relative TypeScript imports / re-exports for missing modules and cycles.
  const visited = new Set(), active = new Set();
  function visit(file) {
    if (active.has(file)) { emit('CYCLIC_REFERENCE', file, '', 'Cyclic module dependency'); return; }
    if (visited.has(file)) return;
    visited.add(file); active.add(file);
    const mod = parse(file);
    if (mod) for (const dependency of mod.dependencies) {
      if (!within(dependency)) { emit('ID_BOUNDARY', file, '', `Source reference leaves taxonomy root: ${label(dependency)}`); continue; }
      if (!existsSync(dependency)) emit('BROKEN_REFERENCE', file, '', `Relative dependency missing: ${label(dependency)}`);
      else visit(dependency);
    }
    active.delete(file);
  }
  for (const f of files.keys()) if (within(f)) visit(f);
  diagnostics.sort((a,b) => a.path.localeCompare(b.path) || a.category.localeCompare(b.category) || a.message.localeCompare(b.message));
  return { valid: diagnostics.length === 0, source, root: label(root), languages, counts, diagnostics };
}

export function cli(argv = process.argv.slice(2)) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--help' || argv[i] === '-h') { process.stdout.write('Usage: node scripts/validate-skills-taxonomy.mjs --package learningApps/math --source new|legacy [--repo PATH] [--format console|json|both]\n'); return 0; }
    if (!['--package','--source','--repo','--format'].includes(argv[i]) || !argv[i+1] || argv[i+1].startsWith('--')) { process.stderr.write(`Invalid argument: ${argv[i]}\n`); return 2; }
    args[argv[i].slice(2)] = argv[++i];
  }
  if (!args.package || !own(ROOTS, args.source) || (args.format && !['console','json','both'].includes(args.format))) { process.stderr.write('Requires --package and --source new|legacy; --format console|json|both\n'); return 2; }
  try {
    const result = validateTaxonomy({ repo: args.repo, packageRoot: args.package, source: args.source });
    const format = args.format ?? 'console';
    if (format !== 'json') {
      process.stdout.write(`${result.valid ? 'PASS' : 'FAIL'} ${result.root} (${result.counts.domains} Domains, ${result.counts.groups} Groups, ${result.counts.skills} Skills; ${result.languages.length} languages; ${result.diagnostics.length} errors)\n`);
      for (const d of result.diagnostics) process.stdout.write(`  [${d.category}] ${d.path}${d.entity ? ` (${d.entity})` : ''}: ${d.message}\n`);
    }
    if (format !== 'console') process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return result.valid ? 0 : 1;
  } catch (error) { process.stderr.write(`${error.message}\n`); return 2; }
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) process.exitCode = cli();
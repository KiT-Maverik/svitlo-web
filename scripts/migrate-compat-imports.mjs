import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { resolve, dirname, relative, join } from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const src = resolve(root, 'apps/playground/src');
const engine = {
  content: '@svitlo/engine/content',
  taxonomy: '@svitlo/engine/taxonomy',
  localization: '@svitlo/engine/localization',
  builders: '@svitlo/engine/builders',
  generation: '@svitlo/engine/generation',
};
const shims = new Map();
function shim(path, module) { shims.set(resolve(src, path), module); }
shim('types/index.ts', 'barrel');
shim('types/languages.ts', 'localization');
shim('types/misc.types.ts', 'content');
shim('types/disabilities.types.ts', 'content');
for (const name of ['assessmentMethod', 'lesson', 'question', 'quiz', 'resource']) {
  shim('types/content/' + name + '.types.ts', 'content');
}
for (const name of ['skill', 'skillGroup', 'skillDomain']) {
  shim('types/content/' + name + '.types.ts', 'taxonomy');
}
shim('math/assessmentMethodTaxonomy/index.ids.ts', 'content');
shim('utils/index.ts', 'barrel');
for (const name of ['buildLesson', 'buildQuestion', 'buildQuiz', 'buildResource']) {
  shim('utils/builders/' + name + '/' + name + '.utils.ts', 'builders');
}
for (const name of ['buildAssessmentMethodConfig', 'buildLessonConfig', 'buildLessonSectionConfig']) {
  shim('utils/builders/config/' + name + '.utils.ts', 'builders');
}
for (const name of ['buildSkillConfig', 'buildSkillDomainConfig', 'buildSkillGroupConfig', 'validateSkillReferences']) {
  shim('utils/builders/config/' + name + '.utils.ts', 'taxonomy');
}
shim('utils/createDynamicQuestion/createDynamicQuestion.types.ts', 'generation');
shim('utils/createDynamicQuestion/createDynamicQuestion.utils.ts', 'generation');
shim('utils/createLocalizedFileLocations/createLocalizedFileLocations.utils.ts', 'localization');
shim('utils/createTextResource/createTextResource.utils.ts', 'builders');

function* files(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, item.name);
    if (item.isDirectory()) yield* files(p);
    else if (item.isFile() && /\.(ts|tsx)$/.test(item.name)) yield p;
  }
}
function resolved(specifier, file) {
  let base;
  if (specifier === '@types' || specifier === '@/types') base = join(src, 'types/index');
  else if (specifier.startsWith('@/')) base = join(src, specifier.slice(2));
  else if (specifier.startsWith('.')) base = resolve(dirname(file), specifier);
  else return null;
  for (const candidate of [base, base + '.ts', base + '.tsx', join(base, 'index.ts')]) {
    if (shims.has(candidate)) return shims.get(candidate);
  }
  return null;
}
function publicTarget(symbol, sourceTarget) {
  if (sourceTarget !== 'barrel') return sourceTarget;
  if (/^(buildLesson|buildQuestion|buildQuiz|buildResource|buildTextResource|buildAssessmentMethodConfig|buildLessonConfig|buildLessonSectionConfig|createTextResource)$/.test(symbol)) return 'builders';
  if (/^(createDynamicQuestion|validateArgument|validateBooleanArgument|validateNumberArgument|validateStringArgument|DynamicQuestion(?:_|$))/.test(symbol)) return 'generation';
  if (/^(buildSkillConfig|buildSkillGroupConfig|buildSkillDomainConfig|validateSkillConfig|validateSkillUuid|validateSkillReferences|Skill(?:Group|Domain|Id|_Config|$))/.test(symbol)) return 'taxonomy';
  if (/^(createLocalizedFileLocations|CreateLocalizedFileLocationsOptions|LocalizedFileLocations|Locale$|LanguageCode$|Language|DefaultSupportedLanguage|SupportedLanguage|AdditionalLanguage|TextDirection|getLanguageCode|getSupportedLanguages|DEFAULT_SUPPORTED_LANGUAGES|FALLBACK_LANGUAGE|FALLBACK_LOCALE|isLocale|getLocaleDirection|LocalizedContent)/.test(symbol)) return 'localization';
  return 'content';
}
function emit(path, data) {
  const size = 4000;
  for (let index = 0; index < data.length; index += size) {
    console.log('@@SVITLO_FILE@@' + JSON.stringify({ path, index, chunk: data.slice(index, index + size) }));
  }
  if (!data.length) console.log('@@SVITLO_FILE@@' + JSON.stringify({path,index:0,chunk:''}));
}
let changed = 0;
let imports = 0;
const unhandled = [];
for (const file of files(src)) {
  if (shims.has(file)) continue;
  const initial = readFileSync(file, 'utf8');
  const sf = ts.createSourceFile(file, initial, ts.ScriptTarget.Latest, true, file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const edits = [];
  for (const node of sf.statements) {
    if (!ts.isImportDeclaration(node) && !ts.isExportDeclaration(node)) continue;
    if (!node.moduleSpecifier || !ts.isStringLiteral(node.moduleSpecifier)) continue;
    const target = resolved(node.moduleSpecifier.text, file);
    if (!target) continue;
    const named = ts.isImportDeclaration(node) ? node.importClause?.namedBindings : node.exportClause;
    if (!named || (!ts.isNamedImports(named) && !ts.isNamedExports(named))) {
      unhandled.push(relative(root,file) + ' => ' + node.getText(sf).slice(0,150));
      continue;
    }
    const groups = new Map();
    for (const element of named.elements) {
      const imported = element.propertyName?.text ?? element.name.text;
      const exported = element.name.text;
      const m = publicTarget(imported, target);
      const isType = (ts.isImportDeclaration(node) && !!node.importClause?.isTypeOnly) || (ts.isExportDeclaration(node) && node.isTypeOnly) || !!element.isTypeOnly;
      const key = m + ':' + isType;
      if (!groups.has(key)) groups.set(key, []);
      const actual = imported === 'ContentQuestion' ? 'Question' : imported === 'ContentQuestionType' ? 'QuestionType' : imported;
      const alias = actual === exported ? actual : actual + ' as ' + exported;
      groups.get(key).push(alias);
    }
    const declaration = [...groups].map(([key,symbols]) => {
      const [m,type] = key.split(':');
      const isExport = ts.isExportDeclaration(node);
      return (isExport ? 'export' : 'import') + (type === 'true' ? ' type' : '') + ' { ' + symbols.join(', ') + ' } from ' + JSON.stringify(engine[m]).replaceAll('"', "'") + ';';
    }).join('\n');
    edits.push({start:node.getStart(sf),end:node.getEnd(),content:declaration});
    imports++;
  }
  let updated = initial;
  for (const edit of edits.reverse()) updated = updated.slice(0,edit.start) + edit.content + updated.slice(edit.end);
  if (updated !== initial) {
    writeFileSync(file,updated);
    changed++;
    if (process.argv.includes('--dump')) emit(relative(root,file),updated);
  }
}
if (unhandled.length) {
  for (const line of unhandled) console.error('UNHANDLED_IMPORT ' + line);
  process.exitCode = 1;
}
if (!unhandled.length) {
  for (const file of shims.keys()) {
    unlinkSync(file);
    if (process.argv.includes('--dump')) console.log('@@SVITLO_DELETE@@' + relative(root,file));
  }
}
console.log('Migration: updated '+ changed + ' source files; rewritten '+imports+' imports; deleted '+(unhandled.length ? 0 : shims.size)+' compatibility files; unresolved '+unhandled.length);

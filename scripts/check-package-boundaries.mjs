import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve, relative, sep } from 'node:path';

const root = process.cwd();
const readJson = path => JSON.parse(readFileSync(resolve(root, path), 'utf8'));
const engine = readJson('shared/engine/package.json');
const playground = readJson('learningApps/playground/package.json');
const math = readJson('learningApps/math/package.json');
const uiKit = readJson('shared/ui-kit/package.json');

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : entry.isFile() ? [path] : [];
  });
}
function assert(condition, message) {
  if (!condition) throw new Error(message);
}
assert(engine.name === '@svitlo/engine', 'Unexpected engine package name');
assert(playground.dependencies?.[engine.name] === engine.version, 'Playground must use a versioned engine dependency');
assert(playground.dependencies?.[uiKit.name] === uiKit.version, 'Playground must use a versioned UI Kit dependency');
for (const [label, manifest] of [['Mathematics textbook', math], ['Playground', playground]]) {
  assert(manifest.dependencies?.[engine.name] === engine.version, label + ' must use public Engine dependency');
  assert(manifest.dependencies?.[uiKit.name] === uiKit.version, label + ' must use public UI Kit dependency');
}
assert(existsSync(resolve(root, 'learningApps/math/src/math')), 'Math textbook is missing its domain content');
assert(existsSync(resolve(root, 'learningApps/math/docs')), 'Math textbook is missing package-local educational docs');
assert(!existsSync(resolve(root, 'learningApps/playground/src/math')), 'Playground cannot own mathematics skills taxonomy');
assert(!existsSync(resolve(root, 'learningApps/playground/src/content')), 'Playground cannot contain authored textbook content');
assert(!existsSync(resolve(root, 'learningApps/playground/src/app/topics/light')), 'Old subject-specific Playground route must be removed');
assert(existsSync(resolve(root, 'learningApps/playground/src/fixtures/demoLesson.ts')), 'Playground must provide a generic lesson fixture');
assert(!existsSync(resolve(root, 'math')), 'Root mathematics docs must be inside the textbook package');
assert(uiKit.dependencies?.[engine.name] === engine.version, 'UI Kit must consume the published Engine API');
assert(engine.scripts?.build && engine.files?.includes('dist'), 'Engine must publish compiled artifacts');
for (const subpath of ['.', './localization', './taxonomy', './content', './builders', './generation']) {
  const target = engine.exports?.[subpath];
  assert(target?.types?.startsWith('./dist/') && target?.default?.startsWith('./dist/'),
    'Engine public export is missing a dist entry: ' + subpath);
}
const engineSources = walk(resolve(root, 'shared/engine/src')).filter(file => file.endsWith('.ts') && !/\.(?:spec|typecheck)\.ts$/.test(file));
for (const file of engineSources) {
  const content = readFileSync(file, 'utf8');
  const imports = [...content.matchAll(/\b(?:from\s*|import\s*\(\s*)['"]([^'"]+)['"]/g)];
  for (const match of imports) {
    assert(match[1].startsWith('.'),
      'Engine must not import runtime, UI or application packages: ' + relative(root, file) + ' -> ' + match[1]);
  }
}
const kitSourceRoot = resolve(root, 'shared/ui-kit/src');
if(existsSync(kitSourceRoot)) {
  for(const file of walk(kitSourceRoot).filter(file=>/\.(ts|tsx)$/.test(file))) {
    const source=readFileSync(file,'utf8');
    assert(!/from\s*['"](?:@\/|@layout|@pages|next\/|\.\.\/\.\.\/\.\.\/\.\.\/learningApps\/)/.test(source),
      'UI Kit must not import application or Next.js sources: '+relative(root,file));
  }
}
const appSourceRoot = resolve(root, 'learningApps/playground/src');
const playgroundManifest = readJson('learningApps/playground/tsconfig.json');
assert(!playgroundManifest.compilerOptions?.paths?.['@layout'] && !playgroundManifest.compilerOptions?.paths?.['@pages'],
  'Playground must not retain deprecated @layout or @pages aliases');
for (const removed of ['types/index.ts', 'types/languages.ts', 'utils/index.ts', 'math/assessmentMethodTaxonomy/index.ids.ts']) {
  assert(!existsSync(resolve(appSourceRoot, removed)), 'Legacy compatibility shim must not exist: ' + removed);
}
if (existsSync(appSourceRoot)) {
  for (const file of walk(appSourceRoot).filter(file => /\.(?:ts|tsx)$/.test(file))) {
    const content = readFileSync(file, 'utf8');
    assert(!/from\s*['"](?:@types|@layout|@pages|@\/utils(?:\/|['"]))/.test(content),
      'Application must not depend on legacy compatibility aliases: ' + relative(root, file));
    assert(!/howLightMoves|topics\/light/.test(content),
      'Playground must not reference authored subject-specific content: ' + relative(root, file));
    assert(!/(?:shared\/engine\/src|@svitlo\/engine\/(?:src|dist)\/)/.test(content),
      'Application must use public engine exports: ' + relative(root, file));
  }
}
const applicationSourceRoots = ['learningApps/playground/src', 'learningApps/math/src']
  .map(path => resolve(root, path));
for (const applicationRoot of applicationSourceRoots) {
  for (const file of walk(applicationRoot).filter(path => /\.(ts|tsx)$/.test(path))) {
    const code = readFileSync(file, 'utf8');
    for (const match of code.matchAll(/\bfrom\s*['"]([^'"]+)['"]/g)) {
      const specifier = match[1];
      assert(!/^@svitlo\/(?:playground|math)(?:\/|$)/.test(specifier),
        'Applications must not import another application by package name: ' + relative(root, file));
      if (!specifier.startsWith('.')) continue;
      const target = resolve(dirname(file), specifier);
      assert(!applicationSourceRoots.some(other => other !== applicationRoot &&
        (target === other || target.startsWith(other + sep))),
        'Applications must not import another application source: ' + relative(root, file) + ' -> ' + specifier);
    }
  }
}
console.log('Package boundaries and both independent applications verified.');

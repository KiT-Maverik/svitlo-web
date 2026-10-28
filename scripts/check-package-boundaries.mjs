import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';

const root = process.cwd();
const readJson = path => JSON.parse(readFileSync(resolve(root, path), 'utf8'));
const engine = readJson('shared/engine/package.json');
const playground = readJson('frontend/playground/package.json');

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
const appSourceRoot = resolve(root, 'frontend/playground/src');
if (existsSync(appSourceRoot)) {
  for (const file of walk(appSourceRoot).filter(file => /\.(?:ts|tsx)$/.test(file))) {
    const content = readFileSync(file, 'utf8');
    assert(!/(?:shared\/engine\/src|@svitlo\/engine\/(?:src|dist)\/)/.test(content),
      'Application must use public engine exports: ' + relative(root, file));
  }
}
console.log('Package boundaries and engine publishing surface verified.');

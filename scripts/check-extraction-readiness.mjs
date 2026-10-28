import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { builtinModules } from 'node:module';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';

const root = process.cwd();
const readJson = name => JSON.parse(readFileSync(resolve(root, name), 'utf8'));
const builtins = new Set(builtinModules.map(name => name.replace(/^node:/, '')));
const workspaces = [
  ['shared/engine', readJson('shared/engine/package.json')],
  ['shared/ui-kit', readJson('shared/ui-kit/package.json')],
  ['apps/playground', readJson('apps/playground/package.json')],
  ['apps/textbooks/math', readJson('apps/textbooks/math/package.json')],
];
const byName = new Map(workspaces.map(([path, pkg]) => [pkg.name, { path, pkg }]));
function assert(ok, message) {
  if (!ok) throw new Error(message);
}
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const item = join(dir, entry.name);
    return entry.isDirectory() ? walk(item) : entry.isFile() ? [item] : [];
  });
}
function isProductionSource(file) {
  return /\.(ts|tsx)$/.test(file) &&
    !/\.(spec|test|e2e|stories|typecheck|unit\.fx|unit\.mx)\.(ts|tsx)$/.test(file) &&
    !file.includes(sep + 'testing' + sep);
}
function importedModules(source) {
  return [...source.matchAll(/\b(?:from\s*|import\s*\(\s*|import\s*|require\s*\(\s*)['"]([^'"]+)['"]/g)]
    .map(match => match[1]);
}
function packageName(specifier) {
  return specifier.startsWith('@')
    ? specifier.split('/').slice(0, 2).join('/')
    : specifier.split('/')[0];
}
function isPublicImport(pkg, specifier) {
  const subpath = specifier === pkg.name ? '.' : '.' + specifier.slice(pkg.name.length);
  return Object.keys(pkg.exports || {}).some(key => {
    if (key === subpath) return true;
    const wildcard = key.indexOf('*');
    return wildcard >= 0 && subpath.startsWith(key.slice(0, wildcard)) &&
      subpath.endsWith(key.slice(wildcard + 1));
  });
}

for (const [path, pkg] of workspaces) {
  const packageRoot = resolve(root, path);
  const tsconfig = readJson(path + '/tsconfig.json');
  if (tsconfig.extends && tsconfig.extends.startsWith('.')) {
    const base = relative(packageRoot, resolve(packageRoot, tsconfig.extends));
    assert(base !== '..' && !base.startsWith('..' + sep) && !isAbsolute(base),
      'External TypeScript config prevents standalone extraction: ' + path + ' -> ' + tsconfig.extends);
  }
  const declared = new Set(Object.keys({ ...(pkg.dependencies || {}), ...(pkg.peerDependencies || {}) }));
  const localAliases = readJson(path + '/tsconfig.json').compilerOptions?.paths || {};
  for (const file of walk(join(packageRoot, 'src')).filter(isProductionSource)) {
    for (const specifier of importedModules(readFileSync(file, 'utf8'))) {
      const description = relative(root, file) + ' -> ' + specifier;
      if (specifier.startsWith('.')) {
        const target = resolve(dirname(file), specifier);
        const remainder = relative(packageRoot, target);
        assert(remainder !== '..' && !remainder.startsWith('..' + sep) && !isAbsolute(remainder),
          'Cross-package relative import: ' + description);
        continue;
      }
      if (specifier.startsWith('@/') || Object.hasOwn(localAliases, specifier)) {
        assert(path.startsWith('apps/'), 'Unrewritten shared source alias: ' + description);
        continue;
      }
      if (specifier.startsWith('node:') || builtins.has(specifier)) continue;
      const name = packageName(specifier);
      if (byName.has(name)) {
        assert(name !== pkg.name, 'Self-import through workspace resolver: ' + description);
        assert(declared.has(name), 'Undeclared workspace dependency: ' + description);
        assert(isPublicImport(byName.get(name).pkg, specifier), 'Non-public package import: ' + description);
      } else {
        assert(!specifier.startsWith('@svitlo/'), 'Unknown Svitlo workspace: ' + description);
        assert(declared.has(name), 'Undeclared production dependency: ' + description);
        assert(path !== 'shared/engine', 'Engine has an external runtime dependency: ' + description);
        assert(path !== 'shared/ui-kit' || name !== 'next', 'UI Kit depends on Next.js: ' + description);
      }
    }
  }
}

for (const [path, pkg] of workspaces.filter(([name]) => name.startsWith('shared/'))) {
  for (const [subpath, entry] of Object.entries(pkg.exports || {})) {
    if (subpath.includes('*')) continue;
    const target = entry.default;
    assert(typeof target === 'string', 'Missing runtime export: ' + pkg.name + subpath);
    if (target.startsWith('./scripts/')) {
      assert(existsSync(resolve(root, path, target)), 'Missing public script: ' + pkg.name + subpath);
    } else {
      assert(target.startsWith('./dist/') && target.endsWith('.js'),
        'Invalid compiled entrypoint: ' + pkg.name + subpath);
      const sourcePath = target.replace('./dist/', 'src/').replace(/\.js$/, '');
      assert(['.ts', '.tsx'].some(ext => existsSync(resolve(root, path, sourcePath + ext))),
        'Missing public entrypoint source: ' + pkg.name + subpath);
      assert(entry.types === target.replace(/\.js$/, '.d.ts'),
        'Mismatched declarations: ' + pkg.name + subpath);
    }
  }
}

const kit = readJson('shared/ui-kit/package.json');
for (const path of ['dist', 'assets/flags', 'scripts/sync-flags.mjs']) {
  assert(kit.files && kit.files.includes(path), 'UI Kit package files omit ' + path);
  if (path !== 'dist') assert(existsSync(resolve(root, 'shared/ui-kit', path)), 'Missing asset: ' + path);
}
assert(kit.exports?.['./sync-flags']?.default === './scripts/sync-flags.mjs',
  'UI Kit must export the included flag sync script');
assert(readdirSync(resolve(root, 'shared/ui-kit/assets/flags')).some(name => name.endsWith('.svg')),
  'Flag assets are missing');
console.log('Stage 5 extraction readiness: source imports, dependencies, public exports, and static assets verified.');

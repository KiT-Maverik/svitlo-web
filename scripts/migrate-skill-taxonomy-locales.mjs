import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const taxonomyRoot = join(projectRoot, 'src', 'math', 'skillsTaxonomy');
const checkOnly = process.argv.includes('--check');

function* dataFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* dataFiles(path);
    else if (entry.isFile() && entry.name.endsWith('.data.ts')) yield path;
  }
}

function migrate(file) {
  const source = readFileSync(file, 'utf8');
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const edits = [];

  function visit(node) {
    if (
      ts.isPropertyAssignment(node) &&
      node.name.getText(ast) === 'name' &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      const languages = new Set();
      for (const property of node.initializer.properties) {
        if (
          !ts.isPropertyAssignment(property) ||
          (!ts.isStringLiteral(property.name) && !ts.isIdentifier(property.name))
        ) {
          throw new Error(`Unexpected name key in ${relative(projectRoot, file)}`);
        }
        const key = property.name.text;
        const language = /^[a-z]{2}$/.test(key) ? key : /^([a-z]{2})(?:-[A-Za-z0-9]+)+$/.exec(key)?.[1];
        if (!language) throw new Error(`Unsupported name key ${key} in ${relative(projectRoot, file)}`);
        if (languages.has(language))
          throw new Error(`Duplicate language ${language} in ${relative(projectRoot, file)}`);
        languages.add(language);
        if (key !== language || ts.isStringLiteral(property.name)) {
          edits.push({ start: property.name.getStart(ast), end: property.name.getEnd(), text: language });
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(ast);
  return { file, source, edits };
}

const changes = [...dataFiles(taxonomyRoot)].map(migrate).filter(({ edits }) => edits.length);
const count = changes.reduce((total, { edits }) => total + edits.length, 0);

if (checkOnly && count) {
  console.error(`${count} locale keys in ${changes.length} files still need migration.`);
  process.exitCode = 1;
} else if (!checkOnly) {
  for (const { file, source, edits } of changes) {
    let updated = source;
    for (const { start, end, text } of edits.reverse()) {
      updated = updated.slice(0, start) + text + updated.slice(end);
    }
    writeFileSync(file, updated);
  }
  console.log(`Migrated ${count} locale keys in ${changes.length} files.`);
} else {
  console.log('All taxonomy name keys use unquoted two-letter language codes.');
}

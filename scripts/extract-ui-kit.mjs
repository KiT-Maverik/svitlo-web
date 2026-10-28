import { existsSync, readdirSync, readFileSync, mkdirSync, writeFileSync, unlinkSync } from 'node:fs';
import { dirname, extname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const app = resolve(root, 'apps/playground/src');
const kit = resolve(root, 'shared/ui-kit/src');
const dirs = ['components/layout/Navigation', 'components/widgets/questions',
  'components/widgets/Flashcard', 'components/widgets/KnowledgeCheckpoint',
  'components/widgets/MarkdownContent', 'components/widgets/VerticalSpace'];
const moving = new Map();
const errors = [];
function* walk(dir) {
  if (!existsSync(dir)) return;
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) yield* walk(path);
    else if (item.isFile()) yield path;
  }
}
for (const dir of dirs) for (const oldPath of walk(join(app, dir))) {
  if (/\.e2e\.spec\.ts$/.test(oldPath)) continue;
  moving.set(oldPath, join(kit, dir, relative(join(app, dir), oldPath)));
}
const files = [...walk(app)].filter(x => /\.tsx?$/.test(x));
const direct = new Map([
  [join(app,'components/widgets/index.ts'), 'widgets'],
  [join(app,'components/layout/index.ts'), 'layout'],
  [join(app,'components/index.ts'), 'components'],
]);
function oldResolve(source, importer) {
  let path;
  if (source.startsWith('@/')) path = join(app, source.slice(2));
  else if (source === '@layout') path = join(app, 'components/layout/index.ts');
  else if (source === '@pages') path = join(app, 'components/pages/index.ts');
  else if (source.startsWith('.')) path = resolve(dirname(importer), source);
  else return null;
  for (const p of [path, path+'.ts',path+'.tsx',path+'.mts',path+'.js',join(path,'index.ts'),join(path,'index.tsx')])
    if (existsSync(p)) return p;
  return null;
}
function publicPath(oldPath) {
  const rel = relative(app, oldPath).replaceAll(sep,'/');
  let suffix;
  if(rel.startsWith('components/widgets/questions/')) suffix = 'questions/'+rel.slice('components/widgets/questions/'.length);
  else if(rel.startsWith('components/widgets/')) suffix = 'widgets/'+rel.slice('components/widgets/'.length);
  else if(rel.startsWith('components/layout/Navigation/')) suffix = 'navigation/'+rel.slice('components/layout/Navigation/'.length);
  else throw new Error('Unsupported package path: '+rel);
  suffix = suffix.replace(/\.(?:tsx?|jsx?)$/, '').replace(/\/index$/, '');
  return '@svitlo/ui-kit/'+suffix;
}
function relativeImport(from,to) {
  let value = relative(dirname(from),to).replaceAll(sep,'/').replace(/\.(?:tsx?|jsx?)$/,'').replace(/\/index$/,'');
  if(!value.startsWith('.')) value='./'+value;
  return value;
}
const output = new Map();
const CHUNK=5000;
function dump(path, value) {
  const name=relative(root,path).replaceAll(sep,'/');
  for(let i=0;i<value.length;i+=CHUNK) console.log('@@UI_FILE@@'+JSON.stringify({path:name,index:i,chunk:value.slice(i,i+CHUNK)}));
}
let fixed=0,imports=0;
for (const oldPath of files) {
  if (oldPath===join(app,'components/widgets/index.ts')||oldPath===join(app,'components/layout/index.ts')) continue;
  const source=readFileSync(oldPath,'utf8');
  const newPath=moving.get(oldPath)||oldPath;
  const sf=ts.createSourceFile(oldPath,source,ts.ScriptTarget.Latest,true,oldPath.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
  const edits=[];
  for (const node of sf.statements) {
    if(!ts.isImportDeclaration(node)&&!ts.isExportDeclaration(node)) continue;
    const literal=node.moduleSpecifier;
    if(!literal||!ts.isStringLiteral(literal)) continue;
    const previous=oldResolve(literal.text,oldPath);
    if(!previous) continue;
    const barrel=direct.get(previous);
    if(barrel && !moving.has(oldPath) && (ts.isImportDeclaration(node)||ts.isExportDeclaration(node))) {
      const named=ts.isImportDeclaration(node)?node.importClause?.namedBindings:node.exportClause;
      if(!named||(!ts.isNamedImports(named)&&!ts.isNamedExports(named))) {
        // Existing local barrel-to-barrel exports are rewritten explicitly below.
        if(oldPath===join(app,'components/index.ts')) continue;
        errors.push('Unsupported barrel import: '+relative(root,oldPath)+' '+literal.text);
        continue;
      }
      const grouped=new Map();
      for(const x of named.elements){
        const imported=x.propertyName?.text||x.name.text;
        const isLocal= (barrel==='widgets' && ['Flag','FlagLocale','FlagProps'].includes(imported))
          ||(barrel==='layout' && imported==='LearningLayout')
          ||(barrel==='components' && ['Flag','FlagLocale','FlagProps','LearningLayout','Lesson','ApiDemo','QuestionsDemo','FeedbackDemo'].includes(imported));
        const pkg=isLocal
          ? (['Flag','FlagLocale','FlagProps'].includes(imported)?'@/components/widgets/Flag'
            : imported==='LearningLayout'?'@/components/layout/LearningLayout/LearningLayout'
            :'@/components/pages')
          : (barrel==='layout'?'@svitlo/ui-kit/navigation':'@svitlo/ui-kit');
        const typeOnly=!!(node.isTypeOnly||node.importClause?.isTypeOnly||x.isTypeOnly);
        const key=pkg+'|'+typeOnly;
        if(!grouped.has(key)) grouped.set(key,[]);
        grouped.get(key).push(imported+(x.name.text!==imported?' as '+x.name.text:''));
      }
      const result=[...grouped].map(([key,names])=>{
        const [pkg,typeOnly]=key.split('|');
        return (ts.isExportDeclaration(node)?'export':'import')+(typeOnly==='true'?' type':'')
          +' { '+names.join(', ')+' } from '+JSON.stringify(pkg).replaceAll('"',"'")+';';
      }).join('\n');
      edits.push({start:node.getStart(sf),end:node.getEnd(),text:result});
      imports++;continue;
    }
    if(moving.has(oldPath) && !moving.has(previous)){
      errors.push('UI Kit imports application source: '+relative(root,oldPath)+' -> '+literal.text);
      continue;
    }
    if(!moving.has(previous)) continue;
    const target=moving.get(oldPath)
      ? relativeImport(newPath,moving.get(previous))
      : publicPath(previous);
    edits.push({start:literal.getStart(sf),end:literal.getEnd(),text:JSON.stringify(target).replaceAll('"',"'")});
    imports++;
  }
  let content=source;
  for(const e of edits.sort((a,b)=>b.start-a.start))content=content.slice(0,e.start)+e.text+content.slice(e.end);
  if(content!==source||moving.has(oldPath)){
    output.set(newPath,content);
    if(!moving.has(oldPath))fixed++;
  }
}
if(errors.length){errors.forEach(e=>console.error('UI_EXTRACTION_ERROR '+e));process.exit(1);}
output.set(join(app,'components/widgets/index.ts'),"export { Flag } from './Flag';\nexport type { FlagLocale, FlagProps } from './Flag';\n");
output.set(join(app,'components/layout/index.ts'),"export { default as LearningLayout } from './LearningLayout/LearningLayout';\n");
for(const [oldPath,newPath] of moving) if(!output.has(newPath))
  output.set(newPath,readFileSync(oldPath,'utf8'));
for(const [path,content] of output){mkdirSync(dirname(path),{recursive:true});writeFileSync(path,content);}
for(const oldPath of moving.keys())unlinkSync(oldPath);
if(process.argv.includes('--dump')) {
  for(const [path,content] of output)dump(path,content);
  for(const oldPath of moving.keys())console.log('@@UI_DELETE@@'+relative(root,oldPath).replaceAll(sep,'/'));
}
console.log('UI extraction: moved='+moving.size+' updated app sources='+fixed+' edited imports='+imports+' output files='+output.size+' errors='+errors.length);

#!/usr/bin/env node
import { cpSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const source = resolve(dirname(fileURLToPath(import.meta.url)), '../assets/flags');
const destination = resolve(process.cwd(), 'public/flags');
if (!existsSync(source)) throw new Error('UI Kit flag assets are missing from the installed package');
mkdirSync(destination, { recursive: true });
cpSync(source, destination, { recursive: true, force: true });
console.log('UI Kit flag assets installed at ' + destination);

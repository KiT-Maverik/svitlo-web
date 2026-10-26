/**
 * Test-only Next server. Build a disposable app directory with an extra route;
 * the real repository (and every production build) never contains the harness.
 */
import { cpSync, existsSync, mkdirSync, mkdtempSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawn } from 'node:child_process';

const root = process.cwd();
const sandbox = mkdtempSync(join(tmpdir(), 'svitlo-db-e2e-'));
const port = process.env.PLAYWRIGHT_DB_PORT ?? '3107';
let cleaned = false;

function cleanup() {
  if (cleaned) return;
  cleaned = true;
  rmSync(sandbox, { recursive: true, force: true });
}

try {
  if (!existsSync(join(root, 'node_modules'))) {
    throw new Error('Dependencies must be installed before running browser tests');
  }
  for (const path of ['src', 'public', 'package.json', 'package-lock.json', 'tsconfig.json', 'next.config.ts']) {
    cpSync(join(root, path), join(sandbox, path), { recursive: true });
  }
  const testRoute = join(sandbox, 'src', 'app', 'db-browser-harness');
  mkdirSync(testRoute, { recursive: true });
  cpSync(join(root, 'tests/e2e/db/harness/page.tsx'), join(testRoute, 'page.tsx'));
  cpSync(join(root, 'tests/e2e/db/harness/commands.ts'), join(testRoute, 'commands.ts'));
  symlinkSync(join(root, 'node_modules'), join(sandbox, 'node_modules'), 'dir');

  const nextBin = resolve(root, 'node_modules/next/dist/bin/next');
  const child = spawn(process.execPath,
    [nextBin, 'dev', '--webpack', '--hostname', '127.0.0.1', '--port', port],
    { cwd: sandbox, env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' }, stdio: 'inherit' },
  );

  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, () => child.kill(signal));
  }
  child.on('error', error => {
    console.error(error);
    cleanup();
    process.exitCode = 1;
  });
  child.on('exit', (code, signal) => {
    cleanup();
    process.exit(code ?? (signal ? 1 : 0));
  });
  process.on('exit', cleanup);
} catch (error) {
  cleanup();
  throw error;
}

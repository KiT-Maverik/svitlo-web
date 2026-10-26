import { vi } from 'vitest';

export const ReportButton_mx = {
  success: () => vi.stubGlobal('fetch', vi.fn(async () => ({
    ok: true,
    json: async () => ({ status: 'created', issueUrl: 'https://github.com/example/lesson/issues/7', issueNumber: 7 }),
  }))),
  failure: () => vi.stubGlobal('fetch', vi.fn(async () => {
    throw new Error('Network offline');
  })),
  serverError: () => vi.stubGlobal('fetch', vi.fn(async () => ({
    ok: false,
    json: async () => ({ status: 'error', message: 'Server unavailable' }),
  }))),
  reset: () => vi.unstubAllGlobals(),
} as const;

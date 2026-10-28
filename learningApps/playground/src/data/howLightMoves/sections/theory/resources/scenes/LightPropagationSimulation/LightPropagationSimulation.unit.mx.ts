import { vi } from 'vitest';

export const LightPropagationSimulation_mx = {
  installMatchMedia: (initial = false) => {
    const listeners = new Set<() => void>();
    const query = {
      matches: initial,
      media: '(prefers-reduced-motion: reduce)',
      addEventListener: vi.fn((_event: string, callback: () => void) => listeners.add(callback)),
      removeEventListener: vi.fn((_event: string, callback: () => void) => listeners.delete(callback)),
    };
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => query),
    );
    return {
      setReducedMotion: (value: boolean) => {
        query.matches = value;
        for (const listener of listeners) listener();
      },
    };
  },
  reset: () => vi.unstubAllGlobals(),
} as const;

import { vi } from 'vitest';
import { usePathname, useRouter } from 'next/navigation';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
  useRouter: vi.fn(),
}));

export const LocaleProvider_mx = {
  prepare: (pathname = '/lessons/light') => {
    const replace = vi.fn();
    vi.mocked(usePathname).mockReturnValue(pathname);
    vi.mocked(useRouter).mockReturnValue({ replace } as unknown as ReturnType<typeof useRouter>);
    return { replace };
  },
  reset: () => {
    vi.restoreAllMocks();
    window.history.replaceState({}, '', '/');
  },
} as const;

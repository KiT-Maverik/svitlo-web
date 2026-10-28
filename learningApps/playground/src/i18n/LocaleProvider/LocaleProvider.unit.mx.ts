import { vi } from 'vitest';
import { usePathname, useRouter } from 'next/navigation';

export const LocaleProvider_mx = {
  prepare: (pathname = '/topics/demo') => {
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

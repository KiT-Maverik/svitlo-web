import { vi } from 'vitest';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';
import { useColorScheme } from '@mui/material/styles';

vi.mock('@/i18n/LocaleProvider/LocaleProvider', () => ({ useLocale: vi.fn() }));
vi.mock('@mui/material/styles', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@mui/material/styles')>()),
  useColorScheme: vi.fn(),
}));

export const NavbarPreferences_mx = {
  prepare: (options: { locale?: 'uk-UA' | 'en-US'; mode?: 'light' | 'dark' | 'system' | undefined } = {}) => {
    const setLocale = vi.fn();
    const setMode = vi.fn();
    vi.mocked(useLocale).mockReturnValue({ locale: options.locale ?? 'uk-UA', setLocale });
    vi.mocked(useColorScheme).mockReturnValue({
      mode: options.mode ?? 'light', systemMode: 'light', setMode,
    } as ReturnType<typeof useColorScheme>);
    return { setLocale, setMode };
  },
  reset: () => vi.clearAllMocks(),
} as const;

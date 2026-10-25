'use client';

import { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/types/languages';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const setLocale = useCallback((nextLocale: Locale) => {
    const params = new URLSearchParams(window.location.search);
    params.set('lang', nextLocale);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [pathname, router]);
  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale requires LocaleProvider');
  return context;
}

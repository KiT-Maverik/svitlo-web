'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Locale } from '@types';

type SceneLocaleValue = {
  locale: Locale;
  scenes: Readonly<object>;
};

const SceneLocaleContext = createContext<SceneLocaleValue | null>(null);

export function SceneLocaleProvider({ locale, scenes, children }: SceneLocaleValue & { children: ReactNode }) {
  return <SceneLocaleContext.Provider value={{ locale, scenes }}>{children}</SceneLocaleContext.Provider>;
}

export function useSceneLocales<T extends object>(): { locale: Locale; scenes: Readonly<T> } {
  const value = useContext(SceneLocaleContext);
  if (!value) throw new Error('SceneLocaleProvider is required');
  return value as { locale: Locale; scenes: Readonly<T> };
}

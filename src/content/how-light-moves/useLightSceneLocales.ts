'use client';

import { useSceneLocales } from '@/components/pages/Lesson/SceneLocaleContext';
import type { LightSceneLocales } from './sceneLocales.types';

export function useLightSceneLocales() {
  return useSceneLocales<LightSceneLocales>();
}

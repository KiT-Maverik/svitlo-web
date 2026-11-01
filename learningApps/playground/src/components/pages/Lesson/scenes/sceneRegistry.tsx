import type { Locale } from '@svitlo/engine/localization';
import { SceneLocaleProvider } from '../SceneLocaleContext';
import { LightRayDiagram } from './howLightMoves/LightRayDiagram/LightRayDiagram';
import { LightPropagationSimulation } from './howLightMoves/LightPropagationSimulation/LightPropagationSimulation';
import { Showcase } from './howLightMoves/Showcase/Showcase';

/** Executable scene components never enter published JSON. Keys are stable published IDs. */
const scenes = {
  '1/howLightMoves/theory/scene/lightRayDiagram': { Component: LightRayDiagram, localeKey: 'ray' },
  '1/howLightMoves/theory/scene/lightPropagationSimulation': {
    Component: LightPropagationSimulation, localeKey: 'simulation',
  },
  '1/howLightMoves/practice/scene/showcase': { Component: Showcase, localeKey: 'practice' },
} as const;

export type SceneId = keyof typeof scenes;

export function LessonScene({ sceneId, locale, locales }: {
  sceneId: string;
  locale: Locale;
  locales: Record<string, unknown>;
}) {
  if (!Object.hasOwn(scenes, sceneId)) {
    throw new Error('Unregistered lesson scene: ' + sceneId + '. Add it to sceneRegistry.tsx.');
  }
  const { Component, localeKey } = scenes[sceneId as SceneId];
  return (
    <SceneLocaleProvider locale={locale} scenes={{ [localeKey]: locales }}>
      <Component />
    </SceneLocaleProvider>
  );
}

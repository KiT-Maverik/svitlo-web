import type { NonEmptyResourceArray, TextResource_ChosenLocales } from '@/types/content/resources';

export type UkrainianTextResource = TextResource_ChosenLocales<'uk-UA'>;

export const textResource = (id: string, value: string): UkrainianTextResource => ({
  id,
  blockType: 'text',
  allLocales: false,
  value: { 'uk-UA': value },
});

export const textResources = (id: string, value: string): NonEmptyResourceArray<UkrainianTextResource> => [
  textResource(id, value),
];

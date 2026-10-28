import type { LessonSection_Config } from '@svitlo/contracts/content';
import type { Collection } from '@svitlo/contracts/content';
import type { DeepReadonly } from '@svitlo/contracts/content';

/** Add the lesson-section discriminator without changing authored config; return deeply readonly data. */
export function buildLessonSectionConfig<T extends Omit<LessonSection_Config, 'collection'> & { collection?: never }>(
  config: T,
): DeepReadonly<Omit<T, 'collection'>> & Pick<LessonSection_Config, 'collection'> {
  const collection: Extract<Collection, 'lessonSection'> = 'lessonSection';
  return { ...config, collection } as DeepReadonly<Omit<T, 'collection'>> & Pick<LessonSection_Config, 'collection'>;
}

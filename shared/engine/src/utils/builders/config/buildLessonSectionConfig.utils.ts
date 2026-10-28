import type { LessonSection_Config } from '../../../types/content/lesson.types';
import type { Collection } from '../../../types/misc.types';
import type { DeepReadonly } from '../../../types/readonly.types';

/** Add the lesson-section discriminator without changing authored config; return deeply readonly data. */
export function buildLessonSectionConfig<T extends Omit<LessonSection_Config, 'collection'> & { collection?: never }>(
  config: T,
): DeepReadonly<T & Pick<LessonSection_Config, 'collection'>> {
  const collection: Extract<Collection, 'lessonSection'> = 'lessonSection';
  return { ...config, collection } as DeepReadonly<T & Pick<LessonSection_Config, 'collection'>>;
}

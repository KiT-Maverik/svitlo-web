import type { LessonSection_Config } from '../../../types/content/lesson.types';
import type { Collection } from '../../../types/misc.types';

/** Add the lesson-section discriminator without changing the authored config. */
export function buildLessonSectionConfig<
  T extends Omit<LessonSection_Config, 'collection'> & { collection?: never },
>(config: T): T & Pick<LessonSection_Config, 'collection'> {
  const collection: Extract<Collection, 'lessonSection'> = 'lessonSection';
  return { ...config, collection };
}

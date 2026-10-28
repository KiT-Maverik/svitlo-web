import type { Lesson_Config } from '../../../types/content/lesson.types';
import type { Collection } from '../../../types/misc.types';

/** Add the lesson discriminator without changing the authored config. */
export function buildLessonConfig<T extends Omit<Lesson_Config, 'collection'> & { collection?: never }>(
  config: T,
): T & Pick<Lesson_Config, 'collection'> {
  const collection: Extract<Collection, 'lesson'> = 'lesson';
  return { ...config, collection };
}

import type { Lesson_Config } from '../../../types/content/lesson.types';
import type { Collection } from '../../../types/misc.types';
import type { DeepReadonly } from '../../../types/readonly.types';

/** Add the lesson discriminator without changing authored config; return deeply readonly data. */
export function buildLessonConfig<T extends Omit<Lesson_Config, 'collection'> & { collection?: never }>(
  config: T,
): DeepReadonly<T & Pick<Lesson_Config, 'collection'>> {
  const collection: Extract<Collection, 'lesson'> = 'lesson';
  return { ...config, collection } as DeepReadonly<T & Pick<Lesson_Config, 'collection'>>;
}

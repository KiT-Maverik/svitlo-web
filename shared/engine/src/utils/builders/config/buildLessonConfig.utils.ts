import type { Lesson_Config } from '@svitlo/contracts/content';
import type { Collection } from '@svitlo/contracts/content';
import type { DeepReadonly } from '@svitlo/contracts/content';

/** Add the lesson discriminator without changing authored config; return deeply readonly data. */
export function buildLessonConfig<T extends Omit<Lesson_Config, 'collection'> & { collection?: never }>(
  config: T,
): DeepReadonly<Omit<T, 'collection'>> & Pick<Lesson_Config, 'collection'> {
  const collection: Extract<Collection, 'lesson'> = 'lesson';
  return { ...config, collection } as DeepReadonly<Omit<T, 'collection'>> & Pick<Lesson_Config, 'collection'>;
}

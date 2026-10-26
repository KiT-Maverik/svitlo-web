import type { LessonState } from '@types';
import { lessonStateSchema } from '../../../schemas/lessonStateSchema/lessonStateSchema';
import { runStateRequest } from '../../../utils';

export async function listLessonStates(lessonId: LessonState['lessonId']): Promise<LessonState[]> {
  const values: unknown[] = await runStateRequest('lessonStates', 'readonly', store => store.index('lessonId').getAll(lessonId));
  return values.map(value => lessonStateSchema.parse(value));
}

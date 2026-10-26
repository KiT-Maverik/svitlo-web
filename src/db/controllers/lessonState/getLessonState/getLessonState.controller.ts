import type { LessonState } from '@types';
import { lessonStateSchema } from '../../../schemas/lessonStateSchema/lessonStateSchema';
import { runStateRequest } from '../../../utils';

export async function getLessonState(id: LessonState['id']): Promise<LessonState | undefined> {
  const value: unknown = await runStateRequest('lessonStates', 'readonly', store => store.get(id));
  return value === undefined ? undefined : lessonStateSchema.parse(value);
}

import type { LessonState } from '@types';
import { lessonStateSchema } from '../../../schemas/lessonStateSchema/lessonStateSchema';
import { runStateRequest } from '../../../utils';

export async function createLessonState(lessonId: string): Promise<LessonState> {
  const state = lessonStateSchema.parse({ id: crypto.randomUUID(), lessonId, status: 'new' });
  await runStateRequest('lessonStates', 'readwrite', store => store.add(state));
  return state;
}

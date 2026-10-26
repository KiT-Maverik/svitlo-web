import type { LessonState } from '@types';
import { lessonStateSchema } from '../../../schemas/lessonStateSchema/lessonStateSchema';
import { runStateRequest } from '../../../utils';

export async function saveLessonState(state: LessonState): Promise<void> {
  const validated = lessonStateSchema.parse(state);
  await runStateRequest('lessonStates', 'readwrite', store => store.put(validated));
}

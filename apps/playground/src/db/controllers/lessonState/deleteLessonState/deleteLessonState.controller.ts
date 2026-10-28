import type { LessonState } from '@svitlo/engine/content';
import { runStateRequest } from '../../../utils';

export async function deleteLessonState(id: LessonState['id']): Promise<void> {
  await runStateRequest('lessonStates', 'readwrite', store => store.delete(id));
}

import type { LessonState } from '@types';
import { lessonStateSchema } from '../../../schemas/lessonStateSchema/lessonStateSchema';
import { updateState } from '../../../utils';

export function updateLessonState(
  id: LessonState['id'],
  change: (current: LessonState) => LessonState,
): Promise<LessonState | undefined> {
  return updateState('lessonStates', id, value => lessonStateSchema.parse(value), change);
}

import type { LessonState } from '@types';
import { lessonStateSchema } from '../../schemas/lessonStateSchema/lessonStateSchema';
import { createStateStore } from '../../utils';

const store = createStateStore('lessonStates', 'lessonId', value => lessonStateSchema.parse(value));

export const lessonStateController = {
  ...store,
  async create(lessonId: string): Promise<LessonState> {
    const state: LessonState = { id: crypto.randomUUID(), lessonId, status: 'new' };
    await store.save(state);
    return state;
  },
};

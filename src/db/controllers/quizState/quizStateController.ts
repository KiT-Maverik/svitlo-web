import type { QuizState } from '@types';
import { quizStateSchema } from '../../schemas/quizStateSchema/quizStateSchema';
import { createStateStore } from '../../utils';

const store = createStateStore('quizStates', 'quizId', value => quizStateSchema.parse(value));

export const quizStateController = {
  ...store,
  async create(quizId: string): Promise<QuizState> {
    const state: QuizState = { id: crypto.randomUUID(), quizId, status: 'new' };
    await store.save(state);
    return state;
  },
};

import type { StateStore } from '../databaseConfig/databaseConfig';
import { runStateRequest } from '../runStateRequest/runStateRequest';
import { updateState } from '../updateState/updateState';

export function createStateStore<T extends { id: string }>(
  storeName: StateStore,
  ownerIndex: 'lessonId' | 'quizId',
  parse: (value: unknown) => T,
) {
  return {
    async get(id: T['id']): Promise<T | undefined> {
      const value: unknown = await runStateRequest(storeName, 'readonly', store => store.get(id));
      return value === undefined ? undefined : parse(value);
    },
    async list(ownerId: string): Promise<T[]> {
      const values: unknown[] = await runStateRequest(storeName, 'readonly', store => store.index(ownerIndex).getAll(ownerId));
      return values.map(parse);
    },
    async save(state: T): Promise<void> {
      const validated = parse(state);
      await runStateRequest(storeName, 'readwrite', store => store.put(validated));
    },
    update(id: T['id'], change: (current: T) => T): Promise<T | undefined> {
      return updateState(storeName, id, parse, change);
    },
    async delete(id: T['id']): Promise<void> {
      await runStateRequest(storeName, 'readwrite', store => store.delete(id));
    },
  };
}

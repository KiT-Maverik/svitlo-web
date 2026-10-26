const DATABASE_NAME = 'svitlo-progress';
const DATABASE_VERSION = 1;

export type StateStore = 'lessonStates' | 'quizStates';

function openDatabase(): Promise<IDBDatabase> {
  if (typeof indexedDB === 'undefined') {
    return Promise.reject(new Error('IndexedDB is unavailable in this environment'));
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains('lessonStates')) {
        database.createObjectStore('lessonStates', { keyPath: 'id' }).createIndex('lessonId', 'lessonId');
      }
      if (!database.objectStoreNames.contains('quizStates')) {
        database.createObjectStore('quizStates', { keyPath: 'id' }).createIndex('quizId', 'quizId');
      }
    };
    request.onsuccess = () => {
      const database = request.result;
      database.onversionchange = () => database.close();
      resolve(database);
    };
    request.onerror = () => reject(request.error);
  });
}

/** Wait for the transaction to commit, not just for its individual request to succeed. */
export async function runStateRequest<T>(
  storeName: StateStore,
  mode: IDBTransactionMode,
  makeRequest: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    let transaction: IDBTransaction;
    let request: IDBRequest<T>;
    try {
      transaction = database.transaction(storeName, mode);
      request = makeRequest(transaction.objectStore(storeName));
    } catch (error) {
      database.close();
      reject(error);
      return;
    }

    let result: T;
    request.onsuccess = () => { result = request.result; };
    transaction.oncomplete = () => {
      database.close();
      resolve(result);
    };
    transaction.onabort = () => {
      database.close();
      reject(transaction.error ?? request.error ?? new Error('IndexedDB transaction was aborted'));
    };
    transaction.onerror = () => {
      database.close();
      reject(transaction.error ?? request.error ?? new Error('IndexedDB transaction failed'));
    };
  });
}

async function updateState<T extends { id: string }>(
  storeName: StateStore,
  id: string,
  parse: (value: unknown) => T,
  change: (current: T) => T,
): Promise<T | undefined> {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.get(id);
    let updated: T | undefined;
    let failure: unknown;

    request.onsuccess = () => {
      if (request.result === undefined) return;
      try {
        const next = parse(change(parse(request.result)));
        if (next.id !== id) throw new Error('A state update cannot change its ID');
        store.put(next);
        updated = next;
      } catch (error) {
        failure = error;
        transaction.abort();
      }
    };
    transaction.oncomplete = () => {
      database.close();
      resolve(updated);
    };
    transaction.onabort = () => {
      database.close();
      reject(failure ?? transaction.error ?? request.error ?? new Error('IndexedDB transaction was aborted'));
    };
    transaction.onerror = () => {
      database.close();
      reject(failure ?? transaction.error ?? request.error ?? new Error('IndexedDB transaction failed'));
    };
  });
}

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

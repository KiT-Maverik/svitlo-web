# IndexedDB controller integration tests

Run with the project's existing Node test runner:

- `npm ci`
- `npm test`
- `npm run typecheck`
- `npm run lint`
- `npm run build`

The 53 integration cases in `tests/db-controllers.integration.test.ts` cover all 13
modules under `src/db/controllers`, exercising real controllers, schemas, IndexedDB
initialization and persistence adapters with `fake-indexeddb/auto`. None are mocked.
The repository uses `node:test` rather than Vitest.

## Isolation

- The production name `svitlo-progress` and schema version 1 remain unchanged.
- Each test deletes the database before and after, awaiting the deletion request.
- The controllers close their connections on completion or abort. Test DB helpers
  close direct connections on both success and failure.
- Tests run sequentially in this file (`concurrency: false`). Node runs distinct
  test files in isolated processes, so the fake database does not leak between them.
- Blocked deletion fails instead of silently reusing stale state.
- Factories allocate fresh, deterministic nested objects.

## Verified by assertions

- Database creation, both stores and indexes, primary keys and reopening.
- Create, get, list, save, update, and delete operations in both stores.
- Empty reads, duplicate-key failure, nonunique lessonId and quizId indexes.
- Zod validation on reads/writes and preservation of unrelated records.
- Deep nested answers, section progress, quiz-state references, structured cloning.
- Transaction completion, atomic rollback, invalid updates, and one successful
  request followed by a duplicate key that aborts its entire transaction.
- Quiz completion, invalid grades, forbidden transitions, and missing quiz runs.

No migrations exist beyond the current schema version 1. Controllers do not expose
sorting or pagination. IndexedDB has no relational foreign keys, so no foreign-key
constraint behavior is asserted.

## Browser-only limitations

`fake-indexeddb` cannot establish exact native browser transaction timing, cross-tab
versionchange/blocked upgrades, storage quota/eviction, persistent storage behavior,
browser-specific structured cloning, or lifecycle across real reloads. Those scenarios
require separate browser E2E coverage.

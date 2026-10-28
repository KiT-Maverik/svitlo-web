# @svitlo/indexdb

Shared, framework-agnostic IndexedDB persistence for all learning apps.

Exports: `@svitlo/indexdb` and `/controllers` for CRUD operations, `/utils` for database transactions, `/schemas` for Zod state validators and `/config` for store constants.

Storage compatibility is intentional: database **svitlo-progress** version **1** with `lessonStates` (`lessonId` index) and `quizStates` (`quizId` index), using `id` as the primary key. No browser data migration or deletion is performed.

State models are owned by `@svitlo/contracts`. Browser harnesses remain application-side until Stage 5.

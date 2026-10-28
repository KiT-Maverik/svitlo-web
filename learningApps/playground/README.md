# Playground

`@svitlo/playground` is a standalone Next.js sandbox for experimenting with
`@svitlo/engine` and `@svitlo/ui-kit`. It deliberately contains **no curriculum**.

- `/questions`: shared question widgets
- `/questions/api`: question events, slots and controller usage
- `/topics/light`: interactive How Light Moves demonstration with scenes and quiz,
  with its tests under `src/data/howLightMoves` (checkpoint E2E beside its scene)
- `/topics/demo`: subject-neutral lesson demonstration with navigation, quiz,
  localization and persisted progress, defined in `src/data/demoLesson/demoLesson.ts`

Authored subject content, static skill taxonomies and learning-method documentation
belong to the corresponding textbook (currently `learningApps/math`).

Development and checks from repository root:

```bash
npm ci
npm run dev
npm run typecheck
npm run test:components
npm run test:e2e
```

The Playground only imports other packages through their public npm exports.

Generic builder and localization tests are owned by `@svitlo/engine`; Playground contains demonstration data and application-specific tests only.

IndexedDB controllers, schemas and transaction utilities are owned by `@svitlo/indexdb`. App-specific `src/testing` currently hosts the browser harness and Playwright suite; consolidating this harness is Stage 5.

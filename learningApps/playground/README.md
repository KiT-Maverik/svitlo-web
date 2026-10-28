# Playground

`@svitlo/playground` is a standalone Next.js sandbox for experimenting with
`@svitlo/engine` and `@svitlo/ui-kit`. It deliberately contains **no curriculum**.

- `/questions`: shared question widgets
- `/questions/api`: question events, slots and controller usage
- `/topics/demo`: static subject-neutral lesson fixture with navigation, quiz,
  localization and persisted progress, defined in `src/fixtures/demoLesson.ts`

Authored subject content, static skill taxonomies and learning-method documentation
belong to the corresponding textbook (currently `apps/textbooks/math`).

Development and checks from repository root:

```bash
npm ci
npm run dev
npm run typecheck
npm run test:components
npm run test:e2e
```

The Playground only imports other packages through their public npm exports.

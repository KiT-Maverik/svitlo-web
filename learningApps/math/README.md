# Svitlo Mathematics Textbook

Standalone Next.js application: `@svitlo/math`.

The application owns mathematics curriculum, authored skills taxonomy, static UUID registries, tests and documentation. Demonstration lessons such as How Light Moves belong to Playground.

Package-specific educational documentation lives in `docs/`; domain content resides in `src/data/skillsTaxonomy/`.

From the monorepo root:

```bash
npm ci
npm run build:math
npm run dev:math
npm run test:math
npm run typecheck:math
```

The app depends on the public npm exports of `@svitlo/engine` and `@svitlo/ui-kit`, not on the Playground or on source paths in other workspaces. Registry publishing and isolated tarball consumption are verified in later migration stages.

Math-only taxonomy regression tests are co-located with subject data in `src/data/skillsTaxonomy/__tests__/`. Shared Assessment Method descriptors and generic builder tests belong to `@svitlo/engine`.

IndexedDB storage, persisted-state controllers and Zod schemas are shared through `@svitlo/indexdb`. The canonical native IndexedDB browser E2E harness, commands and Playwright suite are owned by `shared/indexdb/testing`; app-local `src/testing/setup.ts` remains solely for component tests.

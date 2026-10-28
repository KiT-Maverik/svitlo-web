# Svitlo Mathematics Textbook

Standalone Next.js application: `@svitlo/math`.

The application owns mathematics curriculum, authored skills taxonomy, static UUID registries, localized lessons, interactive scenes, tests and documentation.

Package-specific educational documentation lives in `docs/`; domain content resides in `src/math/`.

From the monorepo root:

```bash
npm ci
npm run build:math
npm run dev:math
npm run test:math
npm run typecheck:math
```

The app depends on the public npm exports of `@svitlo/engine` and `@svitlo/ui-kit`, not on the Playground or on source paths in other workspaces. Registry publishing and isolated tarball consumption are verified in later migration stages.

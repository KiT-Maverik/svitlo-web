# Svitlo Monorepo Migration

## Phase 01 — Workspace foundation

This phase establishes the package boundaries **without moving or changing the existing Next.js application**.

- The current application still lives at repository root (`src/`, `public/`, `next.config.ts`, etc.).
- Existing `npm run dev`, `npm run build`, `npm run typecheck`, test scripts, and GitHub Actions remain in place.
- The new packages contain **only manifests and TypeScript configuration**. They are deliberately not runnable applications or built libraries yet.
- The existing npm lockfile and `npm ci` remain authoritative. The `pnpm-workspace.yaml` and `turbo.json` describe the planned layout; switching the package manager and activating Turborepo tasks requires a separate, verified migration with a reproducible lockfile and updated CI.

### Workspaces

| Path | Package | Purpose |
| --- | --- | --- |
| `backend/server` | `@svitlo/server` | Future server application |
| `frontend/textbooks/math` | `@svitlo/math` | Future mathematics Next.js textbook |
| `frontend/playground` | `@svitlo/playground` | Future independent Next.js playground |
| `shared/engine` | `@svitlo/engine` | Framework-agnostic assessment, synchronization, generation, and other non-UI logic |
| `shared/ui-kit` | `@svitlo/ui-kit` | Shared React/MUI components, hooks, contexts, and frontend-specific utilities |

### Dependency boundaries

- `engine` must not depend on React, Next.js, MUI, or the UI kit.
- `ui-kit` may consume `engine`, but neither shared package may import from an application.
- `math` and `playground` may consume shared packages, but must not depend on each other.
- `server` may consume environment-agnostic engine functionality, not frontend code.
- Import other packages through package exports (once implemented), not relative paths across workspace roots.
- Each workspace has its own `tsconfig.json` and local `@/*` alias reserved for future source code.

### Validation

- `npm ci` — installs the current application and links the empty npm workspaces.
- `npm run packages:check` — checks workspace paths, manifests, aliases, and lockfile links.
- `npm run packages:list` — lists the five workspace packages.
- Existing root app scripts still validate the unchanged application. Package-wide scripts (`packages:build`, `packages:typecheck`, `packages:lint`, `packages:test`) skip packages with no task yet.

### Follow-up phases

1. Move the existing Next.js application into `frontend/textbooks/math` with behavior preserved.
2. Extract engine code, with contract tests and dependency audits.
3. Extract UI kit components and hooks; establish package exports.
4. Turn playground into an independent Next.js application with no subject-specific content.
5. Activate full multi-package build/test CI, and migrate to pnpm + Turborepo with a committed lockfile.

**Scope guard:** Do not relocate, refactor, or duplicate lesson content, taxonomies, questions, widgets, or existing application code in Phase 01.

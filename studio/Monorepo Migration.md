# Svitlo Monorepo Migration

## Phase 01 — Workspace foundation (complete)

## Phase 02 — Relocate Next.js into Playground (complete)

Phase 01 established package boundaries. Phase 02 moves the existing application into Playground without changing its source files.

- The app now lives at `frontend/playground/` (`src/`, `public/`, `next.config.ts`, etc.). The entire original `src/` tree, including the math content and `utils/`, is temporarily preserved inside Playground.
- Existing `npm run dev`, `npm run build`, `npm run typecheck` and test commands delegate to the Playground workspace. GitHub Actions runs the same root commands.
- Playground and Engine are now buildable. Math textbook, UI Kit and Backend Server remain initialized placeholders.
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

- `npm ci` — installs dependencies and links all npm workspaces.
- `npm run packages:check` — checks workspace paths, manifests, aliases, and lockfile links.
- `npm run packages:list` — lists the five workspace packages.
- Root app scripts delegate to Playground. Package-wide scripts (`packages:build`, `packages:typecheck`, `packages:lint`, `packages:test`) run Playground while skipping placeholders.

### Follow-up phases

1. [Complete] Relocate the existing Next.js application to `frontend/playground` with behavior preserved.
2. Extract engine code, with contract tests and dependency audits.
3. Extract UI kit components and hooks; establish package exports.
4. Turn playground into an independent Next.js application with no subject-specific content.
5. Activate full multi-package build/test CI, and migrate to pnpm + Turborepo with a committed lockfile.

**Scope guard:** The original Next.js application was relocated intact in Phase 02. Shared utilities and content types are being extracted in subsequent phases, with CI verification.

## Phase 03 — Extract standalone Engine (first vertical slice)

- Built and typed npm package `@svitlo/engine` now owns localization definitions, localized-path generation, and Skill/SkillGroup/SkillDomain authoring validations.
- `@svitlo/playground` consumes the compiled package via a real npm dependency and public `exports`.
- Legacy files under Playground contain compatibility re-exports, not duplicate implementations. They are removed after downstream import migration, separately from behavior changes.
- No app imports from `shared/engine/src/`. No engine imports from Playground, React, or Next.js.
- Builders for lessons/resources/questions, text resources, dynamic question and assessment method configs remain in Playground until their contract dependencies are made portable. No React hooks or UI-only utilities were found in this first batch; `ui-kit` is untouched.
- Registry extraction remains an explicit later phase; `private: true` intentionally prevents accidental publication.

## Phase 04 — Shared content contracts (complete)

- Engine is the canonical owner of content contracts for Resource, Lesson, Question, Quiz, Assessment Method, Disability and shared collection utilities.
- The stable set of 16 Assessment Method UUIDs now belongs to Engine, not a mathematics-specific path. The original path re-exports the registry for compatibility.
- Playground's previous content-contract files re-export **types only**, preserving old imports without duplicating declarations.
- The Engine remains free of React and Next.js; scene `component` and lesson section `icon` are extensible, renderer-specific values typed as `unknown` by default. Frontend renderers supply/narrow their UI representation.
- Public package API: `@svitlo/engine/content`. Future textbooks can extend base contracts using TypeScript intersections or generic parameters without editing Engine.

## Layout update (2026-10-28)

Live workspace paths are now `apps/playground` and `apps/textbooks/math`. `apps/` holds independently deployable applications; `apps/textbooks/` groups textbook applications. The historical phase descriptions above retain their original paths for chronology. Existing package APIs and extraction boundaries remain unchanged.

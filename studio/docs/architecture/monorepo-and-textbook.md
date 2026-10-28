# Svitlo — Monorepo & Independent Textbooks

**Canonical implementation guide (Stage 8, 2026-10-29).** Always check manifests and CI for the commit under review. [Historical migration log](../../Monorepo%20Migration.md) is **not** a current directory map. [Final audit and remaining debt](./migration-stage-8-audit.md).

## Purpose and non-negotiable extraction constraint

Svitlo combines independently deployable Next.js apps with explicit reusable library packages. A textbook has its **own package root**, curriculum, `docs/`, data, assets, configuration and tests. It must remain possible to move a textbook to a separate repository without copying another app's code or globally rewriting imports. Extracted shared packages must be installable through declared public APIs; a green monorepo build does not, on its own, prove isolated registry/tarball consumption.

## Current repository map

```text
/
├── backend/
│   └── server/           # @svitlo/server — manifest-only backend placeholder
├── frontend/
│   └── platform/         # @svitlo/platform — independent Next.js catalog app
├── learningApps/
│   ├── math/             # @svitlo/math — standalone textbook and its docs/content
│   └── playground/       # @svitlo/playground — demo and test app, not a shared library
├── shared/
│   ├── contracts/        # @svitlo/contracts — framework-free types, IDs, locales
│   ├── engine/           # @svitlo/engine — builders, validation, generators, data
│   ├── indexdb/          # @svitlo/indexdb — IndexedDB CRUD, schemas, persistence
│   └── ui-kit/           # @svitlo/ui-kit — reusable React/MUI UI and LearningLayout
├── scripts/              # package boundary, duplicate and artifact checks
├── studio/               # cross-cutting architecture, workflow and product docs
├── package.json          # npm workspaces (authoritative)
├── package-lock.json     # npm lockfile (authoritative with npm ci)
├── pnpm-workspace.yaml   # pattern mirror; not the active CI installer
└── turbo.json            # task graph reference; not used by GitHub Actions
```

**Concrete source roots:** `shared/contracts`, `shared/engine`, `shared/indexdb`, `shared/ui-kit`, `learningApps/math`, `learningApps/playground`, `frontend/platform`, `backend/server`. These paths are actual package folders; diagrams above use abbreviated names.

The **eight** current workspaces are `@svitlo/server`, `@svitlo/platform`, `@svitlo/math`, `@svitlo/playground`, `@svitlo/contracts`, `@svitlo/engine`, `@svitlo/indexdb`, `@svitlo/ui-kit`. Patterns in root `package.json` and lockfile: `backend/*`, `frontend/*`, `learningApps/*`, `shared/*`. The server is deliberately not claimed to be executable yet.

## Dependency direction and ownership

```text
@svitlo/contracts ──────────┬──> @svitlo/engine ───> @svitlo/ui-kit
                            └──> @svitlo/indexdb

@svitlo/math ──────────────┐
@svitlo/playground ────────┼──> shared public exports only (no app → app)
                           │
@svitlo/platform ──────────┘   (currently no shared or textbook dependency)
@svitlo/server: manifest scaffold, no runtime
```

Arrows above summarize **allowed consumption**, not a promise that every app imports every shared package. Specifically:

| Package | Owns | Direct production dependencies / boundaries |
| --- | --- | --- |
| Contracts | Common content/state/taxonomy types, stable IDs and language descriptors | No runtime dependencies on Engine, UI, Next.js or apps |
| Engine | Builders, generation, assessment methods, localization logic | Depends on Contracts; no React, Next, MUI or app imports |
| IndexDB | `svitlo-progress` v1 persistence, Zod state validation, browser controllers | Depends on Contracts and Zod; production does not depend on Engine/React/Next |
| UI Kit | Components, Flag assets, LearningLayout, NavbarPreferences and locale dictionaries | Depends on Engine and UI peer dependencies; no Next.js/application imports in production source |
| Math / Playground | Route handlers, progress/locale providers, subject content or demo fixtures | Declared public shared exports only; **no app-to-app imports** |
| Platform | Standalone public site and external textbook catalog links | Next.js/React/MUI; does not embed Math or Playground |
| Server | Future backend | Placeholder package only; do not claim build/API/test capabilities |

Framework-specific links, `usePathname`, lesson progress and `useColorScheme` remain in app adapters. `createLessonLearningLayout` in UI Kit accepts injected host bindings; the UI Kit itself must not import Next.js. `NavbarPreferences` and its seven specialized dictionaries are owned by UI Kit; each app supplies locale/theme state via props and hooks.

The canonical native IndexedDB browser harness, commands and Playwright suite live in `shared/indexdb/testing` and use a temporary standalone browser test host. App-local `src/testing/setup.ts` remains Vitest setup; it is **not** IndexedDB duplication. The persisted database name/version/store structure was retained across migration.

## Standalone textbook package contract

Each `learningApps/<subject>` owns its own `package.json`, `tsconfig.json`, Next.js config, `src/app` routes, `src/data` authored content, `public` media where required, package-owned `docs/` and tests. Reusable code is accessed through declared public `@svitlo/*` exports, never `shared/*/src`, another app's `src`, aliases resolved outside the package, or `../` paths crossing package roots. The `@/*` alias is local to that package.

Git-backed typed content and authoring IDs are **not** stored in runtime user databases. `@svitlo/contracts/content` defines structural contracts; Engine supplies operations, UI Kit presentation, IndexDB persistence, each textbook its curriculum. See [Git-first typed content](./git-first-typed-content.md), [system boundaries](./system-boundaries.md), [accessibility/localization](./internationalization-and-accessibility.md) and [offline roadmap](./offline-first-and-device-compatibility.md). Do not claim offline/PWA or backend account features are implemented merely because planned in Studio.

## Development and CI

From the monorepo root:

```bash
npm ci
npm run packages:check             # structure, package APIs and clone-baseline audit
npm run typecheck
npm test
npm run test:components
npm run test:components --workspace @svitlo/math
npm run lint
npm run build
npm run packages:artifacts:check   # validates built JS/declaration/asset targets
npm run test:e2e:db                # after Playwright browser install
npm run test:e2e:platform          # after building Platform
```

Individual app entrypoints: `npm run dev:math`, `npm run dev:platform`, `npm run dev --workspace @svitlo/playground`. The `Questions quality` workflow runs root checks and app E2E; the `Native IndexedDB browser controllers` workflow repeats real Chromium checks; `UI Kit Storybook` builds independently.

**Evidence limitations:** these checks inspect declared packages, compiled artifacts and running apps **inside the monorepo**. Independent `npm pack`/registry installation, clean-room source extraction, production deployment and real backend/offline services are separate, not-yet-proven tasks.

## Remaining duplication after Stage 7

A Stage 8 SHA comparison found **67 byte-identical same-relative-path files in Math and Playground `src/`** (including application-owned lesson rendering, lesson progress, routes, locales and tests). These are a *known migration debt*, not evidence that Stage 4–6 failed. The full exact-path baseline lives in `scripts/known-app-duplicates.json`; `check-final-architecture.mjs` rejects **new** clone paths but allows existing baseline paths until separately reviewed. Do not blindly promote app-owned providers or content into UI Kit. Deduplicating the still-shared lesson runtime requires a separate, scoped architectural migration with explicit public APIs and regression tests.

## Review rules

A package change must declare owner, consumers, public API changes, TypeScript/build order, regression evidence and standalone extraction implications. Each stage PR is stacked on the preceding stage branch until merged; retarget in order. The 2026-10-28/29 migration series was Stage 4 → Stage 5 → Stage 6 → Stage 7 → Stage 8 (the history document includes **older, independently numbered phases**).

**Source of truth precedence:** actual current code/manifest for implementation status, canonical Studio architecture for intended invariants, textbook-local docs for editorial content, then dated migration history for context.

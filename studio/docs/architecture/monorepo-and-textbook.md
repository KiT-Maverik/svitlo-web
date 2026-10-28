# Monorepo & Standalone Textbook Architecture

**Status:** repository structure **observed at the current `main` / PR branch on 2026-10-28**, plus agreed architectural requirements. Recheck manifests and source before changing packages. This is the canonical **current-layout guide**; [Monorepo Migration](../../Monorepo%20Migration.md) preserves earlier paths and phase history.

## 1. Why the system is a monorepo

Svitlo is a constellation of **independently buildable and extractable applications and reusable packages**, not a single Next.js project with everything in `src/`. The repository groups packages by responsibility and shares them through **explicit npm dependencies and stable package-level public APIs**.

**Extraction invariant:** it must remain possible to move a textbook application into its own repository/deployment later **without rewriting its educational content or replacing app-to-app imports**. The textbook brings its own source, lesson data, docs, assets, config, local aliases and declared dependencies. Shared libraries can be installed/built as packages and reused in any textbook.

## 2. Actual top-level layout

~~~text
<MonorepoRoot>/
├── learningApps/
│   ├── playground/                 # existing Next.js app; demonstration/reference
│   └── math/                       # implemented standalone Next.js mathematics textbook
├── frontend/
│   └── platform/                   # new platform placeholder; not a declared npm workspace
├── backend/
│   └── server/                     # server workspace scaffold
├── shared/
│   ├── engine/                     # reusable, separately compiled TypeScript engine
│   └── ui-kit/                     # reusable, separately compiled React/MUI UI Kit
├── scripts/                        # root workspace/boundary validation and tooling
├── studio/
│   ├── docs/                       # architecture, constitutions, entity contracts
│   ├── personas/                   # specialist responsibilities / reviewers
│   └── skills/                     # task-specific AI-assisted authoring/engineering skills
├── package.json                    # npm workspace manifest and root scripts
├── package-lock.json               # current authoritative npm lockfile
├── pnpm-workspace.yaml             # declared alternative layout (not proof of active pnpm)
├── turbo.json                      # task graph configuration (not proof of active Turborepo CI)
└── tsconfig.base.json              # shared strict TypeScript defaults
~~~

**Naming clarification (post-reorganization):** textbook and Playground application source directories now live directly under **`learningApps/`**. The top-level `frontend/platform/` placeholder exists, but is not a declared npm workspace and must not be treated as an implemented application. Historical `apps/` paths in older migration notes are obsolete. New package references must be checked against the actual tree and manifests; a directory move alone is not proof of independent workspace integration.

### Directory responsibilities

| Area | Responsibility | Is it an npm workspace itself? |
| --- | --- | --- |
| `learningApps/*` | Independent, topic-specific **standalone Next.js textbooks** | Each matching textbook directory has its own `package.json` |
| `learningApps/playground` | Independent Next.js reference/demonstration app; **not** a runtime library for textbooks | Yes |
| `backend/*` | Independent services and backend functional packages | Each matching package, not the whole directory |
| `shared/engine` | Framework-independent content types, builders, localization, generation, taxonomy and reusable non-UI logic | Yes |
| `shared/ui-kit` | Shared React/MUI components, interactive widgets, navigation primitives and UI utilities | Yes |
| `scripts/` | Root-level tooling, workspace audits and package-boundary verification | No |
| `studio/` | Human/AI architectural, editorial, workflow and review documentation | No; documentation is not a runtime dependency |

**Current workspace patterns** in [root `package.json`](../../../package.json) and the corresponding lockfile: `backend/*`, `learningApps/*`, `shared/*`. The package/workspace validators and applicable CI path references were updated after the move from `apps/`. The inspected workspace packages are `@svitlo/server`, `@svitlo/math`, `@svitlo/playground`, `@svitlo/engine` and `@svitlo/ui-kit`. **Do not infer green CI from a path update alone:** run package checks, builds and tests on the new commit.

## 3. Package ownership and dependency graph

~~~text
                learningApps/playground        learningApps/<subject>
                     |    \                |       \
                     v     v               v        v
                 @svitlo/ui-kit ------> @svitlo/engine
                         |
                         └────────────> @svitlo/engine

     backend/server  ──may depend on──>  shared/engine (server-safe APIs)
     studio/ and scripts/ are not imported into runtime code
~~~

The schematic illustrates allowed directions, **not** a claim that all applications or backend integrations are complete.

- **`@svitlo/engine`** is reusable, framework-agnostic TS logic; **no React, Next.js or MUI dependency** and no import from apps, UI Kit or backend.
- **`@svitlo/ui-kit`** may depend on Engine and its declared UI peer dependencies; it **must not import Next.js-specific host code or application internals**. Host-specific providers, routes and lesson orchestration remain app-owned unless an explicitly reusable abstraction is extracted.
- **Textbook apps and Playground** may consume Engine and UI Kit via declared npm dependencies and their public `exports`. They must **not depend on each other's source trees** or share code via relative paths crossing workspace roots.
- **`backend/*`** may consume environment-safe Engine functionality through its public interface. Frontend UI components and browser-only packages do not belong in server dependencies.
- Shared functionality is promoted **only when actually reusable**, with an explicitly owned public API and independently testable package. Do not move everything into `shared` just because two applications could theoretically use it.

### Public API and local aliases

**Public API** means the package's declared `package.json exports`/entrypoints (for example, `@svitlo/engine/content`, `@svitlo/engine/builders`, `@svitlo/engine/localization`, `@svitlo/ui-kit` and exported widget/navigation subpaths). Import them by **npm package specifier**, not by `shared/engine/src/...`, another package's `dist/...` or fragile relative filesystem traversal.

**Each package owns its own dependency graph and `tsconfig.json`**, extending the shared base where appropriate. A local `@/*` mapping resolves to **that package's own `src/*`**; it is **not** a monorepo-wide import shortcut. The Playground additionally has local `@layout` and `@pages` aliases. No package's local aliases should implicitly import another application's private code.

To add a new shared dependency: edit the **consumer's `package.json`**, use its documented version/range and public `exports`, verify build order, types, tests and package-boundary scripts. Do not bypass the dependency graph merely because all sources live together in Git.

### Independent builds — actual vs intended

**Target invariant:** every developed package supports **independent build, typecheck, test and, where applicable, deployment** with its declared dependencies, without relying on another app's private files.

**Verified current status from manifests:**
- `@svitlo/engine` — compiled via `tsc -p tsconfig.build.json`; has `build`, `typecheck` and `test` scripts and declared `dist` public exports.
- `@svitlo/ui-kit` — compiled via `tsc -p tsconfig.build.json` plus asset copying; `build`, `typecheck`, `test` and `dist` public exports; depends on Engine.
- `@svitlo/playground` — implemented Next.js app with `next build`, `next dev`, `typecheck` and multiple test commands; depends on Engine and UI Kit.
- `@svitlo/math` — **now an implemented independent Next.js textbook** with its own `src`, `docs`, subject content, routes, assets, build/typecheck/test scripts and Engine/UI Kit dependencies. Verify those commands rather than inheriting Playground results.
- `@svitlo/server` — **currently scaffold only**; do **not** claim executable backend scripts, handlers or tests.

The current [root scripts](../../../package.json) build **Engine → UI Kit → Playground → Math**; the root `build` is **not yet a full build of Server**, which remains a scaffold. The checked-in `package-lock.json` and npm workspaces are currently authoritative; `pnpm-workspace.yaml` and `turbo.json` express future/alternate orchestration, not automatic evidence that CI uses pnpm/Turbo.

The [workspace validator](../../../scripts/check-workspaces.mjs) and [package-boundary validator](../../../scripts/check-package-boundaries.mjs) check specific workspace structures/dependency rules. **A passing check is not a universal guarantee** that every future package import, API/export, offline feature or independent app deployment is correct.

## 4. Standard standalone textbook package

**Target standardized form, grounded in the now-implemented Math application, but not a demand that every app use identical folder names:**

~~~text
learningApps/<subject>/
├── package.json                    # unique @svitlo/<subject>, real dependencies and scripts
├── tsconfig.json                   # own TS aliases and strict configuration
├── next.config.ts                  # Next.js configuration where needed
├── eslint.config.mjs               # local or referenced lint config where needed
├── public/                         # owned static/downloadable media
├── docs/                           # own reviewed editorial source and specifications
│   ├── skills/                      # canonical Skills Taxonomy where applicable
│   ├── curriculums/                 # curricular definitions
│   └── lessons/                     # Lesson briefs, scripts and Scene specifications
└── src/
    ├── app/                         # Next.js App Router routes, layouts and route boundaries
    ├── content/                     # Git-authored strictly typed Lesson/Section resources
    ├── components/                  # textbook-specific React composition, not copied UI Kit
    ├── i18n/                        # textbook-owned localization composition if needed
    └── ...                          # app-owned helpers, test fixtures and state adapters
~~~

These are **responsibility-based directories**, not an obligation to create empty folders. The exact component, `utils`, `db`, state, tests and asset substructure can follow the current app conventions and evolve through reviewed architectural decisions.

### Textbook engineering contract

1. **A textbook is a real standalone Next.js application**, not a subdirectory of Playground, not a runtime import into another textbook and not a subject-data plugin that only works inside a shared host.
2. Its `docs/` and `src/content/` belong to **that app/package**, so a Coding Agent tasked with a particular textbook uses its **package root** for authored output. Shared `studio/` is for project-wide instructions, not a place to deposit lesson-specific scripts.
3. Git owns source: typed `*.data.ts` modules for educational objects with **named exports**, `*.ids.ts` for stable authoring IDs where applicable, co-located locales and reviewed text/Markdown/media. `index.data.ts` and `index.ids.ts` obey level-specific export boundaries. See [Git-First Typed Content](./git-first-typed-content.md).
4. Lesson → ordered typed **Section** → ordered typed **Resource** composition follows the [Engine Lesson contract](../../../shared/engine/src/types/content/lesson.types.ts) and [Resource contract](../../../shared/engine/src/types/content/resource.types.ts), not arbitrary page-specific shapes. The Scene root is zero-prop and obtains its locale via existing context where that app supplies it.
5. Reuse `@svitlo/engine` and `@svitlo/ui-kit` **through public APIs**. Extract broadly reusable code into shared packages with explicit ownership; keep textbook-specific interactions, subject models and routes inside that textbook.
6. Build for **full supported-language coverage**, true LTR/RTL, inclusive/assistive-technology access, and **complete downloadable offline/PWA experiences** as product requirements. **Do not claim the last feature is implemented until working Service Worker/download flows and offline E2E are verified**. See [Localization & Accessibility](./internationalization-and-accessibility.md) and [Offline & Device Compatibility](./offline-first-and-device-compatibility.md).
7. Keep tests near the owned components/data or in package-specific suites following the real project conventions; a package is not “ready for extraction” merely because its TypeScript aliases resolve.
8. Each new textbook must explicitly prove its **own build/typecheck/tests and dependency boundaries** as it graduates from scaffold to independently deployable app; do not inherit Playground's green CI as proof.

### Current concrete reference

The [Math textbook package](../../../learningApps/math/package.json) and [Math Skills Taxonomy](../../../learningApps/math/src/data/skillsTaxonomy/) have their own package-owned sources. The subject-specific [How Light Moves demo Data](../../../learningApps/playground/src/data/howLightMoves/howLightMoves.data.ts) and [demo Sections](../../../learningApps/playground/src/data/howLightMoves/sections/theory/theory.data.ts) now live in **Playground**, not under the Math textbook. The [Math Lesson Section renderer](../../../learningApps/math/src/components/pages/Lesson/LessonSectionContent/LessonSectionContent.tsx) still exists, but its legacy `/topics/light` route and tests reference the old content location and **require a separate migration before they can be considered working**. Do not reintroduce duplicate demo content into Math merely to satisfy stale imports; adapt or retire those usages through their owning migration work.

Math is intended to be a standalone textbook and Playground an independent demonstration app; both must pass their own tests before declaring the extraction complete.

Do not duplicate Math's subject-specific content into `shared` or Playground to “standardize” a textbook. Every new textbook must be independently testable and host only **its own educational content**.

## 5. PR review and change validation

A package-related PR should make its **owners and downstream consumers explicit**: which workspace was modified, whether public exports or dependency declarations changed, and which app/package builds and tests were run. Run the appropriate root `npm run packages:check` and affected workspaces' validation; do not substitute Playground test results for Math, Server or any other affected package.

- A [Development Reviewer](../../personas/development-reviewer.persona.md) checks package boundaries, modularity, public APIs, independent textbook extraction and [Development Constitution](../development-constitution.md) once populated.
- A [Quality Assurance Reviewer](../../personas/quality-assurance-reviewer.persona.md) checks test efficacy, regression evidence and [Quality Constitution](../quality-constitution.md) once populated.
- The constitutions are currently **empty placeholders**, so neither reviewer may invent mandatory constitutional clauses.

**Related:** [System Boundaries](./system-boundaries.md), [Coding Agent Specializations](./coding-agent-specializations.md), [Monorepo Migration History](../../Monorepo%20Migration.md).

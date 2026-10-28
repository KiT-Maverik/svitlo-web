# @svitlo/engine

Framework-neutral, independently buildable Svitlo domain package.

- **No imports** from `frontend/`, Next.js, React, or MUI.
- Compiled artifacts in `dist/` are the only public entry points. Apps import `@svitlo/engine` or documented subpaths; never `shared/engine/src`.
- `npm run build --workspace @svitlo/engine` builds CommonJS and TypeScript declaration files.
- `npm run typecheck --workspace @svitlo/engine` validates the isolated package.
- The package is **private and not published yet**. Its exports, files and semver-compatible dependency shape prepare it for a future registry.
- In this workspace `@svitlo/playground` depends on version `0.0.0`; npm resolves the local workspace link. In an external repository the same package name is installed at an explicitly published version.
- Additional engine domains will be extracted incrementally. Compatibility barrels remain in Playground for pre-existing deep imports until callers are migrated.

## Shared content contracts

Import `Lesson_Config`, `Question_Config`, `Resource_Config`, `Quiz_Config`, and related types from `@svitlo/engine/content`. Assessment method IDs are maintained here for all school subjects.

Contracts are extensible with intersections, for example:

```ts
import type { Lesson_Config } from '@svitlo/engine/content';
type BiologyLesson = Lesson_Config & { organismIds: readonly string[] };
```

Render-specific values remain framework-independent in Engine: `SceneResource_Config<TComponent>` and `LessonSection_Config<TIcon>` accept presentation types supplied by the caller. Playground adapts a scene's opaque payload to React at the rendering boundary.

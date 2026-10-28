# @svitlo/engine

Framework-neutral, independently buildable Svitlo domain package.

- **No imports** from `frontend/`, Next.js, React, or MUI.
- Compiled artifacts in `dist/` are the only public entry points. Apps import `@svitlo/engine` or documented subpaths; never `shared/engine/src`.
- `npm run build --workspace @svitlo/engine` builds CommonJS and TypeScript declaration files.
- `npm run typecheck --workspace @svitlo/engine` validates the isolated package.
- The package is **private and not published yet**. Its exports, files and semver-compatible dependency shape prepare it for a future registry.
- In this workspace `@svitlo/playground` depends on version `0.0.0`; npm resolves the local workspace link. In an external repository the same package name is installed at an explicitly published version.
- Additional engine domains will be extracted incrementally. Compatibility barrels remain in Playground for pre-existing deep imports until callers are migrated.

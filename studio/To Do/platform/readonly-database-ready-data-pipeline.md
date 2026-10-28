# Immutable Database-Ready Data Builders

**Status:** Proposed — architectural quality gap to verify and close, not implemented by this document.
**Area:** platform

## Goal

Ensure canonical educational entities in named-export `*.data.ts` files are lightweight, normalized and suitable for future persistence, with strongly typed `readonly` builder output where applicable.

## Intended scope

- Audit each Engine authoring builder/factory for readonly compile-time return types, nested immutability, normalized ID references, redundant object embeddings and unexpected runtime mutations.
- Current `buildLessonConfig` returns `T & Pick<Lesson_Config, 'collection'>`, not an inherently deeply readonly type; `as const` on returned objects does not guarantee runtime deep freezing.
- Distinguish **type-level immutability**, runtime freezing and database serialization. The canonical data model should be ready for database ingestion **without embedding database metadata, ORM indexes or runtime sync state** in its source.
- Scene renderer payloads may be React elements; separate the serializable content identity/specification from nonserializable UI implementation rather than claiming a JSX node is database-ready.
- Keep source in Git and derived databases/manifests reproducible, with migrations, tests and no invented silent database schema changes.

## Open decisions and constraints

Define required depth of immutability, builder verification tests, serialization boundary, entity normalized schema and migration strategy. This backlog item does not approve global builder refactoring.

**Architectural references:** [Git-First Typed Content](../../docs/architecture/git-first-typed-content.md); [Monorepo](../../docs/architecture/monorepo-and-textbook.md).

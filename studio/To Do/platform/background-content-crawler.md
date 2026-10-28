# Background Content Ingestion & Indexing Worker

**Status:** Proposed — not implemented by this document.
**Area:** platform

## Goal

Create a separate, non-UI-blocking process to populate/query runtime content registries.

## Intended scope

- Consume reviewed Git-authored content/manifest into a normalized database or search index as needed.
- Run in worker/background infrastructure, not by blocking the browser/UI render path.
- Track ingestion versions, IDs, deduplication, retries, idempotence and failures.
- Keep Git the editorial source of truth; runtime indexes are rebuildable derivatives.

## Open decisions and constraints

Determine worker/server placement, triggers, versioned schema, storage and eventual offline sync.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [git-first-typed-content.md](../../docs/architecture/git-first-typed-content.md)

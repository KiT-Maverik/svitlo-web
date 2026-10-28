# Typed Lesson & Question Event Bus

**Status:** Proposed — not implemented by this document.
**Area:** learning

## Goal

Publish factual learning events for independent consumers.

## Intended scope

- Expose versioned, typed notifications for Lesson and Section start/completion, question correct/incorrect/near miss, attempts/retries and custom well-scoped events.
- Consumers (Programs, progress, recommendations) subscribe through stable APIs, not direct Lesson component coupling.
- Keep ordering, deduplication, replay, offline delivery and idempotent state separate from assessment authority.
- Do not invent these as already existing contracts.

## Open decisions and constraints

Decide event payload IDs, versioning, privacy, source of truth, replay and lifecycle.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [system-boundaries.md](../../docs/architecture/system-boundaries.md)

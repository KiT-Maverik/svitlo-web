# Program Content Insertions Between Sections

**Status:** Proposed — not implemented by this document.
**Area:** learning

## Goal

Allow Program context to insert its own content around reusable Lessons.

## Intended scope

- Provide stable before/after Lesson and Section slots and explicit named anchors.
- Insert Story/Program-specific Section or scene without editing or cloning canonical Lesson source.
- Keep deterministic ordering, independent IDs/locales, accessible navigation and state.

## Open decisions and constraints

Specify insertion grammar, conflicts, missing slots and how section keys evolve.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [system-boundaries.md](../../docs/architecture/system-boundaries.md)

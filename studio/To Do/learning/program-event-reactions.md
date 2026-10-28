# Program Reactions & Success-Screen Overrides

**Status:** Proposed — not implemented by this document.
**Area:** learning

## Goal

Let Program story react to Lesson events and replace end-of-lesson celebration.

## Intended scope

- Define reactions to question/section/lesson events (correct, incorrect, near-correct, completion), narrative overlays and mascot behavior.
- Allow an authorized Program to replace or enrich the Lesson success screen without changing pass rules.
- Keep animations accessible and replay/deduplication safe; prevent story from affecting correctness.

## Open decisions and constraints

Define event priority, screen substitution contract, interactions and interruption policies.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [system-boundaries.md](../../docs/architecture/system-boundaries.md)

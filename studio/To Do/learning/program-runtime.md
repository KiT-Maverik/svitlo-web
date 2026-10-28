# Program as a Sequenced Learning Journey

**Status:** Proposed — not implemented by this document.
**Area:** learning

## Goal

Create an independent Program entity that sequences Lesson content into a course/microcourse.

## Intended scope

- Program chooses and orders reusable Lessons, may connect to a curriculum, and carries story/mascot/progress distinct from Lesson.
- A Lesson remains standalone, factually unmodified and re-usable across Programs.
- Track stable Program IDs, versions, allowed progression, locale and independent Program narrative state.
- Do not mix Program completion with Quiz pass or Skill mastery.

## Open decisions and constraints

Decide Program contract, composition ownership, versioning and relationship to curricula.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [system-boundaries.md](../../docs/architecture/system-boundaries.md)

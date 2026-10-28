# Unlocked Notes: Interactive Mind Map

**Status:** Proposed — not implemented by this document.
**Area:** learning

## Goal

Visualize the learner's discovered notes as a navigable graph.

## Intended scope

- Group graph nodes by modules and Lessons and reveal child Note nodes only when requested and unlocked.
- Allow expand/collapse a terminal node, collapse whole branches, shrink/minimize a branch to near-invisible while preserving a way to restore it.
- Show per-branch % unlocked and a preference to show/hide unlocked or locked node types.
- Consider user avatar as central node with an accessible progress ring; do not require it if it reduces usability.
- Provide keyboard navigation, linear accessible outline alternative, mobile and weak-device layouts.

## Open decisions and constraints

Choose graph data model, progress denominator, layout engine and fallback to accessible outline.

**Implementation note:** Backlog only, not an approved new runtime contract or claim of functionality.

**Architectural references:** [lesson-notes.md](../../docs/architecture/lesson-notes.md); [internationalization-and-accessibility.md](../../docs/architecture/internationalization-and-accessibility.md)

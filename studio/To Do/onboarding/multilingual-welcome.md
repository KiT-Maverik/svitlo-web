# Multilingual Welcome Screen

**Status:** Proposed — not implemented by this document.
**Area:** onboarding

## Goal

Create a memorable first-entry language selection flow.

## Intended scope

- Cycle greeting text through mandatory locales with the currently displayed language/flag representation.
- Allow choosing the currently displayed greeting language directly or opening a searchable complete locale selector.
- Clearly distinguish language from country/flag; do not imply one flag uniquely identifies a language.
- Account for RTL, reduced motion, screen readers, focus and keyboard access.
- Persist the chosen primary language and optionally a second learning language.

## Open decisions and constraints

Define timing, whether language auto-detection suggests but never overrides choice, flag representation, and transitions.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [internationalization-and-accessibility.md](../../docs/architecture/internationalization-and-accessibility.md)

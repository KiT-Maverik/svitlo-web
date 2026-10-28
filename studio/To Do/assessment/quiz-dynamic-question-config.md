# Dynamic Question Generation in Quiz Config

**Status:** Proposed — not implemented by this document.
**Area:** assessment

## Goal

Let a Quiz specify deterministic dynamic questions with constraints.

## Intended scope

- Describe generator identity/version, safe parameter overrides, seed policy and count/selection, referencing validated source definitions.
- Enable reproducibility of a particular delivered test, answer, review and teacher audit.
- Avoid fictional new Quiz_Config properties until Engine contract is separately approved.
- Keep stable answer keys, a11y and offline execution.

## Open decisions and constraints

Design schema, randomization fairness, security and compatibility with current Quiz widgets.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

# Evidence-Informed Flashcard Repetition Engine

**Status:** Proposed — not implemented by this document.
**Area:** learning

## Goal

Implement a transparent and testable retrieval scheduling algorithm.

## Intended scope

- Finish the existing flashcard UI and define a scientifically defensible, tunable spacing policy.
- Record confidence/correctness and schedule review intervals using evidence-informed parameters.
- Allow personalized timing and avoid presenting an arbitrary fixed 20-min/1h/4h/20h sequence as universal scientific truth.
- Provide offline reminders where platform permits, with opt-in notifications and recoverable state.

## Open decisions and constraints

Select algorithm, validate against learning evidence, and define missed review behavior.

**Implementation note:** Backlog only, not an approved new runtime contract or claim of functionality.

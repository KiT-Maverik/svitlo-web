# Evidence-Informed Flashcard Repetition Engine

**Status:** Proposed — not implemented by this document.
**Area:** learning

## Goal

Implement a transparent and testable retrieval scheduling algorithm.

## Intended scope

- Finish the existing flashcard UI and define a scientifically defensible, tunable spacing policy.
- Record confidence/correctness and schedule review intervals using evidence-informed parameters.
- **Provisional review checkpoints (personal working hypothesis):** immediately after studying the material, then approximately **20 minutes, 1 hour, 4 hours, and 20 hours** later. These are the user's experience-based candidates heard in an article, **not** verified scientifically optimal intervals or an approved scheduling algorithm.
- Evaluate these candidate intervals against research on retrieval practice and spaced repetition; compare adaptive alternatives and learner outcomes. Adjust/remove checkpoints if evidence or testing supports a different schedule; allow personalized timing.
- Provide offline reminders where platform permits, with opt-in notifications and recoverable state.

## Open decisions and constraints

Select an evidence-informed algorithm, explicitly validate the immediate/20m/1h/4h/20h candidate sequence, and define missed review behavior. Decide how repeated failures, varying difficulty and individual performance affect intervals.

**Implementation note:** Backlog only, not an approved new runtime contract or claim of functionality.

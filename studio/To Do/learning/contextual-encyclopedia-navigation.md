# Contextual Encyclopedia Navigation from Lessons

**Status:** Proposed — editorial/product review required; not implemented.
**Area:** learning

## Goal

Let a learner explore a relevant encyclopedia-style material — **«Що це?»**, **«Хто це?»**, **«Як це працює?»** — while learning a Skill, without unexpectedly losing the sequence or progress of the current Lesson or Program.

## Intended scope

- A Physics lesson about magnetic attraction may suggest **«Як працює маглев?»**, and a lesson about light may suggest **«Що таке лазер?»**. The destination is another reusable Lesson/resource in the same textbook, or a deliberately linked cross-subject resource where permitted.
- An **explicit, optional** “Дізнатися більше” / “Як це працює?” choice may open a related item while preserving the learner's current context; never silently replace the next lesson with an unrelated topic.
- Provide an obvious **«Повернутися до уроку»** action and restore the exact prior Lesson/Section position; reading an aside is **not** proof of completion or Skill mastery in the main learning path.
- A suggested detour may appear near a relevant concept, in an optional “Explore” area, or after lesson completion. Keep an ordinary **«Далі за програмою»** path visible so the learner cannot confuse a side trip with the required sequence.
- Distinguish **semantic content references** (this lesson is about lasers; that one explains a laser) from **curricular prerequisites and Program navigation rules**. A cross-link alone must not alter prerequisites, ordering, completion evidence, next-step recommendations, or Program Story State.
- Support deep links, back-button behavior, refresh recovery, keyboard/assistive navigation, all required locales (including RTL), and offline availability. If the related material is not downloaded, offer a clear non-blocking option instead of an inaccessible dead end.

## Open decisions for editorial and UX review

1. **Where does the link live?** Inline concept card, a related-material panel, end-of-lesson suggestions, or some combination? Which is least disruptive for learners aged 6–9?
2. **Which transition model?** Same-tab detour with return stack, side panel/modal preview, or a separate tab? How is context restored after refresh and repeated/nested detours?
3. **Who curates links?** Methodologist-approved relationships between existing Lessons/resources vs automatic suggestions based on Skill IDs? Do not infer a new runtime entity/API before approval.
4. **How does a Program handle detours?** Can it filter or decorate suggestions without rewriting a canonical Lesson? How does progress distinguish optional exploration from the scheduled next step?
5. **How is learning evaluated?** Does the destination run independently, keep its own progress and assessment, or serve as optional reference only? No automatic Skill evidence from navigation.
6. **What happens offline or cross-application?** Textbooks must remain independently extractable; linking must not require importing another app's private source. Plan friendly unavailability handling.

## Product recommendation for review

Start with a small, **optional related-content suggestion after a meaningful explanation or on lesson completion**, always retaining a distinct **continue on track** action and a reliable return path. Test whether it distracts young learners before introducing automatic branching. Do not lock a curriculum behind encyclopedia navigation.

**Implementation note:** Backlog only. No approved API, routing contract or content-schema change.

**Related:** [Lesson Completion](./lesson-finish-recap-actions.md); [Lesson Events](./lesson-events.md); [Program Runtime](./program-runtime.md); [System Boundaries](../../docs/architecture/system-boundaries.md); [Subject Proposition](../../Subject%20Proposition.md).

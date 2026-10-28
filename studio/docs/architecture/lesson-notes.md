# Lesson Notes — Unlocked Recall Cues

**Status:** approved product concept / **planned**. There is **no verified Note entity, unlock event/API, generated lesson study sheet or offline Notes-sync flow yet**. This document defines intended behavior and constraints, **not** a ready runtime data contract.

## Why Notes exist

Every Lesson should be able to **unlock small Notes during the learner's experience**. These Notes are **short, atomic memory anchors**: just enough wording, symbols, a key relation, a minimal example or a prompt to help the learner **recall essential material later**.

**A Note is neither a summary of the Lesson nor the original learning content.** It is not a duplicate paragraph, transcript, chapter excerpt or full explanation. Reading a Note should *cue retrieval* of what the learner experienced rather than retell that experience. Prefer a compact formulation such as “Multiplication = equal groups” over a paragraph describing the whole lesson. The exact length is content-dependent, but **maximal brevity with enough meaning** is the default.

## Intended learner workflow

1. During a lesson, the learner encounters a meaningful idea, concept, model or interaction at its proper pedagogical moment.
2. A **corresponding brief Note becomes available/unlocked** at the right point — for example, after a significant explanation or insight, potentially a meaningful learning action when the approved instructional flow warrants it.
3. The learner accumulates only those Notes that have been revealed/unlocked **for that learner**. **Unlocking is not evidence of Skill mastery or success in a Quiz.**
4. The platform assembles the **set of unlocked Notes into an ordered, compact lesson revision sheet** that learners can browse and use to recall material later, including offline.
5. As the learner continues, further Notes can be unlocked; the revision sheet is **derived from currently unlocked Notes**, not a separately edited second source of educational truth.

The brief note texts themselves are **authored, localized and reviewed in Git** with the Lesson; the individual learner's unlocked status lives in **learner state** in a local store and, later, an optional sync service. A generated personal revision view is computed from both, not manually maintained as a second authoring artifact.

## Meaning and semantics

- Notes should be **semantic and compact**, one essential idea per Note when feasible. Avoid arbitrary granularity, listicle noise and verbose paraphrases.
- A Note is suitable for **recognition and retrieval**; practice/flashcards/questions/scenes remain separate teaching and assessment instruments. Do not invent a mastery metric or assessment score for Notes.
- Each Note requires a stable identity, ownership by a Lesson, deliberate placement/unlock conditions, concise localized content, and deterministic relative ordering for the learner's compiled revision sheet. Exact IDs, schema, status/event names and export structure still require architectural design.
- The unlock trigger must be based on **an actual lesson event or explicit completed interaction** once that capability exists. **Do not mistake current `LessonState.sectionCompletion` for a finished Notes-unlock system** or invent an existing `note.unlocked` event.
- Notes should remain **Program-neutral**. A Program may eventually decorate the act of discovering one, but the factual note cannot depend on a mascot or quest.
- Content must support the project's full locale roster, RTL and accessible reading, as well as fully offline availability once downloaded.
- A learner may later be allowed to organize or annotate personal Notes, but such a feature is **separate** from these canonical, author-defined recall anchors; it must not overwrite the Git-authored source.

## Design integration and handoffs

- **Methodologist:** confirms which essential ideas truly merit durable recall and that the content is accurate.
- **Educational Screenwriter:** proposes concise Notes in the Lesson Script, **exactly where** each should appear, and what event or pedagogical milestone would unlock it. The notes may appear as a separate plan/spec, not a fake present-day code field.
- **Coding Agent / platform:** designs and implements the typed Note entity, locale resolution, event/unlock lifecycle, per-learner persistent state, offline availability and derived revision view **in a separate authorized implementation stage**.
- **Assessment Architect:** uses retrieval activities where meaningful, but **must not equate an unlocked Note with demonstrated competency**.

For every new Lesson Script, the Screenwriter should include an **editorial Notes plan**, even while the Notes runtime is unavailable. Until implemented, mark those entries **planned, not wired**; do not silently drop them merely because the current Lesson contract does not have `notes` fields.

## Example of desired style (illustrative, not a literal schema)

| Moment | Recall Note | Why it helps |
| --- | --- | --- |
| After understanding additive inverse operations | “Subtraction undoes addition.” | Triggers recall of a relation rather than recounting the demonstration |
| After a model of straight-line light travel | “In a uniform medium, light travels in straight lines.” | Prompts the learner to recall the conditions of the model |
| After comparing selected solar-system distances | “Model scales can differ; always check the scale.” | Reminds the learner of a limitation exposed by the simulation |

Do not automatically imply these Notes can be unlocked by the current Lesson implementation.

## Open engineering questions

- Exact Note ID ownership, type/builder, `*.data.ts` representation, source organization and localization.
- Which events/milestones unlock a Note, and whether the action must be repeatable/idempotent.
- How to handle Notes after Lesson revisions, migrations, content removal, locale switches and a reset/retry.
- How to keep the ordered revision sheet local/offline and optionally synchronize per-learner unlocked state across devices.
- Whether to support export/print or further learner annotations. None of these are already implemented.

**Related:** [Learning Experience Philosophy](./learning-experience-philosophy.md), [Git-First Content](./git-first-typed-content.md), [Offline](./offline-first-and-device-compatibility.md), [System Boundaries](./system-boundaries.md), [Long Chat Overture](../../Long%20Chat%20Overture.md).

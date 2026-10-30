# Lesson Script

**Entity category:** Screenwriter-owned editorial authoring specification for one Lesson.

The **Lesson Script** determines **how** learners encounter, explore, interact with and understand the approved subject matter. It translates an approved Methodologist Brief into an ordered, **vertical** sequence of [Sections](./section.md) and typed content blocks, including actual learner-facing explanations, interaction prompts, visual/audio direction, predicted feedback and accessibility/localization requirements.

A Script is **not** a fictional storyline, Program quest, a runtime Lesson configuration, a Methodologist Brief, a Question-bank implementation or generated media. See [Lesson](./lesson.md) and [Program](./program.md) for ownership boundaries.

## OWNERSHIP AND SOURCE

- **Owner:** Educational Screenwriter. Begin only from the intended Lesson's **approved**, factual `methodologist-brief.md`; do not revise the Methodologist's outcomes, target Skills or subject boundaries silently.
- **File:** `<PackageRoot>/Data/Lessons/<bucketNumber>/<lessonSlug>/script.md`. The surrounding Lesson directory already identifies the Lesson; avoid `lesson-script.md` as the authored output filename.
- **Status:** Draft until explicit editorial approval. Approved Script and individual Scene-spec approvals are separate from Methodologist, assessment and implementation approvals.
- **Hand-off:** Coding Agent implements code and resource assembly; Assessment Architect owns graded Question/Quiz validity, correct answers and mastery rules. Custom Scenes have individually reviewable Screenwriter specifications in `scenes/`, not a vague note to improvise.

## SCRIPT CONTRACT

1. Maintain the same explicit ordered sequence of Sections that the implemented Lesson should present. A Section has a pedagogical purpose (theory, practice, exploration, quiz, flashcards, coding, block coding, etc.) and a **real** existing typed implementation shape or a clearly labeled proposed capability.
2. A general Section lists each content block **top to bottom in one outer column**. Each block names its real `Resource_Config.blockType`, actual teaching content, learner action/feedback, locale/accessibility plan and renderer readiness. A custom Scene may contain its own internal multi-column or spatial arrangement; its position within the Section still counts as **one block**.
3. Use rich web affordances when genuinely educational: animation, diagrams, audio, video, simulations, drag/touch/keyboard interactions, feedback and learner-controlled pacing. Never reduce learning to purposeless click-through or unbroken Markdown. Clearly mark missing integration as a dependency.
4. A [Knowledge Checkpoint](./section.md#knowledge-checkpoint) can invite the learner to pause and reveal an explanation; it is **not** a scored Quiz or mastery evidence.
5. Explain accessibility, meaningful non-visual/non-audio alternatives, LTR/RTL, localization, offline and low-device equivalence. Provide substantive content and separate review-ready Scene specifications for bespoke interactions.
6. Leave Program plot, missions, mascots and rewards to the [Program](./program.md); an instructional sequence itself is **not** that plot.

The source of truth for implemented data structures and rendering remains the current TypeScript code, not this prose. See [Create Lesson Script Skill](../../skills/lesson-workflow/create-lesson-script.skill.md) for the workflow and exact deliverable template.

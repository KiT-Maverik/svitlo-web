# Lesson

**Entity category:** standalone, Program-neutral educational material.

A **Lesson** independently teaches **one or more approved Skills**. It must make sense without a Program, Curriculum, mascot, quest, reward system, external plot or special learner history. The Lesson owns the actual instructional material and its purposeful order of learning experiences; a Program can place it into a larger journey but does not own its pedagogical content.

## PEDAGOGICAL RESPONSIBILITIES

- Present accurate content through appropriate explanations, demonstrations, interactions, guided practice and reflection. No fixed Section count, fixed `theory → practice → quiz` recipe or one-Skill-per-Lesson rule.
- Link each Lesson's intended learning to the Methodologist's approved outcomes and Skill definitions; teaching, completing a Lesson, marking a checkpoint and demonstrating mastery are **different** concepts.
- A Lesson can have an **instructional sequence** and staged revelation. It has **no Program narrative** (characters, missions, external story, points/rewards or quest progression). See [Program](./program.md).
- Lesson content is assembled from ordered [Sections](./section.md) with typed resources. Its educational design is documented in the separate [Lesson Script](./lesson-script.md), authored by the Educational Screenwriter.

## EDITORIAL ARTIFACTS AND IMPLEMENTATION

Lesson files live under `<PackageRoot>/Data/Lessons/<bucketNumber>/<englishCamelCaseSlug>/`. The Lesson folder is stable once created; buckets have at most 100 Lesson directories each, without automatic relocation or compaction.

- `methodologist-brief.md`: approved *what/why/for whom*, prerequisite and Skill scope; an editorial-only source **not included in runtime configuration or client bundles**. Its `Target Skills` contains one direct relative Markdown link per Skill **to the intended canonical Skill `*.data.ts` path under `Data/skills/`**, with the full source filename (including extension) as the link label. New Briefs **target `<PackageRoot>/Data/skills/`** for Skill `*.data.ts` references even while the Code migration out of `src/` is pending. Such unmaterialized links must be labeled **planned/pending verification** in the editorial handoff, never described as currently resolving; do not link back into `src/`. Once migrated, verify the exact relative links to the real files.
- `script.md`: Screenwriter-owned *how to teach*, ordered Section/block plan, learner-facing content and interaction specifications; a **separate editorial document**, not the runtime config.
- `scenes/`: separate Scene specifications **only when needed**, later consumed by the Scene implementation workflow.
- Typed `*.data.ts` configuration and published resources are owned by implementation/build workflows, not by either editorial document.

**Observed contract:** [`Lesson_Config`](../../../shared/contracts/src/types/content/lesson.types.ts) identifies a Lesson with `id`, `slug`, `title`, `requireQuiz` and ordered `sections.content` IDs plus section navigation settings. The contract is **not a complete editorial Lesson definition**; code presence does not establish editorial approval. Do not infer that the folder slug is the runtime ID. Read the current renderer and catalog types before implementation.

Related: [Lesson Script](./lesson-script.md), [Section](./section.md), [Program](./program.md), [Skill](./skill.md).

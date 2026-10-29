# Lesson Editorial Document — Single Canonical Artifact

**Status:** approved editorial architecture for **new Lesson Brief authoring**; downstream migration is **not yet implemented**. This page does not define a new runtime entity or modify TypeScript `Lesson_Config`.

## DECISION

Each independent Lesson has **one canonical editorial Markdown document** (its sole Lesson-level specification), initially created by the Methodologist and extended by other authorized specialists. The physical home is `<PackageRoot>/docs/lessons/<lessonSlug>/<lessonSlug>.lesson.md`, with optional numbered storage buckets as defined by [Create Lesson Brief Skill](../../skills/create-lesson-brief.skill.md).

- **Methodologist** authors the `METHODOLOGIST BRIEF`: verified subject content, target Skills, prerequisites, learner profile, outcomes and constraints.
- **Educational Screenwriter** later contributes the Lesson's instructional script, Section/content plan and experiences **to the same Lesson document**, after Methodologist approval. This does not license the Screenwriter to invent or change Skills, subject facts or outcomes.
- **Assessment Architect and other specialist reviewers** may later contribute their own scoped reviews/requirements in the same Lesson document, only under separately approved workflows. A Gamification specialist is a *possible future role*, not an existing verified Skill or runtime feature.
- **Coding Agent** links verified Lesson implementation from the `Code` field. Documentation is not code and authoring approval is not an implementation status.

The Lesson document is **not** a Curriculum, Program or Skill definition. A Lesson is Program-neutral and can be referenced by multiple Curricula/Programs or none; physical folders and buckets carry no pedagogical classification. A Lesson may target multiple approved Skills.

## AUTHORITY, STATUS AND SAFE EDITING

- **Single Lesson source:** no parallel `learning-brief.md`, `lesson-script.md`, `lesson-definition.md`, or redundant Lesson README representing another authoritative version of the same Lesson. An existing legacy file must be explicitly migrated, not silently duplicated.
- **Role-owned sections:** specialists append or edit their own sections. Cross-role corrections must be requested from the owner/editor; existing approved content cannot be rewritten as a side effect of a later workflow.
- **Separate approvals:** `Methodologist status: Draft/Approved` governs only the Methodologist Brief. Screenwriter, assessment and implementation readiness are separate lifecycle concerns; no fabricated global `Approved` or `Implemented` status.
- **References:** `Code: [Not implemented](#)` is the initial Lesson implementation placeholder. Replace it only with an existing, validated relative link displaying the exact filename. Do not add a second `Definition` link; the Markdown document is the definition. Target Skill links point to the canonical Skills Taxonomy by **exact heading**, not `*.data.ts`, UUIDs or invented keys.
- **Specialized artifacts:** assets and independently specified Scenes may still live in their own files when they are *different entities/resources*. They must be referenced from the Lesson document and must not become another competing Lesson-level specification.
- **Move safety:** moving Lessons into numbered buckets requires repair/verification of all impacted paths and references. A slug or path is not the runtime Lesson ID.

## CURRENT MIGRATION BOUNDARY

[Create Lesson Brief Skill](../../skills/create-lesson-brief.skill.md) follows this new one-document rule **now**. By contrast, [Create Nextgen Lesson Skill](../../skills/create-nextgen-lesson.skill.md) currently requires a standalone `<lessonNameCamelCase>.lesson-script.md` and separate Scene specs. Those requirements **remain in its current contract until an explicit migration**. Do not claim the one-document downstream handoff already works or quietly create two authoritative Lesson documents.

**Future integration work:** migrate the Screenwriter Skill's deliverable/template, its source-link and approval semantics, existing Lesson Script references and any other downstream consumers to append their role-owned sections to the existing Lesson document. Keep Scene-specific specifications external when genuinely separate. Do this as a reviewed, dedicated change, preserving existing approved material.

# Create Lesson Brief Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) **in full** and apply its professional judgment, editorial escalation rules and role boundaries. This Skill is the task-specific workflow for designing the **methodological specification of one independent Lesson**. It does not run Create Curriculum and does not author the Lesson screenplay, Questions, Scene specifications, gamification, or code.

## PURPOSE AND ARTIFACT OWNERSHIP

Create or revise the **Methodologist Brief** inside the single canonical [Lesson Editorial Document](../docs/architecture/lesson-editorial-document.md). The Brief defines **what the learner should learn, why, for whom, under which prerequisites and constraints**. Later specialists can extend the **same Lesson document** in their own approved sections. The Methodologist must not create a second `learning-brief.md`, `lesson-definition.md`, separate Script, or other duplicate Lesson authority.

A Lesson is **autonomous and Program-neutral**. It can exist before any Curriculum, be reused in multiple Programs/Curricula, and teach one or several independently meaningful Skills. Its storage path, slug, Skills and potential Curriculum usages are separate concerns. No one-Skill-per-Lesson or one-Lesson-per-Skill quota.

Read [Svitlo Architecture & Product Principles](../docs/architecture/README.md), particularly [Learning Experience Philosophy](../docs/architecture/learning-experience-philosophy.md), [Internationalization & Inclusive Access](../docs/architecture/internationalization-and-accessibility.md), [Offline/Device Compatibility](../docs/architecture/offline-first-and-device-compatibility.md), and [Lesson Notes](../docs/architecture/lesson-notes.md). Follow actual textbook instructions, the canonical taxonomy, and [SkillDomain](../docs/entities/skill-domain.md), [SkillGroup](../docs/entities/skill-group.md), [Skill](../docs/entities/skill.md). The architecture expresses product intent, not proof of implemented runtime features.

## REQUIRED INPUTS AND STOP CONDITIONS

Do not author a Lesson Brief until these inputs are available and checked:

1. **Package root and Lesson scope:** the specific standalone textbook application root, a proposed or existing Lesson, and a meaningful topic/educational purpose. Never default to the monorepo root or Playground.
2. **Approved Skills Taxonomy:** read `<PackageRoot>/docs/skills/taxonomy.md` in full for the relevant Domains/Groups/Skills, including explanatory prose. Confirm editorial approval; `*.data.ts`, UUIDs and inherited Curriculum labels cannot replace the taxonomy.
3. **Target Skills:** one or more *existing*, exact canonical Skill headings (or unambiguous references that can be resolved to them). Verify that this one Lesson can meaningfully address the requested selection; overlapping or overly broad selections require editor review.
4. **Audience:** intended learners, approximate prior knowledge and language/literacy context, and relevant accessibility needs; do not automatically assume a school grade.
5. **Intent and constraints:** intended learning outcomes or instructional problem, content boundaries, required depth, known prerequisites, references and any mandatory standards or safety requirements. Surface missing **material** constraints instead of inventing them.

**Optional:** compatibility with a named Curriculum or Program, delivery modality, expected duration, media/technology restrictions, locale-specific contexts, or special revision goals. If compatibility is requested, actually read the named Curriculum and reconcile scope, learning depth and prerequisites **without making it the Lesson's owner**. If none is specified, do not manufacture a Curriculum or claim compatibility with all curricula. Curriculum is **never** a prerequisite for this Skill.

If approved Skills, essential audience or substantive intent are missing, or a Skill is ambiguously identified, **stop and request the smallest necessary editorial clarification**. Do not generate an authoritative-looking Brief from guesses. Do not treat a draft or missing taxonomy as approved.

## METHOD AND RESPONSIBILITY BOUNDARIES

1. **Inspect before authoring.** Resolve the textbook path, existing Lesson document (if any), taxonomy descriptions, relevant subject references, and actual Lesson implementation only if needed to validate the Code link. Locate and preserve any existing specialist contributions.
2. **Establish the pedagogical contract.** Describe the desired conceptual change, observable outcomes, prior knowledge, prerequisite gaps, depth appropriate to the audience, and why the selected Skills belong together. Distinguish teaching a Skill from assessing its mastery.
3. **Specify the subject matter.** Identify essential facts, concepts, mechanisms, relationships, terminology, valid examples or counterexamples, common misconceptions, and hard exclusions. Include enough accurate substance for the Educational Screenwriter to work without inventing facts or objectives; do not write a scene-by-scene script.
4. **Design the learning progression conceptually.** Identify conceptual dependencies and the necessary transition from known to new material. Suggest appropriate kinds of understanding and transfer, without prescribing Section count, UI widgets, concrete Questions, scoring, gamification or narrative.
5. **Check scope and independence.** One Lesson may target multiple Skills when they form a coherent learning objective; if it becomes an entire course, propose a split for editor approval rather than silently splitting, merging, adding or renaming Skills. No grade ceilings or instructional modes may be written back into the taxonomy.
6. **Honor cross-cutting constraints.** Specify localization-sensitive terms and examples, disability-aware alternatives the experience must enable, offline completeness and low-device pedagogical equivalence. Note factual uncertainty and sources. Do not invent runtime APIs, Note events or assessment guarantees.
7. **Escalate conflicts.** The Methodologist Persona's mandatory Skill-versus-Question and disciplinary ownership gates still apply. Report specific choices in the editor handoff and do not alter approved taxonomy identities or another specialist's approved section.
8. **Write the Methodologist section only.** Create one canonical document using the embedded template below, or carefully update its Methodologist section in place. Do not generate companion Lesson Brief/Definition documents or duplicate other specialists' sections.
9. **Audit and stop.** Validate taxonomy references, actual relative Markdown paths, unique slug, coherent scope, outcomes, prerequisite feasibility, factual sources, separation of roles, approval status and directory organization. Present the document for **explicit editor approval**; never run Create Nextgen Lesson or implementation automatically.

### Approval and revisions

The new document is a **Draft Methodologist Brief**, not a draft of the *implemented Lesson*. `Methodologist status: Draft` means *pending editorial review*, not approved. Only an explicit editor decision can change this to `Approved`; a later revision affecting approved outcomes, prerequisite claims, content boundaries or Target Skills requires renewed Methodologist/editor review. Status of the whole Lesson's implementation is **not** inferred from Methodologist approval. Keep open questions visible; no automatic per-Lesson historical Review files (the Persona history policy covers Taxonomy and Curriculum only).

## CANONICAL LESSON DOCUMENT TEMPLATE

The following is an **embedded authoring template**; replace all placeholders and remove inapplicable optional notes before delivery. Canonical editorial writing is in **English**; learner-facing content will be localized in its later authoring stage. Do not use a target-language translation as a replacement for the canonical pedagogical contract.

~~~md
# %LESSON_TITLE% — Lesson

Date: %YYYY-MM-DD%
Lesson slug: %UNIQUE_CAMEL_CASE_SLUG%
Methodologist status: Draft
Code: [Not implemented](#)
Skills Taxonomy: [Skills Taxonomy](%VERIFIED_RELATIVE_TAXONOMY_PATH%)
Program dependence: None

## METHODOLOGIST BRIEF

### Educational purpose

%What this Lesson is for and why the selected Skills form a coherent learning unit.%

### Target audience

%Learner profile, prior experience, literacy/language context and meaningful accessibility considerations. Do not assume a grade unless requested.%

### Prerequisites

- %Specific prior knowledge/competence or an explicitly acknowledged gap.%

### Target Skills

- **%EXACT_CANONICAL_SKILL_HEADING%** — [Skills Taxonomy](%VERIFIED_RELATIVE_TAXONOMY_LINK_AND_OPTIONAL_VERIFIED_ANCHOR%)

### Expected learning outcomes

- %Observable and audience-appropriate outcome; specify meaningful learning depth and boundaries without inventing mastery scores.%

### Essential subject matter

%Accurate concepts, terminology, relationships and subject-specific explanations necessary for the outcomes; use sufficient detail to prevent downstream improvisation.%

### Conceptual progression and dependencies

%What needs to be understood first, then next, and which prerequisites require attention. This is not a Section storyboard.%

### Misconceptions, examples and boundaries

%Common confusions, revealing examples/non-examples, simplifications and explicit exclusions.%

### Localization, accessibility and offline intent

%Learner-language needs, culturally variable assumptions, inclusive modes, complete offline learning and equivalent low-device access. Do not invent runtime capabilities.%

### Sources and factual verification

- %Reliable source and what it supports; identify unresolved/contested claims.%

### Curriculum / Program compatibility

%Optional verified compatibility requirements and deviations, or "Not specified". This does not assign ownership of this Lesson.%

### Open editorial decisions

- %Specific unresolved question, owner and consequence; use "None" only after checking.%

### Methodologist handoff

%Readiness summary, scope decisions, unresolved blockers, and what the Screenwriter may design after explicit approval.%
~~~

**Metadata rules:** `Code` is the **Lesson implementation** link, not a Skill Code link. Leave exactly `Code: [Not implemented](#)` unless an actual Lesson implementation is verified; if verified, use a working relative Markdown link labeled with the exact implementation filename (including suffix and extension). This placeholder is deliberate, not a broken-link error. Do **not** create an independent `Definition` link: the canonical Lesson document itself contains the editorial definition. Do not fabricate a Lesson runtime UUID, registry, runtime state or approval date. The Lesson slug is an editorial/file locator; do not pretend it is a verified runtime ID.

**Target Skills rules:** visible names **must match** canonical taxonomy headings, not translated guesses, `math.*` keys, UUIDs or implementation filename labels. Verify each relative taxonomy link from the *actual destination document*, including after moving the document to a numbered storage directory. When an anchor cannot be verified, link to the canonical taxonomy file without an invented anchor.

## FILE PLACEMENT AND 100-LESSON BUCKET RULE

The single canonical Lesson document is stored at:

~~~text
<PackageRoot>/docs/lessons/<lessonSlug>/<lessonSlug>.lesson.md
~~~

Use a unique, semantic **English camelCase** `lessonSlug` across the *entire textbook*, including numbered directories. Each Lesson gets its own directory for potential assets; do not derive its path from Curriculum, Module, Chapter, Domain, Group or grade.

**Bucket policy (counts Lesson directories, not files):**

- New Lessons always start **directly** under `docs/lessons/`. Numbered directories `1/`, `2/`, etc. are technical archival buckets and do not change what a Lesson means.
- Keep **at most 100 direct Lesson directories** in the root. On creating a 101st, place the **previous 100** complete Lesson directories into the next unused positive-integer bucket (`1/`, then `2/`, ...); leave the newly created Lesson in the root. Existing numbered buckets are not rebalanced when Lessons are removed.
- Count actual Lesson directories, not their Markdown files or unrelated root files. Do not create empty numbered buckets, renumber existing buckets, or treat numeric sorting as pedagogically meaningful.
- Before any move, inspect all inbound and outbound Markdown references, real code references and assets. Relocate the directories and **repair and verify every affected relative link**; stop and report a blocker if references cannot be repaired safely. Preserve stable runtime IDs if an implementation exists. Do not create duplicate Lesson copies to avoid migration work.
- Check for duplicate slugs across root and all buckets. If simultaneous writers compete for a boundary/bucket or a move conflicts with current main, re-read the tree and reconcile rather than overwriting another Lesson.

Storage buckets are not Programs, and a Lesson remains reusable from any Curriculum.

## DELIVERABLES AND ACCEPTANCE

**Output exactly one authored/updated canonical Lesson document** in the selected textbook, with its Methodologist Brief, explicit `Draft` status and Code link/placeholder. Existing Screenwriter, Assessment, specialist or implementation contributions in that document must be left untouched unless their owner/editor explicitly authorizes a change.

The accompanying editor-facing handoff (chat/PR, not another mandatory Lesson file) must report:

- The canonical document path, Lesson slug, and whether it was created or updated.
- Verified Target Skills, pedagogical scope, outcomes and important prerequisite decisions.
- Optional Curriculum/Program compatibility checks performed, or explicitly not requested.
- Sources, open editorial issues, status pending approval, and what the Screenwriter must receive.
- Verified Code link or `[Not implemented](#)`, and any link repairs/bucket migrations.

**Acceptance gates:** actual approved taxonomy read; no invented Skills/IDs; audience and intent supported by inputs; observable outcomes and meaningful prerequisite reasoning; substantive subject content and citations; no unauthorized screenplay, assessment, gamification or code; no fabricated support for localization/offline tooling; one canonical Lesson document; all non-placeholder links verified; and no claim of editor approval until recorded.

**Handoff:** Once the Methodologist Brief is explicitly approved, [Create Nextgen Lesson](./create-nextgen-lesson.skill.md) may consume it. Its *current* document-output convention still creates a separate Lesson Script: that workflow must be reconciled with the [single-document architecture](../docs/architecture/lesson-editorial-document.md) **before** claiming that later specialist authoring is unified. This Skill alone does not change the Screenwriter's instructions or run them.

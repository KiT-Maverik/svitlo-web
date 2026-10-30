# Create Lesson Brief Skill

**Mandatory first action:** Read [Methodologist Persona](../../personas/methodist.persona.md) **in full** and apply its professional judgment, editorial escalation rules and role boundaries. This Skill is the task-specific workflow for designing the **methodological specification of one independent Lesson**. It does not run Create Curriculum and does not author the Lesson screenplay, Questions, Scene specifications, gamification, or code.

## PURPOSE AND ARTIFACT OWNERSHIP

Create or revise an independent **Methodologist Brief** beside the files of one Lesson, following [Lesson Editorial Artifacts](../../docs/architecture/lesson-editorial-document.md). The Brief defines **what the learner should learn, why, for whom, under which prerequisites and constraints**. It is an **editorial-only Markdown file**, not Lesson runtime configuration or content to serialize into a client bundle. The Educational Screenwriter will author a **separate Lesson Script** in its own workflow. Never edit or create a Script with this Skill.

A Lesson is **autonomous and Program-neutral**. It can exist before any Curriculum, be reused in multiple Programs/Curricula, and teach one or several independently meaningful Skills. Its storage path, slug, Skills and potential Curriculum usages are separate concerns. No one-Skill-per-Lesson or one-Lesson-per-Skill quota.

Read [Svitlo Architecture & Product Principles](../../docs/architecture/README.md), particularly [Learning Experience Philosophy](../../docs/architecture/learning-experience-philosophy.md), [Internationalization & Inclusive Access](../../docs/architecture/internationalization-and-accessibility.md), [Offline/Device Compatibility](../../docs/architecture/offline-first-and-device-compatibility.md), and [Lesson Notes](../../docs/architecture/lesson-notes.md). Follow actual textbook instructions, the canonical taxonomy, and [SkillDomain](../../docs/entities/skill-domain.md), [SkillGroup](../../docs/entities/skill-group.md), [Skill](../../docs/entities/skill.md). The architecture expresses product intent, not proof of implemented runtime features.

## REQUIRED INPUTS AND STOP CONDITIONS

Do not author a Lesson Brief until these inputs are available and checked:

1. **Package root and Lesson scope:** the specific standalone textbook application root, a proposed or existing Lesson, and a meaningful topic/educational purpose. Never default to the monorepo root or Playground.
2. **Approved Skills Taxonomy:** read `<PackageRoot>/docs/generated/skills/taxonomy.en.md` for relevant Domains, Groups, Skills and English methodological descriptions. **If absent**, run `node scripts/generate-skills-taxonomy.mjs --package learningApps/<textbook> --locale en` from the **monorepo root**, substituting the actual package path; then read the result. The generated document is a read-only view of `*.data.ts` Code, **not** a separate canonical authority or proof of editorial approval. During staged migration, additionally consult approved but not-yet-promoted entries in `<PackageRoot>/docs/skills/taxonomy.md`, if present; this staging file can disappear after complete migration. If generation fails, a relevant entry is unavailable, or approval cannot be verified, **stop and report the blocker**, rather than guessing or treating partial output as complete.
3. **Target Skills:** identify one or more **approved, independently meaningful Skills** and specify their future canonical `*.data.ts` sources under **`<PackageRoot>/Data/skills/` (outside `src/`)**. Record one Markdown link per Skill, labeled with its complete `.data.ts` filename; do not use Skill titles, UUIDs, generic link labels, or old `src/data/skillsTaxonomy/` paths. Verify pedagogical Skill identity against approved taxonomy. The new `Data/skills/` layout is a **prospective authoring contract**: files may still be in the old location during migration. Do not force links back into `src/` because the new target files are not yet present; mark unresolved destination filenames or subfolders as migration blockers rather than inventing them.
4. **Audience:** intended learners, approximate prior knowledge and language/literacy context, and relevant accessibility needs; do not automatically assume a school grade.
5. **Intent and constraints:** intended learning outcomes or instructional problem, content boundaries, required depth, known prerequisites, references and any mandatory standards or safety requirements. Surface missing **material** constraints instead of inventing them.

**Optional:** compatibility with a named Curriculum or Program, delivery modality, expected duration, media/technology restrictions, locale-specific contexts, or special revision goals. If compatibility is requested, actually read the named Curriculum and reconcile scope, learning depth and prerequisites **without making it the Lesson's owner**. If none is specified, do not manufacture a Curriculum or claim compatibility with all curricula. Curriculum is **never** a prerequisite for this Skill.

If approved Skills, essential audience or substantive intent are missing, or a Skill is ambiguously identified, **stop and request the smallest necessary editorial clarification**. Do not generate an authoritative-looking Brief from guesses. Do not treat a draft or missing taxonomy as approved.

## METHOD AND RESPONSIBILITY BOUNDARIES

1. **Inspect before authoring.** Resolve the textbook path, existing Lesson directory/Methodologist Brief (if any), generated taxonomy descriptions, approved unpromoted staging entries when applicable, relevant references and actual implementation only if needed to validate the Code link. Preserve all existing unrelated specialist files.
2. **Establish the pedagogical contract.** Describe the desired conceptual change, observable outcomes, prior knowledge, prerequisite gaps, depth appropriate to the audience, and why the selected Skills belong together. Distinguish teaching a Skill from assessing its mastery.
3. **Specify the subject matter.** Identify essential facts, concepts, mechanisms, relationships, terminology, valid examples or counterexamples, common misconceptions, and hard exclusions. Include enough accurate substance for the Educational Screenwriter to work without inventing facts or objectives; do not write a scene-by-scene script.
4. **Design the learning progression conceptually.** Identify conceptual dependencies and the necessary transition from known to new material. Suggest appropriate kinds of understanding and transfer, without prescribing Section count, UI widgets, concrete Questions, scoring, gamification or narrative.
5. **Check scope and independence.** One Lesson may target multiple Skills when they form a coherent learning objective; if it becomes an entire course, propose a split for editor approval rather than silently splitting, merging, adding or renaming Skills. No grade ceilings or instructional modes may be written back into the taxonomy.
6. **Honor cross-cutting constraints.** Specify localization-sensitive terms and examples, disability-aware alternatives the experience must enable, offline completeness and low-device pedagogical equivalence. Note factual uncertainty and sources. Do not invent runtime APIs, Note events or assessment guarantees.
7. **Escalate conflicts.** The Methodologist Persona's mandatory Skill-versus-Question and disciplinary ownership gates still apply. Report specific choices in the editor handoff and do not alter approved taxonomy identities or another specialist's approved section.
8. **Write only the standalone Methodologist Brief.** Create `methodologist-brief.md` using the template below, or update that exact existing file in place. Never insert Methodologist content into the Lesson config, Script, runtime assets, or another role's document. Do not generate duplicate Briefs.
9. **Audit and stop.** Validate approved taxonomy references, real relative links, unique slug, stable bucket placement, coherent scope, outcomes, prerequisites, sources, role separation and status. Present the Brief for **explicit editor approval**; never run Create Nextgen Lesson or implementation automatically.

### Approval and revisions

The new document is a **Draft Methodologist Brief**, not a draft of the *implemented Lesson*. `Methodologist status: Draft` means *pending editorial review*, not approved. Only an explicit editor decision can change this to `Approved`; a later revision affecting approved outcomes, prerequisite claims, content boundaries or Target Skills requires renewed Methodologist/editor review. Status of the whole Lesson's implementation is **not** inferred from Methodologist approval. Keep open questions visible; no automatic per-Lesson historical Review files (the Persona history policy covers Taxonomy and Curriculum only).

## METHODOLOGIST BRIEF TEMPLATE

The following is an **embedded authoring template**; replace all placeholders and remove inapplicable optional notes before delivery. Canonical editorial writing is in **English**; learner-facing content will be localized in its later authoring stage. Do not use a target-language translation as a replacement for the canonical pedagogical contract.

~~~md
# %LESSON_TITLE% — Methodologist Brief

Date: %YYYY-MM-DD%
Lesson slug: %UNIQUE_CAMEL_CASE_SLUG%
Methodologist status: Draft
Code: [Not implemented](#)
Program dependence: None

## Educational purpose

%What this Lesson is for and why the selected Skills form a coherent learning unit.%

## Target audience

%Learner profile, prior experience, literacy/language context and meaningful accessibility considerations. Do not assume a grade unless requested.%

## Prerequisites

- %Specific prior knowledge/competence or an explicitly acknowledged gap.%

## Target Skills

- [%EXACT_SKILL_SOURCE_FILENAME_WITH_EXTENSION%](%VERIFIED_RELATIVE_PATH_TO_EXISTING_SKILL_DATA_TS%)

## Expected learning outcomes

- %Observable and audience-appropriate outcome; specify meaningful learning depth and boundaries without inventing mastery scores.%

## Essential subject matter

%Accurate concepts, terminology, relationships and subject-specific explanations necessary for the outcomes; use sufficient detail to prevent downstream improvisation.%

## Conceptual progression and dependencies

%What needs to be understood first, then next, and which prerequisites require attention. This is not a Section storyboard.%

## Misconceptions, examples and boundaries

%Common confusions, revealing examples/non-examples, simplifications and explicit exclusions.%

## Localization, accessibility and offline intent

%Learner-language needs, culturally variable assumptions, inclusive modes, complete offline learning and equivalent low-device access. Do not invent runtime capabilities.%

## Sources and factual verification

- %Reliable source and what it supports; identify unresolved/contested claims.%

## Curriculum / Program compatibility

%Optional verified compatibility requirements and deviations, or "Not specified". This does not assign ownership of this Lesson.%

## Open editorial decisions

- %Specific unresolved question, owner and consequence; use "None" only after checking.%

## Methodologist handoff

%Readiness summary, scope decisions, unresolved blockers, and what the Screenwriter may design after explicit approval.%
~~~

**Metadata rules:** `Code` references the **Lesson implementation**, not a Skill Code link and not a directive to embed Methodologist prose in runtime configuration. Leave exactly `Code: [Not implemented](#)` unless a real Lesson implementation has been verified, in which case use its actual relative Markdown link and exact filename. Do not fabricate a runtime UUID, registry, approval date or implementation status. The Lesson slug is a file locator, not a verified runtime ID.

**Target Skills rules:** Write a simple Markdown list with **one direct source-file link per approved Skill**, formatted exactly as `- [completeFilename.data.ts](relative/path/to/completeFilename.data.ts)`. The **link label must equal the target file's full basename**, including `.data.ts`; do not add bold Skill headings, friendly names, `Canonical Skill source` labels, UUIDs, `index.data.ts` aggregators, `*.ids.ts` dictionaries, generated taxonomy Markdown, or placeholder `#` links. Link directly to the `*.data.ts` file defining that **Skill**, not a Group/Domain.

The **canonical Target Skills destination is `<PackageRoot>/Data/skills/`**, a static authoring-data tree at the textbook application root, independent of `src/`. For a Brief in `learningApps/math/Data/Lessons/1/understandingNumbers/`, an **illustrative future** Skill location `learningApps/math/Data/skills/arithmetic/addition/skills/addMeaning.data.ts` would be linked as:

~~~md
- [addMeaning.data.ts](../../../skills/arithmetic/addition/skills/addMeaning.data.ts)
~~~

The intermediate folders `arithmetic/addition/skills/` are an **example only**; discover or establish the final real nesting as part of the Skills migration, rather than imposing that illustrative hierarchy. Compute `../../../skills/` from the actual numbered Lesson directory and append the approved future Skill-relative path. **Do not point any new Brief to `src/data/skillsTaxonomy/`**. Check that the Markdown label equals the exact `.data.ts` basename and the path is normalized within the target textbook's `Data/skills/` tree. Once migration has created these files, validate the links actually resolve. **Before migration, explicitly report links as planned/unresolved, not verified existing files**; do not treat their temporary absence as a reason to switch to `src/`, but do not claim the source files exist either. If the future source filename/nesting is genuinely unknown, raise an explicit migration decision rather than fabricate it. Generated taxonomy Markdown remains a read-only discovery aid, not a Target Skills link destination.

## FILE PLACEMENT AND STABLE 100-LESSON BUCKET RULE

The independent Methodologist Brief is stored at:

~~~text
<PackageRoot>/Data/Lessons/<bucketNumber>/<lessonSlug>/methodologist-brief.md
~~~

Example: `learningApps/math/Data/Lessons/1/understandingNumbers/methodologist-brief.md`.

- Resolve the actual standalone textbook root; do not use the monorepo root or Playground by default. When creating the first Lesson, create `Data/`, `Data/Lessons/` and `1/` if absent. Preserve the exact capitalization `Data/Lessons`.
- Choose a unique, semantic **English camelCase** `lessonSlug` across every bucket in the textbook. Do not derive paths from grades, Curriculum, Modules, Chapters, Domains or Groups.
- Buckets are numbered `1`, `2`, ...; count **Lesson directories**, not files. Put each new Lesson into the **highest-numbered existing bucket** until it holds **100** Lesson directories. When full, create the next bucket and place new Lessons there. No separate counter or registry is required.
- **Never automatically move, rename, rebalance, renumber or compact existing Lesson directories.** Deletions may leave gaps. Do not fill older buckets merely to remove those gaps. Buckets are technical groupings, not Lesson sequence numbers or runtime IDs.
- For revisions, find the existing Lesson across all numbered buckets and edit its Brief **in place**, retaining its path and slug. Before creation, check for duplicate slugs across all buckets; re-read the tree if concurrent writers may have changed the last bucket.
- This Skill does **not** create or modify a Lesson Script, runtime Lesson configuration, assets or Scene specifications. The Brief stays adjacent to them but is editorial-only and **must not be embedded in published Lesson config or client resources**.

Lessons remain Program-neutral and can be reused from multiple Curricula.

## DELIVERABLES AND ACCEPTANCE

**Output exactly one authored/updated `methodologist-brief.md`** in the selected Lesson's stable numbered directory, with explicit `Draft` status and a verified Lesson Code link or the specified placeholder. Do not write companion Lesson Briefs, Lesson Scripts, runtime configs, or duplicate methodical content. Leave existing specialist and implementation artifacts untouched.

The accompanying editor-facing handoff (chat/PR, not a second mandatory file) reports:
- The actual Brief path, Lesson slug, numbered bucket, and create/update operation.
- Target Skills listed as direct relative links targeting the future `Data/skills/` tree and labeled with exact `.data.ts` filenames; note any references awaiting Skills migration, plus learning outcomes, scope and prerequisite decisions.
- Optional Curriculum/Program compatibility checks, or that none was requested.
- Factual sources, open editorial questions, approval status and the handoff requirements for the Screenwriter.
- Verified Code link or `[Not implemented](#)`, and any generation or taxonomy blockers.

**Acceptance gates:** genuinely approved Skill definitions read; every Target Skill has a relative `*.data.ts` link into `Data/skills/` with an exact source-filename label; every existing destination is verified and every not-yet-migrated destination is explicitly marked pending, never falsely reported as existing; no links back into `src/`; no invented Skills/IDs; audience and instructional intent supported; observable outcomes and prerequisites; substantive subject content and citations; no unauthorized screenplay, assessment, gamification, code or client serialization; one separate Methodologist Brief; existing links verified and future `Data/skills/` targets structurally checked and disclosed as migration-pending; no existing Lesson directories relocated; and no approval claimed without an editor decision.

**Handoff:** Once explicitly approved, the separate Brief can be consumed by [Create Nextgen Lesson](./create-nextgen-lesson.skill.md). Its existing Script path convention remains **unchanged for now**; a dedicated later update must reconcile that workflow with these directories. Never automatically launch it.

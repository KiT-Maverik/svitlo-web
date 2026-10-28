# Create Curriculum Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full and adopt its professional responsibilities, judgment, and role boundaries **before** planning or generating content. Do not assume the persona is automatically loaded.

**Purpose:** Create or review a structured Curriculum for **any discipline, textbook, course, learning audience, or educational context**, using an editorial briefing and existing Skills Taxonomy. This Skill does not author detailed Lesson Learning Briefs, storyboards, assessments, or code.

## CROSS-CUTTING PRODUCT INTENT

Read the [Learning Experience Philosophy](../docs/architecture/learning-experience-philosophy.md), [Internationalization & Inclusive Access](../docs/architecture/internationalization-and-accessibility.md) and [Offline/Device Compatibility](../docs/architecture/offline-first-and-device-compatibility.md) when selecting outcomes and learning progressions. The Curriculum is a pedagogical plan, **not a pledge that all these runtime capabilities are complete**; it should preserve accessible, internationally applicable and offline-capable learning intent. The [Lesson Notes mechanism](../docs/architecture/lesson-notes.md) is planned and belongs to detailed Lesson authoring, not as fabricated Curriculum runtime fields.

## ENTITY DEFINITIONS — REQUIRED READING

Before inspecting the taxonomy, read [SkillDomain](../docs/entities/skill-domain.md), [SkillGroup](../docs/entities/skill-group.md), and [Skill](../docs/entities/skill.md). These documents own the semantics and boundaries of the referenced entities; this Curriculum Skill owns their pedagogical sequencing and use.

## NON-NEGOTIABLE START CONDITIONS

**Do not begin drafting a Curriculum until both conditions are satisfied:**

1. **Editorial briefing received.** Identify the target package root, textbook/course/program and requested scope, audience, entry level, outcomes, and constraints.
2. **Taxonomy available.** Read `<PackageRoot>/docs/skills/taxonomy.md` and inspect the actual Markdown **Definition** linked for every relevant SkillDomain, SkillGroup, and Skill before mapping outcomes. A name, Code link, or UUID alone does not replace a Definition.

If a required input is absent or taxonomy files cannot be inspected, **stop Curriculum generation**, describe what is missing, and request the smallest necessary briefing or access. Do not infer the audience, invent a textbook scope, or manufacture Skills to keep writing. Existing Curriculum or Lesson files can inform the briefing but cannot substitute for the Skills Taxonomy.

### Editorial briefing — required fields

- **Package root:** root of the **specific standalone textbook application** being authored (for example, `<MonorepoRoot>/learningApps/<textbook>/`). The app directory is the package root; the monorepo root, its root-level `backend/`, and shared libraries are not. Use the actual app path from the repository/briefing rather than assuming a fixed monorepo layout.
- **Learning resource:** title or working title of the textbook/course/learning program, discipline or interdisciplinary theme, and requested scope (whole resource, level, module, or lesson).
- **Audience:** learner category and approximate age or professional stage when relevant; prior knowledge, literacy and language proficiency; learning context and meaningful accessibility needs. School grades are optional, not universal.
- **Intent:** desired educational outcomes, depth, boundaries, mandatory source materials, and whether alignment with a specified local standard or accreditation is required.
- **Taxonomy:** the canonical `<PackageRoot>/docs/skills/taxonomy.md`, plus the relevant Definition documents linked from it. Code links are optional for editorial planning. If this file or required Definitions are inaccessible, stop rather than guessing their location.

Clarify optional constraints when they matter: language(s) of output, locale/cultural setting, delivery conditions, available time, modality, assessment goals, and existing resources. Do not force a country, age range, grade, timetable, or instructional duration onto a brief that does not require one. If a target-language preference is supplied, write the generated educational material in that language even though this instruction and its template are in English.

## LOCALE- AND REGION-DEPENDENT LESSON OPTIONS — PROGRAM DESIGN REQUIREMENT

**Editorial decision (2026-10-28):** A Program may present **optional regional variants of Lessons** when the subject requires locally relevant examples, for instance recognizing familiar animals or plants and interpreting the local ecosystem. This changes **which Lessons a Program offers or recommends**, not the canonical underlying biological Skills. One Skill such as «Розпізнавати поширених місцевих тварин» can be taught with different species in Ukraine, Israel or the Americas.

**Do not equate UI language/locale with learner residence, citizenship or study region.** A `uk-UA` interface may be used by a learner in Canada; `en-US` does not prove residence in the United States. Locale may inform a **transparent initial recommendation**, but the Program must provide an explicit **region/learning-context preference**, editable by the learner or teacher. The system may either (a) show a default plus alternatives, or (b) ask which local region the learner wants to study. Always offer a broadly usable/default lesson if a regional variant is unavailable; never omit core outcomes or render a course impossible to finish because of locale. For younger learners, teacher/guardian choice may be more appropriate.

**Authoring and editorial handoff:** In the Curriculum's regional-variant notes, specify: relevant Skill(s), the globally reusable **base learning outcome**, stable common Lesson (if any), **optional regional Lesson alternatives**, their applicability/selection hints, fallback when none matches, whether the choice is automatic suggestion vs explicit user choice, and how completion maps to the **same Skill ID**. Avoid inventing new Skills for each country, duplicating whole textbooks, hardcoding countries into core ability labels or assuming every locale requires a new Lesson.

**Localization is a separate axis.** Every authored Lesson variant must still receive the full set of required translations and accessible text as specified by the platform's [internationalization rules](../docs/architecture/internationalization-and-accessibility.md). A regional option is **not an exemption from translation**, and the language of a Lesson does not determine what local fauna is pedagogically relevant. Region detection, automatic selection, persistent preferences, variant exclusivity, substitution, analytics and progress are **proposed Program-runtime capabilities** until the actual code contract is verified; do not fabricate fields or claim they work already.

## SOURCE OF TRUTH: SKILLS TAXONOMY

- **Canonical inventory:** `<PackageRoot>/docs/skills/taxonomy.md`, as defined by [Create Skills Taxonomy Skill](./create-skills-taxonomy.skill.md). Read this exact file from the selected package, then follow the `Definition` links for the relevant Domains, Groups, and Skills. Do not infer an alternative path or use Code as a substitute for an editorial Definition.
- Every taxonomy entry has separate `Definition` and `Code` links. Curriculum decisions must use approved Markdown Definitions; missing Code does not block editorial planning. Preserve traceability without copying technical IDs or treating Code as the semantic source.
- **Check every referenced file exists** and refers to the intended entity. Resolve Markdown links relative to the *generated Curriculum or brief file*, **never** relative to this instruction file.
- A Definition file establishes an inspectable editorial artifact, **not necessarily editorial approval, runtime registration, or learner mastery**. Respect its Draft/Approved status when applicable; unresolved Drafts are editorial blockers for final competency mapping.
- Prefer a **specific Skill** as a learning target. Link to a SkillGroup or SkillDomain only for genuinely broad context or prerequisites, and make the intended breadth explicit.
- The taxonomy is a catalog, **not** the curriculum. Derive prerequisites and progression from instructional reasoning and the audience's needs, not from folder order.
- Reuse relevant existing Skills. If no adequate Skill exists, identify a **taxonomy gap for editorial review**; do not invent a definition, a link, or an assertion of completeness. Do not silently modify the taxonomy.
- The same Skill may be taught across multiple lessons and a lesson may address several Skills. Note partial coverage where the full Skill is broader than the lesson.

## OPERATING PROTOCOL

### Stage 1 — Curriculum design

1. **Read the brief and canonical taxonomy.** Open `<PackageRoot>/docs/skills/taxonomy.md`, follow the relevant Definition links, and confirm audience, scope, outcomes, prior learning, and subject references.
2. **Define observable outcomes.** State what learners should be able to do, distinguish essential competencies from optional enrichment, and adjust depth to the audience. Do not confuse topic coverage with demonstrated capability.
3. **Build the learning progression.** Sequence modules and lessons according to conceptual dependencies, cognitive load, worked examples, transfer, retrieval, and increasing independence. Do not mirror the taxonomy tree mechanically; do not force one Skill per lesson.
4. **Map outcomes to the canonical Skills.** Cite existing files with working relative Markdown links. Specify meaningful prerequisites, including plain-language knowledge or existing Skill/SkillGroup/SkillDomain references. Note missing coverage separately.
5. **Author the Curriculum with the embedded template below.** Its structure is binding for Curriculum documents; replace placeholders with context-specific content. Create no redundant metadata, copied IDs, fixed number of modules, or curriculum details unsupported by the brief.
6. **Audit before handoff.** Verify subject accuracy, progression, alignment with intended outcomes, links and names, prerequisite feasibility, content boundaries, locale-specific assumptions, **regional lesson-variant selection and fallback where relevant**, and template completeness. Flag unresolved issues explicitly.
7. **Stop for review.** Deliver the Curriculum and an economical summary of decisions and open issues. Do **not** automatically proceed to detailed lessons, scripts, questions, or implementation.

**Handoff:** After editorial approval, a different task-specific Skill may produce detailed Lesson Learning Briefs. That work is **outside this Skill** and must not start automatically.

## QUALITY AND ACCEPTANCE GATES

A Curriculum is ready for editorial review only when:

- The briefing and canonical `<PackageRoot>/docs/skills/taxonomy.md` are actually read, along with relevant approved Definition documents.
- The plan covers requested outcomes without invented or unverifiable competencies.
- Every Skill reference has a real, correctly resolved **Definition** link, with the entity's actual name; Code is shown separately if referenced and may remain `[Not implemented](#)`.
- The order is pedagogically defensible, and required prior learning is available or explicitly identified as a gap.
- Outcomes are observable, specific, appropriate for the audience, and consistent across the Curriculum, modules, and lessons.
- Subject claims, examples, and calculations are accurate; uncertain or contested material is identified for review.
- Locale, linguistic, cultural, accessibility, and standards assumptions are explicit rather than silently universalized.
- Where local examples matter, a Program's optional regional Lesson variants specify learner/teacher choice, a transparent default, and mapping to the **same canonical Skill IDs** without conflating locale and geography; unimplemented Program runtime remains a declared dependency.
- Missing information, taxonomy gaps, and unresolved educational choices are reported **separately** instead of obscured by plausible prose.
- The Curriculum remains a pedagogical specification, not an implementation plan.

Use compact, structured Markdown. English is the working language of this instruction and template; the generated curriculum's language follows the editorial brief. Keep file references clickable in final artifacts and preserve the embedded template's section structure.

## CURRICULUM TEMPLATE

Use the following template **as written**, replacing placeholders with content appropriate to the brief. Its Markdown file paths are relative to the **generated Curriculum file**, not this Skill. This embedded template is canonical; no separate `curriculum-template.md` is required.

**Prerequisites authoring guidance (not part of generated Curriculum):**
Allowed types of records:
- Plain text: %TEXT_PREREQUISITE%
- Skill: **%SKILL_NAME%** — Definition: [%SKILL_NAME%](../../skills/%DOMAIN%/%GROUP%/skills/%SKILL%.skill.md) · Code: [Not implemented](#)
- Direct Domain Skill: **%DIRECT_SKILL_NAME%** — Definition: [%DIRECT_SKILL_NAME%](../../skills/%DOMAIN%/skills/%DIRECT_SKILL%.skill.md) · Code: [Not implemented](#)
- SkillGroup: **%SKILL_GROUP_NAME%** — Definition: [%SKILL_GROUP_NAME%](../../skills/%DOMAIN%/%GROUP%/%GROUP%.skill-group.md) · Code: [Not implemented](#)
- SkillDomain: **%SKILL_DOMAIN_NAME%** — Definition: [%SKILL_DOMAIN_NAME%](../../skills/%DOMAIN%/%DOMAIN%.skill-domain.md) · Code: [Not implemented](#)

Choose only applicable record types and mix them when needed. Direct-Skill example paths are **alternatives**, not automatically required entries; every path must be replaced by a real verified link.
Replace example paths with verified, existing relative Definition paths; they are not literal mandated filenames.
Update the separate Code link only when that specific runtime file actually exists; otherwise keep [Not implemented](#).
Do not duplicate IDs or UUIDs.
A SkillGroup or SkillDomain prerequisite means general familiarity, not mastery of every nested Skill.

**Never include this authoring guidance or template notes in the produced Curriculum document.**

```md
# %NAME%

Date: %CURRENT_DATE%

%Program description in a form of a detailed reasonably long text.%

Skills Taxonomy: [Skills Taxonomy](../../skills/taxonomy.md)

## TARGET AUDIENCE

Ages: %AGE_RANGE%
%Audience description in a form of a detailed reasonably long text.%

## PREREQUISITES

- %ITEM_1%
- ...

## EXPECTED RESULTS

- %ITEM_1%
- ...


## SCOPE & EDITORIAL NOTES

Scope: %IN_SCOPE%
Exclusions: %OUT_OF_SCOPE%
Progression: %SEQUENCING_CONSTRAINTS%
Dependencies: %UNRESOLVED_DEPENDENCIES_OR_GAPS%
Regional Lesson options: %REGIONAL_LESSON_VARIANTS_AND_CHOICE_POLICY_OR_NOT_APPLICABLE%

## LEARNING PLAN

### %MODULE_INDEX_NUMBER% - %MODULE_NAME%
Definition: %Module Markdown document link. Default [Not implemented](#). Replace only with a verified file link.%
Code: %Module runtime code link. Default [Not implemented](#). Replace only with a verified file link.%
Goal: %MODULE_GOAL% 
%Module description in a form of a detailed reasonably long text.%

#### %LESSON_INDEX_NUMBER% - %LESSON_NAME%
Definition: %Lesson Markdown document/learning brief link. Default [Not implemented](#). Replace only with a verified file link.%
Code: %Lesson runtime code link. Default [Not implemented](#). Replace only with a verified file link.%
Goal: %LESSON_GOAL%
%Lesson description in a form of a detailed reasonably long text.%
Target skills:
- **%SKILL_NAME%** — Definition: [%SKILL_NAME%](../../skills/%DOMAIN%/%GROUP%/skills/%SKILL%.skill.md) · Code: [Not implemented](#)
- **%DIRECT_SKILL_NAME%** (if ungrouped; use only when a verified direct-Domain Definition exists) — Definition: [%DIRECT_SKILL_NAME%](../../skills/%DOMAIN%/skills/%DIRECT_SKILL%.skill.md) · Code: [Not implemented](#)
- ...
```


## RESULT

Create or update one Curriculum document at:

```text
<PackageRoot>/
└── docs/
    └── curriculums/
        └── %CURRICULUM_NAME in camelCase%/
            └── %CURRICULUM_NAME in camelCase%.curriculum.md
```

- Use `<PackageRoot>` from the briefing: the **target textbook/package root**, never the monorepo root. Keep `docs/curriculums/` literal and derive the Curriculum name in **camelCase** once for both directory and filename.
- Fill the file using the embedded **CURRICULUM TEMPLATE**. Review existing content before updating it; do not create a substitute `README.md` or automatically generate module, lesson, or assessment files.
- Verify the output path, replace all template placeholders, and resolve links relative to the **resulting Curriculum file**. From `<PackageRoot>/docs/curriculums/<name>/`, the canonical taxonomy is exactly `../../skills/taxonomy.md` (the template includes this direct link). For absent module/lesson Definitions or Code, use `[Not implemented](#)` independently. Required Skill Definitions must exist and be checked; Code may be absent.

# Create Curriculum Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full and adopt its professional responsibilities, judgment, and role boundaries **before** planning or generating content. Do not assume the persona is automatically loaded.

**Purpose:** Create or review a structured Curriculum for **any discipline, textbook, course, learning audience, or educational context**, using an editorial briefing and existing Skills Taxonomy. This Skill does not author detailed Lesson Learning Briefs, storyboards, assessments, or code.

## NON-NEGOTIABLE START CONDITIONS

**Do not begin drafting a Curriculum until both conditions are satisfied:**

1. **Editorial briefing received.** Identify the textbook/course/program and the requested part of it; the target audience and expected entry level; the intended outcomes and constraints.
2. **Skills Taxonomy accessible.** Locate the relevant real SkillDomain, SkillGroup, and Skill definitions and inspect them before assigning competencies. A mere list of hypothetical names or unverified identifiers is not sufficient.

If a required input is absent or taxonomy files cannot be inspected, **stop Curriculum generation**, describe what is missing, and request the smallest necessary briefing or access. Do not infer the audience, invent a textbook scope, or manufacture Skills to keep writing. Existing Curriculum or Lesson files can inform the briefing but cannot substitute for the Skills Taxonomy.

### Editorial briefing — required fields

- **Learning resource:** title or working title of the textbook/course/learning program, discipline or interdisciplinary theme, and requested scope (whole resource, level, module, or lesson).
- **Audience:** learner category and approximate age or professional stage when relevant; prior knowledge, literacy and language proficiency; learning context and meaningful accessibility needs. School grades are optional, not universal.
- **Intent:** desired educational outcomes, depth, boundaries, mandatory source materials, and whether alignment with a specified local standard or accreditation is required.
- **Taxonomy:** repository/location of the canonical Skills Taxonomy and enough access to inspect the relevant definitions.

Clarify optional constraints when they matter: language(s) of output, locale/cultural setting, delivery conditions, available time, modality, assessment goals, and existing resources. Do not force a country, age range, grade, timetable, or instructional duration onto a brief that does not require one. If a target-language preference is supplied, write the generated educational material in that language even though this instruction and its template are in English.

## SOURCE OF TRUTH: SKILLS TAXONOMY

- Read the available **SkillDomain → SkillGroup → Skill** hierarchy. A Skill represents a separately assessable competency; a Group or Domain is a broader semantic collection, **not** automatically a learning sequence or proof that every descendant is mastered.
- Follow the **actual configuration files** (normally `*.data.ts`) and their canonical, human-readable names. Use file links from the generated document to reference entities, rather than duplicating their technical identifiers.
- **Check every referenced file exists** and refers to the intended entity. Resolve Markdown links relative to the *generated Curriculum or brief file*, **never** relative to this instruction file.
- A file's presence establishes a traceable definition, **not necessarily runtime registration** or evidence that a learner has mastered it.
- Prefer a **specific Skill** as a learning target. Link to a SkillGroup or SkillDomain only for genuinely broad context or prerequisites, and make the intended breadth explicit.
- The taxonomy is a catalog, **not** the curriculum. Derive prerequisites and progression from instructional reasoning and the audience's needs, not from folder order.
- Reuse relevant existing Skills. If no adequate Skill exists, identify a **taxonomy gap for editorial review**; do not invent a definition, a link, or an assertion of completeness. Do not silently modify the taxonomy.
- The same Skill may be taught across multiple lessons and a lesson may address several Skills. Note partial coverage where the full Skill is broader than the lesson.

## OPERATING PROTOCOL

### Stage 1 — Curriculum design

1. **Read the brief and inspect the taxonomy.** Confirm audience, resource scope, intended outcomes, constraints, prior learning, and available subject references. Verify the relevant Skill definitions.
2. **Define observable outcomes.** State what learners should be able to do, distinguish essential competencies from optional enrichment, and adjust depth to the audience. Do not confuse topic coverage with demonstrated capability.
3. **Build the learning progression.** Sequence modules and lessons according to conceptual dependencies, cognitive load, worked examples, transfer, retrieval, and increasing independence. Do not mirror the taxonomy tree mechanically; do not force one Skill per lesson.
4. **Map outcomes to the canonical Skills.** Cite existing files with working relative Markdown links. Specify meaningful prerequisites, including plain-language knowledge or existing Skill/SkillGroup/SkillDomain references. Note missing coverage separately.
5. **Author the Curriculum with the embedded template below.** Its structure is binding for Curriculum documents; replace placeholders with context-specific content. Create no redundant metadata, copied IDs, fixed number of modules, or curriculum details unsupported by the brief.
6. **Audit before handoff.** Verify subject accuracy, progression, alignment with intended outcomes, links and names, prerequisite feasibility, content boundaries, locale-specific assumptions, and template completeness. Flag unresolved issues explicitly.
7. **Stop for review.** Deliver the Curriculum and an economical summary of decisions and open issues. Do **not** automatically proceed to detailed lessons, scripts, questions, or implementation.

**Handoff:** After editorial approval, a different task-specific Skill may produce detailed Lesson Learning Briefs. That work is **outside this Skill** and must not start automatically.

## QUALITY AND ACCEPTANCE GATES

A Curriculum is ready for editorial review only when:

- The source briefing and Skills Taxonomy are available and actually used.
- The plan covers requested outcomes without invented or unverifiable competencies.
- Every Skill reference is a real, correctly resolved file link, with the entity's actual name.
- The order is pedagogically defensible, and required prior learning is available or explicitly identified as a gap.
- Outcomes are observable, specific, appropriate for the audience, and consistent across the Curriculum, modules, and lessons.
- Subject claims, examples, and calculations are accurate; uncertain or contested material is identified for review.
- Locale, linguistic, cultural, accessibility, and standards assumptions are explicit rather than silently universalized.
- Missing information, taxonomy gaps, and unresolved educational choices are reported **separately** instead of obscured by plausible prose.
- The Curriculum remains a pedagogical specification, not an implementation plan.

Use compact, structured Markdown. English is the working language of this instruction and template; the generated curriculum's language follows the editorial brief. Keep file references clickable in final artifacts and preserve the embedded template's section structure.

## CURRICULUM TEMPLATE

Use the following template **as written**, replacing placeholders with content appropriate to the brief. Its Markdown file paths are relative to the **generated Curriculum file**, not this Skill. This embedded template is canonical; no separate `curriculum-template.md` is required.

```md
# %NAME%

Date: %CURRENT_DATE%

%Program description in a form of a detailed reasonably long text.%

## TARGET AUDIENCE

Ages: %AGE_RANGE%
%Audience description in a form of a detailed reasonably long text.%

## PREREQUISITES

> Agent Note:
> Allowed types of records:
> - Plain text: %TEXT_PREREQUISITE%
> - Skill: [%SKILL_NAME%](../skillsTaxonomy/%DOMAIN%/%GROUP%/skills/%SKILL%.data.ts)
> - SkillGroup: [%SKILL_GROUP_NAME%](../skillsTaxonomy/%DOMAIN%/%GROUP%/%GROUP%.data.ts)
> - SkillDomain: [%SKILL_DOMAIN_NAME%](../skillsTaxonomy/%DOMAIN%/%DOMAIN%.data.ts)
> 
> Choose only applicable record types and mix them when needed.
> Use actual entity names and existing file paths.
> Do not duplicate IDs or UUIDs.
> A SkillGroup or SkillDomain prerequisite means general familiarity, not mastery of every nested Skill.

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

## LEARNING PLAN

### %MODULE_INDEX_NUMBER% - %MODULE_NAME%
File: %Module document file link. Default [Not implemented](#). When implemented [File name](File path)%
Goal: %MODULE_GOAL% 
%Module description in a form of a detailed reasonably long text.%

#### %LESSON_INDEX_NUMBER% - %LESSON_NAME%
File: %Lesson document file link. Default [Not implemented](#). When implemented [File name](File path)%
Goal: %LESSON_GOAL%
%Lesson description in a form of a detailed reasonably long text.%
Target skills:
- [Skill name as written in its *.data file. No suffixes.](*Data file path)
- ...
```


## RESULT

Create the following artifact **inside the target textbook's root directory** (the location supplied in the editorial briefing):

```text
<TextbookRoot>/
└── Curriculum/
    └── curriculum/
        └── curriculum.curriculum.md
```

- `Curriculum/` is the parent directory; `curriculum/` and `curriculum.curriculum.md` use **camelCase** (for this single-word name, lowercase `curriculum`). Preserve this casing exactly.
- Write the complete Curriculum document into `curriculum.curriculum.md` using the embedded **CURRICULUM TEMPLATE**, replacing its placeholders with the approved content. Do not create a `README.md` as a substitute.
- Create missing directories as needed; if the target file already exists, review and update it rather than silently overwriting editorial changes.
- Resolve and verify every relative file link **from the final location of `curriculum.curriculum.md`**, especially links to the Skills Taxonomy. Template example paths must not be copied unchanged when they do not resolve from this directory.
- This task produces the Curriculum document only. Referenced module, lesson, Skill, or Learning Brief files are not automatically created by this Skill; follow the template's explicit `[Not implemented](#)` convention for absent module or lesson documents.
- Before reporting completion, confirm the artifact exists at the specified path, follows the template, and contains no unresolved placeholders or broken links to files claimed to exist.

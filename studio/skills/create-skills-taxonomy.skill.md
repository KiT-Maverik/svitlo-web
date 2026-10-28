# Create Skills Taxonomy Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full. Adopt its professional judgment and role boundaries before researching, designing, or editing a taxonomy. Do not assume the persona has been loaded.

**Purpose:** Design or review a subject-wide **Skills Taxonomy**: a stable, audience-independent catalog of observable competencies organized as **SkillDomain → SkillGroup → Skill**. Produce a concise, navigable Markdown inventory with clear descriptions, counts, and file-availability links. This Skill does **not** write individual Skill definition documents, TypeScript configurations, curricula, lessons, assessments, or code.

## NON-NEGOTIABLE START CONDITIONS

Before authoring, establish:

1. **Package root:** the root of the specific standalone textbook/application being authored, not the monorepo root. Use the real repository path, for example `<MonorepoRoot>/apps/<textbook>/`; never presume the example is the actual layout.
2. **Subject and scope:** discipline or interdisciplinary subject, intended knowledge breadth and depth, exclusions, working language, and whether this is a new taxonomy or a revision.
3. **Evidence:** relevant subject references, existing taxonomy material if any, and any standards the editor *explicitly* wants compared. A taxonomy can be created before a curriculum or code exists.
4. **Existing files:** inspect `<PackageRoot>/docs/skills/` and applicable repository instructions (`AGENTS.md` and nested instructions). Check for existing definitions and avoid overwriting or misrepresenting them.

If a blocking input cannot be established, report the precise missing prerequisite; never invent a package root, claim to have inspected absent files, or silently presume a national school standard. Seek authoritative subject references where needed. An intended learner audience may help select *scope* but must not become an intrinsic property of a Skill.

## SEMANTIC CONTRACT

- **Skill**: one coherent, separately assessable competency expressed as an observable action with a meaningful target or outcome. It is not a topic, lesson, question type, single example, UI interaction, or teaching method.
- **SkillGroup**: a semantically coherent family of Skills, with its own useful name and description.
- **SkillDomain**: a broad, distinct subject area containing SkillGroups. **Subject** is the catalog context, not a forced extra runtime entity.
- No artificial limits, fixed number of levels beyond this hierarchy, or forced symmetry. A Domain may have one Group and a Group may have one Skill when semantically warranted.
- Every Skill appears **once** in the primary taxonomy. Cross-cutting use, prerequisites, curriculum sequencing, standards mappings, and learning dependencies belong outside this tree.
- Do not attach age, grade, course, difficulty, prerequisite lists, learning order, teaching/assessment format, scoring, progress, mastery, question references, or UI metadata to Skill definitions.
- Assess granularity by asking: **Can this competency be evaluated independently, and does that evaluation mean something on its own?** Avoid both overbroad combined outcomes and micro-Skills for individual exercise variants.
- Commas, enumerations, and “and/or” in names or descriptions trigger critical review, **not** automatic splitting. Test whether A can be mastered without B, whether they deserve separate evidence, and whether understanding the **relationship between A and B** is itself a distinct assessable Skill.
- Do not manufacture integration Skills merely because an exercise happens to involve multiple competencies. Group/Domain names must not masquerade as standalone Skills; an immediate child Skill should not have the exact same name as its Group.
- Preserve a competency’s semantic meaning across edits. If a published Skill is split, merged, or materially redefined, report migration/review implications to the coding phase instead of casually reusing old identity.
- This phase is **editorial**. Never generate UI IDs, UUIDs, dotted technical IDs, ID dictionaries, or runtime identifiers in the Markdown taxonomy.

The detailed historical design discussion is preserved in [Creating Skills](../Creating%20Skills.md). Use its semantic principles (atomicity, integration, separation of responsibilities, review). Its old file paths, implementation snapshots, UUID instructions, and TypeScript details **do not define this Skill's Markdown output**. Technical implementation is delegated to **Create Skill Code Skill**.

## OPERATING PROTOCOL

1. **Discover** the complete subject landscape from the briefing, credible references, and existing definitions. Record meaningful scope boundaries and factual uncertainty; do not simply mirror one national curriculum.
2. **Decompose** into broad Domains, coherent Groups, and atomic Skills. Phrase each Skill as a testable action. Include independently assessable integrative competencies when justified.
3. **Audit** overlapping definitions, gaps, inconsistent granularity, misleading combined concepts, and unnecessary fragmentation. Preserve existing agreed semantics during revisions unless changes are explicitly reviewed.
4. **Validate breadth** against relevant subject references. Coverage is editorial, not a fabricated percentage derived from row counts. Flag disputed and optional areas for review outside the concise template.
5. **Inspect real files** under the target package to determine availability. A valid link requires a file actually present and matching the entity. A reserved name, a proposed path, a UUID, or a parent file does **not** establish implementation.
6. **Author** the single taxonomy file using the **TAXONOMY TEMPLATE** below. Populate each Domain and Group description and each Skill's short, independently meaningful description. Use actual counts, not target quotas.
7. **Verify and stop.** Recount all Groups and Skills, ensure one placement per Skill, check link destinations and Markdown structure, and deliver the inventory for editorial review. Do not automatically create hundreds of Skill documents or generate code.

### File-link lifecycle

Every Domain, Group, and Skill has exactly one visible **File** link.

- **No matching file:** use exactly `[Not implemented](#)`. Never link to a hypothetical future path.
- **Definition document exists but code does not:** link the real `*.skill-domain.md`, `*.skill-group.md`, or `*.skill.md` file authored by **Create Skill Documents Skill**.
- **Code exists:** prefer the verified canonical `*.data.ts` entity file once produced by **Create Skill Code Skill**, with an actual path from the taxonomy document.
- A linked definition document is **not** proof of runtime implementation, and a reserved UUID is not proof of a data file. In the summary, “Files available” counts links that resolve to real files; “Code files” counts verified canonical data files only.
- Paths in Markdown must be relative to the **output taxonomy document**, never to this instruction. Update availability when subsequent Skills create files.

## QUALITY AND ACCEPTANCE GATES

- All Domain, Group, and Skill names and descriptions convey meaningful, non-duplicative semantics.
- Every Skill is specific enough to assess independently without prescribing the assessment format; integration Skills are justified.
- Descriptions accurately capture subject scope, not pedagogical sequencing or technical implementation.
- Counts reconcile: each Domain's Group/Skill totals, each Group's Skill count, and global totals.
- Every real file link resolves and matches the named entity; missing files show `[Not implemented](#)`.
- “Files available” and “Code files” are counted separately; no unverified implementation claims.
- No UUIDs, UI IDs, technical IDs, guessed links, or code appear in the generated taxonomy.
- Editorial uncertainties are reported separately rather than disguised as complete coverage.

Write the artifact in the briefing's requested language. The following English template is structural; replace its example placeholders and repeat its Domain/Group/Skill blocks as needed.

## TAXONOMY TEMPLATE

Use this **embedded template**. It is canonical; do not create a separate template document.

~~~md
# %SUBJECT_NAME% — Skills Taxonomy

Date: %CURRENT_DATE%

%Short subject scope and exclusions.%

## SUMMARY

Domains: %DOMAIN_COUNT%
Groups: %GROUP_COUNT%
Skills: %SKILL_COUNT%

Files available: %DOMAIN_FILES%/%DOMAIN_COUNT% Domains · %GROUP_FILES%/%GROUP_COUNT% Groups · %SKILL_FILES%/%SKILL_COUNT% Skills
Code files: %DOMAIN_CODE_FILES%/%DOMAIN_COUNT% Domains · %GROUP_CODE_FILES%/%GROUP_COUNT% Groups · %SKILL_CODE_FILES%/%SKILL_COUNT% Skills

## DOMAINS

### %DOMAIN_NAME%

Description: %DOMAIN_DESCRIPTION%
File: [Not implemented](#)
Groups: %DOMAIN_GROUP_COUNT% · Skills: %DOMAIN_SKILL_COUNT%

#### %GROUP_NAME%

Description: %GROUP_DESCRIPTION%
File: [Not implemented](#)
Skills: %GROUP_SKILL_COUNT%

- **%SKILL_NAME%** — %SHORT_OBSERVABLE_SKILL_DESCRIPTION%. File: [Not implemented](#)
- **%SKILL_NAME%** — %SHORT_OBSERVABLE_SKILL_DESCRIPTION%. File: [Not implemented](#)

%Repeat groups and domains as required. Replace only verified file links with real relative paths.%
~~~

## RESULT

Create or update exactly one taxonomy Markdown document:

~~~text
<PackageRoot>/
└── docs/
    └── skills/
        └── skills-taxonomy.md
~~~

- Keep `docs/skills/` and `skills-taxonomy.md` literal within the actual textbook package. Never write the file to monorepo-level `studio/` or a guessed `src/math/` location.
- Inspect an existing taxonomy before editing. Keep validated definitions and filenames stable; make significant splits/merges reviewable.
- Do not create individual entity files, IDs, code, curriculum, or lesson content in this phase.
- Report source references used, final counts, available-file counts, unresolved semantic concerns, and readiness for **Create Skill Documents Skill**.

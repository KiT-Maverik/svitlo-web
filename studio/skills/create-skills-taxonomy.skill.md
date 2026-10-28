# Create Skills Taxonomy Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full. Adopt its professional judgment and role boundaries before researching, designing, or editing a taxonomy. Do not assume the persona has been loaded.

**Purpose:** Design or review a subject-wide **Skills Taxonomy**: a stable, audience-independent catalog of observable competencies organized as **SkillDomain → SkillGroup → Skill**. Produce a concise, navigable Markdown inventory with clear descriptions, counts, and **separate Definition and Code links** for every entity. This Skill does **not** write individual Skill definition documents, TypeScript configurations, curricula, lessons, assessments, or code.

## NON-NEGOTIABLE START CONDITIONS

Before authoring, establish:

1. **Package root:** the root of the specific standalone textbook/application being authored, not the monorepo root. Use the real repository path, for example `<MonorepoRoot>/apps/<textbook>/`; never presume the example is the actual layout.
2. **Subject and scope:** discipline or interdisciplinary subject, intended knowledge breadth and depth, exclusions, working language, and whether this is a new taxonomy or a revision.
3. **Evidence:** relevant subject references, existing taxonomy material if any, and any standards the editor *explicitly* wants compared. A taxonomy can be created before a curriculum or code exists.
4. **Existing files:** inspect `<PackageRoot>/docs/skills/` and applicable repository instructions (`AGENTS.md` and nested instructions). Check for existing definitions and avoid overwriting or misrepresenting them.

If a blocking input cannot be established, report the precise missing prerequisite; never invent a package root, claim to have inspected absent files, or silently presume a national school standard. Seek authoritative subject references where needed. An intended learner audience may help select *scope* but must not become an intrinsic property of a Skill.

## ENTITY DEFINITIONS — REQUIRED READING

Read these three canonical entity descriptions in full before designing the taxonomy:

- [SkillDomain](../docs/entities/skill-domain.md)
- [SkillGroup](../docs/entities/skill-group.md)
- [Skill](../docs/entities/skill.md)

Apply their semantic boundaries, atomicity rules, integration-skill criteria, and separation of Definition from Code. Do not reproduce those definitions inside this task instruction or invent UI/runtime identifiers in the editorial taxonomy. Preserve the historical source [Creating Skills](../Creating%20Skills.md) as background only; its legacy paths and implementation snapshots do not govern this template.

## OPERATING PROTOCOL

1. **Discover** the complete subject landscape from the briefing, credible references, and existing definitions. Record meaningful scope boundaries and factual uncertainty; do not simply mirror one national curriculum.
2. **Decompose** into broad Domains, coherent Groups, and atomic Skills. Phrase each Skill as a testable action. Include independently assessable integrative competencies when justified.
3. **Audit** overlapping definitions, gaps, inconsistent granularity, misleading combined concepts, and unnecessary fragmentation. Preserve existing agreed semantics during revisions unless changes are explicitly reviewed.
4. **Validate breadth** against relevant subject references. Coverage is editorial, not a fabricated percentage derived from row counts. Flag disputed and optional areas for review outside the concise template.
5. **Inspect real files** under the target package to determine availability. A valid link requires a file actually present and matching the entity. A reserved name, a proposed path, a UUID, or a parent file does **not** establish implementation.
6. **Author** the single taxonomy file using the **TAXONOMY TEMPLATE** below. Populate each Domain and Group description and each Skill's short, independently meaningful description. Use actual counts, not target quotas.
7. **Verify and stop.** Recount all Groups and Skills, ensure one placement per Skill, check link destinations and Markdown structure, and deliver the inventory for editorial review. Do not automatically create hundreds of Skill documents or generate code.

### Independent artifact links

Every Domain, Group, and Skill has **two separate, permanent fields**:

- **Definition:** Markdown document that defines the entity's semantics, boundaries, and evidence, normally written by **Create Skill Documents Skill**.
- **Code:** canonical source implementation of that entity, normally created by **Create Skill Code Skill**.

The fields **never replace one another**. Inspect each independently. Use exactly `[Not implemented](#)` for any **missing target**, even if the other file already exists. Replace a placeholder only when that specific file really exists and matches the entity.

- For Definition, link verified `*.skill-domain.md`, `*.skill-group.md`, or `*.skill.md`.
- For Code, link verified canonical `*.data.ts` (or its actual codebase equivalent).
- An editorial definition, planned filename, reserved UUID, parent reference, or static ID object does **not** prove Code exists; code existence does not prove an approved Definition exists.
- Resolve each relative link from the **generated taxonomy Markdown file**, not from this instruction. Keep both links populated when both artifacts exist.
- Independently count **Definitions** and **Code files** by entity type; count only links to verified files.

## QUALITY AND ACCEPTANCE GATES

- All Domain, Group, and Skill names and descriptions convey meaningful, non-duplicative semantics.
- Every Skill is specific enough to assess independently without prescribing the assessment format; integration Skills are justified.
- Descriptions accurately capture subject scope, not pedagogical sequencing or technical implementation.
- Counts reconcile: each Domain's Group/Skill totals, each Group's Skill count, and global totals.
- Each entity has both `Definition` and `Code` links, even when both are `[Not implemented](#)`.
- Every non-placeholder link resolves and matches that specific artifact; definitions never become substitutes for code, or vice versa.
- “Definitions” and “Code files” are counted separately; no unverified implementation claims.
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

Definitions: %DOMAIN_DEFINITIONS%/%DOMAIN_COUNT% Domains · %GROUP_DEFINITIONS%/%GROUP_COUNT% Groups · %SKILL_DEFINITIONS%/%SKILL_COUNT% Skills

## DOMAINS

### %DOMAIN_NAME%

Groups: %DOMAIN_GROUP_COUNT% · Skills: %DOMAIN_SKILL_COUNT%

Definition: [Not implemented](#)

Description: %DOMAIN_DESCRIPTION%

#### %GROUP_NAME%

Skills: %GROUP_SKILL_COUNT%

Description: %GROUP_DESCRIPTION%

Definition: [Not implemented](#)

##### %SKILL_NAME%

Definition: [Not implemented](#)

%SHORT_OBSERVABLE_SKILL_DESCRIPTION%

> Agent note:
> Repeat groups and domains as required.
> Replace only verified file links with real relative paths.
~~~

## RESULT

Create or update exactly one taxonomy Markdown document:

~~~text
<PackageRoot>/
└── docs/
    └── skills/
        └── taxonomy.md
~~~

- Keep `docs/skills/` and `skills-taxonomy.md` literal within the actual textbook package. Never write the file to monorepo-level `studio/` or a guessed `src/math/` location.
- Inspect an existing taxonomy before editing. Keep validated definitions and filenames stable; make significant splits/merges reviewable.
- Do not create individual entity files, IDs, code, curriculum, or lesson content in this phase.
- Report source references used, final counts, separate Definition and Code file counts, unresolved semantic concerns, and readiness for **Create Skill Documents Skill**.

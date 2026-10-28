# Create Skills Taxonomy Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full. Adopt its professional judgment and role boundaries before researching, designing, or editing a taxonomy. Do not assume the persona has been loaded.

**Purpose:** Design or review a subject-wide **Skills Taxonomy**: a stable, audience-independent catalog of named competencies organized as **SkillDomain → SkillGroup → Skill**. Produce a concise, navigable Markdown inventory for categorization and cross-referencing, with short descriptions, counts, and separate Definition and Code links. The taxonomy does not contain assessment evidence or learner analytics records. This Skill does **not** write individual Skill definition documents, TypeScript configurations, curricula, lessons, assessments, or code.

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

Follow the canonical meanings and grouping conventions, including coherent granularity and separation of Definition from Code. A Skill is a catalog classification entry: learning evidence, scoring, and progress are managed elsewhere. Do not repeat their semantic rules in this workflow. The preserved `studio/Creating Skills.md` is historical background, not an alternative output contract.

## OPERATING PROTOCOL

1. **Discover** the complete subject landscape from the briefing, credible references, and existing definitions. Record meaningful scope boundaries and factual uncertainty; do not simply mirror one national curriculum.
2. **Decompose** into broad Domains, coherent Groups, and distinct, well-named Skills. Keep each Skill's name and description focused on one recognizable concept or ability; do not define assessment criteria or learner evidence.
3. **Audit** overlapping labels, gaps, inconsistent granularity, ambiguous combined concepts, and unnecessary fragmentation. Preserve agreed semantics during revisions unless changes are explicitly reviewed.
4. **Validate breadth** against relevant subject references. Coverage is editorial, not a fabricated percentage derived from row counts. Flag disputed and optional areas for review outside the concise template.
5. **Inspect actual Definition and Code files** under the target package. Each non-placeholder link must resolve to the matching entity and artifact. A proposed path, reserved UUID, or parent reference is not proof of implementation.
6. **Author** the single taxonomy file using the **TAXONOMY TEMPLATE** below. Give each Domain, Group, and Skill a short, distinguishable catalog description. Use actual counts, not target quotas.
7. **Verify and stop.** Recount Groups, Skills, Definitions and Code files; check primary placement, resolved links and Markdown structure. Deliver the inventory for editorial review. Do not generate entity documents or code.

### Independent artifact links

Every Domain, Group, and Skill has **two independent fields**:

- **Definition:** Markdown document with the entity's title and concise catalog description, normally written by **Create Skill Definitions Skill**.
- **Code:** canonical source implementation of that entity, normally created by **Create Skill Code Skill**.

Neither link replaces the other. Use exactly `[Not implemented](#)` for each missing target. Link a Definition only to its verified `*.skill-domain.md`, `*.skill-group.md`, or `*.skill.md` document; link Code only to its verified canonical implementation file (normally `*.data.ts`). File existence does not imply editorial approval or runtime registration. Resolve both links **relative to the generated taxonomy file**, and count available Definitions and Code files independently by entity type.

## QUALITY AND ACCEPTANCE GATES

- All Domain, Group, and Skill names and descriptions convey meaningful, non-duplicative semantics.
- Every Skill is a distinct, reusable classification entry; the taxonomy does not prescribe evaluation methods, evidence, or mastery criteria.
- Descriptions accurately capture subject scope, not pedagogical sequencing or technical implementation.
- Counts reconcile: each Domain's Group/Skill totals, each Group's Skill count, and global totals.
- Each entity has both `Definition` and `Code` links, even when both are `[Not implemented](#)`.
- Every non-placeholder link resolves and matches that specific artifact; definitions never become substitutes for code, or vice versa.
- “Definitions” and “Code files” are counted separately; no unverified implementation claims.
- No UUIDs, UI IDs, technical identifiers, guessed paths, or executable code content appear in the generated taxonomy; verified **Code links** are explicitly permitted.
- Editorial uncertainties are reported separately rather than disguised as complete coverage.

Write the artifact in the briefing's requested language. The following English template is structural; replace its example placeholders and repeat its Domain/Group/Skill blocks as needed.

## TAXONOMY TEMPLATE

Use this **embedded template**. Repeat the Domain, Group, and Skill blocks as needed, reconcile the counts, and replace only verified Definition/Code links. Do not create a separate template document or include authoring instructions in the generated taxonomy.

~~~md
# %SUBJECT_NAME% — Skills Taxonomy

Date: %CURRENT_DATE%

%Short subject scope and exclusions.%

## SUMMARY

Domains: %DOMAIN_COUNT%
Groups: %GROUP_COUNT%
Skills: %SKILL_COUNT%

Definitions: %DOMAIN_DEFINITIONS%/%DOMAIN_COUNT% Domains · %GROUP_DEFINITIONS%/%GROUP_COUNT% Groups · %SKILL_DEFINITIONS%/%SKILL_COUNT% Skills
Code files: %DOMAIN_CODE_FILES%/%DOMAIN_COUNT% Domains · %GROUP_CODE_FILES%/%GROUP_COUNT% Groups · %SKILL_CODE_FILES%/%SKILL_COUNT% Skills

## DOMAINS

### %DOMAIN_NAME%

Groups: %DOMAIN_GROUP_COUNT% · Skills: %DOMAIN_SKILL_COUNT%

Definition: [Not implemented](#)
Code: [Not implemented](#)

Description: %DOMAIN_DESCRIPTION%

#### %GROUP_NAME%

Skills: %GROUP_SKILL_COUNT%

Description: %GROUP_DESCRIPTION%

Definition: [Not implemented](#)
Code: [Not implemented](#)

##### %SKILL_NAME%

Definition: [Not implemented](#)
Code: [Not implemented](#)

%SHORT_OBSERVABLE_SKILL_DESCRIPTION%

~~~

## RESULT

Create or update exactly one taxonomy Markdown document:

~~~text
<PackageRoot>/
└── docs/
    └── skills/
        └── taxonomy.md
~~~

- Keep `docs/skills/taxonomy.md` literal within the actual textbook package. Never write the file to monorepo-level `studio/` or a guessed `src/math/` location.
- Inspect an existing taxonomy before editing. Keep validated definitions and filenames stable; make significant splits/merges reviewable.
- Do not create individual entity files, IDs, code, curriculum, or lesson content in this phase.
- Report source references used, final counts, separate Definition and Code file counts, unresolved semantic concerns, and readiness for **Create Skill Definitions Skill**.

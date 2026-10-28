# Create Skill Definitions Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full before editing. This is an editorial catalog-definition task, not coding or assessment design.

**Purpose:** Create or update concise Markdown **Definitions** for selected SkillDomains, SkillGroups, and Skills from an approved taxonomy. A Definition documents the entity's name and short meaning; it is **not** an assessment plan, tracking record, or substitute for the runtime TypeScript entity. Operate only on the requested, bounded subtree.

## REQUIRED INPUTS AND SOURCES

1. Establish the exact `PackageRoot` of the standalone textbook application and selected entities. It is not necessarily the monorepo root.
2. Read `<PackageRoot>/docs/skills/taxonomy.md` and locate the approved Domain, Group, and Skill entries. The taxonomy is the **editorial hierarchy inventory** for this authoring stage: preserve its membership, names, and counts. It may later be retired as a temporary reference artifact; it is not a runtime registry or a learner-data source.
3. Read the canonical editorial meanings of [SkillDomain](../docs/entities/skill-domain.md), [SkillGroup](../docs/entities/skill-group.md), and [Skill](../docs/entities/skill.md); relevant `AGENTS.md` instructions; and any existing Definitions.
4. When translating Definitions to code is relevant, inspect the real package's content contracts. The current engine's `Skill_Config` contains `id` and localized `name`, **not `description`**. A Markdown Description does not automatically add a runtime field.

If a selected entry is absent from the approved taxonomy, do not invent it. Report the needed taxonomy revision. Do not overwrite already approved Definitions with a new generic description. Compound Skills and unresolved splits must first be discussed and approved in the **Create Skills Taxonomy** stage, rather than resolved while generating Definitions.

## DOCUMENT RULES

- **Name:** use the exact approved taxonomy name. The Markdown document's `#` heading is the human-readable name; do not add another “Name” field.
- **Description:** keep the entity's meaning concise, plain-language, and suitable for human identification and cataloging. A Domain may need a short paragraph, a Group one or two sentences, and a Skill ideally **one short sentence**. This is editorial text, not an automatically implemented UI property.
- **No embedded hierarchy:** Domain Definitions **must not list SkillGroups**; Group Definitions **must not list Skills**; Skill Definitions **must not list lessons, questions, or related Skills**. The taxonomy owns the hierarchy; source ID dictionaries own runtime memberships.
- **No assessment metadata:** do not add `Competency`, `Boundaries`, `Evidence of Competency`, rubrics, learning objectives, mastery thresholds, proficiency, scores, learner progress, assessment methods, exercises, teaching plans, prerequisites, or analytics measurements. Those belong to separate educational or learner-related entities. The **editorial design criterion** of independent assessability belongs in the canonical [Skill entity rules](../docs/entities/skill.md), never as a field in an individual Definition.
- **Status** is only an editorial document-review marker (`Draft` or `Approved`), **not** a learner-status field. A new or substantively revised Definition starts as `Draft`; only an explicit editorial decision marks it `Approved`.
- **Code** is an independent link to the canonical entity source file, if verified. If missing, use exactly `[Not implemented](#)`. Do not add UUIDs, technical ID fields, code snippets, or guessed implementation paths to Definitions.
- Keep the descriptions aligned with the taxonomy. If a material rename, split, or relocation is needed, raise it for taxonomy review rather than silently modifying hierarchy or identifiers.

## OPERATING PROTOCOL

1. Read the taxonomy and existing in-scope Definitions; identify only the requested entities and any already approved text.
2. Write or minimally update each individual Markdown Definition from the embedded templates, preserving existing approved descriptions unless a change is requested.
3. Inspect actual Code files and use verified relative Code links in newly written documents, or `[Not implemented](#)`.
4. Update **only the corresponding Definition links and Definition counts** in `<PackageRoot>/docs/skills/taxonomy.md` after creating the files. Preserve existing Code links and Code counts; report broken Code links rather than silently rewriting them.
5. Check names, short descriptions, review statuses, actual file paths, and independent link resolution. Stop after the selected scope; do not start code generation, curriculum authoring, or assessment design.

## DOMAIN DEFINITION TEMPLATE

~~~md
# %DOMAIN_NAME%

Status: Draft

Description: %SHORT_DOMAIN_DESCRIPTION%

Code: [Not implemented](#)
~~~

## GROUP DEFINITION TEMPLATE

~~~md
# %GROUP_NAME%

Status: Draft

Description: %SHORT_GROUP_DESCRIPTION%

Code: [Not implemented](#)
~~~

## SKILL DEFINITION TEMPLATE

~~~md
# %SKILL_NAME%

Status: Draft

Description: %SHORT_SKILL_DESCRIPTION%

Code: [Not implemented](#)
~~~

Replace every placeholder; the Code link must point to a real existing source file or retain the literal placeholder. These templates intentionally contain **no child lists, competency evidence, boundaries, or other pedagogical metadata**.

## RESULT

Create or update only the selected files under the actual textbook package:

~~~text
<PackageRoot>/
└── docs/
    └── skills/
        ├── taxonomy.md
        └── <domainCamelCase>/
            ├── <domainCamelCase>.skill-domain.md
            └── <groupCamelCase>/
                ├── <groupCamelCase>.skill-group.md
                └── skills/
                    └── <skillCamelCase>.skill.md
~~~

Keep existing paths stable where already established. Use file-relative links. Report updated Definitions, their Draft/Approved status, any missing Code links, and the bounded scope ready for editorial review. Implementation requires a separate, explicitly requested **Implement Skill Code Skill** run on approved Definitions.

# Create Skill Documents Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full. This is an editorial competency-definition task, not a programming task. Do not assume the persona has already been loaded.

**Purpose:** Turn an **approved Skills Taxonomy** into detailed, reviewable **Markdown definition documents** for selected SkillDomains, SkillGroups, and Skills. Work at the user's requested scope (one Skill, one Group, one Domain, or a bounded batch). This Skill does **not** invent a new taxonomy, write TypeScript, generate UUIDs, design lessons, or implement assessment questions.

## NON-NEGOTIABLE START CONDITIONS

1. Receive the actual **PackageRoot** of the standalone textbook/application, the requested Domain/Group/Skill scope, editorial language, and any material constraints. The monorepo root is not automatically PackageRoot.
2. Read `<PackageRoot>/docs/skills/taxonomy.md` and locate the **specific, existing** Domain, Group, and Skill entries. Read applicable `AGENTS.md` instructions and any existing definition documents.
3. Do not create entity files for names absent from the approved taxonomy, or silently change the taxonomy's counts, grouping, semantics, or scope. Report proposed additions/splits/merges as taxonomy change requests.
4. Use relevant, reliable subject references to elaborate the approved competencies. Identify contested or ambiguous definitions rather than inventing certainty.

If the taxonomy is missing, cannot be inspected, or contains unresolved blockers for the requested entity, stop that entity's generation and report the gap. Do not build definitions from unverified guessed names or technical IDs.

## ENTITY DEFINITIONS — REQUIRED READING

Before authoring, read the canonical entity definitions:

- [SkillDomain](../docs/entities/skill-domain.md)
- [SkillGroup](../docs/entities/skill-group.md)
- [Skill](../docs/entities/skill.md)

These files are the source of semantic rules (atomicity, independent evidence, integration Skills, boundaries and ownership). Do not duplicate those definitions in this workflow. Use [Creating Skills](../Creating%20Skills.md) only as preserved historical context, not as a conflicting output format.

**Document-authoring rules:** Preserve approved descriptions and existing reviewed documents; do not overwrite them with generic paraphrases. New or substantively changed documents begin at `Status: Draft` and require explicit approval to become `Approved`. Do not add UUIDs, technical IDs, guessed runtime paths, or assessment implementations to entity Definitions.

**Two independent artifacts:** Each entity's **Definition** is its Markdown document; its **Code** is a distinct, optional application source file. Creating a Definition must not change or erase a Code link. Existing Code does not automatically approve a Definition. Before filling a generated document's `Code` field, inspect the existing canonical code: if present, link the verified real relative path; if absent, use exactly `[Not implemented](#)`. Verify both artifacts independently.

## OPERATING PROTOCOL

1. **Inspect** the approved taxonomy, the exact requested subtree, existing documents, and references. Establish the expected count of selected entities before authoring.
2. **Draft Domain definitions** describing the distinct scope and boundaries of each selected Domain.
3. **Draft Group definitions** explaining the shared competency family, its distinctions, and its constituent Skills.
4. **Draft individual Skill definitions** with a precise observable competency, a meaningful explanation, competency boundaries, and what independent evidence would demonstrate the competency.
5. **Review semantics:** test the A-without-B split criterion; check overlap with neighboring Skills, variation vs. new competency, and whether an integration Skill adds real independent value. Escalate taxonomy-level changes; do not quietly move or duplicate entries.
6. **Write each entity document** at the deterministic paths below. Use camelCase path segments based on approved semantic names, reusing established directories and filenames. Make references relative to each generated document. Populate its `Code` link with a verified existing code file if present; otherwise retain the placeholder.
7. **Update only the corresponding Definition links and Definition counts** in the taxonomy, once the new Markdown files exist. Preserve all existing Code links and Code counts unchanged (except separately reported stale/broken references, which require code-owner review). Do not mark source code as implemented merely because a Markdown Definition exists.
8. **Audit and stop:** confirm one document per in-scope entity, complete templates, consistent names, accurate links, no fabricated approvals or IDs, and no missing Skills hidden by a batch summary. Do not auto-run code generation.

## DOMAIN DOCUMENT TEMPLATE

~~~md
# %DOMAIN_NAME%

Status: Draft

## DESCRIPTION

%Expanded definition and purpose of this subject area.%

## SCOPE & BOUNDARIES

%Included concepts, exclusions, and distinctions from neighboring Domains.%

## CODE

Code: [Not implemented](#)

## SKILL GROUPS

- **%GROUP_NAME%** — %Brief semantic distinction%. Definition: [Not implemented](#) · Code: [Not implemented](#)
- **%ANOTHER_GROUP_NAME%** — %Brief semantic distinction%. Definition: [Not implemented](#) · Code: [Not implemented](#)

## REVIEW NOTES

%Only material ambiguity, overlap or unresolved references; use "None" if clear.%
~~~

## GROUP DOCUMENT TEMPLATE

~~~md
# %GROUP_NAME%

Status: Draft

## DESCRIPTION

%Expanded definition of the shared competency family.%

## SCOPE & BOUNDARIES

%What belongs here, what belongs in adjacent Groups, and why.%

## CODE

Code: [Not implemented](#)

## SKILLS

- **%SKILL_NAME%** — %Short skill description%. Definition: [Not implemented](#) · Code: [Not implemented](#)
- **%ANOTHER_SKILL_NAME%** — %Short skill description%. Definition: [Not implemented](#) · Code: [Not implemented](#)

## REVIEW NOTES

%Material uncertainties only, or "None".%
~~~

## SKILL DOCUMENT TEMPLATE

~~~md
# %SKILL_NAME%

Status: Draft

## CODE

Code: [Not implemented](#)

## COMPETENCY

%One observable, independently assessable ability.%

## DESCRIPTION

%Precise subject explanation of the ability, including relevant meaning, constraints, and nontrivial cases.%

## BOUNDARIES

%What this Skill covers, what it does not cover, and how it differs from close Skills or mere exercise variants.%

## EVIDENCE OF COMPETENCY

%What a learner could demonstrably do that supports an independent conclusion about this competency. Describe evidence, not a question UI, rubric, score, or test implementation.%

## REVIEW NOTES

%Material unresolved questions, or "None".%
~~~

The document itself is that entity's **Definition**; the Code field points to implementation only if an actual file exists. For each child entity, preserve both **Definition** and **Code** fields independently, replacing the precise `[Not implemented](#)` marker only for verified targets. Duplicate or remove example rows to match the actual children. These are editorial document templates, not testing specifications; do not add runtime data or lesson plans.

## RESULT

Create the selected documents inside the **target package**, never in `studio/` or the monorepo root:

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

- Domain and Group Markdown documents are created once each for the selected scope. Individual Skill documents live inside the Group's `skills/` folder.
- Path segments are stable names, **not IDs**; reuse existing conventions and filenames where the package already has them. A move or rename is an explicit editorial change.
- The canonical taxonomy remains the **inventory/index**, while these files are the expanded semantic Definition source for later coding. Keep existing Code references untouched, and use the verified relative paths when adding links to Definitions.
- Report documents created/updated, Draft vs. Approved status, unresolved issues, and the exact portion ready for review. Handoff to **Create Skill Code Skill** is manual and requires approved definitions.

# Create Skill Documents Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full. This is an editorial competency-definition task, not a programming task. Do not assume the persona has already been loaded.

**Purpose:** Turn an **approved Skills Taxonomy** into detailed, reviewable **Markdown definition documents** for selected SkillDomains, SkillGroups, and Skills. Work at the user's requested scope (one Skill, one Group, one Domain, or a bounded batch). This Skill does **not** invent a new taxonomy, write TypeScript, generate UUIDs, design lessons, or implement assessment questions.

## NON-NEGOTIABLE START CONDITIONS

1. Receive the actual **PackageRoot** of the standalone textbook/application, the requested Domain/Group/Skill scope, editorial language, and any material constraints. The monorepo root is not automatically PackageRoot.
2. Read `<PackageRoot>/docs/skills/skills-taxonomy.md` and locate the **specific, existing** Domain, Group, and Skill entries. Read applicable `AGENTS.md` instructions and any existing definition documents.
3. Do not create entity files for names absent from the approved taxonomy, or silently change the taxonomy's counts, grouping, semantics, or scope. Report proposed additions/splits/merges as taxonomy change requests.
4. Use relevant, reliable subject references to elaborate the approved competencies. Identify contested or ambiguous definitions rather than inventing certainty.

If the taxonomy is missing, cannot be inspected, or contains unresolved blockers for the requested entity, stop that entity's generation and report the gap. Do not build definitions from unverified guessed names or technical IDs.

## AUTHORING PRINCIPLES

- **A Skill document specifies what the learner can demonstrably do.** It may explain essential concepts, boundaries, observable evidence, and revealing counterexamples. It does not supply the full lesson, script, bank of test questions, scoring algorithm, or implementation.
- **Atomicity:** one independently assessable competency per Skill. A Skill can legitimately assess a meaningful relationship between concepts, but two unrelated actions do not become one Skill because they appear in the same exercise.
- **Domain/Group documents:** clarify semantic scope and distinguish child concepts; they are not learning sequences, prerequisites, or mastery aggregates.
- **No invented attributes:** grade, age, curriculum order, prerequisites, difficulties, question types, locales required at runtime, UI state, and learner progress are external concerns. Editorial context may be documented separately when essential but must not become intrinsic competency fields.
- **No technical identity:** do not include UUIDs, UI IDs, dotted ID keys, or planned runtime paths in the Markdown definitions. Stable semantic titles and existing file links are sufficient for this phase.
- **Existing evidence:** inspect and reuse approved definitions. Do not overwrite a reviewed document with generic paraphrase. New or substantively revised documents start at `Status: Draft`; only an explicit editorial decision makes them `Approved`.
- **File links:** never point to a nonexistent file. For unavailable child definitions or code, retain `[Not implemented](#)`. The taxonomy link to an entity can become its real definition-document path once the file exists.

For foundational reasoning, consult [Creating Skills](../Creating%20Skills.md) (atomicity, independent vs. integration Skills, responsibility boundaries). Ignore its historical assumption that authoring and coding are a single step; **Create Skill Code Skill** owns technical realization.

## OPERATING PROTOCOL

1. **Inspect** the approved taxonomy, the exact requested subtree, existing documents, and references. Establish the expected count of selected entities before authoring.
2. **Draft Domain definitions** describing the distinct scope and boundaries of each selected Domain.
3. **Draft Group definitions** explaining the shared competency family, its distinctions, and its constituent Skills.
4. **Draft individual Skill definitions** with a precise observable competency, a meaningful explanation, competency boundaries, and what independent evidence would demonstrate the competency.
5. **Review semantics:** test the A-without-B split criterion; check overlap with neighboring Skills, variation vs. new competency, and whether an integration Skill adds real independent value. Escalate taxonomy-level changes; do not quietly move or duplicate entries.
6. **Write each entity document** at the deterministic paths below. Use camelCase path segments based on approved semantic names, reusing established directories and filenames. Make references relative to each generated document.
7. **Update only the corresponding File links and availability counts** in the taxonomy for files verified to exist. Do not mark source code as implemented merely because a Markdown specification exists.
8. **Audit and stop:** confirm one document per in-scope entity, complete templates, consistent names, accurate links, no fabricated approvals or IDs, and no missing Skills hidden by a batch summary. Do not auto-run code generation.

## DOMAIN DOCUMENT TEMPLATE

~~~md
# %DOMAIN_NAME%

Status: Draft

## DESCRIPTION

%Expanded definition and purpose of this subject area.%

## SCOPE & BOUNDARIES

%Included concepts, exclusions, and distinctions from neighboring Domains.%

## SKILL GROUPS

- [%GROUP_NAME%](%EXISTING_RELATIVE_DOCUMENT_PATH%) — %Brief semantic distinction%.
- [Not implemented](#) — %GROUP_NAME%: %Brief semantic distinction%.

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

## SKILLS

- [%SKILL_NAME%](%EXISTING_RELATIVE_DOCUMENT_PATH%) — %Short skill description%.
- [Not implemented](#) — %SKILL_NAME%: %Short skill description%.

## REVIEW NOTES

%Material uncertainties only, or "None".%
~~~

## SKILL DOCUMENT TEMPLATE

~~~md
# %SKILL_NAME%

Status: Draft

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

Only include **existing** child-document links; use the exact `[Not implemented](#)` marker for child documents not yet authored. The templates are specifications and may be adapted for subject needs without adding runtime data or lesson plans.

## RESULT

Create the selected documents inside the **target package**, never in `studio/` or the monorepo root:

~~~text
<PackageRoot>/
└── docs/
    └── skills/
        ├── skills-taxonomy.md
        └── <domainCamelCase>/
            ├── <domainCamelCase>.skill-domain.md
            └── <groupCamelCase>/
                ├── <groupCamelCase>.skill-group.md
                └── skills/
                    └── <skillCamelCase>.skill.md
~~~

- Domain and Group Markdown documents are created once each for the selected scope. Individual Skill documents live inside the Group's `skills/` folder.
- Path segments are stable names, **not IDs**; reuse existing conventions and filenames where the package already has them. A move or rename is an explicit editorial change.
- The canonical taxonomy remains the **inventory/index**, while these files are the expanded semantic source for later coding.
- Report documents created/updated, Draft vs. Approved status, unresolved issues, and the exact portion ready for review. Handoff to **Create Skill Code Skill** is manual and requires approved definitions.

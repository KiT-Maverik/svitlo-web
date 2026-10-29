# Create Skills Taxonomy Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full. Adopt its professional judgment and role boundaries before researching, designing, or editing a taxonomy. Do not assume the persona has been loaded.

**Purpose:** Create or review the **permanent, canonical pedagogical source of truth** for one subject: an audience-independent Skills Taxonomy organized as **SkillDomain → SkillGroup → Skill**, with a controlled **SkillDomain → Skill** alternative when there are no meaningful Groups. Author the names, authoritative substantive descriptions, hierarchy, counts, and verified Code links directly in `<PackageRoot>/docs/skills/taxonomy.md`. There is **no Create Skill Definitions stage, no per-entity Markdown Definition file, and no separate definition template**. Code implementation is a separate stage.

## NON-NEGOTIABLE START CONDITIONS

1. **Package root:** identify the real standalone textbook/application root, not the monorepo root. Inspect the actual repository rather than assuming an example path.
2. **Scope:** establish the subject, intended breadth, exclusions, working language and whether the taxonomy is new or an approved revision.
3. **Evidence:** examine credible subject references and any standards the editor explicitly requests; do not silently impose a country, age, grade, course sequence or national curriculum.
4. **Existing state:** inspect `<PackageRoot>/docs/skills/taxonomy.md`, existing `*.data.ts` source files and repository instructions, including applicable `AGENTS.md`. Preserve previously approved identities, names, descriptions and placements unless explicitly authorized to revise them.

If a prerequisite is missing, report it accurately rather than inventing files or claiming unverified implementation.

## ENTITY DEFINITIONS — REQUIRED READING

Read [SkillDomain](../docs/entities/skill-domain.md), [SkillGroup](../docs/entities/skill-group.md) and [Skill](../docs/entities/skill.md) in full. A Skill is an independently assessable competency; the taxonomy never stores grades, assessment evidence, learner progress or mastery data.

## SUBJECT OWNERSHIP GATE — KNOWLEDGE, NOT TASK CONTEXT

**A subject-specific Skill is defined by the disciplinary knowledge or reasoning indispensable to demonstrating the competency, not by the theme of a Lesson, the object named in a dataset, or the subject of a Question.** A generic procedure performed on subject-themed material does not automatically become a subject Skill.

For every candidate Skill, **before** choosing its Domain or splitting/merging it:

1. **Identify essential knowledge:** State which disciplinary concepts or mechanisms a learner must understand to execute the action correctly. If the same operation needs only generic literacy, numeracy, scientific inquiry, source evaluation, or data interpretation, flag it as cross-cutting instead of inflating the subject taxonomy.
2. **Run a context-substitution test:** Replace the thematic objects or dataset (e.g. plant growth) with a non-biological example (e.g. room temperature). If the action and success criterion remain substantially unchanged, the subject context is incidental, and the Skill must not be claimed as Biology-specific merely by adding a biological noun.
3. **Separate method from subject inference:** Reading a growth table or interpreting a graph trend is general data literacy; **explaining why reduced light changes plant growth by using photosynthesis** requires biological knowledge. The latter may justify a Biology Skill, but only if the competence explicitly assesses that biological mechanism rather than generic graph reading.
4. **Assign an owner deliberately:** Record general/cross-disciplinary candidates and possible owners for editorial review. Do not automatically create them under Math, Informatics, another textbook or a new shared taxonomy without an approved cross-subject design. A subject-themed practice Question may exercise a cross-disciplinary Skill without duplicating its Skill ID in the subject.
5. **Re-evaluate Group/Domain coherence:** If all Skills in a Group fail the ownership test, remove that empty Group from the subject taxonomy and reconcile counts. If a broad methods Domain contains generic and disciplinary abilities, flag each boundary separately rather than silently deleting the whole Domain.

### Competency vs instructional medium gate

A **Skill** names what a learner can independently know, explain, determine, or do; a **Lesson**, **Question**, **diagram**, **simulation**, **graph**, **model**, or **interactive block** is a way of teaching or assessing it. The availability or use of a particular format **does not itself create a Skill**. Examine whether the intended outcome survives a change of medium: if the same biological prediction can be demonstrated from prose, a diagram, or a simulation, identify the biological reasoning instead of creating redundant "using a simulation" Skills.

**Modeling is not automatically disallowed:** creating a *biologically valid causal representation* or predicting how a biological system changes can be an independently assessable subject competence when it requires disciplinary mechanisms. Generic model literacy (e.g. distinguishing a map/model from reality) may be cross-disciplinary. Apply the subject ownership and atomicity gates to individual candidates; do **not** automatically delete a whole Modeling Group because interactive models are used in Lessons. Review unresolved cases with the editor.

**Group necessity and reuse:** do not create a SkillGroup purely to collect similar interaction formats. If pruning leaves a Group empty or with a single independent Skill, evaluate whether that Skill fits an existing coherent Group; remove empty Groups and revisit parent Domain names. Before inventing a Skill ID, look for an existing subject Skill that already tests the same outcome and update/move it if editorially approved. Physical instrument proficiency may be genuinely assessable in practice, but a virtual textbook Question alone cannot prove real-world proficiency; do not invent digital-only proof of mastery.

**Domain/group flattening gate (editor-approved, 2026-10-28):** Prefer the three-level Domain → Group → Skill tree where the Domain contains **two or more genuinely distinct Groups**. When the Domain has no meaningful internal subdivisions, put Skills **directly** under that Domain (Domain → Skill). **A Domain with exactly one Group is undesirable and must be flagged for explicit editor approval with a substantive justification; it must not be the generator's default.** Never add fake groups named after the Domain or a generic catch-all just to fill the level. Do not mix direct and grouped Skills in a single Domain. Each Skill retains exactly one primary taxonomy parent. In direct mode, Domain metadata reports `Groups: 0 · Skills: N` and Skill headings use `#### <Skill name>` (not `#####`); their metadata remains `Code` and meaningful prose. Reconcile counts by entity kind, **not heading depth alone**, because `####` now represents either a Group (identified by `Skills:` metadata) or a direct Skill (identified by only `Code`).

**Engine status and ownership:** The `SkillDomain_Config` type now optionally declares direct `skillIds` while keeping `groupIds` for compatibility. **The type and Domain builder validate nonempty exclusive membership and UUID syntax, but do not establish registry, renderer, loader or progress/ancestry support.** Implementation must audit those consumers and full-tree referential integrity. Do not implement a duplicate direct Skill in a Group as a workaround.

**Biology precedent (2026-10-28):** «Моделювання біологічних систем» (four mixed generic modeling and biological reasoning Skills) was removed as a Group. Instead of duplicating the same outcome, the existing Ecology Skill «Моделювати взаємодію живих і неживих компонентів» became «Пояснювати взаємозалежність компонентів екосистеми», assessed through explanations of predator removal, invasive species, and cascading consequences, regardless of whether the Lesson uses a simulation. The Observation Group was also removed after its one Biology-specific candidate was moved to Biological Classification; generic observation methods and instrument-use candidates were excluded.

**Concrete Biology editorial precedent (2026-10-28):** Four candidates were removed from Biology: `Інтерпретувати таблицю росту організмів`, `Розпізнавати біологічну закономірність на графіку`, `Порівнювати надійність джерел біологічної інформації`, `Виявляти біологічне твердження, не підтверджене даними`. Their primary operations (table reading, graph reading, source reliability evaluation, evidence checking) remain general when “biological” is replaced by another context. The now-empty `Біологічні дані та наукові твердження` Group was also removed. These competencies were **removed from the Biology catalog, not deleted from the educational scope or assigned new IDs elsewhere**. The Biology draft's working decision log retains the history; this rule stands independently.

## OPERATING PROTOCOL

1. **Research:** establish the complete subject landscape, practical scope boundaries and uncertainty. Use references to check breadth rather than copying a syllabus.
2. **Decompose:** identify coherent Domains and **only necessary Groups**, then atomic observable Skills. Respect the Domain/group flattening gate above. Apply the A-without-B test from the canonical Skill entity rules. Commas and conjunctions signal candidates for review, not automatic splitting.
3. **Review:** discuss overlaps, missing competencies, accidental bundling and over-fragmentation. Separate A and B if independently meaningful; add an integration Skill C only when the relationship itself is independently assessable. A Lesson/Question covering A and B need not create C. Report unresolved choices **before** editing an approved hierarchy.
4. **Write authoritative descriptions in the taxonomy itself:** immediately after each Domain, Group and Skill heading's metadata, provide a substantive paragraph explaining **what the concept/competency means, what is included and what distinguishes it from neighboring entries**. Names identify; descriptions explain. A Description **must not repeat, paraphrase or mechanically expand the heading**, nor merely say that a Domain contains related Groups or a Group contains related Skills. For Skills, clarify the observable mathematical idea, meaningful scope or distinguishing case; give a concrete example where it improves understanding, without turning the description into a lesson, grading rubric, question format or implementation plan. Every entry receives its own relevant description. Use ordinary prose below the heading: **never emit a `Description:` prefix**.
5. **Inspect actual Code files:** when an entity is implemented and validated, link directly to its canonical `*.data.ts` file. Otherwise use exactly `Code: [Not implemented](#)`. A reserved UUID, a parent map or a proposed path does not prove implementation.
6. **Author only the taxonomy** using the template below. Use accurate counts, link targets and current editorial scope. Do not create `*.skill.md`, `*.skill-group.md`, `*.skill-domain.md`, intermediate Definitions, or runtime code.
7. **Verify and stop:** check every Domain/Group/Skill count, standalone package boundaries, all non-placeholder Code links, unique primary membership, title-description differentiation and unresolved issues. Return the taxonomy for an explicit editorial approval decision. Never silently assume approval.

## CANONICAL OWNERSHIP

- **Taxonomy Markdown:** permanent editorial single source of truth for pedagogical names, scope, distinctions, descriptions and Domain → Group → Skill membership, or exceptional Domain → Skill membership.
- **TypeScript Data/IDs:** implementation authority for UUIDs, localized runtime names, typed configs, direct-child ID dictionaries and exports. The existing Engine does not have a `description` field; **do not duplicate descriptions in TypeScript** or add undocumented runtime metadata.
- **Code link in taxonomy:** one implementation reference per entity. Use `Code: [Not implemented](#)` until implementation is verified. There is **no Definition link, separate Definition count or editorial Status on individual entities**.
- **Approval:** a human editorial review gate on the taxonomy or a substantive revision, not a duplicated `Status: Draft/Approved` field on hundreds of documents. Once approved, downstream work must not rename, split, merge or rearrange without explicit review.
- **Curricula and Lessons:** reference the canonical taxonomy; they own sequencing, teaching context, prerequisites and assessment choices, not the Skill catalog.

### Metadata before descriptions

Keep every entity's metadata together directly after its heading. Order is **Domain:** `Groups · Skills` → `Code` → prose; **Group:** `Skills` → `Code` → prose; **Skill:** `Code` → prose. Present substantive descriptions as unlabeled Markdown paragraphs, never as `Description:` fields, and never interrupt metadata with a description. Do not reintroduce `Definition` links: the taxonomy itself is the permanent editorial definition and its only per-entity artifact link is `Code`.

## QUALITY AND ACCEPTANCE GATES

- Names and descriptions are **semantically different**: the description materially explains the name's subject content and boundaries and is not a tautology.
- Each Skill is distinct and independently assessable; compound candidates use the A-without-B review rule.
- Editorial uncertainties and source coverage limitations are reported separately; never fabricate a numeric standards-coverage percentage from catalog counts.
- Domain/Group/Skill counts reconcile at every hierarchy level; membership is unique and matches any approved existing catalog. Ungrouped Domains report zero Groups and directly attached Skills; a singleton Group requires a recorded editorial exception.
- Each entry has one verified `Code` reference or the exact missing-target placeholder; Code counts report actual implementations, not file names guessed from the taxonomy.
- No old per-entity Definition references, UUIDs, grade assignments, runtime IDs or fake `Status` fields occur in the taxonomy.
- Markdown descriptions do **not** start with `Description:` and always follow all of the entity's metadata (`Code` plus any Group/Skill counts).
- The only artifact written by this workflow is the taxonomy file. No TypeScript, curricula, lessons, individual Skill Markdown or invented templates.

## TAXONOMY TEMPLATE

Repeat the following blocks for each Domain, Group and Skill. **Grouped and direct Domain examples are alternatives, never mixed in one Domain.** Replace placeholders with substantive, *non-duplicative* prose and independently verified Code paths. The template is embedded; do not create another template file.

~~~md
# %SUBJECT_NAME% — Skills Taxonomy

Date: %CURRENT_DATE%

%SUBJECT_SCOPE_AND_EXCLUSIONS%

## SUMMARY

Domains: %DOMAIN_COUNT%
Groups: %GROUP_COUNT%
Skills: %SKILL_COUNT%

Code files: %DOMAIN_CODE_FILES%/%DOMAIN_COUNT% Domains · %GROUP_CODE_FILES%/%GROUP_COUNT% Groups · %SKILL_CODE_FILES%/%SKILL_COUNT% Skills

## DOMAINS

### %DOMAIN_NAME%

Groups: %DOMAIN_GROUP_COUNT% · Skills: %DOMAIN_SKILL_COUNT%

Code: [Not implemented](#)

%SUBSTANTIVE_DOMAIN_DESCRIPTION_NOT_A_RESTATEMENT_OF_NAME%

#### %GROUP_NAME%

Skills: %GROUP_SKILL_COUNT%

Code: [Not implemented](#)

%SUBSTANTIVE_GROUP_DESCRIPTION_EXPLAINING_SCOPE_AND_BOUNDARIES%

##### %SKILL_NAME%

Code: [Not implemented](#)

%SUBSTANTIVE_SKILL_DESCRIPTION_CLARIFYING_MEANING_AND_DISTINCTION%

### %DIRECT_SKILLS_DOMAIN_NAME%

Groups: 0 · Skills: %DIRECT_DOMAIN_SKILL_COUNT%

Code: [Not implemented](#)

%SUBSTANTIVE_DIRECT_DOMAIN_DESCRIPTION%

#### %DIRECT_SKILL_NAME%

Code: [Not implemented](#)

%SUBSTANTIVE_DIRECT_SKILL_DESCRIPTION%
~~~

## RESULT

Create or update **exactly one canonical file** in the selected textbook package:

~~~text
<PackageRoot>/
└── docs/
    └── skills/
        └── taxonomy.md
~~~

Keep validated code references and editorial decisions stable. Deliver source references, final Domain/Group/Skill counts, verified Code counts, suspicious combined competencies and unresolved editor decisions. The **next authorized stage after approval** is [Implement Skill Code](./implement-skill-code.skill.md), not a Definition-generation step.

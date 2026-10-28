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

Apply the editorial rules in the [Skill entity definition](../docs/entities/skill.md): each Skill is a separately assessable ability, while the Skill *entity* never stores assessment evidence, scores, or progress. The entity documents, not this workflow, own the detailed granularity rules. Keep independent Definition/Code references.

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

**Concrete Biology editorial precedent (2026-10-28):** Four candidates were removed from Biology: `Інтерпретувати таблицю росту організмів`, `Розпізнавати біологічну закономірність на графіку`, `Порівнювати надійність джерел біологічної інформації`, `Виявляти біологічне твердження, не підтверджене даними`. Their primary operations (table reading, graph reading, source reliability evaluation, evidence checking) remain general when “biological” is replaced by another context. The now-empty `Біологічні дані та наукові твердження` Group was also removed. These competencies were **removed from the Biology catalog, not deleted from the educational scope or assigned new IDs elsewhere**. See [Biology editorial review](../../learningApps/biology/docs/skills/editorial-review.md).

## OPERATING PROTOCOL

1. **Discover** the complete subject landscape from the briefing, credible references, and existing definitions. Record meaningful scope boundaries and factual uncertainty; do not simply mirror one national curriculum.
2. **Apply the subject ownership gate and decompose** into broad Domains, coherent Groups, and **atomic, independently assessable Skills**. Reject context-only subject labels and record cross-disciplinary candidates separately for editor review. Apply the A-without-B test to compound candidates. For names/descriptions with commas, enumerations or conjunctions (e.g. addition **and** subtraction), treat the wording as a **red flag requiring a review**, not as proof of invalidity or an automatic split. Do not define assessment methods or learner evidence in the taxonomy.
3. **Audit and discuss before finalizing semantic choices.** Surface every disputed split/merge, over-fragmentation, omission or domain placement as an **independent, actionable editorial decision**, with affected entries, alternatives, recommendation, reason and approval status. Present those decisions **visibly in chat before claiming completion**, not merely at the end of a long taxonomy. If editor intent remains ambiguous, retain the choice as open instead of silently settling it. Integration Skill C is justified only for an independent relational competency; combining A and B in one Lesson/Question is not enough.
4. **Validate breadth** against relevant subject references; never invent a coverage percentage. Persist the concise **separate editorial review document** at `<PackageRoot>/docs/skills/editorial-review.md` when decisions or cross-subject handoffs exist. Distinguish **editor-approved**, **proposed**, and **open** decisions, include affected paths and reasoning, and link it from the taxonomy/PR. It is a workflow artifact, **not Skill entity metadata**.
5. **Inspect actual Definition and Code files** under the target package. Each non-placeholder link must resolve to the matching entity and artifact. A proposed path, reserved UUID, or parent reference is not proof of implementation.
6. **Author** the taxonomy using the **TAXONOMY TEMPLATE** below. Domain prose explains scope and boundaries; Group prose explains the unifying subject concept and how it differs from neighboring Groups; Skill prose explains the exact conceptual distinction, procedure, conditions or mechanism behind the observable action. **A description that copies/paraphrases its title is a blocking quality defect**, even when format checks pass. Explain unfamiliar terminology (e.g. how a dichotomous identification key works). Write meaningful, distinct content rather than mechanically producing `name + period`. Use actual counts, not quotas.
7. **Verify and stop.** Recount Groups, Skills, Definitions and Code files; check placement and links. Audit **every Domain, Group and Skill description** for tautology, omitted defining information and incorrect subject claims. Check metadata ordering and absence of `Description:` labels. Deliver the inventory **and prominent separate editorial review** for approval. Do not generate entity documents or code.

### Independent artifact links

Every Domain, Group, and Skill has **two independent fields**:

- **Definition:** Markdown document with the entity's title and concise catalog description, normally written by **Create Skill Definitions Skill**.
- **Code:** canonical source implementation of that entity, normally created by **Implement Skill Code Skill**.

Neither link replaces the other. Use exactly `[Not implemented](#)` for each missing target. Link a Definition only to its verified `*.skill-domain.md`, `*.skill-group.md`, or `*.skill.md` document; link Code only to its verified canonical implementation file (normally `*.data.ts`). File existence does not imply editorial approval or runtime registration. Resolve both links **relative to the generated taxonomy file**, and count available Definitions and Code files independently by entity type.

## QUALITY AND ACCEPTANCE GATES

- All Domain, Group, and Skill names and descriptions convey meaningful, non-duplicative semantics; no title-paraphrase or mechanical descriptions.
- **Metadata precedes prose:** Domain `Groups`, `Definition`, `Code`; Group `Skills`, `Definition`, `Code`; Skill `Definition`, `Code`; then an **unlabelled** descriptive paragraph. Do not write `Description:`.
- Every Skill denotes a distinct, **independently assessable** competency; this is an editorial granularity criterion, not runtime assessment data. The catalog does not prescribe evaluation methods, evidence or mastery criteria.
- **Subject ownership is demonstrated:** each subject Skill requires identifiable disciplinary concepts or mechanisms; a context-substitution test is applied. Generic data reading, source assessment and experimental procedures are not made subject-specific by merely using thematic examples or wording. Cross-disciplinary ownership is an explicit review decision, never an automatic reassignment.
- Compound labels were reviewed using the A-without-B criterion; integration Skills are separately justified and multi-Skill Questions/Lessons do not automatically create an extra Skill.
- Unresolved split/merge or domain-placement decisions appear in a **separate visible editorial review**, with alternatives, rationale, status, and editor action; they are never silently applied as approved.
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

%DOMAIN_DESCRIPTION%

#### %GROUP_NAME%

Skills: %GROUP_SKILL_COUNT%
Definition: [Not implemented](#)
Code: [Not implemented](#)

%GROUP_DESCRIPTION%

##### %SKILL_NAME%

Definition: [Not implemented](#)
Code: [Not implemented](#)

%SHORT_OBSERVABLE_SKILL_DESCRIPTION%

~~~

## RESULT

Create or update the taxonomy Markdown document and, when editorial decisions exist, a **separate review document**:

~~~text
<PackageRoot>/
└── docs/
    └── skills/
        ├── taxonomy.md
        └── editorial-review.md  # required when editorial questions or decisions exist
~~~

- Keep `docs/skills/taxonomy.md` literal within the actual textbook package. Never write the file to monorepo-level `studio/` or a guessed `src/math/` location.
- Inspect an existing taxonomy before editing. Keep validated definitions and filenames stable; make significant splits/merges reviewable.
- Do not create individual entity files, IDs, code, curriculum, or lesson content in this phase.
- Report source references, final counts, separate Definition and Code file counts, **approved decisions and unresolved editorial choices**, and readiness for **Create Skill Definitions Skill**. Do not claim readiness if granularity decisions are open.

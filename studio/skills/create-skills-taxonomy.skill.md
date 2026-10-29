# Create Skills Taxonomy Skill

**Mandatory first action:** Read [Methodologist Persona](../personas/methodist.persona.md) in full. Adopt its professional judgment and role boundaries before researching, designing, or editing a taxonomy. Do not assume the persona has been loaded.

**Purpose:** Create or review the **permanent, canonical pedagogical source of truth** for one subject: an audience-independent Skills Taxonomy organized as **SkillDomain → SkillGroup → Skill**. Author the names, authoritative substantive descriptions, hierarchy, counts, and verified implementation links directly in `<PackageRoot>/docs/skills/taxonomy.md`. There is **no Create Skill Definitions stage, no per-entity Markdown Definition file, and no separate definition template**. Code implementation is a separate stage.

## NON-NEGOTIABLE START CONDITIONS

1. **Package root:** identify the real standalone textbook/application root, not the monorepo root. Inspect the actual repository rather than assuming an example path.
2. **Scope:** establish the subject, intended breadth, exclusions, working language and whether the taxonomy is new or an approved revision.
3. **Evidence:** examine credible subject references and any standards the editor explicitly requests; do not silently impose a country, age, grade, course sequence or national curriculum.
4. **Existing state:** inspect `<PackageRoot>/docs/skills/taxonomy.md`, existing `*.data.ts` source files, repository instructions including applicable `AGENTS.md`, and any existing **`<PackageRoot>/docs/history/skill-taxonomy-review.md`**. The history explains past decisions but cannot override the canonical taxonomy. Preserve approved identities, names, descriptions and placements unless explicitly authorized to revise them.

If a prerequisite is missing, report it accurately rather than inventing files or claiming unverified implementation.

## ENTITY DEFINITIONS — REQUIRED READING

Read [SkillDomain](../docs/entities/skill-domain.md), [SkillGroup](../docs/entities/skill-group.md) and [Skill](../docs/entities/skill.md) in full. A Skill is an independently assessable competency; the taxonomy never stores grades, assessment evidence, learner progress or mastery data.


## TEXTBOOK-LOCAL IDENTITY

Follow [Skill entity ownership](../docs/entities/skill.md): a textbook's taxonomy and Skill IDs are **local to that textbook**. Overlapping competencies in other textbooks **are allowed** and must not trigger forced deduplication, cross-textbook ID reuse, a centralized registry, or shared analytics. Audit redundant or compound competencies **within the selected textbook** as usual; looking at other subjects for useful context is optional, not an identity requirement.

## TAXONOMY VS. CURRICULUM — NO LEARNING-DEPTH CEILING

The taxonomy identifies **which distinct competencies exist** in the approved subject scope. It **does not prescribe a maximum or minimum depth of mastery**, nor mandate an age, grade, proficiency target, teaching method or implementation level. **Curriculum determines learning depth, expected outcomes, selection, prerequisites and sequence** for its audience; Lessons and Assessments implement those decisions.

Do not reduce a rich competency to mere recognition or conceptual awareness because learners are young; likewise, do not demand full production-grade implementations automatically. Preserve independently meaningful abilities across understanding, explanation, application, construction or analysis where editorially appropriate. For potentially advanced but relevant topics, seek explicit editorial scope review rather than silently deleting or weakening them. The inclusion of a Skill does not obligate every curriculum or learner to master it.

## OPERATING PROTOCOL

1. **Research:** establish the complete subject landscape, practical scope boundaries and uncertainty. Use references to check breadth rather than copying a syllabus.
2. **Decompose:** identify coherent Domains and Groups, then atomic observable Skills. Apply the A-without-B test from the canonical Skill entity rules. Commas and conjunctions signal candidates for review, not automatic splitting.
3. **Review:** discuss overlaps, missing competencies, accidental bundling and over-fragmentation. Separate A and B if independently meaningful; add an integration Skill C only when the relationship itself is independently assessable. A Lesson/Question covering A and B need not create C. Report unresolved choices **before** editing an approved hierarchy.
4. **Write authoritative descriptions in the taxonomy itself:** immediately after each Domain, Group and Skill heading's metadata, provide a substantive paragraph explaining **what the concept/competency means, what is included and what distinguishes it from neighboring entries**. Names identify; descriptions explain. A Description **must not repeat, paraphrase or mechanically expand the heading**, nor merely say that a Domain contains related Groups or a Group contains related Skills. For Skills, clarify the observable subject-specific competency, meaningful scope or distinguishing case; give a concrete example where it improves understanding, without turning the description into a lesson, grading rubric, question format or implementation plan. Every entry receives its own relevant description. Use ordinary prose below the heading: **never emit a `Description:` prefix**.
5. **Inspect actual implementation files:** when an entity is implemented and validated, link directly to its canonical `*.data.ts` file. The link text **must be the file's exact basename, including every suffix and the extension** (for example, `[kineticEnergy.data.ts](../../src/skillsTaxonomy/energy/kineticEnergy.data.ts)`, not `[kineticEnergy]` or `[kineticEnergy.data]`). If implementation is unverified, use exactly `[Not implemented](#)`. The link stands **alone, without `Code:` or any other label**. A reserved UUID, a parent map or a proposed path does not prove implementation.
6. **Author the canonical taxonomy** using the template below. Use accurate counts, link targets and current editorial scope. Do not create `*.skill.md`, `*.skill-group.md`, `*.skill-domain.md`, intermediate Definitions, or runtime code. A **single optional historical Review** may be created or appended **only** under the narrowly defined gate below, not as a second taxonomy.
7. **Verify and stop:** check every Domain/Group/Skill count, standalone package boundaries, all non-placeholder Code links, unique primary membership, title-description differentiation and unresolved issues. Return the taxonomy for an explicit editorial approval decision. Never silently assume approval. If a historical Review was changed, verify its dates, factual decisions, links and lack of duplication.

## CANONICAL OWNERSHIP

- **Taxonomy Markdown:** permanent editorial single source of truth for pedagogical names, scope, distinctions, descriptions and Domain → Group → Skill membership.
- **TypeScript Data/IDs:** implementation authority for UUIDs, localized runtime names, typed configs, direct-child ID dictionaries and exports. The existing Engine does not have a `description` field; **do not duplicate descriptions in TypeScript** or add undocumented runtime metadata.
- **Implementation link in taxonomy:** one unlabeled Markdown link per entity, with exact full filename (including suffixes and extension) as the link text when implemented, or exactly `[Not implemented](#)` otherwise. Never prefix that link with `Code:`. There is **no Definition link, separate Definition count or editorial Status on individual entities**.
- **Approval:** a human editorial review gate on the taxonomy or a substantive revision, not a duplicated `Status: Draft/Approved` field on hundreds of documents. Once approved, downstream work must not rename, split, merge or rearrange without explicit review.
- **Curricula and Lessons:** reference the canonical taxonomy; they own sequencing, teaching context, prerequisites and assessment choices, not the Skill catalog.

### Metadata before descriptions

Keep every entity's metadata together directly after its heading. Order is **Domain:** `Groups · Skills` → standalone implementation link → prose; **Group:** `Skills` → standalone implementation link → prose; **Skill:** standalone implementation link → prose. Present substantive descriptions as unlabeled Markdown paragraphs, never as `Description:` fields, and never interrupt metadata with a description. Do not reintroduce `Definition` links: the taxonomy itself is the permanent editorial definition, and the single standalone implementation link is its only per-entity artifact link.

## SKILL TAXONOMY REVIEW — OPTIONAL DATED HISTORY, NOT ANOTHER TAXONOMY

Follow the **mandatory dated-history policy** in [Methodologist Persona](../personas/methodist.persona.md) before touching any Review. There is exactly **one default history document for this subject**:

```text
<PackageRoot>/docs/history/skill-taxonomy-review.md
```

Title: **Skill Taxonomy Review**. Keep the **original review date** and append subsequent agreed decisions under their actual dates. This historical file is **not** a per-Skill Definition, does not replace `docs/skills/taxonomy.md` and does not determine runtime IDs.

**First decide whether to write history:**

- **Existing history:** read and **append to the same file only if** this review produced a genuinely new editor-approved agreement, rationale or reversal. Prefer a short dated addendum that references the earlier decision; do not rewrite the past or duplicate the taxonomy's current descriptions.
- **No history:** do **not** create one for a first taxonomy, a routine item-level or incremental editorial review, a title/description correction, or a PR update. Creation is warranted only if (a) the existing taxonomy has a substantially earlier **original date**, the corresponding textbook has **actually been implemented**, and the editor is now conducting a substantive redesign of that earlier generation; (b) the editor **explicitly identifies a new textbook generation**; or (c) the editor **expressly requests a dated historical decision record**. Verify the underlying conditions in source files and the brief, not from assumed elapsed time or confidence.
- **New generation with a history already present:** **append a dated generation section** to the existing Review by default. A separate version-scoped Review is an **explicit editor exception**, not automatic version-per-review output; follow the Persona's generation naming rule.
- **Any unresolved question:** present it to the editor separately. Never record an agent proposal as an agreed outcome, create an extra history document to avoid the approval gate, or change approved taxonomy entries merely to match a historic decision.

**Record format:** factual `YYYY-MM-DD` decision, affected Domain/Group/Skill names, alternatives actually considered, editor's decision, the concrete rationale, any later supersession and links to the canonical taxonomy/PR or sources. Preserve earlier dates and rationale. Do **not** include a chronological agent work log, fake progress, guessed approvals, repetitive inventories, TODO lists or complete lesson-story material; those belong in their respective canonical artifacts.

**Handoff:** State whether the existing history was **updated**, a **qualified new Review** was created, or **no history file** was warranted, and why. The ordinary result is still exactly **one canonical `taxonomy.md`**. History is a rare archival exception, not a required second output.

## QUALITY AND ACCEPTANCE GATES

- Textbook-local Skill identities remain independent; cross-textbook overlap is permitted, while within-textbook duplication is audited.
- No taxonomy-imposed grade-linked learning-depth ceiling, blanket conceptual-only rule or compulsory implementation level; these outcomes belong to Curriculum.
- **Neither a Skill name nor its canonical description may prescribe learning depth or mode** (such as “only on a model”, “without formulas”, “for grades 1–3” or “recognition only” as an imposed ceiling). Descriptions explain substantive physical or other subject competency; Curricula select depth, formalism, teaching method and assessment expectations.
- Names and descriptions are **semantically different**: the description materially explains the name's subject content and boundaries and is not a tautology.
- Each Skill is distinct and independently assessable; compound candidates use the A-without-B review rule.
- Editorial uncertainties and source coverage limitations are reported separately; never fabricate a numeric standards-coverage percentage from catalog counts.
- Domain/Group/Skill counts reconcile at every hierarchy level; membership is unique and matches any approved existing catalog.
- Each entry has one verified, unlabeled implementation link showing the full filename (suffixes and extension included), or exactly `[Not implemented](#)`; Code counts report actual implementations, not file names guessed from the taxonomy.
- No old per-entity Definition references, UUIDs, grade assignments, runtime IDs or fake `Status` fields occur in the taxonomy.
- Markdown descriptions do **not** start with `Description:` and always follow all of the entity's metadata (any Group/Skill counts and the standalone implementation link).
- The **only canonical authoring artifact** is `docs/skills/taxonomy.md`. No TypeScript, curricula, lessons, individual Skill Markdown or invented templates; the optional `docs/history/skill-taxonomy-review.md` may be created/updated **only** under the explicit history gate above.

## TAXONOMY TEMPLATE

Repeat the following blocks for each Domain, Group and Skill. Replace placeholders with substantive, *non-duplicative* prose and independently verified implementation paths. Implemented link labels must use the exact filename including suffixes and extension; never prepend a field label to a Markdown link. The template is embedded; do not create another template file.

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

[Not implemented](#)

%SUBSTANTIVE_DOMAIN_DESCRIPTION_NOT_A_RESTATEMENT_OF_NAME%

#### %GROUP_NAME%

Skills: %GROUP_SKILL_COUNT%

[Not implemented](#)

%SUBSTANTIVE_GROUP_DESCRIPTION_EXPLAINING_SCOPE_AND_BOUNDARIES%

##### %SKILL_NAME%

[Not implemented](#)

%SUBSTANTIVE_SKILL_DESCRIPTION_CLARIFYING_MEANING_AND_DISTINCTION%
~~~

## RESULT

Create or update **exactly one canonical taxonomy file** in the selected textbook package (a history file is separately optional and strictly gated):

~~~text
<PackageRoot>/
└── docs/
    └── skills/
        └── taxonomy.md
~~~

Keep validated code references and editorial decisions stable. Deliver source references, final Domain/Group/Skill counts, verified Code counts, suspicious combined competencies, unresolved editor decisions, and a concise declaration of whether a qualifying dated Review was appended/created or no historical file was warranted. The **next authorized stage after approval** is [Implement Skill Code](./implement-skill-code.skill.md), not a Definition-generation step.

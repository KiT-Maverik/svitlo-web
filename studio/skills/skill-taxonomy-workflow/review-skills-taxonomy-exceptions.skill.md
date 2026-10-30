# Skills Taxonomy Exception Review Skill

Read [Skill Taxonomy Workflow](./README.md). This is the independent **exception review** stage, not a complete formal approval certificate.

**Mandatory first action:** Read the [Methodologist Persona](../../personas/methodist.persona.md) **in full** and adopt its pedagogical judgment and role boundaries. Do not assume the persona is already loaded.

**Purpose:** Conduct a critical, **read-only exception review** of one textbook's editorial staging Skills Taxonomy. Detect suspicious distribution, granularity, duplication, naming, hierarchy, descriptions, and subject coverage; give the editor concrete decisions to review. This Skill is an independent quality gate, **not** another taxonomy generator, automatic rewrite, or demand to equalize catalog sizes.

## REQUIRED INPUTS AND READING

1. Identify the actual textbook package root and read the complete `<PackageRoot>/docs/skills/taxonomy.md`. Inspect the current repository state and applicable `AGENTS.md`; do not audit a remembered or outdated catalog.
2. Read [Create Skills Taxonomy](./create-skills-taxonomy.skill.md) to understand the editorial taxonomy, its scope and canonical Markdown contract.
3. Read the entity definitions [SkillDomain](../../docs/entities/skill-domain.md), [SkillGroup](../../docs/entities/skill-group.md) and [Skill](../../docs/entities/skill.md) **in full**. In particular, Skill = smallest practically meaningful, **independently assessable competency**.
4. Read the subject's agreed scope and boundaries, the applicable [Subject Proposition](../../Subject%20Proposition.md), and any existing dated taxonomy history when relevant. Existing history is context, never a substitute for the staging document.
5. Use credible subject references or named standards when they materially help assess breadth; identify which recommendations are sourced and which are editorial judgments. Do not impose an unrequested national curriculum or grade.

If the staging taxonomy is missing, inspect the implemented Code catalog and report whether no staging entries remain. If an authoring review was specifically requested, report that blocker rather than inventing entries or computing pretend statistics.

## EXCEPTION AUDIT

Inspect **every Domain, Group and Skill**, both headings and substantive descriptions. Perform the following checks; a heuristic match is a **review candidate**, not automatically a defect.

### 1. Distribution asymmetries

- Recompute actual Domain/Group/Skill totals, child counts and the spread of Skills per Domain and per Group; compare them with all declared counts.
- Highlight **substantial** outliers, unusually broad or sparse branches, and inconsistent granularity among *semantically comparable* areas. Give actual counts and context.
- Ask whether an imbalance reflects a legitimately larger discipline, over-fragmentation, omitted competencies, a misplaced Group, or two Domains inadvertently merged.
- **Never enforce equal-sized Domains/Groups, fixed minimum child counts, numeric quotas or arbitrary asymmetry thresholds.** A Group with one Skill and a Domain with many Groups can both be valid.

### 2. Skill identity, atomicity and appropriate granularity

- Check each Skill against the [Skill](../../docs/entities/skill.md) definition: a recognizable, reusable, independently assessable ability, not merely an object/topic label, an entire subject, a lesson, a one-off Question, an exercise variant, or a UI interaction.
- Apply the **A-without-B test**: flag bundled independent competencies, missing foundational concepts hidden inside a comparison, and integration Skills without an independently justified relational ability.
- Look for the opposite error: several tiny Skills created solely from different materials, named locations, numeric inputs, map symbols, worked examples, or practice tasks of one competency. Do not classify an authentic ability such as `Create Maps` as "only a task" merely because it has practical assessments.
- Evaluate whether a broad title such as `Economic Geography` is better a SkillGroup than one Skill; do not promote/split/merge without semantic evidence.
- A conjunction or comma in a title is an **inspection signal**, not proof of a compound Skill. Two Skills may be used in one Lesson/Question without inventing a third integration Skill.

### 3. Duplicate and unnecessarily complex naming

- Detect **exact**, case/punctuation/spacing-normalized, near-synonymous and semantically redundant names among Domains, among Groups, among Skills, and **across hierarchy levels**.
- Specifically flag a child that repeats its parent's whole meaning: Domain `Geographic Objects` → Group `Geographic Objects` is redundant if no additional distinction is stated.
- Check parent context for removable qualifiers and boilerplate. Example: within Domain `Geographic Objects`, prefer Group `Classification` over `Geographic Objects and Classification` if meaning stays unambiguous; `Land and Water` may be clearer than `Land and Water Geographic Features`.
- Flag long inventories, repeated "geographic", "skills", "objects", etc. and titles that paraphrase their parent's description rather than distinguishing a subarea.
- **Preserve semantic precision**: a short name is not automatically better. Do not flag necessary shared terminology across genuinely distinct competencies as a duplicate. Proposed replacements must be unambiguous in their parent context, subject-appropriate and consistent with the document's language.

### 4. Classification, overlap and completeness

- Check whether each Group belongs under the most coherent Domain, each Skill has exactly one primary Group, neighboring Groups have understandable boundaries, and the Domain title actually describes all its children.
- Identify overlapping competencies expressed differently in separate branches, mismatched levels of abstraction, and missing foundational competencies required to interpret existing advanced ones.
- Compare subject coverage with the agreed scope. Subject standards are **gap-analysis evidence**, not mandatory Domain/Group names or automatic new Skills.
- Keep **Taxonomy → Skills; Lessons → teaching one or more Skills; Programs → choosing/sequencing Lessons** distinct. Program-specific requirements and factual examples generally do not dictate new Skill IDs. Cross-textbook overlap is allowed: flag duplication **within the selected taxonomy**, not shared concepts across different textbooks.
- Taxonomy has **no grade, age or maximum learning-depth ceiling**; do not delete an independently meaningful advanced competency merely because the first Program targets young learners.

### 5. Editorial and structural integrity

- Flag heading/description tautology, descriptions that provide no substantive scope, or descriptions contradicting their entity names or neighbors.
- Verify declared counts and the entity heading/metadata/description order from [Create Skills Taxonomy](./create-skills-taxonomy.skill.md). For taxonomy files authored with the current template, require exactly one explicit `Methodological description: ` and `User-friendly description: ` on each Domain, Group and Skill. The first must be substantive English; the second is an optional working-language draft value (using `[Not authored]` if absent). Historical unlabeled entries require a separately approved migration and must never be treated as ready-to-import English. Examine standalone implementation links only as evidence: verify actual targets and full filename link labels (including suffixes and extension) where implemented; otherwise expect exactly `[Not implemented](#)` without a `Code:` prefix. Do not invent runtime files or UUIDs.
- Identify factual uncertainty, unsubstantiated universality (e.g. a classification convention valid only in one country), and unsupported claims of reference/standard coverage.

## OUTPUT — PRIORITIZED EXCEPTION REPORT

Begin with the actual source and revision reviewed and a compact **Domain → Groups → Skills distribution table**. Report only material findings, grouped by severity (`high`, `medium`, `low`); do not manufacture findings to fill categories.

For each exception include:

1. **ID, category, severity and status**: confirmed inconsistency vs editorial question.
2. **Exact location**: Domain / Group / Skill heading(s) and a file location or stable anchor.
3. **Evidence**: current wording, comparable entries or actual counts; explain **why** this is suspect, not merely that it is unusual.
4. **Recommended disposition**: keep with rationale, simplify, rename, relocate, split, merge, add coverage, or ask the editor. Give a *minimal concrete alternative* where possible and identify trade-offs.
5. **Editorial decision needed**, where unresolved. Never present a proposed change as approved.

Conclude with **confirmed problems vs open choices**, missing subject coverage, verified counts, evidence limitations, and an ordered list of decisions for the editor. If the evidence supports an exception, report it even when it concerns the author's own prior work; if a flagged pattern is defensible, say so. Avoid duplicating the entire taxonomy or overwhelming the editor with every acceptable entry.

## CHANGE CONTROL

This is **review-only by default**: **do not modify** `taxonomy.md`, runtime Code, UUIDs, curricula, Lessons, Programs or create a separate review/history file. The [Methodologist Persona](../../personas/methodist.persona.md) tightly restricts when a dated historical review may exist; this exception report does not authorize one.

If the editor separately authorizes changes, use [Create Skills Taxonomy](./create-skills-taxonomy.skill.md) and its approval/history rules for the actual revision. Keep proposed vs approved decisions distinguishable; never imply the revised taxonomy is automatically approved.

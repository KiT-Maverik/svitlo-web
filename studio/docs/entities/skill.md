# Skill

**Entity category:** atomic, separately assessable competency used as a stable classification and analytics key.

A **Skill** names the smallest practically meaningful ability that can be **assessed independently**. This is a criterion for *designing the taxonomy*, **not** an instruction to store assessment rules or results in the Skill. The runtime entity stays minimal: it identifies *what ability* other entities may teach, test, or analyze. It does not teach, evaluate, track, or estimate learner mastery itself.

## EDITORIAL ATOMICITY AND GRANULARITY

Use these rules when deciding whether a **separate Skill identity** is justified:

1. Describe a recognizable, observable ability, not an entire subject, general lesson topic, exercise UI, or answer format. Prefer a meaningful action with a target (identify, compare, calculate, justify, construct). In taxonomy prose, explain the underlying distinction, mechanism or knowledge boundary instead of paraphrasing this title.
2. **A-without-B test:** can a learner meaningfully master A but not B? If so, would it be useful to refer to or evaluate the abilities separately? If both are true, model A and B as separate Skills.
3. **Comma/conjunction red flag:** names or descriptions combining abilities using commas, lists, `and/or`, `і/та/або`, etc., **must be reviewed** for accidental bundling. These are warning signs, **not automatic split instructions**. Multiple terms can still describe one coherent classification or relationship.
4. **Integration is optional and separate:** when A and B are distinct Skills, create a third integration Skill **only if understanding their relationship, selecting between them, or deliberately combining them is itself a distinct ability** worth identifying independently. Merely using A and B in one question or lesson **never requires** Skill C.
5. **Exercise variants are not new Skills:** changing numbers, presentation, hints, question format, or assessment method does not by itself change the ability. For example, a multiplication Skill need not be duplicated for a flashcard versus a drag-and-drop question.
6. Check semantic overlap, under-splitting, and over-fragmentation. **Do not silently split, merge, or rename ambiguous entities** during a taxonomy review. Report disputed cases with the proposed alternatives and reasons to the editor.

**Examples:**
- Multiplication and division can be **two** independent Skills, even if a learning unit uses both.
- An exercise involving addition **and** subtraction may refer to both Skill IDs; this does **not** justify creating a third Skill.
- Understanding the inverse **relationship** between addition and subtraction may justify an **additional** Skill if the editor decides it is a distinct assessable ability. It is not mandatory for every combined exercise.
- Identifying even and odd numbers can be one coherent classification ability despite the conjunction.
- `2 × 7` is a variant of an exercise, not its own Skill.

**Review handoff:** The Create Skills Taxonomy workflow must surface ambiguous compound Skills explicitly for discussion **before approval**. Once approved, the separate Create Skill Definitions workflow writes only a compact reference document; none of these editorial tests become stored fields.

## CLASSIFICATION, REFERENCES AND OWNERSHIP

- A Skill has **exactly one primary catalog parent**: a SkillGroup, or directly a SkillDomain if the Domain has no Groups and an editorial exception is justified. It may be reused by many Lessons, Questions, Flashcards, Practice tasks, Programs, Curricula and analytics views. Direct and grouped ownership must not be duplicated.
- **A Question or other assessment object can reference multiple Skill IDs** when it addresses multiple abilities. The relevant consumer or explicit relationship/mapping owns that association; no new combined Skill is needed.
- A Question referencing several Skills does **not** automatically create a separately valid mastery observation for every Skill. Evidence attribution, scoring, attempts and confidence belong to Assessment / Evidence / Progress / Analytics, not the catalog.
- A Lesson may teach one or several Skills; Curriculum/Program defines teaching sequence and prerequisites; the same Skill can be reused in different educational contexts.
- Grade, age, lesson IDs, question IDs, practice variants, hints, difficulty, prerequisites, learner history, mastery, scores, rubric, exercise type, and presentation are **not** Skill fields.
- The usual Domain → Group → Skill hierarchy (or exceptional Domain → Skill form) is for **catalog organization**, not a graph of dependencies, teaching sequence or learner proficiency.

Keep IDs stable across file moves, group changes or name/translation edits. Substantive splits, merges or semantic replacement require explicit editorial review, and existing analytics/progress may require a migration decision. Identical short basenames in different Groups do not imply identical Skills; UUID identifies the entity.

## DEFINITION AND RUNTIME CONTRACT

The **generated Markdown Definition** is deliberately short: entity name (`#` heading), editorial `Status`, concise `Description`, independently verified `Code` link. **Do not add** a `Competency`, `Boundaries` or `Evidence of Competency` section to individual Definition documents. Editorial review guidance lives **here**, not in every Skill Definition.

The current shared-engine `Skill_Config` contains `id` and localized `name`. The builder adds `collection`, while `fileLocation` is a separate registry/indexing concern (**not assumed implemented**). There is currently no runtime `description` field; the Markdown Description is editorial text, not an automatic UI property.

- **Definition:** human-readable compact Markdown document.
- **Code:** verified application `*.data.ts`, linked independently from Definition.
- Missing artifact: `[Not implemented](#)`. Stable UUID literals and ID dictionaries belong in `*.ids.ts`, not Markdown.

Related entities: [SkillGroup](./skill-group.md), [SkillDomain](./skill-domain.md).

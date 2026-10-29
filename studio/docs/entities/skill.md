# Skill

**Entity category:** atomic, independently assessable competency used as a stable classification and analytics key.

A **Skill** identifies the smallest practically meaningful ability that can be evaluated independently. This is a rule for **designing the editorial taxonomy**, not a command to embed assessment records or mastery status in the runtime entity.

## EDITORIAL ATOMICITY AND GRANULARITY

1. Describe a recognizable observable ability, rather than an entire subject, lesson topic, exercise UI or answer format.
2. **A-without-B test:** if A can meaningfully be mastered without B, and independently referring to or assessing A and B is useful, create separate Skills.
3. Conjunctions and lists in names/descriptions are **signals for editorial review**, not an instruction to split automatically; some combinations describe a single classification or relationship.
4. A third integration Skill C is justified only when choosing between A and B or understanding their relationship is independently meaningful. A Question or Lesson using both A and B does not automatically require C.
5. Changing numbers, media, presentation, hints or assessment mechanics normally changes a Question variant, not the Skill identity.
6. Never silently split, merge, rename or move an approved competency. Surface unclear cases for editorial review first.

**Examples:** multiplying and dividing may be independent; an exercise requiring both can reference both Skill IDs; explaining their inverse relationship may be a separate Skill only if explicitly warranted. Classifying even versus odd can be one coherent ability. `2 × 7` is an exercise variation, not a dedicated Skill.

## CLASSIFICATION, REFERENCES AND OWNERSHIP

- A Skill has one primary SkillGroup in the approved taxonomy and may be referenced across Lessons, Questions, Practice, Curricula, Programs and analytics.
- A multi-Skill Question does not automatically establish separate mastery evidence for each referenced Skill. Assessment attribution and scores belong to assessment/progress entities.
- Curriculum/Program owns sequencing and prerequisites; the taxonomy owns classification and conceptual descriptions.
- Age, school grade, teaching instructions, difficulty, exercise format, prerequisites, learner history, outcomes and scores are **not Skill fields**.
- UUID identity stays stable across changes to presentation, file path or translations. Semantic splits/merges may require explicit migration planning.

## CANONICAL PEDAGOGICAL SOURCE

`<PackageRoot>/docs/skills/taxonomy.md` is the **permanent, sole editorial definition** of the Skill: its human-readable heading, substantive non-duplicative explanation and place in the Domain → Group → Skill hierarchy. The explanatory prose appears immediately below the heading and implementation link **without a `Description:` label**. There are no per-Skill `*.skill.md` Definition files and no independent `Status` field.

Do not copy a Skill heading into its description. Explain the mathematical ability, scope, conceptual boundaries, and meaningful distinctions from neighbors. A concrete example may clarify what is included, but does not become a separate competency or assessment method.

The current shared-engine `Skill_Config` contains a stable `id` and localized `name`, not `description`. The builder adds `collection`; `fileLocation` belongs to separate indexing work, not assumed implemented. **Do not introduce a runtime description field** by copying taxonomy prose.

The taxonomy links to canonical `*.data.ts` via `Code` when fully implemented, otherwise `Code: [Not implemented](#)`. UUID literals and identity dictionaries belong in `*.ids.ts`, never Markdown.

Related entities: [SkillGroup](./skill-group.md), [SkillDomain](./skill-domain.md).

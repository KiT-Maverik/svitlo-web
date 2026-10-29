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

## MANDATORY EDITOR REVIEW: SKILL OR ASSESSMENT FORMAT?

A candidate is **not** a Skill merely because a learner can perform an observable action. A **Question / Practice task** is an instance of eliciting evidence; a **Skill** is the independently meaningful knowledge or capability such tasks are intended to assess. One Skill can be assessed by many question types, and one Question can draw on several Skills. A change of UI, visual medium, content example, or response format does not by itself establish an additional competency.

**Non-negotiable escalation:** If a proposed or existing Skill could instead be (a) sorting/matching/ordering/drag-and-drop, use of a key or diagram, or another Question/Scene procedure, (b) a comparison of two already defined concepts, (c) a narrower example of a broader Skill, or (d) a generic transferable procedure with a subject-themed example, the author **must raise a specific question for explicit human editorial review**. The author may recommend an outcome but **must not independently finalize** its creation, removal, renaming, merging or placement, even when the author is confident in that recommendation.

**Evidence to present:** candidate title and location; concrete Question/Practice example; underlying disciplinary knowledge; existing Skill(s) the task might assess; whether the capability would remain independently assessable with a different interaction; and alternative outcomes (**retain a standalone Skill / assess using existing Skills via Question / cross-subject Skill / further research**). Ask the editor which option to approve. Until the editor answers, mark the candidate `PENDING EDITOR DECISION`, preserve existing approved IDs, and block dependent code generation or claims of final taxonomy approval. See the mandatory gate in [Create Skills Taxonomy](../../skills/create-skills-taxonomy.skill.md).

**Biology editorial precedent (2026-10-29):** “Group mammals and reptiles into piles”, “choose a grouping criterion” and “apply a simple identification key” were removed as *separate Biology Skill IDs*, not as learning activities. Their Questions can assess existing animal-identification Skills. “Compare selection and genetic modification” reuses the two respective concept Skills; a predator-removal scenario can assess ecosystem interdependence. **Do not generalize this into an automatic ban on classification, identification keys, comparison or modeling:** a genuinely independent disciplinary competence may justify its own Skill if the editor approves the evidence.

## CLASSIFICATION, REFERENCES AND OWNERSHIP

- A Skill has exactly one primary catalog parent: ordinarily a SkillGroup, or exceptionally a SkillDomain with no Groups. It may be referenced across Lessons, Questions, Practice, Curricula, Programs and analytics without duplicate ownership.
- A multi-Skill Question does not automatically establish separate mastery evidence for each referenced Skill. Assessment attribution and scores belong to assessment/progress entities.
- Curriculum/Program owns sequencing and prerequisites; the taxonomy owns classification and conceptual descriptions.
- Age, school grade, teaching instructions, difficulty, exercise format, prerequisites, learner history, outcomes and scores are **not Skill fields**.
- UUID identity stays stable across changes to presentation, file path or translations. Semantic splits/merges may require explicit migration planning.

## CANONICAL PEDAGOGICAL SOURCE

`<PackageRoot>/docs/skills/taxonomy.md` is the **permanent, sole editorial definition** of the Skill: its human-readable heading, substantive non-duplicative explanation and place in the Domain → Group → Skill hierarchy (or the approved direct Domain → Skill exception). The explanatory prose appears immediately below the heading and implementation link **without a `Description:` label**. There are no per-Skill `*.skill.md` Definition files and no independent `Status` field.

Do not copy a Skill heading into its description. Explain the mathematical ability, scope, conceptual boundaries, and meaningful distinctions from neighbors. A concrete example may clarify what is included, but does not become a separate competency or assessment method.

The current shared-engine `Skill_Config` contains a stable `id` and localized `name`, not `description`. The builder adds `collection`; `fileLocation` belongs to separate indexing work, not assumed implemented. **Do not introduce a runtime description field** by copying taxonomy prose.

The taxonomy links to canonical `*.data.ts` via `Code` when fully implemented, otherwise `Code: [Not implemented](#)`. UUID literals and identity dictionaries belong in `*.ids.ts`, never Markdown.

Related entities: [SkillGroup](./skill-group.md), [SkillDomain](./skill-domain.md).

# SkillGroup

**Entity category:** catalog grouping.

A **SkillGroup** is a named category that organizes related Skills inside one SkillDomain. It is an organizational layer, not a lesson, assessment, learner result, or aggregate mastery status.

## SEMANTIC ROLE

- Name one coherent family of related Skill labels. Its taxonomy description must explain what unifies that family and distinguishes it from adjacent groups, rather than repeat its title.
- Use a short editorial description to distinguish it from other Groups.
- A Group contains Skills **through the taxonomy and code-level membership map**, not through a list embedded in its own Markdown Definition.
- Keep each Skill in one primary Group; external materials can reference a Skill from multiple contexts.
- Do not force a fixed number of Skills per Group or duplicate a child Skill's name as the Group name. If names overlap, give the Skill a **meaningful** qualifier reflecting the actual competency, not a mechanical “Basic” label.

The generated Group Definition is intentionally minimal: title, editorial Status, short Description, and separate Code link. **It must not enumerate its Skills** or define evaluation evidence, grades, progress, question formats, or curriculum sequencing.

## RUNTIME CONTRACT AND ARTIFACTS

The current shared-engine `SkillGroup_Config` contains `id`, localized `name`, and `skillIds` (explicit references to child IDs). These technical relationships remain in source code and do not encode teaching order or prerequisites. It currently contains no `description` property, so the Markdown description is editorial rather than an automatic UI field.

- **Definition:** the Group's concise Markdown catalog description.
- **Code:** a separate verified application source file.

Neither artifact replaces the other; use `[Not implemented](#)` for a missing target.

Related entities: [SkillDomain](./skill-domain.md), [Skill](./skill.md).

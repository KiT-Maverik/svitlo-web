# SkillDomain

**Entity category:** subject-wide catalog domain.

A **SkillDomain** is a broad, recognizable subject area containing semantically related SkillGroups. It organizes a catalog; it does not represent a course, educational level, learning sequence, assessment, or learner mastery record.

## SEMANTIC ROLE

- Choose a concise name that identifies a distinct field within the subject. Its taxonomy description must explain the field's scope, unifying concerns and boundaries; a title paraphrase is not sufficient.
- Give it a short editorial Description of the area it covers.
- Distinguish neighboring Domains by meaningful subject boundaries, without forcing uniform sizes or artificial minimum numbers of Groups. A Domain with a single coherent Group can be valid.
- Keep the Domain's membership and the hierarchy of Groups/Skills in the **taxonomy**, not in lists inside individual Markdown Definitions.
- Do not attach grades, prerequisites, teaching plans, scores, progress, or evaluation criteria to this entity.

A generated Domain Definition is intentionally minimal: title, editorial Status, short Description, and Code link. **It must not enumerate its SkillGroups.**

## RUNTIME CONTRACT AND ARTIFACTS

The current shared-engine `SkillDomain_Config` contains `id`, localized `name`, and `groupIds` (explicit references to child Group IDs). These technical relationships belong to source files and do not define prerequisite or instructional sequence. The contract currently has no `description` property; the Markdown description is editorial text.

- **Definition:** the Domain's concise Markdown catalog description.
- **Code:** a separate verified application implementation file.

Neither artifact replaces the other. Use `[Not implemented](#)` for a missing target.

Related entities: [SkillGroup](./skill-group.md), [Skill](./skill.md).

# SkillDomain

**Entity category:** subject-wide catalog domain.

A **SkillDomain** denotes a recognizable field within a subject and contains thematically coherent SkillGroups. It organizes the competencies catalog; it is not a course, grade, learning sequence, assessment or mastery record.

## SEMANTIC ROLE

- Give each Domain a distinct name and a **substantive description** of its concepts, scope and boundaries. The description must explain more than the heading and must not say only that this is an area with related Skills.
- Write the description and hierarchy **in-place in the canonical taxonomy**, not in a separate Markdown Definition file.
- Distinguish neighboring Domains pedagogically, without forcing balanced counts or fixed sizes. A single-Group Domain may be appropriate.
- The Domain's Group/Skill membership is a catalog classification, not teaching order, prerequisites or assessment metadata.

## RUNTIME CONTRACT AND ARTIFACTS

The shared-engine `SkillDomain_Config` has `id`, localized `name` and direct-child `groupIds`. It has no `description` property and stores no pedagogical or learner-progress data.

- **Editorial authority:** `<PackageRoot>/docs/skills/taxonomy.md` heading, explanatory paragraph and Group membership.
- **Code:** a verified application `*.data.ts` linked from the taxonomy, or `Code: [Not implemented](#)`.

Descriptions appear as ordinary text, never as `Description:` fields. There are no per-Domain Markdown Definition files or redundant editorial `Status` markers.

Related entities: [SkillGroup](./skill-group.md), [Skill](./skill.md).

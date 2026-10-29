# SkillDomain

**Entity category:** subject-wide catalog domain.

A **SkillDomain** denotes a recognizable field within a subject and contains coherent Skills either through meaningful SkillGroups or directly when no grouping is justified. It organizes the competencies catalog; it is not a course, grade, learning sequence, assessment or mastery record.

## SEMANTIC ROLE

- Give each Domain a distinct name and a **substantive description** of its concepts, scope and boundaries. The description must explain more than the heading and must not say only that this is an area with related Skills.
- Write the description and hierarchy **in-place in the canonical taxonomy**, not in a separate Markdown Definition file.
- Distinguish neighboring Domains pedagogically, without forcing balanced counts or fixed sizes. Prefer two or more truly distinct Groups when appropriate; a **single-Group Domain is strongly discouraged**, requiring an explicit editorial exception. With no meaningful internal grouping, attach Skills directly. **Do not mix direct Skills and Groups within one Domain.**
- The Domain's Group/Skill membership is a catalog classification, not teaching order, prerequisites or assessment metadata.

## RUNTIME CONTRACT AND ARTIFACTS

The shared-engine `SkillDomain_Config` has `id`, localized `name`, required `groupIds` and optional direct `skillIds`. A grouped Domain uses nonempty `groupIds`; a direct-Skill Domain uses `groupIds: {}` plus nonempty `skillIds`. The Domain builder validates the exclusive, nonempty mode and individual child UUIDs, but it does **not** prove cross-domain uniqueness or downstream registry, index, UI, ancestry or analytics support. These consumers require their own integration audit. There is no `description` property or learner-progress data.

- **Editorial authority:** `<PackageRoot>/docs/skills/taxonomy.md` heading, explanatory paragraph and Group membership **or direct Skill membership**.
- **Code:** a verified application `*.data.ts` linked from the taxonomy, or `Code: [Not implemented](#)`.

Descriptions appear as ordinary text, never as `Description:` fields. There are no per-Domain Markdown Definition files or redundant editorial `Status` markers.

Related entities: [SkillGroup](./skill-group.md), [Skill](./skill.md).

# SkillGroup

**Entity category:** catalog grouping.

A **SkillGroup** organizes one coherent family of related Skills inside a SkillDomain, where a meaningful subdivision is needed. A small cohesive Domain may instead attach Skills directly, without an artificial single Group. It is not a lesson, assessment, aggregate learner mastery value or course unit.

## SEMANTIC ROLE

- Name a meaningful family of abilities and distinguish it from neighboring Groups.
- Write a **substantive, standalone description directly in the canonical taxonomy**: clarify the shared subject matter, meaningful boundaries and why these Skills belong together. Simply repeating the Group name or writing “contains related Skills” is not a description.
- The taxonomy owns membership. Do not redundantly list children inside a separate Markdown Definition file; there is **no per-Group Definition file**.
- A grouped Skill belongs to one primary Group, while an exceptional direct-Domain Skill belongs to its Domain instead. Other educational materials may reference it without moving or duplicating it.
- Do not impose an arbitrary minimum number of children, grades or pedagogical order. A one-Skill Group may be valid inside a multi-Group Domain; an entire Domain containing **only one Group** is strongly discouraged unless independently justified.

## RUNTIME CONTRACT AND ARTIFACTS

The shared-engine `SkillGroup_Config` has `id`, localized `name` and a direct-child `skillIds` map. It does not contain `description`, teaching order, evaluation evidence or student progress.

- **Editorial authority:** `<PackageRoot>/docs/skills/taxonomy.md` heading, explanation and parent/child placement.
- **Implementation link:** a verified application `*.data.ts` file linked with its complete filename as the label, or exactly `[Not implemented](#)` as a standalone link without `Code:`.

Descriptions use plain prose with **no `Description:` prefix**, and per-entity editorial `Status` files are not created.

Related entities: [SkillDomain](./skill-domain.md), [Skill](./skill.md).

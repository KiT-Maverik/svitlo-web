# SkillGroup

**Entity category:** catalog grouping.

A **SkillGroup** organizes one coherent family of related Skills inside a SkillDomain, where a meaningful subdivision is needed. A small cohesive Domain may instead attach Skills directly, without an artificial single Group. It is not a lesson, assessment, aggregate learner mastery value or course unit.

## SEMANTIC ROLE

- Name a meaningful family of abilities and distinguish it from neighboring Groups.
- Before promotion, write a **substantive, standalone description in the staging taxonomy**: clarify the shared subject matter, meaningful boundaries and why these Skills belong together. Simply repeating the Group name or writing “contains related Skills” is not a description.
- The taxonomy owns membership. Do not redundantly list children inside a separate Markdown Definition file; there is **no per-Group Definition file**.
- A grouped Skill belongs to one primary Group, while an exceptional direct-Domain Skill belongs to its Domain instead. Other educational materials may reference it without moving or duplicating it.
- Do not impose an arbitrary minimum number of children, grades or pedagogical order. A one-Skill Group may be valid inside a multi-Group Domain; an entire Domain containing **only one Group** is strongly discouraged unless independently justified.

## RUNTIME CONTRACT AND ARTIFACTS

The shared-engine `SkillGroup_Config` has `id`, localized `name` and a direct-child `skillIds` map. It permits an optional transitional localized `description` (mandatory for promotion), but does not contain teaching order, evaluation evidence or student progress.

- **Editorial authority until migration:** `<PackageRoot>/docs/skills/taxonomy.md`; after reviewed migration, localized Code heading, explanation and parent/child placement.
- **Implementation link:** a verified application `*.data.ts` file linked with its complete filename as the label, or exactly `[Not implemented](#)` as a standalone link without `Code:`.

Descriptions use plain prose with **no `Description:` prefix**, and per-entity editorial `Status` files are not created.

Related entities: [SkillDomain](./skill-domain.md), [Skill](./skill.md).

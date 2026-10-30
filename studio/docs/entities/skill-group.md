# SkillGroup

**Entity category:** catalog grouping.

A **SkillGroup** organizes one coherent family of related Skills inside a SkillDomain, where a meaningful subdivision is needed. A small cohesive Domain may instead attach Skills directly, without an artificial single Group. It is not a lesson, assessment, aggregate learner mastery value or course unit.

## SEMANTIC ROLE

- Name a meaningful family of abilities and distinguish it from neighboring Groups.
- Before promotion, write a **substantive, standalone description in the staging taxonomy**: clarify the shared subject matter, meaningful boundaries and why these Skills belong together. Simply repeating the Group name or writing “contains related Skills” is not a description.
- The taxonomy owns membership. Do not redundantly list children inside a separate Markdown Definition file; there is **no per-Group Definition file**.
- A grouped Skill belongs to one primary Group, while an exceptional direct-Domain Skill belongs to its Domain instead. Other educational materials may reference it without moving or duplicating it.
- Do not impose an arbitrary minimum number of children, grades or pedagogical order. A one-Skill Group may be valid inside a multi-Group Domain; an entire Domain containing **only one Group** is strongly discouraged unless independently justified.

## EDITORIAL SLUG

Each new-format SkillGroup has one English `Slug: lowerCamelCase` immediately below its heading, unique among Groups of the same Domain. An approved slug remains stable across presentation changes; it is not the Group UUID or a new runtime `SkillGroup_Config` property. Preserve existing Code paths and UUIDs until an explicit migration is approved.

## RUNTIME CONTRACT AND ARTIFACTS

The shared-engine `SkillGroup_Config` has `id`, localized `name` and a direct-child `skillIds` map. It permits transitional optional `description: { methodological: string; fe?: Record<LanguageCode, string> }` (reviewed English methodological text required for promotion; fe absent or complete for all languages), but does not contain teaching order, evaluation evidence or student progress.

- **Editorial authority until migration:** `<PackageRoot>/docs/skills/taxonomy.md`; after reviewed migration, Code localized name, English methodological meaning, any optional full fe translations and parent/child placement.
- **Implementation link:** a verified application `*.data.ts` file linked with its complete filename as the label, or exactly `[Not implemented](#)` as a standalone link without `Code:`.

New-format records use separate single-line `Methodological description:` (English) and `User-friendly description:` (default `[Not authored]`) fields after the standalone link. Older unlabeled prose requires migration; there is no generic `Description:` field or per-entity editorial approval file. The current `Action: skip|create|update|delete` and `Status: pending|implemented` fields instead denote future generator intent and verified Code implementation.

Related entities: [SkillDomain](./skill-domain.md), [Skill](./skill.md).

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

The current `SkillGroup_Config` has `id`, fully localized `name` and a direct-child `skillIds` map. Its `description: { methodological: string; fe?: Readonly<Record<LanguageCode, string>> }` remains **optional** at runtime; reviewed English methodology is required for editorial promotion, and any supplied `fe` must cover every supported language with genuine copy. This differs from the runtime **Skill** contract, where both descriptions are required. There is no teaching order, evaluation evidence or student progress.

- **Editorial authority until migration:** `<PackageRoot>/docs/skills/taxonomy.md`; after reviewed migration, Code localized name, English methodological meaning, any optional full fe translations and parent/child placement.
- **Implementation link:** a verified application `*.data.ts` file linked with its complete filename as the label, or exactly `[Not implemented](#)` as a standalone link without `Code:`.

New-format records use separate single-line `Methodological description:` (English) and `User-friendly description:` (default `[Not authored]`) fields after the standalone link. Older unlabeled prose requires migration; there is no generic `Description:` field or per-entity editorial approval file. The editorial `Action: create|update|delete|skip` requests new Code / modification / explicitly authorized and dependency-checked deletion / no Code change. `Status: pending` means not fully verified; `Status: implemented` means complete verified implementation. The planned Markdown → Code generator updates Status only after validation; failures stay pending and do not block unrelated dependency-safe operations. Neither field is a runtime `SkillGroup_Config` property.

**Paths:** new Group Code belongs at `<PackageRoot>/Data/skills/<domainSlug>/<groupSlug>/`, where `<PackageRoot>` is the individual textbook root. Mathematics remains under legacy `learningApps/math/src/data/skillsTaxonomy/`; it has not been migrated. The one-language `User-friendly description:` is a draft, not a complete localized `description.fe` dictionary.

Related entities: [SkillDomain](./skill-domain.md), [Skill](./skill.md).

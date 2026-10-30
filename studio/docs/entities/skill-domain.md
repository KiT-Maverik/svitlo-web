# SkillDomain

**Entity category:** subject-wide catalog domain.

A **SkillDomain** denotes a recognizable field within a subject and contains coherent Skills either through meaningful SkillGroups or directly when no grouping is justified. It organizes the competencies catalog; it is not a course, grade, learning sequence, assessment or mastery record.

## SEMANTIC ROLE

- Give each Domain a distinct name and a **substantive description** of its concepts, scope and boundaries. The description must explain more than the heading and must not say only that this is an area with related Skills.
- Before promotion, write descriptions and hierarchy **in-place in the staging taxonomy**, not in a separate Markdown Definition file.
- Distinguish neighboring Domains pedagogically, without forcing balanced counts or fixed sizes. Prefer two or more truly distinct Groups when appropriate; a **single-Group Domain is strongly discouraged**, requiring an explicit editorial exception. With no meaningful internal grouping, attach Skills directly. **Do not mix direct Skills and Groups within one Domain.**
- The Domain's Group/Skill membership is a catalog classification, not teaching order, prerequisites or assessment metadata.

## EDITORIAL SLUG

Each new-format SkillDomain has one English `Slug: lowerCamelCase` beneath its heading, unique among Domains in the textbook. Keep approved slugs stable independently of translated display names; they are not UUIDs or new runtime `SkillDomain_Config` properties. Reconcile existing Code paths without silent renames.

## RUNTIME CONTRACT AND ARTIFACTS

The `@svitlo/contracts/taxonomy` `SkillDomain_Config` has `id`, localized `name`, required `groupIds` and optional direct `skillIds`. A grouped Domain uses nonempty `groupIds`; a direct-Skill Domain uses `groupIds: {}` plus nonempty `skillIds`. The Domain builder validates the exclusive, nonempty mode and individual child UUIDs, but it does **not** prove cross-domain uniqueness or downstream registry, index, UI, ancestry or analytics support. These consumers require their own integration audit. There is a transitional optional `description: { methodological: string; fe?: Record<LanguageCode, string> }`. Promotion requires a reviewed English `methodological` text; optional `fe` must be absent or complete for every supported locale. There is no learner-progress data.

- **Editorial authority until migration:** `<PackageRoot>/docs/skills/taxonomy.md`; after reviewed migration, Code localized name, English methodological explanation, optional complete fe copy and Group membership **or direct Skill membership**.
- **Implementation link:** a verified application `*.data.ts` file linked with its complete filename as the label, or exactly `[Not implemented](#)` as a standalone link without `Code:`.

New-format records use single-line `Methodological description:` (English) and `User-friendly description:` (default `[Not authored]`) fields after the standalone implementation link. Legacy unlabeled prose needs migration; there is no generic `Description:` field, per-Domain Definition file or additional editorial approval state. The new `Action: skip|create|update|delete` and `Status: pending|implemented` taxonomy fields instead describe future generator intent and verified Code implementation.

Related entities: [SkillGroup](./skill-group.md), [Skill](./skill.md).

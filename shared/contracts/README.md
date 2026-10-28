# @svitlo/contracts

Shared, framework-agnostic content, taxonomy, localization and persisted-state models.
This package is the **single source of truth** for stable assessment-method IDs,
supported locale definitions and the structural types used by both apps and shared packages.

- `@svitlo/contracts/content` — lesson, resource, question, quiz and assessment types and IDs
- `@svitlo/contracts/taxonomy` — Skill, SkillGroup, SkillDomain types
- `@svitlo/contracts/localization` — locale/language type declarations and standard locale descriptors
- `@svitlo/contracts/state` — persisted lesson and quiz state contracts

It has no React, MUI, Next.js or Engine dependencies. Validation, builders,
localization operations and presentation belong to Engine and UI Kit, respectively.

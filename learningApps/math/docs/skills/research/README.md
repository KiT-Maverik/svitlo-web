# Mathematics Skills — Research and Migration Audit

Status: Historical/editorial references, **not** an approved Skills Taxonomy or Skill Definitions.
Package root: `learningApps/math`.
Reviewed: 2026-10-28.

## Retained source material

- [Skills Inventory](./skills-inventory.md) — historical inventory of **285 candidate Skills**, **60 Groups**, and **13 Domains**; mostly the approximate Grade 1–3 scope. Its editorial identifiers, grade hints, status snapshots, and implementation remarks are **not** runtime Skill fields or a canonical approved taxonomy.
- [Inventory Audit](./skills-inventory-audit.md) — earlier international-coverage audit and suggested additions; retain dated findings as history, not as current approval.
- [Taxonomy Review](./skills-taxonomy-review.md) — earlier decomposition and outstanding atomicity/split-review questions.
- [UUID Migration](./UUID-MIGRATION.md) — historical editorial-to-runtime UUID correspondence; implementation IDs remain in `src/data/skillsTaxonomy/**/*.ids.ts`. This document is reference material, not a runtime registry.

These four documents were relocated from `src/` without rewriting their educational meaning. Corrected relative links are the only change to the historical inventory text.

## Compliance audit against current authoring Skills

**Stage 1 — Create Skills Taxonomy: pending.** The canonical `docs/skills/taxonomy.md` required by `studio/skills/create-skills-taxonomy.skill.md` does not yet exist. The inventory is grade-scoped, contains technical/editorial IDs, implementation status and grade guidance, and does not follow the new Domain → Group → Skill Markdown template with distinct Definition and Code links and verified per-level counts. Before authoring, review open compound-skill and coverage decisions from the linked audits; do not silently reinterpret or split Skills.

**Stage 2 — Create Skill Definitions: pending Stage 1 approval.** No approved per-entity Markdown Domain, Group or Skill Definitions are available in the expected `docs/skills/<domain>/<group>/skills/` authoring structure. Runtime `*.data.ts` files are **Code**, not editorial Definitions. The required Stage 2 input is an approved taxonomy.

**Stage 3 — Create Curriculum: pending Stages 1–2.** Existing Grade 1–4 documents and nested materials are under `docs/curriculum/`, rather than the new `docs/curriculums/<nameCamelCase>/<nameCamelCase>.curriculum.md` convention from `studio/skills/create-curriculum.skill.md`. Their structure, dated content, and Skill mappings require separate editorial review. Grade 1 currently references runtime Code instead of approved Markdown Skill Definitions. Do **not** rename/rewrite 800+ curriculum, module and lesson documents in this Markdown relocation task.

## Repository verification and limits

- The current `src/data/skillsTaxonomy/` tree contains **13 Domain**, **60 Group** and **285 individual Skill** `*.data.ts` source files by path count. This confirms file presence **only**, not a passing build, localization completeness, editorial approval, or reference integrity.
- Older implementation totals inside `skills-inventory.md` (including intermediate 19/154-file figures) do not match the current source-file count. They are preserved for historical context, **not validated as current status**.
- Repaired historical broken Markdown links from the Grade 1 curriculum to actual runtime source files, and from Grade 2–4 documents to the moved inventory and UUID map. This is link maintenance, **not curriculum validation or approval**.
- This migration does not change runtime data, UUIDs, source code, lesson order, educational competencies, or the subject scope. Future work must proceed in the agreed order: **Taxonomy → Definitions → Curriculum**.

Canonical workflow references: `studio/skills/create-skills-taxonomy.skill.md`, `studio/skills/create-skill-definitions.skill.md`, `studio/skills/create-curriculum.skill.md`.

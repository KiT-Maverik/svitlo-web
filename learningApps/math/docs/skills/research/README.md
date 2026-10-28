# Mathematics Skills — Editorial Archive

Status: **historical source material**. The approved mathematics hierarchy is now maintained in the canonical [Skills Taxonomy](../taxonomy.md), not in the old inventory.

## Canonical catalog

- [Skills Taxonomy](../taxonomy.md): **13 SkillDomains, 60 SkillGroups, 285 Skills**, with independent, verified Definition and Code links.
- The corresponding 358 Markdown Definition documents follow the templates of `studio/skills/create-skill-definitions.skill.md`; they are marked **Draft** for a separate editorial description review, **not** because the approved taxonomy or source code is incomplete.
- Each corresponding Domain, Group and Skill has a canonical `*.data.ts` implementation. Stable runtime UUIDs remain in `src/data/skillsTaxonomy/**/*.ids.ts`; there is no longer a parallel UUID migration document.

## Historical research records

- [Skills Inventory v0.6](./skills-inventory.md): source descriptions and former editorial IDs used to preserve the approved structure. Dated status counts, grade hints and references to earlier implementation phases are historical snapshots.
- [Skills Inventory Audit](./skills-inventory-audit.md): earlier coverage comparison and proposed additions; retained for provenance, not as a list of unapproved current Skills.
- [SkillGroup Taxonomy Review](./skills-taxonomy-review.md): earlier grouping decisions and discussion candidates; retained for provenance, not authorization to split or merge the approved hierarchy.

These documents **do not supersede** the canonical taxonomy. Old semantic identifiers and grade hints do not belong to canonical Markdown Definitions or to the runtime entity schema.

## Separate Curriculum format work

Grade 1–4 curricula currently reside in `docs/curriculum/` (not yet the `docs/curriculums/<nameCamelCase>/<nameCamelCase>.curriculum.md` convention in `studio/skills/create-curriculum.skill.md`). They link to the canonical Skills Taxonomy, but their relocation and broader module/lesson rewrite remain a **separate editorial migration**, not a change to approved Skill membership.

## Verification scope

- Verified file-level correspondence between the inventory, static UUID dictionaries and actual source files while constructing the taxonomy and Definitions. Markdown Definition status is an editorial review flag and must not be equated with runtime implementation.
- No runtime code, IDs, group membership or curriculum sequence changed during this taxonomy documentation migration.

Authoring workflows: `studio/skills/create-skills-taxonomy.skill.md`, `studio/skills/create-skill-definitions.skill.md`, `studio/skills/create-curriculum.skill.md`.

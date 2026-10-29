# Skill Taxonomy Workflow

**Status:** staged transition to a single Code source of truth. Approved editorial Markdown must not be destroyed before lossless, reviewed migration.

## THE FIVE STAGES

1. **[Create Skills Taxonomy](./create-skills-taxonomy.skill.md)** — Methodologist authors an initial or additional draft catalog under `<PackageRoot>/docs/skills/taxonomy.md`; resolves Scope/Skill identity and preserves approved earlier decisions. The editable Markdown holds only **not-yet-promoted** entities and parent scaffolding necessary to represent them.
2. **[Skills Taxonomy Exception Review](./review-skills-taxonomy-exceptions.skill.md)** — independent Methodologist Persona audit of full draft scope and semantic issues. **This is read-only and does not confer editorial approval**. Record any editor decisions through the approved authoring/history gate.
3. **[Implement Skill Code](./implement-skill-code.skill.md)** — Coding Agent implements accurate local `SkillDomain`, `SkillGroup`, `Skill` objects and IDs with all supported locale names **and substantive descriptions**. Existing legacy objects without descriptions remain unpromoted until migration. Do not silently synthesize translations from names.
4. **[Migrate Implemented Taxonomy](./migrate-implemented-taxonomy.skill.md)** — independently compare every staging entry against its verified code object and every supported translation, meaning, description and parent/child membership. Only remove a fully verified item once the editor approves its promotion. Never lose unimplemented descendants.
5. **[Generate Skills Taxonomy](../../../scripts/generate-skills-taxonomy.mjs)** — optional, repeatable, **read-only-from-Code** generation of a localized Markdown view in `<PackageRoot>/docs/generated/skills/taxonomy.<locale>.md`. Default `en`. Generated material is not authoring input.

## SOURCE OF TRUTH BY STAGE

- **Before promotion:** the approved `docs/skills/taxonomy.md` is the editorial authority for outstanding, not-yet-migrated entries and required hierarchical scaffolding. The code objects, if already present but incomplete, do **not** supersede the approved prose.
- **After individual promotion:** the verified `*.data.ts` object is authoritative for ID, localized name, localized description, immediate catalog membership and the code representation of the entity. Its Markdown definition must not be re-authored in the staging catalog. Git history preserves the original drafting work.
- **After complete promotion:** `docs/skills/taxonomy.md` may be removed **only if no unpromoted entries or unresolved editor decisions remain and the full Code catalog regenerates without errors**. Generated documents remain derived assets; never edit them by hand.
- **Mixed state:** a parent Domain/Group heading can remain as a *container* for not-yet-promoted children. Do not remove this scaffold or orphan children. Its displayed description is temporary editorial context until its whole subtree can be safely represented via Code.
- **Approval:** human editor approves semantic/translation migration; compiler presence, 27 dictionary keys and link existence alone cannot prove correct translation or same meaning.

## CONTRACT AND COMPATIBILITY

The `@svitlo/contracts/taxonomy` configs permit **optional** `description: Readonly<Record<LanguageCode, string>>` during migration for backward compatibility. It is **mandatory for any entity that is promoted**. Engine builders reject malformed/non-complete supplied descriptions. The metadata is taxonomy semantics, **not** a lesson, assessment, grade, mastery or explanation of a task variant.

For a fully migrated Code taxonomy:

```sh
node scripts/generate-skills-taxonomy.mjs --package learningApps/math
node scripts/generate-skills-taxonomy.mjs --package learningApps/math --locale uk
```

The generator deliberately **fails** if any Code entity lacks a name or description for a supported language. Existing Mathematics code is not complete in that sense; do not represent the generator as already succeeding. It statically reads `*.data.ts` objects, without executing arbitrary textbook modules, and derives the display hierarchy from the established source directory convention. Validate the graph/ID relationships separately during promotion and build checks.

## NO-LOSS RULES

Before changing any staging taxonomy record: preserve exact approved semantic meaning; verify source links; reconcile actual Code UUID and parent; verify locale roster at runtime contract; verify translation quality, not merely presence; inspect all downstream users; keep reportable evidence and editor approval; commit an auditable diff. If any check fails, retain the record. Do not auto-delete all implemented-looking entries. Do not remove archived originals in `studio/skills/Obsolete`; they are marked as historical.

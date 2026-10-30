# Skill Taxonomy Workflow

**Status:** staged transition to a single Code source of truth. Approved editorial Markdown must not be destroyed before lossless, reviewed migration.

## PATHS AND DIRECTIONAL BOUNDARIES

The editable taxonomy is `<PackageRoot>/docs/skills/taxonomy.md`. The canonical destination for **new Markdown → Code output** is `<PackageRoot>/Data/skills/`, where `<PackageRoot>` means the individual textbook package, **not** the monorepo. Use approved English lowerCamelCase slugs for file/directory stems and preserve stable IDs.

Mathematics still has legacy Code in `learningApps/math/src/data/skillsTaxonomy/`; **no migration to `Data/skills/` has occurred**. Do not silently select between populated source roots or treat legacy compatibility as migration. Source-root selection for the new Code → Markdown path remains a separate tooling integration requirement.

Markdown → Code consumes the approved **editable** taxonomy for authorized operations. Code → Markdown is a **distinct, read-only generator** producing derived localized views; it does not recover editorial `Slug`, `Action`, or `Status` metadata and must never overwrite the editable source.

## THE FIVE STAGES

1. **[Create Skills Taxonomy](./create-skills-taxonomy.skill.md)** — Methodologist authors an initial or additional draft catalog under `<PackageRoot>/docs/skills/taxonomy.md`; resolves Scope/Skill identity and preserves approved earlier decisions. The editable Markdown holds only **not-yet-promoted** entities and parent scaffolding necessary to represent them.
2. **[Skills Taxonomy Exception Review](./review-skills-taxonomy-exceptions.skill.md)** — independent Methodologist Persona audit of full draft scope and semantic issues. **This is read-only and does not confer editorial approval**. Record any editor decisions through the approved authoring/history gate.
3. **[Implement Skill Code](./implement-skill-code.skill.md)** — Coding Agent implements approved Domain/Group/Skill entities and stable IDs under the textbook-local `Data/skills/` hierarchy, with complete localized names, English `description.methodological` and mandatory fully localized Skill `description.fe`. Group/Domain `fe` remains optional. The planned Markdown → Code generator requires dry-run, authorized apply and entity-level results; this is a specification, not a currently implemented command.
4. **[Migrate Implemented Taxonomy](./migrate-implemented-taxonomy.skill.md)** — independently compare every staging entry against verified Code, all required names and Skill frontend translations, the English methodological meaning, optional Group/Domain frontend translations and exact parent/child membership. Only remove a fully verified item once the editor approves its promotion. Never lose unimplemented descendants.
5. **[Generate Skills Taxonomy](../../../scripts/generate-skills-taxonomy.mjs)** — separate, optional, repeatable **read-only Code → Markdown** generation of Markdown with localized names, complete localized Skill user-friendly descriptions (available Group/Domain frontend copy), and canonical English methodological prose in `<PackageRoot>/docs/generated/skills/taxonomy.<locale>.md`. Default `en`. Generated material is not authoring input.

## SOURCE OF TRUTH BY STAGE

- **Before promotion:** the approved `docs/skills/taxonomy.md` is the editorial authority for outstanding, not-yet-migrated entries and required hierarchical scaffolding. The code objects, if already present but incomplete, do **not** supersede the approved prose.
- **After individual promotion:** the verified `*.data.ts` object is authoritative for ID, localized name, English methodological description, any approved complete fe copy, immediate catalog membership and the code representation of the entity. Its Markdown definition must not be re-authored in the staging catalog. Git history preserves the original drafting work.
- **After complete promotion:** `docs/skills/taxonomy.md` may be removed **only if no unpromoted entries or unresolved editor decisions remain and the full Code catalog regenerates without errors**. Generated documents remain derived assets; never edit them by hand.
- **Mixed state:** a parent Domain/Group heading can remain as a *container* for not-yet-promoted children. Do not remove this scaffold or orphan children. Its displayed description is temporary editorial context until its whole subtree can be safely represented via Code.
- **Approval:** human editor approves semantic/translation migration; compiler presence, locale-key counts and link existence alone cannot prove correct translation or same meaning.

## EDITORIAL SLUGS AND IMPLEMENTATION METADATA

For newly authored or deliberately migrated staging taxonomies, `Slug: lowerCamelCase`, `Action: skip|create|update|delete`, and `Status: pending|implemented` appear in that order directly below each Domain, Group and Skill heading, before counts and the standalone Code link. The template defaults to `Action: skip` and `Status: pending` for new unimplemented entries. `Slug` is a stable English lowerCamelCase Code directory/filename identifier, not a UUID. `Action: create` requests a new implementation; `Action: update` requests changes to an existing entity; `Action: delete` requests deletion subject to **explicit authorization and dependency checks**; `Action: skip` leaves Code unchanged. `Status: pending` means implementation is not yet verified; `Status: implemented` means complete and verified Code. A planned Markdown → Code generator updates Status only after successful verification of each operation; failed or invalid entities remain pending, without blocking unrelated valid work. Neither Action nor Status is a runtime Skill/Group/Domain property or itself grants permission. A skipped entry stays in the taxonomy and counts, and a delete action requires separate explicit human approval and dependency checks. Domain slugs are unique within the textbook; Group slugs within their Domain; Skill slugs within their Group, or among direct Skills in their Domain. Preserve approved slugs across display-name changes. Slugs are editorial identifiers, not UUIDs or additional runtime `Skill*_Config` fields. Existing slugless documents remain legacy. The Code-to-Markdown generator intentionally omits `Slug`, `Action` and `Status`: these are editorial authoring/implementation-planning metadata, not Code entity fields. Its Code → generated Markdown → parsed-view test proves preservation of fields **stored in Code**, not restoration of the editable editorial template or its slug/action/status mapping. Do not mistake the derived view for a replacement authoring document.

## PLANNED MARKDOWN → CODE: SAFETY AND LOCALIZATION GATES

This is the expected behavior of the **separate, planned** Markdown → Code generator; no new CLI or script is asserted to exist. Select the textbook package and `<PackageRoot>/Data/skills/` explicitly. First perform a **non-mutating dry-run**: parse entity metadata, propose exact create/update/delete/skip actions, validate stable UUIDs and parent dependencies, identify missing locales, and report intended Code and editorial changes. Apply requires an **explicit authorized operation**, not preview alone. Deletion requires additional explicit permission and inspection of inbound references, IDs, exports and consumers; it must never cascade implicitly.

Process independent valid entities even when others are invalid. Commit only dependency-safe operations: never leave a parent mapped to a missing child. Produce **structured per-entity diagnostics** (entity and path, Action, proposed/resulting state, missing locales, reference failures, warnings and blockers), plus aggregate succeeded/blocked/skipped counts and an honest partial-success report. After a successful and complete verification, update that entity's `Status` safely to `implemented`, with a verified Code link/count where relevant; a failed entity remains `pending`. Reconcile authorized deletion with the editor-approved removal or pending status rather than leaving a false `implemented` status or broken link. Preserve `Action`, names, hierarchy, methodological and frontend prose; do not alter unrelated entities.

A single English `User-friendly description:` in the editable template is **not** a complete `description.fe` dictionary. Before implementing or promoting a Skill, require substantive English `description.methodological`, full and genuine translated `name` values, and **real, reviewed** `description.fe` for every currently supported language. Incomplete locales block that Skill and must be named in diagnostics. Never invent translations, fill gaps with copied English or silent fallback, or generate incomplete runtime Skills. For SkillGroup and SkillDomain, `description.fe` is optional but must be complete when supplied. Translation presence and semantic quality require separate checks.

## CONTRACT AND COMPATIBILITY

`Skill_Config` requires `description: { methodological: string; fe: Readonly<Record<LanguageCode, string>> }`: Skills need reviewed English methodology **and** student-facing copy in every supported locale. `SkillGroup_Config` and `SkillDomain_Config` retain transitional optional descriptions; if a Group/Domain supplies `fe`, it must cover every locale. The runtime builders validate these requirements. Code-to-Markdown reads TypeScript source via AST without running the TypeScript checker, so it independently rejects Skills lacking `description.fe` rather than silently omitting the text. Never generate partial dictionaries or fallback text. Type checks and presence tests do not establish translation quality; that requires editorial review. Descriptions are taxonomy semantics, not learning-depth limits, questions or mastery data.

For the **existing legacy Mathematics Code → Markdown** generator (real commands; not Markdown → Code or new-root support):

```sh
node scripts/generate-skills-taxonomy.mjs --package learningApps/math
node scripts/generate-skills-taxonomy.mjs --package learningApps/math --locale uk
node scripts/generate-skills-taxonomy.mjs --package learningApps/math --locale uk --stdout
node scripts/generate-skills-taxonomy.mjs --package learningApps/math --locale uk --check
npm run test:taxonomy-generator
```

The generator deliberately **fails** for missing localized names or English methodology and for missing or incomplete Skill frontend descriptions; Group/Domain frontend dictionaries remain optional but must be complete when present. Mathematics now has **13 Domains, 60 Groups and 277 Skills** in Code; its staging `learningApps/math/docs/skills/taxonomy.md` was removed following the approved editorial migration and must not be recreated. The generator statically reads `*.data.ts` source without executing textbook modules and derives hierarchy from source directories. `--stdout` previews without writes, `--check` compares a previously generated file byte-for-byte and fails on drift, and normal generation writes only changed content. They cannot be used together. The dedicated regression suite checks the real Code catalog for each supported locale, correct counts, hierarchy, source links, labels, methodological meaning and user-friendly copy. It does not prove translated semantic quality or full UUID graph integrity.

## NO-LOSS RULES

Before changing any staging taxonomy record: preserve exact approved semantic meaning; verify source links; reconcile actual Code UUID and parent; verify locale roster at runtime contract; verify translation quality, not merely presence; inspect all downstream users; keep reportable evidence and editor approval; commit an auditable diff. If any check fails, retain the record. Do not auto-delete all implemented-looking entries. Do not remove archived originals in `studio/skills/Obsolete`; they are marked as historical.

**Localization of generated views:** `--locale` localizes catalog names and available `User-friendly description (<locale>)` copy; the methodological description remains English in *every* output. Generated views do **not** contain editorial Slug/Action/Status metadata and must not claim to be a fully translated methodological document or a round-trip of the editorial staging format.

## Legacy description importer (not the Markdown → Code entity generator)

The [description importer](../../../scripts/import-taxonomy-descriptions.mjs) reads the **new, labeled** `Methodological description: ` and `User-friendly description: ` fields of every Domain, Group and Skill. It uses verified standalone implementation links to update **existing** `*.data.ts` configs in a safe, dry-run-first process. The first field must already be approved English; the second is working-language frontend draft copy **only**, never automatically mapped to `description.fe`. The importer has **not** been updated to parse `Slug:`, `Action:` or `Status:`; those fields currently cause unknown-content errors. Do not run it on the new template. Generator/parser/runtime changes are deferred to separate work. For legacy structured inputs, it rejects unknown fields, legacy free-form descriptions, incomplete Code links and conflicting values rather than guessing or overwriting. It does not create missing UUIDs, translate material or generate new Skill files.

```sh
node scripts/import-taxonomy-descriptions.mjs --package learningApps/math
node scripts/import-taxonomy-descriptions.mjs --package learningApps/math --write
npm run test:taxonomy-import
```

**Math migration boundary:** Mathematics uses its reviewed **legacy-path** Code catalog (13 Domains / 60 Groups / 277 Skills) as the source of truth. Its old staging taxonomy has been removed; never restore it from a stale branch or overwrite it with a generated view. The description importer is **not** compatible with new-format Slug/Action/Status metadata and is not a route to changing implemented Math skills. Generating new entities requires editor-approved IDs, names in every supported language, complete Skill `description.fe`, English methodology and validated parent/child export maps. For other subjects with pending editorial taxonomy entries, preserve the editable staging catalog until each entry has passed its promotion gate.

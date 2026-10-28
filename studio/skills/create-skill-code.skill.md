# Create Skill Code Skill

**Mandatory first action:** Read [Coding Agent Persona](../personas/coding-agent.persona.md) in full and apply its responsibilities and role boundaries. This is an engineering task: do **not** substitute the Methodologist Persona or author new competencies during implementation.

**Purpose:** Convert **approved** SkillDomain, SkillGroup, and Skill Markdown definitions into actual typed, localized source code, following the package's current content contracts, builders, registry pattern, and tests. Work only on the explicitly selected, bounded subtree. This Skill does **not** design the taxonomy, draft competency documents, curricula, lessons, or assessment interactions.

## ENTITY DEFINITIONS — REQUIRED READING

Before implementation, read [SkillDomain](../docs/entities/skill-domain.md), [SkillGroup](../docs/entities/skill-group.md), and [Skill](../docs/entities/skill.md). These files, not this engineering instruction, define the semantic identity and boundaries of the entities. Their independent **Definition** and **Code** artifacts must remain separately linked.

## NON-NEGOTIABLE START CONDITIONS

1. **Target:** obtain the exact `PackageRoot` of the standalone textbook package, selected Domain/Group/Skill scope, target branch/workflow, and any package-specific constraints. The monorepo root is **not** automatically the package root.
2. **Editorial source:** read `<PackageRoot>/docs/skills/taxonomy.md` and the corresponding **approved** `*.skill-domain.md`, `*.skill-group.md`, and `*.skill.md` documents. The taxonomy summary alone is insufficient to derive detailed competency semantics.
3. **Technical source:** inspect repository `AGENTS.md`, applicable nested instructions, current Skill/SkillGroup/SkillDomain contracts, builders, implementation examples, locale union, source indexes, and tests. Resolve the **real** implementation directory from the target package architecture; do not invent a `src/math` location or duplicate engine-owned contracts.
4. **Migration safety:** locate existing IDs, data files, mappings, registered collections, and tests for the requested entities. Check whether they are new, partially implemented, or already published.

If a definition is missing, only Draft, ambiguous, or inconsistent with the approved taxonomy, **do not generate code for that entity**. Report exactly which approval or correction is required. Do not mark it implemented. Handle other independently ready entities only when the requested batch safely permits partial completion.

## ARCHITECTURAL CONTRACT

- **Separation:** the taxonomy is a compact Markdown inventory; the definition documents own rich competency semantics; TypeScript files own runtime registration. Do not backfill UUIDs, executable implementation details, grades, prerequisites, questions, scores, or UI metadata into the editorial taxonomy.
- **Filesystem:** follow the current content-code architecture, including one Domain per directory, nested Groups and Group-local `skills/` folders where that remains the established pattern. Respect actual package paths rather than assuming legacy paths.
- **Identifiers:** runtime identity is a stable, static UUID stored in source `*.ids.ts` as required by the repository. Preserve existing UUIDs. Assign a new UUID **once at authoring time** only for a truly new approved entity, with no collisions. Never derive identity from filenames, hierarchy, grades, or educational content, and never call random UUID generation at runtime.
- **Mappings:** Group `skillIds` and Domain `groupIds` are explicit, typed, ordered mappings to child UUIDs. Do not infer membership by parsing names or paths. Changing parent membership does not itself change a child's UUID.
- **Naming:** use package-established camelCase filenames and semantically appropriate exported constants; where the repository uses the historical contract, follow `Entity_Collection_Data`, `Entity_Collection_Ids`, `Entity_ChildCollections_Ids` and one named entity per data file.
- **Data:** create actual `*.data.ts` configs through the approved `buildSkillConfig` / `buildSkillGroupConfig` / `buildSkillDomainConfig` or their current shared-engine equivalents. Do not handwrite builder-provided discriminators or computed file-location metadata into authored configs.
- **Localization:** provide a genuine, nonempty name for **every current supported locale** using the repository's actual locale type/config. The set can change; never assume the count in the old architecture note is still current. No silent fallbacks or copied-language placeholders.
- **Imports and exports:** export individual entity Data through the barrel for its **own level** only. Root taxonomy exports Domain Data, a Domain folder exports its Domain Data, a Group folder exports its Group Data, and `skills/index.data.ts` exports that Group's Skills. Use explicit named, alphabetically ordered exports rather than recursive `export *`.
- **ID indexes:** keep static UUID-only indexes independent of the child Data files; no parent Data importing full child Data. Do not create meaningless index files solely for symmetry. Check circular dependencies and actual module boundaries.
- **Completeness:** an ID reserved in `*.ids.ts`, a child referenced in a parent, or an existing Markdown document is **not** a completed runtime Skill. It is implemented only when its canonical data file exists and passes applicable validation.

The preserved [Creating Skills](../Creating%20Skills.md) is the historical reference for existing UUID/index conventions and entity separation. Its old paths, implementation totals, and locale counts are **not** authoritative for a reorganized monorepo. Current contracts in the target package/shared engine take precedence. Do not edit or delete that source document.

## OPERATING PROTOCOL

1. **Read and classify:** enumerate approved in-scope entities, inspect source/configs/indexes and record new vs. existing vs. incomplete. Confirm file destinations based on actual code consumers.
2. **Plan narrowly:** identify exact files to add/update, required static UUID definitions and references, localization tasks, and tests. Avoid unrequested refactors or architecture changes.
3. **Implement from approved definitions:** preserve precise meaning and human-readable names. Build typed Domain/Group/Skill configs and the necessary ID dictionaries, without generating new skills or altering semantic scope.
4. **Localize:** fill every required language genuinely. Keep locale keys and types consistent with the actual project and avoid Russian or other excluded locales unless the current repository's authoritative locale contract explicitly requires them.
5. **Register at the correct level:** update `index.ids.ts` and `index.data.ts` as required by existing patterns; prevent duplicate UUIDs, missing references, accidental cross-level exports, or cycles.
6. **Verify:** run relevant formatting/linting, TypeScript checks, locale integrity checks, builder/registry unit tests, and any available taxonomy consistency tests. If execution is unavailable, clearly mark checks as not run rather than inventing green results.
7. **Update only Code links:** in `<PackageRoot>/docs/skills/taxonomy.md`, set the in-scope entity's **Code** field to the verified relative path of the canonical implementation file only after it exists. Recompute **Code files** counts. **Preserve Definition fields and Definition counts**; never overwrite a Definition link with Code. Also update the **Code** field in that entity's own Markdown Definition document, resolving the link relative to that document. Keep other entities and their links unchanged.
8. **Stop and report:** list files, entities, preserved/created UUIDs without copying UUID values into editorial docs, validations, remaining gaps and migration concerns. Do not proceed to lesson or assessment generation.

## IMPLEMENTATION CHECKLIST

- [ ] PackageRoot, target scope, approved definition documents and current code contracts verified.
- [ ] No entities invented, silently renamed, split, merged or repositioned.
- [ ] Existing UUIDs preserved; any new UUID is a unique authoring-time literal in the appropriate source file.
- [ ] Each completed entity has an actual typed data file, correct builder and valid registration.
- [ ] Every required supported locale has its own complete, accurate value.
- [ ] Group/Domain membership uses explicit child ID dictionaries; names and folder paths are not used as identity.
- [ ] Level-specific named exports, import graph, and no runtime UUID generation verified.
- [ ] Applicable typechecks/tests run or their absence clearly disclosed.
- [ ] Taxonomy and each affected entity Definition preserve separate `Definition` and `Code` references. Code links are real and checked; Definition references remain unchanged.
- [ ] Code file counts reconciled to the actual checked source tree; Definition counts were not mistaken for implementation.
- [ ] No UI metadata, pedagogy, scoring, progress or other consumer-specific attributes added to Skill configs.

## RESULT

- Modify **only** the actual Skill content-code subtree (and necessary registry, localization and tests) for the specified target package, respecting dependencies on shared engine-owned contracts.
- The existing editorial files remain canonical: `<PackageRoot>/docs/skills/taxonomy.md` plus the approved `*.skill-domain.md` / `*.skill-group.md` / `*.skill.md` files.
- Do not assume source code must live next to those documents: discover and use the repository's real content-code root. If actual files are elsewhere, **Code** links must resolve correctly relative to the taxonomy and the entity's own Definition document. Never replace the Definition link.
- Handoff is a reviewable code change with explicit validation results; nothing is declared implemented merely because a planned name, ID, or reference exists.

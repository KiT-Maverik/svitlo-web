# Implement Skill Code Skill

Read [Skill Taxonomy Workflow](./README.md). Implementation establishes verified Code without deleting editable Markdown. Only the separate [Migrate Implemented Taxonomy](./migrate-implemented-taxonomy.skill.md) gate, after independent verification and explicit editor approval, may remove staged entries; file presence never authorizes their removal.

**Mandatory first action:** Read [Coding Agent Persona](../../personas/coding-agent.persona.md) in full. Apply the repository's `AGENTS.md` and any package-local instructions. This is an implementation task: do not redesign the catalog, invent Skills, author curriculum, or implement assessment/learner tracking.

**Purpose:** Implement the **approved SkillDomain, SkillGroup, and Skill entries in the staging Skills Taxonomy** as a strictly typed, localized, UUID-stable taxonomy for **one standalone textbook application**, preserving the precise editorial hierarchy (including approved direct Domain → Skill ownership) and separate lightweight Data/ID import surfaces.

## CROSS-CUTTING RULES

This implementation must also follow [Git-First Typed Content & AI Authoring](../../docs/architecture/git-first-typed-content.md) and [Internationalization & Inclusive Access](../../docs/architecture/internationalization-and-accessibility.md). Treat every `*.data.ts` entity as reviewed, **strictly typed named-export content**, avoid default exports and undocumented identity aliases, and do not confuse translation dictionaries or stable IDs with a fully registered runtime catalog. Inspect the live Engine types and full locale roster before implementation.

## REQUIRED SOURCES — READ BEFORE WRITING

1. **Target textbook:** identify the actual `<PackageRoot>` (the specific application package, not the monorepo root), the approved scope (one Skill, Group, Domain, or bounded batch), branch, and relevant repository instructions.
2. **Editorial authority:** read the **approved** `<PackageRoot>/docs/skills/taxonomy.md`, including each in-scope entity’s heading, approved `Slug: `, `Action: `, `Status: `, explicit `Methodological description: ` (English), `User-friendly description: ` (working-language draft), hierarchy position and Code link. For these **unpromoted** entries, this is the editorial authority; implemented/promoted entries instead use reviewed Code. **No individual Markdown Definitions exist or are required**. Missing, ambiguous, unapproved or contradictory taxonomy entries are blockers; report them rather than inventing semantics or silently revising the taxonomy.
3. **Entity meanings:** read [SkillDomain](../../docs/entities/skill-domain.md), [SkillGroup](../../docs/entities/skill-group.md), and [Skill](../../docs/entities/skill.md). These are lightweight catalog categories, **not** assessment rubrics, learner results, or lessons.
4. **Authoritative TypeScript contracts in `@svitlo/contracts`:** inspect the current files under `shared/contracts/src/types/content/` (import types via `@svitlo/contracts/taxonomy`; engine builders are separate):
   - `skill.types.ts` — `SkillId`, `Skill_Config` and `Skill`.
   - `skillGroup.types.ts` — `SkillGroup_Config`, `skillIds`.
   - `skillDomain.types.ts` — `SkillDomain_Config`, required `groupIds` and optional direct `skillIds`.
   - `shared/contracts/src/types/languages.ts` — `LanguageCode`; verify the current supported-language list through the published localization contract.
5. **Authoritative builders:** inspect `shared/engine/src/utils/builders/config/buildSkillConfig.utils.ts`, `buildSkillGroupConfig.utils.ts`, `buildSkillDomainConfig.utils.ts`, and `validateSkillReferences.utils.ts`. Prefer their public exports from `@svitlo/engine/taxonomy` instead of copying builders into the textbook.
6. **Reference implementation (read-only example):** inspect the **existing Mathematics taxonomy** in `learningApps/math/src/data/skillsTaxonomy/`, especially:
   - `index.data.ts` and `index.ids.ts`;
   - `arithmetic/arithmetic.data.ts`, `arithmetic/arithmetic.ids.ts`, `arithmetic/index.data.ts`, `arithmetic/index.ids.ts`;
   - `arithmetic/addition/addition.data.ts`, `addition.ids.ts`, `index.data.ts`;
   - `arithmetic/addition/skills/addMeaning.data.ts`, `index.data.ts`, `index.ids.ts`;
   - `learningApps/math/src/utils/builders/config/skillTaxonomyIndex.spec.ts` and the taxonomy builder/translation tests.

**Paths and ownership:** the **new canonical destination** is **`<PackageRoot>/Data/skills/`**, in the individual textbook package, not the monorepo root or its `src/` directory. The existing Mathematics implementation in `learningApps/math/src/data/skillsTaxonomy/` is a **legacy reference**, not migrated Code. Do not guess between populated roots, silently migrate Math, copy playground imports, or modify other textbooks. Verify package-local imports and registration; report incompatibilities rather than claiming support.

Current contracts and the canonical [Skill](../../docs/entities/skill.md), [SkillGroup](../../docs/entities/skill-group.md) and [SkillDomain](../../docs/entities/skill-domain.md) rules govern this workflow. The historical conventions have been consolidated here; do not reintroduce obsolete directory layouts or locale counts.

### Editorial actions and implementation status

For each entity, `Slug` is the stable English lowerCamelCase Code stem; `Action: create` requests a new implementation, `Action: update` requests modification, `Action: delete` requests deletion subject to separate explicit authorization and dependency checks, and `Action: skip` requests **no Code change**. `Status: pending` means implementation has not been completely verified, and `Status: implemented` means complete, verified Code. Neither is a new runtime `Skill*_Config` property. These metadata fields are not instructions for this manual Coding Agent to create, update or delete files automatically. Scope and human approval are still required. In particular, never interpret `delete` as authorization for destructive changes or `Status: implemented` without verified Code. When explicitly commissioned to implement an entity despite `Action: skip`, reconcile the intended scope with the editor first.

The existing description importer cannot parse the new `Slug:`, `Action:`, and `Status:` lines. Do not run it on new-format Markdown until a separate tooling update is implemented and verified.

### Planned Markdown → Code generator and per-entity outcomes

The Markdown → Code generator is a **planned integration**, distinct from the existing legacy description importer and **read-only Code → Markdown** generator. Do not invent its CLI, assume it has been delivered, or run existing tooling against a new-format taxonomy without verified compatibility. It must select `<PackageRoot>/docs/skills/taxonomy.md` as input and `<PackageRoot>/Data/skills/` as the explicit, textbook-local destination.

1. **Dry-run:** without changes to Code or Markdown, parse each entity and show its slug, Action, target path, proposed UUID or retained identity, parent-child dependencies, missing translations and expected changes.
2. **Explicit apply:** only an authorized operation may write. In particular, `delete` needs independent explicit approval and validation of incoming references, membership maps and exports; never cascade or reinterpret `skip`. Keep stable UUIDs for existing entities.
3. **Independent, dependency-safe processing:** invalid entities do not block unrelated valid entities; never write a parent referencing a failed/missing child. Emit structured diagnostics per entity (path, slug, Action, success/blocked/skipped, missing languages, reasons and effects) and aggregate partial-success results.
4. **Safe status updates:** change the editorial `Status` to `implemented` only after validating a complete, reachable Code implementation (IDs, relations, methodology, names and required Skill fe locales). Leave failures `pending` and preserve unrelated authored data. For an authorized deletion, reconcile/remove Code links and status according to editor-approved disposition, never leave a stale `implemented` link. Preserve Action and all pedagogical content.
5. **Handoff:** report successful/failed entities and integration-dependent issues to the independent migration gate. A generator write is not editorial promotion, and this specification does not imply the tool, registry, validator or new-root support already exists.

### Approved editorial slugs and Code paths

Use each new-template entity's approved `Slug: lowerCamelCase` for its own directory/file stem and matching local ID-map key, rather than recomputing identifiers from display names. The `<domainCamelCase>`, `<groupCamelCase>`, and `<skillCamelCase>` placeholders below refer to these approved slugs. Validate `^[a-z][A-Za-z0-9]*$` and sibling uniqueness before generating files.

A slug is editorial metadata, not a new property of `Skill*_Config`. Keep existing UUIDs and Code paths stable. If an approved slug conflicts with an implemented path/identifier, stop for editorial resolution; do not silently rename files or reassign UUIDs. Treat slugless legacy entries as pending explicit migration.

### Direct-Skill Domains — mandatory compatibility gate

Before implementing a Domain with **zero Groups**, inspect and verify the `@svitlo/contracts` `SkillDomain_Config`, the `@svitlo/engine` `buildSkillDomainConfig`, validation, **source registry and every downstream taxonomy index, exporter, loader and display/ancestry consumer**. The engine type and builder now permit `skillIds` with `groupIds: {}`, but this **does not prove** an existing textbook's grouped-only index, builder composition or UI supports direct Skills. Add focused tests for direct and grouped membership and for no mixed/empty Domain. Stop and report a blocker rather than generating a synthetic Group or falsely claiming end-to-end integration. No new Skill IDs may be invented to satisfy a directory layout.

**Direct Domain source layout:** place Skills under `<domainCamelCase>/skills/<skillCamelCase>.data.ts` and their UUIDs in the established ID-only surfaces for that Domain; the Domain's `index.ids.ts` maps direct **Skill IDs** instead of Group IDs. Keep the existing grouped layouts unchanged for Domains that have meaningful Groups. Confirm all generated imports and index exports obey the existing `Data` vs `IDs` conventions and translation completeness before shipping.

## 1. STRICT TYPE AND ENTITY CONTRACT

Every runtime entity must be produced through its designated builder, using the real shared-engine types. Do not hand-author the `collection` discriminator or `fileLocation` (the latter is supplied by the source registry).

| Entity | Authored configuration | Builder | References |
| --- | --- | --- | --- |
| Skill | `id`, `name`, required English `description.methodological` and full `description.fe` | `buildSkillConfig` | None |
| SkillGroup | `id`, `name`, `skillIds` | `buildSkillGroupConfig` | Immediate child Skill IDs |
| SkillDomain | `id`, `name`, `groupIds`, optional `skillIds` | `buildSkillDomainConfig` | Either immediate SkillGroup IDs or direct Skill IDs, never both |

The current `Skill_Config` **requires** `description: { methodological: string; fe: Readonly<Record<LanguageCode, string>> }`. The `SkillGroup_Config` and `SkillDomain_Config` descriptions remain optional and may omit `fe`. For **legacy structured entries without `Slug:`, `Action:` or `Status:`**, [import-taxonomy-descriptions.mjs](../../../scripts/import-taxonomy-descriptions.mjs) can transfer descriptions to already existing Code after a successful dry-run. The current importer must not be used with new-template entries until parser compatibility is implemented and tested; preserve semantic equivalence and seek an approved implementation path in the meantime. It never translates or creates missing Code objects. The `User-friendly description:` draft is not itself a complete all-locale `description.fe` dictionary. A new or promoted entity **must** have `description.methodological`: a substantive, carefully edited **English** description faithful to the approved source text (translate without information loss when the staging taxonomy is in another language). This English text is for the Methodologist, Screenwriter and other agents; it may include useful conceptual distinctions, examples and caveats without becoming a lesson or assessment plan. `description.fe` is learner-facing and **required for Skills**, with genuine, reviewed, nonblank translations for **every** supported language; no partial dictionary, fabricated translation or fallback. Group/Domain frontend descriptions remain optional but require complete coverage when present. An English-only `User-friendly description:` is draft copy, **not** the localized dictionary. Missing translations block Skill creation/promotion and leave `Status: pending` with explicit diagnostics; do not emit an incomplete runtime Skill. Missing English methodological text blocks promotion too. Builders enforce shape and completeness, not correctness of language/meaning. No mastery, grade, prerequisites, questions or learner state belong here.

- Match the names, identity, and **exact parent/child placements** approved in the taxonomy; no extra Domains, Groups, Skills, cross-domain duplicates, or synthetic groups.
- Respect the approved hierarchy: a grouped Domain references nonempty `groupIds`, while an ungrouped Domain uses `groupIds: {}` and nonempty direct `skillIds`. Never mix both. Groups reference Skills through `skillIds`, and Skills have no children. Strongly discourage synthetic singleton Groups.
- Use stable, **literal UUID values**, established at authoring time in `*.ids.ts` files. Reuse existing UUIDs for existing identities. Generate fresh collision-free UUIDs **once** for genuinely new approved entities; never generate UUIDs during application runtime, derive them from paths, or reassign IDs during a rename/move.
- Build explicit `as const` maps of child IDs and preserve stable meaning. Refer to **ID-only modules**, never child `*.data.ts` modules, when establishing relationships.
- Cross-check that every ID reference represents the intended immediate child and that there are no missing, duplicated, or unintended entities. **The current builders validate UUID syntax, duplicate values, and nonempty exclusive Domain membership (grouped or direct); they do not prove that a UUID belongs to the correct entity type, exists in a registry, or is globally unique.** Complete referential/type integrity is a separate **future build-time validation** responsibility. Use available static/file-level cross-checks now, but never claim the current builders enforce a full taxonomy graph.

## 2. REQUIRED DESTINATION AND FILE HIERARCHY

New Code belongs **only to the selected textbook** in `<PackageRoot>/Data/skills/`:

~~~text
<PackageRoot>/
├── docs/skills/taxonomy.md              # editable, approved editorial source
└── Data/skills/                          # canonical new Code destination
    ├── index.data.ts                     # direct Domain Data exports
    ├── index.ids.ts                      # direct Domain ID-only exports
    └── <domainSlug>/
        ├── <domainSlug>.data.ts           # Domain config
        ├── <domainSlug>.ids.ts            # stable Domain UUID
        ├── index.data.ts                 # this Domain Data
        ├── index.ids.ts                  # immediate Group OR direct Skill IDs
        ├── <groupSlug>/                   # grouped Domain only
        │   ├── <groupSlug>.data.ts       # Group config
        │   ├── <groupSlug>.ids.ts        # stable Group UUID
        │   ├── index.data.ts            # this Group Data
        │   ├── index.ids.ts             # this Group UUID only
        │   └── skills/
        │       ├── <skillSlug>.data.ts
        │       ├── index.data.ts        # this Group's Skills only
        │       └── index.ids.ts         # this Group's Skill IDs only
        └── skills/                        # direct-Skill Domain only
            ├── <skillSlug>.data.ts
            ├── index.data.ts            # this Domain's direct Skills only
            └── index.ids.ts             # this Domain's direct Skill IDs only
~~~

The two variants are **mutually exclusive** within a Domain; the tree illustrates alternatives, not a mixed tree. Repeat directories from the approved hierarchy with stable, validated `Slug` stems (`^[a-z][A-Za-z0-9]*$`). Keep only own-level Data exports and direct-child ID relationships; no recursive Data barrels or extra UUID definitions. For new output, use both `index.data.ts` and `index.ids.ts` at each level as appropriate, including Group UUID-only re-exports. Do not create synthetic Groups.

**Compatibility boundary:** the existing Mathematics tree still lives at `learningApps/math/src/data/skillsTaxonomy/`. The new target may require package-resolution, build-time registration, import/export, loader and consumer changes beyond this documentation. Inspect these dependencies before claiming the Code is fully integrated; do not silently use legacy paths or state that Math has moved.

## 3. DATA VS ID MODULES — SEPARATE IMPORT SURFACES

**Reason for the split:** consumers frequently need a stable identifier without the translated config and its imports. An `*.ids.ts` module must be safe to import on its own: **no Data imports, no builder calls, no full entity initialization**, no deep/re-exported Data graphs. This keeps downstream dependency graphs small and decouples identity from display data. Do not claim bundle-size gains without measurement; enforce the static dependency boundary.

### Data barrels: own level only, never recursively flatten children

| File | It may export | It MUST NOT export |
| --- | --- | --- |
| `Data/skills/index.data.ts` | Domain Data from each direct Domain | Group or Skill Data; recursive child `export *` |
| `Data/skills/<domain>/index.data.ts` | That Domain Data | Any Group/Skill Data |
| `Data/skills/<domain>/<group>/index.data.ts` | That Group Data | Any Skill or Domain Data |
| `Data/skills/<domain>/<group>/skills/index.data.ts` | This Group's individual Skill Data | Group, Domain, or unrelated Group's Skills |

Use explicit, named, locally scoped exports in stable/alphabetical order; no `export *`, recursive barrels, indirect export of nested Data, side-effect imports, or eager aggregation of the full taxonomy. Export **only the entity collection represented by that level**. Consumers obtain all Domains from the root Data barrel; obtain a particular Group via its own Group Data barrel; obtain the Skills belonging to a Group via that Group's Skills Data barrel. A **global list of all Group or Skill Data** is not silently supplied by the root barrel.

### ID-only indexes: immediate relationships, without Data

- Root `index.ids.ts` exposes **Domain ID dictionaries** by importing Domain `*.ids.ts` only.
- Domain `<domain>.ids.ts` contains its stable Domain UUID. Its `index.ids.ts` assembles a named `<domain>_SkillGroups_Ids` map of **immediate** Group UUIDs, importing Group `*.ids.ts` only; it does not aggregate Skills.
- Group `<group>.ids.ts` contains its stable Group UUID. The Group-level `index.ids.ts` **re-exports only that Group's ID object**, not child Data, child IDs, or transitive descendants. Its Group Data imports Skill IDs directly from `skills/index.ids.ts`.
- `<group>/skills/index.ids.ts` holds the static UUID literals for that Group's **direct Skills** as one typed/read-only dictionary (`as const`). There is no need for a separate `*.ids.ts` for every individual Skill.
- The Group's `*.data.ts` imports `skillIds` from its own `skills/index.ids.ts`. The Domain's `*.data.ts` imports `groupIds` from its own `index.ids.ts`. Neither imports child Data merely to extract an ID.

The distinction is deliberate: **Data barrels are same-level**, while an **ID mapping may contain immediate child IDs** to express group/domain membership. “One level” means no recursive aggregation of descendant Data **or** ID catalogs; a Domain never collects grandchildren Skills and the root never collects nested Group/Skill Data. Direct consumers can import a dedicated ID module without importing a full localized config.

## 4. LOCALIZATION — COMPLETE, LANGUAGE-CODE KEYS

`name` is a strictly typed `Readonly<Record<LanguageCode, string>>`. Populate **every language code required by the current engine/package contract** for **every** Skill, Group, and Domain. Never fill only English/Ukrainian; do not silently fallback, duplicate English into other locales, or leave an empty string or translation placeholder.

- Use the **two-letter language codes** (`en`, `uk`, `pl`, `be`, etc.) from `LanguageCode` as the dictionary **keys**, **without quotes**: `en: '...'`, not `'en': '...'` or `"en": "..."`. Use two-letter unquoted keys consistently when supported by the actual type.
- **Do not use full locale tags as keys** (`uk-UA`, `en-US`, `be-tarask`, etc.). The current engine language descriptor has both a full `locale` and a `language` code; Skill `name` dictionaries are keyed by `language`. For example, `be-tarask` is the locale definition, and the current language key is `be`.
- If the engine introduces a language code that is **not** a legal unquoted TypeScript identifier (or is not two letters), follow the real `LanguageCode` contract and TypeScript syntax rather than truncating/misrepresenting it; document the exception for review. Do not rewrite the localization engine as part of this Skill.
- Read the supported set from the active package/engine, **not** from a copied historical count. All translations must be genuine, relevant to their meanings, and culturally/linguistically sensible.

Example of the **key style only** (not a complete `name` object; production must include every supported key):

~~~ts
name: {
  en: 'Addition',
  uk: 'Додавання',
  pl: 'Dodawanie',
  be: 'Складаньне',
}
~~~

Use the repo's configured string quote preference independently of the **no-quotation language keys** rule.

## 5. REQUIRED IMPLEMENTATION ORDER

1. **Inspect and reconcile:** read the approved editorial taxonomy (including authoritative descriptions), type/builder contracts, **full current supported language set**, reference Mathematics tree and existing target code. Produce an exact in-scope file/ID plan. The still-unmigrated staging taxonomy is the **editorial source of truth for in-scope entries**, not a runtime registry; do not couple the application to reading it at runtime. Never mutate another textbook to satisfy this one.
2. **Reserve identity:** create/reuse Skill UUID literals in the Group's `skills/index.ids.ts`, Group UUID in `<group>.ids.ts`, Domain UUID in `<domain>.ids.ts`. Check uniqueness against the target package; preserve established identifiers.
3. **Implement Skill Data:** write one `<skill>.data.ts` per approved Skill with `buildSkillConfig`, its ID-only import, and full `name` dictionary. Update the local `skills/index.data.ts` with **only the Group's Skill Data**.
4. **Implement Group Data:** create/update `<group>.data.ts` with `buildSkillGroupConfig`, full `name`, own UUID, and exact `skillIds` from its `skills/index.ids.ts`. Maintain `<group>/index.data.ts` as **Group Data only** and `<group>/index.ids.ts` as the **Group UUID-only** re-export.
5. **Implement Domain Data:** create/update `<domain>/index.ids.ts` with the direct Groups' UUIDs only; build `<domain>.data.ts` using `buildSkillDomainConfig` with full `name`, own UUID, and exact `groupIds`. Keep `<domain>/index.data.ts` **Domain Data only**.
6. **Complete root indexes:** update root `index.data.ts` to export the selected Domain Data entries and root `index.ids.ts` to export Domain ID dictionaries. Do not aggregate nested Group/Skill Data into the root.
7. **Verify what is currently possible:** cross-check taxonomy names against source paths and immediate-child ID maps, duplicate/missing IDs, wrong-level exports, circular dependencies, dynamic UUID generation, and translations. Report any unverified cross-file identity/registration requirements as **pending build-time integrity checks**; do not misattribute them to current TypeScript builders.
8. **Update staging taxonomy implementation metadata only after verified implementation:** replace the entity's single standalone Markdown link in `<PackageRoot>/docs/skills/taxonomy.md` with a relative link to its actual `*.data.ts` file. The visible link text must be the **complete file basename, including every suffix and the `.ts` extension** (for example, `[addition.data.ts](%VERIFIED_RELATIVE_PATH%)`); do not prefix the link with `Code:`. Recompute only the **Code files** counts; set that entity's `Status: implemented` only after all verification gates pass. Preserve `Action`, headings, descriptions, hierarchy and all other implementation links until the separate migration/reconciliation Skill verifies and removes each promoted item. **Never create or update individual Markdown Definition files.** An unverified/partial implementation stays `Status: pending` and retains exactly `[Not implemented](#)`.
9. **Stop:** report only the bounded task, validations, and anything incomplete. Do not proceed to unrelated Domains, lessons, question generation, or assessment.

A partial implementation is not “complete” merely because its UUID or parent mapping exists. Only entities with valid `*.data.ts`, reachable own-level Data exports, complete name translations, mandatory all-locale Skill `description.fe` (optional only for Group/Domain), reviewed English methodological text and verified references count as **promoted**. Avoid generating empty Group/Domain placeholders that violate current reference validation; if a prerequisite child is missing, complete the approved dependencies within scope or report the blocker.

## 6. VERIFICATION / ACCEPTANCE GATES

Before reporting success, run the target package's available checks and add/fix focused tests where needed:

- **Type safety:** verify builders and live contracts; every Skill has required English `description.methodological` and fully localized `description.fe`. Group/Domain frontend descriptions remain optional but fully localized if supplied. No invented fields or type errors.
- **Localization:** each `name` has **exactly** the current required language-code keys (two-letter unquoted wherever legal), no gaps, duplicates, unexpected keys, empty/placeholder/copy-pasted language values.
- **Identity:** UUID syntax and stability; check uniqueness and immediate-child mappings against the in-scope files and approved hierarchy. The existing builders **cannot** resolve IDs to actual entity types/registrations; full repo-wide reference validation is deferred to a separate build-time script. Mark unverified items explicitly rather than claiming a builder-level guarantee.
- **Data/IDs isolation:** `*.ids.ts` modules never import Data or builders; importing a parent Data config does not require importing child Data solely to access child IDs.
- **Export boundaries:** root Data exports Domains only, Domain Data exports its own Domain only, Group Data exports its Group only, Skills Data exports only that Group's Skills. Verify no nested/re-exported Data from higher levels and no `export *`. Adapt the structural checks exemplified by `learningApps/math/src/utils/builders/config/skillTaxonomyIndex.spec.ts`.
- **Topology:** physical paths and entries match the approved taxonomy and slugs (including sibling uniqueness), with no accidental duplicate or missing entities. All non-placeholder taxonomy Code links resolve to matching implemented files and counts reconcile; the staging descriptions and approved hierarchy remain unchanged until separately verified promotion.
- **Tests:** run available package TypeScript, lint, builder, translation and index tests; cite commands/results. Run registry validation only if a real registry/test exists; `fileLocation` and global ID resolution remain separate planned infrastructure, not automatically finished by producing Data files. If tooling is unavailable, mark checks **not run**.

## RESULT / HANDOFF

Produce a reviewable code change that includes:

1. **Implementations** in `<PackageRoot>/Data/skills/` following exactly the approved hierarchy and naming convention (no automatic Math migration).
2. **Complete source files** for in-scope entities: `*.data.ts`, stable `*.ids.ts` / child ID dictionaries, and correctly scoped `index.data.ts` / `index.ids.ts` at **every** level, with no duplicated UUID values.
3. **Fully translated names** for all required language keys in every new or changed Skill/Group/Domain; no shortcuts.
4. **Tests or updated verification** covering hierarchy integrity, ID reference independence, complete localization and shallow barrel exports.
5. **Updated Code links/counts** in `<PackageRoot>/docs/skills/taxonomy.md`, preserving its approved semantic descriptions, entity names and hierarchy. No redundant per-entity Markdown files.
6. **Concise completion report:** implemented Domains/Groups/Skills counts, paths, preserved/new IDs, verification commands and outcomes, unresolved items, and any necessary explicit migration notes.

**Scope boundary:** Do **not** move/copy the Math textbook's Mathematics taxonomy into another textbook automatically, change shared engine contracts, rewrite curriculum semantics, build a cross-textbook Skill registry, or refactor unrelated packages. Cross-textbook Skill identity synchronization is **out of scope for now**. Each new textbook owns its own `Data/skills/` and depends only on explicit shared-engine contracts; no hidden coupling to another textbook's data tree.

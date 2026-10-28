# Implement Skill Code Skill

**Mandatory first action:** Read [Coding Agent Persona](../personas/coding-agent.persona.md) in full. Apply the repository's `AGENTS.md` and any package-local instructions. This is an implementation task: do not redesign the catalog, invent Skills, author curriculum, or implement assessment/learner tracking.

**Purpose:** Implement **approved SkillDomain, SkillGroup, and Skill Definitions** as a strictly typed, localized, UUID-stable taxonomy for **one standalone textbook application**, preserving the precise editorial hierarchy and separate lightweight Data/ID import surfaces.

## REQUIRED SOURCES — READ BEFORE WRITING

1. **Target textbook:** identify the actual `<PackageRoot>` (the specific application package, not the monorepo root), the approved scope (one Skill, Group, Domain, or bounded batch), branch, and relevant repository instructions.
2. **Editorial authority:** read `<PackageRoot>/docs/skills/taxonomy.md` and the approved Markdown Definition linked for every entity in scope (`*.skill-domain.md`, `*.skill-group.md`, `*.skill.md`). The taxonomy alone owns the **Domain → Group → Skill** hierarchy and the placement of each entity. Missing, Draft, or contradictory Definitions are blockers for the affected entity; report them rather than inferring semantics.
3. **Entity meanings:** read [SkillDomain](../docs/entities/skill-domain.md), [SkillGroup](../docs/entities/skill-group.md), and [Skill](../docs/entities/skill.md). These are lightweight catalog categories, **not** assessment rubrics, learner results, or lessons.
4. **Authoritative TypeScript contracts in the shared engine:** inspect the actual files under `shared/engine/src/types/content/`:
   - `skill.types.ts` — `SkillId`, `Skill_Config` and `Skill`.
   - `skillGroup.types.ts` — `SkillGroup_Config`, `skillIds`.
   - `skillDomain.types.ts` — `SkillDomain_Config`, `groupIds`.
   - `shared/engine/src/types/languages.ts` — `LanguageCode` and the current supported-language configuration.
5. **Authoritative builders:** inspect `shared/engine/src/utils/builders/config/buildSkillConfig.utils.ts`, `buildSkillGroupConfig.utils.ts`, `buildSkillDomainConfig.utils.ts`, and `validateSkillReferences.utils.ts`. Prefer their public exports from `@svitlo/engine/taxonomy` instead of copying builders into the textbook.
6. **Reference implementation (read-only example):** inspect the **existing Mathematics taxonomy** in `frontend/playground/src/math/skillsTaxonomy/`, especially:
   - `index.data.ts` and `index.ids.ts`;
   - `arithmetic/arithmetic.data.ts`, `arithmetic/arithmetic.ids.ts`, `arithmetic/index.data.ts`, `arithmetic/index.ids.ts`;
   - `arithmetic/addition/addition.data.ts`, `addition.ids.ts`, `index.data.ts`;
   - `arithmetic/addition/skills/addMeaning.data.ts`, `index.data.ts`, `index.ids.ts`;
   - `frontend/playground/src/utils/builders/config/skillTaxonomyIndex.spec.ts` and the taxonomy builder/translation tests.

**Distinguish the two paths:** playground's `src/math/skillsTaxonomy/` is a **historical working reference**, not the destination for a new textbook. The canonical destination for this Skill is **`<PackageRoot>/src/data/skillsTaxonomy/`** (camelCase). Do not copy a stale playground import alias or modify the playground merely because it contains the examples. If a current shared-engine contract differs from a playground example, the current contract wins; explain a material incompatibility.

The old [Creating Skills](../Creating%20Skills.md) is retained for historical background. Its paths, counts, and language snapshots do not override the contracts and target directory above.

## 1. STRICT TYPE AND ENTITY CONTRACT

Every runtime entity must be produced through its designated builder, using the real shared-engine types. Do not hand-author the `collection` discriminator or `fileLocation` (the latter is supplied by the source registry).

| Entity | Authored configuration | Builder | References |
| --- | --- | --- | --- |
| Skill | `id`, `name` | `buildSkillConfig` | None |
| SkillGroup | `id`, `name`, `skillIds` | `buildSkillGroupConfig` | Immediate child Skill IDs |
| SkillDomain | `id`, `name`, `groupIds` | `buildSkillDomainConfig` | Immediate child SkillGroup IDs |

The current contracts do **not** contain `description`. The Description in Markdown Definitions and taxonomy is editorial; **never invent** a runtime field or copy a description into TypeScript without an approved engine contract change. Likewise, no mastery evidence, assessment rules, scores, learner records, grade, prerequisites, question references, or UI state belong to these configs.

- Match the names, identity, and **exact parent/child placements** approved in the taxonomy; no extra Domains, Groups, Skills, cross-domain duplicates, or synthetic groups.
- Respect the hierarchy: a Domain references only its Groups through `groupIds`; a Group references only its Skills through `skillIds`; a Skill references no children.
- Use stable, **literal UUID values**, established at authoring time in `*.ids.ts` files. Reuse existing UUIDs for existing identities. Generate fresh collision-free UUIDs **once** for genuinely new approved entities; never generate UUIDs during application runtime, derive them from paths, or reassign IDs during a rename/move.
- Build explicit `as const` maps of child IDs and preserve stable meaning. Refer to **ID-only modules**, never child `*.data.ts` modules, when establishing relationships.
- Validate that every ID reference names a real intended immediate child, with no missing or duplicate children or IDs. Preserve editorial order where it matters for consumer presentation, without treating directory order as a learning prerequisite.

## 2. REQUIRED DESTINATION AND FILE HIERARCHY

Create or extend only the selected taxonomy subtree in the **specific textbook package**:

~~~text
<PackageRoot>/
├── docs/
│   └── skills/
│       └── taxonomy.md                 # approved editorial hierarchy (existing)
└── src/
    └── data/
        └── skillsTaxonomy/
            ├── index.data.ts            # Domain Data exports ONLY
            ├── index.ids.ts             # Domain ID-only exports ONLY
            └── <domainCamelCase>/
                ├── <domainCamelCase>.data.ts    # Domain config
                ├── <domainCamelCase>.ids.ts     # Domain UUID
                ├── index.data.ts                # this Domain Data ONLY
                ├── index.ids.ts                 # immediate Group ID mapping
                └── <groupCamelCase>/
                    ├── <groupCamelCase>.data.ts  # Group config
                    ├── <groupCamelCase>.ids.ts   # Group UUID
                    ├── index.data.ts             # this Group Data ONLY
                    ├── index.ids.ts              # Group UUID export; no Skill Data
                    └── skills/
                        ├── <skillCamelCase>.data.ts
                        ├── index.data.ts         # Skills in THIS Group ONLY
                        └── index.ids.ts          # Skill UUIDs in THIS Group ONLY
~~~

Repeat Domain, Group, and Skill directories strictly according to `docs/skills/taxonomy.md`. Names are **camelCase** directory and filename segments; entity Data files use `*.data.ts`, ID literals/maps use `*.ids.ts`, and two index surfaces are named `index.data.ts` / `index.ids.ts`.

The reference Mathematics tree has `index.data.ts` on every collection level, but some legacy Group directories have no `index.ids.ts`. **For new textbook output, create both `index.data.ts` and `index.ids.ts` at each level**, including Groups: the Group-level `index.ids.ts` is a named, ID-only re-export of its existing `<group>.ids.ts`, **not** a second UUID literal or a recursive aggregator. Reuse existing UUIDs, avoid duplicate ID definitions, and never re-export child Skill configurations. Root, Domain, and Skills ID indexes retain their distinct, direct-level responsibilities.

Use the target package's actual alias/export configuration for imports (`@svitlo/engine/taxonomy` for shared builders where available). Do not assume playground's `@/utils` alias applies in a different package. Avoid duplicating shared engine types or builders inside `src/data/`.

## 3. DATA VS ID MODULES — SEPARATE IMPORT SURFACES

**Reason for the split:** consumers frequently need a stable identifier without the translated config and its imports. An `*.ids.ts` module must be safe to import on its own: **no Data imports, no builder calls, no full entity initialization**, no deep/re-exported Data graphs. This keeps downstream dependency graphs small and decouples identity from display data. Do not claim bundle-size gains without measurement; enforce the static dependency boundary.

### Data barrels: own level only, never recursively flatten children

| File | It may export | It MUST NOT export |
| --- | --- | --- |
| `skillsTaxonomy/index.data.ts` | Domain Data from each direct Domain | Group or Skill Data; recursive child `export *` |
| `skillsTaxonomy/<domain>/index.data.ts` | That Domain Data | Any Group/Skill Data |
| `skillsTaxonomy/<domain>/<group>/index.data.ts` | That Group Data | Any Skill or Domain Data |
| `skillsTaxonomy/<domain>/<group>/skills/index.data.ts` | This Group's individual Skill Data | Group, Domain, or unrelated Group's Skills |

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

1. **Inspect and reconcile:** read target taxonomy, approved Definitions, type/builder contracts, actual locales, reference Mathematics tree and existing target code. Produce an exact in-scope file/ID plan. Never mutate another textbook to satisfy this one.
2. **Reserve identity:** create/reuse Skill UUID literals in the Group's `skills/index.ids.ts`, Group UUID in `<group>.ids.ts`, Domain UUID in `<domain>.ids.ts`. Check uniqueness against the target package; preserve established identifiers.
3. **Implement Skill Data:** write one `<skill>.data.ts` per approved Skill with `buildSkillConfig`, its ID-only import, and full `name` dictionary. Update the local `skills/index.data.ts` with **only the Group's Skill Data**.
4. **Implement Group Data:** create/update `<group>.data.ts` with `buildSkillGroupConfig`, full `name`, own UUID, and exact `skillIds` from its `skills/index.ids.ts`. Maintain `<group>/index.data.ts` as **Group Data only** and `<group>/index.ids.ts` as the **Group UUID-only** re-export.
5. **Implement Domain Data:** create/update `<domain>/index.ids.ts` with the direct Groups' UUIDs only; build `<domain>.data.ts` using `buildSkillDomainConfig` with full `name`, own UUID, and exact `groupIds`. Keep `<domain>/index.data.ts` **Domain Data only**.
6. **Complete root indexes:** update root `index.data.ts` to export the selected Domain Data entries and root `index.ids.ts` to export Domain ID dictionaries. Do not aggregate nested Group/Skill Data into the root.
7. **Verify reference integrity:** every Skill belongs to the correct Group and every Group to the correct Domain; ID references resolve one-to-one; no duplicate or unused IDs, wrong-level exports, circular dependencies, dynamic UUID generation, or missing translations.
8. **Update editorial Code links only after implementation:** in `<PackageRoot>/docs/skills/taxonomy.md`, update the **Code** link for each implemented entity to the verified actual `*.data.ts` file, relative to the taxonomy document. Recompute only **Code files** counts and preserve all Definition links/counts. Also update the affected entity's Markdown Definition `Code` link, resolving relative to that Definition file. Never replace the Definition link with Code.
9. **Stop:** report only the bounded task, validations, and anything incomplete. Do not proceed to unrelated Domains, lessons, question generation, or assessment.

A partial implementation is not “complete” merely because its UUID or parent mapping exists. Only entities with valid `*.data.ts`, reachable own-level Data exports, complete translations, and verified references count as implemented. Avoid generating empty Group/Domain placeholders that violate current reference validation; if a prerequisite child is missing, complete the approved dependencies within scope or report the blocker.

## 6. VERIFICATION / ACCEPTANCE GATES

Before reporting success, run the target package's available checks and add/fix focused tests where needed:

- **Type safety:** `Skill_Config` / `SkillGroup_Config` / `SkillDomain_Config` and builders accept all new configs; no unsupported `description` or invented fields; no TypeScript errors.
- **Localization:** each `name` has **exactly** the current required language-code keys (two-letter unquoted wherever legal), no gaps, duplicates, unexpected keys, empty/placeholder/copy-pasted language values.
- **Identity:** UUID syntax and stability; unique IDs; `skillIds` / `groupIds` contain real immediate children only with no missing, wrong-type, or duplicate references.
- **Data/IDs isolation:** `*.ids.ts` modules never import Data or builders; importing a parent Data config does not require importing child Data solely to access child IDs.
- **Export boundaries:** root Data exports Domains only, Domain Data exports its own Domain only, Group Data exports its Group only, Skills Data exports only that Group's Skills. Verify no nested/re-exported Data from higher levels and no `export *`. Adapt the structural checks exemplified by `frontend/playground/src/utils/builders/config/skillTaxonomyIndex.spec.ts`.
- **Topology:** physical paths and entries match the approved taxonomy, with no accidental duplicate or missing entities. All editorial Code links resolve to real files and counts reconcile; Definition links remain unchanged.
- **Tests:** run applicable package TypeScript, lint, builder/registry, translation and index tests; cite exact commands/results. If tooling is unavailable, explicitly mark checks **not run**, never imply they passed.

## RESULT / HANDOFF

Produce a reviewable code change that includes:

1. **Implementations** in `<PackageRoot>/src/data/skillsTaxonomy/` following exactly the approved hierarchy and naming convention.
2. **Complete source files** for in-scope entities: `*.data.ts`, stable `*.ids.ts` / child ID dictionaries, and correctly scoped `index.data.ts` / `index.ids.ts` at **every** level, with no duplicated UUID values.
3. **Fully translated names** for all required language keys in every new or changed Skill/Group/Domain; no shortcuts.
4. **Tests or updated verification** covering hierarchy integrity, ID reference independence, complete localization and shallow barrel exports.
5. **Updated Code links/counts** in `<PackageRoot>/docs/skills/taxonomy.md` and Code links in the corresponding Markdown Definitions, without overwriting the Definitions or their relationships.
6. **Concise completion report:** implemented Domains/Groups/Skills counts, paths, preserved/new IDs, verification commands and outcomes, unresolved items, and any necessary explicit migration notes.

**Scope boundary:** Do **not** move/copy the playground's Mathematics taxonomy into the new textbook automatically, change shared engine contracts, rewrite curriculum semantics, or refactor unrelated packages. The goal is that each textbook can be **extracted independently** with its own `src/data/skillsTaxonomy`, while depending only on explicit, reusable shared-engine contracts — no hidden coupling to another textbook's data tree.

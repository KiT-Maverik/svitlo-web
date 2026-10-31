# Generator Requirements

**Scope:** build-time generators that turn canonical textbook authoring data into
publishable, runtime-consumable resources. This document is the common contract for
future data generators; additions should be recorded here before implementation.

## 1. Separation of authoring and runtime data

- Authoring configuration (for example, `data/skills/**/*.data.ts`) remains the
  single source of truth. Browser code must not import it, execute a builder,
  or depend directly on its module graph.
- Generators execute before app development/build and produce deterministic static
  files. Never modify authoring data as a side effect.
- Publish one language per file. Never ship multi-language dictionaries to the
  runtime for one locale; never silently fall back to English or insert placeholders.
- Fail clearly on missing required translations, invalid entity identities, or
  unsupported fields. Check mode is read-only; write mode validates before replacing
  its generated output, preserving unrelated public assets.

## 2. Generated directory convention

- Generated resources belong under `learningApps/<textbook>/public/data/`.
  **Always use lower-case `data` and `skills` in paths**.
- The entire `**/public/data/` subtree is Git-ignored and must contain no tracked
  files. It is regenerated for `predev` and `prebuild`.
- Data generation scripts and their unit tests live under
  `scripts/generators/data/`; use paths relative to each script rather than
  assuming the current working directory.

## 3. Identity/metadata versus localized payloads

For every Skill, SkillGroup and SkillDomain, publish one directory corresponding
to its stable editorial path, with:

```text
public/data/skills/<domain>/
  meta.json
  uk.json
  en.json
  <group>/
    meta.json
    uk.json
    en.json
    <skill>/
      meta.json
      uk.json
      en.json
```

A Domain with direct Skills places their directories directly below the Domain.
Domains may contain both Groups and direct Skills.

- `meta.json` holds only locale-independent values, currently `id`,
  `collection`, and applicable child-slug lists `groups`/`skills`.
  These lists describe links to separate child directories, **not embedded
  localized children or bare UUID foreign keys**.
- The generator derives `collection` from the canonical entity kind and
  validates it against the shared `Collection` type
  (`@svitlo/contracts/content`, exported through `@svitlo/engine/content`).
  For Skills: `"skill"`; Groups: `"skillGroup"`; Domains: `"skillDomain"`.
  Authoring builders already supply this discriminator to entity objects;
  it must also be emitted in each generated `meta.json` automatically.
- `<language>.json` holds only locale-dependent values: `name` and, where
  authored for frontend display, `description`.
- The original `description.methodological` is editorial-only. For runtime
  copy, select exactly `description.frontend[language]`; this is mandatory
  for Skill and optional for Group/Domain.
- Never duplicate `id`, `collection`, child structure, or other invariant
  fields in locale files. Never include a `language` field (filename provides
  it) or a `slug` field (directory path provides it) in **any** published JSON.
- Validate authored `slug` against the corresponding `*.data.ts` basename,
  even though it is not serialized. Keep UUID globally unique within a textbook.

Example `meta.json` for a Group:

```json
{ "id": "00000000-0000-4000-8000-000000000003",
  "collection": "skillGroup",
  "skills": ["testRecognizeRed", "testRecognizeOrange"] }
```

Example `uk.json` for the same Group:

```json
{ "name": "Теплі кольори" }
```

## 4. No generated catalog index

- Do **not** generate `public/data/skills/index.json`: no `version`,
  no `languages` list, and no `domains` list in published resources.
- Supported languages come from the shared localization types/registry; the
  language code in the filename is the registry's `language` field.
  Thus `be-tarask` uses `be.json`, without treating it as a separate
  unsupported locale or silently swapping its orthography.
- The textbook declares its root SkillDomain slugs in its own typed page/config
  boundary, which may be passed to a reusable UI Kit component later.
  Do not import authoring `*.data.ts` to discover root domains in browser code.
- The loader traverses child path segments from `meta.json`, fetches the
  requested locale for each node, verifies the runtime schema and reconstructs
  entities in memory. Missing files or unknown Collection values are hard errors.
- Offline packs may cache shared `meta.json` once and only the selected locales.
  Browser caches are independent of source-control tracking.

## 5. Verification and shared component boundary

- Test deterministic generation, malformed/duplicate identity, missing
  translations, mixed Domain child types, stale output cleanup, and strict
  read-only check mode.
- Verify generated schemas against the runtime loader (including slug from
  path, language from filename and `collection` from metadata).
- The Playground Skills page is a prototype, but its data transport and map
  must depend on an injected textbook Domain list and generic published
  resources, so moving the view to `shared/ui-kit` does not bring
  Playground-only fixtures or other textbook authoring data into the kit.

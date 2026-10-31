# Published Skills resources

The canonical authoring graph is `learningApps/<textbook>/data/skills/index.ts` and the
corresponding Domain, Group, and Skill `*.data.ts` files. The application must fetch
static JSON from `public/Data/Skills`; it must not import authoring Data at runtime.

## URL and file layout

```text
public/Data/Skills/
  testColors/
    en.json                         # Domain, including Groups and their Skills
    uk.json
    testWarmColors/
      en.json                       # Group, including its Skills
      uk.json
      testRecognizeRed/
        en.json                     # Individual Skill
        uk.json
```

Every supported **language code** has its own file, for example `en.json`, `uk.json`,
or `be.json`. The full locale designation (`en-US`, `uk-UA`, `be-tarask`) is
resolved to its language code by the shared language registry. The generator reads
that registry, so a newly supported language is automatically included. As of this
fixture there are 28 language codes; adding a 29th requires adding it to the registry
and completing every entity's required translations.

A Domain JSON root has `id`, `slug`, `collection: "skillDomain"`, `name`,
optional localized `description`, `language`, and `groups` containing SkillGroup
objects with nested `skills`. Each Group JSON root has the same metadata and a
`skills` array. Each Skill JSON root has `collection: "skill"` and no children.
An exceptional ungrouped Domain uses `skills` directly and individual Skill files
at `<domain>/<skill>/<language>.json`.

`name` and `description` are **strings**, never dictionaries of locales.
`description` is emitted only when frontend text `description.fe[language]`
exists; authoring-only `description.methodological` is never published.
The `id` values are copied from stable authoring UUIDs, not regenerated.

## Commands

From the monorepo root:

```sh
node scripts/publish-skills-data.mjs --package learningApps/playground --write
node scripts/publish-skills-data.mjs --package learningApps/playground --check
node --test scripts/publish-skills-data.spec.mjs
```

Playground regenerates these JSON files on `npm run dev` and `npm run build`
through its `predev` and `prebuild` hooks, *before* Next.js serves the assets.

`--write` atomically replaces the **entire generated** `public/Data/Skills`
directory after validation. Never place handwritten files in that directory.
The `--check` command is read-only and fails on missing, changed, or stale files.
Unsupported languages, missing translations, duplicate slugs or UUIDs, and broken
child references fail generation instead of falling back to English.

The synthetic Playground `[TEST <code>]` values are temporary fixtures, **not**
valid translations for production use.

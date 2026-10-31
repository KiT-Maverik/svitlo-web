# Published Skills resources

The canonical authoring graph is `learningApps/<textbook>/data/skills/index.ts` and the
corresponding Domain, Group, and Skill `*.data.ts` files. The application must fetch
static JSON from `public/Data/Skills`; it must not import authoring Data at runtime.

## URL and file layout

```text
public/Data/Skills/
  index.json                      # Domain slugs and supported language codes
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

## Playground Skills visualizer

The `/skills` page loads `public/Data/Skills/index.json` to discover domain slugs and
language codes. It then fetches only the selected language's Domain JSON files,
so no client imports authoring `*.data.ts` files or downloads other languages.
The radial view has an avatar root, collapsible Domain and Group branches,
pan/zoom, an accessible outline mode, and an information panel. Skills are
leaf nodes; selecting a leaf shows its description. The central avatar is an
anonymous placeholder until a user-profile data source is connected.

## Skill mastery preview and learning call to action

Each leaf Skill node has two independent display states. **Compact** is the default:
the localized `name`, numeric mastery percentage, and a bottom progress stripe
remain visible, with a subtle mastery-tier tint. Clicking the Skill title expands
the card to show its frontend `description`, full mastery bar, and the
**Прокачати** action; clicking again minimizes it. The expanded state is keyed
by Skill UUID, independent of collapsing Domain/Group descendants. The outline
mode supports the same toggle. Map positions do not jump when a card changes size.

Only leaf Skill cards show the mastery meter (0–100%). For now `mockSkillMastery(skillId)` produces a deterministic,
pseudo-random demo percentage from the stable UUID. These numbers are **not**
learner outcomes, quiz scores or statistics; they are never written to the
published static JSON. Later replace this function with a profile-specific
mastery source keyed by Skill UUID.

The **Прокачати** action links to `/skills/<skillUuid>/learn?lang=<languageCode>`.
This is a distinct anchor from the node's information control; activating the
link must not trigger map dragging or collapse the node. The destination reads
the same locale-specific public Skills JSON and validates the requested UUID.
Until Lesson/Program authoring metadata exposes an actual Skill UUID → content
relationship, the destination shows an explicit empty result instead of linking
unrelated demo lessons. Add filtered Lessons and Programs only after their
Skill-ID relationships become available.

## Page-scoped controls in the shared settings sidebar

The `/skills` route creates `SkillsPageSettingsProvider` and renders the existing
`@svitlo/ui-kit/learning-layout` navbar. Its settings icon opens the ordinary
right-hand settings Drawer with `SkillsPagePreferences`. A generic
`settingsContent` slot was added to the shared layout; lesson pages continue
to use their existing placeholder when this slot is absent. Skills hides the
lesson-only bottom navigation using `showBottomNavbar={false}`.

Default page settings:

- `showMastery: true` — whether the percentage and mastery bar appear.
- `colorMastery: true` — whether mastery adds tier tint to compact cards and
  colors the mastery bar; disables the color option in the sidebar when mastery
  is hidden, without clearing its stored choice.
- `showPump: true` — whether expanded Skill cards and outline entries have a
  learning destination action.

Components consume these values from the **page context** rather than the
static published Skill Data. Changes update visible cards instantly. Settings
are intentionally ephemeral and reset on a new page mount; no per-user storage
is implemented. The navbar's existing locale selector synchronizes with the
same context, and Domain JSON requests still load only the active language.

## Mind-map actions in the right settings sidebar

Under **Керування мапою**, the shared right-hand navbar settings drawer exposes:

- **Згорнути все** — hide every branch below the profile avatar, and compact the Skill cards.
- **Розгорнути все** — show every branch and expand all Skill cards.
- **Вмістити в екран** — switch from the outline view to the radial map if needed, then
  center and scale the *currently visible* nodes to the actual viewport.

These buttons call the same page-owned actions as the map. The page context registers
the live map actions while Skills has finished loading; controls are disabled before
the map is available and released on unmount. Fit accounts for both compact and
expanded Skill card dimensions and preserves user zoom/pan during ordinary node
interaction until Fit is explicitly requested. The map's bottom-right fit icon
invokes the exact same action. The right drawer closes after using Fit, so it
cannot obscure the newly fitted graph. Removed redundant collapse/expand buttons from the
top-of-page controls.

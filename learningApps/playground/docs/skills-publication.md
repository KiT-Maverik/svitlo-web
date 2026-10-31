# Playground published Skills resources

The authoring source remains `learningApps/playground/data/skills/**/*.data.ts`.
The application does not import authoring modules at runtime. Publication follows
[Generator Requirements](../../../studio/generator-requirements.md).

## Format

All generated files are under **`learningApps/playground/public/data/skills/`**
(lower case), and the **whole `public/data/` is Git-ignored**. The build generates
files before `next dev` and `next build`.

```text
public/data/skills/
  testColors/
    meta.json
    en.json
    uk.json
    testWarmColors/
      meta.json
      en.json
      uk.json
      testRecognizeRed/
        meta.json
        en.json
        uk.json
  testShapes/
    meta.json
    en.json
    uk.json
    ...
```

A `meta.json` stores stable `id`, automatically generated
`collection: "skillDomain" | "skillGroup" | "skill"` and child-slug lists
(`groups` and/or `skills` where applicable). Its collection value is
validated against the shared `Collection` type. It never contains the entity
`slug`, which is encoded in the directory path.

One `<language>.json` per supported language contains only the translated
`name` and optional `description` (required for Skills). It excludes
`id`, `collection`, `slug`, `language` and nested entity objects.
The generator reads only `description.frontend[language]` for runtime copy,
never the methodological description.

A Domain may reference Groups and direct Skills simultaneously. Those lists
hold **child directory slugs**, not IDs or duplicated localized children.
One `meta.json` per entity may be cached across all localized copies.

**No generated `index.json`.** Locales are resolved from
`DEFAULT_SUPPORTED_LANGUAGES`. Root Domain slugs are supplied by the
textbook's own `skillsPageConfig.ts`, not by a runtime authoring import.
The Playground currently supplies **two test Domains**, `testColors` and
`testShapes`; it does not publish Mathematics Skills. The test data's
`[TEST ...]` strings remain intentionally synthetic—not verified translations.

## Generator and verification

From repository root:

```sh
node scripts/generators/data/publish-skills-data.mjs --package learningApps/playground --write
node scripts/generators/data/publish-skills-data.mjs --package learningApps/playground --check
node --test scripts/generators/data/publish-skills-data.spec.mjs
```

The `predev` and `prebuild` hooks run `--write`, after flag syncing. The
generator validates the authored slug, complete localization dictionaries,
UUID uniqueness, shared Collection discriminators and structural relationships.
`--write` validates before atomically replacing only `public/data/skills`;
`--check` compares deterministic expected output without changing files.

## Playground view and future UI Kit extraction

`SkillsPageShell` passes `domainSlugs` to `SkillsMindMap`. The generic
`skillsData.client` loader uses this list, the shared language registry, and
published static files. It fetches `meta.json` plus the requested locale file
for each node and reconstructs `SkillNode` in memory. Missing metadata,
missing localized text, malformed identifiers and unexpected fields are errors;
there is no implicit fallback or manifest request. This loader, parser and
view should move into `shared/ui-kit` without depending on Playground-only
`data/skills` or page-level root Domain declarations. Keep the textual labels
and presentation mechanisms generic for that migration.

The map has a central placeholder avatar, Domain and Group branches, expanded
and compact Skill cards, list view, pan/zoom, mouse-wheel anchoring, touch drag
and pinch zoom. Selected Skill cards show the localized frontend description.
`mockSkillMastery(skillId)` shows deterministic **demonstration values**, never
real learner assessment or an authored Skill property. Per-page right-sidebar
options control mastery visibility/color and the **Прокачати** action; they
reset on page remount.

The right sidebar also has **Згорнути все**, **Розгорнути все**, and
**Вмістити в екран**. The latter centers and fits visible compact/expanded
cards, switches back from list view, and closes the sidebar so the map is not
obscured. Map-side fit uses the same action. Learning links navigate to
`/skills/<skillUuid>/learn?lang=<languageCode>`; until real Lesson-to-Skill
relationships are published, the destination explicitly reports no linked
lessons rather than fabricating them.

Mobile real-device gesture checks, contrast checks and long-translation
clipping tests are still needed before the prototype is production-ready.

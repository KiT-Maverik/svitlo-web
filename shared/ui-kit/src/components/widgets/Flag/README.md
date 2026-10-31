# Static SVG locale flags

SVG assets live in `public/flags/<code>.svg`. The `Flag` component uses Next.js `Image` and a strict mapping from the current `DefaultSupportedLanguage['locale']` union to asset codes. A per-flag TSX component is **not** required.

- No new supported languages or translations are registered.
- 22 existing locales map to 19 country flag assets; Hindi, Tamil, Telugu and Marathi share `in.svg`.
- Seven future-ready assets are included, but not selectable by the dispatcher: Belarusian Taraškievica (`by.svg`), Crimean Tatar (`qm.svg`), Lithuanian (`lt.svg`), Latvian (`lv.svg`), Estonian (`ee.svg`), Georgian (`ge.svg`), Kazakh (`kz.svg`).
- `pt.svg` is Portugal's flag, retained as an unused asset; `pt-BR` intentionally maps to `br.svg`, **not** `pt.svg`.
- `qm.svg` uses the project's custom lowercase `qm` asset code, not ISO 3166-1. All other asset names use ISO 3166-1 alpha-2 country codes.

## Dimensions and vector safety

National flags have **different official aspect ratios** (e.g. US 19:10, Kazakhstan 2:1, Ukraine 3:2, Estonia 11:7). Do **not** overwrite their viewBoxes to force 3:4 or 3:2. The dispatcher defaults to a 24 × 16 CSS-pixel image slot with `object-fit: contain`, and callers may override width/height.

Every SVG here has a `viewBox` and no root absolute width/height. XML declarations, DTDs, comments, titles, editor metadata and embedded raster images were removed. All `href`/xlink references, where used, are internal `#id` references. The assets are displayed as external image files, rather than injected as HTML.

`Flag.assets.unit.spec.ts` enforces an inert SVG subset and sensible native viewBox geometry. Any new asset should also be reviewed before publishing, not only regex-tested.

## Noteworthy assets

- `ua.svg`: blue/yellow bands plus the centrally placed **vector** Lesser Coat of Arms of Ukraine, composited directly from the separately uploaded SVG; no embedded PNG, raster image, or second file request. This is a stylized flag-with-coat-of-arms design, rather than the plain official national flag.
- `by.svg`: replaced the heavy Pahonia variant with the plain historical white-red-white flag used for `be-tarask`.
- `pl.svg`: replaced the heavy coat-of-arms variant with the plain Polish national flag.
- `br.svg`: **temporary simplified** vector derived from the former BrazilFlag component. The star field, white motto band and correct emblem details need a verified asset before considering it a faithful official Brazilian flag.
- `pt.svg`: Portuguese flag, not used for Brazilian Portuguese.
- `es.svg`: detailed source is still about **155 KB**, much larger than most flags. Its geometry is retained; consider further lossless SVG optimization if bandwidth is critical.

See `SOURCES.md` for the original imported filenames and editorial/licensing reminders.

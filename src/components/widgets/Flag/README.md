# SVG flags

Every asset is an independent inline SVG component: color fields, bands, cantons and simple geometric shapes only. No common geometry builder is used.

The `Flag` dispatcher supports **only** the current 22 entries in `DEFAULT_SUPPORTED_LANGUAGES` (19 distinct flags: four Indian language entries share the Indian flag). Five additional assets are ready for future localization but are not yet supported by `Flag`: historical Belarusian white-red-white (`be-tarask`), Crimean Tatar (`crh-Latn`), Lithuania (`lt`), Latvia (`lv`) and Estonia (`et`). The language definitions and locale files remain unchanged.

## Pending symbols and insignia

- United States: 50 white stars
- China: five yellow stars
- India: Ashoka Chakra
- Spain: coat of arms
- Saudi Arabia: Shahada and sword
- Brazil: blue celestial globe, motto band and stars
- Pakistan: crescent and star
- South Korea: taegeuk and four trigrams
- Turkey: crescent and star
- Vietnam: yellow star
- Malaysia: crescent and 14-point star
- Israel: Star of David
- Crimean Tatar: golden tamga

The simple geometric red discs of Japan and Bangladesh are rendered. Any later insignia should use a verified source and appropriate licensing. SVGs are decorative by default when rendered by `Flag`, but callers may override ARIA attributes.

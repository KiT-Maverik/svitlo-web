# Mathematics frontend-description localization — migration checkpoints

Branch: `feat/math-localized-skill-fe-descriptions`  
Base: `main` at `7212824cb3204e5482c80a463d4ac120accb7725` (2026-10-30).  
Locale roster: **28** `LanguageCode` values from `shared/contracts/src/types/languages.ts`, including `be` / `be-tarask`. Do not assume this count in code; re-check the registry before each stage.

## Domains (code + staging Markdown inventory)

- [ ] Counting — 15 Skills, 5 Groups (**current stage**)
- [ ] Natural Numbers — 27 Skills, 5 Groups
- [ ] Fractions — 19 Skills, 4 Groups
- [ ] Arithmetic — 79 Skills, 5 Groups
- [ ] Algebra — 17 Skills, 5 Groups
- [ ] Geometry — 35 Skills, 10 Groups
- [ ] Measurement — 21 Skills, 5 Groups
- [ ] Time — 13 Skills, 3 Groups
- [ ] Money — 6 Skills, 2 Groups
- [ ] Data — 15 Skills, 3 Groups
- [ ] Probability — 4 Skills, 2 Groups
- [ ] Problem Solving — 23 Skills, 7 Groups
- [ ] Reasoning — 10 Skills, 4 Groups

**Total:** 284 Skills, 60 Groups, 13 Domains.

## Current stage — Counting

- [ ] Verify each English frontend description against the existing English methodological description.
- [ ] Localize 15 Skill descriptions across all supported languages (420 values at 28 languages).
- [ ] Localize five Group descriptions and the Counting Domain description (168 values at 28 languages).
- [ ] Confirm all language keys are present and nonblank; verify the distinct mathematical competencies.
- [ ] Confirm existing IDs, name dictionaries, taxonomy membership and methodological descriptions are unchanged.
- [ ] Commit the finished stage and record its revision SHA in this checklist.

## Final stage — shared-contract migration (not yet authorized to enact)

- [ ] Re-inventory all affected Skills, Groups, Domains and their builders/consumers.
- [ ] Ensure complete frontend dictionaries for every affected entity.
- [ ] Require `description.fe` in shared contracts only when coverage is complete.
- [ ] Reject missing/blank/partial dictionaries without fallbacks, update workflows/tests, run typechecks/focused tests.

**Authoring rule:** the English frontend text is reviewed before all translations; `description.methodological` stays independent and English. `docs/skills/taxonomy.md` is staging material and must not be deleted. No grade ceilings, added competencies or editorial restructures. Outstanding issues and validation limits must be reported without claiming editorial approval.

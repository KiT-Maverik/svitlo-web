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

## Counting: English copy gate (methodologist review, before translation)

These descriptions are user-facing prose checked against the existing English `description.methodological`; they are **not** replacements for that canonical field. Existing taxonomy boundaries and IDs remain unchanged. This checklist records the English baseline for semantic comparison by translators.

| Entity | Reviewed English `description.fe.en` |
| --- | --- |
| Counting (Domain) | Learn how numbers tell how many things there are, where things are in order, and how to count forward, backward, or in equal steps. |
| Cardinality (Group) | Find how many objects are in a collection, including when it is empty. Compare collections by their number of objects, not by size or arrangement. |
| basicCardinality | Count every object once and use the last number you say to tell how many there are. The total stays the same if you rearrange them or count in a different order. |
| compareSets | Find which collection has more, fewer, or the same number of objects by matching or counting. The objects' size and appearance do not determine the total. |
| groupAndCount | Find a total by grouping objects into tens or hundreds, then counting any objects left outside the full groups. |
| zero | Zero means there are no objects in a collection. An empty container still exists, and zero is a number. |
| Number sequences (Group) | Move through consecutive numbers from different starting points, forward or backward. Find which number comes next or is missing, even across tens or hundreds. |
| oneToOne | Give each object exactly one counting word, without skipping or counting any twice. Counting order does not change the total. |
| forward20 | Start from any number within 20 and find the next number by adding one, even when crossing ten. |
| backward20 | Start from any number within 20 and count backward one at a time, including across ten. |
| forward100 | Start anywhere within 100 and move to the next or previous number by one, even across a multiple of ten. |
| forward1000 | Find the next or missing consecutive number within 1,000, including when crossing tens or hundreds. The step is always one. |
| Skip counting (Group) | Count equal groups by adding the same amount each time. Use steps of 2, 5, 10, or 100 instead of counting each object separately. |
| countBy2 | Add two at each step to count in pairs. Distinguish the number of pairs from the total number of objects. |
| countBy5 | Add five at each step to count equal groups of five and find their total. |
| countBy10 | Add ten at each step while the ones stay the same. Crossing a hundred means regrouping ten tens into one hundred. |
| countBy100 | Add one hundred at each step while the tens and ones stay the same. |
| Ordinal counting (Group) | Tell an object's position in a chosen order, such as first or fourth. Position is different from the total number of objects. |
| basicOrdinal | Find an object's position in an ordered sequence and its direction, such as third from the left. Changing the order can change the position without changing the total. |
| Even and odd numbers (Group) | Tell whether a number is even or odd by making pairs. An even amount pairs up completely; an odd amount leaves one unpaired. |
| evenOdd | Make pairs to check whether a number is even or odd. An even number leaves none unpaired; an odd number leaves one. |

**Editorial note:** The names and methodological descriptions above are existing Code authority. This stage modifies `fe` only and adds no new mathematical competency.

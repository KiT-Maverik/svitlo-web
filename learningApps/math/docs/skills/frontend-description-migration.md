# Mathematics frontend-description localization — migration checkpoints

Branch: `feat/math-localized-skill-fe-descriptions`  
Base: `main` at `7212824cb3204e5482c80a463d4ac120accb7725` (2026-10-30).  
Locale roster: **28** `LanguageCode` values from `shared/contracts/src/types/languages.ts`, including `be` / `be-tarask`. Do not assume this count in code; re-check the registry before each stage.

## Domains (code + staging Markdown inventory)

- [x] Counting — 15 Skills, 5 Groups (**completed**)
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

## Parallel agent ownership (agreed 2026-10-30)

Each Domain has **exactly one owner**. Ownership is allocated to balance **Skill counts**, so the blocks are not strictly contiguous. The Domain inventory and Skill counts are authoritative only for this checkpoint; recheck repository data and current language registry before future edits.

| Agent | Domains in processing order | Skills | Dedicated scope |
| --- | --- | ---: | --- |
| **Agent 1** (this branch, Draft PR #97) | #1 Counting (15), #2 Natural Numbers (27), #3 Fractions (19), #6 Geometry (35) | **96** | First-to-last through #3, then #6 |
| **Agent 2** (separate branch and Draft PR) | #4 Arithmetic (79), #5 Algebra (17) | **96** | Split Arithmetic into Groups for manageable commits |
| **Agent 3** (existing other chat, separate branch and Draft PR) | #13 Reasoning (10), #12 Problem Solving (23), #11 Probability (4), #10 Data (15), #9 Money (6), #8 Time (13), #7 Measurement (21) | **92** | Process in reverse order, starting at #13 |

**Global total:** 284 Skills. Agent 1 already completed #1 Counting; Agent 1's next Domain is #2 Natural Numbers. Never switch into another Agent's assigned Domain without an explicit new allocation.

**Cross-branch rules:** Each agent edits only its owned Domain subtrees, keeps a dedicated branch and Draft PR with per-Domain commit checkpoints, and preserves source taxonomy, UUIDs, names and methodological descriptions. Avoid concurrent modifications to shared migration/checklist files across branches; use each agent's PR description for individual progress. Any required shared contracts/builders/workflow changes, especially making `description.fe` mandatory, are deferred to a **separate integration stage** after all affected Skills, Groups and Domains are filled and branches are reconciled. No agent merges without the editor's approval.

## Current stage — Counting

- [x] Verify each English frontend description against the existing English methodological description.
- [x] Localize 15 Skill descriptions across all supported languages (420 values at 28 languages).
- [x] Localize five Group descriptions and the Counting Domain description (168 values at 28 languages).
- [x] Confirm all language keys are present and nonblank; verify the distinct mathematical competencies.
- [x] Confirm existing IDs, name dictionaries, taxonomy membership and methodological descriptions are unchanged.
- [x] Commit the finished stage and record its revision SHA in this checklist.

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

## Counting completion checkpoint (2026-10-30)

- **Domain coverage:** 15/15 Skills, 5/5 Groups, 1/1 Domain.
- **Language coverage:** 28/28 language codes in each of 21 dictionaries; 420 Skill translations + 140 Group translations + 28 Domain translations = **588 nonempty values**.
- **Sequence of review:** all 21 English frontend drafts recorded above before localization; translations added in separate small Group commits. A separate proofreading commit corrected identified wording issues.
- **Diff validation:** in all 21 entity files the only removed line is the prior inline `description`; its English `methodological` value appears unchanged in the expanded block. UUIDs, IDs, names, memberships, exports and staging Markdown were not edited.
- **Automated static validation through GitHub file patches:** compared 28 `fe` keys in each changed entity with the actual current `DEFAULT_SUPPORTED_LANGUAGES` registry; checked that every value is nonempty, no language key is duplicated/missing, and all existing methodological values are byte-for-byte unchanged. **Result: 21/21 pass.**
- **Localized language checks:** RTL text authored in Arabic, Urdu and Hebrew; `be` text uses Taraškievica. English copy and linguistic issues found during revision were corrected without altering Skill meanings. These are authoring checks, not an independent native-speaker certification.
- **First Domain checkpoint revision:** `7b05f08df69b84b62110f8b81160e8df4caaa240` (through proofreading), followed by this documentation checkpoint.
- **Execution limit:** a local working tree and runnable dependency installation are not available through the GitHub connector, so local TypeScript typechecks or npm focused tests **were not run**. Do not interpret static file checks as a TypeScript compile or a passing CI result. Read GitHub Actions status from the PR separately.
- **Next:** Natural Numbers — 27 Skills, 5 Groups; check the then-current language registry before authoring. Do not change the shared optional `fe` contract yet.


## Natural Numbers — English authoring gate (2026-10-30)

All 33 entity descriptions below are newly drafted learner-facing English copy. They were checked against the individual English methodological descriptions and remain distinct from canonical authoring text. Preserve these reference drafts as a checkpoint while translating one Group at a time; do not change taxonomy identities or scope.

| Entity file (under `numeration/`) | English `description.fe.en` |
|---|---|
| `numeration.data.ts` | See how natural numbers represent quantities, how each digit's position changes its value, and how to compare, place, and estimate numbers. |
| `notation/notation.data.ts` | Connect spoken numbers, written digits, and the quantities they represent, including zero and numbers with several digits. |
| `notation/skills/digits09.data.ts` | A digit is a written symbol from 0 to 9; a number is the value it represents. One number can be written using several digits. |
| `notation/skills/readWrite20.data.ts` | Connect numbers from 0 to 20 with their spoken names, written forms, and matching quantities. Zero represents none. |
| `notation/skills/readWrite100.data.ts` | Read and write numbers up to 100, using tens and ones to understand what each digit means. |
| `notation/skills/readWrite1000.data.ts` | Read and write three-digit numbers using hundreds, tens, and ones. A zero can mark an empty place without changing the positions of other digits. |
| `placeValue/placeValue.data.ts` | Understand how digits gain value from their place and how ones, tens, and hundreds can be grouped, exchanged, or split without changing a number. |
| `placeValue/skills/digitPlaceValue.data.ts` | A digit's position changes its value: the two 2s in 232 mean 200 and 2. |
| `placeValue/skills/expandedForm.data.ts` | Break a number into a sum of its place values and put them back together. For example, 243 = 200 + 40 + 3. |
| `placeValue/skills/flexiblePartition.data.ts` | Split the same number into different sums without changing its value: 146 can be 100 + 40 + 6 or 130 + 16. |
| `placeValue/skills/hundredsTensOnes.data.ts` | See how the digits in a three-digit number show hundreds, tens, and ones, including places containing zero. |
| `placeValue/skills/makeHundred.data.ts` | Ten tens make one hundred, just as one hundred ones do. They are different groupings of the same amount. |
| `placeValue/skills/makeTen.data.ts` | Group ten ones into a ten, or split a ten back into ten ones. The amount stays the same. |
| `placeValue/skills/multipleRepresentations.data.ts` | Recognize the same number when shown as digits, counting blocks, a point on a number line, or a collection of objects. |
| `placeValue/skills/regroupPlaceValues.data.ts` | Exchange one hundred for ten tens, or one ten for ten ones, and reverse the exchange without changing the total. |
| `placeValue/skills/tensOnes.data.ts` | Build a two-digit number from tens and ones, or split it into them. For example, 47 = 40 + 7. |
| `placeValue/skills/totalTensInNumber.data.ts` | Find all the complete tens or hundreds inside a number, not just the digit in that place. For example, 348 contains 34 full tens. |
| `placeValue/skills/zeroPlaceholder.data.ts` | A zero can keep an empty place in a number: in 305, it means there are no tens, so 305 is not 35. |
| `comparison/comparison.data.ts` | Compare quantities and numbers to tell which is greater, smaller, or equal, and put numbers in order. |
| `comparison/skills/moreLessEqual.data.ts` | Match or count objects to tell which collection has more, fewer, or the same number. Larger objects do not always mean more objects. |
| `comparison/skills/comparisonSymbols.data.ts` | Use &lt;, >, and = to show which number is smaller, larger, or equal. Switching two different numbers reverses the inequality sign. |
| `comparison/skills/order20.data.ts` | Arrange numbers from 0 to 20 from smaller to larger or the other way around. Equal numbers can appear next to each other. |
| `comparison/skills/order100.data.ts` | Compare two-digit numbers by looking at tens first, then ones when the tens match, and put them in order. |
| `comparison/skills/order1000.data.ts` | Compare three-digit numbers by hundreds first, then tens, then ones. The first different digit decides which is greater. |
| `numberLine/numberLine.data.ts` | Place numbers on a line with even spacing; use their positions to see which comes first and how far apart they are. |
| `numberLine/skills/beforeAfterBetween.data.ts` | Find the number immediately before or after another number, or numbers that lie between two given numbers. |
| `numberLine/skills/distanceOnLine.data.ts` | Count unit intervals between integer points on a number line. The distance is the same in either direction. |
| `numberLine/skills/numberLine20.data.ts` | Find numbers up to 20 on an evenly spaced number line. Each move of one unit covers the same distance. |
| `numberLine/skills/numberLine1000.data.ts` | Find numbers up to 1,000 on a number line using its starting point and scale. Equal number jumps take equal distances. |
| `estimation/estimation.data.ts` | Make sensible approximations of quantities or values and round numbers to a useful level of precision. |
| `estimation/skills/estimateQuantity.data.ts` | Estimate how many objects there are by looking at groups or a small part, then check by counting them. |
| `estimation/skills/roundToTen.data.ts` | Find the nearest multiple of ten by comparing distances to the tens on either side. Exactly halfway requires a rounding rule. |
| `estimation/skills/roundToHundred.data.ts` | Find the nearest multiple of one hundred and see how much the rounded value differs from the exact one. Halfway needs a rule. |

**Scope:** 4 Notation, 11 Place Value, 5 Comparison, 4 Number Line, 3 Estimation Skills; plus five Groups and one Domain. Do not assume a rounding tie-breaking convention; preserve the methodological distinction between exact and approximate values.

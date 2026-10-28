# Biology — Editorial Review & Decision Log

Date: 2026-10-28

> **Status: OPEN editorial review.** A candidate present in [taxonomy.md](./taxonomy.md) is **not** thereby approved. This document makes granularity decisions and subject boundaries explicit **outside the taxonomy**, so they can be discussed before creating Definitions, UUIDs or Code.

## 1. Decisions expressed by the editor — reflected in the draft

| Topic | Editor direction | Applied in taxonomy / concept |
| --- | --- | --- |
| Discipline naming | Use clear subject areas from `Studio/Subject Proposition`: botany, zoology, anatomy, physiology, etc. | Domains renamed to **Ботаніка**, **Зоологія**, **Анатомія та фізіологія людини**, **Екологія**, **Генетика та еволюція**, etc.; no new textbooks. |
| Plant organs | **One Skill** for identifying root, stem, leaf and flower. | Four one-organ Skills replaced by **«Визначати основні органи рослини»**. A separate existing Skill about **functions** remains because knowing names and explaining function differ. |
| Animal groups | **Keep independent Skills** for insects, fish, amphibians, reptiles, birds and mammals. | Retained the individual group-recognition Skills; their descriptions now give the diagnostic biological features instead of repeating names. |
| Biomimicry | Primarily **engineering in Physics**, not an independent Biology engineering competency. | Removed the three engineering Skills and entire `Біомімікрія` Group from Biology; recorded the proposed primary owner in [Subject Proposition](../../../../studio/Subject%20Proposition.md). **No Physics Skill has been created.** |
| Biotechnology ecological risk | Keep it. | Retained **«Оцінювати екологічний ризик застосування біотехнології»** with a clarified distinction between possible risk and proven harm. |
| «Хто це?» | Encyclopedia **lesson collection**, not Skill. | No separate Skill or SkillGroup; uses existing identification/classification competencies. |
| Scope and subject boundaries | Biology includes organisms, their biology and ecosystem relationships; hygiene and safety belong to Health & Safety. | Recorded decisions in Subject Proposition; not redundant rows masquerading as unresolved issues. |
| Format and descriptions | Metadata first; prose is meaningful explanatory content, not a paraphrase of the heading. | Reordered `Skills/Groups`, `Definition`, `Code` above unlabelled prose, rewrote domain/group/skill descriptions; same requirement applied to Studio skill/template and persona. |

## 2. **Open editorial decision: ONE vs THREE Skills for living / dead / never alive**

**Affected group:** [Біологічне дослідження → Ознаки живого](./taxonomy.md#ознаки-живого).

The editor correctly distinguished **three categories**: (1) a currently living organism, (2) a dead organism or object originating from one, (3) an object that has never been alive. However, **three categories do not necessarily require three Skill identities**.

**Option A (recommended; provisional in taxonomy): one classification Skill.**

- **«Класифікувати об’єкти як живі, мертві або такі, що ніколи не були живими».**
- It describes one coherent three-way decision: determining current life status and biological origin, rather than three separate learning goals each based on a different answer choice.
- Example distinctions: a growing tree is living; a dead leaf was part of a living organism; a mineral rock was never alive.
- A different competency — **«Обґрунтовувати висновок про належність об’єкта до живої природи»** — remains separate because choosing a category and justifying criteria can be independently demonstrated.

**Option B (editor's possible intended granularity): three separately tracked Skills.**

- **«Розпізнавати живі організми»** — uses evidence of life processes.
- **«Визначати, чи неживий об’єкт має біологічне походження»** — recognizes objects that were once living or are derived from living material.
- **«Визначати, чи об’єкт ніколи не був живим»** — distinguishes non-biological matter from former biological material.

**Trade-off:** Option B allows per-category progress tracking but carries strong semantic overlap, especially between the last two. In Option A a single categorization task has three outcomes, which the **Assessment** layer may still analyze separately without creating three stable Skill IDs. **Explicit editor confirmation required:** is the intended structure **one three-way Skill** or **three independently assessed Skills**? The taxonomy currently uses A provisionally, not as an approved decision.

**Scientific caveat:** “dead” vs “derived from something once alive” are not identical predicates. Paper, wood, wool and food may derive from biological material without themselves having been whole living organisms; dormant seeds may be alive without obvious movement. Precise examples and exceptions belong in future Lessons; avoid a false simplistic rule in an Assessment.

## 3. Additional decisions to review

| Decision | Methodologist proposal | Status / action |
| --- | --- | --- |
| Definition of a virus | Add an independent Skill **«Пояснювати, що таке вірус»**, because knowing that a virus lacks cellular machinery and relies on a host is more than recognizing the label. Retain a separate comparison with a cellular organism and a separate transmission-model competency. | **Proposed; editor confirmation needed** (3 Skills in virus Group). |
| Biological tables vs graphs | **Tabular growth observations**: reason about changes between rows/time points and a biological process. **Graph of a process**: infer trend/rate/shape and their biological meaning. They are separate representation skills, not merely different question interfaces; general graph reading may also be taught in Math. | **Proposed; editor may merge or share cross-subject skills.** |
| Cross-subject scientific skills | Is the ability to control an experiment or read biological data a Biology-specific Skill, or one shared Skill reused by multiple textbooks? Avoid duplicate IDs with identical meaning. | **Open future cross-textbook architecture decision**; no new IDs now. |
| Boundary: life-process breathing | Clarify **cellular respiration** vs lung ventilation; plants also respire. Revised description makes the distinction explicit. | Clarification in draft, requires factual/pedagogical review. |
| Local taxonomy granularity | A 138-item draft contains other candidates that may need atomicity audit: examples-based species recognition, certain classifications, and modeling across multiple systems. | **Open global review**, no claim of final approval. |

## 4. Why the previous review failed

The earlier taxonomy put some split/merge questions into a summary at the end while **already presenting unreviewed skill choices as if they were stable catalog entries**. The user did not receive a distinct decision handoff. Some descriptions were generated as `Skill title + period`, which met the Markdown shape but **contained no conceptual explanation**. These are documented methodological and quality failures, not editor-approved design decisions.

The [Create Skills Taxonomy Skill](../../../../studio/skills/create-skills-taxonomy.skill.md) now requires a separate decision report, visible user-facing review and a substantive description pass for **every** Domain/Group/Skill.

## 5. Remaining workflow / stop condition

The changes recorded above are **draft proposals incorporating editor feedback**, not an approved taxonomy. Before the **Create Skill Definitions** stage:

1. Confirm **one vs three** classification Skills for living/dead/never alive.
2. Confirm whether virus definition is an independent Skill.
3. Decide whether biological-table and biological-graph interpretation should have separate stable identities or use cross-subject Skills.
4. Review remaining atomicity and subject coverage; reconcile actual counts if any choices change.

**Do not create entity definitions, UUID files, `*.data.ts`, Lessons or Questions on the basis of open decisions.**

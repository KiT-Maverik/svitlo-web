# Biology — Editorial Review & Decision Log

Date: 2026-10-28

> **Status: OPEN editorial review.** A candidate present in [taxonomy.md](./taxonomy.md) is **not** thereby approved. This document makes granularity decisions and subject boundaries explicit **outside the taxonomy**, so they can be discussed before creating Definitions, UUIDs or Code.

## 1. Decisions expressed by the editor — reflected in the draft

| Topic | Editor direction | Applied in taxonomy / concept |
| --- | --- | --- |
| Discipline naming | Use clear subject areas from `Studio/Subject Proposition`: botany, zoology, anatomy, physiology, etc. | Domains renamed to **Ботаніка**, **Зоологія**, **Анатомія та фізіологія людини**, **Екологія**, **Генетика та еволюція**, etc.; no new textbooks. |
| Living / dead / never alive | **Approved: one Skill** for the three-way classification. | Existing **«Класифікувати об’єкти як живі, мертві або такі, що ніколи не були живими»** remains one Skill ID; distinguish the three response categories inside assessment, not via separate Skill IDs. |
| Viruses | **Approved: three independent Skills** (2026-10-28). | Keep **«Пояснювати, що таке вірус»**, **«Відрізняти вірус від клітинного організму»**, and **«Пояснювати основні шляхи поширення вірусів за моделлю»** as distinct Skills; do not merge the first two. |
| Subject ownership and data literacy | **Approved: remove four cross-disciplinary candidates from Biology** (2026-10-28). | Removed the entire now-empty **«Біологічні дані та наукові твердження»** Group: table reading, graph reading, source credibility and unsupported-claim checking. New total: **9 Domains / 33 Groups / 134 Skills**. No new cross-textbook Skill IDs assigned. |
| Plant organs | **One Skill** for identifying root, stem, leaf and flower. | Four one-organ Skills replaced by **«Визначати основні органи рослини»**. A separate existing Skill about **functions** remains because knowing names and explaining function differ. |
| Animal groups | **Keep independent Skills** for insects, fish, amphibians, reptiles, birds and mammals. | Retained the individual group-recognition Skills; their descriptions now give the diagnostic biological features instead of repeating names. |
| Biomimicry | Primarily **engineering in Physics**, not an independent Biology engineering competency. | Removed the three engineering Skills and entire `Біомімікрія` Group from Biology; recorded the proposed primary owner in [Subject Proposition](../../../../studio/Subject%20Proposition.md). **No Physics Skill has been created.** |
| Biotechnology ecological risk | Keep it. | Retained **«Оцінювати екологічний ризик застосування біотехнології»** with a clarified distinction between possible risk and proven harm. |
| «Хто це?» | Encyclopedia **lesson collection**, not Skill. | No separate Skill or SkillGroup; uses existing identification/classification competencies. |
| Scope and subject boundaries | Biology includes organisms, their biology and ecosystem relationships; hygiene and safety belong to Health & Safety. | Recorded decisions in Subject Proposition; not redundant rows masquerading as unresolved issues. |
| Format and descriptions | Metadata first; prose is meaningful explanatory content, not a paraphrase of the heading. | Reordered `Skills/Groups`, `Definition`, `Code` above unlabelled prose, rewrote domain/group/skill descriptions; same requirement applied to Studio skill/template and persona. |

## 2. **RESOLVED: ONE Skill for living / dead / never alive**

**Affected group:** [Біологічне дослідження → Ознаки живого](./taxonomy.md#ознаки-живого).

**Editor decision (2026-10-28): APPROVED — one classification Skill ID.** The three categories are (1) living, (2) dead / formerly living, (3) never alive, but the competence is making one classification choice with three possible outcomes. The distinction between a dead organism and biologically derived material still requires careful examples and definitions.

**Selected option A: one classification Skill (already represented in the taxonomy).**

- **«Класифікувати об’єкти як живі, мертві або такі, що ніколи не були живими».**
- It describes one coherent three-way decision: determining current life status and biological origin, rather than three separate learning goals each based on a different answer choice.
- Example distinctions: a growing tree is living; a dead leaf was part of a living organism; a mineral rock was never alive.
- A different competency — **«Обґрунтовувати висновок про належність об’єкта до живої природи»** — remains separate because choosing a category and justifying criteria can be independently demonstrated.

**Rejected alternative B (retained for decision history): three separately tracked Skills.**

- **«Розпізнавати живі організми»** — uses evidence of life processes.
- **«Визначати, чи неживий об’єкт має біологічне походження»** — recognizes objects that were once living or are derived from living material.
- **«Визначати, чи об’єкт ніколи не був живим»** — distinguishes non-biological matter from former biological material.

**Assessment consequence:** separately track confusion between the three answer categories, if useful, without creating additional stable Skill IDs. The approved granularity is one Skill, and the taxonomy already matches it. The separately retained **«Обґрунтовувати висновок про належність об’єкта до живої природи»** is a different skill (justifying an answer), not a fourth classification category.

**Scientific caveat:** “dead” vs “derived from something once alive” are not identical predicates. Paper, wood, wool and food may derive from biological material without themselves having been whole living organisms; dormant seeds may be alive without obvious movement. Precise examples and exceptions belong in future Lessons; avoid a false simplistic rule in an Assessment.

## 3. **RESOLVED: subject ownership follows required knowledge, not exercise context**

**Editor decision (2026-10-28): APPROVED.** A Skill belongs to a subject when performing it requires that subject's concepts or mechanisms, not merely because a question presents data or vocabulary from that subject. The canonical [Create Skills Taxonomy Skill](../../../../studio/skills/create-skills-taxonomy.skill.md) now mandates the **context-substitution test** for every candidate.

**Removed from Biology (no replacement Biology Skills):**

| Removed candidate | Why it is cross-disciplinary |
| --- | --- |
| **Інтерпретувати таблицю росту організмів** | Reading values, comparing rows and describing change are general data-analysis operations, whether the table contains plant growth or air temperature. |
| **Розпізнавати біологічну закономірність на графіку** | Identifying a curve's trend is transferable graph literacy. Inferring a biological **mechanism** from it would be a different candidate. |
| **Порівнювати надійність джерел біологічної інформації** | Source credibility criteria apply to information in other disciplines as well. |
| **Виявляти біологічне твердження, не підтверджене даними** | Identifying an unsupported inference is general critical/scientific reasoning. |

Their Group **«Біологічні дані та наукові твердження»** had no remaining Skills and was removed. The parent Domain **«Біологічні моделі та біотехнології»** now has **2 Groups and 8 Skills**. Entire taxonomy: **9 Domains / 33 Groups / 134 Skills**. The removed competencies may still be taught and assessed through cross-disciplinary Skills, but **ownership, IDs, and placement outside Biology have not been decided**. The four deletions do not mean these competencies are unnecessary.

**Illustrative contrast:** «read a growth chart» is general; «explain how changing illumination affects photosynthesis and plant growth» requires botanical knowledge. Botanical learning tasks may use graphs without registering duplicate graph-reading Skills in Biology.

### Cross-disciplinary ownership audit — OPEN, do not apply silently

The same test must now be applied to additional existing candidates, especially:

| Affected Biology Group | Candidates needing editorial ownership review | Why this is open |
| --- | --- | --- |
| **Біологічне дослідження → Дослідження та докази** | Formulating testable questions, predictions, variables, controls, interpreting results and justifying conclusions | These are largely generic methods of scientific inquiry; examine each candidate rather than deleting the whole Group without approval. |
| **Біологічне дослідження → Спостереження** | «Фіксувати зміни в часі», «Відділяти спостереження від припущення», potentially use of magnification | The operation might transfer unchanged to physics, geography or another subject; a genuinely biological observation skill would require biological interpretation. |
| **Біологічне дослідження → Біологічна класифікація** | Choosing/grouping/explaining classification criteria; possibly identifying organisms with a dichotomous key | General classification methods may be separable from taxonomic biological knowledge. Not every classification Skill is necessarily generic. |
| **Біологічні моделі та біотехнології → Моделювання біологічних систем** | «Відрізняти модель від реального явища», «Порівнювати дві моделі одного явища» | Generic model literacy may be independent of Biology; biological predictions/building a mechanism-based model may remain subject-specific. |

**Status: open editorial audit, not approval to remove these other candidates.** Review their actual descriptions, the subject knowledge needed, and cross-subject reuse before modifying their Skill IDs, Groups or Domain structure.

## 4. Additional decisions to review

| Decision | Methodologist proposal | Status / action |
| --- | --- | --- |
| Definition of a virus | Separate knowledge of the virus as a noncellular infectious agent, comparison with cellular organisms, and explanation of transmission models. These are different independently assessable competencies, although the first two share background facts. | **APPROVED (2026-10-28): keep all three Skills** in the virus Group; taxonomy already reflects this. |
| Cross-subject scientific skills | Investigate which general scientific-inquiry, classification, observation, model and data-literacy abilities should have shared Skill IDs or belong to another textbook. **No Biology-only IDs** simply because a biology example is used. | **OPEN:** editorial ownership review. Four identified generic data/source Skills are already removed from Biology; further deletions require individual approval. |
| Boundary: life-process breathing | Clarify **cellular respiration** vs lung ventilation; plants also respire. Revised description makes the distinction explicit. | Clarification in draft, requires factual/pedagogical review. |
| Local taxonomy granularity | A 138-item draft contains other candidates that may need atomicity audit: examples-based species recognition, certain classifications, and modeling across multiple systems. | **Open global review**, no claim of final approval. |

## 5. Why the previous review failed

The earlier taxonomy put some split/merge questions into a summary at the end while **already presenting unreviewed skill choices as if they were stable catalog entries**. The user did not receive a distinct decision handoff. Some descriptions were generated as `Skill title + period`, which met the Markdown shape but **contained no conceptual explanation**. These are documented methodological and quality failures, not editor-approved design decisions.

The [Create Skills Taxonomy Skill](../../../../studio/skills/create-skills-taxonomy.skill.md) now requires a separate decision report, visible user-facing review and a substantive description pass for **every** Domain/Group/Skill.

## 6. Remaining workflow / stop condition

The **one-Skill classification, three-Skill virus and removal of four generic data/source Skills decisions are approved**, but the **taxonomy as a whole remains an editorial draft**. Before the **Create Skill Definitions** stage:

1. Conduct the **subject-ownership audit** across the research, observation, classification and modeling Groups identified above; obtain explicit editor decisions on any further moves/deletions.
2. Decide separately where generic scientific/data-literacy Skills should live across textbooks; do not create or assign IDs by assumption.
3. Review remaining atomicity and subject coverage; reconcile actual counts if any choices change.

**Do not create entity definitions, UUID files, `*.data.ts`, Lessons or Questions on the basis of open decisions.**

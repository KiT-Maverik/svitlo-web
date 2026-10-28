# Biology — Editorial Review & Decision Log

Date: 2026-10-28

> **Status: OPEN editorial review.** A candidate present in [taxonomy.md](./taxonomy.md) is **not** thereby approved. This document makes granularity decisions and subject boundaries explicit **outside the taxonomy**, so they can be discussed before creating Definitions, UUIDs or Code.

## 1. Decisions expressed by the editor — reflected in the draft

| Topic | Editor direction | Applied in taxonomy / concept |
| --- | --- | --- |
| Discipline naming | Use clear subject areas from `Studio/Subject Proposition`: botany, zoology, anatomy, physiology, etc. | Domains renamed to **Ботаніка**, **Зоологія**, **Анатомія та фізіологія людини**, **Екологія**, **Генетика та еволюція**, etc.; no new textbooks. |
| Living / dead / never alive | **Approved: one Skill** for the three-way classification. | Existing **«Класифікувати об’єкти як живі, мертві або такі, що ніколи не були живими»** remains one Skill ID; distinguish the three response categories inside assessment, not via separate Skill IDs. |
| Viruses | **Approved: three independent Skills** (2026-10-28). | Keep **«Пояснювати, що таке вірус»**, **«Відрізняти вірус від клітинного організму»**, and **«Пояснювати основні шляхи поширення вірусів за моделлю»** as distinct Skills; do not merge the first two. |
| Subject ownership and data literacy | **Approved: remove four cross-disciplinary candidates from Biology** (2026-10-28). | Removed the now-empty **«Біологічні дані та наукові твердження»** Group: table reading, graph reading, source credibility and unsupported-claim checking. No new cross-textbook Skill IDs assigned. |
| Scientific inquiry and evidence | **Approved: remove the entire «Дослідження та докази» Group and its six Skills** (2026-10-28). | Research questions, testable predictions, variables, controls, interpretation of results and evidence-backed conclusions are general inquiry competencies, not Biology-owned merely because organisms are used in examples. **Current total: 9 Domains / 32 Groups / 128 Skills.** |
| Biological classification | **Keep the Group in the draft** (editor's tentative direction, 2026-10-28). | No changes to its four Skills yet. Independently audit generic sorting methods versus genuinely biological classification and organism-identification knowledge before declaring the individual Skills approved. |
| Observation and modeling | **Review, no deletion approved.** | Preserve both Groups pending item-level examination; distinguish a cross-disciplinary procedure, a subject-specific biological inference, and a **lesson/interactive format**.
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

Their Group **«Біологічні дані та наукові твердження»** had no remaining Skills and was removed. The parent Domain **«Біологічні моделі та біотехнології»** now has **2 Groups and 8 Skills**. After this first removal, the taxonomy contained **9 Domains / 33 Groups / 134 Skills**; the later approved research-group removal brought it to **9 Domains / 32 Groups / 128 Skills**. The removed competencies may still be taught and assessed through cross-disciplinary Skills, but **ownership, IDs, and placement outside Biology have not been decided**. The four deletions do not mean these competencies are unnecessary.

**Illustrative contrast:** «read a growth chart» is general; «explain how changing illumination affects photosynthesis and plant growth» requires botanical knowledge. Botanical learning tasks may use graphs without registering duplicate graph-reading Skills in Biology.

### Further approved removal: «Дослідження та докази» — RESOLVED

**Editor decision (2026-10-28):** remove this entire Biology Group and its six candidates: **«Формулювати дослідницьке запитання»**, **«Робити перевірюване передбачення»**, **«Визначати змінну досліду»**, **«Контролювати умови порівняння»**, **«Інтерпретувати результати»**, **«Обґрунтовувати висновок даними»**. Their method is transferable across natural sciences. They were removed from Biology without inventing replacement Skill IDs.

**Result:** the **«Біологічне дослідження»** Domain now contains **3 Groups and 10 Skills** (previously 4 / 16). The taxonomy now contains **9 Domains / 32 Groups / 128 Skills**, with 169 unimplemented Definition and 169 unimplemented Code links.

### Pending review: «Спостереження» — four candidates, NO removals yet

| Existing candidate | Ownership question / preliminary recommendation |
| --- | --- |
| **Виділяти спостережувані ознаки організму** | May be biology-specific if selecting diagnostic biological characteristics; may be general observation if merely enumerating visible properties. Requires an explicit competence boundary. |
| **Фіксувати зміни в часі** | Generic longitudinal recording / comparison; recommend removal from Biology after editor decision. |
| **Використовувати збільшувальні засоби** | Practical instrument-use competence, potentially shared across sciences; distinguish microscope technique from an interactive or lesson resource. Ownership unresolved. |
| **Відділяти спостереження від припущення** | General scientific reasoning; recommend removal from Biology after editor decision. |

### Pending review: «Моделювання біологічних систем» — four candidates, NO removals yet

This is presently a **SkillGroup**, not a Skill. Using a **simulation, animation, model or other interactive block** is a *teaching/assessment format*, not by itself a learner competency. Independently assessable biological reasoning performed **with** a model can, however, justify a Skill.

| Existing candidate | Ownership question / preliminary recommendation |
| --- | --- |
| **Будувати модель зв’язку будови й функції** | Could be subject-specific when biological structure/function knowledge is indispensable; generic diagram-building alone is not a Biology Skill. |
| **Прогнозувати наслідки зміни компонента біосистеми** | Likely subject-specific biological reasoning, e.g. consequences of species loss or organ dysfunction. |
| **Відрізняти модель від реального явища** | Generic model literacy; recommend removal from Biology after editor review. |
| **Порівнювати дві моделі одного явища** | Generic critical comparison of models unless the criterion is specifically biological; review before removal. |

**No automatic modeling Group deletion:** two of these may represent meaningful Biology competencies; the other two may belong elsewhere. Whether modeling deserves its own *Group* or should be represented as a method of practicing existing competencies is a separate editorial decision.

### Cross-disciplinary ownership audit — OPEN, do not apply silently

The same test must now be applied to additional existing candidates, especially:

| Affected Biology Group | Candidates needing editorial ownership review | Why this is open |
| --- | --- | --- |
| **Біологічне дослідження → Спостереження** | Four candidates listed in the pending review above | Generic observations and biological diagnostic features may require different ownership; the editor requested a closer look, not immediate removal. |
| **Біологічне дослідження → Біологічна класифікація** | Four existing candidates; editor tentatively favors retaining this Group | Keep the Group while auditing which underlying methods depend on biological knowledge. Do not equate tentative Group retention with approval of each Skill. |
| **Біологічні моделі та біотехнології → Моделювання біологічних систем** | Four existing candidates; interactive-model format vs subject knowledge | Review model literacy vs biological inference at item level and revisit whether this Group is necessary. |

**Status: open editorial audit, not approval to remove these other candidates.** Review their actual descriptions, the subject knowledge needed, and cross-subject reuse before modifying their Skill IDs, Groups or Domain structure.

## 4. Additional decisions to review

| Decision | Methodologist proposal | Status / action |
| --- | --- | --- |
| Definition of a virus | Separate knowledge of the virus as a noncellular infectious agent, comparison with cellular organisms, and explanation of transmission models. These are different independently assessable competencies, although the first two share background facts. | **APPROVED (2026-10-28): keep all three Skills** in the virus Group; taxonomy already reflects this. |
| Cross-subject scientific skills | Investigate which general scientific-inquiry, observation, classification, model and data-literacy abilities should have shared Skill IDs or belong to another textbook. **No Biology-only IDs** simply because a biology example is used. | **OPEN:** editorial ownership review. Four data/source Skills and six scientific-inquiry Skills are removed from Biology; observation/modeling/classification require individual decisions. |
| Boundary: life-process breathing | Clarify **cellular respiration** vs lung ventilation; plants also respire. Revised description makes the distinction explicit. | Clarification in draft, requires factual/pedagogical review. |
| Local taxonomy granularity | The current 128-item draft contains other candidates that may need atomicity audit: examples-based species recognition, certain classifications, and modeling across multiple systems. | **Open global review**, no claim of final approval. |

## 5. Why the previous review failed

The earlier taxonomy put some split/merge questions into a summary at the end while **already presenting unreviewed skill choices as if they were stable catalog entries**. The user did not receive a distinct decision handoff. Some descriptions were generated as `Skill title + period`, which met the Markdown shape but **contained no conceptual explanation**. These are documented methodological and quality failures, not editor-approved design decisions.

The [Create Skills Taxonomy Skill](../../../../studio/skills/create-skills-taxonomy.skill.md) now requires a separate decision report, visible user-facing review and a substantive description pass for **every** Domain/Group/Skill.

## 6. Remaining workflow / stop condition

The **one-Skill classification, three-Skill virus, removal of four generic data/source Skills and removal of six inquiry/evidence Skills decisions are approved**, but the **taxonomy as a whole remains an editorial draft**. Before the **Create Skill Definitions** stage:

1. Decide the four **Observation** Skills one by one; then audit the four **Biological Classification** Skills while respecting the editor's provisional preference to retain the Group.
2. Distinguish biological inference Skills from model-based teaching or assessment formats and generic model literacy; decide whether the **Modeling** Group remains necessary.
3. Decide separately where generic scientific/data-literacy Skills should live across textbooks; do not create or assign IDs by assumption.
4. Review remaining atomicity and subject coverage; reconcile actual counts if any choices change.

**Do not create entity definitions, UUID files, `*.data.ts`, Lessons or Questions on the basis of open decisions.**

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
| Scientific inquiry and evidence | **Approved: remove «Дослідження та докази» and six Skills** (2026-10-28). | Generic scientific inquiry Skills removed; historic post-removal total was 9 Domains / 32 Groups / 128 Skills. Current total after further approved changes: **9 Domains / 30 Groups / 121 Skills**. |
| Biological classification | **Keep the Group** (2026-10-28). | Five current Skills, including the renamed and transferred biological-diagnostic-traits Skill; general methods still require an ownership audit. |
| Observation and modeling | **Approved item-level consolidation** (2026-10-28). | Three Observation Skills removed, the remaining subject-specific diagnostic skill moved under Biological Classification; all four Modeling Group Skills removed, their intended ecological outcome captured by renaming one existing Ecology Skill. Neither empty Group remains. |
| Plant organs | **One Skill** for identifying root, stem, leaf and flower. | Four one-organ Skills replaced by **«Визначати основні органи рослини»**. A separate existing Skill about **functions** remains because knowing names and explaining function differ. |
| Animal groups | **Keep independent Skills** for insects, fish, amphibians, reptiles, birds and mammals. | Retained the individual group-recognition Skills; their descriptions now give the diagnostic biological features instead of repeating names. |
| Biomimicry | Primarily **engineering in Physics**, not an independent Biology engineering competency. | Removed the three engineering Skills and entire `Біомімікрія` Group from Biology; recorded the proposed primary owner in [Subject Proposition](../../../../studio/Subject%20Proposition.md). **No Physics Skill has been created.** |
| Biotechnology ecological risk | Keep it. | Retained **«Оцінювати екологічний ризик застосування біотехнології»** with a clarified distinction between possible risk and proven harm. |
| «Хто це?» | Encyclopedia **lesson collection**, not Skill. | No separate Skill or SkillGroup; uses existing identification/classification competencies. |
| Scope and subject boundaries | Biology includes organisms, their biology and ecosystem relationships; hygiene and safety belong to Health & Safety. | Recorded decisions in Subject Proposition; not redundant rows masquerading as unresolved issues. |
| Format and descriptions | Metadata first; prose is meaningful explanatory content, not a paraphrase of the heading. | Reordered `Skills/Groups`, `Definition`, `Code` above unlabelled prose, rewrote domain/group/skill descriptions; same requirement applied to Studio skill/template and persona. |

## 2. **RESOLVED: ONE Skill for living / dead / never alive**

**Affected group:** [Ознаки живого та класифікація організмів → Ознаки живого](./taxonomy.md#ознаки-живого).

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

**At this stage**, «Біологічне дослідження» had 3 Groups / 10 Skills, and the Biology draft contained 9 Domains / 32 Groups / 128 Skills. Subsequent approved changes to Observation and Modeling brought the current inventory to **9 Domains / 30 Groups / 121 Skills**; this earlier snapshot is preserved as decision history.

### RESOLVED: Observation — three removed, one moved

**Editor decision (2026-10-28):** retain only the independently assessable Biology-specific competence of identifying **diagnostic biological traits**. Remove the other three, which are either generic research skills or physical instrument handling.

| Previous Observation Skill | Decision |
| --- | --- |
| «Виділяти спостережувані ознаки організму» | **Rename and move** into «Біологічна класифікація» as **«Виділяти біологічно значущі ознаки організму»**: select features such as body segmentation, number of pairs of limbs, or leaf structures that actually discriminate biological groups. |
| «Фіксувати зміни в часі» | **Remove:** generic longitudinal observation and data recording. |
| «Використовувати збільшувальні засоби» | **Remove:** not a uniquely Biology-specific competence and virtual Questions do not demonstrate real microscope proficiency. The equipment can still feature in practical lessons; this does not claim that practical use is inherently unassessable. |
| «Відділяти спостереження від припущення» | **Remove:** generic scientific reasoning. |

«Спостереження» is now empty and has been removed as a Group. «Біологічна класифікація» contains **5 Skills**. The original «Біологічне дослідження» Domain no longer contains experimental research methods and has been renamed to **«Ознаки живого та класифікація організмів»** (2 Groups / 7 Skills).

### RESOLVED: Modeling — ecological interdependence, not an interaction format

**Editor decision (2026-10-28):** the four entries under «Моделювання біологічних систем» should not constitute their own Group. The valuable common outcome is to **explain the interdependence of ecosystem components**, including why removing an apparently undesirable predator or introducing an invasive species may cause indirect, cascading ecological consequences.

The entire Modeling Group and its four Skills were removed:
1. «Будувати модель зв’язку будови й функції» — diagram construction is not automatically a separate outcome; structure/function knowledge remains covered elsewhere.
2. «Прогнозувати наслідки зміни компонента біосистеми» — this lumped together ecosystem change and organ dysfunction; the ecology-specific core is captured by the revised ecosystem Skill.
3. «Відрізняти модель від реального явища» — cross-disciplinary model literacy.
4. «Порівнювати дві моделі одного явища» — cross-disciplinary model literacy.

**Avoiding duplicate IDs:** instead of adding a new Ecology Skill, the existing **«Моделювати взаємодію живих і неживих компонентів»** was renamed and rewritten as **«Пояснювати взаємозалежність компонентів екосистеми»**. That is assessable by explaining links among resources, species and populations; a simulation, diagram or interactive ecosystem is an **instructional/assessment medium**, not by itself a Skill.

**Candidate examples for future lessons, not additional Skills:**
- Invasive rabbits have damaged Australian vegetation and native ecosystems ([Australian Government, pest animals](https://www.agriculture.gov.au/biosecurity-trade/pests-diseases-weeds/pest-animals-and-weeds/priority-pest-animals)).
- Introduced brown tree snakes on Guam have severely reduced endemic/native birds ([USGS, brown treesnake project](https://www.usgs.gov/pacific-island-ecosystems-research-center/science/brown-treesnake-project)).
- Avoid an inaccurate blanket claim that "rabbits or domestic cats are banned across Australia." Keeping pet rabbits is prohibited in Queensland but allowed in some other states, while Queensland does not categorically prohibit domestic cats ([Queensland Government, exotic pets](https://www.qld.gov.au/family/family-and-parents/government/pets/keeping-exotic-animals-as-pets-in-queensland)). The ecological consequences, not blanket legal claims, are the curriculum target.

The old Domain «Біологічні моделі та біотехнології» contained the removed Modeling Group and the retained Biotechnology Group. It has been renamed **«Прикладна біологія»**, now containing **1 Group / 4 Skills** (Biotechnology only).

**Remaining reviewable overlap:** «Прогнозувати наслідки вилучення ланки ланцюга» still exists in Ecology → «Харчові зв’язки». It specifically concerns a food chain, while the new interdependence Skill addresses ecological networks and indirect effects more broadly. **Assess whether these justify independent IDs before approving taxonomy**; do not silently remove the more specific Skill.

**Current inventory after these approved changes: 9 Domains, 30 Groups, 121 Skills; 160 unimplemented Definition and 160 unimplemented Code links.**

### Cross-disciplinary ownership audit — OPEN, do not apply silently

The same test must now be applied to additional existing candidates, especially:

| Affected Biology Group | Candidates needing editorial ownership review | Why this is open |
| --- | --- | --- |
| **Ознаки живого та класифікація організмів → Біологічна класифікація** | Five current Skills, including biological diagnostic traits | Keep the Group as approved; verify whether the generic categorization methods require biological knowledge in the remaining item-level audit. |

**Status: open audit of the remaining classification candidates and food-chain-versus-ecosystem skill overlap only.** Observation and Modeling Group decisions above are approved and applied.

## 4. Additional decisions to review

| Decision | Methodologist proposal | Status / action |
| --- | --- | --- |
| Definition of a virus | Separate knowledge of the virus as a noncellular infectious agent, comparison with cellular organisms, and explanation of transmission models. These are different independently assessable competencies, although the first two share background facts. | **APPROVED (2026-10-28): keep all three Skills** in the virus Group; taxonomy already reflects this. |
| Cross-subject scientific skills | Decide where general scientific inquiry, observation, practical instrument use, model literacy, and data literacy belong; no Biology-specific IDs merely because examples feature organisms. | **OPEN:** no automatic reassignment of removed Skills to other textbooks. |
| Boundary: life-process breathing | Clarify **cellular respiration** vs lung ventilation; plants also respire. Revised description makes the distinction explicit. | Clarification in draft, requires factual/pedagogical review. |
| Local taxonomy granularity | The current 121-item draft contains other candidates that may need atomicity audit: examples-based species recognition, certain classifications, and modeling across multiple systems. | **Open global review**, no claim of final approval. |

## 5. Why the previous review failed

The earlier taxonomy put some split/merge questions into a summary at the end while **already presenting unreviewed skill choices as if they were stable catalog entries**. The user did not receive a distinct decision handoff. Some descriptions were generated as `Skill title + period`, which met the Markdown shape but **contained no conceptual explanation**. These are documented methodological and quality failures, not editor-approved design decisions.

The [Create Skills Taxonomy Skill](../../../../studio/skills/create-skills-taxonomy.skill.md) now requires a separate decision report, visible user-facing review and a substantive description pass for **every** Domain/Group/Skill.

## 6. Remaining workflow / stop condition

The **living/dead classification, three virus Skills, removal of four data/source Skills and six inquiry/evidence Skills, plus the Observation/Modeling consolidations are approved**, but the **taxonomy as a whole remains an editorial draft**. Before the **Create Skill Definitions** stage:

1. Audit the **five Biological Classification Skills** for subject ownership, while retaining the Group.
2. Review whether **«Прогнозувати наслідки вилучення ланки ланцюга»** requires a separate ID from the ecosystem-interdependence Skill.
3. Decide separately where generic scientific/data/model-literacy Skills should live across textbooks; do not create IDs by assumption.
4. Review remaining atomicity and subject coverage before approving the taxonomy.

**Do not create entity definitions, UUID files, `*.data.ts`, Lessons or Questions on the basis of open decisions.**

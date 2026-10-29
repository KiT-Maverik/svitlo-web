# Biology — Editorial Review & Decision Log

Date: 2026-10-28

> **Status: OPEN editorial review.** A candidate present in [taxonomy.md](./taxonomy.md) is **not** thereby approved. This document makes granularity decisions and subject boundaries explicit **outside the taxonomy**, so they can be discussed before implementing UUIDs or Code; the taxonomy itself is the permanent editorial definition.

## 1. Decisions expressed by the editor — reflected in the draft

| Topic | Editor direction | Applied in taxonomy / concept |
| --- | --- | --- |
| Discipline naming | Use clear subject areas from `Studio/Subject Proposition`: botany, zoology, anatomy, physiology, etc. | Domains renamed to **Ботаніка**, **Зоологія**, **Анатомія та фізіологія людини**, **Екологія**, **Генетика та еволюція**, etc.; no new textbooks. |
| Living / dead / never alive | **Approved: one Skill** for the three-way classification. | Existing **«Класифікувати об’єкти як живі, мертві або такі, що ніколи не були живими»** remains one Skill ID; distinguish the three response categories inside assessment, not via separate Skill IDs. |
| Viruses | **Approved: three independent Skills** (2026-10-28). | Keep **«Пояснювати, що таке вірус»**, **«Відрізняти вірус від клітинного організму»**, and **«Пояснювати основні шляхи поширення вірусів за моделлю»** as distinct Skills; do not merge the first two. |
| Subject ownership and data literacy | **Approved: remove four cross-disciplinary candidates from Biology** (2026-10-28). | Removed the now-empty **«Біологічні дані та наукові твердження»** Group: table reading, graph reading, source credibility and unsupported-claim checking. No new cross-textbook Skill IDs assigned. |
| Scientific inquiry and evidence | **Approved: remove «Дослідження та докази» and six Skills** (2026-10-28). | Generic scientific inquiry Skills removed; historic post-removal total was 9 Domains / 32 Groups / 128 Skills. Post-observation historical total: **9 Domains / 30 Groups / 121 Skills**. Current total: **11 Domains / 26 Groups / 122 Skills**. |
| Biological classification | **Keep the Group** (2026-10-28). | Five current Skills, including the renamed and transferred biological-diagnostic-traits Skill; general methods still require an ownership audit. |
| Observation and modeling | **Approved item-level consolidation** (2026-10-28). | Three Observation Skills removed, the remaining subject-specific diagnostic skill moved under Biological Classification; all four Modeling Group Skills removed, their intended ecological outcome captured by renaming one existing Ecology Skill. Neither empty Group remains. |
| Plant organs | **One Skill** for identifying root, stem, leaf and flower. | Four one-organ Skills replaced by **«Визначати основні органи рослини»**. A separate existing Skill about **functions** remains because knowing names and explaining function differ. |
| Animal groups | **Keep independent Skills** for insects, fish, amphibians, reptiles, birds and mammals. | Retained the individual group-recognition Skills; their descriptions now give the diagnostic biological features instead of repeating names. |
| Biomimicry | Primarily **engineering in Physics**, not an independent Biology engineering competency. | Removed the three engineering Skills and entire `Біомімікрія` Group from Biology; recorded the proposed primary owner in [Subject Proposition](../../../../studio/Subject%20Proposition.md). **No Physics Skill has been created.** |
| Biotechnology ecological risk | Keep it. | Retained **«Оцінювати екологічний ризик застосування біотехнології»** with a clarified distinction between possible risk and proven harm. |
| «Хто це?» | Encyclopedia **lesson collection**, not Skill. | No separate Skill or SkillGroup; uses existing identification/classification competencies. |
| Scope and subject boundaries | Biology includes organisms, their biology and ecosystem relationships; hygiene and safety belong to Health & Safety. | Recorded decisions in Subject Proposition; not redundant rows masquerading as unresolved issues. |
| Format and descriptions | Metadata first; prose is meaningful explanatory content, not a paraphrase of the heading. | Reordered `Skills/Groups`, `Code` above unlabelled prose and subsequently removed obsolete `Definition` fields, rewrote domain/group/skill descriptions; same requirement applied to Studio skill/template and persona. |
| Classification and justification | **Approved: one Skill** for status classification **including justification** (2026-10-29). | Removed formerly separate `Обґрунтовувати висновок про належність об'єкта до живої природи`; `Ознаки живого` now has one Skill. |
| Plant versus animal cell | **Retain biological comparison, not a specific representation** (2026-10-29). | `Розрізняти рослинну та тваринну клітини за особливостями будови` replaces `…за моделлю`. |
| Mycology, Microbiology, Virology | **Separate Domains with direct Skills** (2026-10-29). | Replaced artificially merged Domain and three namesake Groups with three ungrouped Domains. `Біотехнології` also becomes its own Domain (previously a singleton Group under Applied Biology). |
| Domain structure | **Allow direct Domain → Skill when a genuine Group is not justified; strongly discourage singleton Groups** (2026-10-29). | `SkillDomain_Config.skillIds?` added as type-only extension; ownership and downstream runtime integration still need review. |
| Genetics and biotechnology | **Rename «Основи генетики» → «Генетика»; add two prerequisite concept Skills** (2026-10-29). | Added separate fundamentals for selection and genetic modification; existing comparison Skill retained pending atomicity audit. |
| Regionally relevant Lessons | **Program can offer optional regional variants; locale is only a suggestion** (2026-10-29). | User/teacher-selectable region, fallback and stable shared Skill IDs; future Program runtime, not implemented by a taxonomy document. |

## 2. **RESOLVED: ONE Skill for living / dead / never alive**

**Affected group:** [Ознаки живого та класифікація організмів → Ознаки живого](./taxonomy.md#ознаки-живого).

**Editor decision (2026-10-28): APPROVED — one classification Skill ID.** The three categories are (1) living, (2) dead / formerly living, (3) never alive, but the competence is making one classification choice with three possible outcomes. The distinction between a dead organism and biologically derived material still requires careful examples and definitions.

**Selected option A: one classification Skill (already represented in the taxonomy).**

- **«Класифікувати об’єкти як живі, мертві або такі, що ніколи не були живими».**
- It describes one coherent three-way decision: determining current life status and biological origin, rather than three separate learning goals each based on a different answer choice.
- Example distinctions: a growing tree is living; a dead leaf was part of a living organism; a mineral rock was never alive.
- **Revised decision (2026-10-29):** explaining the relevant diagnostic features belongs inside the same classification competency, not in a second independent Skill ID.

**Rejected alternative B (retained for decision history): three separately tracked Skills.**

- **«Розпізнавати живі організми»** — uses evidence of life processes.
- **«Визначати, чи неживий об’єкт має біологічне походження»** — recognizes objects that were once living or are derived from living material.
- **«Визначати, чи об’єкт ніколи не був живим»** — distinguishes non-biological matter from former biological material.

**Assessment consequence:** separately track confusion between the three answer categories, if useful, without creating additional stable Skill IDs. The approved granularity is one Skill, and the taxonomy already matches it. The once-separate justification Skill has since been **removed** (2026-10-29). Current `Ознаки живого` contains **one** classification Skill.

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

### Verified case bank for future Lessons — examples, NOT Skills (2026-10-28)

The editor requested concrete stories of ecological interdependence, human interventions and unintended consequences. These are **candidate lesson narratives / interactive simulations**, not reasons to invent additional Skill IDs. For each story, a future learner could predict consequences before receiving historical evidence and explain the causal chain afterward. **Do not collapse several distinct historical cases into one anecdote.**

| Case | Established facts and causal reasoning | Didactic question / guardrail | Primary evidence |
| --- | --- | --- | --- |
| **Japan — Amami-Ōshima mongoose vs habu** | Small Indian mongooses were deliberately introduced around 1979 to control venomous habu snakes and rodents, but preyed on threatened native species, including the Amami rabbit and frogs. Japan declared mongoose eradication on Amami-Ōshima in **September 2024**, after a long control program. | *Why didn't importing another predator solve the problem as intended?* Distinguish the introduced predator (mongoose) from the target snake (habu); do not call this a case of importing snakes to kill birds. | [Japan Ministry of the Environment — introduction and consequences](https://www.env.go.jp/en/nature/nps/park/amami/effort.html); [2024 eradication declaration](https://www.env.go.jp/en/press/press_03205.html) |
| **Guam — brown treesnakes** | Brown treesnakes arrived **accidentally** after World War II, probably with cargo, and caused major declines or local extirpations of native forest birds. Loss of fruit-eating birds reduced seed dispersal and regeneration for studied tree species: an **indirect cascading effect** extending from predator to birds to plants. | *What happens to trees after birds disappear, even when snakes never eat the trees?* Do not confuse Guam (snakes, accidental introduction) with Japan (mongooses, deliberate biocontrol attempt). The published 61–92% seedling-recruitment reduction is a **study-specific estimate**, not a figure for all Guam plants. | [USGS — brown treesnake history](https://www.usgs.gov/publications/biology-and-impacts-pacific-island-invasive-species-2-boiga-irregularis-brown-tree); [Nature Communications — disrupted seed dispersal](https://www.nature.com/articles/ncomms14557) |
| **Australia — introduced rabbits** | European rabbits proliferated and put pressure on native vegetation, habitats and competing herbivores; responses depend on local species, food webs and other stressors. | *Why can a herbivore without enough local population controls affect many species other than its own predators?* Avoid saying rabbits are prohibited pets across all Australia: rules are jurisdiction-specific. | [Australian Government — feral animals](https://www.dcceew.gov.au/environment/invasive-species/feral-animals-australia); [Australia State of the Environment — rabbits and threatened species](https://soe.dcceew.gov.au/overview/pressures/invasive-species-and-range-shifts) |
| **Australia — feral and roaming cats** | Cats were introduced with humans; feral cats are established predators that threaten many native mammals, birds, reptiles and frogs, and have contributed to the extinction of over 20 Australian native mammal species. Cats kept as pets and free-roaming feral cats are the same species but different management categories; both can affect wildlife. | *Why does an animal kept as a companion become an ecological problem if it hunts in a habitat whose species did not evolve under the same predation pressure?* Do not claim cats are universally prohibited across Australia or treat every individual pet as feral. | [Australian Government — feral cats](https://www.dcceew.gov.au/environment/invasive-species/feral-animals-australia/feral-cats); [Threat abatement plan 2024](https://www.dcceew.gov.au/sites/default/files/documents/tap-for-predation-feral-cats-2024.pdf) |
| **Mauritius — disappearance of the dodo** | Dodo extinction in the seventeenth century followed **multiple interacting factors**: human hunting, habitat alteration, and introduced animals (including rats, pigs, dogs and cats) that preyed on birds and/or eggs. It is **not** evidence that one particular introduced species alone killed all dodos. | *Why is a single-cause story less adequate than a network of pressures?* Explore how flightless, ground-nesting island birds may be vulnerable to unfamiliar predators. | [Natural History Museum — causes of dodo extinction](https://www.nhm.ac.uk/discover/the-dodo-bird-the-real-facts-about-this-icon-of-extinction.html); [NHM — colonization and habitat change](https://www.nhm.ac.uk/discover/news/2022/may/mauritius-pink-pigeon-faces-extinction-threat-inbreeding.html) |
| **Indigenous peoples of the Americas — epidemics after European arrival** | European contact and colonization introduced infectious diseases, including smallpox and measles, to communities without prior population exposure to many of those pathogens. Epidemics had devastating demographic and cultural effects. **Colonial violence, dispossession, forced labor and disruption of food/social systems must not be erased** when explaining demographic collapse. The details and scale vary by place and period. | This is primarily a **virology / disease transmission + History** case, **not simply an example of an invasive animal destabilizing an ecosystem**. Use respectful, age-appropriate framing; avoid "conquistadors deliberately infected everyone" or "disease was the sole cause." Do not conflate colonization with an ecology simulation of removing a predator. | [Smithsonian Tropical Research Institute — 2026 review of colonial epidemics](https://stri.si.edu/node/47398); [medical historical review of smallpox and Indigenous Americans](https://pubmed.ncbi.nlm.nih.gov/12003378/) |

**Cross-subject handoff:** The first five cases illustrate biological relationships, invasive organisms, introduced predators and multiple causal pressures, and can assess the approved Biology Skill **«Пояснювати взаємозалежність компонентів екосистеми»**. The sixth case may illustrate the already existing virus-transmission Skill **«Пояснювати основні шляхи поширення вірусів за моделлю»** where supported by suitable science; its historical explanation belongs jointly with **History** and must not be forced into the ecosystem Skill.

**Pedagogical design:** Prefer question-driven comparison of *initial intention → intervention → direct effect → indirect effect → evidence → limitation / competing explanation*, in interactive or narrative form. A single case can illustrate many mechanisms, but examples, classroom formats, and geographic names are not automatically new Skills. For island introductions, explicitly distinguish *alien/non-native* from *invasive/harmful*: not every introduced organism necessarily causes a damaging invasion.

The old Domain «Біологічні моделі та біотехнології» contained the removed Modeling Group and the retained Biotechnology Group. It has been renamed **«Прикладна біологія»**, now containing **1 Group / 4 Skills** (Biotechnology only).

**Remaining reviewable overlap:** «Прогнозувати наслідки вилучення ланки ланцюга» still exists in Ecology → «Харчові зв’язки». It specifically concerns a food chain, while the new interdependence Skill addresses ecological networks and indirect effects more broadly. **Assess whether these justify independent IDs before approving taxonomy**; do not silently remove the more specific Skill.

**Historical inventory after the Observation/Modeling pass:** 9 Domains, 30 Groups, 121 Skills; 160 placeholder Definition/Code links **at that historical stage**. **Current inventory after subsequent restructuring: 11 Domains, 26 Groups, 122 Skills; 159 Code placeholders only.**

### Cross-disciplinary ownership audit — OPEN, do not apply silently

The same test must now be applied to additional existing candidates, especially:

| Affected Biology Group | Candidates needing editorial ownership review | Why this is open |
| --- | --- | --- |
| **Ознаки живого та класифікація організмів → Біологічна класифікація** | Five current Skills, including biological diagnostic traits | Keep the Group as approved; verify whether the generic categorization methods require biological knowledge in the remaining item-level audit. |

**Status: open audit of the remaining classification candidates and food-chain-versus-ecosystem skill overlap only.** Observation and Modeling Group decisions above are approved and applied.

### RESOLVED: Discipline Domains and concept Skills (2026-10-29)

**Approved organization:** Mycology (4 Skills), Microbiology (5), and Virology (3) are **three distinct Domains** instead of a merged Domain containing one Group for each discipline. `Прикладна біологія → Біотехнології` becomes a Domain `Біотехнології` (6 Skills). These four Domains have **no Groups** and their Skills attach directly. This does not create additional textbooks or applications.

**Strict exception to grouping:** Use multiple meaningful SkillGroups where subdivisions are real. A single-Group Domain is **strongly discouraged**, requires an explicit editorial justification and must not duplicate the Domain name. If no meaningful Group exists, use `Domain → Skill`; **do not mix direct Skills and Groups in the same Domain**. The editorial taxonomy and Studio skill/entity guidance now permit this. The runtime type `SkillDomain_Config` adds optional `skillIds` while retaining `groupIds` for compatibility (the latter is `{}` for direct-mode Domains). **The Domain builder now validates exclusive membership, emptiness, duplicate child IDs and UUID formats, with targeted source tests added.** Registry, generated index, UI, ancestry and analytics integration remains unverified; complete runtime audit is still open.

**Approved skill granularity and terminology:** justification is included in the one living/dead/never-alive Skill; `Розрізняти рослинну та тваринну клітини за особливостями будови` replaces a format-dependent cell comparison; `Основи генетики` becomes `Генетика`. Added `Пояснювати принцип селекції` and `Пояснювати принцип генетичної модифікації` as distinct foundational Skills. The existing comparison Skill remains pending a separate test of whether it offers independently useful mastery evidence.

**Program-level, locale-sensitive choice:** Local fauna examples (Ukraine, Israel, regions of the Americas, etc.) belong in **optional region-specific Lesson variants** of a Program that target the same canonical Skill. UI locale may suggest an initial region but must not be mistaken for residence or a non-editable decision. Provide user/teacher choice and a broadly relevant fallback. Regional selection and progress substitution are **not implemented merely by this documentation**. Translate **all variants** into the required default languages; no region-based reduction of localization requirements. See [Subject Proposition](../../../../studio/Subject%20Proposition.md) and [Create Curriculum Skill](../../../../studio/skills/create-curriculum.skill.md).

**Current inventory: 11 Domains · 26 Groups · 122 Skills · 159 unimplemented Code links. The taxonomy itself is the authoritative definition of each entity.**

## 4. Additional decisions to review

| Decision | Methodologist proposal | Status / action |
| --- | --- | --- |
| Definition of a virus | Separate knowledge of the virus as a noncellular infectious agent, comparison with cellular organisms, and explanation of transmission models. These are different independently assessable competencies, although the first two share background facts. | **APPROVED (2026-10-28): keep all three Skills** in the virus Group; taxonomy already reflects this. |
| Cross-subject scientific skills | Decide where general scientific inquiry, observation, practical instrument use, model literacy, and data literacy belong; no Biology-specific IDs merely because examples feature organisms. | **OPEN:** no automatic reassignment of removed Skills to other textbooks. |
| Boundary: life-process breathing | Clarify **cellular respiration** vs lung ventilation; plants also respire. Revised description makes the distinction explicit. | Clarification in draft, requires factual/pedagogical review. |
| Local taxonomy granularity | The current 122-item draft contains other candidates that may need atomicity audit: examples-based species recognition, certain classifications, and modeling across multiple systems. | **Open global review**, no claim of final approval. |

## 5. Why the previous review failed

The earlier taxonomy put some split/merge questions into a summary at the end while **already presenting unreviewed skill choices as if they were stable catalog entries**. The user did not receive a distinct decision handoff. Some descriptions were generated as `Skill title + period`, which met the Markdown shape but **contained no conceptual explanation**. These are documented methodological and quality failures, not editor-approved design decisions.

The [Create Skills Taxonomy Skill](../../../../studio/skills/create-skills-taxonomy.skill.md) now requires a separate decision report, visible user-facing review and a substantive description pass for **every** Domain/Group/Skill.

## 6. Remaining workflow / stop condition

The **living/dead classification, three virus Skills, removal of four data/source Skills and six inquiry/evidence Skills, plus the Observation/Modeling consolidations are approved**, but the **taxonomy as a whole remains an editorial draft**. Before **taxonomy approval and later Implement Skill Code**:

1. Audit the **five Biological Classification Skills** for subject ownership, while retaining the Group; review whether selection vs genetic modification still needs a separate comparison Skill.
2. Review whether **«Прогнозувати наслідки вилучення ланки ланцюга»** requires a separate ID from the ecosystem-interdependence Skill.
3. Decide separately where generic scientific/data/model-literacy Skills should live across textbooks; do not create IDs by assumption.
4. Validate the new optional direct Domain → Skill link through registry/builders/consumers and tests before creating generated Skill Code. Specify region-based Program lesson selection separately; then review atomicity and subject coverage before approving the taxonomy.

**Do not create per-entity Definition files (that workflow is discontinued), UUID files, `*.data.ts`, Lessons or Questions on the basis of open editorial decisions.**

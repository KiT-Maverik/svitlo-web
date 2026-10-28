# Create Nextgen Lesson Skill

**Mandatory first action:** Read [Educational Screenwriter Persona](../personas/educational-screenwriter.persona.md) **in full**, then follow this task-specific workflow. This is a **Lesson screenplay/specification authoring task**, **not** application implementation. The persona owns the creative/pedagogical presentation; this Skill defines required inputs, actual platform contracts, deliverables, editorial gates and handoffs.

**Mission:** Transform the **approved Methodologist's lesson material / Learning Brief** into an **exceptional, factual, audience-native, interactive Nextgen Lesson Script**, with a deliberate sequence of typed Sections and content blocks, plus individual **Scene specifications** detailed enough that [Design Scene Skill](./design-scene.skill.md) can implement them without inventing any teaching narrative.

The Lesson must **teach, illustrate, invite prediction and meaningful action, explain results, and support understanding/transfer** as the subject requires. Reject the default pattern of a long Markdown lecture followed by a token quiz. Do **not** force a fixed recipe or gratuitous activity quota: the best experience is the simplest one that makes the particular learning goal clear and memorable.

## NON-NEGOTIABLE START CONDITIONS

**Do not generate a Lesson Script until the following are verified:**

1. **Methodologist's approved input:** the actual approved lesson-level Learning Brief or equivalent substantive Methodologist document, with target learning outcomes, factual subject content / authoritative references, target audience, known prerequisites, relevant Skill references, scope and restrictions. A Curriculum title, an unapproved outline or a vague user topic does not substitute for this input. If missing, **stop authoring and request the approved material**; do not create Methodologist output on the Screenwriter's behalf.
2. **Target package and context:** identify the **specific standalone textbook application package root** (`<PackageRoot>`), intended Lesson, language of the deliverable and reader profile. Do not treat the monorepo root or playground as the target by default.
3. **Read relevant architecture:** [Roles Proposition](../Roles%20Proposition.md), [Long Chat Overture](../Long%20Chat%20Overture.md), current code contracts/renderers below, applicable `AGENTS.md` and any relevant local instructions. Treat historical concepts as design intent, not automatically implemented APIs.
4. **Inspect existing lesson content:** read any applicable existing Lesson, Section, Question, Scene, content-resource and accessibility/localization patterns in the selected app, plus useful reference demonstrations in `apps/playground`. Verify the *present* implementation before authoring platform-specific specifications.
5. **Editorial integrity:** where the Methodologist input conflicts with reliable facts, is ambiguous, or presupposes nonexistent assessment behavior, **report the exact blocker and proposed clarification**. Do not silently change competencies, learning goals or scoring rules.

## 1. CORE ARCHITECTURE: LESSON / SECTION / RESOURCE / PROGRAM

- **Lesson:** autonomous, reusable **Program-neutral teaching material**: facts, explanations, structured discovery, demonstrations, practice opportunities, learner feedback and optional knowledge checks. It **has an instructional scenario** (how to teach and reveal knowledge), but no compulsory external mascot, narrative quest, level-up story or Program state.
- **Section:** an ordered, navigable **typed teaching step**, not necessarily a separate page. Current source type is **`LessonSection_Content = LessonSection_Config | Quiz_Config`**. `LessonSection_Config` holds a **nonempty ordered array of `Resource_Config`** blocks, a name, ID, parent lesson ID and skippable policy; `Quiz_Config` is an explicitly different section structure.
- **Resource / Content Block:** a **`blockType`-discriminated resource** inside a general Section; not synonymous with a Section, a question kind, or a UI widget. Different blocks carry different contracts and rendering requirements.
- **Program:** a separate journey/programmatic context for arranging and enriching reusable Lessons with missions, characters, plot, rewards and contextual reactions. **Never embed Program plot into the canonical Lesson.** Optional Program-facing opportunities can be described in a **separate nonbinding note**. `Program Runtime`, universal injection slots and lesson-event API are **concepts**, not assumed code.

**Creative distinction:** The Scene's pedagogical drama may contain a problem, suspense, surprise, learner prediction, experiment and reveal. This is a **neutral instructional sequence**, not a Program narrative. A Lesson must make complete sense by itself when reused in another textbook, language or Program.

**No universal sequence:** `Theory → Practice → Flashcards → Test` is a useful *example*, not the app's required fixed section skeleton. Choose and repeat sections according to the topic, audience, fatigue/cognitive load and approved outcomes. Do not confuse a Section's editorial intent (e.g. "simulation", "flashcard review", "coding activity") with an already implemented `Section` discriminator.

## 2. MANDATORY SOURCE CODE RECONNAISSANCE

The following are **direct links to the current repository's source of truth**. Read the actual files before describing platform support; type sets and renderers can diverge.

| Source | What the Screenwriter must learn |
| --- | --- |
| [Lesson and Section contracts](../../shared/engine/src/types/content/lesson.types.ts) | `Lesson_Config`, `LessonSection_Config`, `LessonSection_Content`, `sceneLocales`, ordered content and `LessonState` |
| [Typed content resource contracts](../../shared/engine/src/types/content/resource.types.ts) | `Resource_Type`, `Resource_Config` discriminated union, block-specific fields and `SceneResource_Config` |
| [Quiz contracts](../../shared/engine/src/types/content/quiz.types.ts) | `Quiz_Config`, intro/results settings, progress/answer state and what belongs to assessment |
| [Question contracts](../../shared/engine/src/types/content/question.types.ts) | `QuestionType`, Question content, flashcard association, accessibility restrictions; **declared types are not proof of implemented lesson widgets** |
| [Actual Lesson Section renderer](../../apps/playground/src/components/pages/Lesson/LessonSectionContent/LessonSectionContent.tsx) | Which `blockType` values can actually render in a generic Section **today** |
| [Actual Lesson assembly](../../apps/playground/src/components/pages/Lesson/Lesson.tsx) | Current `Lesson` composition, providers and navigation assumptions |
| [Lesson → Question widget adapter](../../apps/playground/src/components/pages/Lesson/adapters/toQuestionWidgets.ts) | Which Question kind this Lesson UI currently renders |
| [Live lesson example](../../apps/playground/src/content/howLightMoves/howLightMoves.data.ts) | Actual ordering and Lesson-level `sceneLocales` wiring |
| [Theory Section](../../apps/playground/src/content/howLightMoves/sections/theory/theory.data.ts) and [Practice Section](../../apps/playground/src/content/howLightMoves/sections/practice/practice.data.ts) | Mixed ordered resources and interactive scenes |
| [Example Quiz Section](../../apps/playground/src/content/howLightMoves/sections/quiz/quiz.data.ts) | Distinct Quiz structure and current question integration |
| [Scene Designer workflow](./design-scene.skill.md) | Separate handoff contract for fully specified, prop-free, localized and LTR/RTL-aware custom Scenes |

### Current resource and rendering capability map — VERIFY AGAINST CODE

**Important: the types below are what the engine declares; not a promise that every block works in the current Lesson renderer.**

| `Resource_Type` | What it can describe pedagogically | Current technical boundary |
| --- | --- | --- |
| `text` | Short instructions, prompts, labels, explanations and localized prose | Typed config **and currently handled by the generic Section renderer** |
| `markdown` | Structured explanation, formulas, tables, readable long-form content and links | Typed config **and currently rendered**; do not let it replace needed models/practice |
| `scene` | Bespoke animated/interactive simulations, SVG diagrams, playable manipulatives, dynamic explorations, guided interaction | Typed config **and currently rendered** as a React element; implementation requires a **separate Scene specification** |
| `code` | Localized code snippets/resources; potential future runnable editors, visualized algorithms or code challenges | **Typed resource/builder available; generic Section renderer does not currently handle this block type.** Executable challenges need separately verified infrastructure |
| `image` | Illustrations, graphs, maps, diagrams, visual evidence | **Typed resource/builder available; generic Section renderer does not currently handle it**; other widgets may have image support |
| `audio` | Speech, narrated explanation, sound comparison, audio experiments | **Typed resource/builder available; generic Section renderer does not currently handle it**; verify any widget-specific playback |
| `video` | Short demonstrations, recordings and media requiring pause/captions/transcripts | **Typed resource/builder available; generic Section renderer does not currently handle it**; verify actual player support |
| `youtube` | Externally hosted video — conceptual/embed option | The literal occurs in `Resource_Type` but is **not in the current `Resource_Config` union or generic renderer**. Treat it as **not implemented** for authoring |

**Renderer caveat:** The currently inspected generic `LessonSectionContent` handles **only `text`, `markdown` and `scene`**; unsupported kinds cause an error. `buildResource` can build other typed resources without automatically making them renderable. Existing nested widgets may render image/audio/video in their own slots, which is **not** general-section support.

**Section / exercise caveat:** `Quiz_Config` is a distinct section contract. The current engine lists **nine QuestionType values** (`select-one-answer`, `select-multiple-answers`, `match-blocks`, `answer-with-text`, `answer-with-number`, `order-sequence`, `build-answer-with-blocks`, `fill-blanks-with-blocks`, `fill-blanks-with-text`), but the current `toQuestionWidgets` adapter supports **only `select-one-answer`** in the inspected Lesson UI. A `flashcardConfig` exists on Question data, **not** as proof of a first-class Flashcard Section. Standalone flashcard, coding, dynamic generation or other Sections require real integration verification.

**Design rule:** Distinguish each planned experience as:
- **Available now:** verified type, renderer and related UI/runtime behavior.
- **Typed/partially integrated:** defined contracts or existing widgets, but required Section wiring is missing.
- **New capability / proposed:** new component, custom Scene, renderer, backend, generator, browser integration, API or Program feature; **no implementation claim**.

A Screenwriter may **pitch ambitious features**, but the script must clearly mark their feasibility status and include an accessible, pedagogically adequate alternative or **explicit dependency for approval**. Do not downgrade the entire Lesson to passive text simply because a richer feature requires engineering.

## 3. NEXTGEN PEDAGOGICAL AND EXPERIENCE DESIGN

Apply the following as **design choices justified by the particular brief**, not compulsory toys or marketing claims.

### Audience-native communication

- Explain in the audience's own language, concrete vocabulary and existing mental models. Introduce technical terms carefully and retain scientific precision. Prefer **one clean example at a time** before complexity.
- Open curiosity with a meaningful question, observed contradiction, problem or scenario anchored in the *subject*, not a random narrative plot. Invite a prediction before the reveal when it supports learning.
- Use **short explanation → meaningful illustration/demonstration → learner action → interpretation** rather than long unbroken prose. "Illustration" may mean **an interactive model, manipulation, physical experiment, timeline, animation, sound or comparative visualization**, not necessarily a static image.
- Respect self-paced controls and meaningful pauses; avoid uninterrupted autoplay, endless gamification, overwhelming sensory input and repetitive clicking without cognitive value.

### Evidence-informed learning mechanics

- **Active prediction and feedback:** ask what learners think will happen, let them vary an input, then explain results and misconceptions. A click alone is not evidence of learning.
- **Retrieval practice and spaced review:** offer purposeful recall after explanations and mark future opportunities for recurrence. Do **not** claim that a Lesson's presentation alone implements a spaced-repetition scheduler or mastery tracking.
- **Worked examples → guided practice → independent transfer:** scaffold novice learning, progressively remove help and apply the concept to new contexts where appropriate.
- **Interleaving and varied practice:** contrast confusable cases or mix relevant tasks when it helps discrimination; do not force it when prerequisite knowledge is absent.
- **Multimedia design:** use coherence, signaling, proximity of text to the referenced element, segmentation, optional replay and learner-controlled pace. Avoid irrelevant animated decoration, gratuitous sound or duplicated speech/captions that increase load without purpose.
- **Reflection, choice and autonomy:** let learners compare hypotheses, inspect multiple representations and notice errors without humiliation. Encourage curiosity and autonomy rather than manipulative psychological rewards.
- **Cognitive and developmental fit:** limit new concepts per step; provide prior-knowledge cues, progressive disclosure and support for language learners and diverse literacy levels.

**Rationale sources to consult when relevant (guidelines, not an excuse to invent scientific claims):**
- [EEF: Cognitive science approaches in the classroom](https://educationendowmentfoundation.org.uk/education-evidence/evidence-reviews/cognitive-science-approaches-in-the-classroom) — evidence/context for cognitive approaches.
- [EEF: Using Digital Technology to Improve Learning](https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/digital) — technology must serve an identified learning need.
- [Cambridge Handbook: segmenting, pre-training, modality](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning/A9E77D0172F905AC957689D1771E2888) — manage essential cognitive processing.
- [CAST Universal Design for Learning Guidelines 3.0](https://udlguidelines.cast.org/) — multiple means of engagement, representation, action and expression.
- [MDN: WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) and [MDN: WebGPU](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) — browser 3D/compute options; **WebGPU is not universally available**.

No claim that "biohacking", neuro-stimulation or any particular visual effect **guarantees** better learning. Identify the intended learning mechanism and what meaningful learner behavior it supports.

### Think in interactive, explorable systems

Explore opportunities such as:
- An **interactive solar-system model**: switch viewpoints, compare orbits/scales, pause and inspect motion, ask a prediction, inspect how models simplify real sizes/distances, avoid scientifically inaccurate conclusions from unmarked scale changes.
- A **virtual science laboratory**: vary one independent variable, observe a graph, reset conditions and interpret outcomes; label what a simulation can and cannot demonstrate.
- A **math construction space**: manipulate geometry, compare a formula's prediction with the figure, explore exceptions and inspect numerical/visual correspondence.
- A **history/geography exploration**: compare layers of a map, time slider, causality and evidence with verifiable source material.
- A **language/listening interaction**: hear samples, compare sounds, replay at learner-selected pace, read transcripts and practice meaningfully.
- A **programming or algorithm visualization**: step through changes to program state, make a hypothesis, inspect intermediate values, attempt a minimal exercise and get constructive feedback.

These are **creative exemplars**, not built-in products or required sections. A static, accessible explanation is sometimes better. If a complex 3D experience adds no insight over an SVG or simple control, choose the simpler representation. Specify optional low-performance and nonvisual modes.

### Accessible by design, in every locale

Plan meaningful access for users with visual, auditory, motor, cognitive and other disabilities, not merely "add ARIA later". Define alternatives to drag-only, color-only, motion-only and audio-only teaching; captions/transcripts, accessible data tables for plots, keyboard control, perceivable focus, plain-language summaries and reduced-motion/static states where applicable. Use RTL-aware semantics, localized units/numbers, translated controls and accessible names. **Any unavoidable barrier must be explicitly flagged for editor/engineering review**, not quietly omitted.

## 4. CREATIVE AND TECHNICAL OWNERSHIP

**Educational Screenwriter owns the scenario. Coding Agent owns implementation. Assessment Architect owns scoring.**

| The Screenwriter SHOULD specify | The Screenwriter MUST NOT invent |
| --- | --- |
| Key concept and accurate learner-facing explanation | New competencies, changed learning outcomes or unverified facts |
| Section sequence and why each Section exists | A new hidden Program story inside the canonical Lesson |
| Which typed content blocks are envisioned | Unimplemented code paths or fake `Resource_Config` properties |
| Animation/Scene purpose, learner controls and conceptual model | Low-level React component architecture as a binding requirement |
| Interaction stages, visible states, valid/invalid model behavior and feedback meaning | Question scoring, diagnostic validity, grading threshold or mastery inference |
| Media directions and alternatives for accessibility/localization | Already-working SDKs, APIs, offline sync, injection/event pipeline or browser-wide WebGPU support |
| Opportunities for practice, retrieval and reflection | A working spaced scheduler or analytics system without evidence |
| What the Coding Agent must build and what remains blocked | Changes to existing app, shared engine and tests merely by writing this Script |

A visually sophisticated experience may legitimately require a new **Scene** or renderer. Specify the **experience contract**, ask for a technical feasibility review where necessary, and preserve design intent through the handoff. Do not hide speculative functionality in prose as if already available.

For **Quiz/question** sequences, describe the pedagogical **purpose and position** plus the concepts/misconceptions that need assessment. The Learning Assessment Architect owns actual validated items, answer criteria, Skill-to-question mapping, weights, retries and evidence. A draft example may illustrate the experience, but label it editorially illustrative until assessed.

## 5. EXECUTION PROTOCOL

1. **Load persona and validate inputs.** Read the approved Methodologist brief and actual audience specification; confirm target package, scope, output language, factual references and existing Skills. Stop if approval/essential input is absent.
2. **Inspect the current runtime.** Read the linked engine Lesson/Resource/Question/Quiz types, the actual Lesson/Section renderer, adapter and existing example. Distinguish present, typed-only and proposed capabilities.
3. **Reconstruct the learner's journey.** State what the learner knows at entry, what must change in their mental model, where prediction/observation/explanation/practice belongs and how the learning objective remains Program-neutral.
4. **Design the Section architecture.** Divide the Methodologist content into the number of Sections needed for coherent pacing. Give each a **specific learning purpose and audience-facing title**; mark if it is a currently implemented `LessonSection_Config` / `Quiz_Config` or a **proposed specialized Section** requiring engineering. Do not mistake editorial labels for TypeScript discriminants.
5. **Compose ordered content blocks.** For each Section, identify actual `blockType` values, purpose, approximate content, transition, learner action, localization/accessibility notes and **current readiness status**. Alternate explanation with meaningful demonstration and interaction when justified; do not create busywork.
6. **Write audience-ready educational content.** Provide actual examples of key explanations, prompts, model annotations and feedback in the output language; do not hand engineers "put something engaging here". Use verifiable sources and the Methodologist's approved terminology.
7. **Author each custom Scene specification separately.** Include goal and factual model, trigger/entry, objects/variables, sequence of events, learner inputs, state transitions, expected visual/auditory/text outputs, constraints, feedback content, edge cases, RTL/localization, accessibility alternatives, reduced motion and acceptance scenarios. **Do not author the implementation**. The spec must stand alone as the mandatory input for [Design Scene](./design-scene.skill.md).
8. **Design practice/review handoffs.** Locate retrieval/checkpoints, useful flashcards or practice where warranted; identify **Assessment Architect-owned** questions and validity/scoring decisions. Mark spacing/repetition needs as future-system dependencies unless actually supported.
9. **Audit for realism and pedagogy.** Check accuracy, target learner voice, cognitive load, meaningful interactivity, lack of Program plot, type/renderer feasibility, section flow, accessibility, RTL, locale, mobile/low-end device constraints, copyright/source attribution and explicit gaps.
10. **Stop for editor review.** Deliver the Lesson Script + Scene specs and a short **readiness/dependency report**. Do not auto-run Scene Design, Question implementation, application coding, Program scripting or the next authoring Skill.

## 6. REQUIRED DOCUMENT OUTPUTS

**Create Markdown editorial artifacts inside the selected textbook package, never under the monorepo root's `studio/` and never automatically in the playground:**

~~~text
<PackageRoot>/
└── docs/
    └── lessons/
        └── <lessonNameCamelCase>/
            ├── <lessonNameCamelCase>.lesson-script.md
            └── scenes/
                ├── <sceneNameCamelCase>.scene-spec.md
                └── ...
~~~

If the textbook already has an approved equivalent docs convention, follow it and report the actual paths; do not create competing parallel directories. Only create a `scenes/` folder when custom Scenes are proposed.

### Lesson Script format (the generated document, not this instruction)

Use these **mandatory sections**, adjusting details and counts to the real Lesson. Write in the approved **learner/editorial language**; do not copy this English guidance verbatim.

~~~md
# <Lesson Title> — Nextgen Lesson Script

Status: Draft
Target Lesson: <existing Lesson / planned Lesson, target textbook>
Audience: <age/stage, prior knowledge, language, accessibility constraints>
Approved Methodologist source: <verified relative link>
Learning outcomes: <from the approved Methodologist document>
Target Skills: <real existing approved references, if supplied>
Program dependence: None

## INSTRUCTIONAL CONCEPT
<What must become clear, the core conceptual progression, and the learner's active role>

## LEARNER JOURNEY
<Short ordered description of the intended teaching arc and deliberate pacing>

## SECTION PLAN
### <Section 1 — audience-friendly name>
- Purpose / learning outcome:
- Current implementation shape: <LessonSection_Config | Quiz_Config | proposed specialized section>
- Ordered content blocks:
  1. <blockType, reader-facing content/interaction, capability status: available | typed-only | proposed>
  2. ...
- Core explanation and learner-facing text:
- Illustration / model / experiment / interaction:
- Learner action, observations and explanatory feedback:
- Navigation and transition:
- Accessibility, locale and RTL requirements:
- Implementation dependencies and review notes:

### <Section 2>
...

## CUSTOM SCENE SPECIFICATIONS
- <Scene name>: <verified relative link to scenes/<scene>.scene-spec.md>

## PRACTICE, RETRIEVAL AND ASSESSMENT HANDOFF
- <Where learners practice or retrieve; what Assessment Architect must specify>
- <Spaced repetition opportunities vs actual scheduling support>

## GLOBAL ACCESSIBILITY AND LOCALIZATION
<Meaningful alternatives, internationalization, RTL, reduced-motion/mobile/low-end considerations>

## PRODUCTION / PLATFORM DEPENDENCIES
<Each gap marked as available, typed-only, or proposed with responsible role and next decision>

## EDITORIAL SOURCES AND OPEN QUESTIONS
<Source references, unresolved factual/accessibility/technical/pedagogical issues>

## HANDOFF
<What is ready for Scene Designer, Assessment Architect, Coding Agent and what requires editorial approval>
~~~

### Independent Scene Specification format

Every **custom interactive or animated Scene** must have an individual, sufficiently precise **Screenwriter-owned** document:

~~~md
# <Scene Title> — Scene Specification

Status: Draft
Owner: Educational Screenwriter
Parent Lesson / Section: <verified lesson and section reference>
Methodologist objective(s): <approved goal; do not invent new Skills>

## LEARNER PURPOSE AND CONCEPT
<What the learner will understand; why this form of interaction is needed>

## ACCURATE CONTENT AND MODEL LIMITATIONS
<Relevant facts, variables/units, physical/conceptual invariants, simplifying assumptions>

## EXPERIENCE BEATS AND LEARNER ACTIONS
<Ordered stages, exact learner-facing prompts, interaction choices, reveal and feedback>

## INTERACTIVE OBJECTS, STATES AND RULES
<Objects/controls, state changes, input ranges, reset/pause behavior, outcomes and edge cases>

## VISUAL / AUDIO / MEDIA DIRECTION
<What is represented and animated; artistic flexibility vs mandatory semantics>

## LOCALIZATION, DIRECTION AND ACCESSIBILITY
<Required messages, RTL layout/geometry, alt descriptions, keyboard/touch,
captions/transcripts, reduced motion, accessible alternatives>

## ACCEPTANCE SCENARIOS
<Observable expected behavior for representative inputs and boundary cases,
including LTR, RTL, reduced motion and assistive-technology use>

## IMPLEMENTATION DEPENDENCIES AND OPEN QUESTIONS
<Existing Scene/renderer capabilities vs explicitly proposed work>
~~~

**Critical handoff contract:** The Scene Specification is the **approved mandatory scenario input** consumed by [Design Scene Skill](./design-scene.skill.md). On initial creation it is `Draft` and must receive editor approval **before** a Coding Agent starts that Scene. Keep Lesson Script and Scene specs in sync through explicit editorial review, not by silently improvising changes during implementation.

## 7. ACCEPTANCE CHECKLIST

- [ ] Approved Methodologist input **was actually read**; target Lesson scope and audience are clear.
- [ ] Lesson is genuinely **Program-neutral**, factually correct and independently useful; pedagogical scenario is distinguished from Program story.
- [ ] Section plan uses actual `LessonSection_Content` semantics and **ordered, typed Resource blocks**; distinguishes `Section`, `Resource` and `Question`.
- [ ] All **eight declared Resource_Type labels** are understood, including the **unimplemented `youtube` config**, and renderer readiness was checked rather than inferred.
- [ ] Proposed flashcards, coding activities, generated tasks, 3D or additional Quiz kinds are **not falsely presented as running Section types/widgets**.
- [ ] Script contains actual learner-facing explanations, demonstrations and interactions, not a generic Markdown lecture or vague creative wish list.
- [ ] Activity choices make pedagogical sense: cognitive load, meaningful retrieval/feedback, worked examples and transfer are considered without compulsory gimmicks.
- [ ] Each custom Scene has an independent **full specification**, with observable behavior, accurate model, states, learner actions, accessible alternatives and acceptance scenarios.
- [ ] Every specialized or unsupported experience has an honest feasibility classification and clear engineering dependency; no imaginary API/schema.
- [ ] Accessibility, localization, responsive/mobile/low-end delivery, reduced motion, LTR/RTL and cultural adaptation were planned.
- [ ] Quiz/Question scoring, correct-answer validity, mastery and retry policies are left to **Assessment Architect**, not silently decided by Screenwriter.
- [ ] Links to approved sources, Methodologist brief, existing Skills and Scene specs are **real and relative to output files**; all uncertainties and unresolved dependencies are explicit.
- [ ] Generated Lesson Script and Scene specs are handed off for **editor approval**, with no automatic runtime implementation.

## RESULT

Provide:

1. **One** draft Nextgen Lesson Script Markdown at the agreed target textbook docs location.
2. **One specification per custom Scene**, with real relative links from the Lesson Script. A purely text or existing-widget Lesson need not create an empty Scene specification.
3. A concise editorial report stating the **most important interactive concepts**, how the Lesson avoids passive content without losing clarity, the chosen Sections/Resource blocks, **verified runtime capabilities vs proposed features**, accessibility/localization decisions, any source/technical gaps and which artifacts are waiting for approval.

**Stop after documentation and handoff.** The Coding Agent, Design Scene and Learning Assessment Architect perform their own separately authorized stages. Never author production code, invent new Question correctness rules, register fake resource types, or attach a Program narrative to the canonical Lesson.

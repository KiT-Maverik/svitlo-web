# Internationalization & Inclusive Access

**Status:** internationally accessible LTR/RTL learning is a product invariant. Locale definitions and a Disability union **exist in Engine**, but automatic accommodation, compatibility flags and equivalent alternative-mode dispatch are **not implemented merely by those types**.

## International from the first design

- Cover **as many meaningful locales as practical**. The live roster must come from the [canonical language definitions](../../../shared/engine/src/types/languages.ts), **not a historical hardcoded count**; the default list can be extended via the supported extension mechanism.
- All **user-visible and accessibility text** must be localized: explanations, prompts, control labels, diagrams, SVG `<title>`/`<desc>`, screen-reader labels, feedback, unit labels, media captions and notes. Keep cultural assumptions, numbering, grammar, pluralization and direction under review.
- Prefer complete, type-checked language dictionaries under established package conventions, rather than permanent implicit English fallbacks. A runtime fallback is not an authoring excuse for missing translations.
- Where the current app uses SSR selection of the requested locale and context for client components, **send only the selected translations** to the interactive client. A component must not bundle every language needlessly.
- **RTL is a real alternate layout**, not a CSS mirror of the entire page. Adapt layout, logical start/end, arrows, controls, chart axes, diagram geometry and visual reading order as semantically appropriate while retaining readable text, numerals, mathematics, actual physics and directional meaning. Test Arabic, Hebrew and Urdu alongside LTR languages. Bidi text, SVG labels and localized positional instructions demand explicit checks.
- Use CSS logical properties where applicable, respect `lang`/`dir`, test responsive text expansion and preserve keyboard/tab order and screen-reader reading order. Locale/flag icons are **not** proof of a complete translated experience.

## Disability-aware by default — not opt-in

Every educational resource, Scene, Question, layout and interaction must be designed **for learners with relevant access needs by default**, including keyboard-only operation, nonvisual alternatives, captions/transcripts, clear focus/roles/names, readable contrast, alternatives to color-only or audio-only information, reduced motion, avoidance of photosensitive hazards, meaningful time controls, manageable cognitive load and scalable content.

### What the code actually provides

[`Disability` union](../../../shared/engine/src/types/disabilities.types.ts) presently lists the following **question-related limitation categories**:

| Area | Declared values |
| --- | --- |
| Color & vision | `color-vision-deficiency`, `visual-impairment`, `blindness` |
| Hearing | `hearing-impairment`, `deafness` |
| Speech & language | `speech-impairment`, `speech-language-disorder` |
| Movement & motor | `motor-impairment`, `movement-disorder`, `fine-motor-impairment` |
| Cognitive & learning | `cognitive-impairment`, `intellectual-disability`, `learning-disability`, `dyslexia`, `dyscalculia`, `attention-deficit`, `memory-impairment` |
| Sensitivity | `photosensitivity`, `seizure-susceptibility` |

The [Question types](../../../shared/engine/src/types/content/question.types.ts) include a `restrictions: Disability[]` field. **This is a declaration, not proof that the platform detects learner disabilities, adapts the UI, blocks inaccessible content, or offers an alternative renderer.** Do not infer a medical diagnosis, disability or access limitation from activity or performance.

A restriction label describes a **potential incompatibility in a particular interaction**. It must not justify knowingly shipping avoidable barriers; developers should first provide an equivalent accessible mode where possible. Review accommodations with the learner's dignity and privacy in mind.

### If full access is technically blocked

1. Identify exactly which user task is inaccessible and for whom (without diagnosing a person).
2. Attempt to preserve the **same educational objective and core functionality** through another interaction/representation: keyboard operation, structured text/table, sonification, tactile-friendly external representation, captions, accessible alternative controls, etc., as appropriate.
3. If no acceptable alternative exists without compromising the specified function, **do not silently remove the material or claim full accessibility**. Record a concrete limitation, intended remediation and needed editorial/architectural decision; make the exception conspicuous in the final chat/review report.
4. For a **Scene implemented by [Design Scene Skill](../../skills/design-scene.skill.md)**, follow its stricter contract: append a precise **end-of-file `TODO(a11y)` in the main Scene `*.tsx`**, and explicitly report the barrier in the chat. A TODO does not resolve the issue.
5. A future **content compatibility marker** could identify devices or accessibility needs the current implementation does not satisfy, but **no such generic filtering/flag system is assumed implemented or authorized by this document**. A flag is disclosure/support metadata, not permission to discard content.

## Verification expectations

Test LTR and RTL examples, keyboard and screen-reader semantics, localized accessible names, logical navigation, reduced motion, captions/transcripts when applicable, nonvisual interpretation of essential information and mobile readability. Favor accessible-role/name-based selectors over brittle incidental DOM selectors. Inaccessible alternatives must not be disguised by passing only TypeScript or unit checks.

**Related:** [Learning Philosophy](./learning-experience-philosophy.md), [Offline & Device Support](./offline-first-and-device-compatibility.md), [Lesson Notes](./lesson-notes.md).

# Flashcard Variable Placeholders

**Status:** Proposed — backlog only; not implemented by this document.
**Area:** learning / flashcards

## Goal

Let authored flashcards explicitly distinguish **variable parts of an example or rule** from fixed facts worth memorizing. The learner should recall _that a variable belongs here and what it represents_, not memorize the particular value shown in one example.

## Intended experience

- Support an inline, semantic **variable placeholder** in a flashcard question, answer or formula alongside ordinary localized text.
- Render each placeholder as a compact, visually neutral **rectangular chip with a muted grey surface and its variable name inside**. It should read as part of the sentence or expression, not as a button, editable field, or answer to reveal.
- Preserve the distinction between the **variable's identity/role** and any concrete sample value. A fixed number, place name, person, quantity or other instance-specific value must not appear to be a general rule merely because a particular card once used it.
- Allow multiple placeholders in the same card; repeated references to the same variable should be recognizable as the same concept. Support both short symbols and meaningful labels when pedagogically appropriate.

**Illustrative presentation only** (square brackets stand for visual chips, **not** a proposed serialization syntax):

> Швидкість = [відстань] / [час]

Here the learner remembers the relationship and the roles of its changing quantities, not the numbers from a specific worked example.

## Accessibility, localization, and design constraints

- The variable name is actual readable text, not information conveyed only by background color, an image, or CSS decoration. Expose meaningful text/semantics to screen readers; retain legibility under high contrast, zoom, keyboard navigation, and forced-color settings.
- Support all required content locales, including RTL layout and bidirectional text in mixed formulas. Any user-facing variable label should be localizable where necessary; do not silently substitute English labels.
- Keep inline placeholders legible across line wrapping, narrow mobile cards, and the question/answer reveal states. They must not look like clickable controls if no interaction exists.
- Keep card content and the placeholder's semantic meaning available offline with the rest of the card; do not rely on a network lookup at render time.

## Acceptance expectations for a later implementation

- An authored flashcard can mix ordinary text and named variable placeholders, and the UI renders the named placeholders consistently as subdued rectangular labels.
- The learner can distinguish variables from constants and can understand the same variable repeated on one card without needing to remember a specific example value.
- Variable placeholders work on both sides of the flashcard without breaking reveal, review or rating flows.
- Visual, accessibility, locale/RTL and offline checks cover at least one real sentence and one formula with multiple variables.
- Existing plain-text flashcards remain usable unchanged.

## Open decisions and scope boundaries

- Define the typed content representation and authoring convention after inspecting the actual flashcard/content contracts; do not invent a runtime API in this backlog entry.
- Decide whether placeholder labels are authored directly per locale or use a stable semantic variable key with localized display labels.
- **Out of scope for this feature by default:** random value generation, parameter substitution at runtime, automatic evaluation, adaptive difficulty and question-generator integration. These may be proposed separately; the placeholder primarily expresses **changing/abstract context**, not an instruction to instantiate it.

**Implementation note:** Backlog only, not permission to modify the Flashcard widget, assessment engine or content schema in this PR.

**Related:** [Flashcard Cram Mode](./flashcard-cram-mode.md), [Flashcard Spaced Review](./flashcard-spaced-review.md), [Git-First Typed Content](../../docs/architecture/git-first-typed-content.md).

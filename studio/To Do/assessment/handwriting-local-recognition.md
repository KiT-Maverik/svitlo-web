# Local Handwriting & Equation Recognition

**Status:** Long-term recognition capability — not implemented by this document. Optional early dataset collection is tracked separately and can be prioritized before model development.
**Area:** assessment

## Goal

Capture touch/pen handwriting and recognize symbols/equations using a local model.

## Intended scope

- Plan three equivalent authoring/answer-entry paths for mathematical expressions where appropriate: **LaTeX source entry**, **structured text entry via a WYSIWYG editor**, and **touch/pen handwriting on mobile or desktop**. Users should be able to choose a mode; handwriting is not a prerequisite to participating in assessment.
- Build responsive touch/pen input on desktop/mobile, preserve strokes where needed, and keep accessible keyboard/text alternatives.
- Later, investigate locally executed recognition of selected symbols, equations and expressions with SVG/vector output where justified. Model training and on-device inference are future work; starting an opt-in dataset effort earlier must not be mistaken for having recognition implemented.
- Avoid claiming raw handwriting recognition produces semantic SVG math without a verified intermediate representation; consider structured math tokens/MathML/LaTeX as alternatives.
- Measure accuracy, device performance, keyboard support and offline model size.

## Open decisions and constraints

Scope supported alphabet/math symbols, the LaTeX/WYSIWYG/handwriting interchange format, dataset requirements, model runtime and rights. Distinguish early voluntary data collection from future input-recognition features.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

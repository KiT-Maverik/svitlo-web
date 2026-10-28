# Local Handwriting & Equation Recognition

**Status:** Proposed — not implemented by this document.
**Area:** assessment

## Goal

Capture touch/pen handwriting and recognize symbols/equations using a local model.

## Intended scope

- Build responsive writing input usable on desktop/mobile, preserving strokes and accessible equivalent text entry.
- Investigate locally executed recognition of selected symbols, equations and expressions with SVG/vector output where justified.
- Avoid claiming raw handwriting recognition produces semantic SVG math without a verified intermediate representation; consider structured math tokens/MathML/LaTeX as alternatives.
- Measure accuracy, device performance, keyboard support and offline model size.

## Open decisions and constraints

Scope supported alphabet/math symbols, dataset requirements, model runtime and rights.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

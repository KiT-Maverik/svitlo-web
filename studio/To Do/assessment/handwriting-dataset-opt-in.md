# Optional Handwriting Dataset Collection

**Status:** Proposed early-priority opt-in data collection — not implemented by this document. Local handwriting recognition is a separate, longer-term feature.
**Area:** assessment

## Goal

Gather legally permitted examples to train a local recognition model.

## Intended scope

- Prioritize evaluating voluntary training-data collection **as early as responsibly feasible**, so a useful, diverse dataset can grow before the eventual local recognition model is built.
- Offer voluntary stand-alone contribution flows for symbols/equations or optional non-scored practice opportunities; keep these separate from regular graded questions and from future LaTeX/WYSIWYG/handwriting input mode selection.
- If embedded in Quiz, such prompts do NOT contribute to grades, progression or adverse consequences for refusal.
- For children, require appropriate guardian/learner consent, clear purpose, minimal sensitive data, pseudonymization and deletion/withdrawal mechanisms.
- Avoid dark patterns, hidden uploads or identifying learner metadata; local/offline collection must not silently sync sensitive handwriting.

## Open decisions and constraints

Define lawful basis, sampling, validation, annotation, opt-in guardian consent and secure retention policy **before collecting any data**. Decide whether raw strokes, transcriptions and consent records can be retained separately.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

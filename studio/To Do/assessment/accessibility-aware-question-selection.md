# Quiz Selection from Learner Accessibility Preferences

**Status:** Proposed — not implemented by this document.
**Area:** assessment

## Goal

Use Question.restrictions to filter unsuitable questions for a voluntarily configured learner profile.

## Intended scope

- Question_Base already declares restrictions: Disability[]; future quiz selection compares those restrictions with optional profile accessibility/disability preferences.
- Exclude incompatible questions and prefer pedagogically equivalent accessible variants.
- Never infer disabilities from answers or mark an empty pool complete; show a respectful error/review flow if not enough suitable questions.
- Keep preferences private, user-controlled, minimally stored and avoid penalizing learners for opting in.

## Open decisions and constraints

Decide conflict algorithm, comparable scoring, default when preferences absent and how substitute pools are curated.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

**Architectural references:** [internationalization-and-accessibility.md](../../docs/architecture/internationalization-and-accessibility.md)

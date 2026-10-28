# Dynamic Question UI Component

**Status:** Proposed — not implemented by this document.
**Area:** assessment

## Goal

Integrate existing deterministic generators into actual Question widgets.

## Intended scope

- Read existing generator APIs/config constraints and validate generated parameters/answers.
- Create an independent UI component that renders the generated question and correct feedback using established Question types/widgets.
- Support seed replay for QA and re-attempts; avoid invalid combinations and inconsistent answers.
- Maintain question-level localization, RTL, a11y and automated tests.

## Open decisions and constraints

Determine supported generator schemas, UI adapters and separation of generator logic from grading.

**Implementation note:** This is a product-backlog specification, not approval to edit runtime contracts, add dependencies or claim the feature exists.

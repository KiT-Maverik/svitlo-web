# Questions testing inventory and coverage (Task 8)

Source reviewed: `src/components/widgets/questions`, `src/types/questions`,
`src/utils/createDynamicQuestion`, `tests`, `tsconfig.test.json`, and
`.github/workflows/questions.yml`. This document describes the inspected
repository revision and what is **actually implemented**, not aspirational tests.

## Architecture inventory

| Component | Question type | Parent | Named children / collaborators | State owner | Existing baseline tests |
| --- | --- | --- | --- | --- | --- |
| QuestionAttempt | all nine | application caller | QuestionActions, QuestionResult, per-type Interaction, slots | createQuestionController + explanationVisible | tests/controller.test.ts (controller only) |
| QuestionView | all nine | caller | Interaction, QuestionResult | caller controls value | none for React view |
| QuestionActions | shared | QuestionAttempt | left/center/right action regions | parent | none |
| QuestionResult | shared | QuestionAttempt / QuestionView | MarkdownContent | parent visibility | none |
| AnswerOption | single / multiple | SelectOneAnswer / SelectMultipleAnswers | internal indicator icons | local hover/focus only; answer in parent | tests/feedback.test.ts (answerLetter only) |
| CorrectAnswerBlock | fill blanks | FillBlanksWithBlocks / FillBlanksWithText | feedback marker | stateless | none |
| SelectOneAnswer | single-select | QuestionAttempt / QuestionView | AnswerOption | parent value | none for React component |
| SelectMultipleAnswers | multiple-select | QuestionAttempt / QuestionView | AnswerOption | parent value | none for React component |
| MatchBlocks | matching | QuestionAttempt / QuestionView | left/right choices, connection SVG | parent value + local pending, hover, geometry | none for React component |
| OrderSequence | ordering | QuestionAttempt / QuestionView | SortableAnswer, dnd-kit | parent value + dnd-kit | none for React component |
| AnswerWithText | short-text | QuestionAttempt / QuestionView | TextField | parent value | none for React component |
| TextField | short-text | AnswerWithText | MUI TextField | parent value | none |
| AnswerWithNumber | numeric | QuestionAttempt / QuestionView | NumberField | parent value | none for React component |
| NumberField | numeric | AnswerWithNumber | Base UI NumberField, MUI input | parent value + Base UI transient state | none |
| BuildAnswerWithBlocks | block-builder | QuestionAttempt / QuestionView | DragAndDropZone | parent value | none for React component |
| DragAndDropZone | block-builder | BuildAnswerWithBlocks | AnimatedLayoutItem, AvailableBlock, SortableBlock, DropZone, SourceSlot | parent value + transient DnD/animation | none for React component |
| AnimatedLayoutItem | block-builder | DragAndDropZone | FLIP visual container | animation refs | none |
| FillBlanksWithBlocks | fill-blanks-drag | QuestionAttempt / QuestionView | DraggableBlock, BlankDrop, BlockBank, PreviewBlock, CorrectAnswerBlock | parent value + local animation / DnD | none for React component |
| FillBlanksWithText | fill-blanks-text | QuestionAttempt / QuestionView | BlankTextInput, CorrectAnswerBlock | parent value + local input width | none |
| checkers / checkAnswer | all nine | controller / callers | normalizeText, parseAnswerWithNumber | pure | tests/check.test.ts |
| createQuestionController | all nine | QuestionAttempt | checkers / feedback | owns attempt state | tests/controller.test.ts |
| choiceFeedback / resultFeedback | all nine | interactions | isGraded | pure | tests/feedback.test.ts |

Question types from the actual `QuestionType` union / registry:
`single-select`, `multiple-select`, `matching`, `short-text`,
`numeric`, `ordering`, `block-builder`, `fill-blanks-drag`,
`fill-blanks-text`. No `drag-to-bucket` discriminator or renderer is present.
`BuildAnswerWithBlocks` and `FillBlanksWithBlocks` are not equivalent to a
general-purpose multi-bucket assignment control.

## Contracts and configuration

- `AnswerMap` is keyed by question discriminant; `QuestionOf<K>` binds
  discriminator to its definition. Keep this association in test fixtures.
- `createQuestionController` exposes `setAnswer`, `check`, `retry`,
  `reset`, `configure`, `subscribe`, `isReadyToCheck`, `getSnapshot`.
  It owns `answer`, `result`, `hasInteracted`, `isModified`,
  `hasChecked`, and `attemptNumber`.
- `AttemptOptions` defines `checkMode: manual | on-change`, initial answer
  and result, `disabled`, `readOnly`, and callbacks `onChange`, `onCheck`,
  `onAnswer`, `onCorrect`, `onIncorrect`, `onRetry`, `onReset`.
  Notably there are no `onSelect` / `onSuccess` / `onError` fields.
- `QuestionAttemptOptions` adds `showErrors`, `showCorrectAnswers`,
  `showLetters`, `showResult`, `showExplanation`, `actionSlots`,
  `slots`, and `slotProps`. Named slots: root, question, answers, actions.
- Changing the question `type:id` rekeys the `Attempt` component; this
  is a React behavior and **not covered** by controller-only tests.
- `createDynamicQuestion` is in `src/utils`, not inside the Questions
  widget family. Its separate parameter validation / variant algorithm
  belongs in its utility test suite; generated widget-instance integration
  is still untested.
- The reviewed code has no separately declared `QuestionConfig` or
  `TestConfig` inheritance layer, global test provider, completion
  threshold, or configurable retry limit. Do not invent these contracts.

## Behavioral coverage matrix

Status: **C** = covered in existing/new pure-unit tests, **P** = partially
covered without DOM/component verification, **—** = not yet covered.

| Question type | Input | Evaluation | Feedback | Reset | Callbacks | Accessibility |
| --- | --- | --- | --- | --- | --- | --- |
| Single Select | P | C | P | P | P | — |
| Multiple Select | P | C | P | P | P | — |
| Matching (bidirectional) | P | C | P | P | P | — |
| Ordering | — | C | P | P | P | — |
| Fill-in Number | P | C | P | P | P | — |
| Fill-in String | P | C | P | P | P | — |
| Block Builder | P | C | P | P | P | — |
| Fill Blanks — Blocks | — | C | P | P | P | — |
| Fill Blanks — Text | P | C | P | P | P | — |

**Covered pure-unit dimensions:** valid / invalid / incomplete evaluations,
wrong and exact answer sets, normalization and numeric boundary cases,
callback ordering, duplicate-event protection, manual / automatic checking,
state snapshot isolation, locking, retry/reset invariants, feedback flags.
Some of these overlap with the pre-existing test files.

**Not covered by this batch:** DOM focus / semantic selectors / keyboard
navigation, real React composition, real AnswerOption events, changing
question IDs, slot render prop updates, MUI/Base UI number input handling,
dnd-kit drag events, ResizeObserver geometry, native pointer/touch dragging,
CSS transitions, live announcements, generated-instance rendering, and
configuration behavior through a mounted QuestionAttempt.

## Test infrastructure and next steps

The inspected revision uses `node:test` (compiled through
`tsconfig.test.json`), with `npm test` invoking Node's runner.
It does **not** have Vitest, React Testing Library, user-event, or jsdom in
`package.json`. Task 7's named branch existed at inspection time but did
not add this testing infrastructure to the base revision.

The colocated spec/fixture tests added in this batch deliberately reuse
`node:test` and the current scripts rather than introduce an unconfigured
second runner. They are not a substitute for Task 8's full React component
suite. Before completing the remaining acceptance criteria, integrate the
Task 7 testing packages, update the dependency lockfile, add jsdom setup,
implement bottom-up React fixtures and typed environment mocks, and run
the full suite / typecheck / lint / build in a provisioned checkout.

For browser-only scenarios, queue Playwright in the separately scoped
browser testing task, not this unit-test batch. No coverage percentage is
asserted without measured instrumentation.

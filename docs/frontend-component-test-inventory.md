# Frontend component testing inventory

## Scope and dependency order

This inventory captures frontend components, layouts, widgets, interactive scenes, and supporting page compositions in the repository at the start of Task 7. Existing Tests means colocated unit/component tests in the baseline branch before Task 7; route/node tests are separate. QuestionAttempt and every module within `src/components/widgets/questions/**` remain outside Task 7 and are treated as dependencies, never modified.

1. Foundation: test environment, shared provider mocks, and localized selector sources.
2. Leaves: VerticalSpace, MarkdownContent, LightRayDiagram, LightPropagationSimulation, Flashcard, Celebration, and primitive lesson navigation components.
3. Composition: Navbar → TopNavbar / BottomNavbar → LearningLayout; MarkdownContent → LessonSectionContent; LessonSteps + QuestionProgress + Celebration → LightLesson.
4. Feature composition: ReportButton → ReportedQuestion → QuestionsDemo; FeedbackDemo → ApiDemo; WorkspaceShell → role dashboards.
5. Provider-bound flows: LocaleProvider, LessonProgressProvider, browser preference controls, IndexedDB and router boundaries.

## Component inventory

| Component | Category | Parent / consumer | Named child dependencies | Existing tests | New test suite |
|---|---|---|---|---|---|
| Navbar | Layout | LearningLayout; TopNavbar; BottomNavbar | Slot containers | No | Navbar.unit.spec.ts |
| TopNavbar | Layout | LearningLayout | Navbar | No | TopNavbar.unit.spec.ts |
| BottomNavbar | Layout | LearningLayout | Navbar | No | BottomNavbar.unit.spec.ts |
| NavbarPreferences | Layout | LearningLayout | — | No | NavbarPreferences.unit.spec.ts |
| LearningLayout | Layout | Route layouts | TopNavbar, BottomNavbar, NavbarPreferences, VerticalSpace | No | LearningLayout.unit.spec.ts |
| VerticalSpace | Widget | LearningLayout; other consumers | — | No | VerticalSpace.unit.spec.ts |
| MarkdownContent | Widget | LessonSectionContent; other consumers | — | No | MarkdownContent.unit.spec.ts |
| LessonSteps | Component | LightLesson | — | No | LessonSteps.unit.spec.ts |
| QuestionProgress | Component | LightLesson | — | No | QuestionProgress.unit.spec.ts |
| LessonProgressProvider | Component | Lesson route | Context consumers | No | LessonProgress.unit.spec.ts |
| Flashcard | Component | Lesson experience | — | No | Flashcard.unit.spec.ts |
| MediumPractice | Component | Lesson experience | — | No | MediumPractice.unit.spec.ts |
| LessonSectionContent | Component | Lesson route | MarkdownContent | No | LessonSectionContent.unit.spec.ts |
| Celebration | Component | LightLesson | — | No | Celebration.unit.spec.ts |
| LightLesson | Component | Lesson route | LessonSteps, QuestionProgress, Celebration; external QuestionAttempt | No | LightLesson.unit.spec.ts |
| ApiDemo | Component | Demo route | FeedbackDemo; external QuestionAttempt | No | ApiDemo.unit.spec.ts |
| FeedbackDemo | Component | ApiDemo | External QuestionAttempt | No | FeedbackDemo.unit.spec.ts |
| QuestionsDemo | Component | Questions demo route | ReportedQuestion | No | QuestionsDemo.unit.spec.ts |
| ReportButton | Component | ReportedQuestion; other consumers | — | No | ReportButton.unit.spec.ts |
| ReportedQuestion | Component | QuestionsDemo | ReportButton; external QuestionAttempt | No | ReportedQuestion.unit.spec.ts |
| WorkspaceShell | Layout | Workspace routes | Slot children | No | WorkspaceShell.unit.spec.ts |
| StudentDashboard | Component | WorkspaceShell | — | No | StudentDashboard.unit.spec.ts |
| TeacherDashboard | Component | WorkspaceShell | — | No | TeacherDashboard.unit.spec.ts |
| AdminLessons | Component | WorkspaceShell | — | No | AdminLessons.unit.spec.ts |
| LightRayDiagram | Widget | Light lesson content | — | No | LightRayDiagram.unit.spec.ts |
| LightPropagationSimulation | Widget | Light lesson content | — | No | LightPropagationSimulation.unit.spec.ts |
| LocaleProvider | Component | App layout | Context consumers | No | LocaleProvider.unit.spec.ts |

## Testing boundaries

- Keep Questions widgets, their dedicated files, fixture folders, and localization untouched. The demo wrappers and the reported-question integration are in scope; tests of them assert their own props, controls, composition and report identity.
- Do not mock the actual component under test. The real UI is used where practical; external router, IndexedDB, browser APIs and services are isolated when necessary.
- Child fixture selectors can be used with an explicit scoped container. Parent fixtures reuse child fixture selectors instead of mounting another child.
- Relevant component aria selectors and stable test IDs are grouped in `ComponentName.constants.ts`; translatable accessible values originate in locale modules.
- No mock module is created for components with no external boundary requiring isolation.

## Known limits and follow-up work

- Some existing UI text may still be embedded in content definitions or noncomponent consumer routes; this task is restricted to the components listed above.
- Some legacy locale content and question-specific examples intentionally live in the excluded Questions widget family; they are not rewritten.
- The repo's existing baseline suite uses `node:test`; the newly introduced browser-component suite uses Vitest in jsdom, not native IndexedDB. Native IndexedDB and browser E2E remain separate tasks.
- Coverage from V8 reports the configured project scope, which may include application files not exercised directly by this component suite. Use collected file-level coverage or configured inclusions for strict per-component comparisons.

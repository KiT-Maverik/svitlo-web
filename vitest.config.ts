import { fileURLToPath, URL } from 'node:url';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)), '@types': fileURLToPath(new URL('./src/types/index.ts', import.meta.url)) } },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.unit.spec.test.ts', 'src/**/*.unit.spec.test.tsx'],
    exclude: [...configDefaults.exclude, 'src/components/widgets/questions/**'],
    setupFiles: ['./src/test/setup.ts'],
    restoreMocks: true,
    clearMocks: true,
    css: true,
    coverage: { provider: 'v8', reporter: ['text', 'json-summary'], include: [
          "src/components/layout/Navigation/Navbar.tsx",
          "src/components/layout/Navigation/TopNavbar.tsx",
          "src/components/layout/Navigation/BottomNavbar.tsx",
          "src/components/layout/LearningLayout/LearningLayout.tsx",
          "src/components/layout/LearningLayout/NavbarPreferences/NavbarPreferences.tsx",
          "src/components/widgets/VerticalSpace/VerticalSpace.tsx",
          "src/components/widgets/MarkdownContent/MarkdownContent.tsx",
          "src/components/lesson/Flashcard.tsx",
          "src/components/lesson/LessonSteps.tsx",
          "src/components/lesson/LessonProgress.tsx",
          "src/components/lesson/QuestionProgress.tsx",
          "src/components/lesson/MediumPractice.tsx",
          "src/components/lesson/LessonSectionContent.tsx",
          "src/components/lesson/Celebration.tsx",
          "src/components/lesson/LightLesson.tsx",
          "src/components/pages/ApiDemo/ApiDemo.tsx",
          "src/components/pages/ApiDemo/FeedbackDemo.tsx",
          "src/components/pages/QuestionsDemo/QuestionsDemo.tsx",
          "src/features/reporting/ReportButton.tsx",
          "src/features/reporting/ReportedQuestion.tsx",
          "src/features/workspaces/WorkspaceShell.tsx",
          "src/features/workspaces/StudentDashboard.tsx",
          "src/features/workspaces/TeacherDashboard.tsx",
          "src/features/workspaces/AdminLessons.tsx",
          "src/content/how-light-moves/scenes/LightRayDiagram/LightRayDiagram.tsx",
          "src/content/how-light-moves/scenes/LightPropagationSimulation/LightPropagationSimulation.tsx",
          "src/i18n/LocaleProvider/LocaleProvider.tsx"
    ] },
  },
});

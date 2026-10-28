import { describe, expect, it } from 'vitest';
import { isValidElement, type ReactElement } from 'react';
import { LocaleProvider } from '@/i18n/LocaleProvider/LocaleProvider';
import LessonLearningLayout from '@/components/layout/LearningLayout/LearningLayout';
import { howLightMoves_Lesson_Data } from '@/data/howLightMoves/index.data';
import { howLightMovesCatalog } from '@/data/howLightMoves/howLightMoves.catalog';
import { quiz_Quiz_Data } from '@/data/howLightMoves/sections/quiz/index.data';
import { buildLesson } from '@svitlo/engine/builders';
import type { Lesson_Config } from '@svitlo/engine/content';
import Lesson from '@/components/pages/Lesson/Lesson';
import LessonClient from '@/components/pages/Lesson/LessonClient/LessonClient';
import { LessonProgressProvider } from '@/components/pages/Lesson/LessonProgress/LessonProgress';
import { SceneLocaleProvider } from '@/components/pages/Lesson/SceneLocaleContext';

function onlyChild(parent: ReactElement): ReactElement {
  const value = (parent.props as { children: unknown }).children;
  if (!isValidElement(value)) throw new Error('Expected a single React element child');
  return value;
}

function props<T>(element: ReactElement): T {
  return element.props as T;
}

describe('Lesson page assembly', () => {
  it('should assemble the route from the supplied config and locale', () => {
    const root = Lesson({
      config: howLightMoves_Lesson_Data,
      catalog: howLightMovesCatalog,
      locale: 'en-US',
      href: '/topics/light',
    });
    expect(root.type).toBe(LocaleProvider);
    expect(props<{ locale: string }>(root).locale).toBe('en-US');

    const scenes = onlyChild(root);
    expect(scenes.type).toBe(SceneLocaleProvider);
    expect(props<{ scenes: object }>(scenes).scenes).toEqual(
      buildLesson(howLightMoves_Lesson_Data, 'en-US', howLightMovesCatalog).sceneLocale,
    );

    const progress = onlyChild(scenes);
    expect(progress.type).toBe(LessonProgressProvider);
    expect(progress.key).toBe(howLightMoves_Lesson_Data.id);
    expect(props<{ lessonId: string; sectionIds: string[]; quizSectionId: string }>(progress)).toMatchObject({
      lessonId: howLightMoves_Lesson_Data.id,
      sectionIds: [...howLightMoves_Lesson_Data.sections.content],
      quizSectionId: howLightMoves_Lesson_Data.sections.content[2],
    });

    const layout = onlyChild(progress);
    expect(layout.type).toBe(LessonLearningLayout);
    expect(props<{ topics: Array<{ title: string; href: string }>; quizStep: number }>(layout)).toMatchObject({
      topics: [{ title: 'How Light Travels', href: '/topics/light' }],
      quizStep: 2,
    });

    const client = onlyChild(layout);
    expect(client.type).toBe(LessonClient);
    const assembled = props<{ sectionContent: unknown[]; questions: unknown[] }>(client);
    expect(assembled.sectionContent).toHaveLength(3);
    expect(assembled.sectionContent[2]).toBeNull();
    expect(assembled.questions).toHaveLength(quiz_Quiz_Data.questionBank.length);
  });

  it('should support a content-only lesson with no quiz', () => {
    const config: Lesson_Config = {
      ...howLightMoves_Lesson_Data,
      requireQuiz: false,
      sections: { ...howLightMoves_Lesson_Data.sections, content: [howLightMoves_Lesson_Data.sections.content[0]] },
    };
    const progress = onlyChild(
      onlyChild(Lesson({ config, catalog: howLightMovesCatalog, locale: 'uk-UA', href: '/lesson' })),
    );
    expect(props<{ quizSectionId?: string; requireQuiz: boolean }>(progress)).toMatchObject({ requireQuiz: false });
    expect(props<{ quizSectionId?: string }>(progress).quizSectionId).toBeUndefined();
    const layout = onlyChild(progress);
    expect(props<{ quizStep?: number }>(layout).quizStep).toBeUndefined();
    expect(props<{ questions: unknown[] }>(onlyChild(layout)).questions).toEqual([]);
  });

  it('should reject a config requiring a missing quiz', () => {
    const config: Lesson_Config = {
      ...howLightMoves_Lesson_Data,
      sections: { ...howLightMoves_Lesson_Data.sections, content: [howLightMoves_Lesson_Data.sections.content[0]] },
    };
    expect(() => Lesson({ config, catalog: howLightMovesCatalog, locale: 'uk-UA', href: '/lesson' })).toThrow(
      'A lesson that requires a quiz must include one',
    );
  });

  it('should reject multiple quizzes until the progress model supports them', () => {
    const config: Lesson_Config = {
      ...howLightMoves_Lesson_Data,
      sections: {
        ...howLightMoves_Lesson_Data.sections,
        content: [...howLightMoves_Lesson_Data.sections.content, howLightMoves_Lesson_Data.sections.content[2]],
      },
    };
    expect(() => Lesson({ config, catalog: howLightMovesCatalog, locale: 'uk-UA', href: '/lesson' })).toThrow(
      'The current lesson progress model supports one quiz per lesson',
    );
  });
});

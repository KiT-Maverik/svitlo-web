import { describe, expect, it } from 'vitest';
import { isValidElement, type ReactElement } from 'react';
import { LocaleProvider } from '@/i18n/LocaleProvider/LocaleProvider';
import { LearningLayout } from '@layout';
import { lightLesson } from '@/content/how-light-moves/lightLesson';
import type { Lesson_Config } from '@types';
import Lesson from './Lesson';
import LessonClient from './LessonClient/LessonClient';
import { LessonProgressProvider } from './LessonProgress/LessonProgress';
import { SceneLocaleProvider } from './SceneLocaleContext';

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
    const root = Lesson({ config: lightLesson, locale: 'en-US', href: '/topics/light' });
    expect(root.type).toBe(LocaleProvider);
    expect(props<{ locale: string }>(root).locale).toBe('en-US');

    const scenes = onlyChild(root);
    expect(scenes.type).toBe(SceneLocaleProvider);
    expect(props<{ scenes: typeof lightLesson.sceneLocales['en-US'] }>(scenes).scenes)
      .toEqual(lightLesson.sceneLocales['en-US']);

    const progress = onlyChild(scenes);
    expect(progress.type).toBe(LessonProgressProvider);
    expect(props<{ lessonId: string; sectionIds: string[]; quizSectionId: string }>(progress))
      .toMatchObject({
        lessonId: lightLesson.id,
        sectionIds: [lightLesson.sections.content[0].id, lightLesson.sections.content[1].id, lightLesson.sections.content[2].sectionId],
        quizSectionId: lightLesson.sections.content[2].sectionId,
      });

    const layout = onlyChild(progress);
    expect(layout.type).toBe(LearningLayout);
    expect(props<{ topics: Array<{ title: string; href: string }>; quizStep: number }>(layout))
      .toMatchObject({ topics: [{ title: 'How Light Travels', href: '/topics/light' }], quizStep: 2 });

    const client = onlyChild(layout);
    expect(client.type).toBe(LessonClient);
    const assembled = props<{ sectionContent: unknown[]; questions: unknown[] }>(client);
    expect(assembled.sectionContent).toHaveLength(3);
    expect(assembled.sectionContent[2]).toBeNull();
    expect(assembled.questions).toHaveLength(lightLesson.sections.content[2].questionBank.length);
  });

  it('should support a content-only lesson with no quiz', () => {
    const config: Lesson_Config = {
      ...lightLesson,
      requireQuiz: false,
      sections: { ...lightLesson.sections, content: [lightLesson.sections.content[0]] },
    };
    const progress = onlyChild(onlyChild(Lesson({ config, locale: 'uk-UA', href: '/lesson' })));
    expect(props<{ quizSectionId?: string; requireQuiz: boolean }>(progress))
      .toMatchObject({ requireQuiz: false });
    expect(props<{ quizSectionId?: string }>(progress).quizSectionId).toBeUndefined();
    const layout = onlyChild(progress);
    expect(props<{ quizStep?: number }>(layout).quizStep).toBeUndefined();
    expect(props<{ questions: unknown[] }>(onlyChild(layout)).questions).toEqual([]);
  });

  it('should reject a config requiring a missing quiz', () => {
    const config: Lesson_Config = {
      ...lightLesson,
      sections: { ...lightLesson.sections, content: [lightLesson.sections.content[0]] },
    };
    expect(() => Lesson({ config, locale: 'uk-UA', href: '/lesson' }))
      .toThrow('A lesson that requires a quiz must include one');
  });

  it('should reject multiple quizzes until the progress model supports them', () => {
    const config: Lesson_Config = {
      ...lightLesson,
      sections: {
        ...lightLesson.sections,
        content: [...lightLesson.sections.content, lightLesson.sections.content[2]],
      },
    };
    expect(() => Lesson({ config, locale: 'uk-UA', href: '/lesson' }))
      .toThrow('The current lesson progress model supports one quiz per lesson');
  });
});

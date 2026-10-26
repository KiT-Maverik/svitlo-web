import type { Lesson, Lesson_Config, LessonSection, Locale, Quiz_Config, Resource_Config } from '@types';
import { buildResource, buildTextResource } from '../BuildResource/BuildResource.utils';
import { buildQuiz } from '../BuildQuiz/BuildQuiz.utils';

function isResource(value: unknown): value is Resource_Config {
  return typeof value === 'object' && value !== null && 'blockType' in value;
}

function isQuiz(value: Lesson_Config['sections']['content'][number]): value is Quiz_Config {
  return 'questionBank' in value;
}

export function buildLesson(config: Lesson_Config, locale: Locale): Lesson {
  return {
    id: config.id,
    slug: config.slug,
    requireQuiz: config.requireQuiz,
    sceneLocale: config.sceneLocales?.[locale],
    title: buildTextResource(config.title, locale),
    sections: {
      allowNavigation: config.sections.allowNavigation,
      allowSkipping: config.sections.allowSkipping,
      showIndexes: config.sections.showIndexes,
      content: config.sections.content.map(section => {
        if (isQuiz(section)) return buildQuiz(section, locale);
        return {
          ...section,
          name: buildTextResource(section.name, locale),
          content: section.content.map(block => isResource(block) ? buildResource(block, locale) : block) as LessonSection['content'],
        };
      }) as Lesson['sections']['content'],
    },
  };
}

import { FALLBACK_LANGUAGE, getLanguageCode, type Lesson, type Lesson_Config, type LessonSection, type Locale, type Quiz_Config, type Resource_Config } from '@types';
import { buildResource, buildTextResource } from '../BuildResource/BuildResource.utils';
import { buildQuiz } from '../BuildQuiz/BuildQuiz.utils';

function isResource(value: unknown): value is Resource_Config {
  return typeof value === 'object' && value !== null && 'blockType' in value;
}

function isQuiz(value: Lesson_Config['sections']['content'][number]): value is Quiz_Config {
  return 'questionBank' in value;
}

/** On the server, keep only one translation for each scene before passing props to the client. */
function selectSceneLocales(config: Lesson_Config['sceneLocales'], locale: Locale): Readonly<object> | undefined {
  if (!config) return undefined;
  const language = getLanguageCode(locale);
  return Object.fromEntries(Object.entries(config).map(([sceneId, messages]) => {
    const selected = messages[language] ?? messages[FALLBACK_LANGUAGE];
    if (!selected) throw new Error(`Scene "${sceneId}" has no translation for ${language} or fallback ${FALLBACK_LANGUAGE}`);
    return [sceneId, selected];
  }));
}

export function buildLesson(config: Lesson_Config, locale: Locale): Lesson {
  return {
    id: config.id,
    slug: config.slug,
    requireQuiz: config.requireQuiz,
    sceneLocale: selectSceneLocales(config.sceneLocales, locale),
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

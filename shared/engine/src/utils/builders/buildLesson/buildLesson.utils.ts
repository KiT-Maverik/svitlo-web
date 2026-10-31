import type { Locale } from '../../../types/languages';
import type { DeepReadonly } from '@svitlo/contracts/content';
import type {
  Lesson,
  Lesson_Config,
  LessonContentCatalog,
  LessonSection,
  LessonSection_Content,
  Quiz_Config,
} from '@svitlo/contracts/content';
import { FALLBACK_LANGUAGE, getLanguageCode } from '../../../types/languages';
import { buildResource, buildTextResource } from '../buildResource/buildResource.utils';
import { buildQuiz } from '../buildQuiz/buildQuiz.utils';

function isQuiz(value: DeepReadonly<LessonSection_Content>): value is DeepReadonly<Quiz_Config> {
  return 'questionBank' in value;
}

/** On the server, keep only one translation for each scene before passing props to the client. */
function selectSceneLocales(
  config: DeepReadonly<Lesson_Config['sceneLocales']>,
  locale: Locale,
): Readonly<object> | undefined {
  if (!config) return undefined;
  const language = getLanguageCode(locale);
  return Object.fromEntries(
    Object.entries(config).map(([sceneId, messages]) => {
      const selected = messages[language] ?? messages[FALLBACK_LANGUAGE];
      if (!selected)
        throw new Error(`Scene "${sceneId}" has no translation for ${language} or fallback ${FALLBACK_LANGUAGE}`);
      return [sceneId, selected];
    }),
  );
}

export function buildLesson(
  config: DeepReadonly<Lesson_Config>,
  locale: Locale,
  catalog: LessonContentCatalog,
): Lesson {
  const title = catalog.text[config.title];
  if (!title || title.id !== config.title) throw new Error(`Missing text resource for lesson title: ${config.title}`);

  return {
    collection: config.collection,
    id: config.id,
    slug: config.slug,
    requireQuiz: config.requireQuiz,
    sceneLocale: selectSceneLocales(config.sceneLocales, locale),
    title: buildTextResource(title, locale),
    sections: {
      allowNavigation: config.sections.allowNavigation,
      allowSkipping: config.sections.allowSkipping,
      showIndexes: config.sections.showIndexes,
      content: config.sections.content.map(sectionId => {
        const section = catalog.sections[sectionId];
        if (!section) throw new Error(`Missing lesson section: ${sectionId}`);
        if (section.lessonId !== config.id) throw new Error(`Section ${sectionId} belongs to another lesson`);
        if (isQuiz(section) ? section.sectionId !== sectionId : section.id !== sectionId) {
          throw new Error(`Section ID does not match its catalog key: ${sectionId}`);
        }
        if (isQuiz(section)) return buildQuiz(section, locale);
        return {
          ...section,
          name: buildTextResource(section.name, locale),
          content: section.content.map(block => buildResource(block, locale)) as LessonSection['content'],
        };
      }) as Lesson['sections']['content'],
    },
  };
}

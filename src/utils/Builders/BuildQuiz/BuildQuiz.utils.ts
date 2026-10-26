import type { Locale, Quiz, Quiz_Config, Resource_Config } from '@types';
import { buildResource } from '../BuildResource/BuildResource.utils';
import { buildQuestion } from '../BuildQuestion/BuildQuestion.utils';
import { buildTextResource } from '../BuildResource/BuildResource.utils';

export function buildQuiz(config: Quiz_Config, locale: Locale): Quiz {
  const resources = (items: [Resource_Config, ...Resource_Config[]]) => items.map(item => buildResource(item, locale)) as [ReturnType<typeof buildResource>, ...ReturnType<typeof buildResource>[]];
  const ending = (screen: NonNullable<Quiz_Config['screen']['ending']>['success']) => screen.resources
    ? { showDefaultContent: screen.showDefaultContent, resources: resources(screen.resources) }
    : { showDefaultContent: true as const };
  return {
    ...config,
    name: buildTextResource(config.name, locale),
    questionBank: config.questionBank.map(question => ({ ...buildQuestion(question, locale), number: question.number, weight: question.weight })) as Quiz['questionBank'],
    screen: {
      welcome: config.screen.welcome && { resources: resources(config.screen.welcome.resources) },
      ending: config.screen.ending && { success: ending(config.screen.ending.success), fail: ending(config.screen.ending.fail) },
    },
  };
}

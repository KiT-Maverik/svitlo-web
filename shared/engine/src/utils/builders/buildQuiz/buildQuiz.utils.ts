import type { Locale } from '../../../types/languages';
import type { DeepReadonly } from '../../../types/readonly.types';
import type { Quiz, Quiz_Config, Resource_Config } from '../../../content';
import { buildResource } from '../buildResource/buildResource.utils';
import { buildQuestion } from '../buildQuestion/buildQuestion.utils';
import { buildTextResource } from '../buildResource/buildResource.utils';

export function buildQuiz(config: DeepReadonly<Quiz_Config>, locale: Locale): Quiz {
  const resources = (items: readonly [DeepReadonly<Resource_Config>, ...DeepReadonly<Resource_Config>[]]) =>
    items.map(item => buildResource(item, locale)) as [
      ReturnType<typeof buildResource>,
      ...ReturnType<typeof buildResource>[],
    ];
  const ending = (screen: DeepReadonly<NonNullable<Quiz_Config['screen']['ending']>['success']>) =>
    screen.resources
      ? { showDefaultContent: screen.showDefaultContent, resources: resources(screen.resources) }
      : { showDefaultContent: true as const };
  return {
    ...config,
    name: buildTextResource(config.name, locale),
    questionBank: config.questionBank.map(question => ({
      ...buildQuestion(question, locale),
      number: question.number,
      weight: question.weight,
    })) as Quiz['questionBank'],
    screen: {
      welcome: config.screen.welcome && { resources: resources(config.screen.welcome.resources) },
      ending: config.screen.ending && {
        success: ending(config.screen.ending.success),
        fail: ending(config.screen.ending.fail),
      },
    },
  };
}

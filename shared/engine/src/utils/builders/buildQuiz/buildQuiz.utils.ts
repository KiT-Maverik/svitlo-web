import type { Locale } from '../../../types/languages';
import type { DeepReadonly } from '@svitlo/contracts/content';
import type { Quiz, Quiz_Config, ContentBlock_Config } from '@svitlo/contracts/content';
import { buildContentBlock } from '../buildContentBlock/buildContentBlock.utils';
import { buildQuestion } from '../buildQuestion/buildQuestion.utils';
import { buildTextContentBlock } from '../buildContentBlock/buildContentBlock.utils';

export function buildQuiz(config: DeepReadonly<Quiz_Config>, locale: Locale): Quiz {
  const contentBlocks = (items: readonly [DeepReadonly<ContentBlock_Config>, ...DeepReadonly<ContentBlock_Config>[]]) =>
    items.map(item => buildContentBlock(item, locale)) as [
      ReturnType<typeof buildContentBlock>,
      ...ReturnType<typeof buildContentBlock>[],
    ];
  const ending = (screen: DeepReadonly<NonNullable<Quiz_Config['screen']['ending']>['success']>) =>
    screen.contentBlocks
      ? { showDefaultContent: screen.showDefaultContent, contentBlocks: contentBlocks(screen.contentBlocks) }
      : { showDefaultContent: true as const };
  return {
    ...config,
    name: buildTextContentBlock(config.name, locale),
    questionBank: config.questionBank.map(question => ({
      ...buildQuestion(question, locale),
      number: question.number,
      weight: question.weight,
    })) as Quiz['questionBank'],
    screen: {
      welcome: config.screen.welcome && { contentBlocks: contentBlocks(config.screen.welcome.contentBlocks) },
      ending: config.screen.ending && {
        success: ending(config.screen.ending.success),
        fail: ending(config.screen.ending.fail),
      },
    },
  };
}

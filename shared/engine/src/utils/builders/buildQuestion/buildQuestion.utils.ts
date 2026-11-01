import type { Locale } from '../../../types/languages';
import type { DeepReadonly } from '@svitlo/contracts/content';
import type { ContentBlock, ContentBlock_Config } from '@svitlo/contracts/content';
import type { Question, Question_Config } from '@svitlo/contracts/content';
import { buildContentBlock, buildTextContentBlock } from '../buildContentBlock/buildContentBlock.utils';

export function buildQuestion(config: DeepReadonly<Question_Config>, locale: Locale): Question {
  const base = {
    id: config.id,
    assessmentMethodId: config.assessmentMethodId,
    restrictions: [...config.restrictions],
    content: config.content.map(contentBlock => buildContentBlock(contentBlock, locale)) as [
      ReturnType<typeof buildContentBlock>,
      ...ReturnType<typeof buildContentBlock>[],
    ],
    explanation: config.explanation && buildTextContentBlock(config.explanation, locale),
    flashcardConfig: config.flashcardConfig,
  };
  const contentBlocks = (items: readonly DeepReadonly<ContentBlock_Config>[]) => items.map(item => buildContentBlock(item, locale));
  const nonEmptyContentBlocks = (
    items: readonly [DeepReadonly<ContentBlock_Config>, ...DeepReadonly<ContentBlock_Config>[]],
  ): [ContentBlock, ...ContentBlock[]] => items.map(item => buildContentBlock(item, locale)) as [ContentBlock, ...ContentBlock[]];
  switch (config.type) {
    case 'select-one-answer':
      return {
        ...base,
        type: config.type,
        answers: {
          correct: buildContentBlock(config.answers.correct, locale),
          incorrect: nonEmptyContentBlocks(config.answers.incorrect),
          distractors: nonEmptyContentBlocks(config.answers.distractors),
        },
      };
    case 'select-multiple-answers':
      return {
        ...base,
        type: config.type,
        answers: {
          correct: nonEmptyContentBlocks(config.answers.correct),
          incorrect: nonEmptyContentBlocks(config.answers.incorrect),
          distractors: nonEmptyContentBlocks(config.answers.distractors),
        },
      };
    case 'answer-with-number':
      return {
        ...base,
        type: config.type,
        correctAnswer: [...config.correctAnswer],
        placeholder: buildTextContentBlock(config.placeholder, locale),
      };
    case 'answer-with-text':
      return {
        ...base,
        type: config.type,
        correctAnswer: config.correctAnswer.map(answer => buildTextContentBlock(answer, locale)),
        placeholder: buildTextContentBlock(config.placeholder, locale),
      };
    case 'build-answer-with-blocks':
      return {
        ...base,
        type: config.type,
        correctSequence: config.correctSequence.map(item => buildTextContentBlock(item, locale)) as [
          ReturnType<typeof buildTextContentBlock>,
          ...ReturnType<typeof buildTextContentBlock>[],
        ],
        distractors: config.distractors.map(item => buildTextContentBlock(item, locale)),
        placeholder: buildTextContentBlock(config.placeholder, locale),
      };
    case 'fill-blanks-with-blocks':
      return {
        ...base,
        type: config.type,
        placeholder: buildTextContentBlock(config.placeholder, locale),
        distractors: config.distractors.map(item => buildTextContentBlock(item, locale)),
        slots: config.slots.map(slot => ({
          selector: slot.selector,
          correctAnswer: buildTextContentBlock(slot.correctAnswer, locale),
        })),
      };
    case 'fill-blanks-with-text':
      return {
        ...base,
        type: config.type,
        placeholder: buildTextContentBlock(config.placeholder, locale),
        distractors: config.distractors.map(item => buildTextContentBlock(item, locale)),
        slots: config.slots.map(slot => ({
          selector: slot.selector,
          correctAnswer: buildTextContentBlock(slot.correctAnswer, locale),
        })),
      };
    case 'match-blocks':
      return {
        ...base,
        type: config.type,
        map: {
          left: contentBlocks(config.map.left) as [ReturnType<typeof buildContentBlock>, ...ReturnType<typeof buildContentBlock>[]],
          right: contentBlocks(config.map.right) as [
            ReturnType<typeof buildContentBlock>,
            ...ReturnType<typeof buildContentBlock>[],
          ],
        },
      };
    case 'order-sequence':
      return {
        ...base,
        type: config.type,
        sequence: contentBlocks(config.sequence) as [
          ReturnType<typeof buildContentBlock>,
          ...ReturnType<typeof buildContentBlock>[],
        ],
      };
  }
}

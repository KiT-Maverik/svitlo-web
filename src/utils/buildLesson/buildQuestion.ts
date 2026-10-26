import type { Locale, Resource, Resource_Config } from '@types';
import type { Question, Question_Config } from '@/types/content/question.types';
import { buildResource, buildTextResource } from './buildResource';

export function buildQuestion(config: Question_Config, locale: Locale): Question {
  const base = {
    id: config.id,
    restrictions: config.restrictions,
    content: config.content.map(resource => buildResource(resource, locale)) as [ReturnType<typeof buildResource>, ...ReturnType<typeof buildResource>[]],
    explanation: config.explanation && buildTextResource(config.explanation, locale),
    flashcardConfig: config.flashcardConfig,
  };
  const resources = (items: Resource_Config[]) => items.map(item => buildResource(item, locale));
  const nonEmptyResources = (items: [Resource_Config, ...Resource_Config[]]): [Resource, ...Resource[]] =>
    items.map(item => buildResource(item, locale)) as [Resource, ...Resource[]];
  switch (config.type) {
    case 'select-one-answer': return { ...base, type: config.type, answers: { correct: buildResource(config.answers.correct, locale), incorrect: nonEmptyResources(config.answers.incorrect), distractors: nonEmptyResources(config.answers.distractors) } };
    case 'select-multiple-answers': return { ...base, type: config.type, answers: { correct: nonEmptyResources(config.answers.correct), incorrect: nonEmptyResources(config.answers.incorrect), distractors: nonEmptyResources(config.answers.distractors) } };
    case 'answer-with-number': return { ...base, type: config.type, correctAnswer: config.correctAnswer, placeholder: buildTextResource(config.placeholder, locale) };
    case 'answer-with-text': return { ...base, type: config.type, correctAnswer: config.correctAnswer.map(answer => buildTextResource(answer, locale)), placeholder: buildTextResource(config.placeholder, locale) };
    case 'build-answer-with-blocks': return { ...base, type: config.type, correctSequence: config.correctSequence.map(item => buildTextResource(item, locale)) as [ReturnType<typeof buildTextResource>, ...ReturnType<typeof buildTextResource>[]], distractors: config.distractors.map(item => buildTextResource(item, locale)), placeholder: buildTextResource(config.placeholder, locale) };
    case 'fill-blanks-with-blocks': return { ...base, type: config.type, placeholder: buildTextResource(config.placeholder, locale), distractors: config.distractors.map(item => buildTextResource(item, locale)), slots: config.slots.map(slot => ({ selector: slot.selector, correctAnswer: buildTextResource(slot.correctAnswer, locale) })) };
    case 'fill-blanks-with-text': return { ...base, type: config.type, placeholder: buildTextResource(config.placeholder, locale), distractors: config.distractors.map(item => buildTextResource(item, locale)), slots: config.slots.map(slot => ({ selector: slot.selector, correctAnswer: buildTextResource(slot.correctAnswer, locale) })) };
    case 'match-blocks': return { ...base, type: config.type, map: { left: resources(config.map.left) as [ReturnType<typeof buildResource>, ...ReturnType<typeof buildResource>[]], right: resources(config.map.right) as [ReturnType<typeof buildResource>, ...ReturnType<typeof buildResource>[]] } };
    case 'order-sequence': return { ...base, type: config.type, sequence: resources(config.sequence) as [ReturnType<typeof buildResource>, ...ReturnType<typeof buildResource>[]] };
  }
}

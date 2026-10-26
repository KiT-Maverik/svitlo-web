import type { SelectOneAnswerQuestion } from '@/types/questions';
import type { Locale } from '@/types/languages';
import { questionBank } from './questions';

export function createLightQuestions(locale: Locale): SelectOneAnswerQuestion[] {
  return questionBank.map((question) => {
    const correct = question.answers.correct;
    const options = [correct, ...question.answers.incorrect, ...question.answers.distractors]
      .map((resource) => ({ id: resource.id, label: resource.value[locale] }));

    // Keep option order stable across renders without storing another question definition.
    let seed = Number.parseInt(question.id.slice(0, 8), 16);
    for (let index = options.length - 1; index > 0; index -= 1) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      const target = seed % (index + 1);
      [options[index], options[target]] = [options[target], options[index]];
    }

    return {
      id: question.id,
      type: 'single-select',
      prompt: question.content[0].value[locale],
      options,
      correctId: correct.id,
      explanation: question.explanation.value[locale],
    };
  });
}

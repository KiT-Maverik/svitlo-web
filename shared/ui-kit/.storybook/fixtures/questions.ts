import type {
  SelectOneAnswerQuestion,
  SelectMultipleAnswersQuestion,
} from '../../src/components/widgets/questions/types';

/**
 * Storybook-only data: no application lessons, curriculum, or persistence.
 */
export const singleSelectQuestion: SelectOneAnswerQuestion = {
  id: 'storybook-single-select',
  type: 'single-select',
  prompt: 'Яка планета найближча до Сонця?',
  options: [
    { id: 'earth', label: 'Земля' },
    { id: 'mercury', label: 'Меркурій' },
    { id: 'venus', label: 'Венера' },
  ],
  correctId: 'mercury',
  explanation: 'Меркурій — перша планета від Сонця.',
};

export const multipleSelectQuestion: SelectMultipleAnswersQuestion = {
  id: 'storybook-multiple-select',
  type: 'multiple-select',
  prompt: 'Оберіть усі прості числа.',
  options: [
    { id: 'two', label: '2' },
    { id: 'four', label: '4' },
    { id: 'five', label: '5' },
  ],
  correctIds: ['two', 'five'],
  explanation: '2 і 5 мають лише два додатні дільники. 4 ділиться ще й на 2.',
};

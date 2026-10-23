import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect, userEvent, within } from 'storybook/test';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { QuestionAttempt, type QuestionAttemptProps } from './QuestionAttempt';
import type { MultipleSelectQuestion } from '@/types/questions';

const question: MultipleSelectQuestion = {
  id: 'multiple-select-playground',
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

type StoryProps = QuestionAttemptProps<'multiple-select'>;

function MultipleSelectStory(props: StoryProps) {
  return <QuestionAttempt {...props} />;
}

const meta = {
  title: 'Questions/Multiple select',
  component: MultipleSelectStory,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: { component: 'Запитання, у якому можна вибрати кілька правильних варіантів.' },
    },
  },
  argTypes: {
    question: { control: 'object', description: 'Опис запитання, варіанти та правильні відповіді.' },
    showResult: { control: 'boolean' },
    showExplanation: { control: 'boolean' },
    showErrors: { control: 'boolean' },
    showCorrectAnswers: { control: 'boolean' },
    showLetters: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    checkMode: { control: 'select', options: ['manual', 'on-change'] },
    onChange: { action: 'change' },
    onCheck: { action: 'check' },
    onAnswer: { action: 'answer' },
    onCorrect: { action: 'correct' },
    onIncorrect: { action: 'incorrect' },
    onRetry: { action: 'retry' },
    onReset: { action: 'reset' },
    slots: { control: false },
    slotProps: { control: false },
    actionSlots: { control: false },
  },
  args: {
    question,
    showResult: true,
    showExplanation: true,
    showErrors: true,
    showCorrectAnswers: true,
    showLetters: true,
    disabled: false,
    readOnly: false,
    checkMode: 'manual',
  },
} satisfies Meta<typeof MultipleSelectStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const ReadOnly: Story = {
  args: { readOnly: true },
};

export const Correct: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /^2$/ }));
    await userEvent.click(canvas.getByRole('button', { name: /^5$/ }));
    await userEvent.click(canvas.getByRole('button', { name: 'Перевірити' }));
    await expect(canvas.getByRole('button', { name: 'Спробувати ще раз' })).toBeVisible();
  },
};

export const Incorrect: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /^4$/ }));
    await userEvent.click(canvas.getByRole('button', { name: 'Перевірити' }));
    await expect(canvas.getByRole('button', { name: 'Спробувати ще раз' })).toBeVisible();
  },
};

export const StateGallery: Story = {
  render: (args) => <Stack spacing={3}>
    <Typography variant="h6">Стан за замовчуванням</Typography>
    <MultipleSelectStory {...args} />
    <Typography variant="h6">Без літер і пояснення</Typography>
    <MultipleSelectStory {...args} showLetters={false} showExplanation={false} />
    <Typography variant="h6">Заблокований стан</Typography>
    <MultipleSelectStory {...args} disabled />
  </Stack>,
};

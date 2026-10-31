import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect, userEvent, within } from 'storybook/test';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { QuestionAttempt, type QuestionAttemptProps } from '../helpers';
import { singleSelectQuestion } from '../../../../../.storybook/fixtures/questions';

type StoryProps = QuestionAttemptProps<'single-select'>;

function SelectOneAnswerStory(props: StoryProps) {
  return <QuestionAttempt {...props} />;
}

const meta = {
  title: 'Questions/Select one answer',
  component: SelectOneAnswerStory,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: { component: 'Запитання з одним правильним варіантом відповіді.' },
    },
  },
  argTypes: {
    question: { control: 'object', description: 'Опис запитання, варіанти та правильна відповідь.' },
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
    question: singleSelectQuestion,
    showResult: true,
    showExplanation: true,
    showErrors: true,
    showCorrectAnswers: true,
    showLetters: true,
    disabled: false,
    readOnly: false,
    checkMode: 'manual',
  },
} satisfies Meta<typeof SelectOneAnswerStory>;

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
    await userEvent.click(canvas.getByRole('button', { name: /Меркурій/ }));
    await userEvent.click(canvas.getByRole('button', { name: 'Перевірити' }));
    await expect(canvas.getByRole('button', { name: 'Спробувати ще раз' })).toBeVisible();
  },
};

export const Incorrect: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /Земля/ }));
    await userEvent.click(canvas.getByRole('button', { name: 'Перевірити' }));
    await expect(canvas.getByRole('button', { name: 'Спробувати ще раз' })).toBeVisible();
  },
};

export const StateGallery: Story = {
  render: args => (
    <Stack spacing={3}>
      <Typography variant="h6">Стан за замовчуванням</Typography>
      <SelectOneAnswerStory {...args} />
      <Typography variant="h6">Без літер і пояснення</Typography>
      <SelectOneAnswerStory {...args} showLetters={false} showExplanation={false} />
      <Typography variant="h6">Заблокований стан</Typography>
      <SelectOneAnswerStory {...args} disabled />
    </Stack>
  ),
};

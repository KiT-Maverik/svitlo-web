import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Stack, Typography } from '@mui/material';
import { ReportedQuestion } from '@/features/reporting/ReportedQuestion';
import { exampleQuestions } from '@/features/questions/examples';
export const metadata: Metadata = { title: 'Інтерактивні запитання — Світло' };
export default function QuestionsPage() {
  return <Container component="main" maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
    <Stack spacing={3}>
      <Link href="/">← Світло</Link>
      <Link href="/questions/api">Демонстрація режимів, подій та слотів →</Link>
      <Typography component="h1" variant="h4">Інтерактивні запитання</Typography>
      <Typography>Сім типів запитань. Блоки можна додавати натисканням або перетягуванням. Дайте відповідь, перевірте результат і спробуйте ще раз. Кожен приклад незалежний.</Typography>
      {exampleQuestions.map(question => <ReportedQuestion key={question.id} question={question} />)}
    </Stack>
  </Container>;
}

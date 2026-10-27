import Link from 'next/link';
import { Container, Typography } from '@mui/material';
import { ApiDemo } from '@/components/pages/ApiDemo/ApiDemo';
export default function QuestionApiPage() {
  return (
    <Container component="main" maxWidth="md" sx={{ py: 4 }}>
      <Link href="/questions">← Усі запитання</Link>
      <Typography component="h1" variant="h4" sx={{ my: 3 }}>
        API запитань
      </Typography>
      <ApiDemo />
    </Container>
  );
}

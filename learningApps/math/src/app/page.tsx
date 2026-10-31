import { Button, Container, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container component="main" maxWidth="md" sx={{ py: { xs: 4, sm: 8 } }}>
      <Stack spacing={4}>
        <Typography component="h1" variant="h2" sx={{ fontWeight: 800 }}>
          Математика
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Навчальні матеріали з математики готуються. Демонстрації компонентів доступні окремо у Playground.
        </Typography>
        <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
          <Button variant="outlined" href="/questions">
            Інтерактивні запитання
          </Button>
          <Button href="/questions/api">API запитань</Button>
        </Stack>
      </Stack>
    </Container>
  );
}

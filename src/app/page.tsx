import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Світло
        </Typography>

        <Typography variant="h5" gutterBottom>
          Як рухається світло
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Перша інтерактивна тема: пояснення, малюнок і дослід зі світловим променем.
        </Typography>
        <Button variant="contained" href="/topics/light">Почати навчання</Button>
      </Container>
  );
}


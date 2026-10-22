import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Світло
        </Typography>

        <Button variant="contained" href="/questions">Інтерактивні запитання</Button>
      </Container>
  );
}

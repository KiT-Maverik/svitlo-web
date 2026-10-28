import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getLearningApps } from '@/catalog/learningApps';

export default function Home() {
  const apps = getLearningApps();

  return (
    <Container component="main" maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={5}>
        <Box component="header">
          <Typography component="h1" variant="h3" sx={{ fontWeight: 800, letterSpacing: -1 }}>
            Світло — інтерактивні підручники
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2, maxWidth: 660 }}>
            Безплатна навчальна платформа. Обирайте підручник та навчайтеся у власному темпі.
          </Typography>
        </Box>
        <Box component="section" aria-labelledby="textbooks-heading">
          <Typography id="textbooks-heading" variant="h5" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Підручники
          </Typography>
          <Stack spacing={2}>
            {apps.map(app => (
              <Card variant="outlined" component="article" key={app.id}>
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
                    <Typography variant="h6" component="h3">{app.name}</Typography>
                    <Chip size="small" label={app.url ? 'Доступний' : 'Готується'} />
                  </Stack>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>{app.description}</Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  {app.url ? (
                    <Button variant="contained" href={app.url}>Відкрити підручник</Button>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      Посилання з’явиться після публікації підручника.
                    </Typography>
                  )}
                </CardActions>
              </Card>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

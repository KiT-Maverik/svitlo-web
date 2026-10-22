import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
export default function Home() {
  return <Container component="main" maxWidth="md" sx={{ py: { xs: 4, sm: 8 } }}><Stack spacing={4}>
    <Box><Typography component="h1" variant="h2" sx={{ fontWeight: 800 }}>Світло</Typography><Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>Навчатися, створювати програми й покращувати матеріали разом.</Typography></Box>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      {[['/student', 'Кабінет учня', 'Продовжуйте уроки й переглядайте прогрес.'], ['/teacher', 'Кабінет учителя', 'Складайте програму з наявних уроків.'], ['/admin/lessons', 'Адміністрування', 'Переглядайте уроки та готуйте зміни.']].map(([href, title, description]) => <Paper key={href} variant="outlined" sx={{ p: 3, flex: 1 }}><Typography variant="h6" component="h2">{title}</Typography><Typography color="text.secondary" sx={{ my: 2 }}>{description}</Typography><Button href={href} variant="contained">Відкрити</Button></Paper>)}
    </Stack>
    <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}><Button variant="outlined" href="/questions">Інтерактивні запитання</Button><Button href="/questions/api">API запитань</Button><Button href="/lessons/light">Огляд уроку про світло</Button></Stack>
  </Stack></Container>;
}

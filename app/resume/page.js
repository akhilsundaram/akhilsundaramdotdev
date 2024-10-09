import { Container, Typography, Button } from '@mui/material';

export default function Resume() {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        My Resume
      </Typography>
      <Button variant="contained" color="primary" href="/resume.pdf" target="_blank" fullWidth>
        View My Resume (PDF)
      </Button>
    </Container>
  );
}

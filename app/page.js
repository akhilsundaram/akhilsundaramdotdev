import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Akhil Sundaram
      </Typography>
      <Typography variant="body1" align="center">
        Hi, I'm Akhil Sundaram, a graduate student in the department of Computer Science at University of Illinois Urbana-Champaign (UIUC). 
        I study distributed systems and storage/memory architectures. I also worked as a Senior Engineer at Logmein/GoTo for 4 years. 
      </Typography>
    </Container>
  );
}

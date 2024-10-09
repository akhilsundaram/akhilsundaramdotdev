import { Typography, Container } from '@mui/material';

export default function Resume() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Resume
      </Typography>
      {/* Embed the resume PDF directly in the page */}
      <embed 
        src="/resume.pdf" // Path to the resume file in public folder
        type="application/pdf"
        width="100%" 
        height="800px" // Adjust the height as necessary
      />
    </Container>
  );
}

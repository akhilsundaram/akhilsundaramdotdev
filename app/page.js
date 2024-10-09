import { Typography, Container } from '@mui/material';
import Image from 'next/image'; // Next.js built-in image component

export default function Home() {
  return (
    <Container>
      {/* Banner image at the top */}
      <div style={{ marginBottom: '20px' }}>
        <Image
          src="/banner.png" // Path to the banner image in the public/ directory
          alt="Banner"
          width={1200} // Adjust the width based on your banner image dimensions
          height={300} // Adjust the height accordingly
          style={{ objectFit: 'cover', width: '100%' }} // Ensures the banner fits well and stretches to container width
        />
      </div>

      <Typography variant="h1" align="center" gutterBottom>
        Akhil Sundaram
      </Typography>

      {/* Round bordered image under the name */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Image
          src="/profile.jpg" // Path to the image in the public/ directory
          alt="Akhil Sundaram"
          width={150} // Adjust the width as necessary
          height={150} // Adjust the height as necessary
          style={{ borderRadius: '50%', border: '5px solid #000' }} // Round image with black border
        />
      </div>

      <Typography variant="body1" align="center" gutterBottom>
        Hi, I&#39;m Akhil Sundaram, a graduate student in the department of Computer Science at University of Illinois Urbana-Champaign - UIUC. 
        I study distributed systems and storage/memory architectures. I also worked as a Senior Engineer at Logmein/GoTo for 4 years. 
      </Typography>
    </Container>
  );
}

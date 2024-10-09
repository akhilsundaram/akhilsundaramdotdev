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
      <div style={{ display: 'flex', justifyContent: 'center',

// app/layout.js

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              CS Grad @ UIUC
            </Typography>
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} href="/resume">
              Resume
            </Button>
            <Button color="inherit" component={Link} href="/projects">
              Projects
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}

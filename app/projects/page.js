import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Container } from '@mui/material'; // Added Container import

// Updated project data
const projects = [
  {
    name: 'Distributed Logger',
    description: 'A distributed log query system built with Golang.',
    image: '/default.png', // Placeholder for actual image in public folder
    github: 'https://github.com/akhilsundaram' // Replace with actual GitHub link
  },
  {
    name: 'Cloud Agnostic Kubernetes',
    description: 'A Kubernetes deployment tool using Ansible and Python.',
    image: '/default.png', // Placeholder for actual image in public folder
    github: 'https://github.com/akhilsundaram'
  },
  {
    name: 'Identity System using Blockchains',
    description: 'A decentralized, secure platform utilizing blockchains to create an identity datastore.',
    image: '/default.png', // Placeholder for actual image in public folder
    github: 'https://github.com/akhilsundaram'
  }
];

export default function Projects() {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea href={project.github} target="_blank" rel="noopener noreferrer">
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image} // Display project image
                  alt={project.name}
                />
                <CardContent>
                  <Typography variant="h5">{project.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

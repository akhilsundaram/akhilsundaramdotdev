import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const projects = [
  { name: 'Distributed Logger', description: 'A distributed log query system built with Golang' },
  { name: 'Cloud Agnostic Kubernetes', description: 'A Kubernetes deployment tool using Ansible and Python' },
  { name: 'Identity System using Blockchains', description: 'A decentralized,secure platform utilizing blockchains to create an Identity datastore' }
];

export default function Projects() {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        My Projects
      </Typography>
      <List>
        {projects.map((project, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={project.name}
              secondary={project.description}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

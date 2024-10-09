import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const projects = [
  { name: 'Project 1', description: 'A distributed log query system built with Golang' },
  { name: 'Project 2', description: 'Cross-cloud migration framework with Terraform and Ansible' },
  { name: 'Project 3', description: 'Patch management tool for Linux environments' }
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

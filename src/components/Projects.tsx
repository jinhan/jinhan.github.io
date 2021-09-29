import React from 'react';
import { Grid, Box, Button, Chip } from '@mui/material';
import { styled } from '@mui/styles';

type IProjectItem = {
  id: string;
  title: string;
  authors: string;
  source: string;
  teaser: string;
  path: string;
  award: string;
};

type ProjectsProps = {
  projects: Array<IProjectItem>;
};

const LinkButton = styled(Button)(({ theme }) => ({
  color: "#808080",
  '&:hover': {
    backgroundColor: "#fed8b1",
  },
  textTransform: "none",
  fontSize: "15px",
}));

const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <Grid container spacing={3} marginLeft={2} marginRight={2}>
      <Grid item>
        <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
          Publications
        </Box>
      </Grid>
      <Grid item container spacing={3}>
        {props.projects &&
          props.projects.map((project, i) => (
              <ProjectItem key={project.id} {...project} />
          ))}
      </Grid>
    </Grid>
  );
};

const fnAuthors = (authors: string) => {
  const newAuthors = authors.replace('Jinhan Choi', '<strong>Jinhan Choi</strong>');

  return '<Box component="div">' + newAuthors + '</Box>';
};

const ProjectItem: React.FC<IProjectItem> = ({
  id,
  title,
  authors,
  source,
  teaser,
  path,
  award,
}) => {
  return (
    <Grid item container direction="row" spacing={3}>
      <Grid item xs={2}>
        <img alt="publication-teaser" src={teaser} width="100%" style={{ maxHeight: '100px' }} />
      </Grid>

      <Grid container item xs alignItems="left" direction="column" spacing={0.5}>
        <Grid item xs>
          <Box fontWeight="fontWeightBold">{title}</Box>
        </Grid>

        <Grid item xs>
          <div dangerouslySetInnerHTML={{ __html: fnAuthors(authors) }} />
        </Grid>

        <Grid item xs>
          <Box fontStyle="italic">{source}</Box>
        </Grid>

        {award && (
          <Grid item xs>
            <Box>
              <Chip
                size="small"
                color="primary"
                label={award}
                icon={<i className="fas fa-award"></i>}
                style={{ color: 'white', fontWeight: 'bold' }}
              />
            </Box>
          </Grid>
        )}

        <Grid item xs>
        <LinkButton
          size="small"
          onClick={() => window.open(path, '_blank')}
          startIcon={<i className="fas fa-file-alt"></i>}
        >Paper
        </LinkButton>
        {/* <a rel="noopener noreferrer" target="_blank" href={path}><i className="fas fa-file-alt"></i> paper</a> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;

import React from 'react';
import { Grid, Box, Typography, Chip } from '@mui/material';

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

const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <Grid container spacing={3} marginLeft={2} marginRight={2}>
      <Grid item>
        <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
          Publications
        </Box>
      </Grid>
      <Grid item container spacing={3}>
        {props.projects && props.projects.map((project) => <ProjectItem {...project} />)}
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
    <Grid item container direction="row" spacing={3} key={id}>
      <Grid item xs={2}>
        <img alt="publication-teaser" src={teaser} width="100%" />
      </Grid>

      <Grid container item xs alignItems="left" direction="column" spacing={0.5}>
        <Grid item xs>
          <Box fontWeight="fontWeightBold">{title}</Box>
        </Grid>
        {/* {fnAuthors(authors)} */}
        <Grid item xs>
          <div dangerouslySetInnerHTML={{ __html: fnAuthors(authors) }} />
          {/* {fnAuthors(authors)} */}
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
                style={{ color: 'white', fontWeight: 'bold' }}
              />
            </Box>
          </Grid>
        )}

        <Grid item xs>
          <Box component="span">
            <a href={path} target="_blank" rel="noreferrer">
              <i className="fas fa-file-alt"></i>
              <Typography variant="button"> paper</Typography>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;

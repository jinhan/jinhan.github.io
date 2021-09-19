import React from 'react';
// import css from '../index.css';
import { Grid, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  circularPortrait: {
    position: 'relative',
    width: '20vw',
    height: '20vw',
    overflow: 'hidden',
    borderRadius: '50%',
  },
  circularPortraitImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

type AboutProps = {
  email: string;
  name: string;
  photoPath: string;
  description: string;
  linkedIn: string;
  github: string;
  googleScholar: string;
};

const About: React.FC<AboutProps> = ({
  name,
  email,
  photoPath,
  description,
  linkedIn,
  github,
  googleScholar,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item container direction="row" spacing={5}>
        <Grid item xs={3}>
          <div className={classes.circularPortrait}>
            <img alt="profile-img" src={photoPath} className={classes.circularPortraitImg} />
          </div>
        </Grid>
        <Grid item xs alignItems="left">
          <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" style={{ marginTop: '20px' }}>
            Jinhan Choi
          </Box>

          <Typography style={{ whiteSpace: 'pre-line', marginTop: '10px' }}>
            {description}
          </Typography>
          <Box marginTop={3}>
            <Box component="span">
              <a href="mailto:jinhan.choi@bc.edu" target="_top">
                <i className="fas fa-envelope"></i> {email}
              </a>
            </Box>
            <Box component="span" marginLeft={2}>
              <a href={linkedIn} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </Box>
            <Box component="span" marginLeft={2}>
              <a href={github} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i> Github
              </a>
            </Box>
            <Box component="span" marginLeft={2}>
              <a href={googleScholar} target="_blank" rel="noreferrer">
                <i className="fas fa-graduation-cap"></i> Scholar
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;

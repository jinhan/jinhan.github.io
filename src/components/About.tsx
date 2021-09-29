import React from 'react';
// import css from '../index.css';
import { Grid, Box, Typography, Button } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';

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

const LinkButton = styled(Button)(({ theme }) => ({
  color: "#808080",
  '&:hover': {
    backgroundColor: "#fed8b1",
  },
  textTransform: "none",
  fontSize: "15px",
}));

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
          <div className={classes.circularPortrait} style={{ marginTop: '20px' }}>
            <img alt="profile-img" src={photoPath} className={classes.circularPortraitImg} />
          </div>
        </Grid>
        <Grid item xs alignItems="left">
          <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" style={{ marginTop: '5px' }}>
            Jinhan Choi
          </Box>

          <Typography style={{ whiteSpace: 'pre-line', marginTop: '15px' }}>
            {description}
          </Typography>
          <Box marginTop={3}>
            <Box component="span">
              <LinkButton startIcon={<i className="fas fa-envelope"></i>}>{email}</LinkButton>
            </Box>
            <Box component="span" marginLeft={2}>
              <LinkButton onClick={() => window.open(linkedIn, '_blank')} startIcon={<i className="fab fa-linkedin"></i>}>LinkedIn</LinkButton>
            </Box>
            <Box component="span" marginLeft={2}>
              <LinkButton onClick={() => window.open(github, '_blank')} startIcon={<i className="fab fa-github"></i>}>Github</LinkButton>
            </Box>
            <Box component="span" marginLeft={2}>
              <LinkButton onClick={() => window.open(googleScholar, '_blank')} startIcon={<i className="fas fa-graduation-cap"></i>}>Scholar</LinkButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;

import React from "react";
// import css from '../index.css';
import {Grid, Box, Typography, Button} from "@mui/material";
import {styled, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  circularPortrait: {
    position: "relative",
    width: "15vw",
    height: "15vw",
    overflow: "hidden",
    borderRadius: "50%",
  },
  circularPortraitImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

type AboutProps = {
  email: string;
  address: string;
  addressURL: string;
  name: string;
  photoPath: string;
  description: string;
  linkedIn: string;
  github: string;
  googleScholar: string;
  cv: string;
};

const LinkButton = styled(Button)(({theme}) => ({
  color: "#000000",
  "&:hover": {
    backgroundColor: "#fed8b1",
  },
  textTransform: "none",
  fontSize: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiButton-startIcon": {
    fontSize: "2rem", // Adjust the icon size as needed
  },
}));

const About: React.FC<AboutProps> = ({
  name,
  address,
  addressURL,
  email,
  photoPath,
  description,
  linkedIn,
  github,
  googleScholar,
  cv,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Box
        fontWeight="fontWeightBold"
        fontSize="h4.fontSize"
        style={{marginTop: "5px"}}
      >
        Jinhan Choi
      </Box>
      <Grid item container direction="row" alignItems="center">
        {/* <Grid item xs={2} style={{maxWidth: "20vw", maxHeight: "20vw"}}> */}
        {/* <div
            className={classes.circularPortrait}
            style={{marginRight: "10px"}}
          >
            <img
              alt="profile-img"
              src={photoPath}
              className={classes.circularPortraitImg}
            />
          </div> */}
        {/* <Box marginTop={3}>
            <Box component="span">
              <LinkButton
                onClick={() => window.open(addressURL, "_blank")}
                startIcon={<i className="fa-solid fa-location-pin fa-2xl"></i>}
              >
                {address}
              </LinkButton>
            </Box>
          </Box> */}
        {/* </Grid> */}
        <Grid item xs>
          <Typography style={{whiteSpace: "pre-line", marginTop: "15px"}}>
            {description}
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs container justifyItems="center" alignItems="center">
        <Box component="span">
          <LinkButton startIcon={<i className="fas fa-envelope fa-2x"></i>}>
            {email}
          </LinkButton>
        </Box>
        {/* <Box component="span">
          <LinkButton
            onClick={() => window.open(cv, "_blank")}
            startIcon={<i className="fas fa-file-alt"></i>}
          >
            CV 
          </LinkButton>
        </Box> */}
        <Box component="span">
          <LinkButton
            onClick={() => window.open(linkedIn, "_blank")}
            startIcon={<i className="fab fa-linkedin"></i>}
            size="large"
          >
            {/* LinkedIn */}
          </LinkButton>
        </Box>
        <Box component="span">
          <LinkButton
            onClick={() => window.open(github, "_blank")}
            startIcon={<i className="fab fa-github"></i>}
          >
            {/* Github */}
          </LinkButton>
        </Box>
        <Box component="span">
          <LinkButton
            onClick={() => window.open(googleScholar, "_blank")}
            startIcon={<i className="fas fa-graduation-cap"></i>}
          >
            {/* Scholar */}
          </LinkButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;

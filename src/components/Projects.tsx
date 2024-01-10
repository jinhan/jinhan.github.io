import React from "react";
import {Grid, Box, Button, Chip} from "@mui/material";
import {makeStyles, styled} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  teaserImg: {
    position: "absolute",
    // left: "0",
    backgroundPosition: "left",
    // "-webkit-transform": "scale(1)",
    // transform: "scale(1)",
    // "-webkit-transition": ".5s ease-in-out",
    // transition: ".5s ease-in-out",
    "-webkit-transition": "all 2s",
    "&:hover": {
      // left: "-50vw",
      backgroundPosition: "right",
    },
  },
  figure: {
    position: "relative",
    height: "100%",
    width: "auto",
    margin: 0,
    padding: 0,
    overflow: "hidden",
  },
}));

type IProjectItem = {
  id: string;
  title: string;
  authors: string;
  source: string;
  teaser: string;
  path: string;
  award: string;
  project: string;
  video: string;
};

type ProjectsProps = {
  projects: Array<IProjectItem>;
};

const LinkButton = styled(Button)(({theme}) => ({
  color: "#808080",
  "&:hover": {
    backgroundColor: "#fed8b1",
  },
  textTransform: "none",
  fontSize: "15px",
}));

const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <Grid container spacing={3}>
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
  const newAuthors = authors.replace(
    "Jinhan Choi",
    "<strong>Jinhan Choi</strong>"
  );

  return '<Box component="div">' + newAuthors + "</Box>";
};

const ProjectItem: React.FC<IProjectItem> = ({
  id,
  title,
  authors,
  source,
  teaser,
  path,
  award,
  project,
  video,
}) => {
  const classes = useStyles();
  // console.log(teaser);

  return (
    <Grid item container direction="row" spacing={3}>
      <Grid item xs={2} alignItems="left">
        <div className={classes.figure}>
          {/* <div
            // alt="publication-teaser"
            // src={teaser}
            // width="100%"
            style={{
              // backgroundImage: `url($(process.env.PUBLIC_URL + teaser))`,
              // backgroundImage: `url($("../.." + teaser)})`,
              backgroundRepeat: "no-repeat",
              maxHeight: "110px",
            }}
            className={classes.teaserImg}
          ></div> */}
          <img src={teaser} style={{width: "100%", maxHeight: "110px"}} />
        </div>
      </Grid>

      <Grid
        container
        item
        xs
        alignItems="left"
        direction="column"
        spacing={0.5}
      >
        <Grid item xs>
          <Box fontWeight="fontWeightBold">{title}</Box>
        </Grid>

        <Grid item xs>
          <div dangerouslySetInnerHTML={{__html: fnAuthors(authors)}} />
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
                style={{color: "white", fontWeight: "bold"}}
              />
            </Box>
          </Grid>
        )}

        <Grid item xs>
          <LinkButton
            size="small"
            onClick={() => window.open(path, "_blank")}
            startIcon={<i className="fas fa-file-alt"></i>}
          >
            paper
          </LinkButton>
          {project && (
            <LinkButton
              size="small"
              onClick={() => window.open(project, "_blank")}
              startIcon={<i className="fas fa-globe"></i>}
            >
              project
            </LinkButton>
          )}
          {video && (
            <LinkButton
              size="small"
              onClick={() => window.open(video, "_blank")}
              startIcon={<i className="fas fa-video"></i>}
            >
              video
            </LinkButton>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;

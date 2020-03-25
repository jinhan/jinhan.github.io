import sample from 'lodash/sample';
import React from 'react';
import css from 'index.css';
import Grid from '@material-ui/core/Grid';

export default function About(props){
    return (
        <section id={"about"}>
            <h1 className={"title"}>{props.about.name}</h1>
            <div className={css.row}>
                <Grid container>
                    <Grid item xs={6}>
                        <center><img className={"profile-img"} src={sample(props.about.photos)} /></center>
                    </Grid>
                    <Grid item xs={6}>
                        <p>{props.about.description}</p>
                        <br />
                        <a href="mailto:jinhanchoi@snu.ac.kr" target="_top"> <i class="fas fa-envelope"></i></a> |
                        <a href={props.about.linkedin} target="_blank"> <i className="fab fa-linkedin"></i></a> |
                        <a href={props.about.github} target="_blank"> <i className="fab fa-github"></i></a> |
                        <a href={props.about.scholar} target="_blank"> <i className="fas fa-graduation-cap"></i> Google Scholar</a>
                        <br />
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}

{/* <a href=${about.cv} target="_blank"><i class="fas fa-file-alt"></i> CV</a> | */}
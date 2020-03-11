import sample from 'lodash/sample';
import React, { useContext } from 'react';
import css from 'index.css';
import Grid from '@material-ui/core/Grid';

export default function About(props){
    return (
        <section id={"about"}>
            <h1 className={"title"}>{props.about.name}</h1>
            <div className={css.row}>
                <Grid container>
                    <Grid item xs={6}>
                        <center><img className={"profile-img"} src={sample(props.about.photos)} /></center><br />
                        <strong>{props.about.title}</strong><br />
                        {props.about.email}<br />
                        <a href={props.about.linkedin} target="_blank"><i className="fab fa-linkedin"></i></a> |
                        <a href={props.about.scholar} target="_blank"><i className="fas fa-graduation-cap"></i> Google Scholar</a> |
                        <a href={props.about.github} target="_blank"><i className="fab fa-github"></i></a><br />
                    </Grid>
                    <Grid item xs={6}>
                        <p>{props.about.description}</p>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}

{/* <a href=${about.cv} target="_blank"><i class="fas fa-file-alt"></i> CV</a> | */}
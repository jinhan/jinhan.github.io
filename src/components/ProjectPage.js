import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DataContext from 'components/DataContext';

export default function ProjectPage(){
    const data = useContext(DataContext);
    let location = useLocation();
    let pid = location.pathname.split('/')[2];
    let pData = data.projects.find(d => d.id === pid);
    return (
        <ProjectDetail d={pData} />
    );
}

function ProjectDetail(props){
    return (
        <section>
            <h1 className={"title"}>{props.d.title}</h1>
            <img className={"project-teaser"} src={props.d.teaser} width="100%"/>
            <div className={"project-authors"}>
                {props.d.authors}
            </div>
            <div className={"project-source"}>
                <em>{props.d.source}</em>
            </div>
            <div className={"project-desc"}>
                <p>
                    {props.d.desc}
                </p>
            </div>
        </section>
    );
}
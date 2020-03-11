import React, { useContext } from 'react';
import DataContext from 'components/DataContext';
import { Link } from 'react-router-dom';
import ProjectPage from 'components/ProjectPage';
import News from 'components/News';
import Grid from '@material-ui/core/Grid';

// export default function Projects(projects){
//     return `
//     <section id="projects">
//         <h1 class="title">Projects</h1>
//         <div class="filter">
//             <label>
//                 <input type="radio" name="filter" value="all" checked>
//                 All
//             </label>
//             <label>
//                 <input type="radio" name="filter" value="journal">
//                 Journal
//             </label>
//             <label>
//                 <input type="radio" name="filter" value="conference">
//                 Conference
//             </label>
//             <label>
//                 <input type="radio" name="filter" value="system">
//                 System
//             </label>
//             <label>
//                 <input type="radio" name="filter" value="technique">
//                 Technique
//             </label>
//             <label>
//                 <input type="radio" name="filter" value="evaluation">
//                 Evaluation
//             </label>
//         </div>
//         <div class="project-list">
//             ${ProjectItems(projects)}
//         </div>
//     </section>`;
// }

export default function Projects(props){
    return (
        <section id={"projects"}>
            <h1 className={"title"}>Projects</h1>
            <div className={"project-list"}>
                {ProjectItems(props.projects)}
            </div>
        </section>
    );
}

export function ProjectItems(items){
    let projects = Object.values(items);
    projects = projects.slice();
    return projects.map(d => (
        <div className={"row"}>
            <Grid container>
                <Grid item xs={6}>
                {/* <div className={"col-6"}> */}
                    <div className={"project-title"}>
                        {/* <a href={"/project/" + d.id}><strong>{d.title}</strong></a> */}
                        {/* <Link to={`/project=${d.id}`} onClick={News}><strong>{d.title}</strong></Link> */}
                        <Link to={`/project/${d.id}`}><strong>{d.title}</strong></Link>
                    </div>
                    <div className={"project-authors"}>
                        {d.authors}<br/>
                    </div>
                    <div className={"project-source"}>
                        <em>{d.source}</em>
                    </div>
                {/* </div>  */}
                </Grid>
            {/* <div className={"col-6"}> */}
                <Grid item xs={6}>
                    <img src={d.teaser} width="100%"/>
                </Grid>
            {/* </div> */}
            </Grid>
        </div>
    ));
}


// export function handleProjectFilter(data){
//     let conds = document.querySelectorAll('.filter input[name="filter"]');
//     // console.log(typeof conds);
//     conds.forEach(cond => cond.addEventListener('change', function(event){
//         let checked = event.target.value;
//         if (checked === 'all'){
//             document.querySelector('.project-list').innerHTML = ProjectItems(data.projects);
//         } else{
//             let filtered = data.projects.filter(d => {
//                 return d.tags.some(tag => checked === tag.toLowerCase());
//             });
//             document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
//         }
//     }));
// }


{/* <div class="project-tags">
${d.tags.map(tag=>`
    <span class="tag ${tag.toLowerCase()}">
        ${tag}
    </span>
`).join('')}
</div> */
/* <div class="project-materials">
${d.materials.map(m=>`
    <span>
        <a href="${m.path}" target="_blank">${MaterialIcon(m.label)} 
        ${m.label}
        </a>
    </span>
`).join('')}
</div> */}
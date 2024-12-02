import React from "react";
import './style.scss';
const PROJECTS = [
    {
        ID: 'P1',
        Name: 'Kota Kingdom',
        Description: '',
        Icon: '',
        type: 'Ecomerce',
    },
    {
        ID: 'P2',
        Name: 'WeEat',
        Description: '',
        Icon: '',
        type: 'Ecomerce',
    },
    {
        ID: 'P3',
        Name: 'Kota Kingdom',
        Description: '',
        Icon: '',
        type: 'Ecomerce',
    }
];

const Projects = ({getProject}) => {

    function handleProjectSelected(e) {
        getProject(e.target.id);
    };

    return (
        <div className="projectcontainer">
            {PROJECTS.map((project) => {

                return (
                    <div onClick={handleProjectSelected} id={project.ID} className="projectcard">
                        <p>{project.Name}</p>
                        <p>{project.type}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Projects;   
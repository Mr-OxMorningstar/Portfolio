import React from "react";
import './style.scss';
import WeEat from "./WeEat/WeEat";

const PlayGround = ({ close, selectedProject }) => {

    function closeProject() {
        close();
    };
    console.log(selectedProject)
    return (
        <div className="playgroundContainer">
            <p onClick={closeProject} style={{position:'absolute'}} >X</p>
            {selectedProject === 'P2' ? <WeEat/> : null}
        </div>
    )
};
export default PlayGround;
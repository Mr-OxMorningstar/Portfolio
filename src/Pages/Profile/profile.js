import React from "react";
import './style.scss';
import { wheat, wheat4 } from '../../Assets';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-body-left">
                <p className="name">Agreement Ntwanano<br />Hlungwane</p>
                <p className="summary">
                    A dynamic Software Developer with a proven track record at Aions
                    Creative Technology, enhancing system performance and
                    integrating cutting-edge web applications for both desktop and
                    mobile platforms. Excelled in full-stack development and
                    problem-solving. Skilled in JavaScript and known for exceptional
                    code debugging abilities.
                </p>
                <div className="experience-section">
                    <p className="section-title">Work Experience</p>
                    <div className="experience">
                        <p className="experience-date">2023/12 - Present</p>
                        <p className="experience-company">Aions Creative Technology</p>
                        <p className="experience-role">Software Developer</p>
                        <ul className="experience-details">
                            <li>Built databases and table structures for web applications.</li>
                            <li>Developed web applications for desktop and mobile operating systems.</li>
                            <li>Documented software development methodologies in technical manuals.</li>
                            <li>Corrected, modified, and upgraded software to improve performance.</li>
                            <li>Inspected code, assessed functionality, and optimized performance.</li>
                            <li>Wrote scripts to help minimize time taken to do admin work.</li>
                        </ul>
                    </div>
                    <div className="experience">
                        <p className="experience-date">2023/01 - 2023/12</p>
                        <p className="experience-company">Aions Creative Technology</p>
                        <p className="experience-role">Software Developer</p>
                        <ul className="experience-details">
                            <li>Conducted data modeling, performance, and integration testing.</li>
                            <li>Analyzed work to generate logic for new systems, procedures, and tests.</li>
                            <li>Developed software for desktop and mobile operating systems.</li>
                            <li>Collaborated on stages of the systems development lifecycle from briefing to staging releases.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="profile-body-right">
                <img src={wheat} alt="Wheat Design" className="wheat-img" />
                <img src={wheat4} alt="Wheat Design" className="wheat-img2" />
            </div>
        </div>
    );
}

export default Profile;

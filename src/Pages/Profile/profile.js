import React from "react";
import './style.scss';
import { AionsLogo, wheat, wheat4, yesYouth } from '../../Assets';
import { SportLight } from '../../components';

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
                    <div className="experience" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            <p className="experience-date">2023/12 - Present</p>
                            <p className="experience-role">Software Developer</p>
                            <p className="experience-company">Aions Creative Technology</p>
                            <ul className="experience-details">
                                <li>Built databases and table structures for web applications.</li>
                                <li>Wrote scripts to help minimize time taken to do admin work.</li>
                                <li>Inspected code, assessed functionality, and optimized performance.</li>
                                <li>Corrected, modified, and upgraded software to improve performance.</li>
                                <li>Developed web applications for desktop and mobile operating systems.</li>
                                <li>Documented software development methodologies in technical manuals.</li>
                            </ul>
                        </div>

                        <div className="complogo" >
                            <img src={AionsLogo} style={{ height: '30%', cursor: 'pointer' }} />
                            <a href='https://www.aions.co.za' target='_blank' style={{ height: '100%', width: '100%', position: 'absolute' }} />
                        </div>
                    </div>
                    <div className="experience">
                        <div>
                            <p className="experience-date">2023/01 - 2023/12</p>
                            <p className="experience-role">Software Developer</p>
                            <p className="experience-company">Yes4Youth / Aions Creative Technology</p>
                            <ul className="experience-details">
                                <li>Developed software for desktop and mobile operating systems.</li>
                                <li>Conducted data modeling, performance, and integration testing.</li>
                                <li>Analyzed work to generate logic for new systems, procedures, and tests.</li>
                                <li>Collaborated on stages of the systems development lifecycle from briefing to staging releases.</li>
                            </ul>
                        </div>
                        <div className="complogo"  >
                            <img src={yesYouth} style={{ height: '35%', cursor: 'pointer' }} />
                            <img src={AionsLogo} style={{ height: '20%', cursor: 'pointer' }} />
                            <a style={{ height: '100%', width: '100%', position: 'absolute' }} target="_blank" href="https://www.yes4youth.co.za/" />
                        </div>
                    </div>
                    <br />
                    <p className="section-title">Skills</p>
                    <div className="experience" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            {/* <p className="experience-date">2023/12 - Present</p> */}
                            <p className="experience-company">Technologies</p>
                            <p className="experience-role"> {'>'}React</p>
                            <p className="experience-role"> {'>'}Next</p>
                            <p className="experience-role"> {'>'}Flutter</p>
                            <p className="experience-role"> {'>'}jupyter</p>
                            {/* <ul className="experience-details">
                                <li>Built databases and table structures for web applications.</li>
                                <li>Wrote scripts to help minimize time taken to do admin work.</li>
                                <li>Inspected code, assessed functionality, and optimized performance.</li>
                                <li>Corrected, modified, and upgraded software to improve performance.</li>
                                <li>Developed web applications for desktop and mobile operating systems.</li>
                                <li>Documented software development methodologies in technical manuals.</li>
                            </ul> */}
                        </div>

                        <div className="complogo" >
                            <img src={AionsLogo} style={{ height: '30%', cursor: 'pointer' }} />
                            <a href='https://www.aions.co.za' target='_blank' style={{ height: '100%', width: '100%', position: 'absolute' }} />
                        </div>
                    </div>
                    <div className="experience" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            {/* <p className="experience-date">2023/12 - Present</p> */}
                            <p className="experience-company">Languages</p>
                            <p className="experience-role"> {'>'}React</p>
                            <p className="experience-role"> {'>'}Next</p>
                            <p className="experience-role"> {'>'}Flutter</p>
                            <p className="experience-role"> {'>'}jupyter</p>
                            {/* <ul className="experience-details">
                                <li>Built databases and table structures for web applications.</li>
                                <li>Wrote scripts to help minimize time taken to do admin work.</li>
                                <li>Inspected code, assessed functionality, and optimized performance.</li>
                                <li>Corrected, modified, and upgraded software to improve performance.</li>
                                <li>Developed web applications for desktop and mobile operating systems.</li>
                                <li>Documented software development methodologies in technical manuals.</li>
                            </ul> */}
                        </div>

                        <div className="complogo" >
                            <img src={AionsLogo} style={{ height: '30%', cursor: 'pointer' }} />
                            <a href='https://www.aions.co.za' target='_blank' style={{ height: '100%', width: '100%', position: 'absolute' }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;

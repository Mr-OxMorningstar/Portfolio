import React, { } from "react";
import './style.scss';
import { AionsLogo, yesYouth, java, js, flutter, dart, python, react, nextjs, jupyter, mongo, css, html, sass } from '../../Assets';
import { SportLight, PreviewSkills } from '../../components';
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
                    <p className="section-title">Skills</p>
                    <div className="experience" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '300px' }}>
                        <div style={{ width: '20%' }}>
                            <p className="experience-company">Technologies</p>
                            <ul className="experience-details">
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>Jupyter</li>
                                <li>Flutter</li>
                                <li>MongoDB</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SASS/SCSS</li>
                            </ul>

                        </div>

                        <div className="complogo" style={{ width: '80%', height: '90%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }} >
                            <img className='img' alt='react' src={react} onClick={() => window.open('https://react.dev/', '_blank')} />
                            <img className='img' alt='flutter' src={flutter} onClick={() => window.open('https://flutter.dev/', '_blank')} />
                            <img className='img' alt='next' src={nextjs} onClick={() => window.open('https://nextjs.org/', '_blank')} />
                            <img className='img' alt='jupyter' src={jupyter} onClick={() => window.open('https://jupyter.org/', '_blank')} />
                            <img className='img' alt='mongo' src={mongo} onClick={() => window.open('https://www.mongodb.com/', '_blank')} />
                            <img className='img' alt='hmtl' src={html} onClick={() => window.open('https://html.com/', '_blank')} />
                            <img className='img' alt='css' src={css} onClick={() => window.open('https://www.w3schools.com/css/', '_blank')} />
                            <img className='img' alt='scss' src={sass} onClick={() => window.open('https://sass-lang.com/', '_blank')} />
                        </div>

                    </div>
                    <div className="experience" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '200px' }}>
                        <div style={{ width: '20%', height: '100%' }} >
                            <p className="experience-company">Languages</p>
                            <ul className="experience-details">
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>Dart</li>
                                <li>Java</li>
                            </ul>
                        </div>

                        <div className="complogo" style={{ width: '80%', height: '80%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}  >
                            <img className='img' alt='js' src={js} onClick={() => window.open('https://devdocs.io/javascript/', '_blank')} />
                            <img className='img' alt='dart' src={dart} onClick={() => window.open('https://dart.dev/', '_blank')} />
                            <img className='img' alt='pythin' src={python} onClick={() => window.open('https://www.python.org/', '_blank')} />
                            <img className='img' alt='java' src={java} onClick={() => window.open('https://www.java.com/en/', '_blank')} />

                        </div>
                    </div>

                    <br />

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
                        <div className="complogo" style={{ width: '40%' }}  >
                            <img src={yesYouth} style={{ height: '35%', cursor: 'pointer' }} />
                            <img src={AionsLogo} style={{ height: '20%', cursor: 'pointer' }} />
                            <a style={{ height: '100%', width: '100%', position: 'absolute' }} target="_blank" href="https://www.yes4youth.co.za/" />
                        </div>
                    </div>

                    <br />
                    <p className="section-title">Cetificates</p>
                    <div className="experience" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '300px' }}>
                        <p className="experience-role">Component under construction!</p>
                    </div>

                    <br />
                    <p className="section-title">Education</p>
                    <div className="experience" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '300px' }}>
                        <p className="experience-role">Component under construction!</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;

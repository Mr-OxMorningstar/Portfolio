import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import './style.scss';
import Profile from "./Profile/profile";
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
import { Me, homeIcon, profile, react, js, python } from '../Assets';

const Home = () => {
    const [isMouseIn, setIsMouseIn] = useState(false);
    const [SelectedPage, setSelectedPage] = useState('Home');

    const pageFade = useSpring({ 
        opacity: 1, 
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(20px)' }, 
        delay: 300 
    });

    const togglebarEnter = () => setIsMouseIn(true);
    const togglebarLeave = () => setIsMouseIn(false);

    const renderPage = () => {
        switch(SelectedPage) {
            case 'Profile':
                return <Profile />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            default:
                return (
                    <animated.div className="body" style={pageFade}>
                        <div className="bodyleft">
                            <p className="fullstack">Full-Stack Developer</p>
                            <p className="myname">Agreement<br />Hlungwane</p>
                            <p className="description">
                                Hello and welcome to my portfolio! I'm a Full-Stack Developer with a passion for building 
                                high-performance web and mobile applications, as well as data-driven systems with seamless, 
                                user-friendly interfaces. I excel at tackling complex challenges and am always driven to 
                                learn the latest technologies to deliver efficient, scalable, and impactful solutions.
                            </p>
                            <div className="cta-buttons">
                                <button 
                                    className="cta-button primary"
                                    onClick={() => setSelectedPage('Projects')}
                                >
                                    View My Work
                                </button>
                                <button 
                                    className="cta-button secondary"
                                    onClick={() => setSelectedPage('Contact')}
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </div>

                        <div className="bodyright">
                            <div className="profile-container">
                                <img src={Me} alt="Agreement Hlungwane" className="profile-img" />
                                
                                {/* Holographic Alien Effects */}
                                <div className="holographic-container">
                                    <div className="alien-glow"></div>
                                    <div className="holographic-overlay"></div>
                                    
                                    <div className="alien-beam beam-1"></div>
                                    <div className="alien-beam beam-2"></div>
                                    <div className="alien-beam beam-3"></div>
                                    
                                    <div className="mystical-particles">
                                        <div className="particle"></div>
                                        <div className="particle"></div>
                                        <div className="particle"></div>
                                        <div className="particle"></div>
                                        <div className="particle"></div>
                                    </div>
                                </div>
                                
                                <div className="floating-elements">
                                    <div className="floating-icon">
                                        <img src={react} alt="React" />
                                    </div>
                                    <div className="floating-icon">
                                        <img src={js} alt="JavaScript" />
                                    </div>
                                    <div className="floating-icon">
                                        <img src={python} alt="Python" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                );
        }
    };

    return (
        <div className="home">
            <div className="topbar" onMouseEnter={togglebarEnter} onMouseLeave={togglebarLeave}>
                <div className="icontray">
                    {["Home", "Profile", "Projects", "Contact"].map((item, index) => (
                        <div 
                            onClick={() => setSelectedPage(item)} 
                            key={index} 
                            className={isMouseIn || SelectedPage === item ? 'homepairActive' : 'homepair'}
                        >
                            <img alt={item.toLowerCase()} src={index % 2 === 0 ? homeIcon : profile} />
                            <span className="iconname">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {renderPage()}
        </div>
    );
};

export default Home;
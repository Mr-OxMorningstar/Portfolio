import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring"; // Importing react-spring for animation
import './style.scss';
import Profile from "./Profile/profile";
import { Me, homeIcon, profile, ufo, sportlight, bulb } from '../Assets';
import { SportLight } from '../components';

const Home = () => {
    const [isMouseIn, setIsMouseIn] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [SelectedPage, setSelectedPage] = useState('Profile');

    // Animation for page content fade-in
    const pageFade = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

    useEffect(() => {
    }, []);

    const togglebarEnter = () => setIsMouseIn(true);
    const togglebarLeave = () => setIsMouseIn(false);
    const handleOnMouseDown = () => setIsMouseDown(true);
    const handleOnMouseUp = () => setIsMouseDown(false);

    return (
        <div className="home">
            <div className="topbar" onMouseEnter={togglebarEnter} onMouseLeave={togglebarLeave}>
                <div className="icontray">
                    {["Home", "Profile", "Projects", "Contact"].map((item, index) => (
                        <div onClick={e => { setSelectedPage(e.currentTarget.id); }} key={index} id={item} className={isMouseIn ? 'homepairActive' : 'homepair'} style={{ backgroundColor: SelectedPage === item ? '#f4dfc840' : '', boxShadow: SelectedPage === item ? ' inset -11px 8px 15px -4px #F4DFC8' : '' }} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
                            <img alt={item.toLowerCase()} src={index % 2 === 0 ? homeIcon : profile} />
                            {isMouseIn ? <p className="iconname">{item}</p> : null}
                        </div>
                    ))}
                </div>
            </div>

            {SelectedPage === 'Home' ? 
                <div className="body" style={pageFade}>
                    <div className="bodyleft">
                        <p className="fullstack">Full-Stack Developer</p>
                        <p className="myname">Agreement<br style={{ margin: '0' }} />Hlungwane</p>
                        <p className="fullstack" style={{ fontSize: 'larger', textAlign: 'left', width: '80%', marginTop: '7%', lineHeight: '1.3' }}>
                            Hello and welcome to my portfolio! I'm a Full-Stack Developer with a passion for building high-performance web and
                            mobile applications, as well as data-driven systems with seamless, user-friendly interfaces. I excel at tackling
                            complex challenges and I'm always driven to learn the latest technologies to deliver efficient, scalable, and impactful
                            solutions.
                        </p>
                    </div>

                    <div className="bodyright">
                        <img src={Me} alt="My Profile" className="profile-img" />
                        <SportLight />
                    </div>

                </div> 
                : SelectedPage === 'Profile' ? <Profile /> : null}
        </div>
    );
};
export default Home;

import React, { useState, useEffect } from "react";
import { ShapeName } from "react-awesome-shapes";
import WebFont from "webfontloader";
import './style.scss';
import Profile from "./Profile/profile";
import { Me, homeIcon, profile, ufo, sportlight, bulb } from '../Assets';

const Home = () => {
    const [isMouseIn, setIsMouseIn] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [SelectedPage, setSelectedPage] = useState('Projects')
    useEffect(() => {
        WebFont.load({
            custom: {
                families: ['arial'],
                urls: ['./style.scss'], // Path where font is defined
            },
        });
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
                        <div key={index}  id ={item} className={isMouseIn ? 'homepairActive' : 'homepair'} style={{backgroundColor:SelectedPage ===item ?'#f4dfc840':'', boxShadow:SelectedPage ===item ?' inset -11px 8px 15px -4px #F4DFC8':''}}  onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
                            <img alt={item.toLowerCase()} src={index % 2 === 0 ? homeIcon : profile} />
                            {isMouseIn ? <p className="iconname">{item}</p> : null}
                        </div>
                    ))}
                </div>
            </div>

            <div className="body">
                <div className="bodyleft">
                    <p className="fullstack">Full-Stack Developer</p>
                    <p className="myname">AN<br style={{ margin: '0' }} />Hlungwane</p>
                    <p className="fullstack" style={{ fontSize: '16px', textAlign: 'left', width: '60%', marginTop: '7%' }}>
                        Hello and welcome to my portfolio! I'm a Full-Stack Developer with a passion for building high-performance web and
                        mobile applications, as well as data-driven systems with seamless, user-friendly interfaces. I excel at tackling
                        complex challenges and am always driven to learn the latest technologies to deliver efficient, scalable, and impactful
                        solutions.
                    </p>
                </div>

                <div className="bodyright">
                    <img src={Me} alt="My Profile" className="profile-img" />
                    {/* <img  className='ufo'  alt="ufo" src={bulb}/> */}
                    <div className="flashlight-beam" style={{ display: 'block' }}></div>
                </div>

            </div>
        </div>
    );
};
export default Home;
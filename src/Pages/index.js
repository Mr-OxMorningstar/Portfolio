// import React, { useState, useEffect } from "react";
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import './style.scss';
// import Profile from "./Profile/profile";
// import { DoubleRing, Me, homeIcon, profile } from '../Assets';
// import { CustomButton } from '../components'
// import { timeout } from "cjs";

// const Home = () => {
//     const [isMouseIn, setIsMouseIn] = useState(false)
//     const [isMouseDown, setIsMouseDown] = useState(false)

//     function togglebarEnter() {
//         setIsMouseIn(true)
//     };
//     function togglebarLeave() {
//         setIsMouseIn(false)
//     };
//     function handleOnMouseDown() {
//         setIsMouseDown(true)
//     }
//     function handleOnMouseUp() {
//         setIsMouseDown(false)
//     }
//     return (
//         <div className="home" >
//             <div className="topbar" onMouseEnter={togglebarEnter} onMouseLeave={togglebarLeave}>
//                 <div className="icontray">
//                     <div className={isMouseIn ? 'homepairActive' : "homepair"} style={{ boxShadow: isMouseDown ? ' 0px 0px 5px rgb(163, 120, 55)' : '' }} onMouseUp={handleOnMouseUp} onMouseDown={handleOnMouseDown}>
//                         <img alt="one" src={homeIcon} />
//                         {isMouseIn ? <p className="iconname">Home</p> : null}
//                     </div>

//                     <div className={isMouseIn ? 'homepairActive' : "homepair"} style={{ boxShadow: isMouseDown ? ' 0px 0px 5px rgb(163, 120, 55)' : '' }} onMouseUp={handleOnMouseUp} onMouseDown={handleOnMouseDown}>
//                         <img alt='two' style={{ height: '70%' }} src={profile} />
//                         {isMouseIn ? <p className="iconname">Profile</p> : null}

//                     </div>
//                     <div className={isMouseIn ? 'homepairActive' : "homepair"} style={{ boxShadow: isMouseDown ? ' 0px 0px 5px rgb(163, 120, 55)' : '' }} onMouseUp={handleOnMouseUp} onMouseDown={handleOnMouseDown}>
//                         <img alt="one" src={homeIcon} />
//                         {isMouseIn ? <p className="iconname">Projects</p> : null}
//                     </div>

//                     <div className={isMouseIn ? 'homepairActive' : "homepair"} style={{ boxShadow: isMouseDown ? ' 0px 0px 5px rgb(163, 120, 55)' : '' }} onMouseUp={handleOnMouseUp} onMouseDown={handleOnMouseDown}>
//                         <img alt='two' style={{ height: '70%' }} src={profile} />
//                         {isMouseIn ? <p className="iconname">Profile</p> : null}

//                     </div>
//                 </div>
//             </div>
//             <div className="body">
//                 <div className="bodyleft" >
//                     <h1 className="neon">Hi there!👋 </h1>
//                     {/* <br/> */}
//                     <h3 className="text2"> I'm a developer passionate about turning ideas into reality!</h3>
//                     <p style={{ color: 'white' }}>
//                         Welcome to my portfolio! I’m a Full-Stack Developer specializing in high-performance web and mobile applications, as well as data-driven systems with intuitive interfaces. I thrive on solving complex challenges and am always eager to learn new technologies to build efficient, scalable solutions.                    </p>
//                 </div>
//                 <div className="bodyright">
//                     <img src={Me} />
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Home

import React, { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './style.scss';
import Profile from "./Profile/profile";
import { Me, homeIcon, profile } from '../Assets';

const Home = () => {
    const [isMouseIn, setIsMouseIn] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const togglebarEnter = () => setIsMouseIn(true);
    const togglebarLeave = () => setIsMouseIn(false);
    const handleOnMouseDown = () => setIsMouseDown(true);
    const handleOnMouseUp = () => setIsMouseDown(false);

    return (
        <div className="home">
            <div className="topbar" onMouseEnter={togglebarEnter} onMouseLeave={togglebarLeave}>
                <div className="icontray">
                    {["Home", "Profile", "Projects", "Contact"].map((item, index) => (
                        <div
                            key={index}
                            className={isMouseIn ? 'homepairActive' : 'homepair'}
                            style={{
                                boxShadow: isMouseDown ? '0px 0px 8px rgba(255, 165, 0, 0.7)' : '',
                            }}
                            onMouseDown={handleOnMouseDown}
                            onMouseUp={handleOnMouseUp}
                        >
                            <img alt={item.toLowerCase()} src={index % 2 === 0 ? homeIcon : profile} />
                            {isMouseIn ? <p className="iconname">{item}</p> : null}
                        </div>
                    ))}
                </div>
            </div>
            <div className="body">
                <div className="bodyleft">
                    <p className="fullstack">Full-Stack Developer</p>
                    <p className="myname">AN<br/>Hlungwane</p>
                    <p className="fullstack" style={{fontSize:'16px', textAlign:'left',width:'60%', marginTop:'7%' }}>"Hello and welcome to my portfolio! I'm a Full-Stack Developer with a passion for building high-performance web and mobile applications, as well as data-driven systems with seamless, user-friendly interfaces. I excel at tackling complex challenges and am always driven to learn the latest technologies to deliver efficient, scalable, and impactful solutions."</p>
                </div>
                <div className="bodyright">
                    <img src={Me} alt="My Profile" className="profile-img" />
                </div>
            </div>
        </div>
    );
};

export default Home;


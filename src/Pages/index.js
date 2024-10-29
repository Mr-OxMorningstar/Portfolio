import React, { useState, useEffect } from "react";
import Profile from "./Profile/profile";
import './style.scss';
import { DoubleRing, Me, homeIcon, profile } from '../Assets';
import { CustomButton } from '../components'
import { timeout } from "cjs";

const Home = () => {
    const [isMouseIn, setIsMouseIn] = useState(false)

    function togglebarEnter() {
        setIsMouseIn(true)
    };
    function togglebarLeave() {
            setIsMouseIn(false)
    };
    return (
        <div className="home" >
            <div className="topbar" onMouseEnter={togglebarEnter} onMouseLeave={togglebarLeave}>
                <div className="icontray">
                    <div className={isMouseIn? 'homepairActive':"homepair"}>
                        <img alt="one" src={homeIcon} />
                        {isMouseIn ? <p className="iconname">Home</p> : null}
                    </div>

                    <div className={isMouseIn? 'homepairActive':"homepair"}>
                        <img alt='two' style={{ height: '70%' }} src={profile} />
                        {isMouseIn ? <p className="iconname">Profile</p> : null}

                    </div>
                    <div className={isMouseIn? 'homepairActive':"homepair"}>
                        <img alt="three" />
                        {isMouseIn ? <p className="iconname">...</p> : null}

                    </div>
                    <div className={isMouseIn? 'homepairActive':"homepair"}>
                        <img alt="four" />
                        {isMouseIn ? <p className="iconname">...</p> : null}
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="bodyleft" >
                    <h1></h1>
                </div>
                <div className="bodyright">
                    <img src={Me} />
                </div>
            </div>
        </div>
    )
}
export default Home

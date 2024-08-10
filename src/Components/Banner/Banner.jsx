import React from "react";
import resume from "../../Data/CV/Rohan_Patil_Fullstack_WebDev.pdf";
import { Typewriter } from 'react-simple-typewriter';

export default function Banner() {

    const handleType = (count) => {
        console.log(count);
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };

    return (
        <>
            <div id="home" className="bg-dark">
                <div className="banner-1">
                    <h1 className="text-primary mb-3">I'm</h1>
                    <p className="mb-3 title">Rohan Patil</p>
                    <p className="text-light typewriter">
                        <Typewriter
                            words={["MERN Full Stack Web Developer", "Web Designer", "Front End Developer", "Back End Developer"]}
                            loop={5}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </p>

                    <div className="resume">
                        <a href={resume} download="resume" className="btn btn-primary">Download CV</a>
                    </div>
                </div>
                <div className="banner-2">
                    <img src="./Images/Me.png" alt="Description" />
                </div>

            </div>
        </>
    );
}

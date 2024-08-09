import React from "react"

import resume from "../../Data/CV/Rohan_Patil_Fullstack_WebDev.pdf"

import { Typewriter } from 'react-simple-typewriter'

export default function Banner() {

    const handleType = (count) => {
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <>
            <div className="bg-dark" id="home" >
                <div className="info">
                    <div>
                        <h1 className="text-primary mb-3">I'm</h1>
                        <p className="mb-3 title">Rohan Patil</p>
                        <p className="typed-text-output text-light typewriter">
                            <Typewriter
                                words={["MERN Full Stack Web Developer", "Web Designer", "Front End Developer", "Back End Developer"]}
                                loop={5}
                                cursor
                                cursorStyle='|'
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
                </div>
                <div className="">
                    <img className="main-img" src="./Images/Me.png" alt="" />
                </div>
            </div>

        </>
    )
}
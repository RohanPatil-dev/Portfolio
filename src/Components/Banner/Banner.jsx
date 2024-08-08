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
            <div className="container-fluid my-6 mt-0 bg-dark" id="home">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 py-6 pb-0 pt-lg-0 info">
                            <h2 className="text-primary mb-3">I'm</h2>
                            <p className="mb-3 title">Rohan Patil</p>
                            <p className="typed-text-output d-inline text-light typewriter">
                            <Typewriter
                                words={["MERN Full Stack Web Developer","Web Designer", "Web Developer", "Front End Developer", "Back End Developer"]}
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

                            <div className="d-flex align-items-center">
                                <a href={resume} download="resume"  className="btn btn-primary py-3 px-4 cv-btn">Download CV</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid main-img" src="./Images/Me.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
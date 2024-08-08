import React,{useEffect} from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file

import { skills } from "../../Data/skills";

export default function Skills() {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Set the animation duration in milliseconds
          once: false, // Whether animation should happen only once - while scrolling down
        });
      }, []);


    return (
        <>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" data-aos="fade-right">
                <h2 className="display-5 mb-5 text-center" style={{fontWeight : "bold",fontSize : "40px"}}>SKILLS & EXPERIENCE</h2>
                <div className="row align-items-center">
                    <div className="skill-gridy">
                        {skills.map((value) => {
                            return (
                                <>
                                    <style>
                                        {
                                            `
                                            @keyframes bar{
                                                0% {width: 0;}
                                                100% {width: ${value.bar}}
                                            }
                                        `
                                        }
                                    </style>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">{value.technology}</h6>
                                            <h6 className="font-weight-bold">{value.percentage}</h6>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                style={{
                                                    width: `${value.percentage}`,
                                                    background: `${value.color}`,
                                                }}
                                                role="progressbar"
                                                aria-valuenow={value.bar}
                                                aria-valuemin=""
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

import React, { useEffect } from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file

import { projects } from "../../Data/Projects"
import { Link } from "react-router-dom";


export default function Grid() {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Set the animation duration in milliseconds
            once: false, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <>
            <div className="">
                <div className="row" data-aos="fade-up">
                    {
                        projects.map((value) => {
                            return (
                                <>
                                    <div className="col-lg-4" data-aos={`${value.animation}`}>
                                        <div className="text-container ml-2">
                                            <div className="image-container mt-5">
                                                <a href="">
                                                    <img className="img-fluid project-img" src={value.img} alt="alternative" />
                                                </a>
                                            </div>
                                            <p className="mt-1 links"><strong>For: </strong>{value.title}<strong> Project: </strong>{value.description.slice(0, 35) + "..."}<Link to={value.links}>Read More</Link></p>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
import React,{useEffect} from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file

import Grid from "./Grid"

export default function Projects() {
        
    useEffect(() => {
        AOS.init({
          duration: 1200, // Set the animation duration in milliseconds
          once: false, // Whether animation should happen only once - while scrolling down
        });
      }, []);


    return (
        <>
            <div id="projects" className="basic-3" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Delivered projects</h2>
                            <p className="p-heading">Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops</p>
                        </div>
                    </div>
                </div>
            </div>

          <Grid />
        </>
    )
}
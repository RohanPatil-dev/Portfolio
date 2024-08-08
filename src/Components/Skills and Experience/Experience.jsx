import React,{useEffect} from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file

export default function Experience() {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Set the animation duration in milliseconds
          once: false, // Whether animation should happen only once - while scrolling down
        });
      }, []);

    return (
        <>
            <div class="col-lg-6 experience-div" data-wow-delay="0.5s" data-aos="fade-left">

                <h2 class="experience">
                    EXPERIENCE
                </h2>

                <div class="tab-content experienced">
                    <div>
                        <div>
                            <h4>MERN Stack Web Developer</h4>
                            <h5>2024 - Present</h5>
                            <p>Scalefull Technologies LLP</p>
                        </div>

                        <div>
                            <h4>BCCA(B.Com and Computer Application)</h4>
                            <h5>2019 - 2022</h5>
                            <p>R.T.M.N.U University</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h4>HSC</h4>
                            <h5>2018 - 2019</h5>
                            <p>D.R.B Sindhu college</p>
                        </div>

                        <div>
                            <h4>SSC</h4>
                            <h5>2016 - 2017</h5>
                            <p>P.M.S High School</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
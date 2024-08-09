import React,{useEffect} from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function About() {

const location = useLocation()

    useEffect(() => {
        AOS.init({
          duration: 1200, // Set the animation duration in milliseconds
          once: false, // Whether animation should happen only once - while scrolling down
        });
      }, []);

  return (
    <>
       <div class="" data-aos="fade-up" > 
            <div class="about-gridy" >
                <div class="about-img">
                        <img class="skills_img" src="./Images/about-us.png" alt="" />
                </div>

                    <div class="main_title text-left">
                        <h1>LET'S  <br />
                            INTRODUCE ABOUT <br />
                            MYSELF</h1>
                        <p className="about-desc">
                        I am a passionate web developer.I create dynamic and user-friendly websites. My expertise spans across frontend and backend development, with a focus on delivering seamless user experiences and efficient code.
                        </p>
                        <p className="about-desc">
                        I believe in continuous learning and staying up-to-date with the latest trends in web development. My approach is user-centric, ensuring that every project I work on is not just visually appealing but also functional and efficient.  </p>
                    </div>
                </div>
            </div>
   

    {location.pathname === "/about" ? <Footer/> : <></>}
      
    </>
  )
}
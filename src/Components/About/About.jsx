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
                            Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven 
                            midst their. Beast creepeth. Fish days.
                        </p>
                        <p className="about-desc">
                            Is give may shall likeness made yielding spirit a itself together created after sea 
                            is in beast beginning signs open god you're gathering whose gathered cattle let. 
                            Creature whales fruit unto meat the life beginning all in under give two.
                        </p>
                    </div>
                </div>
            </div>
   

    {location.pathname === "/about" ? <Footer/> : <></>}
      
    </>
  )
}
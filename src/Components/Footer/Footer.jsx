import React,{useEffect} from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file

import { contact } from "../../Data/Contact"
import Copyright from "./Copyright"

export default function Footer() {    
  useEffect(() => {
      AOS.init({
        duration: 1200, // Set the animation duration in milliseconds
        once: false, // Whether animation should happen only once - while scrolling down
      });
    }, []);

  return (
    <>
      <div data-aos="flip-up">
      <div class="footer bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="social-container">
                      {
                        contact.map((value)=>{
                            return(
                                <>
                                    <a className="btn" href={value.links} target="_blank"><img src={value.img} alt="Icons Not Found !" height="40px" /></a>
                                </>
                            )
                        })
                      }
                    </div> 
                </div> 
            </div> 
        </div>
    </div>
    <Copyright />
      </div>
    </>
  )
}
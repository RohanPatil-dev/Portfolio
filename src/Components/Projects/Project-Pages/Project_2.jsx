import React,{useEffect} from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file

import { healthcare } from "../../../Data/Projects/Project_data"
import Footer from "../../Footer/Footer"

export default function Project_2() {
  
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set the animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide w-75 container mt-4" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {
            healthcare.img.map((value, index) => {
              return (
                <>
                  <div className={index == 0 ? `carousel-item active` : "carousel-item"}>
                    <img className="d-block w-100" src={value} alt={`Image ${index + 1} Not Found !`} />
                  </div>
                </>
              )
            })
          }
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

       <div className="container mt-5 text-secondary" data-aos="fade-top"> 
           <h5>{healthcare.description}</h5>
       </div>

       <ul className="container list mt-5">
            {
              healthcare.key_features.map((value,index)=>{
                 return(
                   <>
                      <li data-aos="fade-left" key={index}><p className="description">{value.title} : <span>{value.description}</span></p></li>
                   </>
                 )
              })
            }
       </ul>

       <Footer />
      </>

  )
}
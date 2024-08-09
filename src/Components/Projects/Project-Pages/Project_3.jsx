import React, { useEffect } from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file

import { admin } from "../../../Data/Projects/Project_data"
import Footer from "../../Footer/Footer"
import { Link } from "react-router-dom";

export default function Project_3() {

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
            admin.img.map((value, index) => {
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
        <h5>{admin.description}</h5>
      </div>

      <ul className="container list mt-5">
        {
          admin.key_features.map((value, index) => {
            return (
              <>
                <li data-aos="fade-left" key={index}><p className="description">{value.title} : <span>{value.description}</span></p></li>

                <ul className="ml-5 nested">
                  {
                    value.title_1 && value.title_2 && value.title_3 && value.title_4 ? <>
                      <li data-aos="fade-left" ><p className="description">{value.title_1} : <span>{value.description_1}</span></p></li>
                      <li data-aos="fade-left" ><p className="description">{value.title_2} : <span>{value.description_2}</span></p></li>
                      <li data-aos="fade-left" ><p className="description">{value.title_3} : <span>{value.description_3}</span></p></li>
                      <li data-aos="fade-left" ><p className="description">{value.title_4} : <span>{value.description_4}</span></p></li>

                    </> : ""
                  }
                </ul>
              </>
            )
          })
        }
      </ul>

      <div className="repo">
           <Link to="https://github.com/RohanPatil-dev/Machine-Test-Backend" target="_blank"><img src="./Images/github-icon.png" height="70px" alt="" /></Link>
           <p>Project Repository</p>
       </div>

      

      <Footer />
    </>

  )
}
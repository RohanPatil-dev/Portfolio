import React, { useEffect } from "react"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file

import { service } from "../../Data/services";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Service() {

    const location = useLocation()

    useEffect(() => {
        AOS.init({
            duration: 1200, // Set the animation duration in milliseconds
            once: false, // Whether animation should happen only once - while scrolling down
        });
    }, []);


    return (
        <>
            <div className="container service-div" data-aos="fade-up">
                <div className="service_title">
                    <h2>SERVICE OFFERS </h2>
                    <p className="service-name">
                        Ready to bring your web application idea to life? Contact us today to discuss your project and learn how our MERN stack development services can help you achieve your goals.
                    </p>
                </div>

                <div className="row feature_inner">
                    {
                        service.map((value) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-6" data-aos={`${value.animation}`}>
                                        <div className="feature_item">
                                            <img src={`${value.image}`} alt="Image Not Found !" />
                                            <h4>{value.service_name}</h4>
                                            <p>{value.service_description}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>

            {location.pathname === "/services" ? <Footer /> : <></>}
        </>
    )
}
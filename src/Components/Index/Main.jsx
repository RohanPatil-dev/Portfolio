import React from "react"
import "../../CSS/portfolio.css"
import "../../CSS/project.css"
import "../../CSS/media.css"

import Banner from "../Banner/Banner"
import About from "../About/About"
import Containers from "../Skills and Experience/Containers"
import Service from "../Services/Service"
import Projects from "../Projects/Projects"
import Footer from "../Footer/Footer"

export default function Index() {
  return (
    <>
        <Banner />
         <About />
        <Containers />
        <Service />
        <Projects />
        <Footer /> 
    </>
  )
}
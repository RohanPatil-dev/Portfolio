import React from "react"
import Banner from "../Banner/Banner"

import "../../CSS/portfolio.css"
import "../../CSS/project.css"
import "../../CSS/media.css"
import About from "../About/About"

import Services from "../Services/Service"
import Containers from "../Skills and Experience/Containers"
import Footer from "../Footer/Footer"
import Projects from "../Projects/Projects"

export default function Main() {
  return (
    <>
      <Banner/>
      <About />
      <Containers/>
      <Services />
      <Projects />
      <Footer />
    </>
  )
}
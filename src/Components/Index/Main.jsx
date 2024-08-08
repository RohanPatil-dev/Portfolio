import React from "react"
import Navbar from "../Navbar/Navbar"
import Banner from "../Banner/Banner"

import "../../CSS/portfolio.css"
import "../../CSS/project.css"
import "../../CSS/media.css"

import About from "../About/About"

import Service from "../Services/Service"
import Projects from "../Projects/Projects"
import Footer from "../Footer/Footer"
import Containers from "../Skills and Experience/Containers"

export default function Index() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <About />
      <Containers />
      <Service />
      <Projects />
      <Footer />
    </>
  )
}
import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{borderBottom :"2px solid gray"}}>
        <Link to="/" className="navbar-brand logo_h"><img src="./Images/MERN Stack.png" className="logo" alt="Logo Not Found !" height="70px" /></Link>
        <p className="nav-title">Innovation and Development</p>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/services">Services</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <header className="header_area bg-dark header">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container">

                            <Link to="/" className="navbar-brand logo_h"><img src="./Images/MERN Stack.png" className="logo" alt="Logo Not Found !" /></Link>
                            <p className="nav-title">Innovation and Development</p>
                            <button class="navbar-toggler toggles" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav justify-content-end">
                                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <Outlet />
        </>
    )
}
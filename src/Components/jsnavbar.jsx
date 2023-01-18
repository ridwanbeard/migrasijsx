import React from 'react'
import Modallogout from '../Components/modallogout'

function JSNavbar() {

    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><a href="index.html">Laborlab</a></h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/JSProfile">Profile</a></li>
                            <li><a className="nav-link scrollto" href="/JSApplication">My Application</a></li>
                            <li>
                                {<Modallogout/>}
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default JSNavbar
import React from 'react'
import Modallogout from '../Components/modallogout'

function Empnavbar() {
    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><a href="index.html">Laborlab</a></h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/EmpProfile">Profile</a></li>
                            <li><a className="nav-link scrollto" href="/Emppostjob">Post Job</a></li>
                            <li><a className="nav-link scrollto" href="/Empmyjobs">My Jobs</a></li>
                            <li><a className="nav-link scrollto" href="/Empfindjs">Find Jobseeker</a></li>
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

export default Empnavbar
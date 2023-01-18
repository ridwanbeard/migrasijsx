import React from 'react'
import ImageHero from '../eNno/assets/img/hero-img.png'
import Modallogin from './modallogin'
import Modalregister from './modalregister'


function Hero() {
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Welcome to Laborlab</h1>
                            <h2>Indonesia Leading Talent Ecosystem</h2>
                            <div className="d-flex">
                                
                                {<Modallogin/>}
                                {<Modalregister/>}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={ImageHero} className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
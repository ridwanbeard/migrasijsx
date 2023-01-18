import React, { useEffect, useState } from 'react'
import ImageHero from '../eNno/assets/img/hero-img.png'

function Herofetchemp() {
    const [name, setName] = useState('')
    const token = document.cookie

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "token": token
    });

    const fetchingData = () => {
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("http://127.0.0.1:5000/employer/profile", requestOptions)
            .then(response => response.json())
            .then(result => setName(result.name))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchingData()
    }, []);

    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Welcome {name}</h1>
                            <h2>In Laborlab</h2>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={ImageHero} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Herofetchemp;
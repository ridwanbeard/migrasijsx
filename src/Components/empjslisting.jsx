import React, { useState, useEffect } from 'react';

function Empjslisting() {
    const jslisting = () => {
        fetchingData()
    }
    const token = document.cookie;

    const [jslist, setJslist] = useState([]);

    const name = localStorage.getItem('name');
    const gender = localStorage.getItem('gender');
    const education = localStorage.getItem('education');
    const major = localStorage.getItem('major');

    var myHeaders = new Headers();
    myHeaders.append("Access-Token", token);
    myHeaders.append("Content-Type", "application/json");

    const fetchingData = () => {
        var raw = JSON.stringify({
            "name": name,
            "gender": gender,
            "education": education,
            "major": major
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        console.log(raw);

        fetch("http://127.0.0.1:5000/searchjobseeker", requestOptions)
            .then(response => response.json())
            .then(x => setJslist(x))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchingData()
    }, [])

    const result = jslist.map((y) => {
    return (
        <div className="container" id="divListingJob" key={y.idjobseeker}>
            <div className="row">
                <div className="col">
                    <ul className="ulListingJob">
                        <li>
                            <div>
                                <h4>Jobseeker Name : {y.name}</h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Gender : {y.gender}</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Education : {y.education}</p>
                            </div>
                        </li>
                                <li>
                                    <div>
                                        <p>Major : {y.major}</p>
                                    </div>
                                </li>
                    </ul>
                </div>
            </div>
        </div>
    )}
    )

    return(
        <div>
            <button type="submit" className="btn btn-primary" onClick={jslisting}>Search</button>
            {result}
        </div>
    )
}

export default Empjslisting
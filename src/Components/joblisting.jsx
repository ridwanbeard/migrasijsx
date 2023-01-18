import React, { useState, useEffect } from 'react';
import Modaljob from "../Components/modaljob"

function Joblisting() {
    const jobCriteria = () => {
        fetchingData()
    }

    const [joblist, setJoblist] = useState([]);
    const title = localStorage.getItem('title')
    const category = localStorage.getItem('category')
    const salary = localStorage.getItem('salary')
    const area = localStorage.getItem('area')

    const fetchingData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": title,
            "salary": salary,
            "category": category,
            "area": area
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/getjoboncriteria", requestOptions)
            .then(response => response.json())
            .then(result => {setJoblist(result)})
            .catch(error => console.log('gagal', error));
    }

    useEffect(() => {
        fetchingData()
    }, [])

    const [job, setJob] = useState([]); 
    const [show, setShow] = useState(false);
    const handleShow = (e) => {
        setShow(true)
        const buttonId = e.currentTarget.id
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/getjobdetailxlog/" + buttonId, requestOptions)
            .then(response => response.json())
            .then(x => {setJob(x[0])})
            .catch(error => console.log('error', error));
    };
    const handleClose = () => {
        setShow(false)
        setJob([])
    }

    const result = joblist.map((y) => {
        return (
            <section key={y.Job_ID} className="mb-0">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-2">
                    <img src="eNno/assets/img/CompanyLogo/${y.Job_ID}.png" alt="logo"/>
                </div> */}

                        <div className="col">
                            <ul className="ulListingJob">
                                <li>
                                    <div>
                                        Job ID : {y.Job_ID}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4 id="jobTitleList">Job Title : {y.Job_Title}</h4>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Requirement : {y.Job_Requirement}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Salary : {y.Job_Salary}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Area : {y.Area}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Expire Date :{y.Expired_Date}
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-1">
                            <button type="button" className="btn btn-outline-primary btn-sm me-1" data-bs-toggle="modal" id={y.Job_ID} onClick={(e) => { handleShow(e) }}>Detail</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    })

    return (
        <div>
            <button type="submit" className="btn btn-primary" onClick={jobCriteria}>Search</button>
            {result}
            <Modaljob show={show} handleClose={handleClose} job={job}/>

        </div>
    )
}

export default Joblisting;
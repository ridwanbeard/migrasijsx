import React, { useState, useEffect } from "react";
import Empmodaljobdetail from "../Components/empmodaljobdetail";
import Empnavbar from '../Components/empnavbar';

function Empmyjobs() {

    const [jobs, setJobs] = useState([]);
    const token = document.cookie

    const fetchingData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Access-Token", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/getallpostedjob", requestOptions)
            .then(response => response.json())
            .then(x => setJobs(x))
            .catch(error => console.log('error', error));
    };

    useEffect(() => {
        fetchingData()
    }, []);
    

    const [show, setShow] = useState(false);
    const handleShow = (e) => {
        setShow(true)
        const buttonId = e.currentTarget.id

        var myHeaders = new Headers();
        myHeaders.append("Access-Token", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/getapostedjob/" +buttonId, requestOptions)
            .then(response => response.json())
            .then(x => {setJobs(x)})
            .catch(error => console.log('error', error));
    }


    const handleClose = () => {
        setShow(false)
        setJobs([])
    }

    const result = jobs.map((y) => {
        return (
            <div key={y.Job_ID} style={{ paddingTop: "100pt" }} >
                <div className="container" id="divListingJob">
                    <div className="row">
                        <div className="col">
                            <ul className="ulListingJob">
                                <li>
                                    <div>
                                        <h4 id="jobTitleList">Job Title : {y.Job_Title}</h4>
                                        <p hidden id="Job_IDls"></p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Requirement : {y.Job_Requirement}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Salary : {y.Job_Title}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Area : {y.Area}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Expire Date : {y.Expired_Date}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <button type="button" className="btn btn-outline-primary btn-sm me-1" data-bs-toggle="modal" id={y.Job_ID} onClick={(e) => { handleShow(e) }}>
                                Detail
                            </button>
                            <button>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Empnavbar/>
            {result}
            <Empmodaljobdetail show={show} handleClose={handleClose} job={jobs} />
        </div>
    );
}

export default Empmyjobs;
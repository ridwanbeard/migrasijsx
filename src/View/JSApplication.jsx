import React, { useState, useEffect } from "react";
import JSNavbar from "../Components/jsnavbar";

function JSApplication(){

    const [applied, setApplied] = useState([]);
    const token = document.cookie

    var myHeaders = new Headers();
    myHeaders.append("Access-Token", token);

    const fetchingData = () => {
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/appliedjob", requestOptions)
            .then(response => response.json())
            .then(x => setApplied(x))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchingData()
    }, []);
    
    const result = applied.map((y, index) => {
        return (
            <div>
                <div className="container" id="divListingApp">
                    <div className="row">
                        <div className="col-2">
                            {/* <img src="eNno/assets/img/CompanyLogo/${item.Job_ID}.png"> */}
                        </div>
                        <div className="col">
                            <ul className="ulListingJob">
                                <li>
                                    <div>
                                        <h4 id="jobTitleList">Job Title : {y.Job_Title}</h4>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Company Name : {y.Company_Name}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Salary : {y.Job_Salary}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Job Description : {y.Job_Descriptiion} 
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Job Posting Date : {y.Job_Postingdate}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Job Expire Date : {y.Job_Expiredate}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Application Date : {y.Application_Date}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Application Status : {y.Application_Status}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div>
            <JSNavbar/>
            {result}
        </div>
    )
}

export default JSApplication;
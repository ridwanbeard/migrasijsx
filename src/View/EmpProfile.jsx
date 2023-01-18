import React, { useState, useEffect } from "react";
import Empnavbar from "../Components/empnavbar";
// import Modalempupdateprofile from "../Components/empmodalupdateprofile"

function EmpProfile() {
    const [profiles, setProfiles] = useState([]);
    const token = document.cookie

    var myHeaders = new Headers();
    myHeaders.append("Access-Token", token);

    const fetchingData = () => {
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/employer/empprofile", requestOptions)
            .then(response => response.json())
            .then(x => setProfiles(x))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchingData()
    }, []);
        
        
    return (
        <div>
            <Empnavbar/>
            return (
            <div>
                <ul style={{paddingTop: "100pt"}}>
                <li>
                    <div>
                        <label className="form-label">Username : {profiles.username}<span id="username"></span></label>
                    </div>
                </li>
                <li>
                    <div>
                        <label className="form-label">Name : {profiles.name}<span id="name"></span></label>
                    </div>
                </li>
                <li>
                    <div>
                        <label className="form-label">Email : {profiles.email}<span id="email"></span></label>
                    </div>
                </li>
                <li>
                    <div>
                        <label className="form-label">Bio : {profiles.bio}<span id="bio"></span></label>
                    </div>
                        </li>
                </ul>
                    <div>
                            {/* {<Modalempupdateprofile/>} */}
                        <button>
                            Delete Profile
                        </button>
                    </div>
            </div>)
    
        </div>
    )
}

export default EmpProfile
import JSNavbar from "../Components/jsnavbar";
import React, { useState, useEffect } from "react";
import Modaljsupdateprofile from "../Components/jsmodalupdateprofile"

function JSProfile(){

    const [profile, setProfile] = useState([]);
    const token = document.cookie

    var myHeaders = new Headers();
    myHeaders.append("Access-Token", token);

    const fetchingData = () => {
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/jobseeker/profile", requestOptions)
        .then(response => response.json())
        .then(x => setProfile(x))
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchingData()
    }, []);

    const result = profile.map((y) => {
        return (
            <div>
                <ul style={{paddingTop: "100pt"}}>
                <li>
                    <div>
                        <label className="form-label">Username : {y.username}<span id="username"></span></label>
                    </div>
                </li>
                <li>
                    <div>
                        <label className="form-label">Name : {y.name}<span id="name"></span></label>
                    </div>
                </li>
                <li>
                    <div>
                        <label className="form-label">Email : {y.email}<span id="email"></span></label>
                    </div>
                </li>
                <li>
                    <div>
                        <label className="form-label">Bio : {y.bio}<span id="bio"></span></label>
                    </div>
                        </li>
                </ul>
                    <div>
                        
                            {<Modaljsupdateprofile/>}
                        <button>
                            Delete Profile
                        </button>
                    </div>
            </div>)
    })
    
    return(
        <div>
            <JSNavbar/>
            {result}
        </div>
    )
            
}

export default JSProfile;
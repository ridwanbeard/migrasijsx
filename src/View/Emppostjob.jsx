import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Empnavbar from '../Components/empnavbar';

function Emppostjob() {
    const token = document.cookie
    // const [job, setJob] = useState('')

    const [title, setTitle] = useState('')
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const [description, setDescription] = useState('')
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const [requirement, setRequirement] = useState('')
    const handleRequirement = (e) => {
        setRequirement(e.target.value);
    }

    const [salary, setSalary] = useState('')
    const handleSalary = (e) => {
        setSalary(e.target.value);
    }

    const [category, setCategory] = useState('')
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const [expdate, setExpdate] = useState('')
    const handleExpdate = (e) => {
        setExpdate(e.target.value);
    }


    const [area, setArea] = useState('')
    const handleArea = (e) => {
        setArea(e.target.value);
    }

    const postjob = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": title,
            "description": description,
            "requirement": requirement,
            "salary": salary,
            "category": category,
            "area": area,
            "expiredate": expdate,
            "Access-Token": token
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/create/job", requestOptions)
            .then(response => response.json())
            .then(result => alert("Job Post Success"))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div>
                <Empnavbar />
            </div>
            <div style={{paddingTop: "100pt"}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicJobTitle">
                        <Form.Label>Job Title </Form.Label>
                        <Form.Control type="" placeholder="Enter Job Title" onChange={handleTitle} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicJobDescription">
                        <Form.Label>Job Description </Form.Label>
                        <Form.Control type="" placeholder="Enter Job Description" onChange={handleDescription} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRequirement">
                        <Form.Label>Job Requirement </Form.Label>
                        <Form.Control type="" placeholder="Enter Job Requirement" onChange={handleRequirement} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSalary">
                        <Form.Label>Salary </Form.Label>
                        <Form.Control type="" placeholder="Enter Salary per Mounth" onChange={handleSalary} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicJobCategory">
                        <Form.Label>Job Category </Form.Label>
                        <Form.Control type="" placeholder="Enter Job Category" onChange={handleCategory} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicArea">
                        <Form.Label>Placement Area </Form.Label>
                        <Form.Control type="" placeholder="Enter Placement Area" onChange={handleArea} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicExpire">
                        <Form.Label>Expire Date </Form.Label>
                        <Form.Control type="" placeholder="Enter Expire Date" onChange={handleExpdate} />
                    </Form.Group>
                </Form>
            </div>
            <div>
                <button onClick={postjob}>
                    Post Job
                </button>

                <button>
                    Clear Fields
                </button>
            </div>
        </>
    );
}

export default Emppostjob;
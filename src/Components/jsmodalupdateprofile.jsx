import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Modaljsupdateprofile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState('');
    const [major, setMajor] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleGender = (e) => {
        setGender(e.target.value)
    }
    const handleEducation = (e) => {
        setEducation(e.target.value)
    }
    const handleMajor = (e) => {
        setMajor(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleBio = (e) => {
        setBio(e.target.value)
    }

    const token = document.cookie

    const jsupdateprofile = () => {
        var myHeaders = new Headers();
        myHeaders.append("Access-Token", token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": username,
            "name": name,
            "gender": gender,
            "education": education,
            "major": major,
            "email": email,
            "bio": bio
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/jobseeker/updateprofile", requestOptions)
            .then(response => response.text())
            .then(result => {alert('Update profile success')
                }
            )
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update Profile
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label>Username </Form.Label>
                            <Form.Control type="" placeholder="Enter Username" onChange={handleUsername}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Label>Full Name </Form.Label>
                            <Form.Control type="" placeholder="Enter Full Name" onChange={handleName}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicGender">
                            <Form.Label>Gender </Form.Label>
                            <Form.Control type="" placeholder="Enter Gender" onChange={handleGender}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEducation">
                            <Form.Label>Education </Form.Label>
                            <Form.Control type="" placeholder="Enter Education" onChange={handleEducation}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMajor">
                            <Form.Label>Major </Form.Label>
                            <Form.Control type="" placeholder="Enter Major" onChange={handleMajor}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="" placeholder="Enter Email" onChange={handleEmail}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicBio">
                            <Form.Label>Bio </Form.Label>
                            <Form.Control type="" placeholder="Enter Bio" onChange={handleBio}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={jsupdateprofile}>
                        Update
                    </Button>
                    <Button onClick={() => { this.handleModal() }}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modaljsupdateprofile
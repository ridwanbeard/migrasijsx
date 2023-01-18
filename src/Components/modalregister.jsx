import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Modalregister() {

  const [role, setRole] = useState('')
  const setUser = () =>{
    setRole('jobseeker')
  } 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [username, setUsername] = useState('')
  const handleUsername = (e) =>{
    setUsername(e.target.value);
  }
  const [password, setPassword] = useState('')
  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }
  const [name, setName] = useState('')
  const handleName = (e) =>{
    setName(e.target.value);
  }
  const [email, setEmail] = useState('')
  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }

  const register = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if ( role ==='jobseeker'){
      var raw = JSON.stringify({
        "username": {username},
        "password": {password},
        "name": {name},
        "email": {email}
      });
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
      fetch("http://127.0.0.1:5000/jobseeker/register", requestOptions)
        .then(response => response.text())
        .then(result => {console.loh(result) 
          alert('Register account as Jobseeker success. Please login using your Username and Password!')
        })
        .catch(error => console.log('error', error));
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <DropdownButton id="dropdown-basic-button" title="Register As">
              <Dropdown.Item href="#/action-1" onClick={setUser}>Jobseeker</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={setUser}>Employer</Dropdown.Item>
            </DropdownButton>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="" placeholder="Enter Username" onChange={handleUsername}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="" placeholder="Enter Full Name" onChange={handleName}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={register}>
            Register
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalregister;
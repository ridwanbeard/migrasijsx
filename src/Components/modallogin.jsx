import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Modallogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const loginUser = () => {
    if (username === "" || password === "") {
      alert('Please input username & password')
    }
    else {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic " + btoa(username + ":" + password));

      var raw = "";

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:5000/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status === "trueJobS") {
            alert("Login success as Jobseeker");
            document.cookie = result.token + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/"; window.location.href = "/JSHome";
          }
          else if (result.status === "trueEmp") {
            alert("Login success as Employer");
            document.cookie = result.token + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/"; window.location.href = "/EmpHome";
          }

          else { alert("login Gagal") }
        })
        .catch(error => {
          alert('gagal fetching')
          console.log('error', error)
        })
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="" placeholder="Enter Username" onChange={handleUsername} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={loginUser}>
              Login
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Modallogin;
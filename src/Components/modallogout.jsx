import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modallogout() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // const logout = () => {
    //     document.cookie.removeItem('token');
    //     window.location.href = "/"
    //   };

    const logout = () => {
      document.cookie = "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.localStorage.clear();
      window.location.href='/'
    }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Logout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure to logout?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Modallogout
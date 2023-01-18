import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Empmodaljobdetail({show,handleClose,jobs}) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Job Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>
                            <div>
                                <label className="form-label">Title : {jobs.Job_Title}<span id="username"></span></label>       
                            </div>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onHide={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    </>        
    )
}

export default Empmodaljobdetail
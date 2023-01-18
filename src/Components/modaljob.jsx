import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Modaljob({show,handleClose,job}) {

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
                                <label className="form-label">Title : {job.Job_Title}<span id="username"></span></label>       
                            </div>
                        </li>
                        <li>
                            <div>
                                <label className="form-label">Description : {job.Job_Description}<span id="username"></span></label>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label className="form-label">Salary : {job.Job_Salary}<span id="username"></span></label>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label className="form-label">Category : {job.Job_Category}<span id="username"></span></label>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label className="form-label">Requirement : {job.Job_Requirement}<span id="username"></span></label>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label className="form-label">Placement Area : {job.Area}<span id="username"></span></label>
                            </div>
                        </li>   
                        <li>
                            <div>
                                <label className="form-label">Posting Date : {job.Posting_Date}<span id="username"></span></label>
                            </div>
                        </li>   
                        <li>
                            <div>
                                <label className="form-label">Expired Date : {job.Expired_Date}<span id="username"></span></label>
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
                        {/* <Button variant="primary" onClick={()=>{handleShow();fetchingData()}} >
                Detail
            </Button> */}
        </>
            
    )
}

export default Modaljob
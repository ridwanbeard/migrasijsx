import React from 'react'

function jsmodaldeleteprofile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = document.cookie

    const deleteacc = () => {
        var myHeaders = new Headers();
        myHeaders.append("Access-Token", token);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/jobseeker/deleteaccount", requestOptions)
            .then(response => response.text())
            .then(result => Alert('This account has been deleted'))
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete Profile
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure want tot delete this account?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteacc}>
                        Delete Account
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default jsmodaldeleteprofile
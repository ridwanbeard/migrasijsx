import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class Modaljsdeleteaccount extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  handleModal() {
    this.setState({ show: !this.state.show })
  }
  render() {
    return (
      <div>
        <Button onClick={() => { this.handleModal() }}>
          Delete Account
        </Button>

        <Modal show={this.state.show} onHide={() => { this.handleModal() }}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure to delete your account?
          </Modal.Body>
          <Modal.Footer>
            <Button>
              Yes
            </Button>
            <Button onClick={() => { this.handleModal() }}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Modaljsdeleteaccount;
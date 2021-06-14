import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";

export default class ProfilePicUpdater extends Component {
  render() {
    return (
      <>
        <Modal
          size="lg"
          show={this.props.open}
          onHide={this.props.close}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Large file input example</Form.Label>
              <Form.Control type="file" size="lg" />
            </Form.Group>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

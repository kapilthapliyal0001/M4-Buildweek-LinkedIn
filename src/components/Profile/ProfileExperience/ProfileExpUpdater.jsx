import { Component } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

export default class ProfileExpUpdater extends Component {
  state = { user: {} };

  componentDidMount = async () => {
    const userId = "60c73bf1291930001560aba3";
    const endpointPutExp = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experience`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

    try {
      let putExpResponse = await fetch(endpointPutExp, {
        method: "PUT",
        headers: {
          Authorization: bearerTokenHedri,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.user),
      });

      let updateData = await putExpResponse.json();
      console.log(updateData);
      this.setState({ user: updateData });
    } catch (err) {
      console.log(err);
    }
  };
  handleSubmit = () => {
    this.setState({ user: this.target.value });
  };

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
              Update Your Experience
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="expRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What was your job title?"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="expCompany">
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" placeholder="Enter Company Name" />
                </Form.Group>
              </Row>
              <Form.Group controlId="expDesc">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Describe your duties & role"
                />
              </Form.Group>
              <Form.Group controlId="expLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Where is the company located"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Reset</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

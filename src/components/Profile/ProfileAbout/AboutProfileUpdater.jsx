import { Component } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

export default class ProfileAboutUpdater extends Component {
  state = { user: {} };

  componentDidMount = async () => {
    const userId = "60c73bf1291930001560aba3";
    const endpointGetMyProfile = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

    try {
      let putResponse = await fetch(endpointGetMyProfile, {
        method: "PUT",

        headers: {
          Authorization: bearerTokenHedri,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.user),
      });

      let updateData = await putResponse.json();
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
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Col} controlId="profileBio">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Describe yourself or what you are about"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

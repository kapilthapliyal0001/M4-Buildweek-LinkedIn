import { Component, createRef, React } from "react";
import { Modal, Form, Row, Col, Button, Image } from "react-bootstrap";
import { CameraFill } from "react-bootstrap-icons";

export default class ProfilePicUpdater extends Component {
  state = { user: {} };

  onFileChange = (event) => {
    this.setState({ user: { image: event.target.files[0] } });
  };

  handleProfileUpdate = async (e) => {
    const formData = new FormData();
    formData.append("profile", this.state.user.image);
    // const userId = "60c73bf1291930001560aba3";
    const endpointPUTprofile = `https://striveschool-api.herokuapp.com/api/profile/me/picture`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

    try {
      let response = await fetch(endpointPUTprofile, {
        method: "POST",
        headers: {
          Authorization: bearerTokenHedri,
        },
        body: formData,
      });
      console.log(response.ok);
      if (response.ok) {
        alert("Profile Updated!");
        this.setState({
          user: {
            image: "",
          },
        });
      } else {
        alert(
          "We have some kind of issue, don't ask me - it's for you to solve"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const modalStyle = {
      // background: "black",
      overflow: "hidden",
      padding: 0,
      borderTop: "grey solid 1px",
    };
    console.log("ref -", this.fileInput);
    return (
      <>
        <Modal
          size="lg"
          show={this.props.open}
          onHide={this.props.close}
          aria-labelledby="profilePicModal"
        >
          <Form onSubmit={(e) => this.handleProfileUpdate(e)}>
            <Modal.Body style={modalStyle} className="bg-dark">
              <Row className="p-5 text-center">
                <Col>
                  <Image id="jumboProfile_img_update" src={this.props.image} />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-white" style={modalStyle}>
              <Row className="text-center flex-fill align-items-center">
                <Col xs={8} className="mt-2">
                  <Form.Group>
                    <Form.Control
                      id="image"
                      type="file"
                      placeholder={this.props.image}
                      onChange={this.onFileChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <CameraFill
                    onClick={(e) => this.handleProfileUpdate(e)}
                    type="submit"
                  />
                  <p>Update Photo</p>
                </Col>
              </Row>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

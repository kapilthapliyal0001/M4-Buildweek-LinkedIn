import { Component, React } from "react";
import { Modal, Form, Row, Col, Button, Image } from "react-bootstrap";
import { CameraFill } from "react-bootstrap-icons";

export default class ProfilePicUpdater extends Component {
  state = { user: {} };

  fileInput = React.createRef();

  handleProfileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", this.fileInput.current.files[0]);
    console.log(formData);

    // const userId = "60c73bf1291930001560aba3";
    const endpointPUTprofile = `https://striveschool-api.herokuapp.com/api/profile/`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

    try {
      let response = await fetch(endpointPUTprofile, {
        method: "PUT",
        headers: {
          Authorization: bearerTokenHedri,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.user),
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
  inputChange = (e) => {
    let id = e.target.id;
    this.setState({
      user: { ...this.state.user, [id]: e.target.value },
    });
  };

  render() {
    const modalStyle = {
      // background: "black",
      overflow: "hidden",
      padding: 0,
      borderTop: "grey solid 1px",
    };
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
                      ref={this.fileInput}
                      // placeholder={this.props.image}
                      // onChange={(e) => this.inputChange(e)}
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

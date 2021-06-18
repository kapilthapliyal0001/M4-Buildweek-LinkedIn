import { Component } from "react";
import { Modal, Form, Image, Col, Button } from "react-bootstrap";

export default class ProfileExpImgUpdater extends Component {
  state = {
    experience: {
      role: "",
      company: "",
      area: "",
      description: "",
      startDate: "",
      endDate: null,
      image: "",
    },
  };
  onFileChange = (event) => {
    this.setState({ experience: { image: event.target.files[0] } });
  };
  handleUpdateExp = async (e) => {
    const formData = new FormData();
    formData.append("profile", this.state.experience.image);
    e.preventDefault();
    console.log("Gonna submit Exp now");
    console.log(this.state.experience);
    let expId = this.props.idExp;
    console.log(expId);
    const userId = "60c73bf1291930001560aba3";
    const endpointPUTExp = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I";
    try {
      let response = await fetch(endpointPUTExp, {
        method: "POST",
        headers: {
          Authorization: bearerTokenHedri,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.experience),
      });
      console.log(response.ok);
      if (response.ok) {
        alert("Experience saved!");
        this.setState({
          selected: "",
          experience: {
            role: "",
            company: "",
            area: "",
            description: "",
            startDate: "",
            endDate: null,
          },
        });
      } else {
        alert("We have another issue");
      }
    } catch (err) {
      console.log(err);
    }
  };

  inputChange = (e) => {
    let id = e.target.id;
    this.setState({
      experience: { ...this.state.experience, [id]: e.target.value },
    });
  };

  render() {
    const { image } = this.state.experience;
    return (
      <>
        <Modal size="lg" show={this.props.open} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Update {this.props.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.handleUpdateExp(e)}>
              <Form.Group as={Col}>
                <Form.Label>Role</Form.Label>
                <Image src={Image} />
                <Form.Control
                  id="role"
                  type="file"
                  placeholder={this.props.image}
                  value={image}
                  onChange={this.onFileChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

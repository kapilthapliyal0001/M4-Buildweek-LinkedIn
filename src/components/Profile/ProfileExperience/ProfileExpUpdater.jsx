import { Component } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

export default class ProfileExpUpdater extends Component {
  state = {
    experience: {
      role: "",
      company: "",
      area: "",
      description: "",
      startDate: "",
      endDate: null,
    },
  };

  handleUpdateExp = async (e) => {
    e.preventDefault();
    console.log("Gonna submit Exp now");
    console.log(this.state.experience);
    let expId = this.props.idExp;
    const userId = "60c73bf1291930001560aba3";
    const endpointPUTExp = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I";
    try {
      let response = await fetch(endpointPUTExp, {
        method: "PUT",
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
        // let updateData = await putExpResponse.json();
        // console.log(updateData);
        // this.setState({ experience: updateData });
      } else {
        alert("We have another issue");
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleDeleteExp = async () => {
    // e.preventDefault();
    console.log("Gonna submit Exp now");
    console.log(this.state.experience);
    let expId = this.props.idExp;
    const userId = "60c73bf1291930001560aba3";
    const endpointDELETEexp = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I";
    try {
      let response = await fetch(endpointDELETEexp, {
        method: "DELETE",
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
        // let updateData = await putExpResponse.json();
        // console.log(updateData);
        // this.setState({ experience: updateData });
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
    const { company, role, area, startDate, description } =
      this.state.experience;

    console.log("This post id:", this.props.idExp);
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
              Update {this.props.id}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.handleUpdateExp(e)}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    id="role"
                    type="text"
                    placeholder={this.props.role}
                    value={role}
                    onChange={(e) => this.inputChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    id="company"
                    type="text"
                    placeholder={this.props.company}
                    value={company}
                    onChange={(e) => this.inputChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Date Started</Form.Label>
                  <Form.Control
                    id="startDate"
                    type="datetime-local"
                    value={startDate}
                    onChange={(e) => this.inputChange(e)}
                  />
                </Form.Group>
              </Row>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="description"
                  type="text"
                  placeholder={this.props.desc}
                  value={description}
                  onChange={(e) => this.inputChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  id="area"
                  type="text"
                  placeholder={this.props.area}
                  value={area}
                  onChange={(e) => this.inputChange(e)}
                />
              </Form.Group>
              <Button
                variant="secondary"
                onClick={() => this.handleDeleteExp()}
              >
                Delete
              </Button>
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

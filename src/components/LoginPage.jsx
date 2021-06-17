import React, { Component } from "react";
import {
  Container,
  Dropdown,
  Button,
  Image,
  Col,
  Row,
  DropdownButton,
} from "react-bootstrap";

export default class LoginPage extends Component {
  state = {
    user: "",
    bearerToken: "",
    userId: "",
  };

  selectUser = () => {
    switch (this.state.user) {
      case "Kapil":
        this.setState({
          bearerToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2Q4YjI5MTkzMDAwMTU2MGFiYTUiLCJpYXQiOjE2MjM2NzAxNTUsImV4cCI6MTYyNDg3OTc1NX0.Lid0KernjdrJ6T9JK4Y_EAbb2bH3Jd92w-gXUFfOsCA",
          userId: "60c73d8b291930001560aba5",
        });
        break;
      case "Hedri":
        this.setState({
          bearerToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM5MzQ1NDUsImV4cCI6MTYyNTE0NDE0NX0.Mj6R-PdAHLE1b2_mB2TCyFpCN4_I5Ppa_TADX20Bkpo",
          userId: "60c73d8b291930001560aba5",
        });
        break;
      default:
        this.setState({
          bearerToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2Q4YjI5MTkzMDAwMTU2MGFiYTUiLCJpYXQiOjE2MjM2NzAxNTUsImV4cCI6MTYyNDg3OTc1NX0.Lid0KernjdrJ6T9JK4Y_EAbb2bH3Jd92w-gXUFfOsCA",
          userId: "60c73d8b291930001560aba5",
        });
    }
  };
  onSelectUser = (e) => {
    let id = e.target.id;
    this.setState({
      user: { ...this.state.user, [id]: e.target.value },
    });
  };

  render() {
    return (
      <>
        <Container className="p-5 bg-light text-center vh-75">
          <Row>
            <Col xs={4}></Col>
            <Col xs={4}>
              <Image src={"https://picsum.photos/200"} id="loginPage_img" />
              <h2>UserName</h2>
              <DropdownButton
                id="dropdown-item-button"
                className="mt-3"
                title="Select A User"
              >
                <Dropdown.Item
                  as="button"
                  id="Helena"
                  onChange={(e) => this.inputChange(e)}
                >
                  Helena
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  id="Kapil"
                  onChange={(e) => this.inputChange(e)}
                >
                  Kapil
                </Dropdown.Item>
                <Dropdown.Item as="button" id="Kristian" disabled>
                  Kristian
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
      </>
    );
  }
}

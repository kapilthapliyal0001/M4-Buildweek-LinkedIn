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
                <Dropdown.Item as="button">Helena</Dropdown.Item>
                <Dropdown.Item as="button">Kapil</Dropdown.Item>
                <Dropdown.Item as="button">Kristian</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
      </>
    );
  }
}

import { Component } from "react";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./MyNav.css";
import * as Icon from "react-bootstrap-icons";
// import MyNavOptions from "./MyNavOptions";
// import myPic from "../MyNav/myPic.jpg";
import {
  InputGroup,
  Container,
  Form,
  Col,
  Row,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
class MyNav extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="white" className="nav-thin" fixed="top">
          <Container>
            <Nav className="ml-5 down-scale">
              <Navbar.Brand href="#home">
                <h1>
                  <i className="bi bi-linkedin fs-1  "></i>
                </h1>
              </Navbar.Brand>

              <Form
                className="mt-2"
                //   onSubmit={() =>
                //     this.props.history.push(`/serch/${this.props.query}`)
                //   }
              >
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i id="search-icon" class="bi bi-search"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    id="query"
                    value={this.props.query}
                    onChange={this.props.handleChange}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                </InputGroup>
              </Form>
            </Nav>

            <Nav className="mr-auto down-scale">
              <Nav.Link href="/home">
                <i className="bi bi-house-door-fill"></i>
                <span>Home</span>
              </Nav.Link>

              <Nav.Link>
                <i className="bi bi-people-fill"></i>
                <span>Network</span>
              </Nav.Link>
              <Nav.Link>
                <i className="bi bi-briefcase-fill"></i> <span>Jobs</span>
              </Nav.Link>
              <Nav.Link>
                <i className="bi bi-chat-dots-fill"></i>
                <span>Messaging</span>
              </Nav.Link>
              <Nav.Link>
                <i className="bi bi-bell-fill"></i>
                <span>Notifications</span>
              </Nav.Link>

              <Nav.Link href="/profile/me">
                <i className="bi bi-person-circle"></i> <span> Me</span>
              </Nav.Link>

              <Nav.Link id="work-icon">
                <i className="bi bi-grid-3x3-gap-fill"></i> <span> Work</span>
              </Nav.Link>
              <Nav.Link id="reactivate">
                <span>
                  Reactivate <br /> Premium
                </span>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default MyNav;

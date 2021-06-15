import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Feed from "./Feed/Feed";
import MainFeed from "./MainFeed/MainFeed";
import SidebarLeftMain from "./SidebarLeft/SidebarLeftMain";
import "./SidebarLeft/SidebarLeft.css";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={3}>
              <SidebarLeftMain />
            </Col>
            <Col xs={6}>
              {" "}
              <MainFeed />
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Container>
      </>
    );
  }
}

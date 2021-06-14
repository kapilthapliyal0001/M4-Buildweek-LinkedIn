import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

import "./JumboProfile.css";
export default class YourDashBoardProfile extends Component {
  render() {
    return (
      <>
        <Card className="my-2" id="dasboardProfile">
          <Card.Title id="dasboardProfile_title" className="mt-1">
            <span>{this.props.title}</span>
            <Pencil />
          </Card.Title>
          <Card.Body id="dasboardProfile_body">
            <Row id="rowone">
              <Col>1</Col>
              <Col>1</Col>
              <Col>1</Col>
            </Row>
            <Row id="rowtwo">
              <Col>1</Col>
              <Col>1</Col>
              <Col>1</Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
}

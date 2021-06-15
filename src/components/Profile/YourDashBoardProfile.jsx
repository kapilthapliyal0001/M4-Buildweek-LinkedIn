import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BookmarkFill, PeopleFill, BroadcastPin } from "react-bootstrap-icons";

import "./ProfilePage.css";
export default class YourDashBoardProfile extends Component {
  render() {
    return (
      <>
        <Card className="my-2" id="dasboardProfile">
          <Card.Title id="dasboardProfile_title" className="mt-1 p-0">
            <span>{this.props.title}</span>
            <br />
            <span>
              <em>Private to you</em>
            </span>
          </Card.Title>
          <Card.Body id="dasboardProfile_body">
            <Row id="rowone">
              <Col>
                <h2>19</h2>
                <span>Who Viewed Your Profile</span>
              </Col>
              <Col>
                <h2>52</h2>
                <span>Post Views</span>
              </Col>
              <Col>
                <h2>4</h2>
                <span>Search Appereances</span>
              </Col>
            </Row>
            <Row id="rowtwo">
              <Col>
                <Row className="p-2">
                  <Col className="p-0 text-center text-muted" xs={1}>
                    <BroadcastPin />
                  </Col>
                  <Col className="pl-2" xs={11}>
                    <span>Creator Mode: Off</span>
                    <br />
                    <span className="text-muted">
                      Grow your ausience and get discovered by highligting on
                      your profile
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className="p-2">
                  <Col className="p-0 text-center text-muted" xs={1}>
                    <PeopleFill />
                  </Col>
                  <Col className="pl-2" xs={11}>
                    <hr className="my-0" />
                    <span>My Network</span>
                    <br />
                    <span className="text-muted">
                      Manage your connections, events, and interests.
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className="p-2">
                  <Col className="p-0 text-center text-muted" xs={1}>
                    <BookmarkFill />
                  </Col>
                  <Col className="pl-2" xs={11}>
                    <hr className="my-1" />
                    <span>My Items</span>
                    <br />
                    <span className="text-muted">
                      Keep track of your jobs, courses and articles.
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
}

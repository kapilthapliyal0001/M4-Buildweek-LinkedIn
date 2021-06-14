import React, { Component } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import "./ProfilePage.css";
import ProfileExperienceSingle from "./ProfileExperienceSingle";

export default class ProfileExperience extends Component {
  render() {
    return (
      <>
        <Card className="my-2" id="expProfile">
          <Card.Title id="expProfile_title" className="mt-3 mb-3 mx-3">
            <span>{this.props.title}</span>
            <Plus id="editIcon" />
          </Card.Title>
          <Card.Body id="expProfile_body" className="pt-0 mt-0">
            <ProfileExperienceSingle />
            <ProfileExperienceSingle />
            <ProfileExperienceSingle />
          </Card.Body>
        </Card>
      </>
    );
  }
}

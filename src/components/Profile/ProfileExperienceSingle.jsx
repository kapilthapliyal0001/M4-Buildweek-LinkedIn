import { Card, Col, Row, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import React, { Component } from "react";

const ProfileExperienceSingle = () => {
  return (
    <>
      <hr className="mt-1 mb-2" />
      <Pencil id="editIcon" />
      <Row id="expProfileSingle">
        <Col xs={2}>
          <Image src="https://i.pravatar.cc/300" />
        </Col>
        <Col xs={10}>
          <p>Job Title</p>
          <p>Company</p>
          <p>Duration</p>
          <p>Location</p>
          <p>Job Description</p>
        </Col>
      </Row>
    </>
  );
};

export default ProfileExperienceSingle;

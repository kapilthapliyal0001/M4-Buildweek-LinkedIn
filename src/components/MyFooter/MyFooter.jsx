import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../MyFooter/MyFooter.css";
import LinkedInLogo from "../MyFooter/footer-LinkedIn.png";

const MyFooter = () => {
  return (
    <div>
      <Container className="footerBody">
        <Row className="footerLogo">
          <img src={LinkedInLogo} />
        </Row>
        <Row className="footer liItems">
          <Col xs={2}>
            <ul className="liItems">
              <li>ABout</li>
              <li>Community Guidelines</li>
              <li>ABout</li>
              <li>Sales Solutions</li>
              <li>Safety Center</li>
            </ul>
          </Col>
          <Col xs={2}>
            <ul className="liItems">
              <li>Accessibility</li>
              <li>Careers</li>
              <li>Ad Choices</li>
              <li>Mobile</li>
            </ul>
          </Col>
          <Col xs={2}>
            <ul className="liItems">
              <li>Talent Solutions</li>
              <li>Marketing Solutions</li>
              <li>Advertising</li>
              <li>Small Business</li>
            </ul>
          </Col>
          <Col xs={2}>
            <Image
              src={
                "https://via.placeholder.com/150C/O https://placeholder.com/"
              }
            />
            <span>Questions?</span>
          </Col>
          <Col xs={4}>searchbar</Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;

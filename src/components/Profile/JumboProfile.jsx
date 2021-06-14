import "bootstrap/dist/css/bootstrap.min.css";
import "./JumboProfile.css";

import React, { Component } from "react";
import { Card, Image, Nav } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
export default class JumboProfile extends Component {
  render() {
    return (
      <>
        <Card className="my-2 ">
          <div className="img-container"></div>
          <Card.Body>
            <Image className="avatar" src={this.props.img} />
            <Card.Title id="jumboProfile_title" className="mt-5">
              <h5>
                {this.props.name} {this.props.surname}
              </h5>{" "}
              <Pencil />
            </Card.Title>
            <Card.Text>
              <p>
                {this.props.title}
                <br />
              </p>
              <span className="location-line text-muted">
                {this.props.area} &#183; <a href="#">Contact Info</a>
              </span>
              <span></span>

              <p className="text-primary" id="jumboprofile_connections_text">
                <b>78 Connections</b>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

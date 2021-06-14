import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePage.css";

import React, { Component } from "react";
import { Card, Image, Nav, Button } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import ProfileJumboUpdater from "./ProfileJumboUpdater";
export default class ProfileJumbo extends Component {
  state = {
    showModalJumbo: false,
    showModalProfilePic: false,
  };
  closeJumboModal = () => {
    this.setState({ showModalJumbo: false });
  };
  render() {
    const { img, surname, name, title, area } = this.props;
    return (
      <>
        <Card className="my-2 ">
          <div className="img-container"></div>
          <Card.Body>
            <div id="jumboProfile_img">
              <Image src={img} />
            </div>
            <Card.Title id="jumboProfile_title" className="mt-5">
              <h5>
                {name} {surname}
              </h5>
              <Pencil onClick={() => this.setState({ showModalJumbo: true })} />
            </Card.Title>
            <Card.Text>
              <p>
                {title}
                <br />
              </p>
              <span className="location-line text-muted">
                {area} &#183; <a href="#">Contact Info</a>
              </span>
              <span></span>
              <p className="text-primary" id="jumboprofile_connections_text">
                <b>78 Connections</b>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <ProfileJumboUpdater
          open={this.state.showModalJumbo}
          close={this.closeJumboModal}
        />
      </>
    );
  }
}

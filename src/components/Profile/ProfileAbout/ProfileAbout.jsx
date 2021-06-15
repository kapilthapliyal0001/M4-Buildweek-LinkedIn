import React, { Component } from "react";
import { Card, Image, Nav } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

import ProfileAboutUpdater from "./AboutProfileUpdater";
import "../ProfilePage.css";
export default class ProfileAbout extends Component {
  state = {
    showModalAbout: false,
  };
  closeAboutModal = () => {
    this.setState({ showModalAbout: false });
  };
  render() {
    return (
      <>
        <Card className="my-2" id="aboutProfile">
          <Card.Title id="aboutProfile_title" className="mt-1">
            <span>{this.props.title}</span>
            <Pencil onClick={() => this.setState({ showModalAbout: true })} />
          </Card.Title>
          <Card.Body id="aboutProfile_body">
            <Card.Text>
              <p>{this.props.bio}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <ProfileAboutUpdater
          open={this.state.showModalAbout}
          close={this.closeAboutModal}
        />
      </>
    );
  }
}

import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";
export default class JumboProfile extends Component {
  render() {
    return (
      <div>
        <Card>
          <div className="img-container"></div>
          <Card.Body>
            <Image className="avatar" src={this.props.image} />
            {/* {props.isMe === "me" && <ProfilePicModal userId={props.userId} />} */}
            <Card.Title className="mt-5">
              {this.props.name} {this.props.surname}
            </Card.Title>
            <Card.Text>
              <p>
                {this.props.title}
                <br />
                Creating synergy between client expectations and product
                delivery
              </p>
              <p className="location-line">
                {this.props.area}
                <span className="text-primary">
                  <b>75 Connections • Contact info</b>
                </span>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

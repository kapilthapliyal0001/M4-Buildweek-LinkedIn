import React, { Component } from "react";
import ProfilePictureLoader from "../../Loaders/ProfilePictureLoader";
import { Image, Card } from "react-bootstrap";
import banner from "../../../banner.jpg";

export default class SidebarProfilePerson extends Component {
  render() {
    const { isLoading, image } = this.props;
    return (
      <>
        <Card.Header id="feedLeft-card-header" className="p-0">
          <Image className="feedLeft-cover-img" src={banner} />
          {isLoading === true ? (
            <ProfilePictureLoader />
          ) : (
            <Image className="feedLeft-profile-img" src={image} />
          )}
        </Card.Header>
      </>
    );
  }
}

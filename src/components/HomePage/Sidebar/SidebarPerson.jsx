import React, { Component } from "react";
import { Nav, Image, Button } from "react-bootstrap";
import ProfilePictureLoader from "../../Loaders/ProfilePictureLoader";

export default class SidebarPerson extends Component {
  render() {
    const { p } = this.props;
    return (
      <>
        {this.props.isLoading === true ? (
          <ProfilePictureLoader />
        ) : (
          <Nav.Link href={`/profile/${p._id}`} id="sidebar_person">
            <div key={p._id}>
              <div className="d-flex img-cont" id="sidebar_person">
                {p.image.includes("png" && "jpg" && "gif") === false ? (
                  <Image
                    id="sidebar_profile_img"
                    src={p.image}
                    alt="Linkdin Member"
                    fluid
                    roundedCircle
                  ></Image>
                ) : (
                  <Image
                    id="sidebar_profile_img"
                    src="https://i.pravatar.cc/300"
                    alt="Linkdin Member"
                    fluid
                  />
                )}

                <div className="profile-details ml-4 mb-2">
                  <div className="profile-name">
                    {p.name} {p.surname}
                    {p.id}
                  </div>
                  <div className="profile-title">{p.title}</div>
                  <div className="profile-message">
                    <Button
                      className="rounded-pill btn-sm"
                      variant="outline-dark"
                    >
                      + Follow
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Nav.Link>
        )}
      </>
    );
  }
}

import React, { Component } from "react";
//Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../ProfilePage.css";
import { Card, Image, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { withRouter } from "react-router-dom";
//Modals for Updating
import ProfileJumboUpdater from "./ProfileJumboUpdater";
import ProfilePicUpdater from "./ProfilePicUpdater";
import banner from "../../../banner.jpg";
import ThreeDotsLoader from "../../Loaders/ThreeDotsLoader";
class ProfileJumbo extends Component {
  state = {
    showModalJumbo: false,
    showModalProfilePic: false,
    showContactInfoModal: false,
  };
  closeJumboModal = () => {
    this.setState({ showModalJumbo: false, showProfilePicModal: false });
  };
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  render() {
    // const toRender = this.props.match.params.id;
    const { image, surname, name, title, area, username, email, bio } =
      this.props;
    return (
      <>
        <Card className="my-2 ">
          <div id="jumboProfile_header">
            <Image src={banner} />
          </div>
          <Card.Body>
            {this.props.match.params.id === "me" ? (
              <div
                id="jumboProfile_img"
                onClick={() => this.setState({ showProfilePicModal: true })}
              >
                <Image src={image} />
              </div>
            ) : (
              <div id="jumboProfile_img">
                <Image src={image} />
              </div>
            )}

            <Card.Title id="jumboProfile_title" className="mt-5">
              <h5>
                {name} {surname}
              </h5>
              {this.props.match.params.id === "me" ? (
                <Pencil
                  id="pencil-icon"
                  onClick={() => this.setState({ showModalJumbo: true })}
                />
              ) : (
                <></>
              )}
            </Card.Title>
            <Card.Text>
              <p>{title}</p>
              <span className="location-line text-muted">
                {area} &#183;{" "}
                <a
                  type="button"
                  onClick={() => this.setState({ showContactInfoModal: true })}
                >
                  Contact Info
                </a>
              </span>
              <span></span>
              <p className="text-primary" id="jumboprofile_connections_text">
                <b>{this.getRandomInt(20, 450)} Connections</b>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <ProfileJumboUpdater
          area={area}
          name={name}
          title={title}
          username={username}
          surname={surname}
          image={image}
          bio={bio}
          open={this.state.showModalJumbo}
          close={this.closeJumboModal}
        />
        <ProfilePicUpdater
          image={image}
          open={this.state.showProfilePicModal}
          close={this.closeJumboModal}
        />
        <Modal
          size="sm"
          show={this.state.showContactInfoModal}
          onHide={() => this.setState({ showContactInfoModal: false })}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Contact info
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{username}</p>
            <p>{email}</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default withRouter(ProfileJumbo);

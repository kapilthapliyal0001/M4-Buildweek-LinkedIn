import React, { Component } from "react";
import { Col, Row, Container, Button, Modal } from "react-bootstrap";

import ProfileJumbo from "./Profile/ProfileJumbo/ProfileJumbo";
import ProfileAbout from "./Profile/ProfileAbout/ProfileAbout";
import YourDashBoardProfile from "./Profile/YourDashBoardProfile";
import ProfileUpdater from "./Profile/ProfileJumbo/ProfileJumboUpdater";
import ProfileExperience from "./Profile/ProfileExperience/ProfileExperience";
import Sidebar from "./Sidebar/Sidebar";
import { withRouter } from "react-router-dom";
import MyLoader from "./MyLoader";
class ProfilePage extends Component {
  state = {
    user: {},
    isLoading: false,
    showContactInfoModal: false,
  };

  componentDidMount = async () => {
    const userID =
      this.props.match.params.id === "me"
        ? "60c73bf1291930001560aba3"
        : this.props.match.params.id;
    // const userId = "60c73bf1291930001560aba3";
    const endpointGetMyProfile = `https://striveschool-api.herokuapp.com/api/profile/${userID}`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

    try {
      let getResponse = await fetch(endpointGetMyProfile, {
        headers: {
          Authorization: bearerTokenHedri,
          "Content-Type": "application/json",
        },
      });

      let myProfileData = await getResponse.json();
      console.log(myProfileData);
      this.setState({ user: myProfileData });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate = async () => {};

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Row>
                <ProfileUpdater />
                <Col xs={8} className="mt-2">
                  {/* Main Post Feed Stats */}
                  {/* Main Post Feed Ends */}
                  <ProfileJumbo
                    userId={this.state.user._id}
                    name={this.state.user.name}
                    surname={this.state.user.surname}
                    image={this.state.user.image}
                    bio={this.state.user.bio}
                    title={this.state.user.bio}
                    area={this.state.user.area}
                    username={this.state.user.username}
                  />
                  {this.state.user === "" ? (
                    <MyLoader />
                  ) : (
                    <ProfileAbout bio={this.state.user.bio} title="About" />
                  )}
                  {this.props.match.params.id === "me" ? (
                    <YourDashBoardProfile title="Your Dashboard" />
                  ) : (
                    <>
                      <MyLoader />
                    </>
                  )}
                  <ProfileExperience title="Experience" />
                </Col>
                <Col xs={4} className="mt-2">
                  <Sidebar />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Button onClick={() => this.setState({ showContactInfoModal: true })}>
          Small modal
        </Button>
        <Modal
          size="sm"
          show={this.state.showContactInfoModal}
          onHide={() => this.setState({ showContactInfoModal: false })}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </>
    );
  }
}
export default withRouter(ProfilePage);

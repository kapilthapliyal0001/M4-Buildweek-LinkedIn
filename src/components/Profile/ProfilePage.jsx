import React, { Component } from "react";
import { Col, Row, Container, Button, Modal } from "react-bootstrap";

import ProfileJumbo from "./ProfileJumbo/ProfileJumbo";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import YourDashBoardProfile from "./YourDashBoardProfile";
import ProfileUpdater from "./ProfileJumbo/ProfileJumboUpdater";
import ProfileExperience from "./ProfileExperience/ProfileExperience";
import Sidebar from "./Sidebar/Sidebar";
import { withRouter } from "react-router-dom";
import MyLoader from "../Loaders/MyLoader";
class ProfilePage extends Component {
  state = {
    user: {},
    isLoading: false,
  };

  componentDidMount = async () => {
    const userID =
      this.props.match.params.id === "me"
        ? "60c8aef9a3a3d700151cb054"
        : this.props.match.params.id;
    // const userId = "60c73bf1291930001560aba3";

    this.setState({ isLoading: true });
    const endpointGetMyProfile = `https://striveschool-api.herokuapp.com/api/profile/${userID}`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I";
    try {
      let getResponse = await fetch(endpointGetMyProfile, {
        headers: {
          Authorization: bearerTokenHedri,
          "Content-Type": "application/json",
        },
      });

      let myProfileData = await getResponse.json();
      console.log(myProfileData);
      this.setState({ user: myProfileData, isLoading: false });
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
                <Col xs={8}>
                  {this.state.isLoading === true ? (
                    <MyLoader />
                  ) : (
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
                  )}
                  {this.state.isLoading === true ? (
                    <MyLoader />
                  ) : (
                    <ProfileAbout bio={this.state.user.bio} title="About" />
                  )}
                  {this.props.match.params.id === "me" ? (
                    this.state.isLoading !== true ? (
                      <YourDashBoardProfile title="Your Dashboard" />
                    ) : (
                      <>
                        <MyLoader />
                      </>
                    )
                  ) : (
                    <></>
                  )}
                  {this.state.isLoading === true ? (
                    <MyLoader />
                  ) : (
                    <ProfileExperience title="Experience" />
                  )}
                </Col>
                <Col xs={4} className="mt-2">
                  <Sidebar user={this.state.user} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Button>Small modal</Button>
      </>
    );
  }
}
export default withRouter(ProfilePage);

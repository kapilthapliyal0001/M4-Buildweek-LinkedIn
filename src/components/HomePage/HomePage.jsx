import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Feed from "./Feed/Feed";
import MainFeed from "./MainFeed/MainFeed";
import SidebarLeftMain from "./SidebarLeft/SidebarLeftMain";
import "./SidebarLeft/SidebarLeft.css";
import Sidebar from "../Sidebar/Sidebar";
import PostFeed from "./PostFeed/PostFeed";
import MyLoader from "../MyLoader";
export default class HomePage extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    try {
      const bearerTokenHedri =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.match.params.id}`,
        {
          headers: {
            Authorization: bearerTokenHedri,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("This is sidebar profile data", data);
        this.setState({ user: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate = async (prevProps) => {
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

    if (prevProps.match.params.id === this.props.match.params.id) {
      return;
    }
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.match.params.id}`,
        {
          headers: {
            Authorization: bearerTokenHedri,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ user: data });
      }
    } catch (error) {
      console.log(error);
    }

    const userId =
      this.props.match.params.id === "me"
        ? this.state.user._id
        : this.props.match.params.id;

    try {
      const xpResponse = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
          },
        }
      );
      if (xpResponse.ok) {
        const xpData = await xpResponse.json();
        this.setState({ userExperiences: xpData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <Container>
          <Row>
            <Col xs={3}>
              <SidebarLeftMain user={user} />
            </Col>
            <Col xs={6}>
              <MyLoader />
              <PostFeed id={user} />
              <MainFeed />
            </Col>
            <Col xs={3}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
